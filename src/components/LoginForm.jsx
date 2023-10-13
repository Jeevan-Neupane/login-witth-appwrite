import styled from "styled-components";
import Input from "../reuseable/Input";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../store/slice/userSlice";
import authService from "../appwrite/auth";
import { useNavigate } from "react-router-dom";

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  button {
    background-color: #333;
    color: white;
    padding: 12px;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s ease;
    min-width: 600px;
    &:hover {
      background-color: #555;
    }
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 16px;
  margin-bottom: 10px;
`;

const Login = () => {
  const { register, handleSubmit, formState } = useForm();
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(error);
  const onSubmit = async (data) => {
    try {
      const user = await authService.login(data);
      if (user) {
        dispatch(login(user));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const { errors } = formState;
  return (
    <LoginForm onSubmit={handleSubmit(onSubmit)}>
      <InputWrapper>
        <Input
          label='Email'
          type='email'
          placeholder='Enter your Email'
          {...register("email", {
            required: {
              value: true,
              message: "Required",
            },
          })}
        />
        {errors?.email?.message && (
          <ErrorMessage>{errors?.email?.message}</ErrorMessage>
        )}
      </InputWrapper>
      <InputWrapper>
        <Input
          type='password'
          label='Password'
          placeholder='Enter your password'
          {...register("password", {
            required: {
              value: true,
              message: "Required",
            },
          })}
        />
        {errors?.password?.message && (
          <ErrorMessage>{errors?.password?.message}</ErrorMessage>
        )}
      </InputWrapper>
      <ErrorMessage>{error}</ErrorMessage>
      <button type='submit'>Login</button>
    </LoginForm>
  );
};

export default Login;
