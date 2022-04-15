import { ReactChild, ReactFragment, ReactPortal, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { api } from "../../services/api";
import { AdFoto, AdInfosArea, AdMainArea, InfosUserAd, AdOther, BreadCrumb } from "./style";
import Carousel from "react-elastic-carousel";
import { Pagination } from "../../components/Pagination";

type OthersType = {
  title: string;
  image: string;
  price: number;
  id: string;
};

type typeInfos = {
  title: string;
  price: number;
  category: {_id: string, name: string, slug: string}
  description: string;
  images: Array<string>;
  dateCreated: string;
  stateName: string;
  negociable: boolean;
  userInfo: { name: string; email: string };
  views: number;
  others: Array<OthersType>;
};

export const AdPage = () => {
  const [infos, setInfos] = useState<typeInfos>();

  const params = useParams();
  const id = params.id;
  useEffect(() => {
    const getAdItem = async () => {
      const req = await api.get("/ad/item", {
        params: { id, other: "asc" },
      });
      const res = await req.data;
      console.log(res);
      setInfos(res);
    };
    getAdItem();
  }, []);
  const hadleLeftClick = () => {};

  const handleRightClick = () => {};

  const formatDate = (date: any) => {
    const months = [
      "janeiro",
      "fervereiro",
      "março",
      "abril",
      "junho",
      "julho",
      "agosto",
      "setembro",
      "outubro",
      "novembro",
      "dezembro",
    ];
    const dates = new Date(date);
    const DayDate = dates.getDay();
    const MonthDate = dates.getMonth();
    const YearDate = dates.getFullYear();

    return `0${DayDate} de ${months[MonthDate]} de ${YearDate}`;
  };
  return (
    <>
      <Header />
      <BreadCrumb>
        Voce esta aqui / 
        <Link to='/'> Home  </Link>

        / <Link to='/category'>{infos?.category.name} </Link>
        / {infos?.title}
      </BreadCrumb>
      <AdMainArea>
        <AdFoto>
          <Carousel
            isRTL={false}
            itemsToShow={1}
            className="carrossel"
            enableAutoPlay
          >
            {infos?.images.map((img) => {
              return <img src={img} />;
            })}
          </Carousel>
        </AdFoto>
        <AdInfosArea>
          <h2>{infos?.title.toUpperCase()}</h2>
          <p>
            {infos?.description == "undefined"
              ? "sem descrição"
              : infos?.description}
          </p>
          <p className="price">
            <b>{`R$ ${infos?.price}`}</b>
          </p>
          <button>fale com o vedendor</button>
          <InfosUserAd>
            <h5>{`Criado por: ${infos?.userInfo.name}`}</h5>
            <p>{`Email: ${infos?.userInfo.email}`}</p>
            <p>
              <b>{`Visualizções: ${infos?.views}`}</b>
            </p>
          </InfosUserAd>
        </AdInfosArea>
      </AdMainArea>
      <AdOther>
      <div>
          <h4>Outras ofertas do vedendor</h4>
          <div className="parent">
            {infos?.others.map((item: OthersType) => {
              return (
                <div>
                  <a href={`/post-ad/${item.id}`}>
                    <img src={item.image}></img>
                    <p>{item.title}</p>
                    <p>
                      <b>{`R$ ${item.price}`}</b>
                    </p>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </AdOther>
    </>
  );
};
