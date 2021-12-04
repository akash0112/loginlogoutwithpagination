import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/welcome/Welcome";
import Header from "./components/header/Header";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
// import PrivateRoute from './components/privateroute/PrivateRoute';
import Products from "./components/products/Products";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoutes from "./components/privateroute/PrivateRoute";
import Family from "./components/families/Family";
import Locations from "./components/location/Locations";
import { useSelector } from "react-redux";
import Transactions from "./components/transactions/Transactions";
function App() {
  const email = useSelector((state) => state.auth.email);
  const token = localStorage.getItem("token");
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Header auth={token} email={email} />
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login email={email} />} />
          <Route
            path="/product"
            element={
              <PrivateRoutes auth={token}>
                <Products />
              </PrivateRoutes>
            }
          />
          <Route
            path="/families"
            element={
              <PrivateRoutes auth={token}>
                <Family />
              </PrivateRoutes>
            }
          />
          <Route
            path="/locations"
            element={
              <PrivateRoutes auth={token}>
                <Locations />
              </PrivateRoutes>
            }
          />
           <Route
            path="/transaction"
            element={
              <PrivateRoutes auth={token}>
                <Transactions/>
              </PrivateRoutes>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
