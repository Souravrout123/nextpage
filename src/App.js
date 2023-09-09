import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Cart from "./Component/Cart";
import List from "./Component/List";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
