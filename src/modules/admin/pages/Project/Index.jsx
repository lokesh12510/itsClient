import { Button, Stack } from "@mui/material";
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
import ProjectList from "./ProjectList";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useRef } from "react";
import AddModal from "./AddModal";

const Project = () => {
	const addModalRef = useRef();

	const handleAddModalRef = (item) => {
		addModalRef.current.openModal(item);
	};
	return (
		<>
			<StyledContainer>
				<StyledBox>
					{/* Title */}
					<Stack direction={"row"} alignItems="center" justifyContent={"space-between"}>
						<StyledPageTitle variant="h6">Project</StyledPageTitle>
						<Button
							variant="outlined"
							color="info"
							startIcon={<AddCircleIcon />}
							onClick={handleAddModalRef}
						>
							Add
						</Button>
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
					{/* Project List Table */}
					<ProjectList />
				</StyledBox>
			</StyledContainer>

			<AddModal ref={addModalRef} />
		</>
	);
};

export default Project;
