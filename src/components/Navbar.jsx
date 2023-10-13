import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LogoutBtn from "./LogoutButton";

const PageWrapper = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  color: #333;
`;
const Header = styled.header`
  background-color: #333;
  color: #fff;
  padding: 10px 0;
  text-align: center;
  
`;

const Nav = styled.li`
  background-color: #444;
  text-align: center;
  padding: 10px 0;
  display: flex;
  align-items:center;
  justify-content:center;
`;

const NavItem = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  margin: 0 20px;
`;
const Navbar = () => {
  const { user } = useSelector((state) => {
    return state.user;
  });

  const navItems = [
    {
      name: "Home",
      to: "/",
      active: true,
    },
    {
      name: "Login",
      to: "/login",
      active: !user,
    },
    {
      name: "Signup",
      to: "/signup",
      active: !user,
    },
    {
      name: "All Products",
      to: "/products",
      active: !!user,
    },
    {
      name: "About",
      to: "/about",
      active: true,
    },
    {
      name: "Contact",
      to: "/contact",
      active: !!user,
    },
  ];

  return (
    <PageWrapper>
      <Header>
        <h1>E-commerce Website</h1>
      </Header>
      <Nav>
        {navItems.map((item) => {
          return item.active ? (
            <NavItem
              key={item.name}
              to={item.to}
            >
              {item.name}
            </NavItem>
          ) : null;
        })}
        {user && <LogoutBtn />}
      </Nav>
    </PageWrapper>
  );
};

export default Navbar;
