import React from "react";
import colors from "../constans/colors";

function DefaultSvg({
  fill = colors.white,
  stroke = colors.white,
  secondaryStroke = colors.white,
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      enableBackground="new 0 0 32 32"
      id="Layer"
      version="1.1"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{ enableBackground: "new 0 0 32 32" }}
    >
      <g id="page_document_emoji_No_results_empty_page">
        <g id="XMLID_1521_">
          <path
            d="M21.5,14.75c0.41,0,0.75,0.34,0.75,0.75s-0.34,0.75-0.75,0.75s-0.75-0.34-0.75-0.75    S21.09,14.75,21.5,14.75z"
            fill={fill}
            id="XMLID_1887_"
          />
          <path
            d="M10.5,14.75c0.41,0,0.75,0.34,0.75,0.75s-0.34,0.75-0.75,0.75s-0.75-0.34-0.75-0.75    S10.09,14.75,10.5,14.75z"
            fill={fill}
            id="XMLID_1885_"
          />
        </g>
        <g id="XMLID_1337_">
          <g id="XMLID_4010_">
            <polyline
              fill="none"
              id="XMLID_4073_"
              points="21.5,1.5 4.5,1.5 4.5,30.5 27.5,30.5 27.5,7.5"
              stroke={secondaryStroke}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
            />
            <polyline
              fill="none"
              id="XMLID_4072_"
              points="21.5,1.5 27.479,7.5 21.5,7.5 21.5,4"
              stroke={secondaryStroke}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
            />
            <path
              d="M14.5,18.5c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5"
              fill="none"
              id="XMLID_4071_"
              stroke={secondaryStroke}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
            />
            <g id="XMLID_4068_">
              <path
                d="M20.75,15.5c0,0.41,0.34,0.75,0.75,0.75s0.75-0.34,0.75-0.75s-0.34-0.75-0.75-0.75S20.75,15.09,20.75,15.5z"
                fill="none"
                id="XMLID_4070_"
                stroke={secondaryStroke}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
              />
              <path
                d="M11.25,15.5c0,0.41-0.34,0.75-0.75,0.75s-0.75-0.34-0.75-0.75s0.34-0.75,0.75-0.75S11.25,15.09,11.25,15.5z"
                fill="none"
                id="XMLID_4069_"
                stroke={secondaryStroke}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
              />
            </g>
          </g>
          <g id="XMLID_2974_">
            <polyline
              fill="none"
              id="XMLID_4009_"
              points="21.5,1.5 4.5,1.5 4.5,30.5 27.5,30.5 27.5,7.5"
              stroke={stroke}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
            />
            <polyline
              fill="none"
              id="XMLID_4008_"
              points="21.5,1.5 27.479,7.5 21.5,7.5 21.5,4"
              stroke={stroke}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
            />
            <path
              d="M14.5,18.5c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5"
              fill="none"
              id="XMLID_4007_"
              stroke={stroke}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
            />
            <g id="XMLID_4004_">
              <path
                d="M20.75,15.5c0,0.41,0.34,0.75,0.75,0.75s0.75-0.34,0.75-0.75s-0.34-0.75-0.75-0.75S20.75,15.09,20.75,15.5z"
                fill="none"
                id="XMLID_4006_"
                stroke={stroke}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
              />
              <path
                d="M11.25,15.5c0,0.41-0.34,0.75-0.75,0.75s-0.75-0.34-0.75-0.75s0.34-0.75,0.75-0.75S11.25,15.09,11.25,15.5z"
                fill="none"
                id="XMLID_4005_"
                stroke={stroke}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default DefaultSvg;
