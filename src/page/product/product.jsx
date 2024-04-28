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
        <S.MainPhoto src="/beds/bed1.jpg"></S.MainPhoto>
        {/* <S.SizeBox></S.SizeBox> */}
        <S.ColorBox>
          <S.Box>
            <S.Icon style={{backgroundColor:"#44322D"}}></S.Icon>
            <S.Color>RAL 8017 Шоколадно-коричневый</S.Color>
          </S.Box>
          <S.Box>
            <S.Icon style={{backgroundColor:"#f4f8f4"}}></S.Icon>
            <S.Color>RAL 9003 Белый</S.Color>
          </S.Box>
          <S.Box>
            <S.Icon style={{backgroundColor:"#5e2028"}}></S.Icon>
            <S.Color>RAL 3005 Вишня</S.Color>
          </S.Box>
          <S.Box>
            <S.Icon style={{backgroundColor:"#0f4336"}}></S.Icon>
            <S.Color>RAL 6005 Зеленый</S.Color>
          </S.Box>
          <S.Box>
            <S.Icon style={{backgroundColor:"#474a50"}}></S.Icon>
            <S.Color>RAL 7024 Графитовый серый</S.Color>
          </S.Box>
          <S.Box>
            <S.Icon style={{backgroundImage: "url(/zn.jpeg)"}}></S.Icon>
            <S.Color>Цинк</S.Color>
          </S.Box>
        </S.ColorBox>
      </S.MainInfo>
    </S.Container>
  );
};
