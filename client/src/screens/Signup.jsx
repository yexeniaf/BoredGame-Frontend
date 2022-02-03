import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { newUser } from "../services/apiConfig";

const default_user = {
  userName: '',
  email: '',
  password_digest: '',
  // confirmPassword: '',
}

export default function Signup(){
    // const navigate = useNavigate();
    const [input, setInput] = useState(default_user);

    const handleTextInput = (e) => {
      const {name, value} = e.target;
      setInput((prevInput) => ({
        ...prevInput,
        [name]: value,
      }))
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
      await newUser(input)
      // navigate("/login");
    }


 
  return (
    <div className="Form">
      <form className="loginForm" onSubmit={handleSubmit}>
        <legend id="legend">Signup</legend>
        <br />
        <label>Username</label>
        <input 
          name="userName"
          input={input}
          value={input.userName}
          onChange={handleTextInput}
        />
        <label>Email</label>
        <input 
          name="email"
          input={input}
          value={input.email}
          onChange={handleTextInput}
        />
        <br />
        <label >Password</label>
        <input 
          type="password"
          name="password_digest"
          input={input}
          value={input.password_digest}
          onChange={handleTextInput}
        />
        {/* <label >Confirm Password</label>
        <input 
          type="password"
          input={input}
          name="confirmPassword"
          value={input.confirmPassword}
          onChange={handleTextInput}
        /> */}
        <button id="button">Submit</button>
      </form>
      </div>
  );
};
