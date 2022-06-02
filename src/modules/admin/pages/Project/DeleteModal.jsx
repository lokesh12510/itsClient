import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormInputField from "../../../../components/FormInputField";
import { DialogContentText, Divider, Stack, TextField } from "@mui/material";
import { useImperativeHandle } from "react";
import { useState } from "react";
import { forwardRef } from "react";
import palette from "../../../../themes/palette";
import styled from "@emotion/styled";
import { StyledBtn, StyledDialog } from "../../../../themes/GlobalStyles";

const DeleteModal = (props, ref) => {
	const [modalState, setModalState] = useState(false);

	useImperativeHandle(ref, () => ({
		openModal: () => setModalState(true),
	}));

	if (!modalState) return null;

	return (
		<StyledDialog
			open={modalState}
			onClose={() => setModalState(false)}
			minWidth="sm"
			fullWidth
		>
			<DialogTitle>Delete Project</DialogTitle>
			<Divider />
			<DialogContent>
				<DialogContentText align="center">
					Are you sure want to delete the project?
				</DialogContentText>
			</DialogContent>
			<DialogActions style={{ justifyContent: "center" }}>
				<Button onClick={() => setModalState(false)} variant="outlined">
					Cancel
				</Button>
				<StyledBtn
					onClick={() => setModalState(false)}
					variant="contained"
					color="error"
				>
					Delete
				</StyledBtn>
			</DialogActions>
		</StyledDialog>
	);
};

export default forwardRef(DeleteModal);
