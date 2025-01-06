import React from "react";
import { IconProps } from "./Index";
import { cn } from "@/lib/utils";

const GmailIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={cn(className)}
      width={33}
      height={32}
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_11766_122209asdasd21123fde)">
        <path
          d="M3.11931 28.4817H8.21019V16.1181L0.937439 10.6636V26.3C0.937439 27.5054 1.91381 28.4819 3.11931 28.4819V28.4817Z"
          fill="#4285F4"
        />
        <path
          d="M25.6647 28.4817H30.7556C31.961 28.4817 32.9374 27.5054 32.9374 26.2999V10.6636L25.6647 16.1181V28.4817Z"
          fill="#34A853"
        />
        <path
          d="M25.6647 6.66356V16.1181L32.9374 10.6636V7.7545C32.9374 5.05812 29.8593 3.51812 27.701 5.13631L25.6647 6.66356Z"
          fill="#FBBC04"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.21021 16.1181V6.66356L16.9375 13.2091L25.6647 6.66356V16.1181L16.9375 22.6636L8.21021 16.1181Z"
          fill="#EA4335"
        />
        <path
          d="M0.937439 7.7545V10.6636L8.21019 16.1181V6.66356L6.17381 5.13631C4.01556 3.51813 0.937439 5.05813 0.937439 7.75438V7.7545Z"
          fill="#C5221F"
        />
      </g>
      <defs>
        <clipPath id="clip0_11766_122209asdasd21123fde">
          <rect
            width={32}
            height={32}
            fill="white"
            transform="translate(0.937439)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default GmailIcon;
