import { ADD_POST, DELETE_POST, UPDATE_POST } from "../type/postType";

const initialState = {
    posts: [
        { id: 1, name: "abc", age: 21, email: "test1@gmail.com", address: "vadodra", hobby: ["Cricke"], gender: "female", birthdate: "10 / 19 / 2020" },
        { id: 2, name: "pqr", age: 21, email: "test2@gmail.com", address: "surat", hobby: ["Cricke", "Game"], gender: "male", birthdate: "12 / 19 / 2020" }
    ],
    update: []
}
// const initialState = {
//     posts: [JSON.parse(localStorage.getItem('testObject'))]
// }
const ManagerReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_POST:
            const newPost = state.posts.filter(post => post.id !== action.id)
            return {
                posts: newPost,
            }
        case UPDATE_POST:
            const updatePost = state.posts.filter(post => action.post.id === post.id)
            return {
                posts: state.posts,
                update: updatePost,
            }
        case ADD_POST:
            // initialState.posts = [action.post, ...state.posts]
            // localStorage.setItem('testObject', JSON.stringify(initialState.posts))
            // return initialState.posts
            return {
                posts: [action.post, ...state.posts],
            }
        default:
            return state
    }
};

export default ManagerReducer;