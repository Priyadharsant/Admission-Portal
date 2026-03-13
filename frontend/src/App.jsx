import './App.css';
import { Routes, Route } from "react-router-dom";
import './index.css';

import Landing from "./components/Landing/Landing";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing/>} />
    </Routes>
  );
}

export default App;

