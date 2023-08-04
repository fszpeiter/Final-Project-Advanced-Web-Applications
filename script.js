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
        beerList.append(`<li class="list-group-item">${beer.name} - ${beer.type}</li>`);
      });
    }
  
    // Function to add a new beer
    $("#beerForm").submit(function(event) {
      event.preventDefault();
      const beerName = $("#beerName").val();
      const beerType = $("#beerType").val();
      if (beerName && beerType) {
        const newBeer = { name: beerName, type: beerType };
        beers.push(newBeer);
        saveBeersToLocalStorage();
        renderBeerList();
        $("#beerName").val("");
        $("#beerType").val("");
        showSuccessPopup('New beer added successfully!');
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



  


    