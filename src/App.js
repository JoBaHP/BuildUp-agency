import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import Custome Hooks
import { DarkThemeProvider } from "./CustomeHooks/useDarkTheme/useDarkTheme";

// Import Components
import Navbar from "./Components/Navbar/Index";
import Index from "./Components/Index/Index";
import Services from "./Components/Services/Index";
import Portfolio from "./Components/Portfolio/Index";
/* import Team from "./Components/Team/Index";
 */
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
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/team" component={Team} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route element={<NotFound />} />
        </Routes>
      </Router>
    </DarkThemeProvider>
  );
}

export default App;
