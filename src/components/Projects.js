import React from 'react'

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
            <img class="card-img-top img-fluid" src={src} alt={alt} />
        );
    }
}

class Card extends React.Component {
    render() {
        return (
            <div className="card">
                {this.props.children}
            </div>
        )
    }
}

class CardDeck extends React.Component {
    render() {
        return (
            <div className="card-deck">
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
                    <CardImage src="" alt="Cartful Logo" />
                    <CardBlock title="Cartful" text="A startup I worked on for two years. Stumbleupon for fashion and one of my most prolific projects.">
                        <CardButton title="Learn More" type="btn-primary" link="https://drive.google.com/file/d/0B8sLz00nfoNvU0dpSWR2ZjFRaU0/view?usp=sharing" />
                    </CardBlock>
                </Card>
                <Card>
                    <CardImage src="" alt="Presentation Logo" />
                    <CardBlock title="Design Thinking Class Project" text="Redesigning the sophomore experience to better inform and guide Princeton students throughout the rest of their Princeton experience.">
                        <CardButton title="See The Presentation" type="btn-primary" link="https://drive.google.com/file/d/0B7liA7zyqDeVTXhnaFBCR2l2Ym8/view?usp=sharing" />
                    </CardBlock>
                </Card>
                <Card>
                    <CardImage src="" alt="Cartful Logo" />
                    <CardBlock title="Cartful" text="A startup I worked on for two years. Stumbleupon for fashion and one of my most prolific projects.">
                        <CardButton title="Learn More" type="btn-primary" link="https://drive.google.com/file/d/0B8sLz00nfoNvU0dpSWR2ZjFRaU0/view?usp=sharing" />
                    </CardBlock>
                </Card>
                <Card>
                    <CardImage src="" alt="Cartful Logo" />
                    <CardBlock title="Cartful" text="A startup I worked on for two years. Stumbleupon for fashion and one of my most prolific projects.">
                        <CardButton title="Learn More" type="btn-primary" link="https://drive.google.com/file/d/0B8sLz00nfoNvU0dpSWR2ZjFRaU0/view?usp=sharing" />
                    </CardBlock>
                </Card>
            </CardDeck>
            <CardDeck>
                <Card>
                    <CardImage src="" alt="Cartful Logo" />
                    <CardBlock title="Cartful" text="A startup I worked on for two years. Stumbleupon for fashion and one of my most prolific projects.">
                        <CardButton title="Learn More" type="btn-primary" link="https://drive.google.com/file/d/0B8sLz00nfoNvU0dpSWR2ZjFRaU0/view?usp=sharing" />
                    </CardBlock>
                </Card>
                <Card>
                    <CardImage src="" alt="Cartful Logo" />
                    <CardBlock title="Cartful" text="A startup I worked on for two years. Stumbleupon for fashion and one of my most prolific projects.">
                        <CardButton title="Learn More" type="btn-primary" link="https://drive.google.com/file/d/0B8sLz00nfoNvU0dpSWR2ZjFRaU0/view?usp=sharing" />
                    </CardBlock>
                </Card>
                <Card>
                    <CardImage src="" alt="Cartful Logo" />
                    <CardBlock title="Cartful" text="A startup I worked on for two years. Stumbleupon for fashion and one of my most prolific projects.">
                        <CardButton title="Learn More" type="btn-primary" link="https://drive.google.com/file/d/0B8sLz00nfoNvU0dpSWR2ZjFRaU0/view?usp=sharing" />
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
