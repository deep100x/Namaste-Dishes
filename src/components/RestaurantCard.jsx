import React from "react"
import { CDN_URL } from "../utils/constants"
import { CardMedia, Typography, Grid, Box } from "@mui/material"
import StarIcon from "@mui/icons-material/Star"
import { useTheme } from "@mui/material/styles"

const RestaurantCard = (props) => {
	const theme = useTheme()
	const { resData } = props

	// Optional Chaining
	const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, deliveryTime } = resData?.data

	return (
		<Grid item xs={12} sm={6} md={4} lg={3}>
			<Box sx={{ transition: "all 0.12s linear", "&:hover": { scale: "0.95" }, cursor: "pointer" }}>
				<Box sx={{ position: "relative" }}>
					<Box
						sx={{
							position: "absolute",
							width: "100%",
							left: 0,
							bottom: 0,
							height: "80px",
							background: "linear-gradient(rgba(27, 30, 36, 0) 0%, rgb(27, 30, 36) 84.21%);",
							borderRadius: "0 0 20px 20px ",
						}}
					/>
					<CardMedia
						component="img"
						sx={{
							height: "200px",
							minWidth: "100%",
							borderRadius: "20px",
						}}
						image={`${CDN_URL}${cloudinaryImageId}`}
						alt="content"
					/>
				</Box>
				<Box sx={{ padding: { xs: "5px 0 0 5px", md: "10px 0 0 10px" } }}>
					<Typography component="div" variant="body1" sx={{ fontWeight: 700 }} noWrap>
						{name}
					</Typography>
					<Box sx={{ color: theme.palette.darkmd, display: "flex", alignItems: "center", gap: 0.5 }}>
						<Typography sx={{ display: "flex", alignItems: "center", gap: 0.5, fontWeight: 600 }}>
							<StarIcon sx={{ color: "#fff", backgroundColor: "#158840", fontSize: "15px", padding: "2px", borderRadius: "50%" }} />
							{avgRating}
						</Typography>
						•
						<Typography variant="body2" sx={{ fontWeight: 600 }}>
							{deliveryTime}-{deliveryTime + 5} mins
						</Typography>
					</Box>
					{/* <Typography color="textSecondary" variant="body2">
						₹{costForTwo / 100}
					</Typography> */}
					<Typography
						variant="body2"
						gutterBottom
						sx={{ color: theme.palette.darkmd, display: "-webkit-box", overflow: "hidden", textOverflow: "ellipsis", WebkitLineClamp: 1, WebkitBoxOrient: "vertical" }}
					>
						{cuisines?.join(", ")}
					</Typography>
				</Box>
			</Box>
		</Grid>
	)
}

export default RestaurantCard
