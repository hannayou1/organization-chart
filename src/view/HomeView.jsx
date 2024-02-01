import React from "react";
import Main from "../components/Main";
import WrapOrg from "../components/WrapOrg";
import WrapView from "../components/WrapView";



export const HomeView = () => {
  return (
    <div className="wrap"> 
        <WrapOrg />
        <WrapView />
    </div>
  )
}

export default HomeView