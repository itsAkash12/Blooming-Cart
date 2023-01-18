import { Route, Routes } from "react-router-dom";
import CartPage from "../pages/Cart/Cart";
import { ShopingCart } from "../pages/Cart/ShopingCart";
import Homepage from "../pages/Homepage";
import PaymentsPage from "../pages/Cart/PaymentsPage";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage></Homepage>}></Route>
      <Route path="/cart" element={<CartPage/>}></Route>
      <Route path="/payments" element={<PaymentsPage/>}></Route>
      <Route path="/shoping" element={<ShopingCart/>}></Route>
      <Route path="*" element={<h1>Page Not Found</h1>}></Route>
    </Routes>
  );
}
