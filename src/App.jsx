import Cart from "./components/Cart"
import Listproduct from "./components/Listproduct"


function App() {

  return (
    <>
      <div className="flex flex-wrap justify-center mt-5">
        <Listproduct />
        <Cart />
      </div>
    </>
  )
}

export default App
