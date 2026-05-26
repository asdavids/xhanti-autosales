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
  thumbnail: string;
  images?: string[];
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
    image: "/lexus-1.webp",
    thumbnail: "/lexus-1-thumb.webp",
    images: ["/lexus-1.webp", "/lexus-2.webp", "/lexus-3.webp", "/lexus-4.webp", "/lexus-5.webp", "/lexus-6.webp"],
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
    image: "/mazda-1.webp",
    thumbnail: "/mazda-1-thumb.webp",
    images: ["/mazda-1.webp", "/mazda-2.webp", "/mazda-3.webp", "/mazda-4.webp", "/mazda-5.webp"],
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
    image: "/defender-4.webp",
    thumbnail: "/defender-4-thumb.webp",
    images: ["/defender-4.webp", "/defender-5.webp", "/defender-3.webp", "/defender-2.webp", "/defender-1.webp"],
    imageAlt: "Land Rover Defender 110 2023",
    description: "Stunning 2023 Land Rover Defender 110 D300 in two-tone with black interior. Fully loaded with premium upgrades. Unreg, duty paid, fully serviced.",
    features: ["D300 Diesel Engine", "Panoramic Sunroof", "Heads-Up Display", "Meridian Sound System", "Inbuilt Fridge", "Wireless Charger", "22\" Brand New Rims", "Urban Front Lip", "Staircase", "Fully Serviced", "Unreg Duty Paid"],
  },
  {
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
    image: "/lx600-1.webp",
    thumbnail: "/lx600-1-thumb.webp",
    images: ["/lx600-1.webp", "/lx600-2.webp", "/lx600-3.webp", "/lx600-4.webp", "/lx600-5.webp", "/lx600-6.webp", "/lx600-7.webp", "/lx600-8.webp", "/lx600-9.webp", "/lx600-10.webp", "/lx600-11.webp", "/lx600-12.webp", "/lx600-13.webp"],
    imageAlt: "Lexus LX600 2023",
    description: "Immaculate 2023 Lexus LX600 in pearl white. 7-seater luxury SUV with tan leather interior, panoramic sunroof, rear entertainment screens, and cool box. Unregistered, duty paid. Serious buyers only.",
    features: ["3.5L Twin-Turbo Petrol V6", "Automatic Transmission", "15,000 km Only", "7-Seater", "Panoramic Sunroof", "Rear Entertainment Screens", "Cool Box", "Tan Leather Interior", "Apple CarPlay", "Wireless Charger", "Heads-Up Display", "Height Control", "Unreg Duty Paid"],
  },
  {
    id: "5",
    slug: "mercedes-gle300d-2020",
    name: "Mercedes-Benz GLE300d 2020",
    make: "Mercedes-Benz",
    year: 2020,
    price: 65000,
    priceZMW: 1755000,
    monthlyPayment: "Negotiable",
    mileage: "82,532 km",
    transmission: "Automatic",
    fuelType: "Diesel",
    condition: "Used",
    bodyType: "SUV",
    featured: true,
    image: "/gle300d-1.webp",
    thumbnail: "/gle300d-1-thumb.webp",
    images: ["/gle300d-1.webp", "/gle300d-2.webp", "/gle300d-3.webp", "/gle300d-4.webp", "/gle300d-5.webp", "/gle300d-6.webp", "/gle300d-7.webp", "/gle300d-8.webp", "/gle300d-9.webp", "/gle300d-10.webp", "/gle300d-11.webp"],
    imageAlt: "Mercedes-Benz GLE300d 2020",
    description: "Well-maintained 2020 Mercedes-Benz GLE300d 4MATIC in iridium silver. 2.0L diesel engine with low fuel consumption, AMG styling pack, panoramic sunroof, and full black leather interior. Located in Lusaka.",
    features: ["2.0L Diesel Engine", "9-Speed Automatic", "4MATIC All-Wheel Drive", "AMG Line Package", "Panoramic Sunroof", "Black Leather Interior", "MBUX Infotainment", "Digital Instrument Cluster", "Ambient Lighting", "Rear AC Vents", "Lane Assist", "Blind Spot Monitoring"],
  },
  {
    id: "6",
    slug: "toyota-prado-vxl-2022",
    name: "Toyota Prado VX-L 2022",
    make: "Toyota",
    year: 2022,
    price: 73000,
    priceZMW: 1971000,
    monthlyPayment: "Negotiable",
    mileage: "53,000 km",
    transmission: "Automatic",
    fuelType: "Diesel",
    condition: "Used",
    bodyType: "SUV",
    featured: true,
    image: "/prado-1.webp",
    thumbnail: "/prado-1-thumb.webp",
    images: ["/prado-1.webp", "/prado-2.webp", "/prado-3.webp", "/prado-4.webp"],
    imageAlt: "Toyota Prado VX-L 2022",
    description: "Immaculate 2022 Toyota Land Cruiser Prado VX-L in pearl white. 2.8L GD-6 diesel engine with 4x4 capability. Fully loaded with premium comfort and safety features. Located in Lusaka.",
    features: ["2.8L GD-6 Diesel Engine", "Automatic 4x4", "Leather Heated & Cooled Seats", "Panoramic Sunroof", "360° Camera", "Pre-Collision Assist", "Lane Assist", "Cooler Box", "Rear Spare Tyre", "Tow Bar", "Premium Alloy Wheels"],
  },
  {
    id: "7",
    slug: "range-rover-velar-2019",
    name: "Range Rover Velar R-Dynamic 2019",
    make: "Land Rover",
    year: 2019,
    price: 45000,
    priceZMW: 1215000,
    monthlyPayment: "Negotiable",
    mileage: "59,546 km",
    transmission: "Automatic",
    fuelType: "Diesel",
    condition: "Used",
    bodyType: "SUV",
    featured: true,
    image: "/velar-1.webp",
    thumbnail: "/velar-1-thumb.webp",
    images: ["/velar-1.webp", "/velar-2.webp", "/velar-3.webp", "/velar-4.webp", "/velar-5.webp", "/velar-6.webp", "/velar-7.webp", "/velar-8.webp", "/velar-9.webp", "/velar-10.webp", "/velar-11.webp"],
    imageAlt: "Range Rover Velar R-Dynamic 2019",
    description: "Stunning 2019 Range Rover Velar R-Dynamic in white with tan leather interior. 3.0L diesel engine, Meridian sound system, panoramic moonroof. Unregistered, duty paid. Located in Lusaka.",
    features: ["3.0L Diesel Engine", "Automatic Transmission", "R-Dynamic Spec", "Meridian Sound System", "Panoramic Moon Roof", "Tan Leather Interior", "Dual Touchscreen Infotainment", "Digital Instrument Cluster", "Flush Door Handles", "22\" Alloy Wheels", "Unreg Duty Paid"],
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
