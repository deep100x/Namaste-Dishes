import React from "react"
import { ThemeProvider } from "@mui/material/styles"
import theme from "./theme/theme"
import Body from "./components/Body"
import Header from "./components/Header"

const App = () => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Header />
				<Body />
			</ThemeProvider>
		</>
	)
}

export default App
