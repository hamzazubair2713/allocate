import PageHeader from "@/components/PageHeader";
import SafeCompAdmin from "@/components/SafeCompAdmin";
import SideNav from "@/components/SideNav";
import React from "react";
import { FiPlusCircle } from "react-icons/fi";

const index = () => {
  return (
    <>
      <SideNav />
      <PageHeader>
        Safes
        <FiPlusCircle color="var(--blue)" />
      </PageHeader>
      <SafeCompAdmin />
    </>
  );
};

export default index;
