import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import DefaultPage from "./pages/defaultpage"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultPage />}>
            <Route path="/" element={<Home />} />
            <Route path="/curriculo" element={""} />
            <Route path="/contrate" element={''} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
