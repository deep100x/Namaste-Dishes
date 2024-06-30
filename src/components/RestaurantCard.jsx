import React from "react"
import { CDN_URL } from "../utils/constants"
import { Card, CardMedia, CardContent, Typography, Grid } from "@mui/material"
import { FaStar } from "react-icons/fa"

const RestaurantCard = (props) => {
	const { resData } = props

	// Optional Chaining
	const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, deliveryTime } = resData?.data

	return (
		<Grid item xs={12} sm={6} md={3}>
			<Card sx={{ bgcolor: "grey.100", borderRadius: 2 }}>
				<CardMedia
					component="img"
					sx={{
						minHeight: "12rem",
						maxHeight: "12rem",
						transition: "transform 0.3s",
						"&:hover": { transform: "scale(1.1)" },
						borderRadius: 1,
					}}
					image={`${CDN_URL}${cloudinaryImageId}`}
					alt="content"
				/>
				<CardContent>
					<Typography color="primary" gutterBottom>
						{cuisines?.join(", ")}
					</Typography>
					<Typography component="div" noWrap>
						{name}
					</Typography>
					<Typography color="textSecondary">₹{costForTwo / 100}</Typography>
					<Typography>{deliveryTime} minutes</Typography>
					<Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
						{avgRating}
						<FaStar />
					</Typography>
				</CardContent>
			</Card>
		</Grid>
	)
}

export default RestaurantCard
