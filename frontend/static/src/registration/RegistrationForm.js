import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function RegistrationForm(props) {
  const [error, setError] = useState(null);
  //   const history = useHistory;
  const handleChange = (e) => {
    const { name, value } = e.target;
    props.setUser((prevState) => ({
      ...prevState,

      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.user.password1 !== props.user.password2) {
      setError("Passwords do not match!");
    } else {
      props.handleRegistration(props.user);
      //   props.history.push("/chat");
    }
  };

  return (
    <form className="mt-3 container col-6" onSubmit={handleSubmit}>
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
          value={props.user.username}
        />
      </div>
      <div className="form-group text-left mb-3">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter email."
          required
          name="email"
          onChange={handleChange}
          value={props.user.email}
        />
      </div>
      <div className="form-group text-left mb-3">
        <label htmlFor="password1">Password</label>
        <input
          type="password"
          className="form-control"
          id="password1"
          placeholder="Enter password."
          required
          name="password1"
          onChange={handleChange}
          value={props.user.password1}
        />
      </div>
      <div className="form-group text-left mb-3">
        <label htmlFor="password2">Confirm your password</label>
        <input
          type="password"
          className="form-control"
          id="password2"
          placeholder="Re-enter your password."
          required
          name="password2"
          onChange={handleChange}
          value={props.user.password2}
        />
        <span className="text-danger">{error}</span>
      </div>
      <button type="submit" className=" mt-3">
        Register
      </button>
    </form>
  );
}
