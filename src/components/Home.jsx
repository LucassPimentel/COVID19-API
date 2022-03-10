import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  faVirusCovid,
  faVirusCovidSlash,
  faCross,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Select from "./SELECT/Select";
import {
  DivContainer,
  DivContainerCountry,
  DivContainerCountries,
  DivContainerSelect,
  TitleStyle,
  DivContainerTitle,
  DivContainerInfos,
} from "./HomeStyle";

const Home = () => {
  const [countries, setCountries] = useState([]); // MOSTRA TODOS OS PAISES NO SELECT
  const [selectCountry, setSelectCountry] = useState(["World"]); // MOSTRA O PAIS QUE FOI SELECIONADO
  const [searchCountries, setSearchCountries] = useState([]); // PROCURA PELO PAIS SELECIONADO

  useEffect(() => {
    axios
      .get(`https://coronavirus-19-api.herokuapp.com/countries`)
      .then((response) => {
        setCountries(response.data);
      });
  }, []);

  const handleSelect = (e) => {
    e.preventDefault();
    setSelectCountry(e.target.value);
  };

  useEffect(() => {
    axios
      .get(
        `https://coronavirus-19-api.herokuapp.com/countries/${selectCountry}`
      )
      .then((response) => {
        setSearchCountries(response.data);
      });
  }, [selectCountry]);

  return (
    <>
      <DivContainer>
        <DivContainerSelect>
          <DivContainerTitle>
            <DivContainerInfos>
              <span>
                Observador da{" "}
                <a
                  href="https://www.who.int/health-topics/coronavirus#tab=tab_1"
                  target="blank"
                >
                  COVID-19
                </a>
              </span>
            </DivContainerInfos>
            <label htmlFor="country-name">
              <TitleStyle>Nome da Região:</TitleStyle>
            </label>
            <DivContainerInfos>
              <span>
                <a
                  href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/covid-19-vaccines/advice"
                  target="blank"
                >
                  Saiba mais sobre a vacina
                </a>
              </span>
            </DivContainerInfos>
          </DivContainerTitle>
          <Select
            name={"country-name"}
            id="country-name"
            onChange={handleSelect}
            options={countries}
          ></Select>
        </DivContainerSelect>
        {searchCountries.length !== 0 && (
          <DivContainerCountries>
            <DivContainerCountry>
              <h2>{searchCountries.country} </h2>
            </DivContainerCountry>
            <DivContainerCountry>
              <span>Total de Casos:</span>{" "}
              <h2>
                {searchCountries.cases.toLocaleString("pt-BR")}{" "}
                <FontAwesomeIcon icon={faVirusCovid} />{" "}
              </h2>
              <span>Casos Recuperados:</span>{" "}
              <h2>
                {searchCountries.recovered.toLocaleString("pt-BR")}{" "}
                <FontAwesomeIcon icon={faVirusCovidSlash} />{" "}
              </h2>
            </DivContainerCountry>
            <DivContainerCountry>
              <span>Total de Óbitos:</span>{" "}
              <h2>
                {searchCountries.deaths.toLocaleString("pt-BR")}{" "}
                <FontAwesomeIcon icon={faCross} />{" "}
              </h2>
            </DivContainerCountry>
            <DivContainerCountry>
              <span>Casos hoje: </span>
              <h2>
                {searchCountries.todayCases.toLocaleString("pt-BR")}{" "}
                <FontAwesomeIcon icon={faVirusCovid} />{" "}
              </h2>
              <span>Óbitos hoje:</span>{" "}
              <h2>
                {searchCountries.todayDeaths.toLocaleString("pt-BR")}{" "}
                <FontAwesomeIcon icon={faCross} />{" "}
              </h2>
            </DivContainerCountry>
          </DivContainerCountries>
        )}
      </DivContainer>
    </>
  );
};
export default Home;
