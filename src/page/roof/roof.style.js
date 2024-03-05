import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("/12.jpg");
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Tittle = styled.div`
  color: black;
  font-size: 70px;
  text-align: center;
  margin-bottom: 40px;
`;

export const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 250px);
  justify-content: center;
  color: black;
  gap: 30px;
  font-size: 70px;
`;

export const ItemImage = styled.img`
  width: 150px;
  height: 150px;
`;

export const ItemTittle = styled.h2`
  font-size: 30px;
  color: black;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  gap: 20px;
  border-radius: 10px;
  height: 250px;
  background-color: white;
  &:hover {
    box-shadow: 10px 5px 5px grey;
    transform: translate(-10px, -5px);
  }
`;
