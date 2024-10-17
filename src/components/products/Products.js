import React, { useEffect, useState } from "react";
import ProductWrapper from "../product-wrapper/ProductWrapper";
import { productData } from "../../static/data";
import { db } from "../../server";
import { collection, getDocs } from "firebase/firestore";
import Skeleton from "../skeleton/Skeleton";

function Products() {
  const [data, setData] = useState([]);
  const productRef = collection(db, "products");

  useEffect(() => {
    const getProducts = async () => {
      const fetchData = await getDocs(productRef);
      setData(fetchData.docs.map((item) => ({ id: item.id, ...item.data() })));
    };
    getProducts();
  }, []);

  return (
    <div className="container">
      {data.length ? <ProductWrapper product={data} /> : <Skeleton />}
    </div>
  );
}

export default Products;
