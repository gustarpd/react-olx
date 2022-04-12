import styled from "styled-components";

export const MainHead = styled.div`
  background-color: red;
  background: #6e0ad6;
  width: 100%;
  height: 200px;
`;

export const HeadContent = styled.div`
  width: 70%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  margin: 0 auto;

  div {
    display: flex;
    justify-content: space-around;
    width: 400px;
    padding: 10px;
    color: #fff;
    text-align: center;
    /* background-color: red; */
    /* margin-bottom: 70px; */

    a {
      text-decoration: none;
      color: #fff;
      /* text-transform: none; */
      margin: 19px;
      display: inline-block;
      text-align: center;
      /* background-color: red; */
      /* width: 119px; */
    }

    button {
      background-color: #6e0ad6;
      border: 0;
      outline: 0;
      color: #fff;
      font-size: 15px;
      cursor: pointer;
    }

    .ads {
       background: orange;
       width: 150px;
       height: 30px;
       text-align: center;
       border-radius: 10px;
    }
  }
`;

export const Input = styled.input`
  padding: 20px 15px;
  width: 100%;
  height: 30px;
  border-radius: 15px;
  outline: 0;
  border: 1px solid #ccc;
  font-size: 19px;
`;
