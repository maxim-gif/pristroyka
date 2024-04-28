import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 0 50px;
  @media (max-width: 500px) {
    padding: 0 20px;
    height: 50px;
  }
`;

export const Tittle = styled.div`
  color: black;
  font-size: 70px;
  @media (max-width: 500px) {
    font-size: 30px;
  }
`;

export const Phone = styled.div`
  color: black;
  font-size: 40px;
  @media (max-width: 500px) {
    font-size: 20px;
  }
`;
