const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "beachfront-cottage"
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "downtown-loft"
    },
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "mountain-retreat"
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "tuscany-villa"
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "treehouse-getaway"
    },
    price: 800,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "beachfront-paradise"
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "lake-cabin"
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      filename: "luxury-penthouse"
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "ski-chalet"
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "safari-lodge"
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
  },
  {
  title: "Beachfront Villa in Bali",
  description: "Private tropical paradise with infinity pool, direct white-sand beach access, and traditional Balinese architecture surrounded by lush gardens.",
  image: {
    url: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFsaSUyMHZpbGxhfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    filename: "bali-villa"
  },
  price: 2800,
  location: "Uluwatu",
  country: "Indonesia"
},
{
  title: "Historic Tuscan Villa",
  description: "16th-century estate with vineyard views, olive groves, and authentic Italian frescoes. Includes private chef and wine tasting experiences.",
  image: {
    url: "https://images.unsplash.com/photo-1534614971-6be99a7a3ffd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHVzY2FuJTIwdmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    filename: "tuscan-villa"
  },
  price: 4200,
  location: "Chianti",
  country: "Italy"
},
{
  title: "Overwater Bungalow in Bora Bora",
  description: "Iconic crystal-clear lagoon accommodation with glass floor panels, private deck ladder to ocean, and 24-hour butler service.",
  image: {
    url: "https://images.unsplash.com/photo-1575380581672-dbd897342f4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9yYSUyMGJvcmElMjBidW5nYWxvd3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    filename: "bora-bungalow"
  },
  price: 5500,
  location: "Bora Bora",
  country: "French Polynesia"
},
{
  title: "Alpine Mountain Chalet",
  description: "Luxury timber-framed retreat with heated indoor pool, panoramic mountain views, and direct access to ski slopes in winter/hiking trails in summer.",
  image: {
    url: "https://images.unsplash.com/photo-1519861531473-9200262188bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWxwaW5lJTIwY2hhbGV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    filename: "alpine-chalet"
  },
  price: 3800,
  location: "Zermatt",
  country: "Switzerland"
},
{
  title: "Desert Oasis Retreat",
  description: "Ultra-modern architectural marvel in the desert with private oasis pool, stargazing deck, and panoramic desert vistas from floor-to-ceiling windows.",
  image: {
    url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzZXJ0JTIwb2FzaXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    filename: "desert-oasis"
  },
  price: 3200,
  location: "Scottsdale",
  country: "United States"
},
{
  title: "Private Island Sanctuary",
  description: "Exclusive 12-acre Caribbean island with multiple villas, personal staff, water sports center, and untouched coral reefs just offshore.",
  image: {
    url: "https://images.unsplash.com/photo-1545156521-77bd85671d30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJpdmF0ZSUyMGlzbGFuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    filename: "private-island"
  },
  price: 18500,
  location: "Exuma Cays",
  country: "Bahamas"
},
{
  title: "Kyoto Traditional Machiya",
  description: "Exquisitely restored wooden townhouse featuring Zen gardens, tatami meditation rooms, and authentic tea ceremony space in historic district.",
  image: {
    url: "https://images.unsplash.com/photo-1591946614720-90a587da4a36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a3lvdG8lMjBtYWNoaXlhfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    filename: "kyoto-machiya"
  },
  price: 2900,
  location: "Gion District",
  country: "Japan"
},
{
  title: "Cliffside Santorini Cave House",
  description: "Whitewashed volcanic cave dwelling with caldera views, private infinity pool carved into cliffs, and sunset viewing terrace.",
  image: {
    url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2FudG9yaW5pJTIwY2F2ZSUyMGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    filename: "santorini-cave"
  },
  price: 4100,
  location: "Oia",
  country: "Greece"
},
{
  title: "Rainforest Treehouse Resort",
  description: "Elevated luxury canopy suites connected by suspension bridges, featuring outdoor rainforest showers and private balconies overlooking waterfalls.",
  image: {
    url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbmZvcmVzdCUyMHRyZWVob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    filename: "rainforest-treehouse"
  },
  price: 2300,
  location: "Monteverde",
  country: "Costa Rica"
},
{
  title: "Arctic Glass Igloo Resort",
  description: "Thermal glass-domed suites for Northern Lights viewing from bed, including reindeer sleigh rides and ice fishing experiences.",
  image: {
    url: "https://images.unsplash.com/photo-1615910553567-9c0d423e5e9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJjdGljJTIwaWdsb298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    filename: "arctic-igloo"
  },
  price: 3700,
  location: "Rovaniemi",
  country: "Finland"
},{
  title: "Beachfront Villa in Bali",
  description: "Private tropical paradise with infinity pool, direct white-sand beach access, and traditional Balinese architecture surrounded by lush gardens.",
  image: {
    url: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFsaSUyMHZpbGxhfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    filename: "bali-villa"
  },
  price: 2800,
  location: "Uluwatu",
  country: "Indonesia"
},
{
  title: "Historic Tuscan Villa",
  description: "16th-century estate with vineyard views, olive groves, and authentic Italian frescoes. Includes private chef and wine tasting experiences.",
  image: {
    url: "https://images.unsplash.com/photo-1534614971-6be99a7a3ffd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHVzY2FuJTIwdmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    filename: "tuscan-villa"
  },
  price: 4200,
  location: "Chianti",
  country: "Italy"
},
{
  title: "Overwater Bungalow in Bora Bora",
  description: "Iconic crystal-clear lagoon accommodation with glass floor panels, private deck ladder to ocean, and 24-hour butler service.",
  image: {
    url: "https://images.unsplash.com/photo-1575380581672-dbd897342f4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9yYSUyMGJvcmElMjBidW5nYWxvd3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    filename: "bora-bungalow"
  },
  price: 5500,
  location: "Bora Bora",
  country: "French Polynesia"
},
{
  title: "Alpine Mountain Chalet",
  description: "Luxury timber-framed retreat with heated indoor pool, panoramic mountain views, and direct access to ski slopes in winter/hiking trails in summer.",
  image: {
    url: "https://images.unsplash.com/photo-1519861531473-9200262188bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWxwaW5lJTIwY2hhbGV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    filename: "alpine-chalet"
  },
  price: 3800,
  location: "Zermatt",
  country: "Switzerland"
},
{
  title: "Desert Oasis Retreat",
  description: "Ultra-modern architectural marvel in the desert with private oasis pool, stargazing deck, and panoramic desert vistas from floor-to-ceiling windows.",
  image: {
    url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzZXJ0JTIwb2FzaXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    filename: "desert-oasis"
  },
  price: 3200,
  location: "Scottsdale",
  country: "United States"
},
{
  title: "Private Island Sanctuary",
  description: "Exclusive 12-acre Caribbean island with multiple villas, personal staff, water sports center, and untouched coral reefs just offshore.",
  image: {
    url: "https://images.unsplash.com/photo-1545156521-77bd85671d30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJpdmF0ZSUyMGlzbGFuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    filename: "private-island"
  },
  price: 18500,
  location: "Exuma Cays",
  country: "Bahamas"
},
{
  title: "Kyoto Traditional Machiya",
  description: "Exquisitely restored wooden townhouse featuring Zen gardens, tatami meditation rooms, and authentic tea ceremony space in historic district.",
  image: {
    url: "https://images.unsplash.com/photo-1591946614720-90a587da4a36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a3lvdG8lMjBtYWNoaXlhfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    filename: "kyoto-machiya"
  },
  price: 2900,
  location: "Gion District",
  country: "Japan"
},
{
  title: "Cliffside Santorini Cave House",
  description: "Whitewashed volcanic cave dwelling with caldera views, private infinity pool carved into cliffs, and sunset viewing terrace.",
  image: {
    url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2FudG9yaW5pJTIwY2F2ZSUyMGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    filename: "santorini-cave"
  },
  price: 4100,
  location: "Oia",
  country: "Greece"
},
{
  title: "Rainforest Treehouse Resort",
  description: "Elevated luxury canopy suites connected by suspension bridges, featuring outdoor rainforest showers and private balconies overlooking waterfalls.",
  image: {
    url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbmZvcmVzdCUyMHRyZWVob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    filename: "rainforest-treehouse"
  },
  price: 2300,
  location: "Monteverde",
  country: "Costa Rica"
},
{
  title: "Arctic Glass Igloo Resort",
  description: "Thermal glass-domed suites for Northern Lights viewing from bed, including reindeer sleigh rides and ice fishing experiences.",
  image: {
    url: "https://images.unsplash.com/photo-1615910553567-9c0d423e5e9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJjdGljJTIwaWdsb298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    filename: "arctic-igloo"
  },
  price: 3700,
  location: "Rovaniemi",
  country: "Finland"
},
{
  title: "Modern Apartment in Tokyo",
  description:
    "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  price: 2000,
  location: "Tokyo",
  country: "Japan",
},
{
  title: "Lakefront Cabin in New Hampshire",
  description:
    "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  },
  price: 1200,
  location: "New Hampshire",
  country: "United States",
},
{
  title: "Luxury Villa in the Maldives",
  description:
    "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  price: 6000,
  location: "Maldives",
  country: "Maldives",
},
{
  title: "Ski Chalet in Aspen",
  description:
    "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  },
  price: 4000,
  location: "Aspen",
  country: "United States",
},
{
  title: "Secluded Beach House in Costa Rica",
  description:
    "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  price: 1800,
  location: "Costa Rica",
  country: "Costa Rica",
},
];

module.exports = { data: sampleListings };