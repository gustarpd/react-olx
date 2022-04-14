import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Main, CategoriesArea } from "./style";

export const Categories = () => {
  const [listCats, setListCats] = useState([]) 

  useEffect(() => {
   const getCategories = async () => {
   const req = await api.get('/categories')
   const res = req.data
   console.log(res)
   setListCats(res.categories)
   }
   getCategories()
  
  }, [])

  return (
    <Main>
      {listCats.map((item: any) => {
        return (<CategoriesArea>
          <img src={item.img}></img>
          <p>{item.name}</p>
        </CategoriesArea>
        )
      })}
    </Main>
  );
};
