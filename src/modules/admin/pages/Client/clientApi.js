import { rootApi } from "../../../../app/rootApi";

export const ClientApi = rootApi.injectEndpoints({
	endpoints: (builder) => ({
		getClientList: builder.mutation({
			query: (body) => {
				return {
					url: "clientList",
					method: "POST",
					body,
				};
			},
			invalidatesTags: ["Client"],
		}),
	}),
});

export const { useGetClientListMutation } = ClientApi;
