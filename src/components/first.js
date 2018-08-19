import React, { Component } from 'react';
import Feature from './feature';
import AtoTerm from './ato-term';
import AtoContract from './ato-contract'
const First = () => {

    const url = `https://www.youtube.com/embed/tbGmLmpy1Yo`;
    return (
        <div className="first-page">
            <div className="ico-title mb-2em text-center">
                IHT ATO Sale Live Now
            </div>
            <div className="video-detail col-md-6">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={url} />
                </div>
            </div>
            <div className="ico-topic mb-2em mt-2em text-center">
                Participate in IHT ATO Token Sale
            </div>
            <div className="contribute-btn mb-2em">
                <button type="button" className="btn btn-success">Contribute</button>
            </div>
            <hr/>
            <Feature/>
            <div className="ico-topic mb-2em mt-5 text-center">
                ATO Terms
            </div>
            <AtoTerm/>
            <div className="ico-topic mb-2em mt-2em text-center">
                ATO Asset Contract
            </div>
            <AtoContract/>
        </div>
    );
};

export default First;
