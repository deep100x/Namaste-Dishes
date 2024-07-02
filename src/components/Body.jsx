import React, { useState } from "react"
import RestaurantCard from "./RestaurantCard"
import { Grid, Button, Container, Box } from "@mui/material"
import resList from "../utils/mockData"

const Body = () => {
	const [listOfRestaurants, setListOfRestaurants] = useState(resList)

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
