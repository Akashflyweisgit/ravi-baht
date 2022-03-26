/** @format */

import React, { useState } from "react";
import "./beneficiary.css";
import { CgProfile } from "react-icons/cg";

export const Beneficiary = () => {
  return (
    <div className="homepage">
      <div className="header">
        <div className="headerText">USER DASHBOARD</div>
        <div className="headerName">
          MOHAN
          <CgProfile className="headerIcon" />
        </div>
      </div>
      <div className="active">
        <div className="activeText">Total Active Beneficiary</div>
      </div>
      <div className="activeCount">
        <div className="activeNumber">55 </div>
      </div>
      <div className="hours">
        <div className="hoursText">Pending Verification</div>
      </div>

      <div className="hoursCount">
        <div className="hoursNumber">05</div>
      </div>

      <div className="logIn">
        <div className="logInText">Suspended Beneficiary</div>
      </div>

      <div className="logInCount">
        <div className="logInNumber">08</div>
      </div>

      {/* <div className="inactive">
        <div className="inactiveText">Inactive More Than 3 Months</div>
      </div>

      <div className="inactiveCount">
        <div className="inactiveNumber">02</div>
      </div> */}

      <div className="newUser">
        <div className="newUserIcon">+</div>
        <div className="newUserText">Add New Beneficiary</div>
      </div>

      <div className="bar"></div>

      <div className="table">
        <table>
          <tr>
            <th className="headSal">Name</th>
            <th className="headFirst">First Name</th>
            <th className="headLast">Last Day</th>
            <th className="headCity">City</th>
            <th className="headNumber">Phone Number</th>
          </tr>
          <tr>
            <td>Anom</td>
            <td>19</td>
            <td>Male</td>
          </tr>
          <tr>
            <td>Megha</td>
            <td>19</td>
            <td>Female</td>
          </tr>
          <tr>
            <td>Subham</td>
            <td>25</td>
            <td>Male</td>
          </tr>
        </table>
      </div>
      <div className="sideBar">
        <div className="sideBarText">Baht to INR</div>

        <div className="users">
          <div className="userText">USERS DASHBOARD</div>
        </div>

        <div className="benf">
          <div className="benfText">BENEFICIARIES DASHBOARD</div>
        </div>

        <div className="currency">
          <div className="currencyText">CURRENCY RATES</div>
        </div>

        <div className="images">
          <div className="imagesText">SCROLL IMAGES</div>
        </div>
      </div>
    </div>
  );
};
