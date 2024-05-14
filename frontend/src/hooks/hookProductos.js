import { useState, useEffect } from "react";

const useProductos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("https://localhost:8080/productos")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setProductos(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return productos;
};

export default useProductos;
