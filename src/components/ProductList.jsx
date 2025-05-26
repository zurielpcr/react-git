import React from 'react';
import styled from 'styled-components';

const ProductContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
`;

const ProductCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  width: 200px; // Sesuaikan ukuran
`;

const ProductList = () => (
  <ProductContainer>
    <ProductCard>
      <h3>Erenhome Deco</h3>
      <p>From: $167.00</p>
    </ProductCard>
    <ProductCard>
      <h3>Mega Sale Off Up To</h3>
      <p>Discounts Available</p>
    </ProductCard>
    <ProductCard>
      <h3>Creative Table Design</h3>
      <p>From: $167.00</p>
    </ProductCard>
  </ProductContainer>
);

export default ProductList;