import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  const activeStyle = {
    color: 'green',
    fontSize: '2rem'
  };
  // NavLink는 URL이 활성화 되었을 때 스타일을 지정할 수 있다
  return (
    <div>
      <ul>
        <li>
          <NavLink exact to="/" activeStyle={activeStyle}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/about" activeStyle={activeStyle}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/about/foo" activeStyle={activeStyle}>
            About Foo
          </NavLink>
        </li>
        <li>
          <NavLink to="/posts" activeStyle={activeStyle}>
            Posts
          </NavLink>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default Menu;
