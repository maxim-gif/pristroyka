import * as S from "./product.style";
import React from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/header/header";

export const Product = () => {
  const { id } = useParams();

  return (
    <S.Container>
      <Header />
      <S.ProductTittle>{id}</S.ProductTittle>
      <S.MainInfo>
        <S.MainPhoto src="/pl.jpg"></S.MainPhoto>
        <S.ColorBox>
            <S.Color></S.Color>
            <S.Color></S.Color>
            <S.Color></S.Color>
            <S.Color></S.Color>
            <S.Color></S.Color>
        </S.ColorBox>
      </S.MainInfo>

    </S.Container>
  );
};
