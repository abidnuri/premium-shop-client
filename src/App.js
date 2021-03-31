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

function App() {
  return (
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
        <Route path="/product/:id">
          <ProductDetails />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/single">
          <SingleProduct />
        </Route>
        <Route path="/single">
          <SingleProduct />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
