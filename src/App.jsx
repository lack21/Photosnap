import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Stories from "./components/Stories";
import Features from "./components/Features";
import Pricing from "./components/Pricing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Photosnap" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="stories" element={<Stories />} />
          <Route path="features" element={<Features />} />
          <Route path="pricing" element={<Pricing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
