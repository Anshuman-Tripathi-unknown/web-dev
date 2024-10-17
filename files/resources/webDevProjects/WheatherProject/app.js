const express = require("express");
const app = express();
const https = require("https");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(3000, function () {
  console.log("server is running at 3000");
});
app.get("/",function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.post("/",function (req, res) {
    const url =
      "https://dataservice.accuweather.com/locations/v1/cities/search?apikey=F1i935Q97xEpOYlliQwlGcSbV3NpRFFf&q=" +
      req.body.city +
      "#";
    https.get(url, function(respon) {
      respon.on("data", function(data) {
        const lo = JSON.parse(data);
        const ul = lo[0].Key;
        const con =
          "https://dataservice.accuweather.com/currentconditions/v1/" +
          ul +
          "?apikey=F1i935Q97xEpOYlliQwlGcSbV3NpRFFf";
          
        https.get(con, function(response) {
          response.on("data", function (data) {
            const got = JSON.parse(data);
            const temp = got[0].Temperature.Metric.Value;
            const weather = got[0].WeatherText;
            const icon = got[0].WeatherIcon;
           res.setHeader("Content-type","text/html");
            res.write("current weather is " + weather);
            res.write(
              "<h1>current weather in prayagraj is " +
                temp +
                "degree celcius</h1>"
            );
            if(icon<"10"){
              res.write(
              "<img src='https://developer.accuweather.com/sites/default/files/" +
                "0"+icon +
                "-s.png'>"
            );
            }
            else {
              res.write(
                "<img src='https://developer.accuweather.com/sites/default/files/" +
                icon +
                  "-s.png'>"
              );
            }
            res.send();
          });
        });
      });
    });
  });

