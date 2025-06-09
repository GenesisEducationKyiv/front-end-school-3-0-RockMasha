import { colors } from "../../styles/colors";

function BurgerSvg() {
  return (
    <svg viewBox="0 0 41 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        id="burger-menu"
        d="M2 2H25.3333M2 12.6667H39.3333M16 23.3333H39.3333"
        stroke={colors.white}
        strokeWidth="2.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default BurgerSvg;
