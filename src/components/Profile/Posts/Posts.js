import React, { Component } from "react";

export default class Posts extends Component {
  render() {
    return (
      <div id="fh5co-blog">
        <div className="container">
          <div className="row animate-box">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2>Post</h2>
              <p>Alcuni articoli pubblicati</p>
            </div>
          </div>
          <div className="row">
            {this.props.posts.map(post => {
              return (
                <div key={post.id} className="col-md-4">
                  <div className="fh5co-blog animate-box">
                    <div
                      href="#0"
                      className="blog-bg"
                      style={{ backgroundImage: `url(${post.image})` }}
                    ></div>
                    <div className="blog-text">
                      <span className="posted_on">{post.date}</span>
                      <h3>
                        <a href="#0">{post.title}</a>
                      </h3>
                      <p>{post.content}</p>
                      <ul className="stuff">
                        <li>
                          <i className="icon-heart2"></i>
                          {post.like}
                        </li>
                        <li>
                          <i className="icon-eye2"></i>
                          {post.view}
                        </li>
                        <li>
                          <a href={post.link ? post.link : "#0"}>
                            Read More<i className="icon-arrow-right22"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
