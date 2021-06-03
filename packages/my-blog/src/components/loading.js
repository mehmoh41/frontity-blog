import React from "react";
import { styled, keyframes } from "frontity";

const Loading = () => <Spinner />;

export default Loading;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: traslate(-50%, -50%);
  border: 5px solid #ccc;
  border-top: 5px solid black;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 2s linear infinite;
`;
