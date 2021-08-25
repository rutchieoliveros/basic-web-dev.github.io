var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


const products =  [
    { 
        "name": "iPhone 12 Pro", 
        "brand": "Apple", 
        "description": "iPhone 12 Pro", 
        "price": "1250" 
    },
    { 
        "name": "iPhone 12", 
        "brand": "Apple", 
        "description": "iPhone 12", 
        "price": "1100" 
    },
    { 
        "name": "iPhone SE", 
        "brand": "Apple", 
        "description": "iPhone SE", 
        "price": "1000" 
    },
    { 
        "name": "iPhone X", 
        "brand": "apple", 
        "description": "iPhone X", 
        "price": "1080" 
    },
    { 
        "name": "iPhone XS", 
        "brand": "apple", 
        "description": "iPhone XS", 
        "price": "1090" 
    },
    { 
        "name": "iPhone XS Max", 
        "brand": "apple", 
        "description": "iPhone XS Max", 
        "price": "900" 
    },
    { 
        "name": "iPhone 8 Plus", 
        "brand": "apple", 
        "description": "iPhone 8 Plus", 
        "price": "910" 
    },
    { 
        "name": "iPhone 8", 
        "brand": "apple", 
        "description": "iPhone 8", 
        "price": "910" 
    }
]

const productContainer = document.getElementById("products-container");

// var cart = [];

function addToCart(productName){
    alert("You have added: " + (productName) + " to your cart.");
    $(".modal-body").append(
        `<p>${productName}</p>`
    );
}

products.forEach(product => {
    
    $('#products')
    .append(
            '<div class="card border-dark mb-5" style="width: 18rem;">'+
                '<img src="./img/phone.png" class="card-img-top" alt="...">'+
                '<div class="card-body">'+
                    `<h5 class="card-title cl">${product.name}</h5>`+
                    '<div class="d-flex justify-content-between">'+
                        `<p class="card-text cl">$${product.price}.00</p>`+
                        `<a href="#" class="btn btn-primary" onclick="addToCart('${product.name}')">Order</a>`+
                    '</div>'+
                '</div>'+
            '</div>'
    );

});