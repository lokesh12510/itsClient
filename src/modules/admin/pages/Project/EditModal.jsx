import * as React from "react";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Divider, Stack, TextField } from "@mui/material";
import { useImperativeHandle } from "react";
import { useState } from "react";
import { forwardRef } from "react";
import { StyledBtn, StyledDialog } from "../../../../themes/GlobalStyles";
import {
	useEditProjectByIDMutation,
	useProjectListMutation,
} from "./projectApi";

const EditModal = (props, ref) => {
	const [modalState, setModalState] = useState(false);

	const [selectedItem, setSelectedItem] = useState(null);

	// project Api
	const [projectList] = useProjectListMutation();

	const [editProjectById, { data, isLoading, isSuccess, isError }] =
		useEditProjectByIDMutation();

	useImperativeHandle(ref, () => ({
		openModal: (item) => {
			console.log(item);
			setSelectedItem(item);
			setModalState(true);
		},
	}));

	const handleChange = (e) => {
		console.log(e.target.name, e.target.value);
		setSelectedItem((item) => ({ ...item, [e.target.name]: e.target.value }));

		console.log(selectedItem);
	};

	if (!modalState) return null;

	const handleEdit = () => {
		const formData = new FormData();

		formData.append("id", selectedItem.id);
		formData.append("project_code", selectedItem.project_code);
		formData.append("project_name", selectedItem.project_name);
		formData.append("client_name", selectedItem.client_name);
		formData.append("createdAt", selectedItem.createdAt);
		formData.append("updatedAt", new Date());

		editProjectById(formData);

		projectList({ page: 1, perPage: 10, filterText: "" });

		setModalState(false);
	};

	return (
		<StyledDialog
			open={modalState}
			onClose={() => setModalState(false)}
			minWidth="md"
			fullWidth
		>
			<DialogTitle>Edit Project</DialogTitle>
			<Divider />
			<DialogContent style={{ paddingBlock: 30 }}>
				{selectedItem && (
					<Stack spacing={3}>
						<TextField
							name="project_name"
							label="Project Name"
							onChange={(e) => handleChange(e)}
							value={selectedItem.project_name}
						/>
						<TextField
							name="client_name"
							label="Client Name"
							onChange={(e) => handleChange(e)}
							value={selectedItem.client_name}
						/>
					</Stack>
				)}
			</DialogContent>
			<DialogActions>
				<Button onClick={() => setModalState(false)} variant="outlined">
					Cancel
				</Button>
				<StyledBtn onClick={handleEdit} variant="contained" color="info">
					Submit
				</StyledBtn>
			</DialogActions>
		</StyledDialog>
	);
};

export default forwardRef(EditModal);
