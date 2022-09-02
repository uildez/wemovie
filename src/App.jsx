import { Route, Routes } from "react-router-dom"
import { Header } from "./components/Header"
import { Cart } from "./views/Cart"
import { Finished } from "./views/Finished"
import { Home } from "./views/Home"

function App() {
  return (
    <div className="flex flex-col h-screen w-screen bg-[#2F2E41]">
      <div className="w-4/5 h-full m-auto">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Cart />} />
        <Route path="/finish" element={<Finished />} />
      </Routes>
      </div>
    </div>
  )
}

export default App
