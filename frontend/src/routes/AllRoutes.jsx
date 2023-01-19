import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import TopNavbar from "../components/Navbar/TopNavbar";
import CartPage from "../pages/Cart/Cart";
import { ShopingCart } from "../pages/Cart/ShopingCart";
import Homepage from "../pages/Homepage";
import Signup from "../pages/Signup"
import Login from "../pages/Login"
import PaymentsPage from "../pages/Cart/PaymentsPage";
import { Delivery } from "../pages/Cart/Delivery";

export default function AllRoutes() {
  return (
    <Box>
      <TopNavbar />
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/payments" element={<PaymentsPage />}></Route>
        <Route path="/shoping" element={<ShopingCart />}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/payment" element={<PaymentsPage />}></Route>
        <Route path="/delivery" element={<Delivery />}></Route>
        <Route path="*" element={<h1>Page Not Found</h1>}></Route>
      </Routes>
    </Box>

  );
}
