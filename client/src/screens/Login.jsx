import { loginUser } from "../services/apiConfig";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const default_user = {
  email: "",
  password_digest: "",
};

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
    e.preventDefault();
    try {
      const res = await loginUser(input);
      localStorage.setItem("token", res.data.token);
      console.log(res);
      localStorage.setItem('CurrentUserId', res.data.user._id);
      navigate(`/account/${res.data.user._id}`);
    } catch (error) {
      console.error(error);
      setInput({
        isError: true,
        errorMsg: "Invalid Credentials",
        email: "",
        password_digest: "",
      });
    }
  };

    return (
      <div className=" flex flex-col items-center">
          <form onSubmit={handleSubmit} className="signin flex flex-col items-center text-white text-xlg font-semibold bg-stone-700 m-5 p-20 w-90">
          <img className='logo2' src="https://www.seekpng.com/png/full/70-707290_svg-black-and-white-arcade-clipart-arcade-machine.png" alt="arcade game"/>
          <h2 id="login">Login</h2>
          <br/>
              <label htmlFor="email">E-mail:</label>
              <input 
                type="text" 
                name='email' 
                onChange={handleTextInput} 
                className="border-solname-3 text-black" 
                required
              />
              <label htmlFor="password">Password:</label>
              <input 
                type="password" 
                name='password' 
                onChange={handleTextInput} 
                className="text-black"
                required
              />
              <br/>
              <button type="submit">Submit</button>
          </form>
      </div>
    );
  }
