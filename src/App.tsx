import React from 'react';

//Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Styles
import { GlobalStyle } from './GlobalStyle';

//Components
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';

const App: React.FC = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/:movieId" element={<Movie />}></Route>
      <Route path="/*" element={<NotFound />}></Route>
    </Routes>

    <GlobalStyle />
  </Router>
);

export default App;
