import { useState } from "react;

export default function Signup() {

    const handleTextInput = (event) => {
        const { id, value } = event.target;
        setInput((prevInput) => ({
          ...prevInput,
          [id]: value,
        }));
      };

  return (
    <div>
        <form>
            <label htmlFor="email">E-mail:</label>
            <input type="text" id='email' onChange={handleTextInput} required/>
            <label htmlFor="username">Choose Username:</label>
            <input type="text" id='username' onChange={handleTextInput} required/>
            <label htmlFor="password">Password:</label>
            <input type="text" id='password' onChange={handleTextInput} required/>
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input type="text" id='confirm-password' onChange={handleTextInput} required/>
        </form>
    </div>
  );
}
