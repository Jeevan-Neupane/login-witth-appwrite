import React from "react";
import styled from "styled-components";
import Input from "../reuseable/Input";
import { useForm } from "react-hook-form";
import authService from "../appwrite/auth";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/slice/userSlice";

const SignUpFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const SignUpButton = styled.button`
  background-color: #333;
  color: white;
  padding: 12px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  margin-top: 10px;
  &:hover {
    background-color: #555;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 16px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const SignUpForm = () => {
  const { register, handleSubmit, formState } = useForm();
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  console.log(error);
  const { errors } = formState;
  const onSubmit = async (data) => {
    try {
      const user = await authService.createAccount(data);
      if (user) {
        dispatch(login(user));
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const validatePassword = (value) => {
    if (!value) {
      return "Password is required";
    }
    if (value.length < 8) {
      return "Password must be at least 8 characters long";
    }

    return true;
  };

  return (
    <SignUpFormContainer
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <InputWrapper>
        <Input
          label='Full Name'
          placeholder='Enter your Full Name'
          {...register("username", {
            required: {
              value: true,
              message: "Required",
            },
            pattern: {
              value: /^[a-zA-Z]+$/,
              message: "Username contains a-z and A-Z only",
            },
          })}
        />
        {errors?.username?.message && (
          <ErrorMessage>{errors?.username?.message}</ErrorMessage>
        )}
      </InputWrapper>

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
            pattern: {
              value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
              message: "Invalid One",
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
            validate: validatePassword,
            pattern: {
              value: /[@#!%^&*()]/,
              message: "Must contain special symbol",
            },
          })}
        />
        {errors?.password?.message && (
          <ErrorMessage>{errors?.password?.message}</ErrorMessage>
        )}
      </InputWrapper>

      <ErrorMessage>{error}</ErrorMessage>

      <SignUpButton>Sign Up</SignUpButton>
    </SignUpFormContainer>
  );
};

export default SignUpForm;
