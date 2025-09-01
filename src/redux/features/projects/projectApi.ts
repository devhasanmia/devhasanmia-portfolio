import { RootApi } from "../../services/RootApi";

const projectApi = RootApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProject: builder.query({
      query: () => ({
        url: "/project/all",
        method: "GET",
      }),
      providesTags: ["project"],
    }),
    getSingleProject: builder.query({
      query: (id) => ({
        url: `/project/${id}`,
        method: "GET",
      }),
      providesTags: ["project"],
    }),
    // updateClassSchedule: builder.mutation({
    //   query: ({ id, payload }) => ({
    //     url: `/class-schedule/${id}`,
    //     method: "PATCH",
    //     data: payload
    //   }),
    //   invalidatesTags: ["schedule"],
    // }),
    // deleteClassSchedule: builder.mutation({
    //   query: (id ) => ({
    //     url: `/class-schedule/${id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["schedule"],
    // }),
  })
});

export const { useGetAllProjectQuery, useGetSingleProjectQuery } = projectApi;
