import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  MemoryRouter,
} from "react-router-dom";
import About from "./About";
import Users from "./Users";
import Home from "./Home";
import AddItem from "./AddItem";
import Login from "./Login";
// import Navbar from './Navbar'
import LogOut from "./LogOut";
import Protected from "./Protected";

function App() {
  return (
    <>
      <Router>
        {/* <div> */}
          <Switch>  
            <Route
              path="/update/:id"
              render={(props) => <About {...props} />}
            ></Route>
            <Route
              path="/login"
              render={(props) => <Login {...props} />}
            ></Route>
            <Route path="/logout">
              <LogOut />
            </Route>
            {/* <Route path="/add">
              <AddItem />
            </Route> */}
            {/* <Route path="/users">
              <Users />
            </Route> */}
            {/* <Route path="/">
              <Home />
            </Route> */}
            <Protected exact path="/" component={Home} />
            <Protected exact  path="/update" component={About} />
            {/* <Protected exactpath="/login" component={Login} /> */}
            {/* <Protected exact path="/logout" component={LogOut} /> */}
            <Protected exact path="/add" component={AddItem} />
            <Protected exact path="/users" component={Users} />
          </Switch>
        {/* </div> */}
      </Router>
    </>
  );
}

export default App;
