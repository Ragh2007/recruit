import { BrowserRouter, Routes, Route } from "react-router-dom";
import Recruitment from "./Recruitment";
import DomainDetail from "./DomainDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Recruitment />} />
        <Route path="/recruitment" element={<Recruitment />} />
        <Route path="/recruitment/:domainId" element={<DomainDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
