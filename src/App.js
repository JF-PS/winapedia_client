import "./App.css";
import Test from "./pages/Test";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shearch/:id" exact component={Test} />
        <Route path="/auth" exact component={Auth} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
