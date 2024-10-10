import React from 'react'
import DGroupContainer from '../containers/DGroupContainer';

const DGroup = () => {
    return (
        <section className="page section">
            <div className="container">
                <h1 className="title dgroup-page is-2 has-text-centered">DGroups Information</h1>
                
                {/* DGroupContainer component to display DGroups information */}
                <DGroupContainer />
            </div>
        </section>
    )
}

export default DGroup