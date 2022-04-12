import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { Card, Form, Input, LoginMain } from "./style";

type TypeSelect = {
  _id: string; 
  name: string 
}

export const SignUp = () => {
  const goHome = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [stateList, setStateList] = useState<Array<TypeSelect>>([])

  // setEstado('MA')

  useEffect(() => {
   const stateListreq = async () => {
     const req = await api.get('/states')
     const res = await req.data
    //  const value = res.states
     setStateList(res.states[1]._id)
   }

   stateListreq()
  }, [])
  const handleSignUp = async () => {
   const request = await api.post('/user/signup', {name, email, password, state:stateList})
   const res = request.data
   console.log(res)
   console.log(stateList)
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
          <select>
          <option defaultValue='Estado' >Estado</option>
          {/* {stateList.map((item: any, key: any) => {
            return (
              <option key={key} value={item._id}>{item.name}</option>
            )
          })} */}
          </select>
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={false}
          ></Input>

          <Input
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={false}
          ></Input>

          <Input
            placeholder="Comfirmar senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            disabled={false}
          ></Input>
        </Form>
        <button onClick={handleSignUp}>
          Cadastrar
        </button>
      </Card>
    </LoginMain>
  );
};
