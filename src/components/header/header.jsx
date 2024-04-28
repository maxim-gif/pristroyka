import * as S from "./header.style";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {

  const navigate = useNavigate();

  return (
    <S.Header>
      <S.Tittle onClick={() => {navigate(`/`)}}>Пристрой-Ка</S.Tittle>
      <S.Phone>89160554050</S.Phone>
    </S.Header>
  );
};
