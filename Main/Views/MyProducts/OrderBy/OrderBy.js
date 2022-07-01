import React, { useEffect, useState } from "react";
import styled from "styled-components/native";

import Container from "../../../Reusables/Containers/Container";
import { Font } from "../../../Defaults/Font";
import { Color } from "../../../Defaults/Color";
import OrderButton from "./OrderButton";

export default function OrderBy({ liftOrderState }) {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    liftOrderState(selected);
  }, [selected]);

  return (
    <Wrapper>
      <ContainerCustom>
        <InnerWrapper>
          <TextItem>Order by: </TextItem>
          <OrderButton
            onPress={() => setSelected("date")}
            selected={selected === "date"}
          >
            Date
          </OrderButton>
          <OrderButton
            onPress={() => setSelected("price")}
            selected={selected === "price"}
          >
            Price
          </OrderButton>
          <OrderButton
            onPress={() => setSelected("title")}
            selected={selected === "title"}
          >
            Title
          </OrderButton>
          <OrderButton
            onPress={() => setSelected("amount")}
            selected={selected === "amount"}
          >
            Amount
          </OrderButton>
          <OrderButton
            onPress={() => setSelected("totalValue")}
            selected={selected === "totalValue"}
          >
            Tot Val.
          </OrderButton>
        </InnerWrapper>
      </ContainerCustom>
    </Wrapper>
  );
}

const ContainerCustom = styled(Container)`
  padding: 10px 5px;
  margin: 15px 0 0;
  width: 100%;
`;

const TextItem = styled.Text`
  font-family: ${Font.family.regular};
  color: ${Color.gray7};
`;

const Wrapper = styled.View`
  padding: 0 15px;
  width: 100%;
`;

const InnerWrapper = styled.View`
  width: 100%;
  padding-left: 5px;
  max-width: 400px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;
