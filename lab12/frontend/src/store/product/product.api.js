import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
    reducerPath: "product/api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/api/",
    }),
    tagTypes: ["Product"],
    endpoints: (build) => ({
        getProducts: build.query({
            query: () => ({
                url: "product",
                method: "GET"
            }),
            providesTags: ["Product"]
        }),
        addProduct: build.mutation({
            query: (payload) => ({
                url: "product",
                method: "POST",
                body: payload,
                headers: {
                    'Content-type': 'application/json',
                },
            }),
            invalidatesTags: ["Product"]
        }),
        removeProduct: build.mutation({
            query: (id) => ({
                url: `product/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Product"]
        }),
        updateProduct: build.mutation({
            query: (product) => ({
                url: `product/${product.id}`,
                method: "PUT",
                body: product,
                headers: {
                    'Content-type': 'application/json',
                },
            }),
            invalidatesTags: ["Product"]
        }),
    }),
});

export const {
    useGetProductsQuery,
    useLazyGetProductsQuery,
    useAddProductMutation,
    useUpdateProductMutation,
    useRemoveProductMutation,
} = productApi
