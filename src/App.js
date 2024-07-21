import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import AllTheBooks from "./components/AllTheBooks";

import { useState } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import NotFound from "./components/NotFound";
import BookDetails from "./components/BookDetails";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("darkMode");
  };

  return (
    <>
      <MyNav searchQuery={searchQuery} setSearchQuery={setSearchQuery} toggleDarkMode={toggleDarkMode} />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<AllTheBooks searchQuery={searchQuery} darkMode={darkMode} />} />
          <Route path="/book/:idDettagli" element={<BookDetails />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <MyFooter bloccato="fixed" />
    </>
  );
}

export default App;
