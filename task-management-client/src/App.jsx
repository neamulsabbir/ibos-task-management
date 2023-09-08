import { RouterProvider } from "react-router-dom"
import routes from "./Components/Routes/routes"
import { Toaster } from "react-hot-toast"

function App() {

  return (
    <div className="">
      <Toaster />
      <RouterProvider router={routes}></RouterProvider>
    </div>
  )
}

export default App
