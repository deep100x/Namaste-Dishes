import React, { useEffect, useState } from "react"
import RestaurantCard from "./RestaurantCard"
import { Grid, Button, Container, Box } from "@mui/material"
import resList from "../utils/mockData"

const Body = () => {
	const [listOfRestaurants, setListOfRestaurants] = useState(resList)

	useEffect(() => {
		fetchData()
	}, [])

	const fetchData = async () => {
		const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
		const json = await data.json()
		console.log(json)
	}

	return (
		<Container sx={{ pt: 2 }}>
			<Box className="Search" sx={{ p: 2 }}>
				<Button
					variant="contained"
					color="primary"
					onClick={() => {
						const filteredList = listOfRestaurants.filter((res) => res.data.avgRating > 4)
						setListOfRestaurants(filteredList)
					}}
				>
					Top Rated Restaurant
				</Button>
			</Box>
			<Grid container spacing={2}>
				{listOfRestaurants.map((restaurant) => (
					<RestaurantCard key={restaurant.data.id} resData={restaurant} />
				))}
			</Grid>
		</Container>
	)
}

export default Body
