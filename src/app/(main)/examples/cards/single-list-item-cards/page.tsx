import React from "react";
import { Metadata } from "next";
import CardFloatingUserImages from "@/components/example/cards/singleListItemCards/CardFloatingUserImages";
import CardStretched from "@/components/example/cards/singleListItemCards/CardStretched";
import CardUserList from "@/components/example/cards/singleListItemCards/CardUserList";
import CardLineImage from "@/components/example/cards/singleListItemCards/CardLineImage";
import CardUserTeamProfileList from "@/components/example/cards/singleListItemCards/CardUserTeamProfileList";
import CardUserProfileFile from "@/components/example/cards/singleListItemCards/CardUserProfileFile";

export const metadata: Metadata = {
  title:
    "Card Design | Starter Pages & Examples | MUNui - crafted with Tailwind CSS",
  description:
    "Discover beautifully crafted card design components and starter page examples designed with MUNui and powered by Tailwind CSS. Elevate your web development with customizable, responsive UI elements.",
};

const CardDesginPage = () => {
  return (
    <section>
      <div className="container">
        <div className="space-y-14">
          <CardFloatingUserImages />
          <CardStretched />
          <CardUserList />
          <CardLineImage />
          <CardUserTeamProfileList />
          <CardUserProfileFile />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </section>
  );
};

export default CardDesginPage;
