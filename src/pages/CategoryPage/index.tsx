import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { MainPage, PageArea } from "./style";
import { Link, useSearchParams } from "react-router-dom";
import { api } from "../../services/api";

type List = {
  id: string;
  title: string;
  price: number;
  name: string;
  image: string;
  ads: Array<List>;
};

export const CategoryPage = () => {
  const [seachParams, setSeachParams] = useSearchParams();
  const catQuery = seachParams.get("cat");
  const searchQuery = seachParams.get("q");
  const nameP = seachParams.get("name");
  const [query, setQuery] = useState(catQuery);
  const [nameParam, setNameParam] = useState(nameP);
  const [list, setList] = useState<Array<List>>([]);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    const getAd = async () => {
      const req = await api.get("/ad/list", {
        params: { sort: "desc", limit: 20, cat: query, q: searchQuery },
      });
      const res = await req.data;
      setList(res.ads);

      if (res.ads.length === 0) {
        setErro(true);
      }
    };
    getAd();
  }, []);
  return (
    <>
      <Header showInput={true} />
      <MainPage>
        <h2>
          Anúncios de {nameP || searchQuery} mais recentes cadastrado no sistema
        </h2>
        <PageArea>
          {erro && <h1>Não encontramos nenhum anuncio relacionando a {searchQuery}</h1>}
          {!erro && (
            <div className="parent">
              {list.map((i) => {
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
          )}
        </PageArea>
      </MainPage>
    </>
  );
};
