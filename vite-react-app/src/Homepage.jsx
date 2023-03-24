import React from "react";
import { Link } from "react-router-dom"


function Home(){
    return(
        <div>
        <h1>PLAN YOUR TASK NOW</h1>
        <Link to="/add task">
            <button>Create a Task</button>
        </Link>
        <Link to="/list tasks">
            <button>List Tasks</button>
        </Link>

        </div>
    )
}
export default Home