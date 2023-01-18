import './App.css';
import { Box } from '@chakra-ui/react';
import AllRoutes from "./routes/AllRoutes";
import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer"
import Indvidual from './pages/Indvidual';

function App() {
  return (
    <Box className="App">
      <Indvidual/>
    </Box>
  );
}

export default App;
