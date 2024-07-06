import React from "react"
import { Box, Container, Grid, Skeleton, Typography } from "@mui/material"
import Loader from "./Loader"

const Shimmer = ({ showHeader = true }) => {
	return (
		<Box sx={{ marginY: 2 }}>
			{showHeader && (
				<Box
					sx={{
						backgroundColor: "#171a29",
						color: "#fff",
						height: "350px",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						mb: 5,
					}}
				>
					<Loader />
					<Typography variant="h5" sx={{ mt: 2 }}>
						Looking for great food near you ...
					</Typography>
				</Box>
			)}
			<Container>
				<Box
					sx={{
						pt: 2,
						display: "flex",
						alignItems: "flex-start",
						gap: 8,
						height: "100vh",
					}}
				>
					<Box
						sx={{
							minWidth: "20%",
							height: "100%",
							display: { xs: "none", lg: "flex" },
							flexDirection: "column",
						}}
					>
						<Skeleton animation="wave" variant="rectangular" width="100%" sx={{ minHeight: "600px" }} />
					</Box>
					<Grid container spacing={2} sx={{ width: "75%" }}>
						{[...Array(6)].fill(null).map((_, index) => (
							<Grid item xs={12} sm={6} md={4} key={index}>
								<Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
									<Skeleton animation="wave" variant="rectangular" width="100%" sx={{ height: "200px", borderRadius: "2.5px" }} />
									<Skeleton animation="wave" variant="text" width="80%" height={30} />
									<Skeleton animation="wave" variant="text" width="50%" height={30} />
								</Box>
							</Grid>
						))}
					</Grid>
				</Box>
			</Container>
		</Box>
	)
}

export default Shimmer
