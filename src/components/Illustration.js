import React from 'react'
import classes from '../styles/Illustration.module.css'

const Illustration = ({ illustrationSvg }) => {
    return (
        <div class={classes.illustration}>
            <img src={illustrationSvg} alt="Signup" />
        </div>
    )
}

export default Illustration