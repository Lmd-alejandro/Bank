import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import  Home  from "./pages/home"
import Login from "./pages/Login"

function App() {

    return (
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
  )
}

export default App