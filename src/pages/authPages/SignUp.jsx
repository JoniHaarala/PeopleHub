import { useState } from "react";
import { AnimateLink } from "../../components/AnimateLink"
import signup from '../../assets/signup.svg';
import google from '../../assets/google.svg';
import github from '../../assets/github.svg';

const SignUp = () => {
  const inputStyle = 'mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300';

  let signUpData = {
    username: '',
    password: '',
    mail: ''
  };
  const [username, setUsername] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const handlesubmit = async (e) => {
    e.preventDefault();
    signUpData = {
      username,
      password,
      mail
    }
    console.log(signUpData);
  };

  return (
    <main className="absolute z-10 w-screen flex h-screen">
      {/* <!-- Left Panel --> */}
      <section className="hidden lg:flex items-center justify-center flex-1 bg-white text-black">
        <div className="max-w-md text-center">
          <img src={signup} />
        </div>
      </section>
      {/* <!-- Right Panel --> */}
      <section className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center">
        <div className="max-w-md w-full p-6">
          <h1 className="text-3xl font-semibold mb-6 text-black text-center">Sign Up</h1>
          <p className="text-sm font-semibold mb-6 text-gray-500 text-center">Join to Our Community with all time access and free </p>
          <div className="mt-4 flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full lg:w-1/2 mb-2 lg:mb-0">
              <button type="button" className="w-full flex justify-center items-center gap-2 bg-white text-sm text-gray-600 p-2 rounded-md hover:bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300">
                <img src={google} width={20} />   Sign Up with Google
              </button>
            </div>
            <div className="w-full lg:w-1/2 ml-0 lg:ml-2">
              <button type="button" className="w-full flex justify-center items-center gap-2 bg-white text-sm text-gray-600 p-2 rounded-md hover:bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300">
                <img src={github} width={20} />   Sign Up with Github
              </button>
            </div>
          </div>

          <p className="mt-4 text-sm text-gray-600 text-center">or with email</p>

          <form className="space-y-5">
            {/* form elements for sign up */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                id="username"
                name="username"

                onChange={e => setUsername(e.target.value)}
                className={inputStyle}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={e => setMail(e.target.value)}
                className={inputStyle}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={e => setPassword(e.target.value)}
                className={inputStyle}
              />
            </div>

            <button type="submit" onClick={handlesubmit} className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300">Sign Up</button>
          </form>

          <p className="mt-6 text-sm text-gray-600 text-center">
            Already have an account?
            <AnimateLink to='/login' styles="ml-2 font-semibold text-black hover:underline">Login here</AnimateLink>
          </p>

        </div>
      </section>
    </main>
  )
}

export default SignUp