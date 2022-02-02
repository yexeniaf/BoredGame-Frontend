import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const default_input = {
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

export default function Edit() {
    const [input, setInput] = useState(default_input);
    const navigate = useNavigate();

    const handleTextInput = (event) => {
        const { id, value } = event.target;
        setInput((prevInput) => ({
          ...prevInput,
          [id]: value,
        }));
    };
      
    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     const fields = input;
    //     console.log(fields);
    //     await axios.put("", fields);
    
    //     setInput(default_input);
    //     navigate('/');
    // };  

  return (
    <div className="flex flex-col items-center">
        <h2>Edit Account</h2>
        <form className="flex flex-col items-center bg-gray-500 m-5 p-5 w-80">
            <label htmlFor="email">E-mail:</label>
            <input type="text" id='email' onChange={handleTextInput} className="border-solid-3" required/>
            <label htmlFor="userName">Choose Username:</label>
            <input type="text" id='userName' onChange={handleTextInput} required/>
            <label htmlFor="password">Password:</label>
            <input type="text" id='password' onChange={handleTextInput} required/>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="text" id='confirmPassword' onChange={handleTextInput} required/>
            <br />
            <button>Save</button>
        </form>
    </div>
  );
}