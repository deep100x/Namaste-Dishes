import React, { useEffect, useState } from "react"
import RestaurantCard from "./RestaurantCard"
import { Grid, Button, Container, Box } from "@mui/material"
import resList from "../utils/mockData"

const Body = () => {
	const [listOfRestaurants, setListOfRestaurants] = useState([])

	useEffect(() => {
		fetchData()
	}, [])

	const fetchData = async () => {
		const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING")
		const json = await data.json()
		console.log(json)
		console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
		setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
	}

	return (
		<Container sx={{ pt: 2 }}>
			<Box className="Search" sx={{ p: 2 }}>
				<Button
					variant="contained"
					color="primary"
					onClick={() => {
						const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4)
						setListOfRestaurants(filteredList)
					}}
				>
					Top Rated Restaurant
				</Button>
			</Box>
			<Grid container spacing={2}>
				{listOfRestaurants.map((restaurant) => (
					<RestaurantCard key={restaurant.info.id} resData={restaurant} />
				))}
			</Grid>
		</Container>
	)
}

export default Body
