import ArticleList from "../components/ArticleList";
import Header from "../components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/app.css";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ArticleList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
