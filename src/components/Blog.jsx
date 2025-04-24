import React from "react"
import "./Blog.css"
import Layout from "./Layout"

function Blog() {
  return (
    <Layout>
      <div className="blog-page">
        <h1>Blog</h1>
        <div className="blog-list">
          <div className="blog-item">
            <h2>Blog Post Title</h2>
            <p>Blog post content goes here...</p>
          </div>
          {/* Add more blog posts as needed */}
        </div>
      </div>
    </Layout>
  )
}

export default Blog
