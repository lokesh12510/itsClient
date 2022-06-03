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
import { useEditProjectByIDMutation } from "./projectApi";

const AddModal = (props, ref) => {
	const [modalState, setModalState] = useState(false);

	const [selectedItem, setSelectedItem] = useState(null);

	// project Api

	const [editProjectById] = useEditProjectByIDMutation();

	useImperativeHandle(ref, () => ({
		openModal: (item) => {
			setSelectedItem(item);
			setModalState(true);
		},
	}));

	const handleChange = (e) => {
		setSelectedItem((item) => ({ ...item, [e.target.name]: e.target.value }));
	};

	if (!modalState) return null;

	const handleEdit = async () => {
		const formData = new FormData();

		formData.append("project_name", selectedItem.project_name);
		formData.append("client_name", selectedItem.client_name);

		await editProjectById(formData).unwrap();
		setModalState(false);
	};

	return (
		<StyledDialog
			open={modalState}
			onClose={() => setModalState(false)}
			minWidth="md"
			fullWidth
		>
			<DialogTitle>Add Project</DialogTitle>
			<Divider />
			<DialogContent style={{ paddingBlock: 30 }}>
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
			</DialogContent>
			<DialogActions>
				<Button onClick={() => setModalState(false)} variant="outlined">
					Cancel
				</Button>
				<StyledBtn onClick={handleEdit} variant="contained" color="info">
					Add
				</StyledBtn>
			</DialogActions>
		</StyledDialog>
	);
};

export default forwardRef(AddModal);
