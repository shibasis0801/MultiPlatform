import React from "react";
import "./desktop.css"
import Header from "./header/Header";
import Main from "./main/Main";

type ContainerState = {
}

function getTitle() {
    const shibasis = "Shibasis Patnaik";
    const overlord = "Overlord's Lab"
    return window.location.pathname.startsWith("/lab") ? overlord : shibasis;
}

function getTheme() {
    return window.location.pathname.startsWith("/lab") ? "dark-theme" : "light-theme";
}

export default class Desktop extends React.Component<{}, ContainerState> {
    render() {
        const title = getTitle();
        const theme = getTheme();
        return (
            <div id="container" className={theme}>
                <Header title={title}/>
                <Main>
                    {this.props.children}
                </Main>
                <footer>somethings</footer>
            </div>
        );
    }
}
