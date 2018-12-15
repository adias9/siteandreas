import React from 'react'
import VRScene from './VRScene.js'
import '../css/vrscene.scss'
import pdf from '../Andreas_Tech_Resume.pdf'

const Home = () => (
    <div className="">
        <div className="jumbotron">
            <h1 className="jumbotron-header">andreas dias</h1>
            <p className="jumbotron-body">Technologist, <span role="img" aria-label="soccer_ball">⚽ </span> fan, and design enthusiast. <br /> Constantly working on creating the future.</p>
            <div className="links-container">
                <p><a href="mailto:andreasdias9@gmail.com" target="_blank" rel='noopener noreferrer'>email</a></p>
                <p><a href="https://github.com/adias9" target="_blank" rel='noopener noreferrer'>github</a></p>
                <p><a href="https://linkedin.com/in/andreas-dias/" target="_blank" rel='noopener noreferrer'>linkedin</a></p>
                <p><a href={pdf}>resume</a></p>
            </div>
        </div>
        <VRScene/>
    </div>
)

export default Home
