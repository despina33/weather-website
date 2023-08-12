const request = require("request")

const forecast = (latitude, longitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=44cdbe74cd25610c6201d18741414957&query=" + encodeURIComponent(latitude) + "," + encodeURIComponent(longitude) + "&units=m"
    request({url, json: true}, (error, { body }) => {
      if (error) {
        callback("Unable to connect to forecast services!", undefined)
      } else if (body.error){
        callback("Unable to find location. Try another search.", undefined)
      } else {
        callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degress out. It feels like " + body.current.feelslike + " degress out.")
      }
    })
  }


module.exports = forecast