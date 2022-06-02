import { rootApi } from "../../../../app/rootApi";

export const BadgeApi = rootApi.injectEndpoints({
	endpoints: (builder) => ({
		getBadgeList: builder.mutation({
			query: (body) => {
				return {
					url: `badge/${body.project_id}`,
					method: "POST",
					body,
				};
			},
			invalidatesTags: ["Badge"],
		}),
	}),
});

export const { useGetBadgeListMutation } = BadgeApi;
