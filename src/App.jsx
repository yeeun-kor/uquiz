import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/quiz/:nickname" element={<Quiz></Quiz>}></Route>
        <Route path="results/:nickname" element={<Results></Results>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
