// function LoginForm() {
//     // input state values always need to be strings - empty initially
//     const [userEmail, setUserEmail] = useState('');
//     const [userPassword, setUserPassword] = useState('');
    
//     return (
//     <div className="LoginForm componentBox">
//     <div className="formRow">
//     <label>Email Address:
//     {/* Controlled form element needs both value and onChange.
//     onChange handler uses event param e to access target value.
//     Whenever user types, new value is stored in state. */}
//     <input type="email" value={userEmail} name="userEmail"
//     onChange={(e) => setUserEmail(e.target.value)} />
//     </label>
//     </div>
//     <div className="formRow">
//     <label>Password:
//     <input type="password" value={userPassword} name="password"
//     onChange={(e) => setUserPassword(e.target.value)} />
//     </label>
//     </div>
//     </div>
//     )
//     }
//     // try removing the onChange prop and typing in a field
//     export default LoginForm

// new state value for showing submission messages to user
const [submitResult, setSubmitResult] = useState('');

const handleSubmit = (e) => {
e.preventDefault(); // prevent page reloading on form submit

// add some password validation
if (userPassword.length < 5) {
setSubmitResult('Password must be at least 5 characters long');
} else if (userPassword === userEmail) {
setSubmitResult('Password must not match email address');
} else {
setSubmitResult('Successful login.');
}
}

return (
<div className="LoginForm componentBox">
<form onSubmit={handleSubmit}>
{/* same form code as previously, BUT now includes
<form> and <button> */}
<button>Log In</button>
<p>{submitResult}</p>
</form>
</div>
)


import { useState } from "react";

function LoginForm() {
  // State for input values
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [submitResult, setSubmitResult] = useState(''); // State for submission message

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submission

    // Validation logic
    if (userPassword.length < 5) {
      setSubmitResult('Password must be at least 5 characters long.');
    } else if (userPassword === userEmail) {
      setSubmitResult('Password must not match email address.');
    } else {
      setSubmitResult('Successful login.');
    }
  };

  return (
    <div className="LoginForm componentBox">
      <form onSubmit={handleSubmit}>
        <div className="formRow">
          <label>Email Address:
            <input
              type="email"
              value={userEmail}
              name="userEmail"
              onChange={(e) => setUserEmail(e.target.value)} // Controlled input
            />
          </label>
        </div>
        <div className="formRow">
          <label>Password:
            <input
              type="password"
              value={userPassword}
              name="userPassword"
              onChange={(e) => setUserPassword(e.target.value)} // Controlled input
            />
          </label>
        </div>
        <button type="submit">Log In</button>
        {/* Submission result */}
        <p>{submitResult}</p>
      </form>
    </div>
  );
}

export default LoginForm;


//Slide 78

// import { useState } from "react";

// function LoginForm() {
//   // State for input values
//   const [userEmail, setUserEmail] = useState('');
//   const [userPassword, setUserPassword] = useState('');
//   // State for submission messages
//   const [submitResult, setSubmitResult] = useState('');

//   // Form submission handler
//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent page reload on form submission

//     // Validation logic
//     if (userPassword.length < 5) {
//       setSubmitResult('Password must be at least 5 characters long.');
//     } else if (userPassword === userEmail) {
//       setSubmitResult('Password must not match email address.');
//     } else {
//       setSubmitResult('Successful login.');
//     }
//   };

//   return (
//     <div className="LoginForm componentBox">
//       <form onSubmit={handleSubmit}>
//         <div className="formRow">
//           <label>
//             Email Address:
//             <input
//               type="email"
//               value={userEmail}
//               name="userEmail"
//               onChange={(e) => setUserEmail(e.target.value)} // Controlled input
//             />
//           </label>
//         </div>
//         <div className="formRow">
//           <label>
//             Password:
//             <input
//               type="password"
//               value={userPassword}
//               name="userPassword"
//               onChange={(e) => setUserPassword(e.target.value)} // Controlled input
//             />
//           </label>
//         </div>
//         <button type="submit">Log In</button>
//         {/* Display submission result */}
//         <p>{submitResult}</p>
//       </form>
//     </div>
//   );
// }

// export default LoginForm;
