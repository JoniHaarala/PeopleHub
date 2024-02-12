import { Routes, Route } from "react-router-dom";
import { Bookmarks, Explore, Error, MainMenu, Profile } from '../pages'


export const Path = () => {
    return (
        <Routes>
            <Route path="/" element={<MainMenu />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Error />} />
        </Routes>
    )
}
