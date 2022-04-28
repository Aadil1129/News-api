import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import Grid from "@mui/material/Grid";
import { Link } from "@mui/material";
import India from "../../images/india.jpeg";
import Australia from "../../images/australia.png";
import America from "../../images/us.jpeg";
import Canada from "../../images/canada.jpeg";
import China from "../../images/china.jpeg";
import Japan from "../../images/japan.jpeg";
import NewZea from "../../images/newzea.png";
import Russia from "../../images/russia.jpeg";
import Uk from "../../images/uk.jpeg";
import Ukraine from "../../images/ukraine.png";
import Turkey from "../../images/turkey.jpeg";
import South from "../../images/south.png";
import NewsAppBar from "../header";

export default function NewsApi() {
  return (
    <div className="home-main-page">
      <NewsAppBar />
      <Grid
        container
        spacing={4}
        style={{
          padding: "6rem 2rem 4rem 2rem",
        }}
      >
        <Grid data-aos="fade-up" item>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  IN
                </Avatar>
              }
              title="INDIA"
            />
            <CardMedia
              component="img"
              height="194"
              image={India}
              alt="Paella dish"
            />
            <CardContent>
              <Link href="/ind">
                <Button id="us-latest-button" variant="contained" style={{}}>
                  Latest News of India
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
        <Grid data-aos="fade-up" item>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  AU
                </Avatar>
              }
              title="AUSTRALIA"
            />
            <CardMedia
              component="img"
              height="194"
              image={Australia}
              alt="Paella dish"
            />
            <CardContent>
              <Link href="/aus">
                <Button id="us-latest-button" variant="contained" style={{}}>
                  Latest News of Australia
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
        <Grid data-aos="fade-up" item>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  US
                </Avatar>
              }
              title="AMERICA"
            />
            <CardMedia
              component="img"
              height="194"
              image={America}
              alt="Paella dish"
            />
            <CardContent>
              <Link href="/us">
                <Button id="us-latest-button" variant="contained" style={{}}>
                  Latest News Of United State
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
        <Grid data-aos="fade-up" item>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  RU
                </Avatar>
              }
              title="RUSSIA"
            />
            <CardMedia
              component="img"
              height="194"
              image={Russia}
              alt="Paella dish"
            />
            <CardContent>
              <Link href="/ru">
                <Button id="us-latest-button" variant="contained" style={{}}>
                  Latest News Of Russia
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
        <Grid data-aos="fade-up" item>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  UA
                </Avatar>
              }
              title="UKRAINE"
            />
            <CardMedia
              component="img"
              height="194"
              image={Ukraine}
              alt="Paella dish"
            />
            <CardContent>
              <Link href="/ua">
                <Button id="us-latest-button" variant="contained" style={{}}>
                  Latest News Of Ukraine
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
        <Grid data-aos="fade-up" item>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  CA
                </Avatar>
              }
              title="CANADA"
            />
            <CardMedia
              component="img"
              height="194"
              image={Canada}
              alt="Paella dish"
            />
            <CardContent>
              <Link href="/ca">
                <Button id="us-latest-button" variant="contained" style={{}}>
                  Latest News Of Canada
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
        <Grid data-aos="fade-up" item>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  CN
                </Avatar>
              }
              title="CHINA"
            />
            <CardMedia
              component="img"
              height="194"
              image={China}
              alt="Paella dish"
            />
            <CardContent>
              <Link href="/cn">
                <Button id="us-latest-button" variant="contained" style={{}}>
                  Latest News Of China
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
        <Grid data-aos="fade-up" item>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  JP
                </Avatar>
              }
              title="JAPAN"
            />
            <CardMedia
              component="img"
              height="194"
              image={Japan}
              alt="Paella dish"
            />
            <CardContent>
              <Link href="/jp">
                <Button id="us-latest-button" variant="contained" style={{}}>
                  Latest News Of Japan
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
        <Grid data-aos="fade-up" item>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  NZ
                </Avatar>
              }
              title="NEWZEALAND"
            />
            <CardMedia
              component="img"
              height="194"
              image={NewZea}
              alt="Paella dish"
            />
            <CardContent>
              <Link href="/nz">
                <Button id="us-latest-button" variant="contained" style={{}}>
                  Latest News Of NewZealand
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
        <Grid data-aos="fade-up" item>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  UK
                </Avatar>
              }
              title="UNITED KINGDOM"
            />
            <CardMedia
              component="img"
              height="194"
              image={Uk}
              alt="Paella dish"
            />
            <CardContent>
              <Link href="/gb">
                <Button id="us-latest-button" variant="contained" style={{}}>
                  Latest News Of United Kingdom
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
        <Grid data-aos="fade-up" item>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  TR
                </Avatar>
              }
              title="TURKEY"
            />
            <CardMedia
              component="img"
              height="194"
              image={Turkey}
              alt="Paella dish"
            />
            <CardContent>
              <Link href="/tr">
                <Button id="us-latest-button" variant="contained" style={{}}>
                  Latest News Of Turkey
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
        <Grid item data-aos="fade-up">
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  SA
                </Avatar>
              }
              title="SOUTH AFRICA"
            />
            <CardMedia
              component="img"
              height="194"
              image={South}
              alt="Paella dish"
            />
            <CardContent>
              <Link href="/za">
                <Button id="us-latest-button" variant="contained" style={{}}>
                  Latest News Of South Africa
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
