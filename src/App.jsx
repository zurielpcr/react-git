import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import ProductList from './components/ProductList';
import './index.css'; // atau TailwindCSS jika sudah setup

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <ProductList />
    </div>
  );
};

export default App;
<h1>Vite + React Zuriel</h1>