import './App.css'
import Home from "./screens/Home"
import CompleteYourPage from "./screens/CompleteYourPage"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="complete-your-page" element={<CompleteYourPage />} />
    </Routes>
  </BrowserRouter>
  )
}
