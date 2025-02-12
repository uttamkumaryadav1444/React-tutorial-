import { useEffect } from "react";
import { useState } from "react";

function cancelRequest(){
    const [user, setUser] = useState("Loading...");
    const  [id, setId] = useState("Loading...");
    useEffect(() =>{
        const promise = featcchUser().than((var1)) =>{
            setUser(var1.name);
            setId(var1.id);
        }
        return () => {
            promise.cancel();
        };   
    });
    return (
        <div>
            User ID : {id}
            <br />
            Username : {user}
        </div>
    )
}