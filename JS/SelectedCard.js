
var carteItems = document.querySelectorAll('.CarteItem');
carteItems.forEach(function(carteItem) {
  carteItem.addEventListener('click', function() {
    let Carte = this;
    let CarteItemName = this.querySelector('.CarteItemName').innerHTML;
    let CarteImage = this.querySelector('.CarteitemImage').src;
    let CarteDescription = this.querySelector('.CarteItemDescription').innerHTML;
    let CarteItemPrice = this.querySelector('.CarteItemPrice').innerHTML;
    document.getElementById('PopUpBackground').classList.remove("invisible");
    SelectCard(Carte, CarteItemName, CarteImage, CarteDescription, CarteItemPrice);
  });
});



document.getElementById('buttonCloseCarte').addEventListener('click', function (event) {
    document.getElementById('PopUpBackground').classList.add("invisible");
});

function SelectCard(CarteEl_, CarteItemNameEl_, CarteImageEl_, CarteDescriptionEl_, CarteItemPriceEl_) {
    let ItemName = document.getElementById('CarteItemName');
    let ItemImage = document.getElementById('CarteitemImage');
    let ItemDescription = document.getElementById('CarteItemDescription');
   let ItemPrice = document.getElementById('CarteItemPrice');
    ItemName.innerHTML = CarteItemNameEl_;
    ItemImage.src = CarteImageEl_;
    ItemDescription.innerHTML = CarteDescriptionEl_;
    ItemPrice.innerHTML = CarteItemPriceEl_;
}