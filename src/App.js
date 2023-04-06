import { useState } from "react";
import Nav from "./components/Nav/nav";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Projects from "./pages/Project/index";
import Resume from "./pages/Resume";
const App = () => {
  const [selection, setSelection] = useState("About");

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

  const handleSelectionChange = (selected) => {
    setSelection(selected);
  };

  return (
    <div>
      <Header />
      <Nav
        selection={selection}
        handleSelectionChange={handleSelectionChange}
      />
      {pageSelect()}
      <Footer />
    </div>
  );
};

export default App;
