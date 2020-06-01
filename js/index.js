const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// Changing the logo with JS
const headerLogo = document.querySelector('#logo-img');
headerLogo.src = 'img/logo.png';

// Changing the code snippet image
const codingImage = document.querySelector('#cta-img');
codingImage.src = 'img/header-img.png';

// Changing the middle image content
const middleImageContent = document.querySelector('#middle-img');
middleImageContent.src = 'img/mid-page-accent.jpg';

// Adding text to header nav content
const theNav = document.querySelector('nav');
const childrenOfNav = theNav.children;

const firstLink = childrenOfNav[0];
firstLink.textContent = 'Services';
firstLink.style.color = 'green';

const secondLink = childrenOfNav[1];
secondLink.textContent = 'Product';
secondLink.style.color = 'green';

const thirdLink = childrenOfNav[2];
thirdLink.textContent = 'Vision';
thirdLink.style.color = 'green';

const fourthLink = childrenOfNav[3];
fourthLink.textContent = 'Features';
fourthLink.style.color = 'green';

const fifthLink = childrenOfNav[4];
fifthLink.textContent = 'About';
fifthLink.style.color = 'green';

const sixthLink = childrenOfNav[5];
sixthLink.textContent = 'Contact';
sixthLink.style.color = 'green';



// H1 Content addition

const theH1Content = document.querySelector('h1');
theH1Content.textContent = `DOM IS AWESOME`;

const buttonContent = document.querySelector('button').textContent = 'Get Started';

// Adding Heading/Paragraph content

const firstH4Content = document.querySelector('.top-content .text-content:nth-of-type(1) h4');
firstH4Content.textContent = 'Features';

const secondH4Content = document.querySelector('.top-content .text-content:nth-of-type(2) h4');
secondH4Content.textContent = 'About';

const thirdH4Content = document.querySelector('.bottom-content .text-content:nth-of-type(1) h4');
thirdH4Content.textContent = 'Services';

const fourthH4Content = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4');
fourthH4Content.textContent = 'Product';

const fifthH4Content = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4');
fifthH4Content.textContent = 'Vision';


// ------------- PARAGRAPHS -----------------

const firstParagraph = document.querySelector('.top-content .text-content:nth-of-type(1) p');
firstParagraph.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const secondParagraph = document.querySelector('.top-content .text-content:nth-of-type(2) p');
secondParagraph.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const thirdParagraph = document.querySelector('.bottom-content .text-content:nth-of-type(1) p');
thirdParagraph.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const fourthParagraph = document.querySelector('.bottom-content .text-content:nth-of-type(2) p');
fourthParagraph.textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const fifthParagraph = document.querySelector('.bottom-content .text-content:nth-of-type(3) p');
fifthParagraph.textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

// ---------------- CONTACT CONTENT -----------------
const contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = 'Contact Us'

const bottomParagraph1 = document.querySelector('.contact:nth-of-type(1) p');
bottomParagraph1.textContent = '123 Way 456 Street Somewhere, USA';

const bottomParagraph2 = document.querySelector('.contact:nth-of-type(2) p');
bottomParagraph2.textContent = '1 (888) 888-8888';

const bottomParagraph3 = document.querySelector('.contact:nth-of-type(3) p');
bottomParagraph3.textContent = 'sales@greatidea.io';

// ------------ ADDING NEW LINKS ---------------------

const newLinkSuggested1 = {
  href: '#',
  textContent: 'New Link 1',
}

const newLinkSuggested2 = {
  href: '#',
  textContent: 'New Link 2',
}

const newLink1 = document.createElement('a');
const newLink2 = document.createElement('a');

newLink1.href = newLinkSuggested1.href;
newLink2.href = newLinkSuggested2.href;
newLink1.textContent = newLinkSuggested1.textContent;
newLink2.textContent = newLinkSuggested2.textContent;

const nav = document.querySelector('nav');

nav.appendChild(newLink1);
nav.appendChild(newLink2);