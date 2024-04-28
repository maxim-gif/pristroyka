import styled from "styled-components";



export const Main = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  gap:20px;
  padding: 0 30px;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const Photo = styled.img`
  width: 100%;
  height: 800px;
  padding: 0 30px 0 30px;
  margin: 30px 0 50px 0;
  @media (max-width: 500px) {
    height: 200px;
  }
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
  @media (max-width: 500px) {
    width: 100%;
    height: 300px;
    & > h2 {
      font-size: 30px;
    }
    & > span {
      font-size: 15px;
    }
  }
`;
export const Facade = styled(Roof)``;
export const Beds = styled(Roof)``;
