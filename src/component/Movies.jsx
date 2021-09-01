import styled from 'styled-components';
import { selectMovies } from '../features/movie/movieSlice';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Movies({ title, type }) {
  const movies = useSelector(selectMovies);
  const filteredMovies = movies.filter((movie) => movie.type == type);

  return (
    <Container>
      <h4>{title}</h4>
      <Content>
        {movies &&
          filteredMovies.map((movie, idx) => (
            <Wrap key={idx}>
              <Link to={`/detail/${movie.id}`}>
                <img src={movie.cardImg} alt="" />
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div`
  margin-bottom: 20px;
  overflow: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Content = styled.div`
  overflow: hidden;
  padding: 20px;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  overflow-x: scroll;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px,
    rgb(0 0 0 / 73%) 0 16px 10px -10px;
  transition: all 0.25s ease-out;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 80%) 0 40px 58px -16px,
      rgb(0 0 0 / 73%) 0 30px 22px -10px;
  }
`;
