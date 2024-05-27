import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Header from "./components/header"

function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/curriculo" element={""} />
          <Route path="/contrate" element={''} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
