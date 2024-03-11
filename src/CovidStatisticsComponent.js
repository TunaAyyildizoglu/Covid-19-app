import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchCovidProvinceStatistics } from "./actions";
import { Card, CardBody, CardHeader } from "react-bootstrap";
import { GiDeathSkull } from "react-icons/gi";
import { MdTimeline } from "react-icons/md";
import { IoHomeSharp,IoWarning  } from "react-icons/io5";
import { BsCheckCircleFill, BsClipboard2PlusFill } from "react-icons/bs";
import flagName from "./flags.json";
import "./CovidStatisticsComponent.css";

const CovidStatisticsComponent = ({
  provinceStatistics,
  loading,
  error,
  fetchCovidProvinceStatistics,
}) => {
  const [regionName, setRegionName] = useState("");
  const [countryName, setCountryName] = useState("");

  useEffect(() => {
    const urlSearchString = window.location.search;
    const params = new URLSearchParams(urlSearchString);
    const countryShrt = params.get("country");
    const regionFull = params.get("region");

    fetchCovidProvinceStatistics(countryShrt);
    setRegionName(regionFull);
    setCountryName(countryShrt);
  }, [fetchCovidProvinceStatistics]);

  if (loading) {
    return (
      <div className="progress mt-5">
        <h3 className="mb-4">Loading...</h3>
        <div
          className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
          role="progressbar"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: "75%" }}
        ></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-5">
        <p className="text-danger d-flex align-items-center">An error has occurred <IoWarning /></p>
        <p>{error}!</p>
        <p>Please refresh the page or try again later.</p>
      </div>
    );
  }

  if (!provinceStatistics || provinceStatistics.length === 0) {
    return <p>No province statistics available</p>;
  }

  const data = JSON.parse(provinceStatistics).data;
  const flagUrl = flagName.find((f) => f.name === regionName)?.image;

  const reloadIndexPage = () => {
    if (window.location.pathname === "/") {
      window.location.reload();
    } else {
      window.location.href = "/"; // Anasayfaya yönlendirme
    }
  };
  return (
    <div className="container">
      <Card className="statistics-head mt-3">
        <CardBody className="d-flex justify-content-between align-items-center">
          <h2 className="m-0">COVID-19 {regionName} Statistics</h2>
          <span onClick={reloadIndexPage} className="home-icon">
            <IoHomeSharp />
          </span>
        </CardBody>
      </Card>

      <div className="row">
        <div className="col-xl-6 col-md-12">
          <ul className="list-group mt-5">
            <li className="list-group-item border-0 p-0">
              <Card className="w-100">
                <CardHeader>
                  <div className="d-flex justify-content-between card-section">
                    <span>
                      {regionName}{" "}
                      {flagUrl && (
                        <img
                          src={flagUrl}
                          style={{
                            display: "inline-block",
                            width: "1.5em",
                            height: "1.5em",
                          }}
                        />
                      )}{" "}
                    </span>
                    <span>
                      {" "}
                      Last Update:{" "}
                      <span className="fw-400">{data.last_update}</span>
                    </span>
                  </div>
                </CardHeader>
                <CardBody>
                  <ul className="list-group">
                    <li className="list-group-item confirm">
                      <MdTimeline />{" "}
                      <span className="fw-700">Confirmed Cases:</span>{" "}
                      {data.confirmed}
                    </li>
                    <li className="list-group-item deaths">
                      {" "}
                      <GiDeathSkull /> <span>Deaths:</span> {data.deaths}
                    </li>
                    <li className="list-group-item active-person">
                      <BsClipboard2PlusFill /> <span>Active:</span>{" "}
                      {data.active}
                    </li>
                    <li className="list-group-item recovered">
                      <BsCheckCircleFill /> <span>Recovered:</span>{" "}
                      {data.recovered}
                    </li>
                  </ul>
                </CardBody>
              </Card>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  provinceStatistics: state.statistics.provinceStatistics,
  loading: state.statistics.loading,
  error: state.statistics.error,
});

const mapDispatchToProps = {
  fetchCovidProvinceStatistics,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CovidStatisticsComponent);
