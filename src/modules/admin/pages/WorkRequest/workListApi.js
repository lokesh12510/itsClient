import { rootApi } from "../../../../app/rootApi";

export const WorkListApi = rootApi.injectEndpoints({
	endpoints: (builder) => ({
		getWorkList: builder.mutation({
			query: (body) => {
				return {
					url: "workrequest",
					method: "POST",
					body,
				};
			},
			invalidatesTags: ["Work"],
		}),
	}),
});

export const { useGetWorkListMutation } = WorkListApi;
