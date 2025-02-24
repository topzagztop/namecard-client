import { createBrowserRouter, Navigate, RouterProvider } from "react-router"
import Home from "../pages/Home"
import App from "../App"
import Login from "../pages/Login"
import Register from "../pages/Register"
import AccCard from "../pages/AccCard"
import Theme from "../pages/Theme"
import Contact from "../pages/Contact"

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
            { path: "/profile", element: <p>Profile Page</p> },
            { path: "/preview", element: <p>Card Preview</p> },
            { path: "*", element: <Navigate to="/" /> },
        ]
    },
])

export default function AppRouter() {
    const user = "Andy"
    const finalRouter = user ? userRouter : guestRouter
    return (
        <RouterProvider router={finalRouter} />
    )
}