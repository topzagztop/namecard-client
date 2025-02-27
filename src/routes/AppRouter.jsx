import { createBrowserRouter, Navigate, RouterProvider } from "react-router"
import Home from "../pages/Home"
import App from "../App"
import Login from "../pages/Login"
import Register from "../pages/Register"
import AccCard from "../pages/AccCard"
import Theme from "../pages/Theme"
import Contact from "../pages/Contact"
import useUserStore from "../stores/userStore"
import Profile from "../pages/Profile"
import AddNameCard from "../pages/AddNameCard"

const guestRouter = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "*", element: <Navigate to="/" /> },
])

const userRouter = createBrowserRouter([
    {
        path: "/", element: <App />,
        children: [
            { index: true, element: <AccCard />},
            { path: "/theme", element: <Theme /> },
            { path: "/contact", element: <Contact /> },
            { path: "/profile", element: <Profile /> },
            { path: "/addnamecard", element: <AddNameCard /> },
            { path: "/preview", element: <p>Card Preview</p> },
            { path: "/share", element: <p>Card Share</p> },
            { path: "/editnamecard", element: <p>Edit Name Card</p> },
            { path: "*", element: <Navigate to="/" /> },
        ]
    },
])

export default function AppRouter() {
    const user = useUserStore(state => state.user)
    const finalRouter = user ? userRouter : guestRouter
    return (
        <RouterProvider key={user?.id} router={finalRouter} />
    )
}