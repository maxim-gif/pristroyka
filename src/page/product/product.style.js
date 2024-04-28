import styled from "styled-components";

export const Container = styled.div`
background-image: url("/12.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  `

export const ProductTittle = styled.h2`
  color: red;
  text-align: center;
`;

export const MainPhoto = styled.img`
  width: 800px;
  height: 800px;
  margin-left: 100px;
  @media (max-width: 500px) {
    width: 300px;
    height: 300px;
    margin-left: 0;
  }
`;

export const MainInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 100px;
  @media (max-width: 500px) {
    flex-direction: column;
    gap: 50px;
  }
`;

export const ColorBox = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 350px);
  row-gap: 10px;
  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 300px);
  }
`;

export const Icon = styled.div`
  width: 50px;
  border-radius: 50%;
  @media (max-width: 500px) {
    width: 30px;
  }
`;

export const Box = styled.div`
  display: flex;
`;
export const Color = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  color: black;
  padding-left: 10px;
  @media (max-width: 500px) {
    height: 30px;
    font-size: 15px;
  }
`;
