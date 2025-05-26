import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div`
  background-color: #f0f0f0; // Ubah sesuai kebutuhan
  padding: 40px;
  text-align: center;
`;

const Banner = () => (
  <BannerContainer>
    <h2>NEW ARRIVALS</h2>
    <h3>NEW STYLE FOR LAMP</h3>
    <p>Claritas est etiam processus dynamicus, qui sequitur mutationem.</p>
    <button>Shop Now</button>
  </BannerContainer>
);

export default Banner;