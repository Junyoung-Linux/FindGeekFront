// import React, { useState } from "react";
// import { useUserContext } from "../context/userContext";
// import Signin from "./signin";
// import Signup from "./signup";

// const Auth = () => {
//   const [index, setIndex] = useState(false);
//   const toggleIndex = () => {
//     setIndex((prevState) => !prevState);
//   };

//   const { signInWithGithub } = useUserContext();

//   return (
//     <div className="container">
//       {!index ? <Signin /> : <Signup />}
//       <button onClick={signInWithGithub}> Sign in with Github</button>
//       <p onClick={toggleIndex}>
//         {!index ? "New user? Click here " : "Already have an acount?"}
//       </p>
//     </div>
//   );
// };

// export default Auth;
