import { Main, CategoriesArea } from "./style";
import { FaBabyCarriage } from "react-icons/fa";
import { MdOutlineToys, MdComputer } from "react-icons/md";
import { AiOutlineCar } from "react-icons/ai";
import { GiClothes } from 'react-icons/gi';

export const Categories = () => {
  return (
    <Main>
      <CategoriesArea>
        <MdOutlineToys size={36} color="#3483FA"></MdOutlineToys>
        <p>Brinquedos e hobbie</p>
      </CategoriesArea>
      <CategoriesArea>
        <AiOutlineCar size={36} color="#3483FA"></AiOutlineCar>
        <p>Carros e peças</p>
      </CategoriesArea>
      <CategoriesArea>
        <GiClothes size={36} color="#3483FA"></GiClothes>
        <p>Roupas</p>
      </CategoriesArea>
      <CategoriesArea>
        <MdComputer size={36} color="#3483FA"></MdComputer>
        <p>Eletronicos</p>
      </CategoriesArea>
    </Main>
  );
};
