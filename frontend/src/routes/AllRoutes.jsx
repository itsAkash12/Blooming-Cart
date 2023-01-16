import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage></Homepage>}></Route>
      <Route path="*" element={<h1>Page Not Found</h1>}></Route>
    </Routes>
  );
}
