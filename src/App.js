import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
//Logo
import covidLogo from "./covid-19.svg";
//Select
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
//Api methods
import { fetchCountries } from "./Api";
import { fetchDailyData } from "./Api";
//Components
import areaChart from "./components/areaChart";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: "50px auto",
    width: "50%",
  },
}));

const App = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("turkey");

  /*
    useEffect'in içindeki fonksiyon sadece 1 kere çağılır.
    */
  useEffect(() => {
    const fetchCountriesData = async () => {
      const countries = await fetchCountries();
      setCountries(countries);
    };

    fetchCountriesData();
  }, []);

  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid container>
          <img
            src={covidLogo}
            alt="Covid19 Logo"
            style={{
              height: 100,
              width: 100,
              marginTop: 20,
            }}
          />
          <FormControl className={classes.formControl}>
            <Select
              value={country}
              onChange={(event) => setCountry(event.target.value)}
            >
              {
                countries.map(country => (
                  <MenuItem value={country.Slug}>{country.Country}</MenuItem>
                ))
              }
            </Select>
          </FormControl>
          {/* Chart */}
          <Grid item xs={12}>
            
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default App;
