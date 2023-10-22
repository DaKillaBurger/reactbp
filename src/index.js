// react imports
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

// component imports
import App from "./App"
import ErrorPage from "./components/ErrorPage"
import Home from "./containers/Home"
import About from "./containers/About"
import Other from "./containers/Other"

const appElement = document.getElementById("app")
const root = createRoot(appElement)

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "other",
                element: <Other />
            }
        ]
    }
])

root.render(<RouterProvider router={router} />)