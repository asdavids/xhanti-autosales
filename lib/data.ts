export interface Car {
  id: string;
  slug: string;
  name: string;
  make: string;
  year: number;
  price: number;
  priceZMW: number;
  monthlyPayment: string;
  mileage: string;
  transmission: string;
  fuelType: string;
  condition: "New" | "Used";
  bodyType: string;
  featured: boolean;
  image: string;
  images?: string[  {
    id: "4",
    slug: "lexus-lx600-2023",
    name: "Lexus LX600 2023",
    make: "Lexus",
    year: 2023,
    price: 145000,
    priceZMW: 3915000,
    monthlyPayment: "Negotiable",
    mileage: "15,000 km",
    transmission: "Automatic",
    fuelType: "Petrol",
    condition: "Used",
    bodyType: "SUV",
    featured: true,
    image: "/lx600-1.jpg",
    images: ["/lx600-1.jpg", "/lx600-2.jpg", "/lx600-3.jpg", "/lx600-4.jpg", "/lx600-5.jpg", "/lx600-6.jpg", "/lx600-7.jpg", "/lx600-8.jpg", "/lx600-9.jpg", "/lx600-10.jpg", "/lx600-11.jpg", "/lx600-12.jpg", "/lx600-13.jpg"],
    imageAlt: "Lexus LX600 2023",
    description: "Immaculate 2023 Lexus LX600 in pearl white. 7-seater luxury SUV with tan leather interior, panoramic sunroof, rear entertainment screens, and cool box. Unregistered, duty paid. Serious buyers only.",
    features: ["3.5L Twin-Turbo Petrol V6", "Automatic Transmission", "15,000 km Only", "7-Seater", "Panoramic Sunroof", "Rear Entertainment Screens", "Cool Box", "Tan Leather Interior", "Apple CarPlay", "Wireless Charger", "Heads-Up Display", "Height Control", "Unreg Duty Paid"],
  },
];
  imageAlt?: string;
  description?: string;
  features?: string[];
  sold?: boolean;
}

export const cars: Car[] = [
  {
    id: "1",
    slug: "lexus-lx-500d-2023",
    name: "Lexus LX 500d 2023",
    make: "Lexus",
    year: 2023,
    price: 152000,
    priceZMW: 4104000,
    monthlyPayment: "Negotiable",
    mileage: "10,900 km",
    transmission: "10-Speed Automatic",
    fuelType: "Diesel",
    condition: "Used",
    bodyType: "SUV",
    featured: true,
    image: "/lexus-1.jpeg",
    images: ["/lexus-1.jpeg", "/lexus-2.jpeg", "/lexus-3.jpeg", "/lexus-4.jpeg", "/lexus-5.jpeg", "/lexus-6.jpeg"],
    imageAlt: "Lexus LX 500d 2023",
    description: "Luxury meets power in this top-of-the-range SUV. Clean, low mileage, and fully loaded for comfort and performance. ZRA & Interpol Cleared. Serious buyers only.",
    features: ["3.3L Twin-Turbo Diesel V6", "10-Speed Automatic", "Only 10,900 km", "Black Leather Interior", "Heated & Cooled Seats", "Heads-Up Display", "Lane Assist", "Height Control", "Heated Steering Wheel", "ZRA & Interpol Cleared"],
  },
  {
    id: "2",
    slug: "mazda-cx-5-2017",
    name: "Mazda CX-5 2017",
    make: "Mazda",
    year: 2017,
    price: 12500,
    priceZMW: 340000,
    monthlyPayment: "Negotiable",
    mileage: "101,989 km",
    transmission: "Automatic",
    fuelType: "Diesel",
    condition: "Used",
    bodyType: "SUV",
    featured: true,
    image: "/mazda-1.jpg",
    images: ["/mazda-1.jpg", "/mazda-2.jpg", "/mazda-3.jpg", "/mazda-4.jpg", "/mazda-5.jpg"],
    imageAlt: "Mazda CX-5 2017",
    description: "Clean and well-maintained 2017 Mazda CX-5 in striking red. Diesel engine with low running costs, packed with premium features. Neat condition inside and out.",
    features: ["2.2L Diesel Engine", "Automatic Transmission", "Bose Sound System", "Dual Zone Climate Control", "Heads-Up Display", "Lane Assist", "Black Interior", "Neat & Clean Condition"],
  },
  {
    id: "3",
    slug: "land-rover-defender-2023",
    name: "Land Rover Defender 110 2023",
    make: "Land Rover",
    year: 2023,
    price: 103000,
    priceZMW: 2781000,
    monthlyPayment: "Negotiable",
    mileage: "21,000 km",
    transmission: "Automatic",
    fuelType: "Diesel",
    condition: "Used",
    bodyType: "SUV",
    featured: true,
    image: "/defender-4.jpg",
    images: ["/defender-4.jpg", "/defender-5.jpg", "/defender-3.jpg", "/defender-2.jpg", "/defender-1.jpg"],
    imageAlt: "Land Rover Defender 110 2023",
    description: "Stunning 2023 Land Rover Defender 110 D300 in two-tone with black interior. Fully loaded with premium upgrades. Unreg, duty paid, fully serviced.",
    features: ["D300 Diesel Engine", "Panoramic Sunroof", "Heads-Up Display", "Meridian Sound System", "Inbuilt Fridge", "Wireless Charger", "22\" Brand New Rims", "Urban Front Lip", "Staircase", "Fully Serviced", "Unreg Duty Paid"],
  },
];

export const reviews = [
  { id: 1, text: "Banange, I found my dream car here at a fair price. The team was honest and helpful throughout. Highly recommend Xhanti AutoSales!", author: "Chanda Mutale, Lusaka", rating: 5 },
  { id: 2, text: "Best car buying experience in Zambia. No pressure, transparent pricing, and they helped with all the paperwork. Will come back!", author: "Mwewa Kapata, Kitwe", rating: 5 },
  { id: 3, text: "I bought my Mazda from here and it was exactly as described. Clean car, honest people. Ndiyamike kwambiri!", author: "Thandiwe Phiri, Lusaka", rating: 5 },
  { id: 4, text: "Good selection of quality cars. The WhatsApp response was fast and the viewing was well organized. Great experience overall.", author: "Brian Mwale, Ndola", rating: 4 },
];

export const dealerInfo = {
  name: "Xhanti AutoSales",
  address: "54 Zambezi Road",
  city: "Lusaka, Zambia",
  phone: "+260 77 229 7712",
  whatsapp: "+260 96 118 5620",
  hours: "Mon-Fri: 8AM-6PM | Sat: 8AM-5PM | Sun: 10AM-4PM",
};
