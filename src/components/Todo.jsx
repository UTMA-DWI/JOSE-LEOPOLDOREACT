import { useRef } from "react";
function Todo (){
    const inputRef = useRef(null);
    return(
        <div>
            <h1>TO DO</h1>
            <div className="container" style={{display:'flex', gap: '1rem'}}>
                <input type="text"></input>
                <button>Add</button>
            </div>
            <div>
                <h2>LISTA</h2>
            </div>
        </div>
    )
}

export default Todo;