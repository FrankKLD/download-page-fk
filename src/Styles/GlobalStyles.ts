import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    background: var(--background);
  }

  *, button, input {
    border: 0;
    outline: 0;
    font-family: 'Roboto', sans-serif;
  }
  
  a {
    text-decoration: none;
  }

  .DontShowIt {
    display: none !important;
  }
  
  :root {
    --THEME_COLOR_001: #3367D6;
    --THEME_COLOR_002: #104AC7;
    --THEME_COLOR_003: #113E9E;
    --THEME_COLOR_004: #B8B8B8;
    --THEME_COLOR_005: #EBEDEF;
    --THEME_COLOR_006: #FFFFFF;
    --THEME_COLOR_007: #BCCEF6;
    --THEME_COLOR_008: #5A5A5A;


    --background: var(--THEME_COLOR_005);

    --search-area-background: var(--THEME_COLOR_001);
    --search-area-color: var(--THEME_COLOR_005);
    --search-area-background-button-hover: var(--THEME_COLOR_002);
    --search-area-input-background: var(--THEME_COLOR_003);
    --search-area-input-placeholder: var(--THEME_COLOR_007);
    --search-area-input-color: var(--THEME_COLOR_006);

    --items-area-title: var(--THEME_COLOR_008);
    --items-area-background: var(--THEME_COLOR_006);
    --items-image-border-limit: var(--THEME_COLOR_005);
    --items-image-background: var(--THEME_COLOR_005);
    --items-strong-title-color: var(--THEME_COLOR_002);
    --items-strong-description-color: var(--THEME_COLOR_004);
    --items-buttons-content-border: var(--THEME_COLOR_005);
    --items-button-background: var(--THEME_COLOR_005);
    --items-button-border: var(--THEME_COLOR_005);
    --items-button-border-hover: var(--THEME_COLOR_007);
    --items-button-color: var(--THEME_COLOR_003);

    --items-default-button-background: var(--THEME_COLOR_001);
    --items-default-button-background-hover: var(--THEME_COLOR_003);
    --items-default-button-border: var(--THEME_COLOR_001);
    --items-default-button-border-hover: var(--THEME_COLOR_003);
    --items-default-button-color: var(--THEME_COLOR_006);
  }
`;
