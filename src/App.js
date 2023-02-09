import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Calendar  from './pages/Calendar';
import Events from './pages/Events';
import AppBar from './components/AppBar/AppBar';
import { Container } from '@mui/material';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <BrowserRouter>

    <div className='App'>
      <AppBar/>
      <Container sx={{marginY:5}}>
          <Routes>
            <Route path="/" element={<Calendar/>} />
            <Route path="/events" element={<Events/>} /> 
          </Routes>

      </Container>
      <Footer />  

      

    </div>
    </BrowserRouter>

  );
}

export default App;
