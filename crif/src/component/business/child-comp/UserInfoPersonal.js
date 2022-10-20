import React from "react";


const UserInfoPersonal = () => {
    return (
        <div className="col-lg-5 col-12 financial-right">
            <div className="card-box">
                <h2>Check your Credit Score in 1 min</h2>
                <form>
                    <div className="form-group"><label htmlFor="name"> Your Full Name* </label><input className="form-control" formcontrolname="name" id="name" name="name" placeholder="Enter your Full Name here" type="text"/></div>
                    <div className="form-group"><label htmlFor="mobile"> Mobile Number* </label><input className="form-control" formcontrolname="mobile" id="mobile" name="mobile" placeholder="+91" type="text"/></div>
                    <div className="form-group"><label htmlFor="email"> Your Business E-Mail ID* </label><input className="form-control" formcontrolname="email" id="email" name="email" placeholder="Enter your email-ID here" type="text"/></div>
                    <div className="form-group text-center"><button appscrolltop="" className="btn btn-default" type="submit">GET STARTED </button></div>
                </form>
            </div>
        </div>
    )
}

export default UserInfoPersonal;