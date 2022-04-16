import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { MainPage, PageArea } from "./style";
import {
  Link,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { api } from "../../services/api";

export const CategoryPage = () => {
  const params = useParams();
  const [seachParams, setSeachParams] = useSearchParams();
  const catQuery = seachParams.get("cat");
  const searchQuery = seachParams.get("q");
  const nameP = seachParams.get("name");
  const [query, setQuery] = useState(catQuery);
  const [nameParam, setNameParam] = useState(nameP);
  const [list, setList] = useState([]);

  useEffect(() => {
    const getAd = async () => {
      const req = await api.get("/ad/list", {
        params: { sort: "desc", limit: 8, cat: query, q: searchQuery },
      });
      const res = await req.data;
      setList(res.ads);
      console.log(res.ads);
    };
    getAd();
  }, []);

  return (
    <>
      <Header showInput={true} />
      <MainPage>
        <h2>Anúncios de {nameP} mais recentes decadastrado no sistema</h2>
        <PageArea>
          <div className="parent">
            {list.map((i: any) => {
              return (
                <div>
                  <Link to={`/post-ad/${i.id}`}>
                    <img src={i.image}></img>
                    <p>{i.title}</p>
                    <b>{`R$ ${i.price}`}</b>
                  </Link>
                </div>
              );
            })}
          </div>
        </PageArea>
      </MainPage>
    </>
  );
};
