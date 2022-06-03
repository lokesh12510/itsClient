import { api } from "../../../../app/api";

export const ClientApi = api.injectEndpoints({
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
