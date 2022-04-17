import { useState } from "react";
import { LoginMain, Card, Form, Input } from "./style";
import { api } from "../../services/api";
import { toast, Toaster } from "react-hot-toast";
import { doLogin } from "../../helpers/auth";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = async () => {
    setDisabled(true);
    const req = await api.post("/user/signin", {
      email,
      password,
    });

    const res = req.data;
    console.log(res);

    if (res.error === "") {
      doLogin(res.token);
    } else {
      toast.error(res.error, {
        position: "top-center",
        duration: 5000,
        style: {
          backgroundColor: 'red',
          color: '#fff',
        }
      });
    }

    setDisabled(false);
  };

  return (
    <LoginMain>
      <Toaster></Toaster>
      <Card>
        <h1>Acessar a sua conta</h1>
        <Form>
          <Input
            placeholder="Email"
            disabled={disabled}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required={true}
          />
          <Input
            placeholder="Senha"
            disabled={disabled}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required={true}
          />
        </Form>
        <button disabled={disabled} onClick={handleSubmit}>
          Entrar
        </button>
      </Card>
    </LoginMain>
  );
};
