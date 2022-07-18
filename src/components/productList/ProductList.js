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
    link: "https://github.com/qendriimrexhepi/MovieTicketBooking",
  },
  {
    id: 2,
    img: IMG2,
    link: "https://github.com/qendriimrexhepi/carRental",
  },
  {
    id: 3,
    img: IMG3,
    link: "https://github.com/qendriimrexhepi/5YjeGatimi",
  },
  {
    id: 4,
    img: IMG4,
    link: "https://github.com/qendriimrexhepi",
  },
  {
    id: 5,
    img: IMG5,
    link: "https://github.com/qendriimrexhepi/RentaCar",
  },
  {
    id: 6,
    img: IMG6,
    link: "https://github.com/qendriimrexhepi/apple",
  },
];

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">my repositories;</h1>
        <p className="pl-desc">
          Some of my lastest projects
        </p>
        <h1 className="pl-projects-head">projects</h1>
      </div>
      <div className="pl-list">

        {data.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
        <h1 className="pl-projects-end" data-text="projects"></h1>
      </div>
    </div>
  )
}

export default ProductList
