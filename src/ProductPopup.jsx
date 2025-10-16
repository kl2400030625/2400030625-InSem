import React, { useState } from "react";

const ProductPopup = () => {
  const products = [
    {
      id: 1,
      name: "BOOKS",
      price: "₹2,499",
      shortDesc: "Comfortable over-ear sound.",
      image: "https://via.placeholder.com/200x150",
      fullDesc:
        "Experience rich, immersive sound with 40mm drivers and up to 20 hours of playback time."
    },
    {
      id: 2,
      name: "Statinary kit",
      price: "₹3,999",
      shortDesc: "Track fitness and health.",
      image: "https://via.placeholder.com/200x150",
      fullDesc:
        "A stylish smartwatch featuring heart-rate monitoring, step tracking, and message alerts."
    },
    {
      id: 3,
      name: "Book",
      price: "₹1,799",
      shortDesc: "Compact and powerful.",
      image: "https://via.placeholder.com/200x150",
      fullDesc:
        "Enjoy crystal clear sound with deep bass and 10 hours of battery life."
    }
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);

  const openPopup = (product) => setSelectedProduct(product);
  const closePopup = () => setSelectedProduct(null);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>KL University Online Store</h2>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "10px",
              width: "200px",
              textAlign: "center",
              cursor: "pointer"
            }}
            onClick={() => openPopup(product)}
          >
            <img src={product.image} alt={product.name} width="100%" />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <p style={{ fontSize: "14px", color: "gray" }}>{product.shortDesc}</p>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "10px",
              width: "350px",
              textAlign: "center"
            }}
          >
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              width="100%"
              style={{ borderRadius: "8px" }}
            />
            <h2>{selectedProduct.name}</h2>
            <p><b>Price:</b> {selectedProduct.price}</p>
            <p>{selectedProduct.fullDesc}</p>
            <button
              onClick={closePopup}
              style={{
                marginTop: "10px",
                padding: "8px 16px",
                backgroundColor: "#333",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPopup;
