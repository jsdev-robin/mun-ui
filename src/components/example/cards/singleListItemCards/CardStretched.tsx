import React from "react";
import Heading from "@/components/ui/heading";
import { ChevronRight } from "lucide-react";

const CardStretched = () => {
  return (
    <div className="space-y-4">
      <Heading as="h6">Stretched Card Buttom with Icon</Heading>
      <div className="max-w-lg mx-auto">
        <button
          type="button"
          className="p-3 text-start border border-border rounded-xl flex items-center gap-x-3 w-full transition-all hover:bg-muted"
        >
          <span className="flex items-center justify-center w-8 h-8 border border-border rounded-full">
            <svg
              className="w-5 h-auto"
              width={35}
              height={22}
              viewBox="0 0 35 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="asfasfa1123123"
                style={{ maskType: "luminance" }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={35}
                height={22}
              >
                <path d="M34.5 0.375H0.5V21.387H34.5V0.375Z" fill="white" />
              </mask>
              <g mask="url(#asfasfa1123123)">
                <path
                  d="M22.0899 19.1431H12.9099V2.61914H22.0899V19.1431Z"
                  fill="#FF5F00"
                />
                <path
                  d="M13.488 10.881C13.488 7.532 15.052 4.54 17.5 2.619C15.647 1.157 13.369 0.375 11.006 0.375C5.209 0.375 0.5 5.084 0.5 10.881C0.5 16.678 5.209 21.387 11.006 21.387C13.369 21.387 15.647 20.605 17.5 19.143C15.052 17.222 13.488 14.23 13.488 10.881Z"
                  fill="#EB001B"
                />
                <path
                  d="M34.5 10.881C34.5 16.678 29.791 21.387 23.994 21.387C21.631 21.387 19.353 20.605 17.5 19.143C19.948 17.222 21.512 14.23 21.512 10.881C21.512 7.532 19.948 4.54 17.5 2.619C19.353 1.157 21.631 0.375 23.994 0.375C29.791 0.375 34.5 5.084 34.5 10.881Z"
                  fill="#F79E1B"
                />
              </g>
            </svg>
          </span>
          <div className="flex-1">
            <span className="text-sm font-medium text-accent-foreground">
              Debit card •••• 8080
            </span>
            <span className="text-sm text-muted-foreground block">
              Expires 12/24
            </span>
          </div>
          <span className="flex items-center gap-1 font-medium text-primary text-sm">
            Change <ChevronRight className="w-4 h-4" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default CardStretched;
