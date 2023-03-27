import React,{useState} from "react";
import "./Signup.css"

function Signup(){
    const [username, setusername] = useState('')
    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')

    function handlesubmit(e){
        e.preventDefault()
        console.log(username,email,password)

    } 
    
    fetch(`http://localhost:3000/users`, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
   body: JSON.stringify({username ,email , password})
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })

    return(
        <div>
            <h1>Signup</h1>
            <form onSubmit={handlesubmit}> 
                <label htmlFor="username" >username</label>
                <input type="text" name="username" value={username} placeholder="Username" onChange={(e) => setusername(e.target.value)}/>
                
                <label htmlFor="email" >Email</label>
                <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)}/>
                
                
                <label htmlFor="password" >Password</label>
                <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setpassword(e.target.value)}/>
                
                <button type="submit" name="submit" >Submit</button>
            </form>
        </div>
    )
}
export default Signup