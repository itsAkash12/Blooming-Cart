import './App.css';
import { Box } from '@chakra-ui/react';
import AllRoutes from "./routes/AllRoutes";
import Navbar from "./components/Navbar/Navbar"
import Indvidual from './pages/Indvidual';

function App() {
  return (
    <Box className="App">
      <AllRoutes />
      {/* <Indvidual/> */}
    </Box>
  );
}

export default App;
