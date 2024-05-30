const request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3/all");

request.send();

request.onload = function(){
    let data = JSON.parse(request.response);
    //console.log(data);
    
    //a)Get all the countries from Asia continent /region using Filter method

    let filteredData = data.filter(country => country.region === "Asia").map(country => country.name.common);

    console.log(filteredData);

    //b)Get all the countries with a population of less than 2 lakhs using Filter method

    let filter = data.filter(country => country.population < 200000).map(Country => Country.name.common);

    console.log(filter);

    //c)Print the following details name, capital, flag, using forEach method
    data.forEach(country => {
        console.log(`Name: ${country.name.common}`);
        console.log(`Capital: ${country.capital}`);
        console.log(`Flag: ${country.flags}`);
        console.log('---'); // to defferentiate each value
    });

    //d)Print the total population of countries using reduce method
    let totalPopulation = data.reduce((acc,ele) => acc + ele.population, 0);
    console.log(`Total Poulation is : ${totalPopulation}`);

    //e)Print the country that uses US dollars as currency.
    let usDollars = data.filter(country => 
        country.currencies && Object.keys(country.currencies).includes('USD')
      ).map(country => country.name.common);
  
      console.log(usDollars);
    
}


