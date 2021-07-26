import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Shop from "./pages/Shop";
import './styles/style.scss'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <h1>home</h1>
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
