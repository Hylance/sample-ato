import React, { Component } from "react";

const AtoTerm = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                    <div className="term-title mb-3 text-center">
                        Offering Size
                    </div>
                    <ul className="term-item">
                       <li>150000 ETH </li>
                       <li>30% of all tokens to be sold during the launch</li>
                    </ul>
                </div>
                <div className="col-sm-4">
                    <div className="term-title mb-3 text-center">
                        Pricing Mechanism
                    </div>
                    <ul className="term-item">
                        <li>No pre-sale, fair level playing field at Token Sale launch on 18th of May</li>
                        <li>Early buyers discounts on 18th of May at a rate sliding from 150 MCO:1ETH down to 100 MCO:1ETH</li>
                        <li>Every contributor will receive a unique referral link and 5% referral fee for all contributors that we can track & match with this link</li>
                    </ul>
                </div>
                <div className="col-sm-4">
                    <div className="term-title mb-3 text-center">
                        Secure Offer
                    </div>
                    <ul className="term-item">
                        <li>Funds held in TokenMarket Escrow</li>
                        <li>Multi-signature wallet</li>
                        <li>Management Team tokens non-transferable upon completion - locked for 3 months through a smart contract function</li>
                        <li>Legal T&Cs - MCO Creation Terms</li>
                    </ul>
                </div>
            </div>
        </div>
    );

};

export default AtoTerm;