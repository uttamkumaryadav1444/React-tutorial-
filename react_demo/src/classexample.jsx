import { useState} from "react";  
import cancelRequest from "./cancelrequest";

const setshow = ({varx}) =>
    (varx ? <cancelRequest/> : null);
function ReqCancel(){
    const [show,setShow] = useState(false);
    return(
        <>
            <button onClick={() => setShow(!show)}>
                {show ? "Hide user" : "show user"}
            </button>
            <Setshow varx={show}/>
        </>
    )
}
export default ReqCancel;