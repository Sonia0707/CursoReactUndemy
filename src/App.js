import React, { Component } from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import { Grid, Col, Row } from "react-flexbox-grid";
import "./App.css";
import LocationList from "./components/LocationList";
import ForecastExtended from "./components/ForecastExtended";
import { setCity } from "./actions";

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

    this.props.setCity(city);
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
                {city && <ForecastExtended city={city} />}
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

const mapDispatchTpProps = (dispatch) => ({
  //Nombre de función setCity (Podría ser cualquier nombre no tiene que ser el mismo que el ActionCreator):
  setCity: (value) => dispatch(setCity(value)), //ActionCreator = setCity
});

const AppConnected = connect(null, mapDispatchTpProps)(App);

export default AppConnected;
