import { api } from "../../../../app/api";

export const ProjectApi = api.injectEndpoints({
	endpoints: (builder) => ({
		projectList: builder.mutation({
			query: (body) => {
				console.log(body);
				return {
					url: "project",
					method: "POST",
					body,
				};
			},
			providesTags: ["Project"],
		}),
		// projectList: builder.query({
		// 	query: (body) => {
		// 		console.log(body);
		// 		return {
		// 			url: "project",
		// 			method: "POST",
		// 			body,
		// 		};
		// 	},
		// 	providesTags: ["Project"],
		// }),
		editProjectByID: builder.mutation({
			query: (body) => {
				return {
					url: "project/store",
					method: "POST",
					body,
				};
			},
			invalidatesTags: ["Project"],
		}),
	}),
});

export const { useProjectListMutation, useEditProjectByIDMutation } =
	ProjectApi;
