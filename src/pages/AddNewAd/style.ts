import styled from "styled-components";

export const FormAddNewAd = styled.div`
  max-width: 30%;
  height: auto;
  padding: 10px;
  border-radius: 9px;
  margin: 30px auto;
  background-color: #fff;
  
  label {
      font-weight: 500;
      margin: 5px;
  }

  h1 {
    text-align: center;
  }
  
  form {
      display: flex;
      max-width: 80%;
      flex-direction: column;
      border-radius: 9px;
      margin: 0 auto;
      justify-content: center;
    input {
     padding:  10px 5px;
    }

    input, select, textarea {
        margin: 0 0 10px 0;
    }

    select {
      padding: 10px 5px;
    }
  }

  div {
      width: 100%;
      display: flex;
      justify-content: center;
      height: 60px;

    button{
      width: 200px;
      cursor: pointer;
      border: 0;
      outline: 0;
      background-color: blue;
      border-radius: 10px;
      color: #fff;
    }
    }

`