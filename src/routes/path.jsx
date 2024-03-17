import { Routes, Route } from "react-router-dom";
import { Bookmarks, Explore, Error, MainMenu, Profile, Login, SignUp, ForgotPass } from '../pages'
import { ProtectedRoute } from "./protectedRoute";


export const Path = () => {
    return (
        <Routes>
            <Route path="/" element={<MainMenu />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="/explore" element={<Explore />} />

            <Route path="/profile" element={
                <ProtectedRoute redirectTo="/login">
                    <Profile />
                </ProtectedRoute>
            }
            />

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login/forgotpassword" element={<ForgotPass />} />
            <Route path="*" element={<Error />} />
        </Routes>
    )
}
