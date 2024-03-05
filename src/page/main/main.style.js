import styled from "styled-components";

export const Tittle = styled.div`
  color: black;
  font-size: 70px;
`;

export const Phone = styled.div`
  color: black;
  font-size: 40px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 0 50px 0 50px;
`;

export const Main = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  border: 2px solid black;
`;

export const Photo = styled.img`
  width: 100%;
  height: 800px;
  padding: 0 30px 0 30px;
  margin: 30px 0 50px 0;
`;

export const Roof = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid green;
  width: 33%;
  height: 400px;
  color: black;

  justify-content: center;
  align-items: center;
  & > h2 {
    font-size: 70px;
  }
  & > span {
    display: block;
    font-size: 30px;
  }
`;
export const Facade = styled(Roof)``;
export const Beds = styled(Roof)``;
