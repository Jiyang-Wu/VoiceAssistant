import { Divider, LinearProgress } from "@material-ui/core";
import React, { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
const alanKey =
    "fe0732299bb6bf4d6d0f850c12d22f232e956eca572e1d8b807a3e2338fdd0dc/stage";
const App = () => {
    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles }) => {
                if (command === "newHeadlines") {
                    console.log(articles);
                }
            },
        });
    }, []);
    return (
        <div>
            <h1>Alan AI News</h1>
        </div>
    );
};

export default App;
