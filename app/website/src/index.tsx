import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './ui/App';

// const App = () => (<div>Hello World</div>)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Please write a service worker
/*
// RADAR CHART PLOX
// Levels -> (one indexed array)
const skillLevels = [ "", "understand", "build simple", "build proper", "thrive", "contribute", "mentor" ]
const Details = [
    {
        header: "Developer",
        content: [
            { skill: "Android", level: 5 },
            { skill: "Web", level: 4 },
            { skill: "System Design", level: 3 },
            { skill: "Backend", level: 2 },
            { skill: "Algorithms", level: 2 },
            { skill: "Unity", level: 1 }
        ]
    },
    {
        header: "Data Science",
        content: [
            { skill: "Deep Learning", level: 3 },
            { skill: "Machine Learning", level: 2 },
            { skill: "Mathematical Programming", level: 3},
            { skill: "Linear Algebra", level: 2 },
            { skill: "Calculus and Analysis", level: 1  },
            { skill: "Probability and Statistics", level: 1 }
        ]
    },
    {
        header: "Languages",
        content: [
            { skill: "Kotlin", level: 4 },
            { skill: "TypeScript", level: 3 },
            { skill: "C++", level: 3 },
            { skill: "Java", level: 3 },
            { skill: "JavaScript", level: 2 },
            { skill: "Python", level: 2 },
            { skill: "C#", level: 1 }
        ]
    }
]

// Move Color information first to KotlinMultiplatform
export type Theme = {
    primaryLight: string;
    primary: string;
    primaryDark: string;
    onPrimaryLight: string;
    onPrimary: string;
    baseDark: string;
    base: string;
    baseLight: string;
    accentColor: string;
    onBase: string;
    onBaseDark: string;
    separator: string;
    shadow: string;
}


export const LightTheme: Theme = {
    primaryLight: "#009688",
    primary: "#00796B",
    primaryDark: "#00695C",
    onPrimaryLight: "whitesmoke",
    onPrimary: "white",
    baseDark: "white",
    base: "whitesmoke",
    baseLight: "#ccc",
    accentColor: "#72a3c0ff",
    onBase: "#212121",
    onBaseDark: "#757575",
    separator: "#BDBDBD",
    shadow: "rgba(0, 0, 0, 0.14)"
}

export const DarkTheme: Theme = {
    primaryLight: "#520050",
    primary: "#520050",
    primaryDark: "#3c273fff",
    onPrimaryLight: "whitesmoke",
    onPrimary: "white",
    baseDark: "#212121",
    base: "#282828",
    baseLight: "#404040",
    accentColor: "#ec98beff",
    onBase: "white",
    onBaseDark: "whitesmoke",
    separator: "#BDBDBD",
    shadow: "rgba(192, 192, 192, 0.14)"
}

 */