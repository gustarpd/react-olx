import { useEffect, useState, useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { doAccount, doLogin } from "../../helpers/auth";
import { api } from "../../services/api";
import { Card, Form, Input, LoginMain } from "./style";

type TypeSelect = {
  _id: string;
  name: string;
};

export const SignUp = () => {
  const goHome = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [stateList, setStateList] = useState<Array<TypeSelect>>([]);
  const [selectValue, setSelectValue] = useState("");

  useEffect(() => {
    const stateListreq = async () => {
      const req = await api.get("/states");
      const res = await req.data;
      setStateList(res.states);
      console.log(email)
    };

    stateListreq();
  }, []);
  const handleSignUp = async () => {
    setDisabled(true)
    const request = await api.post("/user/signup", {
      name,
      email,
      password,
      state: selectValue,
    });
    const res = request.data;
   
    if(res.error === '') {
      doAccount(res.token)
      goHome('/')
    }else {
      toast.error(res.error, {
        duration: 5000,
        position: "top-center",
      });
    }

    console.log(res.error)
  };

  return (
    <LoginMain>
      <Toaster></Toaster>
      <Card>
        <h1>Criar uma conta</h1>
        <Form>
          <Input
            placeholder="Nome completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={false}
          ></Input>
          <select
            value={selectValue}
            onChange={(e) => setSelectValue(e.target.value)}
          >
            <option defaultValue="Estado">Estado</option>
            {stateList.map((item: any) => {
              return <option value={item._id}>{item.name}</option>;
            })}
          </select>
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={false}
          ></Input>

          <Input
            placeholder="Senha"
            type={'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={false}
          ></Input>
        </Form>
        <button onClick={handleSignUp}>Cadastrar</button>
      </Card>
    </LoginMain>
  );
};
