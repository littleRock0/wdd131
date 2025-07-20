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

tempurature.innerHTML = `Tempurature: ${temp} C`;
conditions.innerHTML = `Conditions: ${condition}`;
wind.innerHTML = `Wind: ${windSpeed}`;
chill.innerHTML = `Wind Chill: ${windChill} C`;