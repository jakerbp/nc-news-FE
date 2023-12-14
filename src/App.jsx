import ArticleList from "./components/ArticleList";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Article from "./components/Article";
import Errors from "./components/Errors";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/articles/:article_id" element={<Article />} />
        <Route path="*" element={<Errors/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
