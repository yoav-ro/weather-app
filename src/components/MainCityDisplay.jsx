import { Grid, Typography } from "@mui/material";
import React from "react";
import DayForecast from "./dayForecast";
import CityHeader from "./cityHeader";

function CityDisplay({ weatherData, cityData }) {
    const dailyForeCasts = weatherData["DailyForecasts"];
    const weatherText = weatherData["Headline"]["Text"];

    return (
        <Grid container spacing={2} >
            <Grid item container justifyContent="center">
                <CityHeader cityData={cityData} />
            </Grid>
            <Grid item container justifyContent="center">
               <Typography variant="h4">
                   {weatherText}
               </Typography> 
            </Grid>
            <Grid item justifyContent="center" container spacing={5}>
                {dailyForeCasts.map((day, key) => {
                    return (
                        <Grid key={key} item>
                            <DayForecast dayForecastData={day} />
                        </Grid>
                    )
                })}
            </Grid>
        </Grid>
    )
}

export default CityDisplay;