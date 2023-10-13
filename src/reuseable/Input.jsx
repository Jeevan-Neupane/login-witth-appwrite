import React, { forwardRef, useId } from "react";
import styled from "styled-components";

const Container = styled.div`
 display: flex;
  flex-direction: column;
  

  background-color: white;
  
  border-radius: 8px;

`;

const InputField = styled.input`
 
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Label = styled.label`
  margin-bottom: 8px;
  font-weight: bold;
  color: #333; 
  font-size:16px;
`;

const Input = ({ label, type = "text", ...props }, ref) => {
  const id = useId();
  return (
    <Container>
      {label && <Label htmlFor={id}>{label}</Label>}
      <InputField
        type={type}
        id={id}
        {...props}
        ref={ref}
      />
    </Container>
  );
};

export default forwardRef(Input);
