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

temp = 88;
condition = "cloudy";
windSpeed = "15 Km/h";
windChill = 5.2;

tempurature.innerHTML = `<span class="lable" data-label="Temperature:"></span> ${temp} &deg;C`;
conditions.innerHTML = `<span class="lable" data-label="Conditions:"></span> ${condition}`;
wind.innerHTML = `<span class="lable" data-label="Wind:"></span> ${windSpeed}`;
chill.innerHTML = `<span class="lable" data-label="Wind Chill:"></span> ${windChill} &deg;C`;