import { textAlign } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../api/Config';
import '../BlogList/blogList.scss'
function BlogList() {

    const [blog, setBlog] = useState([]);

    const getBlogs = async () => {
        await fetch(BASE_URL + "Blog/getall")
            .then((a) => a.json())
            .then((data) => setBlog(data));
    };

    useEffect(() => {
        getBlogs();
    }, []);


    return (
        <div>
            <div className="container">
                <div className="blog-boxes">
                    <h1 className='mb-5' style={{ textAlign: "center" }}>All Blogs</h1>
                    <div className="row">
                        {
                            blog.map((e, index) => (
                                <div className="col-lg-4">
                                    <div className="blog-box">
                                        <div className="img">
                                            <Link style={{ textDecoration: 'none', color: 'black' }} to={'/blog/' + e.id}  >
                                                <img width={300} height={250} src={e.image} alt="blog-photo" />

                                            </Link>
                                        </div>
                                        <div className="img-text">
                                            <h3>{e.title.slice(" ", 50)}</h3>
                                            <p>{e.description.slice(" ", 400)}</p>
                                        </div>
                                    </div>
                                    <Link style={{ textDecoration: 'none', color: 'black' }} to={'/blog/' + e.id}  >
                                        <button>READ MORE</button>
                                    </Link>
                                </div>

                            ))

                        }

                    </div>
                </div>
            </div>

        </div>
    )
}

export default BlogList