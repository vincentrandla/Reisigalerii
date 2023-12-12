import React from "react";
import Navbar from "../components/Navbar";
import "../App.css";
import Footer from "../components/Footer";

const BlogPage = () => {
  return (
    <div className="app">
      <Navbar></Navbar>

      <div>Blog Page</div>
      <Footer />
    </div>
  );
};

export default BlogPage;
