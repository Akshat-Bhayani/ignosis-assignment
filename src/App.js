import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostDetailWrapper from "./Components/PostDetailWrapper";
import Home from "./Components/Home";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:postId" element={<PostDetailWrapper />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
