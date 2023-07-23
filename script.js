let beerData = [];

function addBeer() {
  const beerNameInput = document.getElementById("beer-name");
  const beerStyleInput = document.getElementById("beer-style");
  const beerBreweryInput = document.getElementById("beer-brewery");
  const beerLocationInput = document.getElementById("beer-location");
  const beerVolumeInput = document.getElementById("beer-volume");

  const beerName = beerNameInput.value;
  const beerStyle = beerStyleInput.value;
  const beerBrewery = beerBreweryInput;
  const beerLocation = beerLocationInput;
  const beerVolume = beerVolumeInput;

  if (beerName && beerStyle && beerBrewery && beerLocation && beerVolume) {
    const beer = { name: beerName, style: beerStyle, brewery:beerBrewery, location:beerLocation, volume:beerVolume };
    beerData.push(beer);

    beerNameInput.value = "";
    beerStyleInput.value = "";
    beerBreweryInput.value = "";
    beerLocationInput.value = "";
    beerVolumeInput.value = "";
    updateBeerList();
  }
}

function updateBeerList() {
  const beerList = document.getElementById("beer-items");
  beerList.innerHTML = "";

  beerData.forEach((beer) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${beer.name},${beer.style},${beer.brewery},${beer.location},${beer.volume}`;
    beerList.appendChild(listItem);
  });
}

function showMessage() {
  const modal = document.getElementById('messagePopup');
  modal.style.display = 'block';
}

function closeMessage() {
  const modal = document.getElementById('messagePopup');
  modal.style.display = 'none';
}