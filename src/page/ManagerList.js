import React from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { deletePost, updatePost } from '../action/managerAction';

const ManagerList = (props) => {
    const dispatch = useDispatch();

    let { posts } = useSelector(state => {
        return state
    })
    return (
        <>
            <div className="container mt-3">
                <div className=" d-flex justify-content-end mt-5 mb-3"><button className="btn btn-success" >
                    <Link to="adddata">Add Manager</Link>
                </button>
                </div>
                <div className="row">
                    <table className="table table-striped">
                        <thead className="">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Address</th>
                                <th scope="col">Hobby</th>
                                <th scope="col">BirthDate</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts &&
                                posts.map((post) =>
                                    <tr key={post.id}>
                                        <th scope="row">{post.id}</th>
                                        <td>{post.name}</td>
                                        <td>{post.email}</td>
                                        <td>{post.address}</td>
                                        <td>{post.hobby.join(',')}</td>
                                        <td>{post.birthdate}</td>
                                        <td>{post.gender}</td>
                                        <td>
                                            <button className="btn btn-danger mr-1" onClick={() => dispatch(deletePost(post.id))}>Delete</button>
                                            <button className="btn btn-danger" onClick={() => dispatch(updatePost(post))}><Link to="adddata">Update</Link></button>
                                        </td>
                                    </tr>
                                )}

                        </tbody>
                    </table>

                </div>
            </div>
        </>
    )
}

export default ManagerList
