// import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Import Custome Hooks
import { DarkThemeProvider } from "./CustomeHooks/useDarkTheme/useDarkTheme";

// Import Components
import Navbar from "./Components/Navbar/Index";
import Index from "./Components/Index/Index";
import Services from "./Components/Services/Index";
import Portfolio from "./Components/Portfolio/Index";
//import Team from "./Components/Team/Index";
import About from "./Components/About/Index";
import Contact from "./Components/Contact/Index";
import Buttons from "./Components/Buttons/Index";
import NotFound from "./NotFound";

function App() {
  return (
    <DarkThemeProvider>
      <Router>
        <Navbar />
        <Buttons />
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/services" component={Services} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/about" component={About} />
          {/* <Route path="/team" component={Team} /> */}
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </DarkThemeProvider>
  );
}

export default App;
