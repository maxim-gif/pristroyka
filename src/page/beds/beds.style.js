import styled from "styled-components";

export const Page = styled.div`
background-color: #dbdddc;
height: 100vh;

`;

export const Tittle = styled.div`
color: black;
font-size: 70px;
text-align: center;
margin-bottom: 40px;
@media (max-width: 500px) {
  font-size: 30px;
}
`;

export const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 600px);
  justify-content: center;
  color: black;
  gap: 30px;
  font-size: 70px;
  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 250px);
  }
`;

export const ItemImage = styled.img`
  width: 600px;
  height: 600px;
  border-radius: 10px;  
  border: 2px solid #A9A9A9;
  @media (max-width: 500px) {
    width: 250px;
    height: 250px;
  }
`;

export const ItemTittle = styled.h2`
  position: absolute;
  z-index: 10;
  top: 500px;
  font-size: 30px;
  color: black;
  width: 600px;
  text-align:center;
  @media (max-width: 500px) {
    width: 250px;
    font-size: 15px;
    top: 200px;
  }
`;

export const Item = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border-radius: 10px;
  height: 600px;
  background-color: white;
  background-color: #dbdddc;
  &:hover {
    box-shadow: 10px 5px 5px grey;
    transform: translate(-10px, -5px);
  }
  @media (max-width: 500px) {
    height: 250px;
  }
`;