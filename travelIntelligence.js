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
