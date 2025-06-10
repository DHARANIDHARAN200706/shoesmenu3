import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // ✅ Important

export default function Item({ item }) {
  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = useState('small');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div style={{ margin: '60px' }} className="shadow-lg p-3 mb-5 bg-white rounded">
      <h1>{item.name}</h1>

      {/* ✅ Modal trigger only on image click */}
      <img
        src={item.image}
        style={{ width: '200px', height: '200px', cursor: 'pointer' }}
        alt=""
        onClick={handleShow}
      />

      <div className="flex">
        <div className="w-100 m-1">
          <p>varients</p>
          <select
            className="form-control"
            value={varient}
            onChange={(e) => {
              setVarient(e.target.value);
            }}
          >
            {item.varients.map((v, i) => (
              <option value={v} key={i}>
                {v}
              </option>
            ))}
          </select>
        </div>

        <div className="w-100 m-1">
          <p>quantity</p>
          <select
            className="form-control"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((_, i) => (
              <option value={i + 1} key={i}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex">
        <div className="w-100 price m-1">
          <h1 className="mt-2">Price: {item.price[0][varient] * quantity}-/Rs</h1>
        </div>
        <div className="w-100 car m-1">
          <button className="mt-1">Add To Cart</button>
        </div>
      </div>

      {/* ✅ Modal with close functionality working */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{item.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <center>
            <img src={item.image} style={{ width: '200px' }} alt="" />
          </center>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn btn-secondary" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
