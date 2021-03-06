import "./App.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Projects from "../Projects";
import Home from "../Home";
import Contact from "../Contact";
import NavBar from "../NavBar";
import About from "../About";
import Footer from "../Footer"

function App() {
  return (<>
    <Router>
      <NavBar />

      <Switch>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    <Footer/>
    </>

  
  );
}

export default App;
