let Trade = [
    {
        "Car": "Private",
        "Model": "Toyata-Corolla",
        "Year": "2018",
        "Hybrid": false,
        "adjusted": 5,
        "Pricelist": 120000,
        "photo": "https://paultan.org/image/2020/07/Toyota-Corolla-Sedan-GR-Sport-Europe-1-e1595395684614.jpg"
    },
    {
        "Car": "Private",
        "Model": "Audi-A3 Cabriolet",
        "Year": "2019",
        "Hybrid": true,
        "adjusted": 4,
        "Pricelist": 170000,
        "photo": "https://www.ynet.co.il/PicServer4/2015/03/11/5929401/592934601000100490327no.jpg"
    }
];


let trade1 = document.querySelector('#form');

trade1.addEventListener("submit", sub);

function sub(e) {
    e.preventDefault();

    let carlist1 = document.querySelector('[name=Car]').value;


    let divis = "";
    let arrnew = [];

    if (e != undefined) {
        arrnew = Trade.filter((trade) => {
            return trade.carlist1
        });

        for (let i = 0; i < arrnew.length; i++) {
            let div = `        
            <div class="Trade trade-${i}">
                <img src="${arrnew[i].photo}" alt="" width="300px" height="300px" class="trade-img">
                <p class="d1">Car ${arrnew[i].Car}</p>
                <p class="d1">Hybride: ${arrnew[i].Hybrid}</p>
                <p class="d1">adjusted: ${arrnew[i].adjusted}</p>               
                <p class="d1">Model${arrnew[i].Model}</p>
                <p class="d1">Year: ${arrnew[i].Year}</p>
                <p class="d1">Price_List: ${arrnew[i].Pricelist}</p>
            </div>
        `;
        divis += div;
        }

        let ttrade_div = document.querySelector('.cars-trade');

        ttrade_div.innerHTML = divis;

         document.querySelector('[name=list]').value = "";
}
}