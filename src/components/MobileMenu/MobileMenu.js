/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Wrapper isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="menu">
        <Dismiss onClick={onDismiss}>
          <Icon id="close" />
        </Dismiss>
        <Filler />
        <Nav>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </Nav>
        <Footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </Footer>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsl(220deg 5% 40% / 0.8);

  display: flex;
  justify-content: flex-end;

  a {
    text-decoration: none;
  }
`;

const Content = styled(DialogContent)`
  background: ${(p) => p.theme.colors.white};

  width: 300px;
  height: 100%;
  padding: 32px;

  display: flex;
  flex-direction: column;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;

  a {
    font-weight: ${(p) => p.theme.weights.medium};
    font-size: ${18 / 16}rem;
    text-transform: uppercase;
    color: ${(p) => p.theme.colors.gray[900]};
  }
`;

const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 9px;

  a {
    font-size: ${14 / 16}rem;
    color: ${(p) => p.theme.colors.gray[700]};
  }
`;

const Filler = styled.div`
  flex: 1;
`;

const Dismiss = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;

  padding: 16px;
`;

export default MobileMenu;
