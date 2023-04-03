import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../Categories/categories.scss'
import { BASE_URL } from '../../api/Config';


function Categories() {

    const [category, setCategory] = useState([]);

    const getCategories = async () => {
        await fetch(BASE_URL + "category/getallFeatured")
            .then((a) => a.json())
            .then((data) => setCategory(data));
    };

    useEffect(() => {
        getCategories();
    }, []);


    return (
        <section className='category-section'>
            <div className="container">
                <div className="category-boxes">
                    <h2 className='text-center mb-5'>Popular Categories</h2>
                    <div className="row">
                        {
                            category.map((e, index) => (
                                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-up"
                                    data-aos-duration="1000">
                                    <div className="category-box my-2">
                                        <Link to="/shop">
                                            <img src={e.photoUrl} alt="" />
                                            <div className="category-text">
                                                <span>{e.name}</span>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="button mt-4" data-aos="fade-up"
                        data-aos-duration="1000">
                        <Link to="/shop">
                           SHOP NOW
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Categories