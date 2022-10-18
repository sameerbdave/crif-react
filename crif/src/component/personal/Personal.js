import React from "react";
import FinancialPosition from "./child-comp/FinancialPosition";
import UserInfoPersonal from "./child-comp/UserInfoPersonal";
import "./personal.scss"

const Personal =() =>{
    return(
        <div className="container">
            <h1>Personal</h1>
            <div className="row">
                <div className="col-md-8">
                    <FinancialPosition/>
                </div>
                <div className="col-md-4">
                    <UserInfoPersonal />
                </div>
            </div>
        </div>
    )
}

export default Personal;