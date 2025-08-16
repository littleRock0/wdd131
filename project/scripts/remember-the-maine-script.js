/***************************************************************************
 * 
 **************************************************************************/
const year = document.querySelector("#year");
const author = document.querySelector("#author");
const lastModifiedElement = document.querySelector("#lastModified");
const today = new Date();

let lastModifiedDate = new Date(document.lastModified);

year.innerHTML = ` <span class="highlight"> ${today.getFullYear()},</span>`;

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

const routes = [
    {
        name: "About Face",
        averageRating: 3,
        difficulty: 5.8,
        type: "Sport",
    },
    {
        name: "Apple Juice",
        averageRating: 3,
        difficulty: 5.9,
        type: "Sport",
    },
    {
        name: "Apple Juice with Pulp",
        averageRating: 3,
        difficulty: "5.10a",
        type: "Sport",
    },
    {
        name: "Capitan Sigsbee",
        averageRating: 3,
        difficulty: 5.9,
        type: "Sport",
    },
    {
        name: "Do the French like Cheese?",
        averageRating: 2,
        difficulty: "5.10d",
        type: "Sport",
    },
    {
        name: "Independence Arch",
        averageRating: 4,
        difficulty: "5.10a",
        type: "Sport",
    },
    {
        name: "J.R.O.T.C.",
        averageRating: 3,
        difficulty: 5.0,
        type: "",
    },
    {
        name: "Lichen to Me",
        averageRating: 0,
        difficulty: "5.11",
        type: "",
    },
    {
        name: "Lieutenant Friend",
        averageRating: 2,
        difficulty: 5.8,
        type: "Sport",
    },
    {
        name: "Lizzard Fingers",
        averageRating: 4,
        difficulty: "5.11C",
        type: "Sport",
    },
    {
        name: "Maine Squeeze",
        averageRating: 2,
        difficulty: 5.11,
        type: "TR",
    },
    {
        name: "Petrogrift",
        averageRating: 3,
        difficulty: "5.11a",
        type: "Sport",
    },
    {
        name: "Purely Accidental",
        averageRating: 2.5,
        difficulty: "5.11a/b",
        type: "Sport",
    },
    {
        name: "Teeter-Totter/Sandstorm",
        averageRating: 3,
        difficulty: 5.9,
        type: "Sport",
    },
    {
        name: "Thunderstorm",
        averageRating: 3,
        difficulty: 5.9,
        type: "Trad",
    },
    {
        name: "To Heck With Pain",
        averageRating: 3,
        difficulty: "5.9 +",
        type: "Sport",
    },
    {
        name: "Training Day",
        averageRating: 3,
        difficulty: 5.9,
        type: "Sport, TR",
    },
    {
        name: "Travers Pastrami",
        averageRating: 2,
        difficulty: "5.10a",
        type: "Sport",
    },
];

const routesSection = document.querySelector(".routes");

routes.forEach((route) => {
    const section = document.createElement("section");
    section.classList.add("card");
    
    section.innerHTML = `
        <h3>${routes.name}</h3>
        <p>${routes.type}</p>
        <p>${routes.difficulty}</p>
        <p>${routes.averageRating}</p>
    `;
    
    routesSection.appendChild(section)
});

const cssSafeClass = routes.name
    .toLowerCase()
	.replace(/[.]/g, '')
	.replace(/[ú]/g, 'u')
	.replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-');

section.classList.add(cssSafeClass)