import * as React from "react";
import Paper from "@mui/material/Paper";
import { StyledTableContainer } from "../../../../themes/GlobalStyles";
import { GridActionsCellItem } from "@mui/x-data-grid";

import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRef } from "react";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";
import { useProjectListMutation, useProjectListQuery } from "./projectApi";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DataTable from "../../../../components/DataTable";
import { useState } from "react";
import { adminUrls } from "../../urls";

export default function ProjectList() {
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(5);

	const initialTableValues = {
		loading: false,
		rows: [],
		rowCount: 0,
		page: 0,
		pageSize: 10,
		search: {},
		filterText: "",
	};

	const [tableValues, setTableValues] = useState(initialTableValues);

	const navigate = useNavigate();

	const projectListHeader = [
		{
			field: "project_code",
			headerName: "Code",
			width: 150,
			flex: 1,
		},
		{
			field: "project_name",
			headerName: "Project",
			width: 150,
			flex: 2,
		},
		{
			field: "client_name",
			headerName: "Client",
			width: 110,
			flex: 2,
		},
		{
			field: "Action",
			headerName: "Action",
			width: 110,
			flex: 1,
			renderCell: (params) => [
				<GridActionsCellItem
					icon={<EmojiEventsIcon />}
					label="badge"
					onClick={() => navigate(`${adminUrls.badge}/${params.id}`)}
				/>,
				<GridActionsCellItem
					icon={<EditIcon />}
					label="Edit"
					onClick={() => handleOpenEditModalRef(params.row)}
				/>,
				<GridActionsCellItem
					icon={<DeleteIcon />}
					label="Delete"
					onClick={() => handleDeleteModalRef(params.row)}
				/>,
			],
		},
	];

	const editModalRef = useRef();

	const handleOpenEditModalRef = (item) => {
		editModalRef.current.openModal(item);
	};

	const deleteModalRef = useRef();

	const handleDeleteModalRef = (item) => {
		deleteModalRef.current.openModal(item);
	};

	// project Api
	const [projectList, { isLoading, isError, isSuccess, data: projectData }] =
		useProjectListMutation();

	// table list
	useEffect(() => {
		projectList({
			page: tableValues.page + 1,
			perPage: tableValues.pageSize,
			filterText: tableValues.filterText,
		});
		// getProjectList();
	}, [tableValues.page, tableValues.pageSize, tableValues.search]);

	return (
		<>
			<StyledTableContainer component={Paper}>
				{!isLoading && projectData && (
					<DataTable
						getRowId={(row) => row.project_code}
						loading={isLoading}
						columns={projectListHeader}
						rows={projectData.list}
						rowCount={projectData.total}
						page={tableValues.page}
						pageSize={tableValues.pageSize}
						onPageChange={(page) => {
							setTableValues((prev) => ({ ...prev, page: page }));
						}}
						onPageSizeChange={(pageSize) => {
							setTableValues((prev) => ({ ...prev, pageSize: pageSize }));
						}}
					/>
				)}
			</StyledTableContainer>

			<EditModal ref={editModalRef} />
			<DeleteModal ref={deleteModalRef} />
		</>
	);
}
