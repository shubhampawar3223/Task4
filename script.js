//create a request variable
var request = new XMLHttpRequest();
//create a connectionconnection
request.open('GET','https://restcountries.eu/rest/v2/all',true);
//send a  connection
request.send();
//register a event listner..once the data is ready.
request.onload = function() {
    var countryData = JSON.parse(this.response);
    console.log(countryData);
   
    //Task1 -Get all the countries from Asia continent / “region” using Filter function.
    let countriesInAsia = countryData.filter(element=>element.region === "Asia")
    console.log(countriesInAsia)
   
    
    //Task2 -Get all the countries with population of less than 2 lacs using Filter function.
    let countriesBYPopulation = countryData.filter(element=> element.population < 200000)
    console.log(countriesBYPopulation)

    //Task3 -Print the following details name, capital, flag using forEach function.
    countryData.forEach(element =>{
        console.log("Country Name:" + ' '+ element.name);
        console.log("Capital:" + ' '+ element.capital);
        console.log("Flag:"+ ' '+ element.flag);
    })

    //Task4 -Print the total population of countries using reduce function.
    var populationSum = countryData.reduce((acc, currv)=>{
    return   acc+ currv.population;},0)
    console.log(population_sum)

    //Task5 -Print the country which uses US Dollars as currency.
     var usdUsingCountries = countryData.filter(element => element.currencies[0].code === "USD" );
     console.log(usdUsingCountries)
}

