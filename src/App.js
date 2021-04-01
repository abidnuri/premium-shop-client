import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Footer from './components/Footer/Footer';
import SingleProduct from './components/SingleProduct/SingleProduct';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import NoMatch from './components/NoMatch/NoMatch'
import ProductDetails from './components/ProductDetails/ProductDetails';
import AddProduct from './components/AddProduct/AddProduct';
import Admin from './components/Admin/Admin';
import SignIn from './components/SignIn/SignIn';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Deals from './components/Deals/Deals';

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  <p className="mt-5 pt-5">Logged in User: {loggedInUser.name}</p>
  console.log(loggedInUser);
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
         <Header /> 
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/single">
            <SingleProduct />
          </Route>
          <Route path="/deals">
            <Deals />
          </Route>
          <Route path="/productdetails/:productId">
            <ProductDetails />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </userContext.Provider >
  );
}

export default App;
