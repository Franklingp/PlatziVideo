import React from 'react'

//Components
import Header from "../components/Header";
import Search from "../components/Search";

//styles
import "../assets/styles/App.scss";

export default function App() {
    return (
        <div id="App">
            <Header/>
            <Search/>
        </div>
    )
}
