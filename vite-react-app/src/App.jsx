import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from './Homepage'
import './App.css'
import Signup from './Signup'
import Login from './Login'
import AddTask from "./AddTask"
import List from "./List"
import UpdateTask from "./updatelist"
import Search from "./Search"


function App() {
  return(
   <BrowserRouter>
     <Routes>   
     <Route path= "/" element={<Home/>}></Route>
     <Route path= "/sign" element={<Signup/>}></Route>
      <Route path= "/signup" element={<Signup/>}></Route>
      <Route path= "/add task" element={<AddTask/>}></Route>
      <Route path= "/list tasks" element={<List/>}></Route>
      <Route path= "/update" element={<UpdateTask/>}></Route>
    </Routes>
    </BrowserRouter> 
  )
}

export default App
