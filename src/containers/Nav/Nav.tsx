import React, { useState } from "react"

import styled from "styled-components"
import { Icons } from "../../components"
import { colors } from "../../utils"

const Container = styled.section`
  position: absolute;
  width: 100%;
  z-index: 1;
  color: white;
`

const NavBar = styled.nav`
  width: 100%;
  display: flex;

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .logo {
    padding: 4rem 3.4375rem 0 4rem;
    font-weight: 700;
    font-size: 15px;
  }

  @media (max-width: 768px) {
    flex-direction: ${({ open }: { open: boolean }) =>
      open ? "row" : "row-reverse"};
    justify-content: ${({ open }: { open: boolean }) =>
      open ? "end" : "flex-end"};
    background-color: ${({ open }: { open: boolean }) =>
      open ? "#0d2538" : "inherit"};
    align-items: center;

    .logo {
      width: 100%;
      text-align: center;
      margin-right: 2.75rem;
      display: ${({ open }: { open: boolean }) => (open ? "none" : "block")};
    }
  }
`

const StyledBurger = styled.div`
  width: 1.25rem;
  height: 1rem;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    margin-top: 4rem;
    margin-left: 1.5rem;
    transition: all 0.3s linear;
    margin-right: ${({ open }: { open: boolean }) => (open ? "4rem" : "0")};
    transform: ${({ open }: { open: boolean }) =>
      open ? "translateY(-2rem)" : "none"};
  }

  .icon-close {
    path {
      fill: ${colors.white};
    }
  }
`

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding-top: 4rem;
    padding-right: 2rem;
    cursor: pointer;
    transition: 0.5s;
    border: 0;
    position: relative;
    a {
      text-decoration: none;
      color: ${colors.white};

      span {
        position: absolute;
        left: 0.5rem;
        bottom: 0;
        width: 30%;
        transition: 0.5s;
      }

      &:visited {
        color: ${colors.white};
      }

      &:hover {
        span {
          border-bottom: 2px solid ${colors.white};
        }
      }
    }
  }

  @media (max-width: 768px) {
    transform: ${({ open }: { open: boolean }) =>
      open ? "translateX(0)" : "translateX(100%)"};
    display: ${({ open }: { open: boolean }) => (open ? "flex" : "none")};
    width: 70%;
    transition: transform 0.3s ease-in-out;

    li {
      padding-top: 3.125rem;
      padding-bottom: 3rem;
      color: #fff;
    }
  }
`

export const Nav = () => {
  const [open, setOpen] = useState(false)

  return (
    <Container>
      <NavBar open={open}>
        <div className="logo">
          <Icons.Logo />
        </div>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
          {open ? <Icons.Close className="icon-close" /> : <Icons.Hamburger />}
        </StyledBurger>
        <Ul open={open}>
          <li>
            <a href="#">
              <span />
              home
            </a>
          </li>
          <li>
            <a href="#">
              <span />
              shop
            </a>
          </li>
          <li>
            <a href="#">
              <span />
              about
            </a>
          </li>
          <li>
            <a href="#">
              <span />
              contact
            </a>
          </li>
        </Ul>
      </NavBar>
    </Container>
  )
}
