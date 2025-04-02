import React from "react";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";
import { RecordsProvider } from "../context/RecordsProvider";

export const Layout = () => {
  return (
    <>
      <Header />
      <RecordsProvider>
        <Outlet />
      </RecordsProvider>
    </>
  );
};
