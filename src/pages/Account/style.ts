import styled from "styled-components";

export const Main = styled.div`
  width: 80%;
  margin: 20px auto;
  height: 500px;
  background-color: #fff;
  display: flex;
  h2 {
    padding: 5px 0 10px 10px;
  }

  .sideBar {
    width: 200px;
    background-color: red;
    text-align: center;
    padding: 10px 0;
    cursor: pointer;
    background: #f5f5f5;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  .parent {
    display: grid;
    height: auto;
    padding: 10px 20px;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-column-gap: 19px;
    grid-row-gap: 19px;

    .parent {
      display: grid;
      height: auto;
      padding: 10px 20px;
      grid-template-columns: repeat(6, 1fr);
      grid-template-rows: repeat(1, 1fr);
      grid-column-gap: 19px;
      grid-row-gap: 19px;
      div {
        line-height: 15px;
      }
    }
    p {
      word-break: normal;
    }

    .img {
      width: 150px;
      border-radius: 15px;
    }
  }
  .warning {
    text-align: center;
    margin: 30px 0;
    width: 100%;
  }
  .warning .titleForm {
    text-align: center;
    margin: 30px 0;
    width: 100%;
  }
`;

export const DivForm = styled.div`
  width: 40%;
  height: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  input,
  select {
    padding: 10px;
    margin: 0 0 10px 0;
  }

  button {
      padding: 20px;
      background-color: blue;
  }
`;
