import React from "react";
import { Link ,BrowserRouter} from "react-router-dom"
import './Homepage.css'


function Home(){
    return(
        <BrowserRouter>
        <div>
        <h1>PLAN YOUR TASK NOW</h1>
        <Link to="/add task">
            <button>Create a Task</button>
        </Link>
        <Link to="/list tasks">
            <button>List Tasks</button>
        </Link>
        <Link to="/update">
            <button>update Tasks</button>
        </Link>


        </div>
        </BrowserRouter>
    )
}
export default Home