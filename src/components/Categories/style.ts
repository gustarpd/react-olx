import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  margin: 0 auto;
  margin-top: 20px;
  background: #fff;
  border: 1px solid #ccc;
`

export const CategoriesArea = styled.div`
 width: 100px;
 height: 90px;
 font-size: 12px;
 border-left: #ccc;
 cursor: pointer;
 margin: 0 auto;
 display: flex;
 align-items: center;
 flex-direction: column;
 justify-content: center;
 text-align: center;
 line-height: 2px;

 a {
    text-decoration: none;
    color: #000;
  }
`