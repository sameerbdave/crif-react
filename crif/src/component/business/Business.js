import React from "react";
import UserInfoPersonal from "./child-comp/UserInfoPersonal";
import FinancialPosition from "./child-comp/FinancialPosition";
import "./business.scss"

const Business =() =>{
    return(
        <div className="container business-main">
            <div className="row align-items-center">
                <FinancialPosition />
                <UserInfoPersonal />
            </div>
        </div>
    )
}

export default Business;