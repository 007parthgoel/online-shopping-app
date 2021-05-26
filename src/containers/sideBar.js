import React from "react";
import Backdrop from "../components/UI/backdrop";

export default function sideBar({show,sidebarClose}) {
  return (
    <>
      <Backdrop show={show} clicked={sidebarClose}/>
      <div className={`sidebar ${show && 'open'}`}></div>
    </>
  );
}
