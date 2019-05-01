import React from 'react'
import pcb_img from '../images/pcb_logo.png';
import clever_img from '../images/clever_logo.png';
import loco_img from '../images/loco_logo.png';
import cartful_img from '../images/cartful_logo.jpg';
import sophthrive_img from '../images/sophthrive.png';
import atomic_img from '../images/atomic.png';
import bridgestone_img from '../images/bridgestone.png';
import foxy_img from '../images/foxy_vacations.png';
import bright_img from '../images/MIT_ML.png';

const CardButton = props => {
    const title = props.title;
    const link = props.link;
    const type = props.type;
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className={'btn ' + type}>{title}</a>
    );
}

class CardBlock extends React.Component {
    constructor(props) {
        super(props);
        this.title = props.title;
        this.text = props.text;
    }

    render() {
        const title = this.title;
        const text = this.text;
        return (
            <div className="card-block">
              <h4 className="card-title">{title}</h4>
              <p className="card-text">{text}</p>
              {this.props.children}
            </div>
        );
    }
}

class CardImage extends React.Component {
    constructor(props) {
        super(props);
        this.src = props.src;
        this.alt = props.alt;
    }

    render() {
        const src = this.src;
        const alt = this.alt;
        return (
            <img className="card-img-top img-fluid" src={src} alt={alt} />
        );
    }
}

class Card extends React.Component {
    render() {
        return (
            <div className="card text-center p-3">
                {this.props.children}
            </div>
        )
    }
}

class CardDeck extends React.Component {
    render() {
        return (
            <div className="card-columns">
                {this.props.children}
            </div>
        )
    }
}

const Projects = () => {
    return (
        <div className="projects container">
            <CardDeck>
                <Card>
                    <CardImage src={atomic_img} alt="Atomic Capital" />
                    <CardBlock title="" text="Front-end engineering, UI/UX, and general company design requests for the dashboard platform offering Digital Security Issuance to both private and publicly traded companies as well as Cryptocurrency Collateralized Loans.">
                        <CardButton title="Learn More" type="btn-primary" link="https://atomiccapital.io" />
                    </CardBlock>
                </Card>
                <Card>
                    <CardImage src={bright_img} alt="Bright" />
                    <CardBlock title="Bright" text="An Augmented Reality project at MIT Media Lab Reality Virtually Hackathon for the Microsoft Hololens to increase accessbility for the vision impaired through an audio interface with Facial Recognition, OCR, and text overlay.">
                        <CardButton title="Read More" type="btn-primary" link="https://www.bostonglobe.com/business/2019/01/24/they-trying-make-virtual-reality-more-useful/5v7IdeXjosONF9gQE0HJfJ/story.html#comments" />
                    </CardBlock>
                </Card>
                <Card>
                    <CardImage src={bridgestone_img} alt="Bridgestone" />
                    <CardBlock title="Bridgestone" text="I built a Unity freelance project with Augmented Reality instruction app for Bridgestone Tires Assembly Line.">
                    </CardBlock>
                </Card>
                <Card>
                    <CardImage src={foxy_img} alt="Foxy Vacations" />
                    <CardBlock title="" text="A web freelance project I completed building a vacation rental management platform similar to Airbnb for direct website rentals.">
                        <CardButton title="Learn More" type="btn-primary" link="https://foxyvacations.com" />
                    </CardBlock>
                </Card>
                <Card>
                    <CardImage src={pcb_img} alt="Pensacola Beach Casa" />
                    <CardBlock title="Pensacola Beach Casa" text="A web freelance project I completed redesigning the webpage for a beach town home.">
                        <CardButton title="Learn More" type="btn-primary" link="http://34.226.194.6" />
                    </CardBlock>
                </Card>
                <Card>
                    <CardImage src={sophthrive_img} alt="Presentation Logo" />
                    <CardBlock title="Design Consulting for Princeton Administration" text="Goal: Reduce Stigma at Princeton. Redesigned the sophomore experience to better inform and guide Princeton students throughout the rest of their Princeton experience.">
                        <CardButton title="See The Presentation" type="btn-primary" link="https://drive.google.com/file/d/0B7liA7zyqDeVTXhnaFBCR2l2Ym8/view?usp=sharing" />
                    </CardBlock>
                </Card>
                <Card>
                    <CardImage src={clever_img} alt="CleverOgre Logo" />
                    <CardBlock title="CleverOgre Web Agency" text="Here are a few case studies that include some of the work I've done for CleverOgre.">
                        <CardButton title="Learn More" type="btn-primary" link="https://cleverogre.com/them/" />
                    </CardBlock>
                </Card>
                <Card>
                    <CardImage src={cartful_img} alt="Cartful Logo" />
                    <CardBlock title="Cartful" text="Website like Stumbleupon for fashion and one of my most prolific projects. $26K in equity free funding. Startup I worked on for two years.">
                        <CardButton title="Learn More" type="btn-primary" link="https://drive.google.com/file/d/0B8sLz00nfoNvU0dpSWR2ZjFRaU0/view?usp=sharing" />
                    </CardBlock>
                </Card>
                <Card>
                    <CardImage src={loco_img} alt="Loco Logo" />
                    <CardBlock title="Loco" text="An iOS app using Computer Vision and Facial Recognition to exchange contact information with someone by taking a selfie to help you remember them.">
                        <CardButton title="Learn More" type="btn-primary" link="https://www.go-loco.com/" />
                    </CardBlock>
                </Card>
                <Card>
                    <CardBlock title="Wikiscrape" text="Building a scraper and visualizer to measure and illustrate the connectivity of different Wikipedia pages">
                        <CardButton title="Learn More" type="btn-primary" link="https://github.com/adias9/wikiscrape" />
                    </CardBlock>
                </Card>
                <Card>
                    <CardBlock title="Echtchange" text="Echt meaning fair. Was a website to make buying, selling, and delivering different items between students at Princeton easier.">
                        <CardButton title="Learn More" type="btn-primary" link="https://github.com/adias9/echtchange" />
                    </CardBlock>
                </Card>
                <Card>
                    <CardBlock title="Ripple" text="Ripple is a web application that allows users to message experts in their field of interest in a group format, paralleling the amiable atmosphere of a reception after an event or talk.">
                        <CardButton title="Learn More" type="btn-primary" link="https://github.com/adias9/Ripple" />
                    </CardBlock>
                </Card>
            </CardDeck>
        </div>
    );
}

export default Projects;
