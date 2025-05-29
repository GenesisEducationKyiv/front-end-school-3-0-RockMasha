import { createGlobalStyle } from "styled-components";
import "reset-css";
import "modern-normalize";
import colors from "../constans/colors";

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${colors.purple100};
        @supports (-moz-appearance: none) {
            scrollbar-width: none;
        }
        &::-webkit-scrollbar {
            width: 1px;
        } 
        &::-webkit-scrollbar-track {
            background-color: transparent;
        }
        &::-webkit-scrollbar-thumb {
            background-color: transparent;
        }
    }
    
    input {
        &:focus{
          outline: calc(1px + (2 - 1) * (100vw - 320px) / (1440 - 320)) solid ${colors.purple500};  
        }
        &:-webkit-autofill {
            background-color: transparent !important;
            color: inherit !important;
            -webkit-box-shadow: 0 0 0px 1000px transparent inset !important;
            transition: background-color 5000s ease-in-out 0s;
            border-color: ${colors.black} !important;
            -webkit-text-fill-color: ${colors.black} !important;
            transition: background-color 5000s ease-in-out 0s;
    }

    button, a {
        cursor: pointer;
    }

    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(30%);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
}
}
`;
