import { Divider, LinearProgress } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import Cards from "./components/cards/Cards";

const alanKey =
    "fe0732299bb6bf4d6d0f850c12d22f232e956eca572e1d8b807a3e2338fdd0dc/stage";
const App = () => {
    const [newsArticle, setNewsArticle] = useState([]);
    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles }) => {
                if (command === "newHeadlines") {
                    setNewsArticle(articles);
                }
            },
        });
    }, []);
    return (
        <div>
            <h1>Alan AI News</h1>
            <Cards articles={newsArticle}></Cards>
        </div>
    );
};

export default App;
