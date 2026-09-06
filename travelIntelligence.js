/**
 * Bharat Travel Intelligence & City Explorer Dataset
 * Rich profiles, local delicacies, top attractions, famous food shops, transit fare estimates, 
 * regional language translator, and digital survival apps for Indian destinations.
 */

(function() {
  'use strict';

  const TRAVEL_INTEL_DB = {
    "kolkata": {
      name: "Kolkata",
      state: "West Bengal",
      tier: "Cultural & Literary Capital",
      bestSeason: "October to March (14°C – 26°C)",
      cultureSnapshot: "The City of Joy — famous for colonial architecture, Rabindra Sangeet, yellow taxis, heritage tramways, Durga Puja, and rich intellectual Adda sessions.",
      culture: {
        festivals: "Durga Puja (UNESCO Intangible Cultural Heritage), Kali Puja, Poila Boishakh, Dover Road Music Conference",
        heritage: "Intellectual Coffee House Adda culture, Rabindranath Tagore literature, colonial Victorian architecture, vintage yellow cabs",
        artCrafts: "Tant & Jamdani Sarees, Kumartuli Terracotta Idols, Solapith Crafts, Kantha Stitching"
      },
      attractions: [
        { name: "Victoria Memorial & Maidan", category: "Colonial Heritage", timing: "10:00 AM – 5:00 PM", desc: "Grand white marble monument set in 64 acres of manicured gardens." },
        { name: "Howrah Bridge & Hooghly Ghats", category: "Engineering Marvel", timing: "24/7 Access", desc: "Iconic cantilever bridge over Hooghly river with bustling morning flower market." },
        { name: "Dakshineswar Kali Temple & Belur Math", category: "Spiritual Landmark", timing: "6:00 AM – 8:00 PM", desc: "Sacred riverfront temple complex associated with Ramakrishna & Swami Vivekananda." },
        { name: "Indian Museum & Marble Palace", category: "UNESCO & Antiquities", timing: "10:00 AM – 5:00 PM", desc: "Asia's oldest multi-disciplinary museum housing 4,000-year-old Egyptian mummy and Raj-era art." },
        { name: "Princep Ghat & Eco Park New Town", category: "Nature & Promenade", timing: "6:00 AM – 9:00 PM", desc: "Greek-revival ghat overlooking Vidyasagar Setu, and India's largest urban green park." }
      ],
      markets: [
        { name: "New Market (Sir Stuart Hogg Market)", icon: "🛍️", desc: "150-year-old Victorian shopping labyrinth for silver jewelry, leather bags, garments & spices." },
        { name: "College Street (Boi Para)", icon: "📚", desc: "World's largest second-hand book market stretching 1.5 miles, home to Indian Coffee House." },
        { name: "Gariahat & Hatibagan Markets", icon: "👗", desc: "Famous South & North Kolkata hubs for authentic Tant, Jamdani & Baluchari silk sarees." },
        { name: "Burrabazar & Flower Market (Mullick Ghat)", icon: "🌸", desc: "Asia's largest wholesale flower market buzzing with marigold garlands at dawn." }
      ],
      food: [
        { name: "Rosogolla & Mishti Doi", type: "Iconic Sweet", spot: "K.C. Das & Balaram Mullick", desc: "Spongy cottage cheese balls in syrup and rich caramel fermented yogurt." },
        { name: "Kolkata Mutton Biryani", type: "Culinary Legend", spot: "Arsalan & Royal Indian Hotel", desc: "Aromatic basmati rice cooked with melt-in-mouth potato, boiled egg & succulent mutton." },
        { name: "Kathi Roll", type: "Street Food Landmark", spot: "Nizam's & Kusum Rolls", desc: "Flaky paratha wrapped around charred kebabs, onions, and green chilies." },
        { name: "Shorshe Ilish & Chingri Malaikari", type: "Bengali Signature", spot: "6 Ballygunge Place & Bhojohori Manna", desc: "Hilsa fish in mustard gravy and jumbo prawns cooked in coconut milk." },
        { name: "Cheelo Kebab & English Breakfast", type: "Heritage Continental", spot: "Peter Cat & Flurys, Park Street", desc: "Butter-topped rice with grilled kebabs, and 1920s Victorian tea room pastries." }
      ],
      famousFoodShops: [
        { shop: "K.C. Das (Esplanade / College St)", dish: "Original Rosogolla & Rajbhog", desc: "Invented by Nobin Chandra Das in 1868, world benchmark for spongy sweet rosogolla." },
        { shop: "Balaram Mullick & Radharaman Mullick (Bhowanipore)", dish: "Baked Rosogolla & Nolen Gur Sandesh", desc: "Legendary 1885 sweet shop famous for seasonal date-palm jaggery sweets." },
        { shop: "Arsalan (Park Circus)", dish: "Kolkata Special Mutton Biryani", desc: "Saffron-infused fragrant biryani served with signature spiced potato." },
        { shop: "Nizam's (New Market, Hogg St)", dish: "Original Kathi Kebab Roll", desc: "The birthplace of Kathi Rolls in 1932, serving iron-skewered paratha rolls." },
        { shop: "Kusum Rolls (Park Street)", dish: "Double Egg Cheese Chicken Roll", desc: "Bustling Park Street takeaway counter serving sizzling hot flaky rolls." },
        { shop: "Peter Cat (Park Street)", dish: "Famous Cheelo Kebab", desc: "Sizzling platter of butter rice, poached egg, and succulent mutton/chicken kebabs." },
        { shop: "Flurys (Park Street)", dish: "Heritage English Breakfast & Rum Balls", desc: "Established in 1927, iconic European tearoom on Park Street." },
        { shop: "Chittoda's Shop (Dacres Lane / Decker's Lane)", dish: "Fish Fry & Chicken Stew", desc: "Famous heritage street-food lane frequented by office crowds and food connoisseurs." }
      ],
      transitFares: {
        autoRickshaw: "Shared Auto ₹15 – ₹30 per fixed route",
        cityBus: "Yellow Taxi / InDriver Cab | Kolkata Metro: ₹5 – ₹25 (India's oldest metro network)",
        trainSleeper: "Howrah (HWH) / Sealdah (SDAH) / Shalimar Hubs",
        train3AC: "Direct Vande Bharat & Rajdhani Express trains across North, South & East",
        flight: "Netaji Subhash Chandra Bose International Airport (CCU)",
        baggageAllowance: "Flight: 15 kg Check-in, 7 kg Cabin | Metro: 20 kg per passenger"
      },
      lingo: [
        { phrase: "Hello / Greetings", local: "Namaskar (नमस्कार)", pronunciation: "Nuh-mush-kaar" },
        { phrase: "How are you?", local: "Kemon achen? (केमोन आचेन?)", pronunciation: "Kay-mon aa-chen?" },
        { phrase: "How much is this?", local: "Erm daam koto? (एर दाम कतो?)", pronunciation: "Air daam koh-toh?" },
        { phrase: "Very good / Excellent!", local: "Khub bhalo! (खूब भालो!)", pronunciation: "Khoob bhaa-loh" },
        { phrase: "Thank you", local: "Dhanyabad (धन्यवाद)", pronunciation: "Dhun-yoh-baad" }
      ]
    },
    "jaipur": {
      name: "Jaipur",
      state: "Rajasthan",
      tier: "Tier-1 Heritage City",
      bestSeason: "October to March (15°C – 25°C)",
      cultureSnapshot: "Known as the Pink City, Jaipur is renowned for royal Rajputana architecture, vibrant block-print textiles, and opulent palaces.",
      culture: {
        festivals: "Teej Festival, Gangaur, Jaipur Literature Festival, Elephant Festival",
        heritage: "Fortress architecture, Sheesh Mahal mirror work, Kundan jewelry crafting",
        artCrafts: "Blue Pottery, Sanganeri Block Prints, Bandhani Sarees, Lac Bangles"
      },
      attractions: [
        { name: "Amer Fort & Sheesh Mahal", category: "Heritage Landmark", timing: "8:00 AM – 5:30 PM", desc: "Majestic hilltop fort with mirror palace and panoramic lake views." },
        { name: "Hawa Mahal (Palace of Winds)", category: "Architectural Marvel", timing: "9:00 AM – 5:00 PM", desc: "953 honeycomb windows designed for royal women to observe street festivals." },
        { name: "Jantar Mantar", category: "UNESCO World Heritage", timing: "9:00 AM – 4:30 PM", desc: "World's largest stone sundial and astronomical instrument observatory." },
        { name: "Nahargarh Fort Sunset Point", category: "Nature Escape", timing: "10:00 AM – 10:00 PM", desc: "Overlooks the entire pink city illuminated at twilight." }
      ],
      markets: [
        { name: "Johari Bazaar & Bapu Bazaar", icon: "💎", desc: "World famous market for Kundan gemstone jewelry, bandhani sarees, lac bangles & Mojari leather shoes." },
        { name: "Tripolia Bazaar & Chandpole", icon: "🏺", desc: "Historic bazaar for traditional brassware, wooden puppets, and handloom rugs." }
      ],
      food: [
        { name: "Dal Baati Churma", type: "Signature Meal", spot: "LMB (Laxmi Misthan Bhandar), Johari Bazar", desc: "Baked wheat balls dipped in ghee served with spicy lentils and sweet churma." },
        { name: "Pyaaz Kachori", type: "Street Food", spot: "Rawat Misthan Bhandar, Station Road", desc: "Crispy golden fried pastry stuffed with spiced onion filling." },
        { name: "Ghevar & Mawa Kachori", type: "Sweet Delicacy", spot: "Sodhani Sweets, Janpath", desc: "Traditional disc-shaped sweet soaked in saffron sugar syrup." }
      ],
      famousFoodShops: [
        { shop: "Rawat Misthan Bhandar (Station Road)", dish: "Famous Pyaaz Kachori", desc: "Legendary eatery frying thousands of hot spiced onion kachoris daily." },
        { shop: "LMB Laxmi Misthan Bhandar (Johari Bazaar)", dish: "Royal Dal Baati Churma & Ghevar", desc: "1727 heritage restaurant serving authentic royal Marwari thalis." },
        { shop: "Sodhani Sweets (Tonk Road)", dish: "Honeycomb Ghevar & Mawa Kachori", desc: "Famous destination for traditional Rajasthani milk sweets." },
        { shop: "Pandit Pav Bhaji (Near Birla Temple)", dish: "Butter Pav Bhaji & Kesar Milk", desc: "Jaipur's favorite night-time street food stall." }
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
      culture: {
        festivals: "Republic Day Parade, Diwali, Phool Walon Ki Sair, Qutub Festival",
        heritage: "Mughal architecture, Lutyens' Delhi colonial avenues, Sufi Qawwali at Nizamuddin",
        artCrafts: "Dilli Haat Handicrafts, Zardozi Embroidery, Antique Coins & Maps"
      },
      attractions: [
        { name: "Red Fort (Lal Qila)", category: "UNESCO World Heritage", timing: "9:30 AM – 4:30 PM", desc: "Mughal sandstone fortress symbol of India's independence." },
        { name: "Qutub Minar Complex", category: "Ancient Heritage", timing: "7:00 AM – 5:00 PM", desc: "73-meter minaret surrounded by 4th-century iron pillar and ruins." },
        { name: "Humayun's Tomb", category: "Architectural Landmark", timing: "6:00 AM – 6:00 PM", desc: "Precursor to the Taj Mahal with Persian garden layout." },
        { name: "Lotus Temple & Akshardham", category: "Spiritual Marvel", timing: "9:30 AM – 6:00 PM", desc: "Luminous lotus architecture and grand cultural light show." }
      ],
      markets: [
        { name: "Chandni Chowk & Khari Baoli", icon: "🌶️", desc: "Asia's largest wholesale spice market and historic lanes for silver jewelry & bridal wear." },
        { name: "Dilli Haat (INA)", icon: "🎨", desc: "Open-air craft bazaar featuring rotated master artisans from all 36 Indian states & regional food stalls." },
        { name: "Khan Market & Connaught Place", icon: "🛍️", desc: "Upscale colonial horseshoe arcades with designer boutiques, bookstores, and trendy cafes." }
      ],
      food: [
        { name: "Chandni Chowk Paranthas", type: "Street Food", spot: "Paranthe Wali Gali, Old Delhi", desc: "Deep-fried stuffed breads with rabri, dry fruits, or spiced potatoes." },
        { name: "Butter Chicken & Naan", type: "Culinary Legend", spot: "Moti Mahal / Gulati, Pandara Road", desc: "Rich tomato-butter gravy with tender tandoori chicken chunks." },
        { name: "Chole Bhature", type: "Local Breakfast", spot: "Sita Ram Diwan Chand, Paharganj", desc: "Fluffy fried bread with spicy chickpea curry and tangy pickles." }
      ],
      famousFoodShops: [
        { shop: "Moti Mahal (Daryaganj)", dish: "Invention of Butter Chicken & Dal Makhani", desc: "The birthplace of Butter Chicken created by Kundan Lal Gujral in 1920s." },
        { shop: "Sita Ram Diwan Chand (Paharganj)", dish: "Famous Chole Bhature with Paneer", desc: "Iconic North Indian breakfast spot serving spiced chickpea curry and stuffed bhaturas." },
        { shop: "Paranthe Wali Gali (Old Delhi)", dish: "Rabri & Khoya Paranthas", desc: "Centuries-old narrow lane with wood-fired tawa paranthas." },
        { shop: "Karim's (Near Jama Masjid)", dish: "Mutton Burra Kebab & Nizamuddin Nihari", desc: "1913 royal Mughal kitchen serving slow-cooked stews and kebabs." }
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
      culture: {
        festivals: "Ganesh Chaturthi, Kala Ghoda Arts Festival, Banganga Music Festival",
        heritage: "Victorian Gothic & Art Deco Ensembles (UNESCO), Dabbawala logistics system",
        artCrafts: "Kolhapuri Leathercraft, Warli Tribal Art, Paithani Sarees"
      },
      attractions: [
        { name: "Gateway of India & Marine Drive", category: "Colonial Landmark", timing: "24/7 Access", desc: "Historic waterfront arch and Queen's Necklace promenade." },
        { name: "Elephanta Caves", category: "UNESCO Rock-Cut Art", timing: "9:00 AM – 5:00 PM (Ferry from Gateway)", desc: "5th-century rock-cut cave temples dedicated to Lord Shiva." },
        { name: "Chhatrapati Shivaji Terminus (CST)", category: "Victorian Gothic Architecture", timing: "24/7 Landmark", desc: "Grand railway terminus with gargoyles and stained glass." }
      ],
      markets: [
        { name: "Crawford Market & Colaba Causeway", icon: "🛍️", desc: "Colonial-era wholesale shopping hub for spices, vintage souvenirs, leather bags & fashion." },
        { name: "Chor Bazaar & Linking Road", icon: "✨", desc: "Flea market for antique clocks, Bollywood posters, and trendy Bandra street wear." }
      ],
      food: [
        { name: "Vada Pav", type: "Iconic Street Food", spot: "Ashok Vada Pav, Dadar / Aram, CST", desc: "Spiced potato dumpling in a bun served with fiery garlic chutneys." },
        { name: "Pav Bhaji", type: "Street Delicacy", spot: "Sardar Pav Bhaji, Tardeo / Cannon, CST", desc: "Mashed vegetable curry drenched in butter served with toasted buns." },
        { name: "Bombay Bhel Puri & Sev Puri", type: "Beach Snack", spot: "Girgaon Chowpatty / Juhu Beach", desc: "Tangy puffed rice salad with tamarind sauce and crispy puris." }
      ],
      famousFoodShops: [
        { shop: "Ashok Vada Pav (Dadar Kirti College)", dish: "Original Kirti College Vada Pav", desc: "Mumbai's most famous vada pav stall serving spicy chutney and chura." },
        { shop: "Sardar Pav Bhaji (Tardeo)", dish: "Amul Butter Loaded Pav Bhaji", desc: "Famous for melting slabs of butter served over sizzling vegetable mash." },
        { shop: "Cafe Leopold & Cafe Mondegar (Colaba)", dish: "Cold Beer & Chilli Chicken", desc: "Iconic heritage Persian cafes adorned with Mario Miranda murals." },
        { shop: "Bademiya (Colaba)", dish: "Seekh Kebabs & Baida Roti", desc: "Late-night open-air grill counter behind the Taj Mahal Palace Hotel." }
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
      culture: {
        festivals: "Dev Deepawali, Shivaratri, Ganga Mahotsav, Ramlila at Ramnagar",
        heritage: "Vedic Sanskrit chanting, Banarasi silk weaving tradition, classical Indian music Gharanas",
        artCrafts: "Banarasi Brocade Sarees, Wooden Toys, Brassware, Meenakari Crafts"
      },
      attractions: [
        { name: "Dashashwamedh Ghat Ganga Aarti", category: "Spiritual Experience", timing: "6:30 PM (Evening)", desc: "Spectacular ritual with brass lamps, incense, and chanting." },
        { name: "Kashi Vishwanath Temple Corridor", category: "Sacred Shrine", timing: "4:00 AM – 11:00 PM", desc: "One of the 12 Jyotirlingas, newly renovated grand riverfront corridor." },
        { name: "Sarnath Deer Park & Stupa", category: "Buddhist Heritage", timing: "8:00 AM – 5:00 PM", desc: "Site where Lord Buddha delivered his first sermon." }
      ],
      markets: [
        { name: "Thatheri Bazaar & Vishwanath Gali", icon: "🛍️", desc: "Narrow historic alleys famous for Banarasi silk sarees, copperware, and spiritual trinkets." },
        { name: "Godowlia Market", icon: "✨", desc: "Bustling central bazaar for handicraft shawls, brass idols, and sweetshops." }
      ],
      food: [
        { name: "Banarasi Paan", type: "Cultural Tradition", spot: "Keshav Tambool Bhandar, Lanka", desc: "Betel leaf filled with aromatic spices, gulkand, and mouth fresheners." },
        { name: "Kachori Jalebi", type: "Morning Breakfast", spot: "Ram Bhandar, Thatheri Bazar", desc: "Deep-fried lentil puris with spicy potato curry followed by hot jalebis." },
        { name: "Malaiyo", type: "Winter Specialty", spot: "Chowk / Godowlia", desc: "Foamy milk dessert flavoured with saffron, cardamom, and pistachios." }
      ],
      famousFoodShops: [
        { shop: "Ram Bhandar (Thatheri Bazaar)", dish: "Choti Kachori & Hot Jalebi", desc: "Centuries-old morning breakfast institution serving crisp kachoris." },
        { shop: "Keshav Tambool Bhandar (Lanka)", dish: "Authentic Banarasi Meetha Paan", desc: "Varanasi's most famous paan shop visited by celebrities & travelers." },
        { shop: "Blue Lassi Shop (Kunj Gali, Vishwanath Gali)", dish: "Fruit & Rabri Loaded Lassi", desc: "Iconic 1925 shop serving 80+ varieties of thick clay-pot lassis." },
        { shop: "Deena Chat Bhandar (Godowlia)", dish: "Tamatar Chat & Palak Chat", desc: "Spiced tomato chat served piping hot in earthen kulhad bowls." }
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
      culture: {
        festivals: "Goa Carnival, Shigmo Festival, Feast of St. Francis Xavier, Sunburn Festival",
        heritage: "Indo-Portuguese architecture, Latin Quarter Fontainhas, Feni distillation",
        artCrafts: "Azulejo Ceramic Tiles, Shell Handicrafts, Coconut Fiber Carvings"
      },
      attractions: [
        { name: "Basilica of Bom Jesus", category: "UNESCO World Heritage", timing: "9:00 AM – 6:30 PM", desc: "16th-century baroque church holding mortal remains of St. Francis Xavier." },
        { name: "Palolem & Anjuna Beaches", category: "Coastal Escape", timing: "24/7 Access", desc: "Scenic crescent bays famous for shacks, water sports, and flea markets." },
        { name: "Dudhsagar Waterfalls", category: "Nature Trail", timing: "6:00 AM – 5:00 PM (Jeep Safari)", desc: "Four-tiered majestic white water cascade in Bhagwan Mahavir Sanctuary." }
      ],
      markets: [
        { name: "Anjuna Wednesday Flea Market", icon: "🛍️", desc: "Bustling beachfront market for bohemian clothes, silver jewelry, and wooden artifacts." },
        { name: "Mapusa Friday Market", icon: "🌶️", desc: "Local bazaar for Goan chorizo sausages, cashews, dried fish, and feni." }
      ],
      food: [
        { name: "Goan Fish Curry Rice", type: "Coastal Staple", spot: "Ritamar / Souza Lobo, Calangute", desc: "Tangy coconut curry made with fresh pomfret or kingfish." },
        { name: "Bebinca", type: "Traditional Dessert", spot: "Confeitaria 31 De Janeiro, Panaji", desc: "Layered Goan pudding made with coconut milk, egg yolks, and ghee." },
        { name: "Pork Vindaloo", type: "Portuguese Fusion", spot: "Mum's Kitchen, Panaji", desc: "Fiery vinegar-infused spiced curry with tender pork." }
      ],
      famousFoodShops: [
        { shop: "Souza Lobo (Calangute Beach)", dish: "Goan Fish Curry & Crab Xacuti", desc: "1932 beachside restaurant serving authentic Goan seafood." },
        { shop: "Confeitaria 31 De Janeiro (Fontainhas, Panaji)", dish: "Traditional Bebinca & Pork Patties", desc: "One of Goa's oldest Portuguese bakeries hidden in Latin Quarter." },
        { shop: "Mum's Kitchen (Panaji)", dish: "Pork Vindaloo & Kingfish Rava Fry", desc: "Award-winning restaurant dedicated to preserving ancestral Goan recipes." },
        { shop: "Martin's Corner (Betalbatim)", dish: "Butter Garlic Prawns & Sol Kadi", desc: "Celebrity-favorite South Goa dining benchmark." }
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
