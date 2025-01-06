"use client";
import Link from "next/link";
import React from "react";
import Heading from "../ui/heading";

import { Github, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const Header = () => {
  const { setTheme } = useTheme();
  return (
    <header className="border-b py-2 mb-10">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Heading as="h4" className="text-primary font-bold">
              MUNui
            </Heading>
          </Link>
          <div className="flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="https://github.com/jsdev-robin/mun-ui.git"
              className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
              target="_blank"
            >
              <Github />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
