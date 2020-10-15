import React from "react";
import styled from "styled-components";
import Card from "../../../styled/components/Card";

interface CabinetProps {
  active: boolean;
  toggle: () => boolean;
  children: React.ReactNode;
}

const Cabinet = ({ active, toggle, children, ...rest }: CabinetProps) => (
  <CabinetWrapper>
    <div
      className={`overlay-${active ? "active" : "in-active"}`}
      onClick={toggle}
    />
    <Card
      {...rest}
      className={`cabinet ${active ? "active" : "in-active"}`}
      // @ts-ignore
      radius="0 0.4rem 0.4rem 0"
    >
      {children}
    </Card>
  </CabinetWrapper>
);

const CabinetWrapper = styled.div`
  text-align: center;

  .in-active {
    left: -30rem;
  }

  .active {
    left: 0rem;
  }

  .overlay-in-active {
    display: none;
  }

  .overlay-active {
    z-index: 1000;
    position: absolute;
    height: 100vh;
    width: 100vw;
    left: 0;
    right: 0;
    top: 0;
  }

  .in-active .cabinet {
    display: none;
  }

  .cabinet {
    z-index: 2000;
    position: fixed;
    height: 100vh;
    width: 30rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    transition: left 1s;
  }

  @media only screen and (max-width: 600px) {
    .cabinet {
      width: 50vw;
    }
  }
`;

export default Cabinet;
