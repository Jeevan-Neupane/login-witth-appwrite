import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import styled from "styled-components";
import AuthLayout from "./layout/AuthLayout";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import About from "./pages/About";

import { useDispatch } from "react-redux";
import { login, logout } from "./store/slice/userSlice";
import authService from "./appwrite/auth";
import { useEffect, useState } from "react";
const MainDiv = styled.div``;

const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path='/'
        element={<Layout />}
      >
        <Route
          index
          element={<HomePage />}
        />
        <Route
          path='/products'
          element={
            <AuthLayout>
              <Products />
            </AuthLayout>
          }
        />
        <Route
          path='/contact'
          element={
            <AuthLayout>
              <Contact />
            </AuthLayout>
          }
        />

        <Route
          path='/login'
          element={<LoginPage />}
        />

        <Route
          path='/signup'
          element={<SignUpPage />}
        />
        <Route
          path='/about'
          element={<About />}
        />
      </Route>
    )
  );
  useEffect(() => {
    authService
      .getCurrentUser()
      .then((user) => {
        if (user) {
          dispatch(login(user));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <MainDiv>
      {loading ? <h1>Loading...</h1> : <RouterProvider router={router} />}
    </MainDiv>
  );
};

export default App;
