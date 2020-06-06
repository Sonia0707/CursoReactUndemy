import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import { Grid, Col, Row } from "react-flexbox-grid";
import "./App.css";
import LocationList from "./components/LocationList";
import ForecastExtended from "./components/ForecastExtended";

const cities = [
  "Buenos Aires,ar",
  "Praga,cz",
  "Madrid,es",
  "Washington,us",
  "Lima,pe",
];
class App extends Component {
  constructor() {
    super();
    this.state = { city: null };
  }

  handSelectionLocation = (city) => {
    this.setState({ city });
    console.log(`handSelectionLocation ${city}`);
  };
  render() {
    //Destructuring:
    const { city } = this.state;
    return (
      <Grid>
        <Row>
          <AppBar position="sticky">
            <Toolbar>
              <Typography variant="h5" color="inherit">
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList
              cities={cities}
              onSelectedLocation={this.handSelectionLocation}
            />
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details">
                {/*Operador ternario para tener en cuenta el estado nulo:
                 Tenemos varias opciones (Todas indican si la propiedad es null, lanza el <h1>):
                opcion 1:
                {city === null ? ( 
                  <h1>No se ha selecionado ninguna Ciudad</h1>
                ) : (
                  <ForecastExtended city={city} />
                )}
                Opcion 2: 
                {!city ? (
                  <h1>No se ha selecionado ninguna Ciudad</h1>
                ) : (
                  <ForecastExtended city={city} />
                )}
                Opcion 3:
                 {city ? (
                  <ForecastExtended city={city} />
                ) : (
                  <h1>No se seleció ninguna Ciudad</h1>
                )}
                Ahora bien si lo que deseamos es que directamente no renderice nada hay 2 maneras:
                1º Opcion:
                    {city ? <ForecastExtended city={city} /> : null}
                2º Opcion: (la mas comun utlizamos lo && para decir que si hay algo en ForecastExtended
                  que renderice si no no: )
                */}
                {city && <ForecastExtended city={city} />}
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
