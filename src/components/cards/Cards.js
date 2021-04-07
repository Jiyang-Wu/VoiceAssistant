import React from "react";
import Card from "../card/NewsCard";
import { Grid, Grow, Typography } from "@material-ui/core";
import useStyles from "./style";
const Cards = ({ articles }) => {
    const classes = useStyles();

    return (
        <Grow in>
            <Grid
                className={classes.container}
                container
                alignItems="stretch"
                spacing={3}
            >
                {articles.map((article, i) => {
                    return (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            lg={3}
                            md={4}
                            style={{ display: "flex" }}
                        >
                            <Card article={article} i={i}></Card>;
                        </Grid>
                    );
                })}
            </Grid>
        </Grow>
    );
};

export default Cards;
