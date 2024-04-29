import * as S from "./product.style";
import React from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/header/header";
import { useState } from 'react';

const colorsRal = {
  8017: "/jp8017.png",
  9003: "/jp9003.png",
  3005: "/jp3005.png",
  6005: "/jp6005.png",
  7024: "/jp7024.png",
  zc: "/jpZC.png",
}

export const Product = () => {
  const { id } = useParams();
  const [color, setColor] = useState(colorsRal[8017])



  return (
    <S.Container>
      <Header />
      <S.ProductTittle>{id}</S.ProductTittle>
      <S.MainInfo>
        <S.MainPhoto src={color}></S.MainPhoto>
        {/* <S.SizeBox></S.SizeBox> */}
        <S.ColorBox>
          <S.Box onClick={() =>{setColor(colorsRal[8017])}}>
            <S.Icon style={{backgroundColor:"#44322D"}}></S.Icon>
            <S.Color>RAL 8017 Шоколадно-коричневый</S.Color>
          </S.Box>
          <S.Box onClick={() =>{setColor(colorsRal[9003])}}>
            <S.Icon style={{backgroundColor:"#f4f8f4"}}></S.Icon>
            <S.Color>RAL 9003 Белый</S.Color>
          </S.Box>
          <S.Box onClick={() =>{setColor(colorsRal[3005])}}>
            <S.Icon style={{backgroundColor:"#5e2028"}}></S.Icon>
            <S.Color>RAL 3005 Вишня</S.Color>
          </S.Box>
          <S.Box onClick={() =>{setColor(colorsRal[6005])}}>
            <S.Icon style={{backgroundColor:"#0f4336"}}></S.Icon>
            <S.Color>RAL 6005 Зеленый</S.Color>
          </S.Box>
          <S.Box onClick={() =>{setColor(colorsRal[7024])}}>
            <S.Icon style={{backgroundColor:"#474a50"}}></S.Icon>
            <S.Color>RAL 7024 Графитовый серый</S.Color>
          </S.Box>
          <S.Box onClick={() =>{setColor(colorsRal.zc)}}>
            <S.Icon style={{backgroundImage: "url(/zn.jpeg)"}}></S.Icon>
            <S.Color>Цинк</S.Color>
          </S.Box>
        </S.ColorBox>
      </S.MainInfo>
    </S.Container>
  );
};
