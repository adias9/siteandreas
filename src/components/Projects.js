import React from 'react'
import clever_img from '../images/clever_logo.png';
import loco_img from '../images/loco_logo.png';
import cartful_img from '../images/cartful_logo.jpg';
import sophthrive_img from '../images/sophthrive.png';

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
                    <CardImage src={sophthrive_img} alt="Presentation Logo" />
                    <CardBlock title="Design Consulting Project: VP of Princeton" text="Goal: Reduce Stigma at Princeton. Redesigned the sophomore experience to better inform and guide Princeton students throughout the rest of their Princeton experience.">
                        <CardButton title="See The Presentation" type="btn-primary" link="https://drive.google.com/file/d/0B7liA7zyqDeVTXhnaFBCR2l2Ym8/view?usp=sharing" />
                    </CardBlock>
                </Card>
                <Card>
                    <CardImage src="" alt="Wikiscrape Logo" />
                    <CardBlock title="Wikiscrape" text="Building a scraper and visualizer to measure and illustrate the connectivity of different Wikipedia pages">
                        <CardButton title="Learn More" type="btn-primary" link="https://github.com/adias9/wikiscrape" />
                    </CardBlock>
                </Card>
                <Card>
                    <CardImage src="" alt="Prospect12 Logo" />
                    <CardBlock title="Prospect12" text="An app to meet people and find your friends when you're out on the town @ Princeton.">
                        <CardButton title="Learn More" type="btn-primary" link="" />
                    </CardBlock>
                </Card>
                <Card>
                    <CardImage src="" alt="Echtchange Logo" />
                    <CardBlock title="Echtchange" text="Echt meaning fair. Was a website to make buying, selling, and delivering different items between students at Princeton easier.">
                        <CardButton title="Learn More" type="btn-primary" link="" />
                    </CardBlock>
                </Card>
                <Card>
                    <CardImage src="" alt="Cartful Logo" />
                    <CardBlock title="Cartful" text="A startup I worked on for two years. Stumbleupon for fashion and one of my most prolific projects.">
                        <CardButton title="Learn More" type="btn-primary" link="https://drive.google.com/file/d/0B8sLz00nfoNvU0dpSWR2ZjFRaU0/view?usp=sharing" />
                    </CardBlock>
                </Card>
            </CardDeck>
        </div>
    );
}

export default Projects;
