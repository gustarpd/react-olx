import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { MainPage, PageArea } from "./style";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { api } from "../../services/api";

export const CategoryPage = () => {
  const params = useParams();
  const [seachParams, setSeachParams] = useSearchParams();
  const catQuery = seachParams.get("cat")
  const [query, setQuery] = useState<any>(catQuery);
  const [list, setList] = useState([]);


  useEffect(() => {
    const getAd = async () => {
      const req = await api.get("/ad/list", {
        params: { sort: "desc", limit: 8 , cat:query },
      });
      const res = await req.data;
      setList(res.ads);
      console.log(res.ads);
    };
    getAd();
  }, []);

  return (
    <>
      <Header />
      <MainPage>
        <h2>Anúncios mais recentes de cadastrado no sistema</h2>
        <form method="GET">
          <input></input>
        </form>
        <PageArea>
          <div className="parent">
            {list.map((i: any) => {
              return <img src={i.image}></img>;
            })}
          </div>
        </PageArea>
      </MainPage>
    </>
  );
};
