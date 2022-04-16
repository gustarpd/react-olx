import styled from "styled-components";

export const MainPage = styled.div`
  width: 90%;
  margin: 0 auto;
  height: auto;

  @media (min-width: 320px) and (max-width: 604px) {
    width: 95%;
  }
`;

export const PageArea = styled.div`
  width: 100%;
  height: auto;
  background-color: #fff;
  border-radius: 9px;
  margin: 30px 0;
  a {
    text-decoration: none;
    color: #000;
  }
  h3 {
    color: #504a4a;
    padding: 20px 20px;
  }
  .parent {
    display: grid;
    height: auto;
    padding: 10px 20px;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-column-gap: 6px;
    grid-row-gap: 6px;
    div {
      line-height: 15px;
    }
    img {
      width: 70%;
      border-radius: 15px;
    }
  }
  p {
    word-break: normal;
  }

  @media (min-width: 320px) and (max-width: 768px) {
    .parent {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(1, 1fr);
    }
  }
`;

export const Main = styled.div`
  width: 200px;
  height: 50px;
  background-color: #fff;
`;
