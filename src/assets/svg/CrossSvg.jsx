import { colors } from "../../styles/colors";

function CrossSvg() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 20 L60 60 M60 20 L20 60"
        stroke={colors.white}
        strokeWidth="8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default CrossSvg;
