import { Categories } from "../../components/Categories";
import { Header } from "../../components/Header";
import { MainPage } from "./styled";

export const Home = () => {
  return (
    <>
      <Header></Header>
      <MainPage>
        <Categories></Categories>
      </MainPage>
    </>
  );
};
