// HeroBanner.js
import React from 'react';
import styled from 'styled-components';

const PageWrapper = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  color: #333;
`;



const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const ProductCard = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ProductTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const ProductDescription = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
`;

const ProductPrice = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const HeroBanner = () => {
  return (
    <PageWrapper>
     
      <Container>
        <h2>Featured Products</h2>
        <ProductGrid>
          <ProductCard>
            <ProductTitle>Product 1</ProductTitle>
            <ProductDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ProductDescription>
            <ProductPrice>$19.99</ProductPrice>
          </ProductCard>
          <ProductCard>
            <ProductTitle>Product 2</ProductTitle>
            <ProductDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ProductDescription>
            <ProductPrice>$29.99</ProductPrice>
          </ProductCard>
          <ProductCard>
            <ProductTitle>Product 2</ProductTitle>
            <ProductDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ProductDescription>
            <ProductPrice>$29.99</ProductPrice>
          </ProductCard>
          <ProductCard>
            <ProductTitle>Product 2</ProductTitle>
            <ProductDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ProductDescription>
            <ProductPrice>$29.99</ProductPrice>
          </ProductCard>
          <ProductCard>
            <ProductTitle>Product 2</ProductTitle>
            <ProductDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ProductDescription>
            <ProductPrice>$29.99</ProductPrice>
          </ProductCard>
          <ProductCard>
            <ProductTitle>Product 2</ProductTitle>
            <ProductDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ProductDescription>
            <ProductPrice>$29.99</ProductPrice>
          </ProductCard>
          <ProductCard>
            <ProductTitle>Product 2</ProductTitle>
            <ProductDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ProductDescription>
            <ProductPrice>$29.99</ProductPrice>
          </ProductCard>
          <ProductCard>
            <ProductTitle>Product 2</ProductTitle>
            <ProductDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ProductDescription>
            <ProductPrice>$29.99</ProductPrice>
          </ProductCard>
          <ProductCard>
            <ProductTitle>Product 2</ProductTitle>
            <ProductDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ProductDescription>
            <ProductPrice>$29.99</ProductPrice>
          </ProductCard>
          
        </ProductGrid>
      </Container>
    </PageWrapper>
  );
};

export default HeroBanner;
