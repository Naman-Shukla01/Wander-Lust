const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    geometry: { type: "Point", coordinates: [-118.7798, 34.0259] },
  },
  {
    title: "Modern Loft in Downtown",
    description: "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    geometry: { type: "Point", coordinates: [-74.006, 40.7128] },
  },
  {
    title: "Mountain Retreat",
    description: "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    geometry: { type: "Point", coordinates: [-106.8175, 39.1911] },
  },
  {
    title: "Historic Villa in Tuscany",
    description: "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    geometry: { type: "Point", coordinates: [11.2558, 43.7696] },
  },
  {
    title: "Secluded Treehouse Getaway",
    description: "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Portland",
    country: "United States",
    geometry: { type: "Point", coordinates: [-122.6765, 45.5231] },
  },
  {
    title: "Beachfront Paradise",
    description: "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    geometry: { type: "Point", coordinates: [-86.8515, 21.1619] },
  },
  {
    title: "Rustic Cabin by the Lake",
    description: "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    geometry: { type: "Point", coordinates: [-120.0438, 39.0968] },
  },
  {
    title: "Luxury Penthouse with City Views",
    description: "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    geometry: { type: "Point", coordinates: [-118.2437, 34.0522] },
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description: "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    geometry: { type: "Point", coordinates: [7.2275, 46.0961] },
  },
  {
    title: "Safari Lodge in the Serengeti",
    description: "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    geometry: { type: "Point", coordinates: [34.6857, -2.3333] },
  },
  {
    title: "Charming Countryside B&B",
    description: "Enjoy home-cooked breakfasts and peaceful countryside views in this lovely bed & breakfast.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1582719478212-2b53d9c1105f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 700,
    location: "Cotswolds",
    country: "United Kingdom",
    geometry: { type: "Point", coordinates: [-1.8433, 51.8337] },
  },
  {
    title: "Tropical Bungalow Hideaway",
    description: "Relax in a private tropical bungalow surrounded by lush gardens and palm trees.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Bali",
    country: "Indonesia",
    geometry: { type: "Point", coordinates: [115.1889, -8.4095] },
  },
  {
    title: "Snowy Mountain Lodge",
    description: "Cozy up by the fire after a day on the slopes in this snowy mountain lodge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Banff",
    country: "Canada",
    geometry: { type: "Point", coordinates: [-115.5720, 51.1784] },
  },
  {
    title: "Island Overwater Bungalow",
    description: "Sleep above the turquoise waters in a luxurious overwater bungalow. A dream vacation spot!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501117716987-c8f11d9f9135?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Bora Bora",
    country: "French Polynesia",
    geometry: { type: "Point", coordinates: [-151.7415, -16.5004] },
  },
  {
    title: "Modern Desert Villa",
    description: "Soak up the sun in this stylish and modern villa in the heart of the desert.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618221647081-6096b67d1c58?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Palm Springs",
    country: "United States",
    geometry: { type: "Point", coordinates: [-116.5453, 33.8303] },
  },
  {
    title: "Chic Apartment in Paris",
    description: "A stylish and comfortable apartment in the heart of Paris. Walk to cafes, shops, and landmarks.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600585154084-3f90a5fe3b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2600,
    location: "Paris",
    country: "France",
    geometry: { type: "Point", coordinates: [2.3522, 48.8566] },
  },
  {
    title: "Japanese Ryokan Experience",
    description: "Immerse yourself in traditional Japanese culture with a stay at this authentic ryokan.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600404299480-5765c2f682a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1700,
    location: "Kyoto",
    country: "Japan",
    geometry: { type: "Point", coordinates: [135.7681, 35.0116] },
  },
  {
    title: "Greek Island Villa",
    description: "Whitewashed walls and blue domes await you in this serene Greek island villa.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1549893083-e084f4b5185e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2800,
    location: "Santorini",
    country: "Greece",
    geometry: { type: "Point", coordinates: [25.4615, 36.3932] },
  },
  {
    title: "Ice Hotel Adventure",
    description: "Spend the night in a room made of ice and snow. A truly unique arctic experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1570901503812-b2c9b4edff73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 3200,
    location: "Jukkasjärvi",
    country: "Sweden",
    geometry: { type: "Point", coordinates: [20.6106, 67.8519] },
  },
  {
    title: "Jungle Eco-Lodge",
    description: "Connect with nature in this eco-friendly lodge deep in the Amazon rainforest.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Amazon Rainforest",
    country: "Brazil",
    geometry: { type: "Point", coordinates: [-60.025, -3.4653] },
  }
];


module.exports = { data: sampleListings };