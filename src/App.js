import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Transactions from "./pages/Transactions";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Transactions />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
