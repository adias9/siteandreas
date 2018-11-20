import 'aframe';
import 'aframe-particle-system-component';
import 'aframe-outline';
import 'aframe-animation-component';
import {Entity, Scene} from 'aframe-react';
import React from 'react';

class VRScene extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDesktop: false
        };

        this.updatePredicate = this.updatePredicate.bind(this);
    }

    componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
    }

    updatePredicate() {
        this.setState({ isDesktop: window.innerWidth > 768 });
    }

    render () {
        const isDesktop = this.state.isDesktop;
        return (
            <Scene vr-mode-ui={{enabled: false}}>
                <Entity position={(isDesktop ? {x: 0, y: 1.5, z: -2} : {x: 0, y: 2, z: -2})} rotation={{x: 0, y: 45, z: 45}}>
                    <Entity
                        geometry={{primitive: 'box'}}
                        material={{color: 'red'}}
                        animation__rotate={{property: 'rotation', dur: 5000, loop: true, to: '180 0 180', easing: 'linear'}}/>
                </Entity>
                <Entity particle-system={{preset: 'snow', type: '1', color: 'red', maxAge: '12'}}/>
                <Entity light={{type: 'point'}} position={{x: 1.5, y: 2, z: 0.5}}/>
                <Entity gltf-model={{src: 'virtualcity.gltf'}}/>
                <Entity text={{value: 'Hello, WebVR!'}}/>
            </Scene>
        );
    }
}

export default VRScene;
