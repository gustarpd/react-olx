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

  @media (min-width: 320px) and (max-width: 425px) {
    flex-direction: column;
    h4 {
      margin: 20px;
    }
  }
`;

export const AdFoto = styled.div`
  .carrossel {
    width: 700px;
    .rec.rec-arrow {
      width: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 40px;
      border-radius: 19px;
    }
    @media (min-width: 320px) and (max-width: 425px) {
      img {
        width: 300px;
      }
      .carrossel {
        width: 200px;
      }
      .rec.rec-arrow {
        display: none;
      }
    }
  }
`;

export const AdInfosArea = styled.div`
  margin: 49px 0;
  max-width: 500px;
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

  a {
   text-decoration: none;
   color: #fff;
  }
`;

export const AdOther = styled.div`
  width: 82.9%;
  margin: 0 auto;
  height: auto;
  background-color: #fff;
  @media (min-width: 320px) and (max-width: 425px) {
    width: 90%;
  }

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
    @media (min-width: 320px) and (max-width: 425px) {
      .parent {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(1, 1fr);
      }
      width: 90%;
      margin: 0 auto;
    }
  }
`;

export const BreadCrumb = styled.div`
  margin: 0 0 0 150px;
  padding: 20px 0 0 0;

  @media (min-width: 320px) and (max-width:420px) {
    margin: 0 0px 0 15px;
  }
`;
export const SkeletonLoading = styled.div`
  width: 400px;
  height: 400px;
  background-color: #F4F4F4;
`
export const SkeletonLoadingTexts = styled.div`
  width: auto;
  height: auto;
  padding: 30px;
  margin: 0 0 20px 0;
  background-color: #F4F4F4;
`