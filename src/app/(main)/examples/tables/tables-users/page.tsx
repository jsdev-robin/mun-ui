import React from "react";
import { Metadata } from "next";
import UserBorderedTable from "@/components/example/tables/usersTables/UserBorderedTable";

export const metadata: Metadata = {
  title:
    "Users Tables | Starter Pages & Examples | MUNui, crafted with Tailwind CSS",
  description:
    "Explore user-friendly table components and starter page examples designed with MUNui and powered by Tailwind CSS. Enhance your web development with customizable, responsive UI elements.",
};

const UserTablesPage = () => {
  return (
    <section>
      <div className="container">
        <UserBorderedTable />
      </div>
    </section>
  );
};

export default UserTablesPage;
