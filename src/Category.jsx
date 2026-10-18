import { BiCategory } from "react-icons/bi";
import { GrToast } from "react-icons/gr";
import { MdOutlineSoupKitchen } from "react-icons/md";
import { GiNoodles } from "react-icons/gi";
import { BiDish } from "react-icons/bi";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";

const Categories = [
  {
    id: 1,
    name: "All",
    image: <BiCategory className="text-green-500 w-[20px] h-[20px]" />,
  },
  {
    id: 2,
    name: "Breakfast",
    image: <GrToast className="text-green-500 w-[25px] h-[25px]" />,
  },
  {
    id: 3,
    name: "Soups",
    image: (
      <MdOutlineSoupKitchen className="text-green-500 w-[25px] h-[25px]" />
    ),
  },
  {
    id: 4,
    name: "Pasta",
    image: <GiNoodles className="text-green-500 w-[25px] h-[25px]" />,
  },
  {
    id: 5,
    name: "Main_Course",
    image: <BiDish className="text-green-500 w-[25px] h-[25px]" />,
  },
  {
    id: 6,
    name: "Pizza",
    image: <GiFullPizza className="text-green-500 w-[25px] h-[25px]" />,
  },
  {
    id: 7,
    name: "Burger",
    image: <GiHamburger className="text-green-500 w-[25px] h-[25px]" />,
  },
];

export default Categories;
