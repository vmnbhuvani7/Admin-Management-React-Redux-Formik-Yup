import { ADD_POST, DELETE_POST, UPDATE_DATA, UPDATE_POST } from "../type/postType"

export const addManager = (post) => {
    return { type: ADD_POST, post }
}
export const deletePost = (id) => {
    return { type: DELETE_POST, id }
}
export const updatePost = (post) => {
    return { type: UPDATE_POST, post }
}
export const updateData = (post) => {
    return { type: UPDATE_DATA, post }
}