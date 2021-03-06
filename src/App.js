import './App.css';
import NotFound from './Components/NotFound/NotFound';
import { createContext, useState } from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import SignIn from './Components/SignIn/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddProduct from './Components/AddProduct/AddProduct';
import LoadProduct from './Components/LoadProduct/LoadProduct';
import Checkout from './Components/Checkout/Checkout';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Orders from './Components/Orders/Orders';
import Admin from './Components/Admin/Admin';
import EditProduct from './Components/EditProduct/EditProduct';
import Deals from './Components/Deals/Deals';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export const UserContext = createContext();

function App() {
  const [loggedinUser, setLoggedinUser] = useState({});
  return (
    <UserContext.Provider value={[loggedinUser, setLoggedinUser]}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/deals">
            <Deals />
          </Route>
          <PrivateRoute path="/checkout/:_id">
            <Checkout />
          </PrivateRoute >
          <PrivateRoute path="/orders">
            <Orders />
          </PrivateRoute >
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute >
          <PrivateRoute path="/editproduct">
            <EditProduct />
          </PrivateRoute >

          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/addProduct">
            <AddProduct />
          </Route>
          <Route path="/loadProduct">
            <LoadProduct />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </UserContext.Provider>
  );
}

export default App;
