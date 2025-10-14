import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

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
