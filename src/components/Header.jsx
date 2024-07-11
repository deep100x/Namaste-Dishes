import React, { useState } from "react"
import { Box, Button, Typography } from "@mui/material"
import { useTheme } from "@mui/material/styles"
import SearchIcon from "@mui/icons-material/Search"
import PercentIcon from "@mui/icons-material/Percent"
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt"
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined"
import { Link } from "react-router-dom"

const Header = () => {
	const theme = useTheme()
	const [login, setLogin] = useState("Login")

	return (
		<Box>
			<Box sx={{ height: "80px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 1, maxWidth: "1350px", marginX: "auto" }}>
				<Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
					<Box
						component="img"
						sx={{
							width: { xs: "45px", md: "60px" },
							height: "auto",
							objectFit: "cover",
							border: "1px solid white",
						}}
						alt="Logo"
						src="/logo.png"
					/>
					<Box sx={{ display: "flex", alignItems: "baseline" }}>
						<Typography
							variant="h4"
							sx={{
								fontWeight: 600,
								background: "linear-gradient(to right, #e58c33,#e58c33,#e58c33, #edae2f,#edae2f)",
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent",
							}}
						>
							NamasteDishes
						</Typography>
						<Typography
							variant="body1"
							sx={{
								fontWeight: 600,
								background: theme.palette.orange,
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent",
							}}
						>
							.com
						</Typography>
					</Box>
					<Box sx={{ display: "flex", alignItems: "center", pl: 1.5 }}>
						<Typography
							variant="body2"
							sx={{
								"&:hover": {
									color: theme.palette.orange,
									borderBottom: "2.5px solid #e58c33",
								},
								fontWeight: 600,
								color: theme.palette.darkmd,
								cursor: "pointer",
								borderBottom: "2.5px solid #43464a",
							}}
						>
							Location
						</Typography>
					</Box>
				</Box>
				<Box sx={{ display: "flex", gap: 5 }}>
					<Typography
						component={Link}
						to="/search"
						variant="body2"
						sx={{
							display: "flex",
							alignItems: "center",
							fontWeight: 600,
							color: theme.palette.darkmd,
							cursor: "pointer",
							textDecoration: "none",
						}}
					>
						<SearchIcon sx={{ fontSize: "25px", padding: "2px", borderRadius: "50%" }} />
						Search
					</Typography>
					<Typography variant="body2" sx={{ display: "flex", alignItems: "center", fontWeight: 600, color: theme.palette.darkmd, cursor: "pointer" }}>
						<PercentIcon sx={{ fontSize: "21px", padding: "2px", borderRadius: "50%" }} />
						Offers
					</Typography>
					<Typography variant="body2" sx={{ display: "flex", alignItems: "center", fontWeight: 600, color: theme.palette.darkmd, cursor: "pointer" }}>
						<PsychologyAltIcon sx={{ fontSize: "25px", padding: "2px", borderRadius: "50%" }} />
						Help
					</Typography>
					<Button
						variant="contained"
						size="medium"
						onClick={() => {
							login === "Login" ? setLogin("Logout") : setLogin("Login")
						}}
					>
						{login}
					</Button>
					<Typography variant="body2" sx={{ display: "flex", alignItems: "center", fontWeight: 600, color: theme.palette.darkmd, cursor: "pointer" }}>
						<LocalMallOutlinedIcon sx={{ fontSize: "25px", padding: "2px", borderRadius: "50%" }} />
						Cart
					</Typography>
				</Box>
			</Box>
		</Box>
	)
}

export default Header
