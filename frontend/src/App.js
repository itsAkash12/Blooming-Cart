import './App.css';
import { Box } from '@chakra-ui/react';
import AllRoutes from "./routes/AllRoutes";
import Navbar from './components/Navbar';
import Footer from "./components/Footer"

function App() {
  return (
    <Box className="App">
      <Navbar></Navbar>
      <AllRoutes />
      <Footer></Footer>
    </Box>
  );
}

export default App;
