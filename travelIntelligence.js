/**
 * Bharat Travel Intelligence & City Explorer Dataset
 * Rich profiles, local delicacies, top attractions, transit fare estimates, 
 * regional language translator, and digital survival apps for Indian destinations.
 */

(function() {
  'use strict';

  const TRAVEL_INTEL_DB = {
    "jaipur": {
      name: "Jaipur",
      state: "Rajasthan",
      tier: "Tier-1 Heritage City",
      bestSeason: "October to March (15°C – 25°C)",
      cultureSnapshot: "Known as the Pink City, Jaipur is renowned for royal Rajputana architecture, vibrant block-print textiles, and opulent palaces.",
      food: [
        { name: "Dal Baati Churma", type: "Signature Meal", spot: "LMB (Laxmi Misthan Bhandar), Johari Bazar", desc: "Baked wheat balls dipped in ghee served with spicy lentils and sweet churma." },
        { name: "Pyaaz Kachori", type: "Street Food", spot: "Rawat Misthan Bhandar, Station Road", desc: "Crispy golden fried pastry stuffed with spiced onion filling." },
        { name: "Ghevar & Mawa Kachori", type: "Sweet Delicacy", spot: "Sodhani Sweets, Janpath", desc: "Traditional disc-shaped sweet soaked in saffron sugar syrup." }
      ],
      attractions: [
        { name: "Amer Fort & Sheesh Mahal", category: "Heritage Landmark", timing: "8:00 AM – 5:30 PM", desc: "Majestic hilltop fort with mirror palace and panoramic lake views." },
        { name: "Hawa Mahal (Palace of Winds)", category: "Architectural Marvel", timing: "9:00 AM – 5:00 PM", desc: "953 honeycomb windows designed for royal women to observe street festivals." },
        { name: "Jantar Mantar", category: "UNESCO World Heritage", timing: "9:00 AM – 4:30 PM", desc: "World's largest stone sundial and astronomical instrument observatory." },
        { name: "Nahargarh Fort Sunset Point", category: "Nature Escape", timing: "10:00 AM – 10:00 PM", desc: "Overlooks the entire pink city illuminated at twilight." }
      ],
      transitFares: {
        autoRickshaw: "₹50 – ₹150 for 5 km",
        cityBus: "₹15 – ₹35 (Low-floor AC buses available)",
        trainSleeper: "₹280 – ₹450 (From Delhi/Mumbai)",
        train3AC: "₹750 – ₹1,200",
        flight: "₹2,500 – ₹4,800 (Jaipur International Airport JAI)",
        baggageAllowance: "Flight: 15 kg Check-in, 7 kg Cabin | Train: 40 kg Sleeper, 50 kg 3AC"
      },
      lingo: [
        { phrase: "Hello / Welcome", local: "Khamma Ghani (खम्मा घणी)", pronunciation: "Khum-mah Ghu-nee" },
        { phrase: "How much is this?", local: "Katra rupya ha? (कतरा रुपया है?)", pronunciation: "Kut-rah roop-yah hah?" },
        { phrase: "Very delicious!", local: "Bohut chokho chhe! (बोहत चोखो छे!)", pronunciation: "Boh-hoot choh-kho chhay" },
        { phrase: "Thank you", local: "Ram Ram / Dhanyawad", pronunciation: "Ruhm Ruhm" }
      ]
    },
    "delhi": {
      name: "Delhi / New Delhi",
      state: "Delhi NCR",
      tier: "Metropolitan Capital",
      bestSeason: "October to March (10°C – 22°C)",
      cultureSnapshot: "India's vibrant capital, blending Mughal history, imperial British avenues, and cutting-edge urban metro corridors.",
      food: [
        { name: "Chandni Chowk Paranthas", type: "Street Food", spot: "Paranthe Wali Gali, Old Delhi", desc: "Deep-fried stuffed breads with rabri, dry fruits, or spiced potatoes." },
        { name: "Butter Chicken & Naan", type: "Culinary Legend", spot: "Moti Mahal / Gulati, Pandara Road", desc: "Rich tomato-butter gravy with tender tandoori chicken chunks." },
        { name: "Chole Bhature", type: "Local Breakfast", spot: "Sita Ram Diwan Chand, Paharganj", desc: "Fluffy fried bread with spicy chickpea curry and tangy pickles." }
      ],
      attractions: [
        { name: "Red Fort (Lal Qila)", category: "UNESCO World Heritage", timing: "9:30 AM – 4:30 PM", desc: "Mughal sandstone fortress symbol of India's independence." },
        { name: "Qutub Minar Complex", category: "Ancient Heritage", timing: "7:00 AM – 5:00 PM", desc: "73-meter minaret surrounded by 4th-century iron pillar and ruins." },
        { name: "Humayun's Tomb", category: "Architectural Landmark", timing: "6:00 AM – 6:00 PM", desc: "Precursor to the Taj Mahal with Persian garden layout." },
        { name: "Lotus Temple & Akshardham", category: "Spiritual Marvel", timing: "9:30 AM – 6:00 PM", desc: "Luminous lotus architecture and grand cultural light show." }
      ],
      transitFares: {
        autoRickshaw: "Metered ₹30 minimum + ₹11/km",
        cityBus: "Delhi Metro: ₹10 – ₹60 (Fastest) | DTC Bus: ₹10 – ₹25",
        trainSleeper: "NDLS / DLI / NZM Hubs",
        train3AC: "Direct connectivity to all 36 States",
        flight: "IGIA Airport (DEL) Terminal 1, 2, 3",
        baggageAllowance: "Flight: 15 kg Check-in, 7 kg Cabin | Metro: 25 kg per person"
      },
      lingo: [
        { phrase: "Where is the Metro?", local: "Metro station kahan hai? (मेट्रो कहाँ है?)", pronunciation: "Meh-tro stuh-shun kuh-haan hai?" },
        { phrase: "How much by meter?", local: "Meter se chaloge? (मीटर से चलोगे?)", pronunciation: "Mee-tur say chul-oh-gay?" },
        { phrase: "Make it less spicy", local: "Mirch kam rakhna (मिर्च कम रखना)", pronunciation: "Mirch kum rukh-nah" },
        { phrase: "Thank you brother", local: "Shukriya bhai (शुक्रिया भाई)", pronunciation: "Shook-ree-yah bhaa-ee" }
      ]
    },
    "mumbai": {
      name: "Mumbai",
      state: "Maharashtra",
      tier: "Financial & Entertainment Hub",
      bestSeason: "November to February (20°C – 28°C)",
      cultureSnapshot: "The City of Dreams — home to Bollywood, Victorian Gothic architecture, Marine Drive, and unstoppable energy.",
      food: [
        { name: "Vada Pav", type: "Iconic Street Food", spot: "Ashok Vada Pav, Dadar / Aram, CST", desc: "Spiced potato dumpling in a bun served with fiery garlic chutneys." },
        { name: "Pav Bhaji", type: "Street Delicacy", spot: "Sardar Pav Bhaji, Tardeo / Cannon, CST", desc: "Mashed vegetable curry drenched in butter served with toasted buns." },
        { name: "Bombay Bhel Puri & Sev Puri", type: "Beach Snack", spot: "Girgaon Chowpatty / Juhu Beach", desc: "Tangy puffed rice salad with tamarind sauce and crispy puris." }
      ],
      attractions: [
        { name: "Gateway of India & Marine Drive", category: "Colonial Landmark", timing: "24/7 Access", desc: "Historic waterfront arch and Queen's Necklace promenade." },
        { name: "Elephanta Caves", category: "UNESCO Rock-Cut Art", timing: "9:00 AM – 5:00 PM (Ferry from Gateway)", desc: "5th-century rock-cut cave temples dedicated to Lord Shiva." },
        { name: "Chhatrapati Shivaji Terminus (CST)", category: "Victorian Gothic Architecture", timing: "24/7 Landmark", desc: "Grand railway terminus with gargoyles and stained glass." }
      ],
      transitFares: {
        autoRickshaw: "Metered ₹23 minimum (Suburbs only)",
        cityBus: "BEST Bus: ₹5 – ₹20 | Local Train: ₹5 – ₹35",
        trainSleeper: "Mumbai Central (MMCT) / CSMT Hub",
        train3AC: "Express trains to South & North India",
        flight: "Chhatrapati Shivaji Maharaj Airport (BOM)",
        baggageAllowance: "Flight: 15 kg Check-in, 7 kg Cabin | Local Train: Standard hand luggage"
      },
      lingo: [
        { phrase: "How much?", local: "Kiti jhale? / Kitna hua? (किती झाले?)", pronunciation: "Kee-tee jhaa-lay?" },
        { phrase: "Where to get Local Train?", local: "Local train kuthun bhetel? (लोकल ट्रेन कुठे मिळेल?)", pronunciation: "Loh-cul train koo-thoon bhay-tul?" },
        { phrase: "Awesome / Top Class!", local: "Ek Number! (एक नंबर!)", pronunciation: "Ayk Num-bur" }
      ]
    },
    "varanasi": {
      name: "Varanasi (Kashi)",
      state: "Uttar Pradesh",
      tier: "Ancient Spiritual Capital",
      bestSeason: "October to March (12°C – 24°C)",
      cultureSnapshot: "One of the world's oldest continually inhabited cities, sacred Ghats along the Ganges, and evening Ganga Aarti.",
      food: [
        { name: "Banarasi Paan", type: "Cultural Tradition", spot: "Keshav Tambool Bhandar, Lanka", desc: "Betel leaf filled with aromatic spices, gulkand, and mouth fresheners." },
        { name: "Kachori Jalebi", type: "Morning Breakfast", spot: "Ram Bhandar, Thatheri Bazar", desc: "Deep-fried lentil puris with spicy potato curry followed by hot jalebis." },
        { name: "Malaiyo", type: "Winter Specialty", spot: "Chowk / Godowlia", desc: "Foamy milk dessert flavoured with saffron, cardamom, and pistachios." }
      ],
      attractions: [
        { name: "Dashashwamedh Ghat Ganga Aarti", category: "Spiritual Experience", timing: "6:30 PM (Evening)", desc: "Spectacular ritual with brass lamps, incense, and chanting." },
        { name: "Kashi Vishwanath Temple Corridor", category: "Sacred Shrine", timing: "4:00 AM – 11:00 PM", desc: "One of the 12 Jyotirlingas, newly renovated grand riverfront corridor." },
        { name: "Sarnath Deer Park & Stupa", category: "Buddhist Heritage", timing: "8:00 AM – 5:00 PM", desc: "Site where Lord Buddha delivered his first sermon." }
      ],
      transitFares: {
        autoRickshaw: "₹30 – ₹100 E-rickshaw shared",
        cityBus: "Shared Auto / E-Rickshaw preferred in narrow lanes",
        trainSleeper: "Varanasi Junction (BSB) / Banaras (BSBS)",
        train3AC: "Direct Vande Bharat to Delhi (8 hrs)",
        flight: "Lal Bahadur Shastri Airport (VNS)",
        baggageAllowance: "Flight: 15 kg Check-in, 7 kg Cabin"
      },
      lingo: [
        { phrase: "Greetings!", local: "Har Har Mahadev! (हर हर महादेव!)", pronunciation: "Hur Hur Muh-haa-dayv" },
        { phrase: "How are you?", local: "Kaisa hauz bhaiya? (कैसा हौज़ भैया?)", pronunciation: "Kai-sah hauz bhai-yah?" },
        { phrase: "No problem at all!", local: "Guru ekdum bhokali! (गुरु एकदम भौकाली!)", pronunciation: "Goo-roo ayk-doom bhoh-kaa-lee" }
      ]
    },
    "goa": {
      name: "Goa",
      state: "Goa",
      tier: "Coastal Paradise",
      bestSeason: "November to February (22°C – 30°C)",
      cultureSnapshot: "Sun-kissed beaches, Portuguese colonial churches, spice plantations, and laid-back susegad lifestyle.",
      food: [
        { name: "Goan Fish Curry Rice", type: "Coastal Staple", spot: "Ritamar / Souza Lobo, Calangute", desc: "Tangy coconut curry made with fresh pomfret or kingfish." },
        { name: "Bebinca", type: "Traditional Dessert", spot: "Confeitaria 31 De Janeiro, Panaji", desc: "Layered Goan pudding made with coconut milk, egg yolks, and ghee." },
        { name: "Pork Vindaloo", type: "Portuguese Fusion", spot: "Mum's Kitchen, Panaji", desc: "Fiery vinegar-infused spiced curry with tender pork." }
      ],
      attractions: [
        { name: "Basilica of Bom Jesus", category: "UNESCO World Heritage", timing: "9:00 AM – 6:30 PM", desc: "16th-century baroque church holding mortal remains of St. Francis Xavier." },
        { name: "Palolem & Anjuna Beaches", category: "Coastal Escape", timing: "24/7 Access", desc: "Scenic crescent bays famous for shacks, water sports, and flea markets." },
        { name: "Dudhsagar Waterfalls", category: "Nature Trail", timing: "6:00 AM – 5:00 PM (Jeep Safari)", desc: "Four-tiered majestic white water cascade in Bhagwan Mahavir Sanctuary." }
      ],
      transitFares: {
        autoRickshaw: "Self-drive Scooters ₹350 – ₹600 / day",
        cityBus: "KTC Shuttle Bus: ₹20 – ₹50",
        trainSleeper: "Madgaon (MAO) / Thivim (THVM)",
        train3AC: "Scenic Konkan Railway routes",
        flight: "Dabolim (GOI) / Mopa Airport (GOX)",
        baggageAllowance: "Flight: 15 kg Check-in, 7 kg Cabin"
      },
      lingo: [
        { phrase: "Hello!", local: "Dev Boren Korum (देव बरे करूं)", pronunciation: "Dayv Boh-ren Koh-room" },
        { phrase: "How much?", local: "Kitlem tem? (कितलें तें?)", pronunciation: "Keet-lem tem?" },
        { phrase: "Relaxed / Chill vibes", local: "Susegad (सुशेगाद)", pronunciation: "Soo-say-gaad" }
      ]
    },
    "kolkata": {
      name: "Kolkata",
      state: "West Bengal",
      tier: "Cultural & Literary Capital",
      bestSeason: "October to March (14°C – 26°C)",
      cultureSnapshot: "The City of Joy — famous for colonial architecture, Rabindra Sangeet, yellow taxis, tramways, Durga Puja, and rich intellectual heritage.",
      food: [
        { name: "Rosogolla & Mishti Doi", type: "Iconic Sweet", spot: "K.C. Das / Balaram Mullick, College Street", desc: "Spongy cottage cheese balls soaked in light syrup and sweetened fermented yogurt." },
        { name: "Kolkata Biryani", type: "Culinary Legend", spot: "Arsalan / Royal Indian Hotel, Park Circus", desc: "Fragrant rice dish cooked with tender meat, boiled egg, and melt-in-mouth spiced potato." },
        { name: "Kathi Roll", type: "Street Snack", spot: "Nizam's / Kusum Rolls, Park Street", desc: "Flaky paratha wrapped around skewered kebabs, onions, and green chilies." }
      ],
      attractions: [
        { name: "Victoria Memorial & Maidan", category: "Colonial Heritage", timing: "10:00 AM – 5:00 PM", desc: "Grand white marble monument surrounded by lush green gardens." },
        { name: "Howrah Bridge & Hooghly Ghats", category: "Engineering Marvel", timing: "24/7 Landmark", desc: "Iconic cantilever bridge over the Hooghly river with bustling morning ferry ghats." },
        { name: "Dakshineswar Kali Temple & Belur Math", category: "Spiritual Landmark", timing: "6:00 AM – 8:00 PM", desc: "Sacred temple complex associated with Ramakrishna Paramahamsa." }
      ],
      transitFares: {
        autoRickshaw: "Shared Auto ₹15 – ₹30 per route",
        cityBus: "Yellow Taxi / InDriver Cab | Kolkata Metro: ₹5 – ₹25 (India's first metro)",
        trainSleeper: "Howrah (HWH) / Sealdah (SDAH) / Shalimar Hubs",
        train3AC: "Express connection across North & South",
        flight: "Netaji Subhash Chandra Bose Airport (CCU)",
        baggageAllowance: "Flight: 15 kg Check-in, 7 kg Cabin | Metro: 20 kg per passenger"
      },
      lingo: [
        { phrase: "Hello / Greetings", local: "Namaskar (नमस्कार)", pronunciation: "Nuh-mush-kaar" },
        { phrase: "How are you?", local: "Kemon achen? (केमोन आचेन?)", pronunciation: "Kay-mon aa-chen?" },
        { phrase: "Very good!", local: "Khub bhalo! (खूब भालो!)", pronunciation: "Khoob bhaa-loh" },
        { phrase: "Thank you", local: "Dhanyabad (धन्यवाद)", pronunciation: "Dhun-yoh-baad" }
      ]
    },
    "bengaluru": {
      name: "Bengaluru (Bangalore)",
      state: "Karnataka",
      tier: "Silicon Valley of India",
      bestSeason: "Year-Round Pleasant (16°C – 28°C)",
      cultureSnapshot: "India's tech capital renowned for pleasant weather, green botanical parks, craft breweries, and vibrant startup culture.",
      food: [
        { name: "Masala Dosa", type: "Breakfast Staple", spot: "CTR (Central Tiffin Room), Malleshwaram / Vidyarthi Bhavan, Gandhi Bazaar", desc: "Crispy golden crepe filled with spiced potato mash served with coconut chutney and butter." },
        { name: "Filter Coffee", type: "Iconic Beverage", spot: "Brahmin's Coffee Bar, Basavanagudi", desc: "Strong frothed coffee brewed in traditional brass filter." }
      ],
      attractions: [
        { name: "Lalbagh Botanical Garden & Cubbon Park", category: "Nature Sanctuary", timing: "6:00 AM – 7:00 PM", desc: "Historical 240-acre glasshouse garden and lush urban forest." },
        { name: "Bengaluru Palace", category: "Tudor Heritage", timing: "10:00 AM – 5:30 PM", desc: "Majestic palace inspired by England's Windsor Castle." }
      ],
      transitFares: {
        autoRickshaw: "Auto / Rapido Bike: ₹30 minimum",
        cityBus: "Namma Metro: ₹10 – ₹60 | BMTC Bus: ₹5 – ₹45",
        trainSleeper: "KSR Bengaluru (SBC) / Yesvantpur (YPR)",
        train3AC: "Connectivity to all South hubs",
        flight: "Kempegowda International Airport (BLR)",
        baggageAllowance: "Flight: 15 kg Check-in, 7 kg Cabin"
      },
      lingo: [
        { phrase: "Hello!", local: "Namaskara! (नमस्कारा!)", pronunciation: "Nuh-mus-kaa-rah" },
        { phrase: "How much?", local: "Eshtu? (एष्टु?)", pronunciation: "Esh-too?" },
        { phrase: "Super / Awesome!", local: "Sakkath agide! (सक्कत् आगिदे!)", pronunciation: "Suk-kuth aa-gee-day" }
      ]
    },
    "chennai": {
      name: "Chennai",
      state: "Tamil Nadu",
      tier: "Cultural Gateway of South India",
      bestSeason: "November to February (20°C – 28°C)",
      cultureSnapshot: "Dravidian heritage, Carnatic classical music, Bharatanatyam dance, expansive beaches, and Kollywood cinema hub.",
      food: [
        { name: "Idli Sambar & Medu Vada", type: "Breakfast Staple", spot: "Murugan Idli Shop / Saravana Bhavan", desc: "Steamed rice cakes and crispy lentil donuts served with piping hot lentil stew." },
        { name: "Chettinad Chicken Curry", type: "Spicy Cuisine", spot: "Anjappar Chettinad, T. Nagar", desc: "Fiery aromatic curry made with freshly ground sun-dried black pepper and spices." }
      ],
      attractions: [
        { name: "Marina Beach", category: "Coastal Promenade", timing: "24/7 Access", desc: "World's second longest natural urban beach with lighthouse views." },
        { name: "Kapaleeshwarar Temple", category: "Dravidian Marvel", timing: "6:00 AM – 9:00 PM", desc: "7th-century temple with intricate colorful Gopuram tower." }
      ],
      transitFares: {
        autoRickshaw: "Auto / Taxi: ₹40 minimum",
        cityBus: "Chennai Metro & Suburban Rail: ₹5 – ₹40",
        trainSleeper: "Chennai Central (MAS) / Egmore (MS)",
        train3AC: "Direct connectivity to North & West",
        flight: "Chennai International Airport (MAA)",
        baggageAllowance: "Flight: 15 kg Check-in, 7 kg Cabin"
      },
      lingo: [
        { phrase: "Hello!", local: "Vanakkam! (வணக்கம் / वणक्कम!)", pronunciation: "Vuh-nuk-kum" },
        { phrase: "How are you?", local: "Eppadi irukkinga? (एप्पडि इरुक्कींगा?)", pronunciation: "Ep-puh-dee ee-rook-king-gah?" }
      ]
    },
    "hyderabad": {
      name: "Hyderabad",
      state: "Telangana",
      tier: "City of Pearls & Cyberabad",
      bestSeason: "October to March (15°C – 26°C)",
      cultureSnapshot: "Nizami heritage, world-famous biryani, historic fortresses, sparkling pearl bazaars, and thriving IT parks.",
      food: [
        { name: "Hyderabadi Dum Biryani", type: "Culinary Legend", spot: "Paradise / Bawarchi / Cafe Bahar", desc: "Slow-cooked basmati rice layered with marinated meat, saffron, and aromatic spices." },
        { name: "Irani Chai & Osmania Biscuits", type: "Tea Culture", spot: "Nimrah Cafe & Bakery, Charminar", desc: "Creamy spiced tea served with melt-in-mouth salty-sweet biscuits." }
      ],
      attractions: [
        { name: "Charminar & Laad Bazaar", category: "Nizami Monument", timing: "9:30 AM – 5:30 PM", desc: "16th-century four-arched mosque flanked by bustling bangle bazaars." },
        { name: "Golconda Fort & Light Show", category: "Acoustic Citadel", timing: "9:00 AM – 5:30 PM", desc: "Historic diamond trade fortress with extraordinary acoustic engineering." }
      ],
      transitFares: {
        autoRickshaw: "Auto / Rapido: ₹35 minimum",
        cityBus: "Hyderabad Metro: ₹10 – ₹60",
        trainSleeper: "Secunderabad (SC) / Hyderabad Deccan (HYB)",
        train3AC: "Express rail connectivity across India",
        flight: "Rajiv Gandhi International Airport (HYD)",
        baggageAllowance: "Flight: 15 kg Check-in, 7 kg Cabin"
      },
      lingo: [
        { phrase: "Hello!", local: "Adaab! (आदाब)", pronunciation: "Aa-daab" },
        { phrase: "How are you brother?", local: "Kaisa hai baap? (कैसा है बाप?)", pronunciation: "Kai-sah hai baap?" }
      ]
    }
  };

  const DIGITAL_SURVIVAL_APPS = [
    { name: "IRCTC Rail Connect", category: "Train Travel", icon: "🚆", desc: "Official Indian Railways app for train seat reservation and live PNR status." },
    { name: "UTS Mobile App", category: "Local Transit", icon: "🎫", desc: "Book unreserved train tickets & local metro passes without standing in queues." },
    { name: "redBus / AbhiBus", category: "Interstate Bus", icon: "🚌", desc: "Book Volvo, AC sleeper, and government state transport buses across India." },
    { name: "Uber / Ola / Rapido", category: "Cabs & Auto", icon: "🛺", desc: "On-demand cabs, autorickshaws, and bike taxis with upfront metered pricing." },
    { name: "PhonePe / Paytm / BHIM UPI", category: "Digital Payment", icon: "💳", desc: "Instant QR code payments at 99% of shops, street vendors, and hotels across India." },
    { name: "DigiLocker", category: "Digital Verification", icon: "📲", desc: "Store government-issued Aadhaar, Driving License & Passport digitally for hotel check-ins." },
    { name: "112 India SOS", category: "Emergency Safety", icon: "🚨", desc: "All-in-one national emergency response app for Police, Ambulance & Fire." }
  ];

  window.TRAVEL_INTEL_DB = TRAVEL_INTEL_DB;
  window.DIGITAL_SURVIVAL_APPS = DIGITAL_SURVIVAL_APPS;

})();
