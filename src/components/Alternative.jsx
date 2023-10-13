import styled from "styled-components";

const AlterNativeDiv = styled.div`
  min-height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  background-color: #eee;
  color: 333;
`;

const AlterNative = ({ children }) => {
  return <AlterNativeDiv>{children}</AlterNativeDiv>;
};

export default AlterNative;
