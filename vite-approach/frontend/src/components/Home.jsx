import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Home = () => {
  return (
    <div>
      <NavBar />

      <main className="flex bg-cblue-700 h-2/5 justify-center align-center">
        <div className="flex text-clightgreen-200 h-screen">
          <strong className="self-center">Aqui van los productos</strong>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
