import React,{useState, useEffect} from "react";

function List(){
    const [list, setList] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res=>res.json())
      .then(data=>{
            setList(data);
        })
    },[])

    return(
        <div>
            <ul>
                {list.map(item=>(
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    )
    
}

export default List;