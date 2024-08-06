

export const AddFavourite = async (payload) => {
    return apiClient.post("/favourites", payload)
};

export const DeleteFavourite = async (id) => {
    return apiClient.delete(`/favourites/${id}`, id)
};