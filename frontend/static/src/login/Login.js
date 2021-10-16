// export default function Login(props) {
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     handleLogin(props.user);
//   };
//   return (
//     <form className="mt-3" onSubmit={handleSubmit}>
//       <div className="form-group text-left mb-3">
//         <label htmlFor="username">Username</label>
//         <input
//           type="text"
//           className="form-control"
//           id="username"
//           placeholder="Enter username."
//           required
//           name="username"
//           onChange={handleChange}
//           value={props.username}
//         />
//       </div>
//       <div className="form-group text-left mb-3">
//         <label htmlFor="email">Email</label>
//         <input
//           type="email"
//           className="form-control"
//           id="email"
//           placeholder="Enter email."
//           required
//           name="email"
//           onChange={handleChange}
//           value={props.email}
//         />
//       </div>
//       <div className="form-group text-left mb-3">
//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           className="form-control"
//           id="password"
//           placeholder="Re-enter your password."
//           required
//           name="password"
//           onChange={handleChange}
//           value={props.password}
//         />
//         <span className="text-danger">{props.error}</span>
//       </div>
//       <button type="submit" className="btn btn-primary mt-3">
//         Login
//       </button>
//     </form>
//   );
// }
