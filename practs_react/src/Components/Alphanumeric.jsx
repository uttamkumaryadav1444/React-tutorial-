import { useState } from "react";
const Alphanumeric = () => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
    const sendValue = event.target.value.replace(/[^a-zA-Z0-9]/g, "");
    setInputValue(sendValue);
    };
    return (
    <div>
        <h1>Alphanumeric Input</h1>
        <label >Enter text =</label>
        <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter alphanumeric characters"
        />
        <p>Only support Alphabet or numeri value, not support spacial charctor like @,#,$,%,&</p>
        <br />
        {inputValue}
    </div>
    
    );
}
export default Alphanumeric;
