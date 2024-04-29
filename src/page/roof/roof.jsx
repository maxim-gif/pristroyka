import * as S from "./roof.style";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/header/header";

export const Roof = () => {

    const navigate = useNavigate();

  return (
    <S.Container>
      <Header />
      <S.Tittle>Кровля</S.Tittle>
      <S.Items>
        <S.Item onClick={() => {navigate(`/product/1`)}}>
          <S.ItemImage src="/pl.jpg"></S.ItemImage>
          <S.ItemTittle>Надпись</S.ItemTittle>
        </S.Item>
        <S.Item>
          <S.ItemImage src="/pl.jpg"></S.ItemImage>
          <S.ItemTittle>Надпись</S.ItemTittle>
        </S.Item>
        <S.Item>
          <S.ItemImage src="/pl.jpg"></S.ItemImage>
          <S.ItemTittle>Надпись</S.ItemTittle>
        </S.Item>
        <S.Item>
          <S.ItemImage src="/pl.jpg"></S.ItemImage>
          <S.ItemTittle>Надпись</S.ItemTittle>
        </S.Item>
        <S.Item>
          <S.ItemImage src="/pl.jpg"></S.ItemImage>
          <S.ItemTittle>Надпись</S.ItemTittle>
        </S.Item>
        <S.Item>
          <S.ItemImage src="/pl.jpg"></S.ItemImage>
          <S.ItemTittle>Надпись</S.ItemTittle>
        </S.Item>
        <S.Item>
          <S.ItemImage src="/pl.jpg"></S.ItemImage>
          <S.ItemTittle>Надпись</S.ItemTittle>
        </S.Item>
        <S.Item>
          <S.ItemImage src="/pl.jpg"></S.ItemImage>
          <S.ItemTittle>Надпись</S.ItemTittle>
        </S.Item>
        <S.Item>
          <S.ItemImage src="/pl.jpg"></S.ItemImage>
          <S.ItemTittle>Надпись</S.ItemTittle>
        </S.Item>
        <S.Item>
          <S.ItemImage src="/pl.jpg"></S.ItemImage>
          <S.ItemTittle>Надпись</S.ItemTittle>
        </S.Item>
        <S.Item>
          <S.ItemImage src="/pl.jpg"></S.ItemImage>
          <S.ItemTittle>Надпись</S.ItemTittle>
        </S.Item>
        <S.Item>
          <S.ItemImage src="/pl.jpg"></S.ItemImage>
          <S.ItemTittle>Надпись</S.ItemTittle>
        </S.Item>
      </S.Items>
    </S.Container>
  );
};
