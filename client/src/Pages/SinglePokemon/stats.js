import React, { useContext, useEffect, useState } from "react";
import { Radar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Chart as chartjs } from "chart.js/auto";
import { getColorPallate } from "../../Components/PokemonCard/typeLogic";
import { CurrentPokemonContext } from "./context";

export const Stats = () => {
 const { currentPokemon, statsDetail } = useContext(CurrentPokemonContext);

 const primaryType = currentPokemon.types[0].type.name;
 const { backgroundColor, numberColor, nameColor } = getColorPallate(primaryType);
 const [radarConfigData, setRadarConfigData] = useState(null);
 const [data, setData] = useState(null);

 let defaultConfig = {
  //  {hp, attack, specialDefense, defense, speed, specialAttack}
  labels: Object.keys(statsDetail),
  datasets: [
   {
    label: `${currentPokemon.name} stats`,
    // Values of the stats
    data: data,
    fill: true,
    // Make the radar same hue as pokemon type
    backgroundColor: backgroundColor,
    borderColor: numberColor,
    pointBackgroundColor: nameColor,
    pointBorderColor: "#fff",
    pointHoverBackgroundColor: "#fff",
    pointHoverBorderColor: "rgb(255, 99, 132)",
   },
  ],
 };

 useEffect(() => {
  setRadarConfigData({ ...defaultConfig });
  setData(Object.values(statsDetail));
 }, [currentPokemon]);

 useEffect(() => {
  console.log("stats changed");
 }, [statsDetail, currentPokemon]);

 //Options for chart
 const options = {
  tootips: false,
  // Css for the Stats label
  plugins: {
   datalabels: {
    display: true,
    opacity: 1,
    color: "black",
    borderColor: numberColor,
    borderWidth: 3,
    borderRadius: 5,
    backgroundColor: "white",
    font: {
     weight: "bold",
     size: 12,
     lineHeight: 1 /* align v center */,
    },
    padding: {
     top: 5,
    },
   },
  },
  scales: {
   r: {
    //  Max stat a pokemon could have is 255
    max: 255,
    min: 0,
    ticks: {
     beginAtZero: true,
     //  How much we incremeant the radar
     stepSize: 100,
    },
   },
  },
 };

 return (
  <>
   {radarConfigData !== null && (
    <div style={{ width: "500px", margin: "auto" }}>
     {/* Plugin helps display data value */}
     <Radar data={radarConfigData} plugins={[ChartDataLabels]} options={options} />
    </div>
   )}
  </>
 );
};
