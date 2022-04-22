import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Globe from "../../images/globe.png";
import NewsImage from "../../images/news.png";

export default function Footer() {
  return (
    <Grid id="footer" container spacing={2}>
      <Grid item>
        <Card id="footer-card" sx={{ minWidth: 275 }}>
          <CardContent style={{ textAlign: "center" }}>
            <Typography id="footer-card-heading">World Latest News</Typography>
            <img className="footer-globe" src={Globe} alt="globe" />
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card id="footer-state" sx={{ minWidth: 275 }}>
          <CardContent style={{ textAlign: "center" }}>
            <a className="navbar-menu-link" href="/ind">
              India
            </a>
            <a className="navbar-menu-link" href="/aus">
              Australia
            </a>
            <a className="navbar-menu-link" href="/us">
              United State
            </a>
            <a className="navbar-menu-link" href="/ru">
              Russia
            </a>
            <a className="navbar-menu-link" href="/ua">
              Ukraine
            </a>
            <a className="navbar-menu-link" href="/ca">
              Canada
            </a>
            <a className="navbar-menu-link" href="/cn">
              China
            </a>
            <a className="navbar-menu-link" href="/jp">
              Japan
            </a>
            <a className="navbar-menu-link" href="/nz">
              NewZealand
            </a>
            <a className="navbar-menu-link" href="/gb">
              United Kingdom
            </a>
            <a className="navbar-menu-link" href="/tr">
              Turnkey
            </a>
            <a className="navbar-menu-link" href="/za">
              South Africa
            </a>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card id="footer-state" sx={{ minWidth: 275 }}>
          <CardContent style={{ textAlign: "center" }}>
            <img src={NewsImage} alt="news-imge" />
          </CardContent>
        </Card>
      </Grid>
      {/* <Grid item>
        <Card id="footer-state" sx={{ minWidth: 275 }}>
          <CardContent style={{ textAlign: "center" }}></CardContent>
        </Card>
      </Grid> */}
    </Grid>
  );
}
