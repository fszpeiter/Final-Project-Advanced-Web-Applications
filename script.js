// JavaScript to handle beer management functionalities
$(document).ready(function() {
    let beers = [];
  
    // Function to save beers to local storage
    function saveBeersToLocalStorage() {
      localStorage.setItem('beers', JSON.stringify(beers));
    }
  
    // Function to load beers from local storage
    function loadBeersFromLocalStorage() {
      const storedBeers = localStorage.getItem('beers');
      if (storedBeers) {
        beers = JSON.parse(storedBeers);
        renderBeerList();
      }
    }
  
    // Function to render the beer list
    function renderBeerList() {
      const beerList = $("#beerList");
      beerList.empty();
      beers.forEach((beer, index) => {
        beerList.append(`<li class="list-group-item">${beer.name},${beer.style},${beer.brewery},${beer.abv}%,${beer.ibu}%,${beer.volume} fl oz,${beer.date}</li>`);
      });
    }
  
    // Function to add a new beer
    $("#beerForm").submit(function(event) {
      event.preventDefault();
      const beerName = $("#beerName").val();
      const beerStyle = $("#beerStyle").val();
      const beerBrewery = $("#beerBrewery").val();
      const beerABV = $("#beerABV").val();
      const beerIBU = $("#beerIBU").val();
      const beerVolume = $("#beerVolume").val();
      const beerDate = $("#beerDatetime").val();
      if (beerName && beerStyle) {
        const newBeer = { name: beerName, style: beerStyle, abv: beerABV, ibu: beerIBU, volume: beerVolume, date: beerDate , brewery: beerBrewery};
        beers.push(newBeer);
        saveBeersToLocalStorage();
        renderBeerList();
        $("#beerName").val("");
        $("#beerStyle").val("");
        $("#beerABV").val("");
        $("#beerIBU").val("");
        $("#beerVolume").val("");
        $("#beerDateTime").val("");
      }
    });
  
    // Load beers from local storage on page load
    loadBeersFromLocalStorage();
  
    // Function to delete last created beer
    $("#deleteLastBeerBtn").click(function() {
      beers.pop();
      saveBeersToLocalStorage();
      renderBeerList();
    });
  
    // Function to delete all beers
    $("#deleteAllBeersBtn").click(function() {
      beers = [];
      saveBeersToLocalStorage();
      renderBeerList();
    });
  });



  


    