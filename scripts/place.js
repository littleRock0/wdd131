/***************************************************************************
 * 
 **************************************************************************/
const year = document.querySelector("#year");
const author = document.querySelector("#author");
const lastModifiedElement = document.querySelector("#lastModified");
const tempurature = document.querySelector("#tempurature");
const conditions = document.querySelector("#conditions");
const wind = document.querySelector("#wind");
const chill = document.querySelector("#chill");
const today = new Date();

let lastModifiedDate = new Date(document.lastModified);

year.innerHTML = ` <span class="highlight"> ${today.getFullYear()}</span>`;

const authorMeta = document.querySelector('meta[name="author"]');

if (authorMeta) {
    author.innerHTML = authorMeta.content;
}

lastModifiedElement.innerHTML = `Last updated: ` +
    `${lastModifiedDate.toLocaleString()}`;

temp = 8;
condition = "cloudy";
windSpeed = 15;

function computeWindChillCelsius(t, v) {
    return (
        13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16)
    ).toFixed(2);
}

tempurature.innerHTML = `<span class="label" data-label="Temperature:"></span> ${temp}&deg;C`;
conditions.innerHTML = `<span class="label" data-label="Conditions:"></span> ${condition}`;
wind.innerHTML = `<span class="label" data-label="Wind:"></span> ${windSpeed} Km/h`;

if (temp <= 10 && windSpeed > 4.8) {
    const windChill = computeWindChillCelsius(temp, windSpeed);
    chill.innerHTML = `<span class="label" data-label="Wind Chill:"></span> ${windChill} &deg;C`;
} else {
    chill.innerHTML = `<span class="label" data-label="Wind Chill:"></span> N/A`;
}