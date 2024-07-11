import React from "react"
import { ThemeProvider } from "@mui/material/styles"
import theme from "./theme/theme"
import "./index.css"
import Header from "./components/Header"
import { Outlet } from "react-router-dom"

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Header />
			<Outlet />
		</ThemeProvider>
	)
}

export default App
