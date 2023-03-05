import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../api/Config';
import '../Blog/blog.scss'


const Blog = () => {
    const [blog, setBlog] = useState([]);

    const getBlogs = async () => {
        fetch(BASE_URL + "Blog/getall")
            .then((a) => a.json())
            .then((data) => setBlog(data));
    };

    useEffect(() => {
        getBlogs();
    }, []);



    return (
        <section className='blog-section'>
            <div className="container">
                <div className="row">
                    {
                        blog.map((e, index) => (
                            <div className="col-lg-6 col-12"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                key={index}
                            >
                                <div className="blog-box mb-4">
                                    <Link style={{ textDecoration: 'none', color: 'black' }} to={'/blog/' + e.id}  >
                                        <div className="blog-img">
                                            <img src="https://themes.wpmarvels.com/furnihaus/demo/wp-content/uploads/2018/04/neonbrand-381344-unsplash-670x411.jpg" alt="" />
                                        </div>
                                    </Link>

                                    <div className="blog-text">
                                        <div className="text-top mb-2">
                                            <span>{e.publishDate}</span>
                                            <span>Furnihaus</span>
                                        </div>
                                        <h2>{e.title.slice(" ", 40)}..</h2>
                                        <p>{e.description.slice(" ", 200)}...</p>
                                        <Link style={{ textDecoration: 'none', color: 'black' }} to={'/blog/' + e.id}  >
                                            <button>READ MORE</button>
                                        </Link>

                                    </div>
                                </div>


                            </div>
                        ))
                    }












                    {/* {
                        blog.map((e, index) => (
                            <div className="col-lg-6 col-12"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                key={index}
                            >
                                <div className="blog-box">
                                    <Link style={{ textDecoration: 'none', color: 'black' }} to={'/blog/' + e.id}  >
                                        <div className="blog-img">
                                            <img src="https://themes.wpmarvels.com/furnihaus/demo/wp-content/uploads/2018/04/neonbrand-381344-unsplash-670x411.jpg" alt="" />
                                        </div>
                                    </Link>

                                    <div className="blog-text">
                                        <div className="text-top mb-2">
                                            <span>{e.publishDate}</span>
                                            <span>Furnihaus</span>
                                        </div>
                                        <h2>{e.title.slice(" ", 50)}..</h2>
                                        <p>{e.description.slice(" ", 200)}...</p>
                                        <Link style={{ textDecoration: 'none', color: 'black' }} to={'/blog/' + e.id}  >
                                            <button>READ MORE</button>
                                        </Link>

                                    </div>
                                </div>
                                

                            </div>
                        ))
                    } */}

                </div>
            </div>
        </section >
    )
}

export default Blog