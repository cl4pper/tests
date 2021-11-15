class Provider {
    static getWeather(city) {
        return Promise.resolve(`The weather of ${city} is Cloudy`)
    };

    static getLocalCurrency(city) {
        return Promise.resolve(`The local currency of ${city} is GBP`)
    };

    static findCity(long, lat) {
        return Promise.resolve(`London`)
    };
}

let city;

// 1.
const longtude = 0.1278;
const latitude = 51.5074;

Provider.findCity(latitude,longtude).then(city => {
    // 1.
    console.log('City: ', city);

    // 2.
    Provider.getWeather(city).then(weather => console.log(weather));
    
    // 3.
    Provider.getLocalCurrency(city).then(currency => console.log(currency));
});