import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../services/apiConfig";

const default_user = {
  userName: "",
  email: "",
  password_digest: "",
};

export default function Signup() {
  const navigate = useNavigate();

  const [input, setInput] = useState(default_user);

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
      const res = await createUser(input);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("CurrentUserId", res.data.user)
      navigate(`/account/${res.data.user}`);
    } catch (error) {
      console.error(error);
      setInput({
        isError: true,
        errorMsg: "Error creating user. Please contact project owner.",
        email: "",
        password_digest: "",
      });
    }
  };

  return (
    <div className="flex flex-col items-center">
      <form
        className="signup flex flex-col items-center text-white text-xlg font-semibold bg-stone-700 m-5 p-20 w-90"
        onSubmit={handleSubmit}
      >
        <h2>Signup</h2>
        <br />
        <label>Username</label>
        <input
          name="userName"
          input={input}
          value={input.userName}
          onChange={handleTextInput}
          className="text-black"
        />
        <label>Email</label>
        <input
          name="email"
          input={input}
          value={input.email}
          onChange={handleTextInput}
          className="text-black"
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          name="password_digest"
          input={input}
          value={input.password_digest}
          onChange={handleTextInput}
          className="text-black"
        />
        <br />
        <button id="button">Submit</button>
      </form>
    </div>
  );
}
