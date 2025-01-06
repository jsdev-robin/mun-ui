import React from "react";
import Heading from "@/components/ui/heading";
import Image from "next/image";
import Link from "next/link";

const CardUserList = () => {
  return (
    <div className="space-y-4">
      <Heading as="h6">User List Card</Heading>
      <div className="max-w-lg mx-auto">
        <Link
          href="/"
          className="p-3 text-start border border-border rounded-xl flex items-center gap-x-3 w-full transition-all hover:bg-muted"
        >
          <div className="shrink-0">
            <div className="relative">
              <Image
                src="/images/users/11.jpg"
                alt="avatar"
                width={36}
                height={36}
                className="w-12 h-12 rounded-xl"
              />
              <div className="text-center -bottom-2 left-0 right-0 absolute">
                <span className="font-medium py-px text-xs px-1 uppercase inline-flex items-center bg-gradient-to-tr from-lime-500 to-teal-500 rounded-md text-white">
                  Pro
                </span>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="font-medium text-accent-foreground">
              Amanda Harvey
            </h2>
            <ul className="text-sm text-muted-foreground">
              <li className="inline-block pe-3">Front-End Developer</li>
              <li className="inline-block pe-3">(892) 312-5483</li>
              <li className="inline-block pe-3">amanda@email.com</li>
            </ul>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CardUserList;
