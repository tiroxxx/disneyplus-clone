import styled from 'styled-components';
import { selectLogin } from '../features/login/loginSlice';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setLogout } from '../features/login/loginSlice';
import { useDispatch } from 'react-redux';

function Header() {
  const dispatch = useDispatch();
  const loggedIn = useSelector(selectLogin);
  console.log(loggedIn);

  function handleLogout() {
    dispatch(setLogout());
  }

  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <Link to="/">
          <img src="/images/home-icon.svg" alt="" />
          <span>HOME</span>
        </Link>
        <Link to="/">
          <img src="/images/search-icon.svg" alt="" />
          <span>SEARCH</span>
        </Link>
        <Link to="/">
          <img src="/images/wattchlist-icon.svg" alt="" />
          <span>WATCHLIST</span>
        </Link>
        <Link to="/">
          <img src="/images/original-icon.svg" alt="" />
          <span>ORIGINALS</span>
        </Link>
        <Link to="/">
          <img src="/images/movie-icon.svg" alt="" />
          <span>MOVIES</span>
        </Link>
        <Link to="/">
          <img src="/images/series-icon.svg" alt="" />
          <span>SERIES</span>
        </Link>
      </NavMenu>
      {loggedIn ? (
        <UserImg onClick={handleLogout} src="/images/mickey.png" />
      ) : (
        <StyledLink to="/login">
          <Login>LOGIN</Login>
        </StyledLink>
      )}
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

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;
