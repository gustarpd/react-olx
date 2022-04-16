import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../../services/api";
import { Main, CategoriesArea } from "./style";

type TypeList = {
  slug: string;
  name: string;
  img: string;
}

export const Categories = () => {
  const  params = useParams()
  const id = params.id
  const [listCats, setListCats] = useState<Array<TypeList>>([]);

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
      {listCats.map((item) => {
        return (
          <CategoriesArea>
            <Link to={`/category?cat=${item.slug}&name=${item.name}`}>
              <img src={item.img}></img>
              <p>{item.name}</p>
            </Link>
          </CategoriesArea>
        );
      })}
    </Main>
  );
};
