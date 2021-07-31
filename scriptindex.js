var slider = document.getElementById('slider')

getshowSlider()

async function getshowSlider(){
    try{
        let response = await axios.get('https://6102d7aa79ed680017482359.mockapi.io/slider')
        let slides = response.data
        let loopedslide = 
        `<div class="carousel-item active">
            <img src="${slides[0].imageUrl}" class="d-block w-100" alt="Bitmap">
            <div class="carousel-caption d-none d-md-block">
                <h3>${slides[0].sliderText}</h3>
            </div>
        </div>`
        for(let i = 1;i<slides.length;i++){
            loopedslide += 
            `<div class="carousel-item">
                <img src="${slides[i].imageUrl}" class="d-block w-100" alt="Bitmap">
                <div class="carousel-caption d-none d-md-block">
                    <h3>${slides[i].sliderText}</h3>
                </div>
            </div>`
        }
        slider.innerHTML = 
            `<div class="container">
            <h2 class="header-top">New Release</h2>
            <h6 class="header-bottom" id="header-gray">2020/2021</h6>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
              </div>
        
              <div class="carousel-inner">
                ${loopedslide}
              </div>
        
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>`
    } catch (error) {
        console.log('error',error)
    }
}

var productdisplay = document.getElementById('productdisplay')

getshowProducts()

async function getshowProducts(){
    try{
        let response = await axios.get('https://6102d7aa79ed680017482359.mockapi.io/productlist')
        let product = response.data
        productdisplay.innerHTML = 
            `<div class="container">
                <div class="row justify-content-between">
                    <div class="col-xl-2 col-sm-5">
                        <div class="card" style="width: 18rem;"> <img src="${product[0].prdImageUrl}" class="card-img-top" alt="..." onclick="location.href = 'productDetail.html?id=${product[0].id}';">
                            <div class="card-body">
                                <h6 class="card-title">${product[0].prdname}</h6>
                                <p class="card-text price">$${product[0].prdPrice}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-2 col-sm-5">
                        <div class="card" style="width: 18rem;"> <img src="${product[1].prdImageUrl}" class="card-img-top" alt="..." onclick="location.href = 'productDetail.html?id=${product[1].id}';">
                            <div class="card-body">
                                <h6 class="card-title">${product[1].prdname}</h6>
                                <p class="card-text price">$${product[1].prdPrice}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-2 col-sm-5">
                        <div class="card" style="width: 18rem;"> <img src="${product[2].prdImageUrl}" class="card-img-top" alt="..." onclick="location.href = 'productDetail.html?id=${product[2].id}';">
                            <div class="card-body">
                                <h6 class="card-title">${product[2].prdname}</h6>
                                <p class="card-text price">$${product[2].prdPrice}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-2 col-sm-5">
                        <div class="card" style="width: 18rem;"> <img src="${product[3].prdImageUrl}" class="card-img-top" alt="..." onclick="location.href = 'productDetail.html?id=${product[3].id}';">
                            <div class="card-body">
                                <h6 class="card-title">${product[3].prdname}</h6>
                                <p class="card-text price">$${product[3].prdPrice}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-between">
                    <div class="col-xl-2 col-sm-5">
                        <div class="card" style="width: 18rem;"> <img src="${product[4].prdImageUrl}" class="card-img-top" alt="..." onclick="location.href = 'productDetail.html?id=${product[4].id}';">
                            <div class="card-body">
                                <h6 class="card-title">${product[4].prdname}</h6>
                                <p class="card-text price">$${product[4].prdPrice}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-2 col-sm-5">
                        <div class="card" style="width: 18rem;"> <img src="${product[5].prdImageUrl}" class="card-img-top" alt="..." onclick="location.href = 'productDetail.html?id=${product[5].id}';">
                            <div class="card-body">
                                <h6 class="card-title">${product[5].prdname}</h6>
                                <p class="card-text price">$${product[5].prdPrice}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-2 col-sm-5">
                        <div class="card" style="width: 18rem;"> <img src="${product[6].prdImageUrl}" class="card-img-top" alt="..." onclick="location.href = 'productDetail.html?id=${product[6].id}';">
                            <div class="card-body">
                                <h6 class="card-title">${product[6].prdname}</h6>
                                <p class="card-text price">$${product[6].prdPrice}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-2 col-sm-5">
                        <div class="card" style="width: 18rem;"> <img src="${product[7].prdImageUrl}" class="card-img-top" alt="..." onclick="location.href = 'productDetail.html?id=${product[0].id}';">
                            <div class="card-body">
                                <h6 class="card-title">${product[7].prdname}</h6>
                                <p class="card-text price">$${product[7].prdPrice}</p>
                            </div>
                        </div>
                    </div>
                </div>
          </div>`
    } catch (error) {
        console.log('error',error)
    }
}
