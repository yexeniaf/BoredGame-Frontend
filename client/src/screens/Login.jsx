import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const default_user = {
    email: "",
    password_digest: ""
}

export default function Login() {
    const [input, setInput] = useState(default_user);
  
    const navigate = useNavigate();

    const handleTextInput = (e) => {
        const { name, value } = e.target;
        setInput((prevInput) => ({
          ...prevInput,
          [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
      e.preventDefault()
      try {
        const res = await axios.post(`https://boredgame-backend.herokuapp.com/login`, input)
        navigate(`/account/${res.data.data.user._id}`)
      } catch (error) {
        console.error(error)
          setInput({
          isError: true,
          errorMsg: 'Invalid Credentials',
          email: '',
          password_digest: '',
        })
      }   
    }

    return (
      <div className="signin flex flex-col items-center">
          <form onSubmit={handleSubmit} className="flex flex-col items-center bg-gray-300 m-5 p-10 w-90">
          <img className='logo' src="https://www.seekpng.com/png/full/70-707290_svg-black-and-white-arcade-clipart-arcade-machine.png" alt="arcade game"/>
          <h2 id="login">Login</h2>
          <br/>
              <label htmlFor="email">E-mail:</label>
              <input 
                type="text" 
                name='email' 
                onChange={handleTextInput} 
                className="border-solname-3" 
                required
              />
              <label htmlFor="password">Password:</label>
              <input 
                type="text" 
                name='password' 
                onChange={handleTextInput} 
                required
              />
              <br/>
              <button type="submit">Submit</button>
          </form>
      </div>
    );
  }
