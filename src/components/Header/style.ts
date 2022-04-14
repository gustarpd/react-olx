import styled from "styled-components";

export const MainHead = styled.div`
  background-color: red;
  background: #6e0ad6;
  width: 100%;
  height: auto;
  padding: 10px 0 30px 0;
`;

export const HeadContent = styled.div`
  max-width: 80%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  .areaHead {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1{
       color: #fff;
       cursor: pointer;
     }

     a{
       text-decoration: none;
     }
  }

  .AreaProfile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    height: 20px;
    cursor: pointer;
    width: 240px;
  
    a{
      text-decoration: none;
      color: #fff;
    }

    .adsButton{
      text-align: center;
      background: orange;
      border-radius: 20px;
      padding: 10px;
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

export const AreaLink = styled.div`
  background-color: aliceblue;
  width: 100px;
`;
