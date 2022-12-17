import React, { useState } from 'react'
import { register } from '../libs/auth';

function RegisterForm() {
    const [registerInfo, setregisterInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "",
      });
      const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
    
        setregisterInfo({ ...registerInfo, [name]: value });
      };
    
      const handleSubmit = (e) => {
        const { firstName, lastName, email, password, confirmPassword,role } = registerInfo;
        e.preventDefault();
        register( email, password, confirmPassword,role);
      };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        value={registerInfo.firstName}
        onChange={(e) => handleChange(e)}
      />
      <input
        type="text"
        name="lastName"
        value={registerInfo.lastName}
        onChange={(e) => handleChange(e)}
      />
      <input
        type="email"
        name="email"
        value={registerInfo.email}
        onChange={(e) => handleChange(e)}
      />
      <input
        type="password"
        name="password"
        value={registerInfo.password}
        onChange={(e) => handleChange(e)}
      />
      <input
        type="password"
        name="confirmPassword"
        value={registerInfo.confirmPassword}
        onChange={(e) => handleChange(e)}
      />
      <input
        type="text"
        name="role"
        value={registerInfo.role}
        onChange={(e) => handleChange(e)}
      />
      <button type="submit">register</button>
    </form>
  )
}

export default RegisterForm