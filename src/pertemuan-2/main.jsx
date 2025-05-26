import React from 'react';
import ReactDOM from 'react-dom/client';
import HelloWorld from './HelloWorld';
import { MyTable } from './HelloWorld';
import { createRoot } from "react-dom/client";
import './custom.css';
import Container from './Container';

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<HelloWorld />);

createRoot(document.getElementById("root"))
    .render(
        <div>
            <Container><HelloWorld/></Container>
            
        </div>
    )