import React, { Component } from "react";
import countries from "../countries.json";
import { Link } from "react-router-dom";

class CountryDetail extends Component {
  render() {
    let cca3 = this.props.match.params.cca3;

    function getCountry(cca3) {
      return countries.find(c => c.cca3 === cca3);
    }

    let country = getCountry(cca3);

    if (!country) {
      return (
        <div>Oops, there is no country {this.props.match.params.cca3}</div>
      );
    }

    return (
      <div>
        <div className="col-7">
          <h1>{country.name.common}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: "30%" }}>Capital</td>
                <td>{country.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {country.area}km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {country.borders.map(cca3 => (
                      <li key={cca3}>
                        <Link to={"/" + cca3}>
                          {getCountry(cca3).name.common}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default CountryDetail;
