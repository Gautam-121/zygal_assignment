import "./App.css"
import Login from "./component/Login"
import Info from "./component/Info"
import { Outlet, createBrowserRouter } from "react-router-dom"

const App = ()=>{
  return(
    <Outlet/>
  )
}

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <Login/>
  },
  {
    path : "/info",
    element : <Info/>
  }
])

export default appRouter