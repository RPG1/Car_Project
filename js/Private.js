let Private_cars = [
        {
          "Name": "Private",
          "model": "Toyota-Rav4",
          "Year": "2019",
          "Hybrid": false,
          "title": "Comfortable fuel-efficient vehicle",
          "rating": 4.4,
          "adjusted": 5,
          "photo": "https://kong-proxy-aws.toyota-europe.com/c1-images/resize/ccis/680x680/zip/il/product-token/22ec9ac9-a6ce-43fd-b5c4-89d9a8ae3ee1/vehicle/cf7655f4-5f20-4bb7-8c8d-2bcc377e9c75/padding/50,50,50,50/image-quality/70/hero-exterior-04_2sc.png"
        },
        {
          "Name": "Private",
          "model": "BMW-M-4",
          "Year": "2018",
          "Hybrid": false,
          "title": "Comfortable fuel-efficient vehicle",
          "rating": 5.1,
          "adjusted": 5,
          "photo": "https://mediapool.bmwgroup.com/cache/P9/202010/P90403620/P90403620-bmw-m4-competition-x-kith-10-2020-2002px.jpg"
        },
        {
          "Name": "Private",
          "model": "Hyundia-TUCSON",
          "Year": "2022",
          "Hybrid": true,
          "title": "Comfortable fuel-efficient vehicle",
          "rating": 4.9,
          "adjusted": 5,
          "photo": "https://www.cnet.com/a/img/resize/a35e8f3f45be33f409329d72bfc76e43cf106741/hub/2021/04/19/31132fa6-2622-4ebe-995a-f52e20b7b218/2022-hyundai-tucson-limited-awd-ogi.jpg?auto=webp&fit=crop&height=675&width=1200"
        },
        {
          "Name": "Private",
          "model": "Mercedes-A180",
          "Year": "2021",     
          "Hybrid": true,
          "title": "Comfortable fuel-efficient vehicle",
          "rating": 5.4,
          "adjusted": 5,
          "photo": "https://www.mercedes-benz.co.il/wp-content/uploads/149-2-14.jpg"
        },
        {
          "Name": "Private",
          "model": "Toyota-Corolla",
          "Year": "2020",      
          "Hybrid": false,
          "title": "Comfortable fuel-efficient vehicle",
          "rating": 5.1,
          "adjusted": 5,
          "photo": "https://www.carscoops.com/wp-content/uploads/2018/11/f0db4725-2020-toyota-corolla-16445.jpg"
        },
        {
          "Name": "Jeep",
          "model": "Jeep-Wrangler",
          "Year": "2019",      
          "Hybrid": false,
          "title": "Comfortable Powerful SUV for off-road driving experience",
          "rating": 5.2,
          "adjusted": 2,
          "photo": "https://cdn.motor1.com/images/mgl/Oov0YM/s1/2022-jeep-wrangler-4xe-europe.jpg"
        }
    ];

    let All_Option = document.querySelector('.se');

    All_Option.addEventListener("change", load);

    function load(e) {
        let divs = "";
        let newArr = [];
        if (e != undefined) {
            newArr = Private_cars.filter((home) => {
                return home.Name == e.target.value;
            });
        }else {
            newArr = Private_cars;
        }
        for (let i = 0; i < newArr.length; i++) {
            let div = `        
              <div class="Car Car-${i}">
                  <img src="${newArr[i].photo}" alt="" width="200px" height="200px" class="Car-img">
                  <i class="fas fa-star" id="star">${newArr[i].rating}</i>
                  <p class="p1">Name ${newArr[i].Name}</p>
                  <p class="p1">Hybrid: ${newArr[i].Hybrid}</p>
                  <p class="p1">Year: ${newArr[i].Year}</p>                  
                  <p class="p1">${newArr[i].title}</p>
                  <p class="p1">adjusted: ${newArr[i].adjusted}</p>
                  <p class="p1">model: ${newArr[i].model}</p>
              </div>
          `;
          divs += div;
          }
          let Cars = document.querySelector('.Private-Cars');
    
          Cars.innerHTML = divs;
    }

