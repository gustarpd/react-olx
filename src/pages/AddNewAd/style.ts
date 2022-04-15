import styled from "styled-components";

export const FormAddNewAd = styled.div`
  max-width: 30%;
  height: auto;
  padding: 30px;
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
      /* align-items: center; */
      margin: 0 auto;
      justify-content: center;
    input {
     padding:  10px 5px;
    }

    input, select, textarea {
        margin: 0 0 20px 0;
    }
  }

`