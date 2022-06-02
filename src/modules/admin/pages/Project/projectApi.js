import { rootApi } from "../../../../app/rootApi";

export const ProjectApi = rootApi.injectEndpoints({
	endpoints: (builder) => ({
		projectList: builder.mutation({
			query: (body) => {
				return {
					url: "project",
					method: "POST",
					body,
				};
			},
			invalidatesTags: ["Project"],
		}),
		editProjectByID: builder.mutation({
			query: (body) => {
				return {
					url: "project/store",
					method: "POST",
					body,
				};
			},
			invalidatesTags: [{ type: "Project", id: "LIST" }],
		}),
	}),
});

export const { useProjectListMutation, useEditProjectByIDMutation } =
	ProjectApi;
