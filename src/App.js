import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import { getTestimonials } from './actions/testimonials';
import MainPage from './MainPage';

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTestimonials());
    }, [dispatch]);
  return (
    <div  className='app'>
      <MainPage />
    </div>
  );
};

export default App;
