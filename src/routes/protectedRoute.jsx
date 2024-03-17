import { Navigate } from "react-router-dom"

export const ProtectedRoute = ({ child, user, redirectTo = '/' }) => {
    if (!user) {
        return <Navigate to={redirectTo} />
    }
    return child
}
