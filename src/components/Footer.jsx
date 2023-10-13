// Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  text-align: center;

  @media (max-width: 768px) {
    padding: 10px 0;
  }
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterText>
        © {new Date().getFullYear()}  All Rights Reserved.
      </FooterText>
      <FooterText>
        Website by <FooterLink >Jeevan Neupane</FooterLink>
      </FooterText>
    </FooterWrapper>
  );
};

export default Footer;
