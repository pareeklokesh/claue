let bannerSlide = document.querySelectorAll('.banner-item');
let bannerItem = 0;
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

next.addEventListener('click', function() {
    bannerItem++;
    if (bannerItem >= bannerSlide.length) {
        bannerItem = 0;
    }
    updateSlider();
});

prev.addEventListener('click', function() {
    bannerItem--;
    if (bannerItem < 0) {
        bannerItem = bannerSlide.length - 1;
    }
    updateSlider();
});

function updateSlider() {
    bannerSlide.forEach((item) => {
        item.classList.remove('active');
    });
    bannerSlide[bannerItem].classList.add('active');
}

/* ---------Search Block---------- */

let blockSearch = document.querySelector('.block-search');

function closeBtn() {
	blockSearch.style.display = 'none';
}
function searchBlock() {
	blockSearch.style.display = 'block';
}


/*TRENDING Product*/

function trendFunproduct(){
let trendingProduct = document.querySelectorAll('.trendingProduct');
trendingProduct.forEach((productDiv) => {
let products = [
        {
            img1: 'assets/img/100_cotton_sleeveless_maxi_shirt_dress3.png',
            img2: 'assets/img/100_cotton_sleeveless_maxi_shirt_dress2.png',
            name: '100% Cotton Sleeveless Maxi Shirt Dress',
            price: '$115.00',
        },
        {
            img1: 'assets/img/fairy_belted_floral_midi_dress.png',
            img2: 'assets/img/fairy_belted_floral_midi_dress2.png',
            name: 'Fairy Belted Floral Midi Dress',
            price: '$6.00',
        },
        {
            img1: 'assets/img/floral_short-sleeve_silk_chiffon_dress2.png',
            img2: 'assets/img/floral_short-sleeve_silk_chiffon_dress.png',
            name: 'Floral Short-Sleeve Silk Chiffon Dress',
            price: '$120.00',
        },
        {
            img1: 'assets/img/100_linen_button_detail_midi_skirt.png',
            img2: 'assets/img/100_linen_button_detail_midi_skirt6.png',
            name: '100% Linen Button Detail Midi Skirt ',
            price: '$39.00',
        },
        {
            img1: 'assets/img/100_cotton_sleeveless_maxi_shirt_dress3.png',
            img2: 'assets/img/100_cotton_sleeveless_maxi_shirt_dress2.png',
            name: '100% Cotton Sleeveless Maxi Shirt Dress',
            price: '$115.00',
        },
        {
            img1: 'assets/img/fairy_belted_floral_midi_dress.png',
            img2: 'assets/img/fairy_belted_floral_midi_dress2.png',
            name: 'Fairy Belted Floral Midi Dress',
            price: '$6.00',
        },
        {
            img1: 'assets/img/floral_short-sleeve_silk_chiffon_dress2.png',
            img2: 'assets/img/floral_short-sleeve_silk_chiffon_dress.png',
            name: 'Floral Short-Sleeve Silk Chiffon Dress',
            price: '$120.00',
        },
        {
            img1: 'assets/img/100_linen_button_detail_midi_skirt.png',
            img2: 'assets/img/100_linen_button_detail_midi_skirt6.png',
            name: '100% Linen Button Detail Midi Skirt ',
            price: '$39.00',
        }
    ];

for(let i = 0; i <= 7; i++) {
	let colDiv = document.createElement('div');
	colDiv.classList.add('col-md-3', 'mb-3', 'col-sm-6', 'col-12');
	let productContent = `
	<div class="product-item-info w-100">
	<div class="product-top overflow-hidden position-relative">
	<a href="#" class="product photo product-item-photo has-hover-image">
	<img src="${products[i].img1}" class="w-100 product-image-photol" />
	<img src="${products[i].img2}" class="w-100 img-hover-show" />
	</a><ul class="actions-link actions-secondary">
	<li>
	<button class="action tocompare bg-transparent border-0 p-0" role="button">
	<i class="fa-solid fa-magnifying-glass"></i>
	</button>
	</li>
	<li>
	<button class="action towishlist bg-transparent border-0 p-0" role="button">
	<i class="fa-regular fa-heart"></i>
	</button>
	</li>
	<li>
	<button class="action towishlist bg-transparent border-0 p-0" role="button">
	<i class="fa-regular fa-heart"></i>
	</button></li></ul>
	<div class="cart-block d-flex justify-content-center align-items-center position-absolute top-0 h-100 w-100 start-0">
	<button class="btn btn-default btn-promo-banner addtocartBtn">Add to Cart</button>
	</div>
	</div>
	<div class="product details product-item-details"><h5 class="product name product-item-name">
	<a class="product-item-link" href="#">${products[i].name}</a></h5>
	<span class="price">${products[i].price}</span>
	</div>
	</div>`;
	colDiv.innerHTML = productContent;
	productDiv.appendChild(colDiv);
}
});

}
trendFunproduct();

 /* -----------LATEST FROM BLOG-------- */

 function latestBlog(){
    let latestBlog = document.querySelector('.latestBlog');
    //latestBlog.forEach((latestBlogList) => {
    let blog = [
    {
        postthum: 'assets/img/irene-kredenets-tBAMSkmxk_0-unsplash.png',
        postTitle: 'Fashionable Travel Destinations: Style Inspiration from Around the World',
        postContent: 'Celebrities have a profound impact on fashion. Their red carpet appearances and everyday looks set trends that inspire m...',
    },
    {
        postthum: 'assets/img/irene-kredenets-tcVH_BwHtrc-unsplash.png',
        postTitle: 'The Art of Mix and Match: Creating Unique Outfits',
        postContent: 'Fashion is an ever-changing landscape where creativity knows no bounds. Each year brings forth new trends, styles, and c...',
    },
    {
        postthum: 'assets/img/jasmin-chew-txy8AZU04iw-unsplash.png',
        postTitle: 'Burberry Collection For Women',
        postContent: 'In recent years, the fashion industry has shifted its focus towards sustainability. Designers are increasingly using eco...',
    }

        ];
    for(let blogItem = 0; blogItem < 3; blogItem++) {
        let clo4 = document.createElement('div');
    clo4.classList.add('col-md-4', 'col-sm-6', 'col-12', 'mb-3', 'mb-md-0');
    let blosgpostcontent = `
    <div class="w-100">
                        <div class="w-100 blog-thum overflow-hidden position-relative">
                            <img class="w-100" src="${blog[blogItem].postthum}">
                        </div>
                        <div class="w-100 blog-content">
                            <a href="#" class="d-block title-blog mt-3">${blog[blogItem].postTitle}</a>
                            <div class="post-create-date">By <span class="color-theme">claue2</span> 
                            on Sep 23, 2021</div>
                            <p class="short-content mb-0">${blog[blogItem].postContent}</p>
                        </div>
                    </div>
    `;
    clo4.innerHTML = blosgpostcontent;
    latestBlog.appendChild(clo4);
    }

    //});

 }
 latestBlog();

 /* ---------Mobile Menu--------- */

