// import { useContext } from "react";
// import { AuthContext } from "../provider/AuthProvider";

/* eslint-disable no-unused-vars */
const Login = () => {
//   const { createNewUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    // createNewUser(email, password)
    //   .then((res) => {
    //     const user = res.user;
    //     console.log(user);
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log(errorCode, errorMessage);
    //   });
    console.log({ email, password});
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 bg-white shadow-md rounded-lg"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">
         Login your account
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block font-medium">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
            />
          </div>
          <div>
            <label className="block font-medium">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
            />
          </div>
            <p className="text-center font-semibold" >Create An Account? <a className="text-red-500" href="/auth/signUp">SignUp</a></p>
          <button
            type="submit"
            className="w-full py-2 mt-4 text-white bg-black rounded hover:bg-gray-800 focus:outline-none"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
