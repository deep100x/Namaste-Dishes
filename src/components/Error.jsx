import React from "react"
import { Link, useRouteError } from "react-router-dom"

const Error = () => {
	const error = useRouteError()
	console.error(error)

	return (
		<div sx={{}}>
			<h1>Oops! Something went wrong.</h1>
			<strong>Error:</strong> {error.statusText || error.message}
			{error.status && <p>Status Code: {error.status}</p>}
			<strong>Details:</strong> {JSON.stringify(error.data, null, 2)}
			Go back to <Link href="/">home page</Link>.
		</div>
	)
}

export default Error
