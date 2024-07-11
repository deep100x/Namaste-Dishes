import React from "react"
import ReactDOM from "react-dom/client"

import App from "./App.jsx"
import Search from "./components/Search.jsx"
import Error from "./components/Error.jsx"
import Body from "./components/Body.jsx"

import "./index.css"
import "./theme/font.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ path: "/", element: <Body /> },
			{ path: "search", element: <Search /> },
		],
		errorElement: <Error />,
	},
])

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={appRouter} />
	</React.StrictMode>
)
