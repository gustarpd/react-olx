import styled from "styled-components";

export const MainPage = styled.div`
  width: 80%;
  margin: 0 auto;
  /* height: auto; */
`;
export const PageArea = styled.div`
  background-color: #fff;
  width: 100%;
  /* height: auto; */
  margin: 20px 0;

  h3 {
    color: #504a4a;
    padding: 30px;
  }

  .parent {
    display: grid;
    padding:  0 20px;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 19px;
    grid-row-gap: 19px;

    div {
      /* border: 1px solid #000; */
      /* height: auto; */
      line-height: 15px;
    }
      img {
        width: 100%;
        border-radius: 15px;
      }
    }

    p{
      word-break: normal;
    }
`;
