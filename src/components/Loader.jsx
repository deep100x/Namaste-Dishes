import React, { useState, useEffect } from "react"
import "../styles/Loader.css"

const images = ["/swiggy.png", "/react.svg", "/mui.svg", "/vite.svg"]

const Loader = () => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
		}, 200)

		return () => clearInterval(interval)
	}, [])

	return (
		<div className="loader">
			<div className="spinner"></div>
			<div className="nospin">
				<img src={images[currentImageIndex]} alt="Loading icon" className="icon" />
			</div>
		</div>
	)
}

export default Loader
