import { BiCategory } from "react-icons/bi";
import { GrToast } from "react-icons/gr";
import { MdOutlineSoupKitchen } from "react-icons/md";
import { GiNoodles, GiFullPizza, GiHamburger, GiIndianPalace } from "react-icons/gi";
import { BiDish } from "react-icons/bi";

const Categories = [
  { id: 1, name: "All", image: <BiCategory /> },
  { id: 2, name: "Breakfast", image: <GrToast /> },
  { id: 3, name: "Soups", image: <MdOutlineSoupKitchen /> },
  { id: 4, name: "Pasta", image: <GiNoodles /> },
  { id: 5, name: "Main_Course", image: <BiDish /> },
  { id: 6, name: "Pizza", image: <GiFullPizza /> },
  { id: 7, name: "Burger", image: <GiHamburger /> },
  { id: 8, name: "Indian", image: <GiIndianPalace /> },
];

export default Categories;
