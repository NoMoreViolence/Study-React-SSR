import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from 'shared/App';

// 웹 어플리케이션에 BrowserRouter 적용, 나중에 리덕스를 연결 할 때 여기서 연결할 것임

const Root = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default Root;
