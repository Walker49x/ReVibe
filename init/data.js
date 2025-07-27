let data = [
  {
    title: 'Luxurious Apartment',
    description: 'Spacious and modern apartment with stunning views.',
    price: getRandomPrice(10000, 15000),
    image : {
      filename: "listingImage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    location: 'City Center',
    country: 'USA',
    category : "rooms",
  },
  {
    title: 'Cozy Cottage',
    description: 'Charming cottage in a peaceful countryside setting.',
    price: getRandomPrice(10000, 15000),
    image : {
      filename: "listingImage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },      
    location: 'Rural Retreat',
    country: 'Canada',
    category : "rooms",
  },
  {
    title: 'Beachfront Villa',
    description: 'Elegant villa with direct access to the beach.',
    price: getRandomPrice(10000, 15000),
    image : {
      filename: "listingImage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    location: 'Ocean Paradise',
    country: 'Spain',
    category : "rooms",
  },
  {
    title: 'Mountain View Cabin',
    description: 'Rustic cabin with breathtaking mountain views.',
    price: getRandomPrice(10000, 15000),
    image : {
      filename: "listingImage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    location: 'Alpine Hideaway',
    country: 'Switzerland',
    category : "rooms",
  },
  {
    title: 'Downtown Loft',
    description: 'Trendy loft in the heart of the city.',
    price: getRandomPrice(10000, 15000),
    image : {
      filename: "listingImage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    location: 'Urban Hub',
    country: 'Germany',
    category : "rooms",
  },
  {
    title: 'Serenity Ranch',
    description: 'Tranquil ranch with rolling hills and open skies.',
    price: getRandomPrice(10000, 15000),
    image : {
      filename: "listingImage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    location: 'Countryside Haven',
    country: 'Australia',
    category : "rooms",
  },
  {
    title: 'Historic Mansion',
    description: 'Grand mansion with a rich history and classic architecture.',
    price: getRandomPrice(10000, 15000),
    image : {
      filename: "listingImage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    location: 'Heritage District',
    country: 'Italy',
    category : "rooms",
  },
  {
    title: 'Lakeview Retreat',
    description: 'Cozy retreat with panoramic views of the lake.',
    price: getRandomPrice(10000, 15000),
    image : {
      filename: "listingImage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    location: 'Lakeside Oasis',
    country: 'Canada',
    category : "rooms",
  },
  {
    title: 'Skyline Penthouse',
    description: 'Luxury penthouse with floor-to-ceiling windows and city skyline views.',
    price: getRandomPrice(10000, 15000),
    image : {
      filename: "listingImage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    location: 'Metropolitan Heights',
    category : "rooms",
    country: 'USA',
  },
  {
    title: 'Riverside Bungalow',
    description: 'Quaint bungalow nestled by the riverbank.',
    price: getRandomPrice(10000, 15000),
    image : {
      filename: "listingImage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    location: 'Riverfront Tranquility',
    country: 'France',
    category : "rooms",
  },
  {
      title: 'Refurbished Smartphone',
      description: 'Gently used smartphone with updated software and accessories.',
      price: getRandomPrice(200, 500),
      image : {
        filename: "listingImage",
        url: "https://images.unsplash.com/photo-1603184017968-953f59cd2e37?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      location: 'Tech District',
      country: 'USA',
      category : "mobile",
    },
    {
      title: 'Apple Smartphone',
      description: 'Gently used smartphone with updated software and accessories.',
      price: getRandomPrice(200, 500),
      image : {
        filename: "listingImage",
        url: "https://images.unsplash.com/photo-1502096472573-eaac515392c6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      location: 'Tech District',
      country: 'USA',
      category : "mobile",
    },
    {
      title: 'Samsung Smartphone',
      description: 'Gently used smartphone with updated software and accessories.',
      price: getRandomPrice(200, 500),
      image : {
        filename: "listingImage",
        url: "https://images.unsplash.com/photo-1506777775294-c79f090bac1e?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      location: 'Tech District',
      country: 'USA',
      category : "mobile",
    },
    {
      title: 'Second-hand Laptop',
      description: 'Reliable laptop with upgraded RAM and storage capacity.',
      price: getRandomPrice(300, 800),
      image : {
        filename: "listingImage",
        url: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      location: 'Electronics Market',
      country: 'Canada',
      category : "digital",
    },
    {
      title: 'Pre-owned Designer Watch',
      description: 'Stylish designer watch in excellent condition.',
      price: getRandomPrice(100, 300),
      image : {
        filename: "listingImage",
        url: "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      location: 'Fashion District',
      country: 'Italy',
      category : "digital",
    },
    {
      title: 'Used DSLR Camera Kit',
      description: 'Professional camera kit with lenses and accessories.',
      price: getRandomPrice(400, 900),
      image : {
        filename: "listingImage",
        url: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      location: 'Photography Center',
      country: 'Germany',
      category : "digital",
    },
    {
      title: 'Vintage Vinyl Records Collection',
      description: 'Classic vinyl records from various genres in good condition.',
      price: getRandomPrice(50, 150),
      image : {
        filename: "listingImage",
        url: "https://images.unsplash.com/photo-1584980959228-79409574bef2?q=80&w=1792&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      location: 'Music Alley',
      country: 'UK',
      category : "home",
    },
    {
      title: 'Reconditioned Power Tools Set',
      description: 'Durable power tools set for DIY projects.',
      price: getRandomPrice(150, 350),
      image : {
        filename: "listingImage",
        url : "https://images.unsplash.com/photo-1546827209-a218e99fdbe9?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      location: 'Hardware Emporium',
      country: 'USA',
      category : "digital",
    },
    {
      title: 'Gaming Console Bundle',
      description: 'Used gaming console with controllers and popular game titles.',
      price: getRandomPrice(250, 600),
      image : {
        filename: "listingImage",
        url: "https://images.unsplash.com/flagged/photo-1580234748052-2c23d8b27a71?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      location: 'Gaming Hub',
      country: 'Japan',
      category : "digital",
    },
    {
      title: 'Vintage Bicycle',
      description: 'Classic bicycle with a retro design for urban commuting.',
      price: getRandomPrice(100, 250),
      image : {
        filename: "listingImage",
        url: "https://images.unsplash.com/photo-1483383490964-8335c18b6666?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      location: 'Cycling Community',
      country: 'Netherlands',
      category : "vehicle",
    },
    {
      title: 'Antique Furniture Set',
      description: 'Elegant furniture set with timeless design and craftsmanship.',
      price: getRandomPrice(300, 700),
      image : {
        filename: "listingImage",
        url: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      location: 'Antiques Market',
      country: 'France',
      category : "home",
    },
    {
      title: 'Used Book Collection',
      description: 'Assorted books in good condition covering various genres.',
      price: getRandomPrice(20, 80),
      image : {
        filename: "listingImage",
        url: "https://images.unsplash.com/photo-1533669955142-6a73332af4db?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      location: 'Book Nook',
      country: 'Canada',
      category : "trending",
    },
    {
      title: 'Smart Refrigerator',
      description: 'Energy-efficient refrigerator with smart technology and ample storage.',
      price: getRandomPrice(800, 1500),
      image : {
        filename: "listingImage",
        url: "https://images.unsplash.com/photo-1629042306548-1bfb25a3ff78?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      location: 'Kitchen Appliances Center',
      country: 'USA',
      category : "home",
    },
    {
      title: 'Front Load Washing Machine',
      description: 'High-capacity washing machine with multiple wash cycles and quick settings.',
      price: getRandomPrice(500, 1000),
      image : {
        filename: "listingImage",
        url:"https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      location: 'Appliance Superstore',
      country: 'Canada',
      category : "home",
    },
    {
      title: 'Multifunctional Microwave Oven',
      description: 'Versatile microwave oven with grill and convection cooking options.',
      price: getRandomPrice(100, 300),
      image : {
        filename: "listingImage",
        url:"https://images.unsplash.com/photo-1626143508000-4b5904e5e84a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      location: 'Home Electronics Mall',
      country: 'Germany',
      category : "home",
    },
    {
      title: 'Robot Vacuum Cleaner',
      description: 'Smart vacuum cleaner with mapping technology for efficient cleaning.',
      price: getRandomPrice(200, 500),
      image : {
        filename: "listingImage",
        url:"https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      location: 'Smart Home Innovations',
      country: 'Japan',
      category : "home",
    },
    {
      title: 'Air Purifier with HEPA Filter',
      description: 'High-performance air purifier with HEPA filter for clean indoor air.',
      price: getRandomPrice(150, 400),
      image : {
        filename: "listingImage",
        url:"https://images.unsplash.com/photo-1484632152040-840235adc262?q=80&w=1963&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      location: 'Home Wellness Store',
      country: 'Australia',
      category : "digital",
    },
    {
      title: 'Programmable Coffee Maker',
      description: 'Coffee maker with programmable settings for brewing customized coffee.',
      price: getRandomPrice(50, 150),
      image : {
        filename: "listingImage",
        url:"https://images.unsplash.com/photo-1432107294469-414527cb5c65?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      location: 'Coffee Lovers Bazaar',
      country: 'Italy',
      category : "home",
    },
    {
      title: 'Smart Thermostat',
      description: 'Intelligent thermostat with remote control and energy-saving features.',
      price: getRandomPrice(100, 250),
      image : {
        filename: "listingImage",
        url:"https://images.unsplash.com/photo-1634029859957-01b6d9139e2a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      location: 'Home Automation Hub',
      country: 'UK',
      category : "digital",
    },
    {
      title: 'Blender with Multiple Speeds',
      description: 'Powerful blender with multiple speed options for smooth blending.',
      price: getRandomPrice(30, 80),
      image : {
        filename: "listingImage",
        url:"https://images.unsplash.com/photo-1585237672814-8f85a8118bf6?q=80&w=1910&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      location: 'Kitchen Gadgets Depot',
      country: 'France',
      category : "home",
    },
    {
      title: 'Toaster Oven with Broil Function',
      description: 'Compact toaster oven with broil function for versatile cooking.',
      price: getRandomPrice(40, 100),
      image : {
        filename: "listingImage",
        url:"https://images.unsplash.com/photo-1585659722983-3a675dabf23d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      location: 'Kitchen Appliances Corner',
      country: 'Spain',
      category : "home",
    },
    {
      title: 'Cordless Vacuum Cleaner',
      description: 'Convenient cordless vacuum cleaner for hassle-free cleaning.',
      price: getRandomPrice(80, 200),
      image : {
        filename: "listingImage",
        url:"https://images.unsplash.com/photo-1603618090561-412154b4bd1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      location: 'Cleaning Supplies Emporium',
      country: 'USA',
      category : "home",
    },
    {
      title: 'Professional Chef Knife Set',
      description: 'High-quality knife set for professional and home kitchen use.',
      image : {
        filename: "listingImage",
        url:"https://images.unsplash.com/photo-1507648154934-f230d5bd6942?q=80&w=1995&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      price: getRandomPrice(100, 300),
      location: 'Culinary Essentials Store',
      country: 'USA',
      category : "kitchen",
    },
    {
      title: 'Stainless Steel Cookware Set',
      description: 'Durable and versatile cookware set with stainless steel construction.',
      image : {
        filename: "listingImage",
        url:"https://images.unsplash.com/photo-1584990347449-fd98bc063110?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      price: getRandomPrice(200, 600),
      location: 'Kitchenware Emporium',
      country: 'Canada',
      category : "kitchen",
    },
    {
      title: 'Smart Instant Pot',
      description: 'Multi-functional Instant Pot with smart cooking features for quick meals.',
      image : {
        filename: "listingImage",
        url:"https://images.unsplash.com/photo-1518737003272-dac7c4760d5e?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      price: getRandomPrice(80, 150),
      location: 'Smart Kitchen Appliances Center',
      country: 'Germany',
      category : "kitchen",
    },
    {
      title: 'Espresso Machine with Grinder',
      description: 'Espresso machine with built-in grinder for fresh coffee at home.',
      image : {
        filename: "listingImage",
        url: "https://images.unsplash.com/photo-1620807773206-49c1f2957417?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      price: getRandomPrice(300, 800),
      location: 'Coffee & Kitchen Gadgets Hub',
      country: 'Italy',
      category : "kitchen",
    },
    {
      title: 'Digital Food Scale',
      description: 'Accurate and easy-to-use digital scale for precise cooking measurements.',
      image : {
        filename: "listingImage",
        url: "https://images.unsplash.com/photo-1588315028888-0e1da9fa090f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      price: getRandomPrice(20, 50),
      location: 'Kitchen Accessories Depot',
      country: 'UK',
      category : "kitchen",
    },
    {
      title: 'Silicone Baking Mat Set',
      description: 'Non-stick silicone baking mats for easy and mess-free baking.',
      image : {
        filename: "listingImage",
        url: "https://images.unsplash.com/photo-1501924497965-792fefaea3dc?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      price: getRandomPrice(15, 40),
      location: 'Bakery Supplies Outlet',
      country: 'France',
      category : "kitchen",
    },
    {
      title: 'Mixer Grinder with Attachments',
      description: 'Powerful mixer grinder with various attachments for versatile kitchen tasks.',
      image : {
        filename: "listingImage",
        url: "https://images.unsplash.com/photo-1637029680169-8304d6a10816?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      price: getRandomPrice(50, 120),
      location: 'Appliance Supermart',
      country: 'Spain',
      category : "kitchen",
    },
    {
      title: 'Electric Kettle with Temperature Control',
      description: 'Electric kettle with temperature control for precise tea and coffee brewing.',
      image : {
        filename: "listingImage",
        url: "https://images.unsplash.com/photo-1615746363486-92cd8c5e0a90?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      price: getRandomPrice(30, 70),
      location: 'Tea & Coffee Appliances Corner',
      country: 'Japan',
      category : "kitchen",
    },
    {
      title: 'Compact Juicer',
      description: 'Compact juicer for extracting fresh and nutritious fruit juices.',
      image : {
        filename: "listingImage",
        url: "https://images.unsplash.com/photo-1599256631012-9c2b32bfa8bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      price: getRandomPrice(40, 100),  
      location: 'Healthy Living Kitchen Store',
      country: 'Australia',
      category : "kitchen",
    },
    {
      title: 'Premium Non-stick Pan Set',
      description: 'Non-stick pan set with premium coating for easy cooking and cleaning.',
      image : {
        filename: "listingImage",
        url: "https://images.unsplash.com/photo-1483383490964-8335c18b6666?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      price: getRandomPrice(60, 150),
      location: 'Kitchenware Boutique',
      country: 'USA',
      category : "kitchen",
    },
];

const taxation = () => {
  data = data.map((obj)=>({...obj, tax: (obj.price > 10000) ? 18 : 9}));
}

taxation();

function getRandomPrice(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {data : data};