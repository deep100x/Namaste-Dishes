import React, { useEffect, useState } from "react"
import RestaurantCard from "./RestaurantCard"
import { Grid, Button, Container, Box, TextField } from "@mui/material"
import resList from "../utils/mockData"
import Shimmer from "./Shimmer"

const Body = () => {
	const [listOfRestaurants, setListOfRestaurants] = useState([])
	const [searchText, setSearchText] = useState("")
	const [filteredRestaurants, setFilteredRestaurants] = useState([])

	const fetchData = async () => {
		try {
			// const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING")
			const data = await fetch("https://namaste-dishes.vercel.app/mockdata.json")
			const json = await data.json()
			console.log("json", json)

			let resList = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
			console.log("json", resList)
			setListOfRestaurants(resList || [])
			setFilteredRestaurants(resList || [])
			console.log("listOfRestaurants", listOfRestaurants)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		fetchData()
	}, [])

	useEffect(() => {
		const filteredList = listOfRestaurants.filter((res) => res?.info?.name.toLowerCase().includes(searchText.toLowerCase()))
		setFilteredRestaurants(filteredList)
	}, [searchText, listOfRestaurants])

	// if (listOfRestaurants.length === 0) {
	// 	return <Shimmer showHeader={true} />
	// }

	return listOfRestaurants.length === 0 ? (
		<Shimmer showHeader showCards />
	) : (
		<Container sx={{ pt: 2, minHeight: "100dvh" }}>
			<Box className="Search" sx={{ py: 2, display: "flex", alignItems: "center", gap: 2 }}>
				<TextField label="Search" id="outlined-size-small" size="small" onChange={(e) => setSearchText(e.target.value)} />
				<Button
					variant="outlined"
					color="primary"
					onClick={() => {
						const filteredList = listOfRestaurants.filter((res) => res?.info?.avgRating > 4)
						setFilteredRestaurants(filteredList)
					}}
				>
					Rating 4.0+
				</Button>
			</Box>
			<Grid container spacing={2}>
				{filteredRestaurants.map((restaurant) => (
					<RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
				))}
			</Grid>
		</Container>
	)
}

export default Body
