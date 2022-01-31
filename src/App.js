import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import Destination from './views/Destination';
import Crew from './views/Crew';
import Technology from './views/Technology';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path={'/'} element={<Home />} />
          <Route path={'/destination'} element={<Destination />} />
          <Route path={'/crew'} element={<Crew />} />
          <Route path={'/technology'} element={<Technology />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
