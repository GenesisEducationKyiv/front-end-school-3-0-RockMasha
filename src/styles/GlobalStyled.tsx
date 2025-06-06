import { createGlobalStyle } from 'styled-components'
import 'reset-css'
import 'modern-normalize'
import { globalCSSVars } from './colors'

export const GlobalStyles = createGlobalStyle`
    ${globalCSSVars}

    body {
        background-color: var(--color-purple-100);
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
          outline: calc(1px + (2 - 1) * (100vw - 320px) / (1440 - 320)) solid var(--color-purple-500);  
        }
        &:-webkit-autofill {
            background-color: transparent !important;
            color: inherit !important;
            -webkit-box-shadow: 0 0 0px 1000px transparent inset !important;
            transition: background-color 5000s ease-in-out 0s;
            border-color: var(--color-black) !important;
            -webkit-text-fill-color:  var(--color-black) !important;
            transition: background-color 5000s ease-in-out 0s;
    }

    button, a {
        cursor: pointer;
    }
}
`
