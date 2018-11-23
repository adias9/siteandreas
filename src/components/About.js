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
        <div className="img-container col-lg-4 align-top">
            <img className="img-fluid" alt="andreas-headshot" src={headshot} />
        </div>
        <div className="text-container col-lg-8">
            <p className="lead"> CodeOgre at <a href="https://cleverogre.com/" rel="noopener noreferrer" target="_blank">CleverOgre</a> and Founder at <a href="https://www.go-loco.com/" rel="noopener noreferrer" target="_blank">Loco</a>. Princeton '17. <br />
            B.S.E. Computer Science + Entrepreneurship + Technology Public Policy.<br />
            <b>hobbies:</b> soccer and dance.</p>
            <hr className="my-4" />
            <div className="additional-container col-lg-12">
                    <InfoSection title="Education" values={['Princeton…2013-2017', 'University of Coimbra, Portugal…2014']} />
                    <InfoSection title="Achievements" values={[
                        'Fastest 2-Legged Robot in the World',
                        'Princeton Entrepreneurship Award',
                        'Silicon Valley TigerTrek Participant',
                        'Washington DC Tech Policy Trip',
                        'Princeton eLab Accelerator Program',
                        '1517 Fund Grantee']} />
                    <InfoSection title="Work" values={[
                        'CleverOgre…2018-',
                        'Loco Events Inc…2018-',
                        'Cartful (Stumbleupon for Fashion)…2015-2017',
                        'The Florida Institute of Human and Machine Cognition…2013']} />
                    <InfoSection title="Research" values={[
                        'Wikiscrape…2017',
                        'Prospect12…2016']} />
            </div>
        </div>
    </div>
)

export default About
