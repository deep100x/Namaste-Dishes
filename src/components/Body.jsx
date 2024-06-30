import React from "react"
import RestaurantCard from "./RestaurantCard"
import { Grid, Button, Container, Box } from "@mui/material"
import resList from "../utils/mockData"

const Body = () => {
	const listOfRestaurants = resList

	return (
		<Container sx={{ pt: 5 }}>
			<Box className="Search" sx={{ px: 2 }}>
				<Button variant="contained" color="primary">
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
