import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

function App() {

    const [backendMessage, setBackendMessage] = useState([]);

    useEffect(()=>{
        fetchBackendMessage()
    }, [])


    function fetchBackendMessage() {
        axios.get("/api/hello")
            .then(response => response.data)
            .then(data => setBackendMessage(data))
            .catch((error)  => console.log(error))
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>

                <p>The backend says:</p>

                <p>{backendMessage}</p>

            </header>
        </div>
    );
}

export default App;
