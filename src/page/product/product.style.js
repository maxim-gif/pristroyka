import styled from "styled-components";

export const Container = styled.div``;

export const ProductTittle = styled.h2`
  color: red;
  text-align: center;
`;

export const MainPhoto = styled.img`
  width: 800px;
  height: 800px;
  margin-left: 100px;
`;

export const MainInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 100px;
`;

export const ColorBox = styled.div`
  display: grid;
  height: 250px;
  grid-template-columns: repeat(1, 50px);
`;

export const Color = styled.div`
  height: 50px;
  border: 2px solid red;
  border-radius: 50%;
`;
