import { Link, useNavigate } from "react-router-dom";
import { MainHead, HeadContent, Input } from "./style";
import { doLogoout, } from "../../helpers/auth";


export const Header = () => {
  const logged = localStorage.getItem("token");
  const goHomeThenLoggout = useNavigate();

  const handleLoggout = () => {
    doLogoout();
    goHomeThenLoggout("/");
  };

  return (
    <MainHead>
      <HeadContent>
        <div className="areaHead">
          <div>
            <Link to="/">
              <h1>MARKETPLACE</h1>
            </Link>
          </div>
          {logged && (
            <div className="AreaProfile">
              <Link to="/account">
                <p>Minha conta</p>
              </Link>
              <p onClick={handleLoggout}>Sair</p>
              <Link to="/newad">
                <p className="adsButton">Anunciar</p>
              </Link>
            </div>
          )}
          {!logged && (
            <div className="AreaProfile">
              <Link to="/login">
                <p>Login</p>
              </Link>
              <Link to="/signup">
                <p onClick={handleLoggout}>Cadastrar</p>
              </Link>
              <Link to="/newad">
                <p className="adsButton">Anunciar</p>
              </Link>
            </div>
          )}
        </div>
        <div className="divInput" >
          <Input placeholder="Estou procurando por..."/>
        </div>
      </HeadContent>
    </MainHead>
  );
};
