// [x] TODO Put in correct fonts etc from graphic design
// [ ] TODO Look through reset

import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  :root {
    /* ------------- */
    /* Font settings */
    /* ------------- */

    --font-body-txt: 'Ubuntu', sans-serif; // fontweight 400
    --font-heading: 'Ubuntu', sans-serif; // fontweight 700
    --font-highlighted-txt: 'Didot', serif;

    //--h1-font-weight: 600;
    --p-font-size-mobile: 16px;
    --h1-font-size-mobile: 32px;

    --p-font-size-desktop:16px;
    --h1-font-size-desktop: 32px;

    /* ----------- */
    /* Main colors */
    /* ----------- */
    --darkPurple: #442E57; //from graphic design
    --mediumPurple: #574368; //from website
    --lightPurple: #CFCCE4; //from graphic design
    --gold: #CDB56C; //from graphic design
    --darkGrey: #353333; //from website
    --lightGrey: #C6C6C7; //made up
    --black: #000000;
    --white: #ffffff;
  }

  /* --------- */
  /*   Reset   */
  /* --------- */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;
    line-height: 1.5;
    font-family: var(--font-body-txt);
    font-weight: 400;
    max-width: 100vw;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    display: block;
    font-family: var(--font-heading);
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: 700;
    unicode-bidi: isolate;
  }

  ul, ol {
    list-style: none;
  }

  h1 {
    font-size: var(--h1-font-size-mobile);
  }

  p {
    overflow-wrap: break-word;
    font-size: var(--p-font-size-mobile);
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {

  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    h1 {
      font-size: var(--h1-font-size-desktop);
    }

    p {
      font-size: var(--p-font-size-desktop);
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktopLarge}) {

  }
`