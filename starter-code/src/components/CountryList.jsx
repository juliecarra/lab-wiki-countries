import React, { Component } from "react";
import countries from "../countries.json";
import { Link } from "react-router-dom";

class CountryList extends Component {
  render() {
    return (
      <div class="container">
        {countries.map((country, i) => (
          <div key={i} className="row">
            <div
              className="col-5"
              style={{ maxHeight: "90vh", overflow: "scroll" }}
            >
              <div className="list-group">
                <Link to={country.cca3}>
                  <img
                    src={`https://www.countryflags.io/${country.cca2}/flat/64.png`}
                    alt=""
                    width="50px"
                  />
                  {country.name.common}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default CountryList;
