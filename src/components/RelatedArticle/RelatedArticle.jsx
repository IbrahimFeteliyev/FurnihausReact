import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { BASE_URL } from '../../api/Config';
import '../RelatedArticle/relatedArticle.scss'


function RelatedArticle() {
    const { id } = useParams();

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
        <section className='related-section'>
            <div className="container">
                <div className="row">
                    {
                        blog.filter(x => x.id != id).map((e, index) => (
                            <div className="col-lg-6"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                key={index}
                            >
                                <div className="blog-box">
                                    <Link target="_blank" style={{ textDecoration: 'none', color: 'black' }} to={'/blog/' + e.id}  >
                                        <div className="blog-img">
                                            <img src={e.image} alt="" />
                                        </div>
                                    </Link>

                                    <div className="blog-text">
                                        <div className="text-top mb-2">
                                            <span>{e.publishDate}</span>
                                            <span>Furnihaus</span>
                                        </div>
                                        <h2>{e.title.slice(" ", 50)}..</h2>
                                        <p>{e.description.slice(" ", 200)}...</p>
                                        <Link target="_blank" style={{ textDecoration: 'none', color: 'black' }} to={'/blog/' + e.id}  >
                                            <button>READ MORE</button>
                                        </Link>

                                    </div>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default RelatedArticle