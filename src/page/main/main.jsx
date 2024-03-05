import * as S from "./main.style";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/header/header";

export const Main = () => {
  
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <S.Photo src="/mainphoto.jpg"></S.Photo>
      <S.Main>
        <S.Roof>
          <h2
            onClick={() => {
              navigate(`/roof`);
            }}
          >
            Кровля
          </h2>
          <span>Доборные элементы</span>
        </S.Roof>
        <S.Facade>
          <h2
            onClick={() => {
              navigate(`/facade`);
            }}
          >
            Фасад
          </h2>
          <span>Доборные элементы</span>
        </S.Facade>
        <S.Beds>
          <h2
            onClick={() => {
              navigate(`/beds`);
            }}
          >
            Грядки и клумбы
          </h2>
          <span>Надпись</span>
        </S.Beds>
      </S.Main>
    </>
  );
};
