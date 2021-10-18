import { useState } from "react";
export default function Login(props) {
  const [userr, setUserr] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserr((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleLogin(userr);
  };
  return (
    <form className="mt-3" onSubmit={handleSubmit}>
      <div className="form-group text-left mb-3">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          className="form-control"
          id="username"
          placeholder="Enter username."
          required
          name="username"
          onChange={handleChange}
          value={userr.username}
        />
      </div>
      {/* <div className="form-group text-left mb-3">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter email."
          required
          name="email"
          onChange={handleChange}
          value={props.email}
        />
      </div> */}
      <div className="form-group text-left mb-3">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Re-enter your password."
          required
          name="password"
          onChange={handleChange}
          value={userr.password}
        />
        <span className="text-danger">{props.error}</span>
      </div>
      <button type="submit" className="btn btn-primary mt-3">
        Login
      </button>
    </form>
  );
}
