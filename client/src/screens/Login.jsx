import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/apiConfig";

const default_input = {
    email: "",
    password_digest: ""
}

export default function Login() {
    const [input, setInput] = useState(default_input);
    const navigate = useNavigate();

    const handleTextInput = (event) => {
        const { id, value } = event.target;
        setInput((prevInput) => ({
          ...prevInput,
          [id]: value,
        }));
    };

    const handleSubmit = async (event)=>{
      event.preventDefault();
      const res = await loginUser(input);
      console.log(res.data);
    }

  return (
    <div className="flex flex-col items-center">
        <h2>Login</h2>
        <form className="flex flex-col items-center bg-gray-300 m-5 p-5 w-70" onSubmit={handleSubmit}>
            <label htmlFor="email">E-mail:</label>
            <input type="text" id='email' onChange={handleTextInput} className="border-solid-3" required/>
            <label htmlFor="password">Password:</label>
            <input type="text" id='password' onChange={handleTextInput} required/>
            <br />
            <button type="submit">Submit</button>
        </form>
    </div>
  );
}
