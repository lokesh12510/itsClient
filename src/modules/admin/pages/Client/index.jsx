import {
	Box,
	Breadcrumbs,
	Button,
	Link as LinkText,
	Stack,
	Typography,
} from "@mui/material";
import React from "react";
import {
	StyledBox,
	StyledBtn,
	StyledContainer,
	StyledDivider,
	StyledInput,
	StyledPageTitle,
	StyledSearchContainer,
} from "../../../../themes/GlobalStyles";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import ProjectList from "../Project/ProjectList";
import { Link } from "react-router-dom";
import ClientList from "./ClientList";

const Client = () => {
	return (
		<StyledContainer>
			<StyledBox>
				{/* Title */}
				<Stack direction={"row"} alignItems="center" justifyContent={"space-between"}>
					<StyledPageTitle variant="h6">Client List</StyledPageTitle>
				</Stack>
				<StyledDivider />
				{/* Search Bar */}
				<StyledSearchContainer alignItems={"center"} direction="row" spacing={2} mb={2}>
					<StyledInput
						placeholder="Search Client"
						sx={{ maxWidth: { xs: "100%", md: "500px" } }}
					/>
					<StyledBtn color="info" variant="contained">
						Search
					</StyledBtn>
				</StyledSearchContainer>
				<ClientList />
			</StyledBox>
		</StyledContainer>
	);
};

export default Client;
