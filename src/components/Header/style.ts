import styled from "styled-components";

type Props = {
  show: boolean;
};

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
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;

  .areaHead {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 320px) and (max-width: 604px) {
      flex-direction: column;
      margin: 0 0 30px 0;
    }
    h1 {
      color: #fff;
      cursor: pointer;
    }
    a {
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
    width: auto;
    p {
     padding: 0 20px 0 0;
    }
    a {
      text-decoration: none;
      color: #fff;
    }

    div {
      width: 30px;
      height: 40px;
      background-color: #fff;
      position: relative;
      right: 70px;
      top: 40px;
      z-index: -999;
    }

    .adsButton {
      text-align: center;
      background: orange;
      border-radius: 20px;
      padding: 10px 20px;
    }
  }
`;

export const Input = styled.input`
  padding: 20px 15px;
  width: 97%;
  height: 30px;
  border-radius: 15px;
  outline: 0;
  margin: 0 auto;
  border: 1px solid #ccc;
  font-size: 19px;
`;

export const AreaLink = styled.div`
  background-color: aliceblue;
  width: 100px;
`;

export const InputArea = styled.div<Props>`
  display: ${(props) => (props.show === true ? "flex" : "none")};
  align-items: center;

  div { 
  margin: 0 0 0 30px;
  background-color: orange;
  padding: 10px 20px;
  color: #fff;
  border-radius: 9px;
  cursor: pointer;
  }
`;

