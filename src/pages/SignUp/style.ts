import styled from "styled-components";

export const LoginMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  h1 {
    margin-bottom: 60px;
  }
`;
export const Card = styled.div`
  width: 500px;
  height: 450px;
  text-align: center;
  border-radius: 9px;
  background: #fff;

  button {
    background: blue;
    padding: 10px;
    border-radius: 30px;
    color: #fff;
    border: 0;
    outline: 0;
    width: 80%;
    cursor: pointer;
  }
`;

export const Input = styled.input`
  padding: 10px 0 10px 5px;
  margin-bottom: 20px;
`;

export const Form = styled.div`
  display: flex;
  width: 80%;
  /* height: 100px; */
  margin: 10px;
  /* background-color: red; */
  margin: 0 auto;
  flex-direction: column;

  select {
      padding: 10px 0;
      margin-bottom: 10px;
  }
`;
