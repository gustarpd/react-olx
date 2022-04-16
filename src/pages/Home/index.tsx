import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Categories } from "../../components/Categories";
import { Header } from "../../components/Header";
import { api } from "../../services/api";
import { MainPage, PageArea } from "./styled";

type TypeListAd = {
  id: string;
  name: string;
  image: string;
  price: number;
  title: string;
}

export const Home = () => {
  const [listsAds, setListAds] = useState<Array<TypeListAd>>([]);

  useEffect(() => {
    const getAdsList = async () => {
      const request = await api.get("/ad/list", { params: {limit: 12, sort: 'desc' }});
      const res = await request.data;
      setListAds(res.ads);
    };
    getAdsList();
  }, []);

  return (
    <>
      <Header showInput={true} />
      <MainPage>
        <Categories />
        <PageArea>
          <h3>Anuncios recentes</h3>
          <div className="parent">
            {listsAds.map((item) => {
              return (
                <div>
                  <Link to={`/post-ad/${item.id}`}>
                    <img src={item.image} />
                    <p>{item.title}</p>
                    <b>{`R$ ${item.price}`}</b>
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

