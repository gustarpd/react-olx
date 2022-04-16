import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { api } from "../../services/api";
import { Content, DivForm, Main } from "./style";
type typeImg = {
  url: string;
};
type InfoType = {
  title: string;
  price: number;
  images: Array<typeImg>;
  img: string;
  ads: Array<Object>;
  name: string;
  url: string;
};



export const Account = () => {
  const token = localStorage.getItem("token");
  const [info, setInfo] = useState<Array<InfoType>>([]);
  const [add, setAdd] = useState(false);
  const [user, setUser] = useState(false);
  const [name, setName] = useState('')
  const [email, SetEmail] = useState('')
  const [senha, setPass] = useState('')
  const [state, setState] = useState('')
  const [stateList, setStateList] = useState([])

 let c = info.length === 0 ? true : false

  useEffect(() => {
    const getUserInfo = async () => {
      const req = await api.get("/user/me", { params: { token } });
      const res = await req.data;
      console.log(res.ads);
      setInfo(res.ads);
      setAdd(true)
    };
    getUserInfo();
  }, []);

  useEffect(() => {
    const stateListreq = async () => {
      const req = await api.get("/states");
      const res = await req.data;
      setStateList(res.states);
      console.log(res)
    };

    stateListreq();
  }, []);

  const handleShowAds = () => {
    setAdd(true);
    setUser(false);
  };

  const handleSetUser = () => {
    setAdd(false);
    setUser(true);
  };

  const handleSumbimit = async () => {
  const token = localStorage.getItem('token')
  const req = await api.put('/user/me', {token, name, email, state})
  const res = req.data

  if(res.error !== ''){
    toast.error(res.error, {
      position: "top-center",
      duration: 5000,
      style: {
        backgroundColor: 'red',
        color: '#fff'
      }
    });
  }else {
    toast.success('Dados alterados!', {
      position: "top-center",
      duration: 5000,
      style: {
        backgroundColor: 'green',
        color: '#fff'
      }
    });
  }
  }
  return (
    <>
      <Header showInput={false} />
      <Toaster />
      <Main>
        <div className="sideBar">
          <div onClick={handleShowAds}>Meus anúncios</div>
          <div onClick={handleSetUser}>Meu cadastro</div>
        </div>
        <Content>
          {c && (
            <h1 className="warning"> Ops... Sem Anùncios, crie uma agora</h1>
          )}
        
          {add && (
              <div className="parent">
                {info.map((item: any) => {
                  return (
                    <div>
                      <Link to={`/post-ad/${item.id}`}>
                        {item.images.map((item: any) => {
                          return (
                            <img
                              className="img"
                              src={`http://alunos.b7web.com.br:501/media/${item.url}`}
                            />
                          );
                        })}
                        <div>{item.title}</div>
                        <b>{`R$ ${item.price}`}</b>
                      </Link>
                    </div>
                  );
                })}
              </div>
            
          )}

          {user && (
             <>
              {c = true}
             <div className="warning titleForm">
              <h1>Alterar meus dados</h1>
            </div><DivForm>
                <label>Nome</label>
                <input type="text" onChange={e => setName(e.target.value)} />
                <label>Email</label>
                <input type="text" onChange={e => SetEmail(e.target.value)} />
                <select onChange={e => setState(e.target.value)}>
                  <option value="estado">Estado</option>
                  {stateList.map((item: any) => {
                    return <option value={item.name}>{item.name}</option>;
                  })}
                </select>
                <label>Senha</label>
                <input type="password" onChange={e => setPass(e.target.value)} />
                <button onClick={handleSumbimit}>Alterar meus dados</button>
              </DivForm></>
          )}
        </Content>
      </Main>
    </>
  );
};
