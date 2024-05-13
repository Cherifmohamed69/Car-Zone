import { Route, Routes } from "react-router-dom";
import LoginRegister from "./components/LoginRegister";

function App() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<LoginRegister />} />
      </Routes>
    </div>
  );
}

export default App;
