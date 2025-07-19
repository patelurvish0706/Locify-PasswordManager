import React from 'react'
import LogoutButton from './LogoutButton'

// const siteNames = ['Instagram', 'Facebook', 'WhatsApp', 'Twitter', 'YouTube', 'Snapchat', 'LinkedIn'];

function Home() {
    return (
        <>
            {/* <div className="grid-container">
                {siteNames.map((site, index) => (
                    <div className="site-box" key={index}>
                        <h3>{site}</h3>
                        <button>View Detail</button>
                    </div>
                ))}
            </div> */}

            {/* <LogoutButton /> */}

            <div className="grid-container">
                <div className="site-box" >
                    <h3>Instagram</h3>
                    <button>View Detail</button>
                </div>

                <div className="site-box" >
                    <h3>Facebook</h3>
                    <button>View Detail</button>
                </div>

                <div className="site-box" >
                    <h3>WhatsApp</h3>
                    <button>View Detail</button>
                </div>

                <div className="site-box" >
                    <h3>Twitter</h3>
                    <button>View Detail</button>
                </div>

                <div className="site-box" >
                    <h3>YouTube</h3>
                    <button>View Detail</button>
                </div>

                <div className="site-box" >
                    <h3>Snapchat</h3>
                    <button>View Detail</button>
                </div>

                <div className="site-box" >
                    <h3>LinkedIn</h3>
                    <button>View Detail</button>
                </div>
            </div>
        </>
    )
}

export default Home
