import styled from "styled-components";

export const AdMainArea = styled.div`
  max-width: 80%;
  background-color: #fff;
  margin: 30px auto;
  padding: 20px;
  background-size: cover;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: auto;

  h2 {
    margin: 10px 0 20px 0;
  }
`;

export const AdFoto = styled.div`
  img {
    width: 400px;
  }
  .carrossel {
    width: 600px;
    .rec.rec-arrow {
      width: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 40px;
      border-radius: 19px;
    }
  }
`;

export const AdInfosArea = styled.div`
  margin: 49px 0;
  width: 500px;
  height: 500px;

  .price {
    font-size: 2.5rem;
  }

  button {
    width: 100%;
    height: 40px;
    background-color: blue;
    border: 0;
    outline: 0;
    color: #fff;
    cursor: pointer;
  }
`;

export const InfosUserAd = styled.div`
  width: 95.4%;
  height: auto;
  padding: 10px;
  border: 1px solid #ccc;
  margin: 20px 0;
`;

export const AdOther = styled.div`
  width: 82.9%;
  margin: 0 auto;
  height: auto;
  background-color: #fff;

  div {
    /* background-color: red; */
    padding: 0px 0 0 10px;
    width: 95%;
    /* height: auto; */
    margin: 10px auto;

    .parent {
      display: grid;
      padding: 0 20px;
      grid-template-columns: repeat(6, 1fr);
      grid-template-rows: repeat(3, 1fr);
      grid-column-gap: 19px;
      grid-row-gap: 19px;

      div {
        height: auto;
        line-height: 15px;
      }
      img {
        width: 100%;
        border-radius: 15px;
      }
    }
  }
`;
