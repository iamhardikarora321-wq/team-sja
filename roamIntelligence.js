/**
 * ROAM Living Destination Intelligence & Spatial Redirection Module
 * Merges Discover, Explore, Market, Control, and Impact modes into Arvora,
 * featuring crowd-balancing algorithms and a 90-second automated Hackathon Tour.
 */

(function() {
  'use strict';

  const ROAM_DESTINATION_INTELLIGENCE = {
    jaipur: {
      name: "Jaipur",
      state: "Rajasthan",
      crowdIndex: "88% (High Congestion at Hawa Mahal & Amer Fort)",
      suggestedAlternative: "Sanganer Hand-Block Print Village & Nahargarh Sunrise Trail",
      crowdShiftingIncentive: "Save 35% on Artisanal Guild Passes + Free Entry to Sanganer Museum",
      marketListings: [
        { title: "Sanganeri Chhipa Block Printing Guild", category: "Artisan Workshop", price: "₹450 / session", host: "Master Ramswaroop Craft Guild", rating: "4.9 ★" },
        { title: "Heritage Haveli Stay (Zero-Commission Direct)", category: "Boutique Homestay", price: "₹2,200 / night", host: "Rawla Heritage Stay", rating: "4.8 ★" },
        { title: "Pink City Midnight Food & Spice Walk", category: "Culinary Heritage", price: "₹650 / guest", host: "Johari Bazar Culinary Guild", rating: "5.0 ★" }
      ],
      controlYield: {
        peakOccupancy: "94%",
        offPeakForecast: "48%",
        recommendedFlashDiscount: "28%",
        projectedRevenueRecovery: "₹3,45,000 / month"
      },
      impact: {
        artisansEmpowered: "420 Craftsmen",
        ruralIncomeGenerated: "₹18.4 Lakhs",
        co2Reduced: "14.2 Tons (Via Electric Rickshaw Circuits)"
      }
    },
    delhi: {
      name: "Delhi NCR",
      state: "Delhi",
      crowdIndex: "92% (High Congestion at Chandni Chowk & Qutub Minar)",
      suggestedAlternative: "Mehrauli Archaeological Park & Humayun Heritage Corridor",
      crowdShiftingIncentive: "Free Heritage Shuttle + 25% Off Local Food Trail Vouchers",
      marketListings: [
        { title: "Old Delhi Culinary & Spice Walk", category: "Street Food Tour", price: "₹550 / guest", host: "Purani Dilli Food Guild", rating: "4.9 ★" },
        { title: "Nizamuddin Sufi Music & Heritage Experience", category: "Cultural Heritage", price: "₹350 / guest", host: "Heritage Walks Collective", rating: "4.8 ★" }
      ],
      controlYield: {
        peakOccupancy: "89%",
        offPeakForecast: "52%",
        recommendedFlashDiscount: "25%",
        projectedRevenueRecovery: "₹5,20,000 / month"
      },
      impact: {
        artisansEmpowered: "680 Street Vendors & Guides",
        ruralIncomeGenerated: "₹32.1 Lakhs",
        co2Reduced: "28.5 Tons"
      }
    },
    varanasi: {
      name: "Varanasi",
      state: "Uttar Pradesh",
      crowdIndex: "95% (Extreme Congestion at Dashashwamedh Ghat)",
      suggestedAlternative: "Chet Singh Fort Ghat & Sarnath Buddhist Peace Circuit",
      crowdShiftingIncentive: "Exclusive Morning Wooden Boat Trail + Sarnath Heritage Pass",
      marketListings: [
        { title: "Banarasi Silk Handloom Weavers Guild Tour", category: "Artisan Workshop", price: "₹400 / guest", host: "Kashi Weavers Cooperative", rating: "5.0 ★" },
        { title: "Ganga Dawn Boat Trail & Vedic Chanting", category: "Spiritual Experience", price: "₹500 / guest", host: "River Heritage Guild", rating: "4.9 ★" }
      ],
      controlYield: {
        peakOccupancy: "98%",
        offPeakForecast: "60%",
        recommendedFlashDiscount: "22%",
        projectedRevenueRecovery: "₹2,80,000 / month"
      },
      impact: {
        artisansEmpowered: "510 Silk Weavers",
        ruralIncomeGenerated: "₹24.6 Lakhs",
        co2Reduced: "19.8 Tons"
      }
    },
    goa: {
      name: "Goa Coastal",
      state: "Goa",
      crowdIndex: "85% (Heavy Crowd at Baga & Calangute Beaches)",
      suggestedAlternative: "Divar Island Heritage Village & Netravali Spice Plantations",
      crowdShiftingIncentive: "Complimentary Goan Fish Curry Tasting + Eco-Ferry Pass",
      marketListings: [
        { title: "Organic Spice Plantation & Toddy Tasting", category: "Eco-Farm Tour", price: "₹600 / guest", host: "Sahakari Spice Guild", rating: "4.9 ★" },
        { title: "Fontainhas Portuguese Latin Quarter Walk", category: "Heritage Walk", price: "₹450 / guest", host: "Panaji Heritage Society", rating: "4.8 ★" }
      ],
      controlYield: {
        peakOccupancy: "91%",
        offPeakForecast: "42%",
        recommendedFlashDiscount: "35%",
        projectedRevenueRecovery: "₹4,10,000 / month"
      },
      impact: {
        artisansEmpowered: "310 Farmers & Homestays",
        ruralIncomeGenerated: "₹21.5 Lakhs",
        co2Reduced: "16.4 Tons"
      }
    }
  };

  const HACKATHON_TOUR_STEPS = [
    {
      step: 1,
      title: "1. Living Destination Intelligence (Discover Mode)",
      desc: "ROAM detects real-time overcrowding at famous landmarks (e.g., 95% congestion at Varanasi Ghats or Hawa Mahal) and instantly redirects tourist traffic to nearby authentic heritage villages.",
      targetTab: "discover",
      highlight: "#roam-discover-card"
    },
    {
      step: 2,
      title: "2. Interactive Spatial Density Explorer (Explore Mode)",
      desc: "Travelers view live crowd heatmaps, artisan craft clusters, and uncrowded nature trails with sub-0.05ms Radix Trie spatial indexing.",
      targetTab: "explore",
      highlight: "#roam-explore-card"
    },
    {
      step: 3,
      title: "3. Direct Local Guild Marketplace (Market Mode)",
      desc: "0% aggregator fee direct booking platform connecting travelers with rural weavers, block printers, street food guides, and boutique homestays.",
      targetTab: "market",
      highlight: "#roam-market-card"
    },
    {
      step: 4,
      title: "4. Hotelier Yield Command Center (Control Mode)",
      desc: "Empowers tier-2/3 hoteliers with predictive off-peak occupancy forecasting, automated flash discounts, and direct revenue recovery tools.",
      targetTab: "control",
      highlight: "#roam-control-card"
    },
    {
      step: 5,
      title: "5. UN Sustainable Tourism Impact Ledger (Impact Mode)",
      desc: "Transparently tracks economic uplift metrics: rural family income generated, CO₂ emissions reduced, and local craft Preservation (UN SDG 8 & 11).",
      targetTab: "impact",
      highlight: "#roam-impact-card"
    }
  ];

  window.ROAM_DESTINATION_INTELLIGENCE = ROAM_DESTINATION_INTELLIGENCE;
  window.HACKATHON_TOUR_STEPS = HACKATHON_TOUR_STEPS;

})();
