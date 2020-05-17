import React from "react";

// import { NavLink as Lnk } from "react-router-dom";
import { theme } from "../../../styled/theme/index";

import styled from "styled-components";
import {
  flexWrap,
  columnDirection,
  flexJustify,
  centerAlign,
  flexContent,
  sideways,
  boxSize,
  buttonColor,
  buttonBackground,
  btnMarg,
  btnPad,
  textCenter,
} from "../../../styled/maps/index";

const NavLink = (props: any) => {
  return (
    <Link
      {...props}
      // path={props.path}
      getProps={({ isCurrent }: any) => {
        // the object returned here is passed to the
        // anchor element's props
        return {
          style: {
            color: isCurrent ? "white" : theme.palette.primary,
            background: isCurrent ? theme.palette.primary : "white",
          },
        };
      }}
    />
  );
};

const Link = styled.a`
  display: flex;
  flex-wrap: ${flexWrap};
  flex-direction: ${(props: { direction: string }) =>
    props.direction ? props.direction : columnDirection};
  justify-content: ${(props: { justify: string }) =>
    props.justify ? props.justify : flexJustify};
  align-items: ${(props: { align: string }) =>
    props.align ? props.align : centerAlign};
  align-content: ${(props: any) =>
    props.content ? props.content : flexContent};
  color: ${(props) => (props.color ? props.color : buttonColor)};
  background: ${(props) => (props.bg ? props.bg : buttonBackground)};
  border: ${(props: { border: string }) =>
    props.border ? props.border : "none"};
  border-radius: ${(props: { radius: string }) =>
    props.radius ? props.radius : "0.5rem"};
  width: ${(props: { w: string }) => (props.w ? props.w : sideways)};
  height: ${(props: { h: string }) => (props.h ? props.h : "auto")};
  margin: ${(props: { m: string }) => (props.m ? props.m : btnMarg)};
  padding: ${(props: { p: string }) => (props.p ? props.p : btnPad)};
  opacity: ${(props: { opacity: string }) =>
    props.opacity ? props.opacity : "none"};
  box-sizing: ${(props: { boxSize: string }) =>
    props.boxSize ? props.boxSize : boxSize};
  text-align: ${textCenter};
`;

export default NavLink;
