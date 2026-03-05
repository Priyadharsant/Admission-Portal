import React, { useState } from "react";
import './Home.css'
function Home() {

    const [data, setData] = useState("");

    fetch("http://localhost:5000")
        .then(response => response.json())
        .then(data => {
            setData(data.message);
        })
        .catch(error => {
            console.error("Error:", error);
        });
    return <h1>{data}</h1>
}


export default Home;