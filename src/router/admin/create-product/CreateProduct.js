import React, { useRef, useState } from "react";

import { db } from "../../../server";
import { collection, addDoc } from "firebase/firestore";

function CreateProduct() {
  const [loading, setLoading] = useState(false);

  const productRef = collection(db, "products");

  const title = useRef();
  const price = useRef();
  const url = useRef();
  const secondUrl = useRef();
  const thirdUrl = useRef();
  const fourthUrl = useRef();
  const fifthUrl = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let newProduct = {
      title: title.current.value,
      price: +price.current.value,
      url: url.current.value,
      additionalImages: [
        secondUrl.current.value,
        thirdUrl.current.value,
        fourthUrl.current.value,
        fifthUrl.current.value,
      ],
    };
    await addDoc(productRef, newProduct)
      .then((res) => {
        title.current.value = "";
        price.current.value = "";
        url.current.value = "";
        secondUrl.current.value = "";
        thirdUrl.current.value = "";
        fourthUrl.current.value = "";
        fifthUrl.current.value = "";
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  return (
    <div className="create__product">
      <h3>Mahsulot qo'shish uchun formani to'ldiring!</h3>
      <form className="input-group mb-3" onSubmit={handleSubmit}>
        <div>
          <input
            required
            ref={title}
            type="text"
            className="form-control"
            placeholder="Mahsulot nomi"
          />
        </div>
        <div className="div">
          <input
            required
            ref={price}
            type="number"
            className="form-control"
            placeholder="Mahsulot narhi"
          />
        </div>
        <div>
          <input
            required
            ref={url}
            type="text"
            className="form-control"
            placeholder="Mahsulot rasmi"
          />
        </div>
        <div>
          <input
            required
            ref={secondUrl}
            type="text"
            className="form-control"
            placeholder="Mahsulot uchun qo'shimcha rasm"
          />
        </div>
        <div>
          <input
            required
            ref={thirdUrl}
            type="text"
            className="form-control"
            placeholder="Mahsulot uchun qo'shimcha rasm"
          />
        </div>
        <div>
          <input
            ref={fourthUrl}
            type="text"
            className="form-control"
            placeholder="Mahsulot uchun qo'shimcha rasm (Ixtiyoriy)"
          />
        </div>
        <div>
          <input
            ref={fifthUrl}
            type="text"
            className="form-control"
            placeholder="Mahsulot uchun qo'shimcha rasm (Ixtiyoriy)"
          />
        </div>
        <button disabled={loading} className="btn btn-primary">
          {loading ? "Jo'natilyapti" : "Jo'natish"}
        </button>
      </form>
    </div>
  );
}

export default CreateProduct;
