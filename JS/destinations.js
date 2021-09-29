let produits = [
    {
        index :1,
        name: 'Voyage à Paris',
        tag : 'Paris',
        image: 'Paris' ,
        fuseau : 'Paris',
        continent : 'Europe',
        Pays : 'France',
        prix: 200,
        inPanier:0
    },

    {
        index :2,
        name: 'Voyage à Lyon',
        tag : 'Lyon',
        image: 'Lyon' ,
        fuseau :'Paris',
        continent : 'Europe',
        Pays : 'France',
        prix: 100,
        inPanier:0
    },

    {
        index :3,
        name: 'Voyage à Sydney',
        tag : 'Sydney',
        image: 'Sydney' ,
        fuseau : 'Sydney',
        continent : 'Australia',
        Pays : 'Australie',
        prix: 300,
        inPanier: 0
    },
{
        index :4,
        name: 'Voyage à Berlin',
        tag : 'Berlin',
        image: 'Berlin' ,
        fuseau : 'Berlin',
        continent : 'Europe',
        Pays : 'Allemagne',
        prix: 450,
        inPanier:0
    },

    {
        index :5,
        name: 'Voyage à Madrid',
        tag : 'Madrid',
        image: 'Madrid' ,
        fuseau : 'Madrid',
        continent : 'Europe',
        Pays : 'Espagne',
        prix: 230,
        inPanier:0
    },

    {
        index :6,
        name: 'Voyage à Londres',
        tag : 'Londres',
        image: 'Londres' ,
        fuseau : 'London',
        continent : 'Europe',
        Pays : 'Royaume Uni',
        prix: 500,
        inPanier: 0
    },
{
        index :7,
        name: 'Voyage à Tokyo',
        tag : 'Tokyo',
        image: 'Tokyo' ,
        fuseau : 'Tokyo',
        continent : 'Asia',
        Pays : 'Japon',
        prix: 700,
        inPanier:0
    },

    {
        index :8,
        name: 'Voyage à Djerba',
        tag : 'Djerba',
        image: 'Djerba' ,
        fuseau : 'Tunis',
        continent : 'Africa',
        Pays : 'Tunisie',
        prix: 180,
        inPanier:0
    },

    {
        index :9,
        name: 'Voyage à Lisbonne',
        tag : 'Lisbonne',
        image: 'Lisbonne' ,
        fuseau : 'Lisbon',
        continent : 'Europe',
        Pays : 'Portugal',
        prix: 320,
        inPanier: 0
}];

const DestinationsList = document.getElementById('Destinations');

//SEARCHBAR//

const searchBar = document.getElementById('searchBar');

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredDestination = produits.filter((Emplacement) => {
        return (
            Emplacement.image.toLowerCase().includes(searchString)    
        );
    });
    displayDestinations(filteredDestination);
});

const loadDestinations = async () => {
    displayDestinations(produits);
    
};

const displayDestinations = (produits) => {
    const htmlString = produits.map((Emplacement) => {
        return `
            <li class="Emplacement">
                <div class="ImagesDestinations">            
                <img src="../js/photos/${Emplacement.image}.jpg" alt="${Emplacement.image}" class="image" style="width:100%">
                <div class="Overlay">
                <div class="InfoDestination">${Emplacement.image.replace("_"," ")} | <span id="zone_heure${Emplacement.index}"></span> | <span id="zone_meteo${Emplacement.index}"></span> </div>${Emplacement.prix}€
                </div>
                <a  id = "reserver" href="reservation.html?id=${Emplacement.index}" onclick = "clearCart()">Réserver</a>
                </div>
            </li>
        `;
        })
        .join('');
        DestinationsList.innerHTML = htmlString;

};

loadDestinations();

//PRICEFILTER//
function openCloseFilter(){
    var divContenu = document.getElementById('hideContentFiltre')
         
    if(divContenu.style.display == 'block')
        divContenu.style.display = 'none';
    else
        divContenu.style.display = 'block';
}

var curseurMin = document.getElementById('rangeMin')
var valueMin = document.getElementById('valuePrixMin')
curseurMin.value = 0
valueMin.innerHTML = curseurMin.value

var curseurMax = document.getElementById('rangeMax')
var valueMax = document.getElementById('valuePrixMax')
curseurMax.value = 2000
valueMax.innerHTML = curseurMax.value

curseurMin.oninput = function(){
    valueMin.innerHTML = this.value;
}

curseurMax.oninput = function(){
    valueMax.innerHTML = this.value;
}

curseurMin.addEventListener('mousemove', function() {
    
    const filteredDestination = produits.filter((Emplacement) => {
        for (let i=0; i < produits.length; i++) { 
        if(Emplacement.prix > curseurMin.value && Emplacement.prix < curseurMax.value){
            return ( Emplacement.image.toLowerCase()
            );}
        }
    });
    displayDestinations(filteredDestination);
});
curseurMax.addEventListener('mousemove', function() {
    
    const filteredDestination = produits.filter((Emplacement) => {
        for (let i=0; i < produits.length; i++) {
            if(Emplacement.prix > curseurMin.value && Emplacement.prix < curseurMax.value){
                return ( Emplacement.image.toLowerCase()
                );}
        }
    });
    displayDestinations(filteredDestination);  
});
