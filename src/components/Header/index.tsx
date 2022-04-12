import { Link, useNavigate } from "react-router-dom";
import { MainHead, HeadContent, Input } from "./style";
import { doLogoout, isLogged } from "../../helpers/auth";

export const Header = () => {
  const logged = localStorage.getItem('token');
  const goHomeThenLoggout = useNavigate()
  
  const handleLoggout = () => {
   doLogoout()
   goHomeThenLoggout('/')
  }

  return (
    <MainHead>
      <HeadContent>
        <div>
          {logged && (
            <>
              <Link to="/account">Minha conta</Link>
              <button onClick={handleLoggout}>Sair</button>
            </>
          )}
          {!logged && (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Cadastrar</Link>
            </>
          )}
          <Link to={'post-ad'} className="ads">Anunciar</Link>
        </div>
        <Input placeholder="Estou procurando por..." />
      </HeadContent>
    </MainHead>
  );
};
