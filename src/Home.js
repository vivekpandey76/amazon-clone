import React from "react";
import "./Home.css";

import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg"
          alt="Background_banner"
          className="home__img"
        />
      </div>
      <div className="home__row">
        <Product
          id="1"
          title=" Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the
          Poor and Middle Class Do Not!"
          image="https://images-na.ssl-images-amazon.com/images/I/91VokXkn8hL.jpg"
          prize={470}
          rating={5}
        />
        <Product
          id="2"
          title="LG 7 Kg 4 Star Semi-Automatic Top Loading Washing Machine (P7020NGAY, Dark Gray, Collar scrubber)"
          image="https://m.media-amazon.com/images/I/81KDKQkSXFL._AC_UY327_FMwebp_QL65_.jpg"
          prize={10092}
          rating={3}
        />
      </div>
      <div className="home__row">
        <Product
          id="3"
          title="A Promised Land Hardcover – 17 November 2020 by Barack Obama"
          image="https://images-na.ssl-images-amazon.com/images/I/41BvMv5otbL._SX327_BO1,204,203,200_.jpg"
          rating={3}
          prize={200}
        />
        <Product
          id="4"
          title="Milton Duo DLX 1000 Thermosteel 24 Hours Hot and Cold Water Bottle, 1 Litre, Silver"
          image="https://m.media-amazon.com/images/I/61c-GtJ+0eL._AC_UL480_FMwebp_QL65_.jpg"
          prize={250}
          rating={3}
        />
        <Product
          id="5"
          title="2020 Newest Acer Aspire 5 Slim Laptop 15.6 FHD IPS Display, AMD Ryzen 3 3200u (up to 3.5GHz), Vega 3 Graphics, 8GB RAM DDR4, 256GB PCIe SSD, Backlit KB,WiFi,HDMI, Win10 w/Ghost Manta Accessories"
          image="https://images-na.ssl-images-amazon.com/images/I/71Cmjy4fzDL._AC_SL1500_.jpg"
          rating={4}
          prize={35000}
        />
      </div>
      <div className="home__row">
        <Product
          id="6"
          title="
            Roll over image to zoom in
           essence | Lash Princess False Lash Effect Mascara | Gluten & Cruelty Free"
          image="https://images-na.ssl-images-amazon.com/images/I/61nvmVTF12L._SL1500_.jpg"
          rating={4}
          prize={99}
        />
        <Product
          id="7"
          title="Band-Aid Brand Flexible Fabric Adhesive Bandages for Wound Care & First Aid, Assorted Sizes, 100 ct, Beige"
          image="https://images-na.ssl-images-amazon.com/images/I/91wvG8mS6KL._AC_SL1500_.jpg"
          rating={4}
          prize={389}
        />
        <Product
          id="8"
          image="https://images-na.ssl-images-amazon.com/images/I/51YYXSJ4T3L._AC_SL1001_.jpg"
          title="DEGOL Skipping Rope with Ball Bearings Rapid Speed Jump Rope Cable and 6” "
          rating={4}
          prize={678}
        />
        <Product
          id="9"
          image="https://images-na.ssl-images-amazon.com/images/I/91JTuwVaGOL._UL1500_.jpg"
          title="T2F Boys' Chest Printed Hooded Sweatshirt"
          rating={5}
          prize={789}
        />
      </div>
      <div className="home__row">
        <Product
          id="10"
          image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
          rating={5}
          prize={50000}
        />
      </div>
    </div>
  );
}

export default Home;
