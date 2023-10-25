import ads1 from "../assets/ads1.jpg";
import ads2 from "../assets/ads2.jpg";
import cardImg1 from "../assets/arr1.jpeg";
import cardImg2 from "../assets/arr2.jpeg";
import cardImg3 from "../assets/arr3.jpeg";
import cardImg4 from "../assets/arr4.jpeg";

import productImg1 from "../assets/pr1.jpeg";
import productImg2 from "../assets/pr2.jpeg";
import productImg3 from "../assets/pr3.jpeg";
import productImg4 from "../assets/pr4.jpeg";
import productImg5 from "../assets/pr5.jpeg";

import img1 from '../assets/bImg1.jpeg';
import img2 from '../assets/bImg2.jpeg';

import catImg1 from '../assets/aut/img01.jpg';
import catImg2 from '../assets/aut/img02.jpg';
import catImg3 from '../assets/aut/img03.jpg';
import catImg4 from '../assets/aut/img04.jpg';

// logo images

import logo1 from "../assets/logos/nike.png";
import logo2 from '../assets/logos/levis.png';
import logo3 from '../assets/logos/Polo.png';
import logo4 from '../assets/logos/puma.png';
import logo5 from '../assets/logos/hm.png';

// feedback images

import feedbackImg1 from '../assets/pics/profil1.png';
import feedbackImg2 from '../assets/pics/profil2.png';
import feedbackImg3 from '../assets/pics/profil3.png';







const adsImages = [{
    id: 1,
    cardTitle: 'Low Price',
    cardSubtitle: 'High Coziness',
    cardText: 'UP TO 50% OFF',
    cardLink: 'Explore Items',
    image: ads1
}, {
    id: 2,
    cardTitle: 'Beyoung Presents',
    cardSubtitle: 'Breezy Summer Style',
    cardText: 'UP TO 50% OFF',
    cardLink: 'Explore Items',
    image: ads2
}];


const cardInfo = [
    {
        id: 1,
        image: cardImg1,
        title: 'Knitted Joggers'
    },
    {
        id: 2,
        image: cardImg2,
        title: 'Full Sleeve'
    }, {
        id: 3,
        image: cardImg3,
        title: 'Active T-Shirt'
    }, {
        id: 4,
        image: cardImg4,
        title: 'Urban Shirts'
    }
];


const productInfo = [
    {
        id: 1,
        text: 'Hawaiian Shirts',
        text2: 'Dress up in summer vibe',
        text3: 'UP TO 50% OFF',
        btnProperty: 'border-white border-2',
        textColor: 'text-white',
        image: productImg1

    }, {
        id: 2,
        text: 'Printed T-Shirt',
        text2: 'New Designs Every Week',
        text3: 'UP TO 40% OFF',
        btnProperty: 'border-white border-2',
        textColor: 'text-white',
        image: productImg2
    }, {
        id: 3,
        text: 'Cargo Joggers',
        text2: 'Move with style & comfort',
        text3: 'UP TO 50% OFF',
        btnProperty: 'border-zinc-700 border-2',
        textColor: 'text-zinc-800',
        image: productImg3
    }, {
        id: 4,
        text: 'Urban Shirts',
        text2: 'Live in Confort',
        text3: 'FLAT 50% OFF',
        btnProperty: 'border-zinc-700 border-2',
        textColor: 'text-zinc-800',
        image: productImg4
    }, {
        id: 5,
        text: 'Oversized T-Shirt',
        text2: 'Street Style Icon',
        text3: 'FLAT 60% OFF',
        btnProperty: 'border-zinc-700 border-2',
        textColor: 'text-zinc-800',
        image: productImg5
    }

];

const bannerImage = [{
    id: 1,
    image: img1
}, {
    id: 2,
    image: img2
}];


const MenCategoriesImages = [{
    id: 1,
    title: 'Shirts',
    image: cardImg1


}, {
    id: 2,
    title: 'Printed T-Shirts',
    image: cardImg2


}, {
    id: 3,
    title: 'Plain T-Shirt',
    image: cardImg3


}, {
    id: 4,
    title: 'Polo T-Shirt',
    image: cardImg4


},];

const logoImages = [{
    id: 1,
    logo: logo1
}, {
    id: 2,
    logo: logo2
}, {
    id: 3,
    logo: logo3
}, {
    id: 4,
    logo: logo4
}, {
    id: 5,
    logo: logo5
},];

const footerLinks = [
    {
        title: 'Need Help',
        url: '',
        text: ['Contact Us ', 'Track Order ', 'Returns & Refunds ', 'FAQ\'S ', 'Career ']
    }, {
        title: 'Company',
        url: '',
        text: ['About Us ', 'euphoria Blog ', 'euphoriaston ', 'Collaboration ', 'Media ']
    }, {
        title: 'More Info',
        url: '',
        text: ['Term and Conditions ', 'Privacy Policy ', 'Shipping Policy ', 'Sitemap ']
    }, {
        title: 'Location',
        url: '',
        text: ['Support@euphoria.in ', 'Eklingpura Chouraha, Ahmedabad Main Road ', 'NH 8- Near Mahadev Hotel Udaipur, india- 313002 ']
    }
];


const feedback = [
    {
        id: 1,
        image: feedbackImg1,
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        startNumer: 4
    },
    {
        id: 2,
        image: feedbackImg2,
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        startNumer: 4
    },
    {
        id: 3,
        image: feedbackImg3,
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        startNumer: 4
    }
];



export { adsImages, cardInfo, productInfo, bannerImage, MenCategoriesImages, logoImages, footerLinks, feedback };