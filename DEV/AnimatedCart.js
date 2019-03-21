import React from "react";
import styled from "styled-components";
import BounceTwist from "./BounceTwist";

const Cart = React.memo(styled.div`
  position: relative;
  width: 32px;
   height: 32px;
   border-radius: 10%;
   background-color: red;
   &:before {
      display: block;
      content: '';
      width: 50%;
      height: 50%;
      border-radius: 50%;
      background-color: green;
      position: absolute;
      z-index: 1;
      top: 25%;
      left: 25%;
   }
   &:after {
      content: "${props => props.total}";
      position: absolute;
      z-index: 2;
      width: 50%;
      height: 50%;
      top: 25%;
      left: 25%;
      text-align: center;
   }
`);

Cart.defaultProps = {
  total: 0
};

export default React.memo(({ total }) => (
  <BounceTwist>
    <Cart total={total} />
  </BounceTwist>
));
