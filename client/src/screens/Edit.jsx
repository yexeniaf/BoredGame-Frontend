import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../services/apiConfig";


const default_input = {
    userName: '',
    email: ''
  };

export default function Edit() {
    const [input, setInput] = useState(default_input);
    const navigate = useNavigate();
    const {id} = useParams()

    const handleTextInput = (event) => {
        const { id, value } = event.target;
        setInput((prevInput) => ({
          ...prevInput,
          [id]: value,
        }));
    };
      
    const handleSubmit = async (event) => {
        event.preventDefault();
        const fields = input;
        console.log(fields);
        await updateUser(id, fields);
    
        setInput(default_input);
        navigate(`/account/${id}`);
    }  

  return (
    <div className="flex flex-col items-center" onSubmit={handleSubmit}>
        <h2>Edit Account</h2>
        <form className="flex flex-col items-center bg-gray-300 m-5 p-5 w-70">
            <label htmlFor="email">E-mail:</label>
            <input type="text" id='email' onChange={handleTextInput} className="border-solid-3" required/>
            <label htmlFor="userName">Choose Username:</label>
            <input type="text" id='userName' onChange={handleTextInput} required/>
            <button type="submit">Save</button>
        </form>
    </div>
  )
}