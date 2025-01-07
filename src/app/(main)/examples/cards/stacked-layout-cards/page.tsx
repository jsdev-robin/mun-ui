import React from "react";
import { Metadata } from "next";
import TeamListCard from "@/components/example/cards/stackedLayoutCard/TeamListCard";

export const metadata: Metadata = {
  title:
    "Card Design | Starter Pages & Examples | MUNui - crafted with Tailwind CSS",
  description:
    "Discover beautifully crafted card design components and starter page examples designed with MUNui and powered by Tailwind CSS. Elevate your web development with customizable, responsive UI elements.",
};
const StackedCardPage = () => {
  return (
    <section>
      <div className="container">
        <div className="space-y-14">
          <TeamListCard />
        </div>
      </div>
    </section>
  );
};

export default StackedCardPage;
