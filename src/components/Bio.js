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

const Bio = () => (
    <div className="bio container">
        <div className="img-container col-lg-4 align-top">
            <img className="img-fluid" alt="andreas-headshot" src={headshot} />
        </div>
        <div className="text-container col-lg-8">
            <p className="lead"> Designer & Front-End Developer at <a href="https://atomiccapital.io/" rel="noopener noreferrer" target="_blank">Atomic Capital</a>. Princeton '17. <br />
            B.S.E. Computer Science + Entrepreneurship + Technology Public Policy.<br />
            <b>hobbies:</b> soccer and dance.</p>
            <hr className="my-4" />
            <div className="additional-container col-lg-12">
                    <InfoSection title="Education" values={['Princeton…2013-2017', 'University of Coimbra, Portugal…2014']} />
                    <InfoSection title="Achievements" values={[
                        'Best AR Hack at RealityVirtually @ MIT Media Lab',
                        'Fastest 2-Legged Robot in the World',
                        'Princeton Entrepreneurship Award',
                        'Silicon Valley TigerTrek Participant',
                        'Washington DC Tech Policy Trip',
                        'Princeton eLab Accelerator Program',
                        '1517 Fund (Former Thiel Fellow) Grantee']} />
                    <InfoSection title="Work" values={[
                        'Lead Designer & Front-End Developer Atomic Capital…2018-',
                        'SWE CleverOgre…2018-2019',
                        'Loco Events Inc…2018-2019',
                        'Cartful (Stumbleupon for Fashion)…2015-2017',
                        'The Florida Institute of Human and Machine Cognition…2013']} />
                    <InfoSection title="Research" values={[
                        'Wikiscrape (Thesis - A Sociological Tool for Network Research)…2017',
                        'Prospect12 (Independent Work - Measuring Social Connections and Nightlife activity in Princeton)…2016']} />
            </div>
        </div>
    </div>
)

export default Bio
