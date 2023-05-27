import React from 'react'
import "./style.scss"
const RecentProjects = () => {
    return (
        <div className='meandyou'>
            <div className="header">
                <h1>Recent Projects</h1>
                <p>With tools to make every part of your process more human and a support team <br /> excited to help you, getting started with us never been easier.</p>
            </div>
            <div className="projects">
                <div className="pr">
                    <img src="./ag.svg" alt="" />
                    <div className="asa">
                        <div className="part1">
                            <h1>Winery Dry Creek Building</h1>
                            <p>Art Modern</p>
                        </div>
                        <div className="part2">
                            <img src="./circle.svg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="pr">
                    <img src="./taxta.svg" alt="" />
                    <div className="asa">
                        <div className="part1">
                            <h1>Creative Workplace Design</h1>
                            <p>Minimalist</p>
                        </div>
                        <div className="part2">
                            <img src="./circle.svg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="pr">
                    <img src="./gul.svg" alt="" />
                    <div className="asa">
                        <div className="part1">
                            <h1>Bedroom Interior Pot Work</h1>
                            <p>Modern</p>
                        </div>
                        <div className="part2">
                            <img src="./circle.svg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="pr">
                    <img src="./kasib.svg" alt="" />
                    <div className="asa">
                        <div className="part1">
                            <h1>Light Ambience Sepia Design</h1>
                            <p>Scandinavian</p>
                        </div>
                        <div className="part2">
                            <img src="./circle.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecentProjects