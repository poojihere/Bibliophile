searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}

const userIcon = document.getElementById('login-btn');
const loginFormContainer = document.querySelector('.login-form-container');
const closeLoginButton = document.getElementById('close-login-btn');

// Function to toggle the login form container visibility
function toggleLoginForm() {
  loginFormContainer.classList.toggle('active');
}

// Add click event listeners to the user icon and close button
userIcon.addEventListener('click', toggleLoginForm);
closeLoginButton.addEventListener('click', toggleLoginForm);


const createAccountLink = document.getElementById('create-account-link');
const signupContainer = document.getElementById('signup-container');

createAccountLink.addEventListener('click', function(event) {
        event.preventDefault();
        loginFormContainer.style.display = 'none';
        signupContainer.style.display = 'block';
});

window.onscroll = () =>{

    searchForm.classList.remove('active');

    if(window.scrollY>80){
        document.querySelector('.header .header-2').classList.add('active');
    }
    else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

window.onload = () =>{
    if(window.scrollY>80){
        document.querySelector('.header .header-2').classList.add('active');
    }
    else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
    //fadeOut();
}
var swiper = new Swiper(".books-slider .swiper-container", {
      // Configure the options for the Swiper carousel
    slidesPerView: "auto",
    navigation: {
        nextEl: ".books-slider .swiper-button-next",
        prevEl: ".books-slider .swiper-button-prev",
      },
});
 
var swiper = new Swiper('.crime-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000, // Adjust the delay (in milliseconds) between slides
        disableOnInteraction: false, // Allow user interaction to interrupt autoplay
    },
});

var swiper = new Swiper('.horror-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000, // Adjust the delay (in milliseconds) between slides
        disableOnInteraction: false, // Allow user interaction to interrupt autoplay
    },
});

var swiper = new Swiper('.Mythological-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000, // Adjust the delay (in milliseconds) between slides
        disableOnInteraction: false, // Allow user interaction to interrupt autoplay
    },
});

var swiper = new Swiper('.romantic-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000, // Adjust the delay (in milliseconds) between slides
        disableOnInteraction: false, // Allow user interaction to interrupt autoplay
    },
});

var swiper = new Swiper('.tragedy-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000, // Adjust the delay (in milliseconds) between slides
        disableOnInteraction: false, // Allow user interaction to interrupt autoplay
    },
});
var swiper = new Swiper('.arrivals-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000, // Adjust the delay (in milliseconds) between slides
        disableOnInteraction: false, // Allow user interaction to interrupt autoplay
    },
});
var swiper = new Swiper('.reviews-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000, // Adjust the delay (in milliseconds) between slides
        disableOnInteraction: false, // Allow user interaction to interrupt autoplay
    },
});
var swiper = new Swiper('.blogs-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 900, // Adjust the delay (in milliseconds) between slides
        disableOnInteraction: false, // Allow user interaction to interrupt autoplay
    },
});

const crimeLink = document.querySelector('#crime a');

crimeLink.addEventListener('click', function(event) {
    event.preventDefault();
    const section = document.querySelector(crimeLink.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
});


const horrorLink = document.querySelector('#horror a');

horrorLink.addEventListener('click', function(event) {
    event.preventDefault();
    const section = document.querySelector(horrorLink.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
});


const mythLink = document.querySelector('#Mythological a');

mythLink.addEventListener('click', function(event) {
    event.preventDefault();
    const section = document.querySelector(mythLink.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
});

const romanticLink = document.querySelector('#romantic a');

romanticLink.addEventListener('click', function(event) {
    event.preventDefault();
    const section = document.querySelector(romanticLink.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
});
const tragedyLink = document.querySelector('#tragedy a');

tragedyLink.addEventListener('click', function(event) {
    event.preventDefault();
    const section = document.querySelector(tragedyLink.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
});


// const signInForm = document.querySelector('.signin-form');

// signInForm.addEventListener('submit', async (e) => {
//   e.preventDefault();

//   const email = document.querySelector('#signemail').value;
//   const password = document.querySelector('#signpassword').value;

//   const response = await fetch('/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ email, password }),
//   });

//   const data = await response.json();

//   if (response.ok && data.success) {
//     // Redirect to the provided URL upon successful login
//     window.location.href = data.redirect;
//   } else {
//     // Display an error message to the user
//     console.error(data.msg);
//   }
// });

const forgotPasswordForm = document.getElementById('forgotPasswordForm');
const messageContainer = document.getElementById('messageContainer');

forgotPasswordForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('forgotEmail').value;

  try {
    const response = await fetch('/api/forget-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (response.ok && data.success) {
      // Display the success message dynamically
      messageContainer.innerHTML = '<p class="success-message">Email sent successfully.</p>';
    } else {
      // Display an error message to the user
      messageContainer.innerHTML = '<p class="error-message">An error occurred. Please try again.</p>';
    }
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
});


// const cartIcon = document.getElementById('cart-icon');
// const cartCount = document.getElementById('cart-count');
// const addToCartButtons = document.querySelectorAll('.add-to-cart');

// let cartItems = []; // Array to store added books

// // Function to update cart count
// function updateCartCount() {
//   cartCount.textContent = cartItems.length;
// }

// // Function to add book to cart
// function addToCart(bookId) {
//     // Add the book to the cartItems array
//     cartItems.push(bookId);
  
//     // Update the cart count
//     const cartCount = document.getElementById('cart-count');
//     cartCount.textContent = cartItems.length;
  
//     // You can also display a notification or perform other actions
  
//     // For example, show a confirmation message
//     alert('Book added to cart!');
//   }
  



// // Click event listener for the cart icon
// cartIcon.addEventListener('click', () => {
//   // Redirect to the cart page and pass the cart items as query parameters
//   const cartItemsStr = cartItems.join(',');
//   window.location.href = `/cart?items=${cartItemsStr}`;
// });




// addToCartButtons.forEach(button => {
//   button.addEventListener('click', async event => {
//     event.preventDefault();

//     const product_id = button.dataset.productId;
//     const price = parseFloat(button.dataset.price);
//     const vendor_id = button.dataset.vendorId;
//     const store_id = button.dataset.storeId;

//     try {
//       const response = await fetch('/api/add_to_cart', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           product_id,
//           price,
//           vendor_id,
//           store_id
//         })
//       });

//       if (response.ok) {
//         const data = await response.json();
//         // Update UI or display a message to indicate success
//         console.log(data); // This will show the response from the server
//       } else {
//         // Handle error scenario
//         console.error('Error:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   });
// });


const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartCount = document.getElementById('cart-count');
    const cartIcon = document.getElementById('cart-icon');
    // const authToken = "$2a$10$QarO/cw9tLXXv/YtnyWJceSt0Rgn7Y0wD0OkEidKGKEQs5ablLGsy";

    addToCartButtons.forEach(button => {
      button.addEventListener('click', async event => {
        event.preventDefault();

        const product_id = button.dataset.productId;
        const price = parseFloat(button.dataset.price);
        const vendor_id = button.dataset.vendorId;
        

        try {
          const response = await fetch('/add-to-cart', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
              // 'Authorization': `Bearer ${authToken}`
            },
            body: JSON.stringify({
              product_id,
              price,
              vendor_id,
            
              
            })
          });

          if (response.ok) {
            // const data = await response.json();
            // // Update UI or display a message to indicate success
            // console.log(data); // This will show the response from the server
            // cartCount.textContent = parseInt(cartCount.textContent) + 1;
            const currentCartCount = parseInt(cartIcon.getAttribute('data-cart-count'));
            cartIcon.setAttribute('data-cart-count', currentCartCount + 1);
            cartCountElement.textContent = currentCartCount + 1; // Update cart count
          } else {
            // Handle error scenario
            console.error('Error:', response.statusText);
          }
        } catch (error) {
          console.error('Error:', error);
        }
      });
    });