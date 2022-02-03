import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signUp } from "../services/users";


export default function Signup(props){
    

    const [form, setForm] = useState ({
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
        isError: false,
        errorMessage: "Invalid Credentials"
    })

    const handleChange = (e) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value
      })
    }

    const onSignUp = async (e) => {
      e.preventDefault();
      const { setUser } = props
      try {
        const user = await signUp(form)
        setUser(user)
      } catch (error) {
        console.error(error)
        setForm({
          userName: '',
          email: '',
          password: '',
          confirmPassword: '',
          isError: true,
          errorMessage: "Invalid Credentials"
        })
      }
    }

    const renderError = () => {
      const toggleForm = form.isError ? 'danger' : ''
      if ( form.isError) {
        return (
          <button type='submit' className={toggleForm}>
            {form.errorMessage}
          </button>
        )
      } else {
        return <button type="submit">Sign Up</button>
      }
    }

    const { userName, email, password, confirmPassword } = form

  return (
    <div>
      <h3> Sign Up</h3>
      <form className="singup-form" onSubmit={onSignUp}>
        <label >UserName</label>
        <input
          class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"
          required
          type='text'
          name='userName'
          value={userName}
          placeholder='Enter username'
          onChange={handleChange}
        />
        <label>Email address</label>
        <input
          class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"
          required
          type='email'
          name='email'
          value={email}
          placeholder='Enter email'
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"
          required
          name='password'
          value={password}
          type='password'
          placeholder='Password'
          onChange={handleChange}
        />
        <label>Password Confirmation</label>
        <input
          class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"
          required
          name='confirmPassword'
          value={confirmPassword}
          type='password'
          placeholder='Confirm Password'
          onChange={handleChange}
        />
        {renderError()}
      </form>
    </div>
  );
}
