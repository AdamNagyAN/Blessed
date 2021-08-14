import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import GlobalStyle from './globalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/shop/:id">
          <div className="container"><h2>asd</h2></div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
