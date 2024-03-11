import React, { useRef } from 'react'

const About = () => {
    const screenRef = useRef()
    const styles = {
        width: "100px",
        height: "100px",
        border: "1px solid black"
    }

    return (
        <div>
            <button onClick={() => {
                console.log(screenRef.current)
                screenRef.current.style.background="red"
            }}>change background</button>
            <div ref={screenRef} style={styles} ></div>
        </div>
    )
}

export default About