// imports useState
import { useState } from "react";
// imprts nav
import Nav from "./components/Nav/nav";
// imports about page
import About from "./pages/About";
// imports contract
import Contact from "./pages/Contact";
// imports footer
import Footer from "./pages/Footer";
// imports header
import Header from "./pages/Header";
// imports projects
import Projects from "./pages/Project/index";
// imports resume
import Resume from "./pages/Resume";

const App = () => {
  // sets selection
  const [selection, setSelection] = useState("About");

  // if selection = page selected, render that page
  const pageSelect = () => {
    if (selection === "About") {
      return <About />;
    }
    if (selection === "Contact") {
      return <Contact />;
    }
    if (selection === "Projects") {
      return <Projects />;
    }
    return <Resume />;
  };
  // sets selcetion to what is in the handle selection change
  const handleSelectionChange = (selected) => {
    setSelection(selected);
  };

  return (
    <div>
      {/* render headers */}

      <Header />
      {/* passes props to nav */}
      <Nav handleSelectionChange={handleSelectionChange} />
      {/* renders selected page */}
      {pageSelect()}
      {/* render footer */}
      <Footer />
    </div>
  );
};

export default App;
