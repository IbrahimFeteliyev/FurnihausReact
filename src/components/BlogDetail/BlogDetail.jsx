import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../api/Config';
import { getBlogsAction } from '../../redux/Actions/BlogAction';
import './blogDetail.scss'
function BlogDetail() {
    const { id } = useParams();
    const [blog, setBlogs] = useState([]);
    const dispatch = useDispatch();

    const getBlogs = async () => {
        await fetch(BASE_URL + "Blog/getblogbyid?id=" + id)
            .then((res) => res.json())
            .then((data) => setBlogs(data));
    };

    
    useEffect(() => {
        dispatch(getBlogsAction());
        getBlogs();
    }, [dispatch]);

    return (
        <div>
            <section className='blogpage-section'>
                <div className="img">
                    <img src={blog.coverPhoto} alt="" />
                </div>
                <div className="container">
                    <div className="content">
                        <h2>{blog.title}</h2>
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <div className="left-text">
                                    <div className="text">

                                        <p>{blog.description}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="right-image">
                                    <img src={blog.image} alt="" />
                                </div>
                            </div>
                        </div>




                    </div>
                </div>

            </section>
        </div>
    )
}

export default BlogDetail