import styled from "styled-components";

export const LoginMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  h1 {
    margin-bottom: 50px;
  }
`;
export const Card = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 9px;
  text-align: center;
  background: #fff;

  @media (min-width: 320px) and (max-width: 425px){
    width: 100vw;
    height: 100vh;
  }

  button {
    background: orange;
    padding: 10px;
    border-radius: 30px;
    color: #fff;
    border: 0;
    outline: 0;
    margin-top: 30px;
    width: 80%;
    cursor: pointer;
  }
`;

export const Input = styled.input`
  padding: 10px 0 10px 5px;
  margin-bottom: 30px;
`;

export const Form = styled.div`
  display: flex;
  width: 80%;
  /* height: 100px; */
  margin: 10px;
  /* background-color: red; */
  margin: 0 auto;
  flex-direction: column;
`;
