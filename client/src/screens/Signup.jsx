import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const default_input = {
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

export default function Signup() {
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
    //     await axios.post("", fields);
    
    //     setInput(default_input);
    //     navigate('/');
    // };  

  return (
    <div className="flex flex-col items-center">
        <h2>Signup</h2>
        <form className="flex flex-col items-center bg-gray-300 m-5 p-5 w-70">
            <label className="flex" htmlFor="email">E-mail:</label>
            <input type="text" id='email' onChange={handleTextInput} className="border-solid-3" required/>
            <label htmlFor="userName">Choose Username:</label>
            <input type="text" id='userName' onChange={handleTextInput} required/>
            <label htmlFor="password">Password:</label>
            <input type="text" id='password' onChange={handleTextInput} required/>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="text" id='confirmPassword' onChange={handleTextInput} required/>
            <br />
            <button type="submit">Submit</button>
            <br />
            <h5>Already have an account? <Link to={'/login'}>Login</Link></h5>
        </form>
    </div>
  );
}
