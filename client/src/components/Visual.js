import React, { useState } from 'react'
import './Visual.css'
import Polygon from 'react-polygon'

function Visual (props) {
    /* 213.988, 203.5144 */
    const [isDanceVisible, setDance] = useState(false)
    const [isPopularVisible, setPopular] = useState(false)
    const [isAcousticVisible, setAcoustic] = useState(false)
    const [isPositiveVisible, setPositive] = useState(false)
    const [isEnergyVisible, setEnergy] = useState(false)

    return (
        <div className="main">
            <div>
                <div className="featureLabel" onMouseOver={() => setDance(true)} onMouseOut={() => setDance(false)} style={{top: '38vh', left: '29vw'}}>Danceability</div>
                {isDanceVisible && <div id="danceLabel">{Math.round(props.danceability * 10000) / 100}</div>}

                <div className="featureLabel" onMouseOver={() => setPopular(true)} onMouseOut={() => setPopular(false)} style={{top: '38vh', left: '1vw'}}>Popularity</div>
                {isPopularVisible && <div id="popularLabel">{Math.round(props.popularity * 100) / 100}</div>}

                <div className="featureLabel" onMouseOver={() => setAcoustic(true)} onMouseOut={() => setAcoustic(false)} style={{top: '19vh', left: '13vw'}}>Acousticness</div>
                {isAcousticVisible && <div id="acousticLabel">{Math.round(props.acousticness * 10000) / 100}</div>}

                <div className="featureLabel" onMouseOver={() => setPositive(true)} onMouseOut={() => setPositive(false)} style={{top: '75vh', left: '4vw'}}>Positivity</div>
                {isPositiveVisible && <div id="positiveLabel">{Math.round(props.valence * 10000) / 100}</div>}

                <div className="featureLabel" onMouseOver={() => setEnergy(true)} onMouseOut={() => setEnergy(false)} style={{top: '75vh', left: '24vw'}}>Energy</div>
                {isEnergyVisible && <div id="energyLabel">{Math.round(props.energy * 10000) / 100}</div>}
            </div>
            <div className='container'>
                <Polygon n={5}
                    ratios={[props.acousticness, props.danceability, props.energy, props.valence, props.popularity / 100]}
                    size={450}
                    className='my-polygon-2'
                    renderPoint={(point) => {
                        return (
                            <circle fill="rgba(255, 255, 255, 0.8)" cx={point[0]} cy={point[1]} r={5} />
                        )
                }} />
                <Polygon n={5} 
                    size={450} 
                    className='my-polygon-3' 
                    renderPoint={(point) => {
                        return (
                            <svg>
                                <line x1={point[0]} y1={point[1]} x2="225" y2="225" stroke="rgba(255, 255, 255, 0.8)"/>
                            </svg>
                        )
                    }} />
          </div>
        </div>
    )
}

export default Visual;