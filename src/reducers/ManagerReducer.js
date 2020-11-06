import { toast } from "react-toastify";

import { ADD_POST, DELETE_POST, UPDATE_DATA, UPDATE_POST } from "../type/postType";

// const initialState = {
//     posts: [
//         { id: 1, name: "vaman", age: 22, email: "test1@gmail.com", address: "vadodra", hobby: ["Cricket"], gender: "female", birthdate: "11/19/2020" },
//         { id: 2, name: "kaushik", age: 21, email: "test2@gmail.com", address: "surat", hobby: ["Cricket", "Game"], gender: "male", birthdate: "12/19/2020" },
//         { id: 3, name: "satish", age: 20, email: "test3@gmail.com", address: "ahemdabad", hobby: ["Cricket", "Game", "Travel"], gender: "male", birthdate: "13/19/2020" }
//     ],
//     update: []
// }
const initialState = {
    posts: JSON.parse(localStorage.getItem('testObject')),
    update: []
}
const ManagerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            initialState.posts = [action.post, ...state.posts]
            localStorage.setItem('testObject', JSON.stringify(initialState.posts))
            return {
                posts: initialState.posts,
            }

        case DELETE_POST:
            if (window.confirm('Are you sure delete the record ?')) {

                const newPost = state.posts.filter(post => post.id !== action.id)
                localStorage.setItem('testObject', JSON.stringify(newPost))
                toast.success("Delete Successfully", { position: toast.POSITION.TOP_CENTER }, { autoClose: 15000 })
                return {
                    posts: newPost,
                }
            }else {
                return {
                    posts: state.posts
                }
            }

        case UPDATE_DATA:
            const modifiedData = state
            modifiedData.posts.map((item, index) => {
                if (item.id == action.post.id) {
                    item.name = action.post.name
                    item.address = action.post.address
                    item.birthdate = action.post.birthdate
                    item.email = action.post.email
                    item.gender = action.post.gender
                    item.hobby = action.post.hobby
                }
            })
            localStorage.setItem('testObject', JSON.stringify(modifiedData.posts))
            return {
                posts: modifiedData.posts
            }

        case UPDATE_POST:
            const updatePost = state.posts.filter(post => action.post.id === post.id)
            return {
                posts: state.posts,
                update: updatePost ? updatePost : state.posts.update,
            }


        default:
            return state
    }
};

export default ManagerReducer;