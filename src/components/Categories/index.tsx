import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../../services/api";
import { Main, CategoriesArea } from "./style";

export const Categories = () => {
  const  params = useParams()
  const id = params.id
  const [listCats, setListCats] = useState([]);
  const [q, seQ] = useState('')
  const [cat, setCat] = useState('')

  useEffect(() => {
    const getCategories = async () => {
      const req = await api.get("/categories");
      const res = req.data;
      console.log(res);
      setListCats(res.categories);
    };
    getCategories();
  }, []);

  return (
    <Main>
      {listCats.map((item: any) => {
        return (
          <CategoriesArea>
            <Link to={`/category/${item.slug}`}>
              <img src={item.img}></img>
              <p>{item.name}</p>
            </Link>
          </CategoriesArea>
        );
      })}
    </Main>
  );
};
