
console.log("Testing, testing, 1 2 3 ...");

// a variable to store the list of all countries
let countryList = []; 

// async function to fetch countries data
// fetch data from the url
// then parse the response as JSON
// call the function to populate countries
const fetchCountries = async () => {
    const countryResponse = await fetch("https://restcountries.com/v3.1/all");
    const countryJsonData = await countryResponse.json();
    countryList = countryJsonData; 
    populateCountryList(countryJsonData);
};

// function to populate country list in the UI
// get countriesList element from the HTML
// Clear the existing list
// iterate over the countries array
// create li element for each country
// then set the textcontent to the country name
// append the li element to the country list

const populateCountryList = (countries) => {
  const countriesList = document.getElementById("country-list");
  countriesList.innerHTML = ""; 

    countries.forEach((country) => {
    const li = document.createElement("li");

    const name = document.createElement("b");
    name.textContent = "Name: " + country.name.common;
    li.appendChild(name);

    const officialName = document.createElement("p");
    officialName.textContent = "Official Name: " + country.name.official;
    li.appendChild(officialName);

    const capital = document.createElement("p");
    capital.textContent = "Capital: " + country.capital;
    li.appendChild(capital);

    const region = document.createElement("p");
    region.textContent = "Region: " + country.region;
    li.appendChild(region);

    const languages = document.createElement("p");
    languages.textContent = "Language(s) Spoken: " + Object.values(country.languages).join(", ");
    li.appendChild(languages);

    const population = document.createElement("p");
    population.textContent = "Population: " + country.population;
    li.appendChild(population);

    const flag = document.createElement("p");
    flag.textContent = "Official Flag: " + country.flag;
    li.appendChild(flag);


    countriesList.appendChild(li);
  });
};

// filtering section
// function to handle form submit event
// stop the page from reloading
// take the value of the text entered 
// and then use that value to filter the countrylist array.
// non case-sensitive
const handleFormSubmit = (event) => {
  event.preventDefault();
  const inputText = document.getElementById('filter-input').value;
  const filteredCountries = countryList.filter((country) =>
    country.name.common.toLowerCase().includes(inputText.toLowerCase())
  );
  populateCountryList(filteredCountries);
};

// Call the fetchCountries function
fetchCountries();

// Add event listener to form element
const form = document.getElementById("filter-form");
form.addEventListener("submit", handleFormSubmit);

