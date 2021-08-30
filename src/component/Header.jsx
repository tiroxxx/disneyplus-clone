import { useState } from 'react';
import styled from 'styled-components';
import { selectLogin } from '../features/login/loginSlice';


function Header() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <a href="#home">
          <img src="/images/home-icon.svg" alt="" />
          <span>HOME</span>
        </a>
        <a href="#search">
          <img src="/images/search-icon.svg" alt="" />
          <span>SEARCH</span>
        </a>
        <a href="#watchlist">
          <img src="/images/wattchlist-icon.svg" alt="" />
          <span>WATCHLIST</span>
        </a>
        <a href="#originals">
          <img src="/images/original-icon.svg" alt="" />
          <span>ORIGINALS</span>
        </a>
        <a href="#movies">
          <img src="/images/movie-icon.svg" alt="" />
          <span>MOVIES</span>
        </a>
        <a href="#series">
          <img src="/images/series-icon.svg" alt="" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      {loggedIn ? <UserImg src="/images/mickey.png" /> : <Login>LOGIN</Login>}
    </Nav>
  );
}

export default Header;

// STYLES
const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    color: inherit;
    text-decoration: none;

    img {
      height: 20px;
    }

    span {
      position: relative;
      font-size: 13px;
      letter-spacing: 1.42px;

      &:after {
        content: '';
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform: scaleX(0);
        transform-origin: left center;
        transition: all 0.25s ease-out;
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;

const Login = styled.div`
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.25s ease-out;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;