// var root = document.getElementsByTagName('html')[0];
// var container = document.querySelector('.menu-wrapper-mobile');
// var menuButton = document.querySelector('.menuBtn');

// menuButton.addEventListener('click', function() {

//     root.classList.add('mobile-nav-open');
//     document.addEventListener('click', clickOutsideHandler);
// });

// function clickOutsideHandler(e) {
//     if (!container.contains(e.target)) {
//         root.classList.remove('mobile-nav-open');

//         // Remove the event listener since the menu is closed
//         document.removeEventListener('click', clickOutsideHandler);
//     }
// }

 document.addEventListener('DOMContentLoaded', function() {
    var root = document.getElementsByTagName('html')[0];
    var container = document.querySelector('.menu-wrapper-mobile');
    var menuButton = document.querySelector('.menuBtn'); 

    menuButton.addEventListener('click', function(e) {
        e.stopPropagation();
        root.classList.add('mobile-nav-open');

        
        document.addEventListener('click', clickOutsideHandler);
    });

    function clickOutsideHandler(e) {
        if (!container.contains(e.target)) {
            root.classList.remove('mobile-nav-open');
            document.removeEventListener('click', clickOutsideHandler);
        }
    }
    var closeButton = document.querySelector('.search-close');
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            root.classList.remove('mobile-nav-open');
            document.removeEventListener('click', clickOutsideHandler);
        });
    }
});


 /* -----------------add to cart--------------- */

 let addtocartbtn = document.querySelectorAll('.addtocartBtn');








