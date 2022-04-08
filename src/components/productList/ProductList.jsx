import React from 'react'
import "./productList.css"
import Product from "../product/Product";
//import { products } from "../../data";
import IMG1 from "../../img/movieticketbooking.png"
import IMG2 from "../../img/carRental.png"
import IMG3 from "../../img/5yjeGatimi.png"
import IMG4 from "../../img/projekti-SMP.png"
import IMG5 from "../../img/rentaCar.png"
import IMG6 from "../../img/apple.png"

const data = [
    {
      id: 1,
      img: IMG1,
      link: "https://github.com/qendriimrexhepi",
    },
    {
      id: 2,
      img: IMG2,
      link: "https://github.com/qendriimrexhepi",
    },
    {
      id: 3,
      img: IMG3,
      link: "https://github.com/qendriimrexhepi",
    },
    {
      id: 4,
      img: IMG4,
      link: "https://github.com/qendriimrexhepi",
    },
    {
      id: 5,
      img: IMG5,
      link: "https://github.com/qendriimrexhepi",
    },
    {
      id: 6,
      img: IMG6,
      link: "https://github.com/qendriimrexhepi",
    },
  ];

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Create & inspire.</h1>
                <p className="pl-desc">
                    Creative portfolio that your work has been waiting for.
                    Beautiful homes, stunning portfolio styles & a whole lot more awaits
                    inside.
                </p>
            </div>
            <div className="pl-list">
                {data.map((item) => (
                    <Product key={item.id} img={item.img} link={item.link} />
                ))}
            </div>
        </div>
    )
}

export default ProductList
