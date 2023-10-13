import React from "react";
import SignUpForm from "../components/SignUpFom";
import styled from "styled-components";

const Div = styled.div`
  margin: 20px 0;
`;

function SignUpPage() {
  return (
    <Div>
      <SignUpForm />
    </Div>
  );
}

export default SignUpPage;
