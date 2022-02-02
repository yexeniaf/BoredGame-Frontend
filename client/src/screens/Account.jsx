import React from 'react';
import { Link } from 'react-router-dom';

export default function Account() {
  return (
    <div className="flex flex-col items-center">
    <h2>Account Info</h2>
    <form className="flex flex-col items-center bg-gray-500 m-5 p-5 w-80">
        <h3>E-mail:</h3>
        <div>user.email</div>
        <h3>Username:</h3>
        <div>user.userName</div>
        <h3>Password:</h3>
        <div>user.password</div>
        <br />
        <Link to="/edit">Edit</Link>
    </form>
</div>
  );
}
