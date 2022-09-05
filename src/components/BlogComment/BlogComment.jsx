import React from 'react'
import '../BlogComment/blogComment.scss'

function BlogComment() {
    return (
        <section className='blog-comment'>
            <div className="container">
                <div className="bg">
                    <div className="text text-center">
                        <h2>Leave a Reply</h2>
                        <p>Your email address will not be published. Required fields are marked *</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="input-box">
                                <span>Comment *</span>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="input-box">
                                    <span>Name *</span>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="col-lg-4"><div className="input-box">
                                <span>Email *</span>
                                <input type="text" />
                            </div></div>
                            <div className="col-lg-4"><div className="input-box">
                                <span>Website</span>
                                <input type="text" />
                            </div>
                            </div>
                        </div>
                    </div>
                    <button>Post Comment</button>

                </div>
                <div className="comments">
                    <div className="img"><img src="http://1.gravatar.com/avatar/7006abdcae32516b56cefc9ef91925a9?s=132&d=mm&r=g" alt="" /></div>
                    <div className="text">
                        <h2>Furnihaus</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default BlogComment