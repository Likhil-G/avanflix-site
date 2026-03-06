import React from "react";

function Hero() {
    const handleClick = () => {
        window.location.href = "https://avanflix.com";
    };

    return (
        <section id="home" style={styles.hero}>
            <h1>Grow Your Business With Avanflix</h1>

            <p>
                Avanflix helps brands grow through SEO, social media marketing
                and high converting websites.
            </p>

            <button style={styles.button} onClick={handleClick}>
                Start Your Growth
            </button>

        </section>
    )

}

const styles = {

    hero: {
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        background: "black",
        color: "white"
    },

    button: {
        marginTop: "20px",
        padding: "12px 25px",
        border: "none",
        borderRadius: "6px",
        background: "#870a01",
        color: "white",
        fontSize: "16px",
        cursor: "pointer"
    }

}

export default Hero;