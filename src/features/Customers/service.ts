// customerSlice.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://reqres.in/api/users";

export const customerSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    fetchCutomers: builder.query({
      query: () => "/",
    }),
    fetchSingleCustomer: builder.query({
      query: (id) => `/${id}`,
    }),
    addCustomer: builder.mutation({
      query: (newCustomer) => ({
        url: "/",
        method: "POST",
        body: newCustomer, // Pass the new customer data here
      }),
    }),
    updateCustomer: builder.mutation({
      query: (updatedPost) => ({
        url: `/${updatedPost.id}`, // Use the appropriate URL for your API
        method: "PUT",
        body: updatedPost, // Payload to update the post
      }),
    }),
    deleteCustomer: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useFetchCutomersQuery,
  useAddCustomerMutation,
  useUpdateCustomerMutation,
  useFetchSingleCustomerQuery,
  useDeleteCustomerMutation,
} = customerSlice;
export default customerSlice;
