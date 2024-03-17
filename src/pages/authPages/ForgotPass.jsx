import { useState } from "react"
import { Link } from "react-router-dom"
import LoginBg from '../../assets/login-img.webp';

const ForgotPass = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('logueado', username, password);
    }
    return (
        <div className="absolute z-10 w-full flex items-center justify-center min-h-screen bg-gray-100">
            <img
                src={LoginBg}
                alt="LoginBg"
                className="absolute w-screen h-screen object-cover blur"
            />
            <form onSubmit={handleSubmit}
                className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl lg:flex-row lg:space-y-0"
            >

                {/* left side */}
                <div className="flex flex-col justify-center p-8 lg:p-14">
                    <span className="mb-3 text-4xl font-bold">Welcome back</span>
                    <span className="font-light text-gray-400 mb-8">
                        Welcom back! Please enter your details
                    </span>
                    <div className="py-4">
                        <span className="mb-2 text-md">Email</span>
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                            name="email"
                            id="email"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="py-4">
                        <span className="mb-2 text-md">Password</span>
                        <input
                            type="password"
                            name="pass"
                            id="pass"
                            className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-between w-full py-4">
                        <div className="mr-24">
                            <input
                                type="checkbox"
                                name="ch"
                                id="ch"
                                className="mr-2"
                            />
                            <span className="text-md">Remember for 30 days</span>
                        </div>
                        <Link to={"/login/forgotpassword"}><span className="font-bold text-md">Forgot password?</span></Link>
                    </div>
                    <button
                        className="w-full bg-black text-white p-2 rounded-lg mb-6 border hover:bg-white hover:text-black hover:border-gray-300"
                        type="submit"
                    >
                        Sign in
                    </button>
                    <button
                        className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white"
                    >
                        <img src="google.svg" alt="img" className="w-6 h-6 inline mr-2" />
                        Sign in with Google
                    </button>
                    <div className="text-center text-gray-400">
                        Dont have an account?
                        <Link to={"/SignUp"}><span className="font-bold text-black"> Sign up for free</span></Link>

                    </div>
                </div>
                {/* right side */}
                <div className="relative">
                    <img
                        src="image.jpg"
                        alt="img"
                        className="w-[400px] h-full hidden rounded-r-2xl lg:block object-cover"
                    />
                    {/* text on image  */}
                    <div
                        className="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg lg:block"
                    >
                        <span className="text-white text-xl"
                        >Weve been uesing Untitle to kick <br />start every new project
                            and cant <br />imagine working without it.
                        </span>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ForgotPass