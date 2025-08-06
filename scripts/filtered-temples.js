/***************************************************************************
 * 
 **************************************************************************/
const year = document.querySelector("#year");
const author = document.querySelector("#author");
const lastModifiedElement = document.querySelector("#lastModified");
const today = new Date();

let lastModifiedDate = new Date(document.lastModified);

year.innerHTML = ` <span class="highlight"> ${today.getFullYear()}</span>`;

const authorMeta = document.querySelector('meta[name="author"]');

if (authorMeta) {
    author.innerHTML = authorMeta.content;
}

lastModifiedElement.innerHTML = `Last updated: ` +
    `${lastModifiedDate.toLocaleString()}`;

const mainNav = document.querySelector('.navigation')
const hamButton = document.querySelector('#menu');

hamButton.addEventListener('click', () => {
	mainNav.classList.toggle('show');
	hamButton.classList.toggle('show');
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
        	"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
        	"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
        	"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
        	"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
        	"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
        	"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        	"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Logan Utah",
        location: "Logan, Utah",
        dedicated: "1884, May, 17",
        area: 119619,
        imageUrl:
        	"https://churchofjesuschristtemples.org/assets/img/temples/logan-utah-temple/logan-utah-temple-31538.jpg"
    },
    {
        templeName: "Vernal Utah",
        location: "Vernal, Utah",
        dedicated: "1997, November, 2",
        area: 38771,
        imageUrl:
        	"https://churchofjesuschristtemples.org/assets/img/temples/vernal-utah-temple/vernal-utah-temple-15044.jpg"
    },
    {
        templeName: "Bern Switzerland",
        location: "Bern, Switzerland",
        dedicated: "1955, September, 11",
        area: 35546,
        imageUrl:
        	"https://churchofjesuschristtemples.org/assets/img/temples/bern-switzerland-temple/bern-switzerland-temple-50471.jpg"
    },
];

const photosSection = document.querySelector(".photos");

temples.forEach((temple) => {
    const figure = document.createElement("figure");
	
    const img = document.createElement("img");
    img.src = temple.imageUrl;
	img.alt = `${temple.templeName} Temple`;
	img.loading = `lazy`
	
    const caption = document.createElement("figcaption");
    caption.innerHTML = `
        <h3>${temple.templeName}</h3>
        <p>Location: ${temple.location}</p>
        <p>Dedicated: ${temple.dedicated}</p>
        <p>Area: ${temple.area.toLocaleString()} sq ft</p>
	`;
	
    figure.appendChild(caption);
    figure.appendChild(img);
    photosSection.appendChild(figure);
});

const cssSafeClass = temple.templeName
	.toLowerCase()
	.replace(/[.]/g, '')
	.replace(/[ú]/g, 'u')
	.replace(/[^a-z0-9]/g, '-')
	.replace(/-+/g, '-');

figure.classList.add(cssSafeClass);

function getDedicationYear(dedicatedStr) {
	return Number(dedicatedStr.split(",")[0].trim());
}