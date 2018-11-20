import React from 'react'
import headshot from '../images/headshot.jpg';

const InfoSection = props => {
    const title = props.title;
    const values = props.values;
    const listItems = values.map((value) =>
        <li>{value}</li>
    );
    return (
        <div className="section">
            <h3>{title}</h3>
            <ul>{listItems}</ul>
        </div>
    );
}

const About = () => (
    <div className="about container">
        <div className="text-container col-lg-8 align-bottom">
            <p className="lead"> CodeOgre at <a href="https://cleverogre.com/" rel="noopener noreferrer" target="_blank">CleverOgre</a> and Founder at <a href="https://www.go-loco.com/" rel="noopener noreferrer" target="_blank">Loco</a>. Princeton '17. <br />
            BSE Computer Science + Entrepreneurship + Technology Public Policy.<br />
            <b>Interests:</b> Soccer and dance.</p>
            <hr className="my-4" />
        </div>
        <div className="img-container col-lg-4">
            <img className="img-fluid" alt="andreas-headshot" src={headshot} />
        </div>
        <div className="additional-container col-lg-12">
            <InfoSection title="Education" values={['2013-2017…Princeton', '2014…University of Coimbra, Portugal']} />
            <InfoSection title="Achievements" values={[
                'Fastest 2-Legged Robot in the World',
                'Princeton Entrepreneurship Award',
                'Silicon Valley TigerTrek Participant',
                'Washington DC Tech Policy Trip',
                'Princeton eLab Accelerator Program',
                '1517 Fund Grantee']} />
            <InfoSection title="Work" values={[
                '2018…CleverOgre',
                '2018…Loco',
                '2015-2017…Cartful (Stumbleupon for Fashion)',
                '2013…The Florida Institute of Human and Machine Cognition']} />
            <InfoSection title="Research" values={[
                '2017…Wikiscrape',
                '2016…Prospect12']} />
        </div>
    </div>
)

export default About
