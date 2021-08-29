import { useEffect } from 'react';
import styled from 'styled-components';
import ImageSlider from './ImageSlider';
import Categories from './Categories';
import Movies from './Movies';
import db from '../firebase';
import { useDispatch } from 'react-redux';
import { setMovies } from '../features/movie/movieSlice';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    // db.collection('movies').onSnapshot((snapshot) => {
    //   const tempMovies = snapshot.docs.map((doc) => {
    //     return { id: doc.id, ...doc.data() };
    //   });
    //   dispatch(setMovies(tempMovies));
    // });
  });

  return (
    <Container>
      <ImageSlider />
      <Categories />
      <Movies />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  overflow-x: hidden;
  position: relative;
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);

  &:before {
    content: '';
    background: url('/images/home-background.png') center / cover no-repeat
      fixed;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: -1;
  }
`;
