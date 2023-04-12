import { Switch, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Details from "./components/Details/Details";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import GlobalStyle from './globalStyles';
import './lib/Data'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/favourite" exact component={Cart} />
        <Route path="/shop/:id" component={Details} />
        <Route component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
