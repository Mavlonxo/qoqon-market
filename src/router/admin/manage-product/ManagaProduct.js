import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductWrapper from "../../../components/product-wrapper/ProductWrapper";
import Skeleton from "../../../components/skeleton/Skeleton";
import { db } from "../../../server";

function ManagaProduct() {
  const [data, setData] = useState([]);
  const productRef = collection(db, "products");
  const proReload = useSelector((s) => s.proReload.value);

  useEffect(() => {
    const getProducts = async () => {
      const fetchData = await getDocs(productRef);
      setData(fetchData.docs.map((item) => ({ id: item.id, ...item.data() })));
    };
    getProducts();
  }, [proReload]);
  return (
    <div style={{ padding: 30 }}>
      <h3 style={{ color: "gray" }}>
        Ushbu bo'limda siz mahsulotlarni o'chirishingiz mumkin
      </h3>
      {data.length ? (
        <ProductWrapper admin={true} product={data} />
      ) : (
        <Skeleton />
      )}
    </div>
  );
}

export default ManagaProduct;
