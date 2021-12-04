import React, { useEffect, useState } from "react";
import { getProducts } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../Pagination";
const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  useEffect(() => {
    setLoading(true);
    dispatch(getProducts());
    setLoading(false);
  }, [dispatch]);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <h1>Products</h1>
      {currentPosts
        ? currentPosts.map((c) => <h1 key={c.id}>{c.name}</h1>)
        : "not found"}
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={products.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Products;
