import React, { useState } from "react";
function FormValid()
{
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [login,setLogin]=useState(false)
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(username)
        console.log(password)  
        setLogin(true)  
    }
    return(
        <div>
            {
                !login?(
                    <form onSubmit={handleSubmit}>
<label>Username </label><input type="text"  value={username} onChange={(e)=>setUsername(e.target.value)} required/><br/><br/>
<label>Password </label><input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/><br/><br/>
            <button>Submit</button>
            </form>
            
                ):(
                    <h1>welcome:{username}</h1>
                    
                )
            }
            
           
        </div>
    );

}
export default FormValid