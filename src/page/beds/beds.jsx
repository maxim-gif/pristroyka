import React from "react";
import * as S from "./beds.style";
import { Header } from "../../components/header/header";
import { useNavigate } from "react-router-dom";

export const Beds = () => {
  const navigate = useNavigate();
  return (
    <S.Page>
      <Header />
      <S.Tittle>Грядки и клумбы</S.Tittle>
      <S.Items>
        <S.Item onClick={() => {navigate(`/product/1`)}}>
          <S.ItemImage src="/beds/bed1.jpg" ></S.ItemImage>
          <S.ItemTittle>Грядка с полимерным покрытием</S.ItemTittle>
        </S.Item>
        <S.Item onClick={() => {navigate(`/product/1`)}}>
          <S.ItemImage src="/beds/12.jpg"></S.ItemImage>
          <S.ItemTittle>Клумба с полимерным покрытием</S.ItemTittle>
        </S.Item>
        {/* <S.Item>
          <S.ItemImage src="/beds/bed4.jpg"></S.ItemImage>
          <S.ItemTittle>Грядка с полимерным покрытием</S.ItemTittle>
        </S.Item>
        <S.Item>
          <S.ItemImage src="/beds/bed22.jpg"></S.ItemImage>
          <S.ItemTittle>Грядка с полимерным покрытием</S.ItemTittle>
        </S.Item>
        <S.Item>
          <S.ItemImage src="/beds/bed1.jpg"></S.ItemImage>
          <S.ItemTittle>Грядка с полимерным покрытием</S.ItemTittle>
        </S.Item>
        <S.Item>
          <S.ItemImage src="/beds/bed1.jpg"></S.ItemImage>
          <S.ItemTittle>Грядка с полимерным покрытием</S.ItemTittle>
        </S.Item>
        <S.Item>
          <S.ItemImage src="/beds/bed1.jpg"></S.ItemImage>
          <S.ItemTittle>Грядка с полимерным покрытием</S.ItemTittle>
        </S.Item>
        <S.Item>
          <S.ItemImage src="/beds/bed1.jpg"></S.ItemImage>
          <S.ItemTittle>Грядка с полимерным покрытием</S.ItemTittle>
        </S.Item>
        <S.Item>
          <S.ItemImage src="/beds/bed1.jpg"></S.ItemImage>
          <S.ItemTittle>Грядка с полимерным покрытием</S.ItemTittle>
        </S.Item>
        <S.Item>
          <S.ItemImage src="/beds/bed1.jpg"></S.ItemImage>
          <S.ItemTittle>Грядка с полимерным покрытием</S.ItemTittle>
        </S.Item>
        <S.Item>
          <S.ItemImage src="/beds/bed1.jpg"></S.ItemImage>
          <S.ItemTittle>Грядка с полимерным покрытием</S.ItemTittle>
        </S.Item>
        <S.Item>
          <S.ItemImage src="/beds/bed1.jpg"></S.ItemImage>
          <S.ItemTittle>Грядка с полимерным покрытием</S.ItemTittle>
        </S.Item> */}
      </S.Items>
    </S.Page>
  );
};
