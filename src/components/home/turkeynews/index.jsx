import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import LaunchIcon from "@mui/icons-material/Launch";

export default function TurNewsApi() {
  const [news, setNews] = useState([]);

  // const HandleChange = () => {
  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=tr&apiKey=272f2c2a832c4a39a01e0c1eb01f3bd3`
      )
      .then(response => {
        console.log(response);
        setNews(response.data.articles);
      });
  }, []);
  // };

  return (
    <div>
      <Grid container spacing={4}>
        {news.map((value, index) => {
          return (
            <Grid item key={index}>
              <Card sx={{ maxWidth: 345 }}>
                <div className="news-source-name">{value.source.name}</div>
                <CardMedia
                  component="img"
                  height="200"
                  image={value.urlToImage}
                  alt="Paella dish"
                />
                <CardContent>
                  <Link href={value.url} underline="hover">
                    Go to website
                    <LaunchIcon />
                  </Link>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    style={{ fontFamily: "montserrat", fontWeight: "600" }}
                  >
                    {value.content}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
