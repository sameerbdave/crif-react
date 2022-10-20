import React from "react";
import UserInfoPersonal from "./child-comp/UserInfoPersonal";
import FinancialPosition from "./child-comp/FinancialPosition";
import "./business.scss"
import FaqsComp from "../common/faqs/FaqsComp";

const Business =() =>{
    return(
        <>
        <div className="container business-main">
            <div className="row align-items-center">
                <FinancialPosition />
                <UserInfoPersonal />
            </div>
        </div>
        <FaqsComp name="business" />
        </>
    )
}

export default Business;