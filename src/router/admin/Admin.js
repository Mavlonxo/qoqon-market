import React, { useEffect, useState } from "react";
import "./css/Admin.css";
import ManagaProduct from "./manage-product/ManagaProduct";
import CreateProduct from "./create-product/CreateProduct";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import DeliveryProduct from "./delivery-product/DeliveryProduct";
import { db } from "../../server";
import { collection, getDocs } from "firebase/firestore";
import "number-brm";

function Admin() {
  const location = useLocation();

  const [data, setData] = useState([]);
  const productRef = collection(db, "products");

  useEffect(() => {
    const getProducts = async () => {
      const fetchData = await getDocs(productRef);
      setData(fetchData.docs.map((item) => ({ id: item.id, ...item.data() })));
    };
    getProducts();
  }, []);

  const [deliveryData, setDeliveryData] = useState([]);
  const deliveryDataRef = collection(db, "delivery");

  useEffect(() => {
    const getProducts = async () => {
      const fetchData = await getDocs(deliveryDataRef);
      setDeliveryData(
        fetchData.docs.map((item) => ({ id: item.id, ...item.data() }))
      );
    };
    getProducts();
  }, []);

  const [deliveredData, setdeliveredData] = useState([]);
  const deliveredDataRef = collection(db, "delivered");

  useEffect(() => {
    const getProducts = async () => {
      const fetchData = await getDocs(deliveredDataRef);
      setdeliveredData(
        fetchData.docs.map((item) => ({ id: item.id, ...item.data() }))
      );
    };
    getProducts();
  }, []);

  return (
    <div className="admin">
      <div className="admin__panel">
        <div className="sidebar">
          <NavLink to={"/"} className="btn btn-light to__home">
            Bosh sahifa
          </NavLink>
          <h3>
            <NavLink to={"/admin"}>Admin Dashboard</NavLink>
          </h3>
          <NavLink to={"create-product"} className="btn btn-light">
            Mahsulot qo'shish
          </NavLink>
          <NavLink to={"manage-product"} className="btn btn-light">
            Mahsulotlarni boshqarish
          </NavLink>
          <NavLink to={"delivery-product"} className="btn btn-light">
            Buyurtmalarni boshqarish
          </NavLink>
        </div>
        <div className="admin__inform">
          {location.pathname === "/admin" ? (
            <div>
              <div
                style={{ textAlign: "center", margin: 30 }}
                className="admin__title"
              >
                <h3>Assalomu aleykum Admin Panelga xush kelibsiz!!!</h3>
                <p>
                  Ushbu bo'limda siz websaytning umumiy statistikasini
                  olishingiz mumkin
                </p>
              </div>
              <div className="information">
                <div className="details">
                  <h5>Umumiy mahsulotlar soni: </h5>
                  <p>{data.length} ta</p>
                </div>
                <hr />
                <div className="details">
                  <h5>Mahsulot buyurtma bergan foydalanuvchilar: </h5>
                  <p>{deliveryData.length} ta</p>
                </div>
                <hr />
                <div className="details">
                  <h5>Buyurtma holatidagi mahsulotlar soni: </h5>
                  <p>
                    {deliveryData
                      .reduce((a, b) => a + b.cart.length, 0)
                      .brm("int")}{" "}
                    ta
                  </p>
                </div>
                <hr />
                <div className="details">
                  <h5>Buyurtmalarning umumiy qiymati: </h5>
                  <p>
                    {deliveryData?.reduce((a, b) => a + b.hisob, 0).brm("int")}{" "}
                    so'm
                  </p>
                </div>
                <br />
                <br />
                <hr />
                <div className="details">
                  <h5>Mahsuloti yetkazib berilgan foydalanuvchilar: </h5>
                  <p>{deliveredData.length}</p>
                </div>
                <div className="details">
                  <h5>Yetkazib berilgan mahsulotlar soni: </h5>
                  <p>
                    {deliveredData.reduce((a, b) => a + b.cart.length, 0)} ta
                  </p>
                </div>
                <div className="details">
                  <h5>Yetkazib berilgan mahsulotlarning umumiy qiymati: </h5>
                  <p>
                    {deliveredData.reduce((a, b) => a + b.hisob, 0).brm("int")}{" "}
                    so'm
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <Routes>
              <Route path="/create-product" element={<CreateProduct />} />
              <Route path="/manage-product" element={<ManagaProduct />} />
              <Route path="/delivery-product" element={<DeliveryProduct />} />
            </Routes>
          )}
        </div>
      </div>
    </div>
  );
}

export default Admin;
