/**
 * GramUdyam - Multilingual Rural Entrepreneurship Platform
 * Technology: Vanilla JavaScript & Web Speech API
 * Languages: English (en), Marathi (mr), Hindi (hi)
 */

// Translations Data Dictionary
const translations = {
  en: {
    metaTitle: "GramUdyam - Rural Entrepreneurship Learning",
    brandName: "GramUdyam",
    brandTagline: "Rural Entrepreneurship",
    nav: {
      home: "Home",
      learn: "Learn",
      ideas: "Business Ideas",
      schemes: "Schemes",
      about: "About"
    },
    hero: {
      tag: "College Mini Project • Rural Empowerment",
      title: "Learn. Start. Grow.",
      subtitle: "Simple entrepreneurship knowledge for rural communities.",
      description: "GramUdyam helps rural entrepreneurs learn basic business concepts, discover business ideas and understand useful government schemes in simple local languages.",
      btnLearn: "Start Learning",
      btnSchemes: "Explore Schemes",
      quickStat1: "3 Languages",
      quickStat1Desc: "English, Marathi & Hindi",
      quickStat2: "100% Free",
      quickStat2Desc: "Accessible to Everyone",
      quickStat3: "Practical",
      quickStat3Desc: "Real-world examples"
    },
    why: {
      heading: "Why GramUdyam?",
      subheading: "Designed specifically to bridge the language gap in rural business education.",
      card1Title: "Local Language",
      card1Desc: "Learn important business concepts in simple English, Marathi and Hindi.",
      card2Title: "Easy Learning",
      card2Desc: "Short and practical explanations designed for beginners.",
      card3Title: "Useful Information",
      card3Desc: "Explore business ideas and basic information about government schemes."
    },
    learn: {
      heading: "Entrepreneurship Learning",
      subheading: "Short, practical lessons designed to help you start and manage a small rural enterprise.",
      modalTitlePrefix: "Topic Guide: ",
      btnLearnMore: "Learn More",
      listenBtnText: "Listen Aloud",
      stopBtnText: "Stop Audio",
      keyPointsTitle: "Key Takeaways:",
      exampleTitle: "Real-World Village Example:",
      topics: [
        {
          id: "business-idea",
          icon: "💡",
          title: "Business Idea",
          description: "Learn how to identify a useful business idea based on local needs and available resources.",
          explanation: "A great rural business idea comes from identifying a daily problem in your village or recognizing local raw materials that can be made more valuable before selling.",
          keyPoints: [
            "Notice what everyday items or services people in your village travel far to buy.",
            "Utilize locally available crops, milk, or artisanal skills instead of buying expensive external materials.",
            "Start small to test customer interest before investing large savings.",
            "Ask local shopkeepers and neighbors about their unmet requirements."
          ],
          example: "Ramesh noticed farmers in his village sold tomatoes for just ₹5/kg during peak season while ketchup in the nearby town cost ₹120/bottle. He started a small homemade tomato puree and sauce unit, earning 3 times more profit from the same tomatoes."
        },
        {
          id: "market-research",
          icon: "🔍",
          title: "Market Research",
          description: "Understand your customers, competitors and local market before starting a business.",
          explanation: "Market research simply means talking to real customers, checking existing shops, and knowing the fair prices in weekly village haats or taluka markets before spending money.",
          keyPoints: [
            "Identify who will buy your product: neighbors, local eateries, or city wholesale buyers.",
            "Visit the weekly market (haat/bazaar) and observe which items sell fastest and at what prices.",
            "Check what existing sellers are offering and see how your product can be fresher, cleaner, or better packaged.",
            "Estimate roughly how many items you can realistically sell every week."
          ],
          example: "Sunita wanted to sell handmade herbal soap in her taluka. Instead of making 500 bars at once, she made 20 bars, distributed samples to neighbors and local beauty parlors, collected honest feedback on fragrance, and improved her recipe before full production."
        },
        {
          id: "finance-budgeting",
          icon: "💰",
          title: "Finance & Budgeting",
          description: "Learn the basics of business expenses, pricing, savings and profit.",
          explanation: "Healthy business finance is built on keeping business money strictly separate from personal household cash, recording daily income and costs, and calculating fair selling prices.",
          keyPoints: [
            "Fixed Costs vs Variable Costs: Keep track of one-time equipment costs versus daily raw material purchases.",
            "Smart Pricing: Selling Price = (Cost of materials + Your labor time + Transport) + 20% Profit margin.",
            "Never mix personal household pocket money with business sales.",
            "Maintain a simple daily notebook (Khata) or basic mobile ledger for credits (Udhaar) and cash collected."
          ],
          example: "Balasaheb opened a spice grinding mill. He maintained two separate bank accounts: one for household expenses and one for the mill. Every evening he logged ₹700 raw chilli costs and ₹1,300 powder sales, ensuring he always had savings for machine maintenance."
        },
        {
          id: "digital-marketing",
          icon: "📱",
          title: "Digital Marketing",
          description: "Learn how WhatsApp, Instagram and other digital platforms can help promote a business.",
          explanation: "You do not need costly advertisements. Free smartphone apps like WhatsApp Business, Google Maps, and Instagram can connect your village products directly to town customers.",
          keyPoints: [
            "Use WhatsApp Business with a product catalog showing clear photos and fixed prices.",
            "Share short photos or 15-second mobile videos of your making process (hygiene, purity, traditional method).",
            "Add your shop or farm location on Google Maps so travelers and buyers can navigate easily.",
            "Accept instant digital UPI payments (PhonePe, Google Pay, BHIM) to avoid losing customers who have no cash."
          ],
          example: "A women's self-help group in Satara made traditional turmeric powder. They posted photos on a WhatsApp Business broadcast group. Within two months, customers from Pune began placing monthly orders with direct UPI payments."
        },
        {
          id: "how-to-start",
          icon: "🚀",
          title: "How to Start a Business",
          description: "Understand the basic steps involved in planning and starting a small business.",
          explanation: "Starting a business is a step-by-step journey from validation to registration, acquiring basic equipment, and making your very first 10 happy customers.",
          keyPoints: [
            "Step 1: Write down a 1-page plan stating what you sell, who buys it, and total startup cost.",
            "Step 2: Complete free government registrations like Udyam Aadhaar (MSME) and local Gram Panchayat NOC.",
            "Step 3: Arrange basic working capital through own savings, SHG (Bachat Gat), or MUDRA micro-loans.",
            "Step 4: Launch a trial batch, collect genuine reviews, and gradually expand distribution."
          ],
          example: "Pravin started a cold-pressed groundnut oil unit. He first obtained free Udyam registration online using his Aadhaar card, took a small Shishu loan under MUDRA, bought a micro-crusher, and sold 50 litres in the first month to local families."
        }
      ]
    },
    ideas: {
      heading: "Rural Business Ideas",
      subheading: "Practical, high-potential ventures that can be started in villages with local resources.",
      btnLearnMore: "Learn More",
      investmentLabel: "Estimated Setup Cost:",
      stepsLabel: "Key Steps to Begin:",
      tipsLabel: "Practical Local Tip:",
      items: [
        {
          id: "food-processing",
          icon: "🌾",
          title: "Food Processing",
          description: "Transform raw crops into packaged goods like pickles, papad, spices, and flour to earn better margins.",
          investment: "₹15,000 - ₹50,000 (Low to Medium)",
          steps: [
            "Source high quality seasonal produce directly from local farmers at fair prices.",
            "Maintain strict kitchen hygiene and obtain a basic FSSAI registration.",
            "Package in sealed food-grade pouches with an attractive label showing manufacturing date and ingredients.",
            "Sell to local grocery stores, weekly haats, and through personal contacts in cities."
          ],
          tip: "Value addition multiplies profit: raw mangoes sell at ₹20/kg, but traditional mango pickle sells at ₹200/kg."
        },
        {
          id: "dairy-products",
          icon: "🥛",
          title: "Dairy Products",
          description: "Produce and supply fresh milk, paneer, curd, and ghee to local markets and nearby towns.",
          investment: "₹30,000 - ₹1,00,000 (Medium)",
          steps: [
            "Establish clean cattle management and hygienic milking routines.",
            "Process excess milk into high-demand products like Paneer, Dahi, and Desi Cow Ghee.",
            "Use clean glass or food-grade containers with clear branding.",
            "Tie up with local wedding caterers, sweet shops, and residential apartments in nearby towns."
          ],
          tip: "Pure Bilona cow ghee commands premium pricing (₹1,500 - ₹2,500/kg) when sold directly to health-conscious urban consumers."
        },
        {
          id: "handmade-products",
          icon: "🎨",
          title: "Handmade Products",
          description: "Create traditional handicrafts, bamboo articles, cloth bags, and decorative items.",
          investment: "₹5,000 - ₹25,000 (Very Low)",
          steps: [
            "Identify traditional crafting skills among village artisans or women's SHGs (Bachat Gat).",
            "Produce eco-friendly items such as cotton carry bags, bamboo baskets, jute rugs, or terracotta pots.",
            "Ensure consistent finishing and uniform size specifications.",
            "Exhibit products at district exhibitions, rural craft melas, and online social platforms."
          ],
          tip: "With plastic bans in many towns, cloth and jute carry bags have permanent demand from local grocery and clothing shops."
        },
        {
          id: "organic-farming",
          icon: "🌱",
          title: "Organic Farming",
          description: "Grow chemical-free fruits, vegetables, and grains with high market demand.",
          investment: "₹20,000 - ₹60,000 (Low)",
          steps: [
            "Prepare organic vermicompost (Gandul Khat), Jeevamrut, and natural bio-pest repellents at home.",
            "Convert a small patch of land to chemical-free cultivation first to gain hands-on experience.",
            "Choose high-demand crops like native leafy vegetables, drumsticks (Moringa), and millets.",
            "Form a direct consumer delivery network in the nearest city via weekly subscription baskets."
          ],
          tip: "Organize 20-30 families in a nearby housing society who pay in advance every month for weekly fresh organic vegetable baskets."
        },
        {
          id: "poultry-farming",
          icon: "🐔",
          title: "Poultry Farming",
          description: "Raise backyard or commercial poultry for egg and meat production with low setup space.",
          investment: "₹25,000 - ₹80,000 (Low to Medium)",
          steps: [
            "Construct a well-ventilated, predator-proof shed using local bamboo and wire mesh.",
            "Select resilient native or improved breeds (like Desi, Kadaknath, or Giriraja) suited for local climate.",
            "Follow strict vaccination schedules and maintain clean, dry drinking water daily.",
            "Sell free-range country eggs and birds directly to local consumers and hotels."
          ],
          tip: "Desi free-range brown eggs sell at ₹12 - ₹15 each compared to ₹6 for regular farm eggs, providing double the margin."
        },
        {
          id: "grocery-retail",
          icon: "🏪",
          title: "Local Grocery / Retail",
          description: "Start a neighborhood store selling essential daily household goods, seeds, and farm inputs.",
          investment: "₹40,000 - ₹1,20,000 (Medium)",
          steps: [
            "Choose a central location near the village chowk, bus stop, or temple.",
            "Stock high-turnover daily essentials: flour, oil, soap, stationery, phone recharge, and organic seeds.",
            "Maintain transparent pricing, clean shelves, and respectful customer service.",
            "Introduce a home delivery service for elderly villagers via phone calls or WhatsApp orders."
          ],
          tip: "Keep an active WhatsApp group for villagers to announce arrival of fresh goods or seasonal farming inputs."
        }
      ]
    },
    schemes: {
      heading: "Government Schemes",
      subheading: "Official government initiatives offering financial subsidies and loans for rural entrepreneurs.",
      btnOfficial: "Official Website",
      badgeVerified: "Verified Official Portal",
      items: [
        {
          id: "pmegp",
          name: "PMEGP",
          fullName: "Prime Minister's Employment Generation Programme",
          purpose: "Supports eligible entrepreneurs in setting up micro-enterprises.",
          details: "A credit-linked subsidy programme by the Ministry of MSME. Rural beneficiaries can receive 25% to 35% government subsidy on project costs up to ₹50 Lakhs for manufacturing and ₹20 Lakhs for service units.",
          officialUrl: "https://www.kviconline.gov.in/pmegpeportal/pmegphome/index.jsp"
        },
        {
          id: "mudra",
          name: "MUDRA",
          fullName: "Pradhan Mantri MUDRA Yojana (PMMY)",
          purpose: "Provides financial support through loans for eligible small businesses.",
          details: "Offers collateral-free institutional credit up to ₹10 Lakhs through banks and microfinance institutions across three categories: Shishu (up to ₹50,000), Kishore (₹50,000 to ₹5 Lakh), and Tarun (₹5 Lakh to ₹10 Lakh).",
          officialUrl: "https://www.mudra.org.in/"
        },
        {
          id: "svep",
          name: "SVEP",
          fullName: "Start-up Village Entrepreneurship Programme",
          purpose: "Supports rural entrepreneurs and promotes rural self-employment.",
          details: "A sub-scheme under Deendayal Antyodaya Yojana - National Rural Livelihoods Mission (DAY-NRLM), Ministry of Rural Development. Helps SHG members and rural youth build sustainable community-based enterprises.",
          officialUrl: "https://nrlm.gov.in/"
        }
      ]
    },
    about: {
      heading: "About GramUdyam",
      tagline: "Academic Mini-Project for Social Impact",
      mainDesc: "GramUdyam is a college mini-project designed to address the language and accessibility challenges faced by rural communities when accessing entrepreneurship learning materials.",
      problemQuote: "Digital content and training materials relevant to rural entrepreneurship are often not available or easily understandable in local languages and dialects prevalent across Maharashtra's diverse rural communities.",
      detailsTitle: "Project Summary",
      themeLabel: "Project Theme",
      themeVal: "Rural Entrepreneurship",
      focusLabel: "Core Focus",
      focusVal: "Local-language digital learning (Marathi, Hindi, English)",
      targetLabel: "Target Users",
      targetVal: "Rural youth, women self-help groups and aspiring small entrepreneurs",
      techLabel: "Technology Stack",
      techVal: "HTML5, CSS3, Vanilla JavaScript, Browser Web Speech API",
      ttsFeatureTitle: "Voice Accessibility (Text-to-Speech)",
      ttsFeatureDesc: "GramUdyam includes a built-in browser speech synthesizer so users who prefer listening can have any learning topic read aloud in their chosen language."
    },
    footer: {
      title: "GramUdyam",
      tagline: "Making entrepreneurship knowledge simple and accessible.",
      quickLinksTitle: "Quick Navigation",
      disclaimer: "College Mini Project — Developed for educational demonstration and rural digital empowerment.",
      copyright: "© 2026 GramUdyam. Built with HTML, CSS & Vanilla JavaScript. Free & Open for Educational Use."
    },
    modal: {
      close: "Close",
      speakNotice: "Click to hear this content spoken aloud in your chosen language.",
      ttsNotSupported: "Text-to-speech is not supported in this browser."
    }
  },

  mr: {
    metaTitle: "ग्रामउद्यम - ग्रामीण उद्योजकता शिक्षण",
    brandName: "ग्रामउद्यम",
    brandTagline: "ग्रामीण उद्योजकता",
    nav: {
      home: "मुख्यपृष्ठ",
      learn: "शिका",
      ideas: "व्यवसाय कल्पना",
      schemes: "सरकारी योजना",
      about: "माहिती"
    },
    hero: {
      tag: "कॉलेज मिनी प्रोजेक्ट • ग्रामीण सबलीकरण",
      title: "शिका. सुरू करा. प्रगती करा.",
      subtitle: "ग्रामीण भागातील लोकांसाठी सोप्या भाषेत उद्योजकता मार्गदर्शन.",
      description: "ग्रामउद्यम ग्रामीण उद्योजकांना मूलभूत व्यवसाय संकल्पना शिकण्यास, स्थानिक व्यवसाय कल्पना शोधण्यास आणि उपयुक्त सरकारी योजना समजून घेण्यास सोप्या स्थानिक भाषेत मदत करते.",
      btnLearn: "शिकायला सुरुवात करा",
      btnSchemes: "योजनांची माहिती पहा",
      quickStat1: "३ भाषांमध्ये",
      quickStat1Desc: "मराठी, हिंदी आणि इंग्रजी",
      quickStat2: "१००% मोफत",
      quickStat2Desc: "सर्वांसाठी सहज उपलब्ध",
      quickStat3: "व्यवहारी ज्ञान",
      quickStat3Desc: "प्रत्यक्ष उदाहरणांसह"
    },
    why: {
      heading: "ग्रामउद्यम का निवडावे?",
      subheading: "ग्रामीण भागातील भाषेची अडचण दूर करून व्यवसाय शिक्षण प्रत्येकापर्यंत पोहोचवण्यासाठी तयार केलेले व्यासपीठ.",
      card1Title: "स्थानिक भाषा",
      card1Desc: "महत्त्वाच्या व्यवसाय संकल्पना सोप्या इंग्रजी, मराठी आणि हिंदीमध्ये शिका.",
      card2Title: "सोपे शिक्षण",
      card2Desc: "नवशिक्यांसाठी उपयुक्त अशी संक्षिप्त आणि प्रत्यक्ष व्यवहारातील माहिती.",
      card3Title: "उपयुक्त माहिती",
      card3Desc: "व्यवसाय कल्पना आणि सरकारी योजनांबद्दलची अचूक मूलभूत माहिती एकाच ठिकाणी."
    },
    learn: {
      heading: "उद्योजकता शिक्षण",
      subheading: "ग्रामीण भागात स्वतःचा छोटा उद्योग यशस्वीपणे सुरू करण्यासाठी उपयुक्त मार्गदर्शन.",
      modalTitlePrefix: "विषय माहिती: ",
      btnLearnMore: "अधिक माहिती",
      listenBtnText: "ऐका (आवाज)",
      stopBtnText: "आवाज थांबवा",
      keyPointsTitle: "महत्त्वाचे मुद्दे:",
      exampleTitle: "गावातील प्रत्यक्ष उदाहरण:",
      topics: [
        {
          id: "business-idea",
          icon: "💡",
          title: "व्यवसाय कल्पना",
          description: "स्थानिक गरजा आणि उपलब्ध साधनांवर आधारित उपयुक्त व्यवसाय कल्पना कशी निवडायची ते शिका.",
          explanation: "एक उत्तम ग्रामीण व्यवसाय कल्पना गावातील दैनंदिन गरजा किंवा शेतीतील कच्च्या मालावर गावातच प्रक्रिया करून निर्माण केली जाऊ शकते.",
          keyPoints: [
            "गावातील लोकांना कोणत्या वस्तू किंवा सेवांसाठी दूरच्या तालुक्याला जावे लागते ते शोधा.",
            "बाहेरून महाग कच्चा माल आणण्याऐवजी गावात उपलब्ध शेतीमाल, दूध किंवा पारंपरिक कौशल्यांचा वापर करा.",
            "सर्व बचत एकाच वेळी न गुंतवता सुरुवातीला लहान प्रमाणावर सुरुवात करा.",
            "स्थानिक दुकानदार आणि गावकऱ्यांशी चर्चा करून त्यांच्या गरजा समजून घ्या."
          ],
          example: "रमेशने पाहिले की टोमॅटोच्या हंगामात गावात टोमॅटो फक्त ₹५ प्रति किलोने विकला जातो, तर शहरात सॉसची बाटली ₹१२० ला मिळते. त्याने घरगुती पद्धतीने टोमॅटो सॉस व प्युरी बनवण्यास सुरुवात केली, ज्यामुळे त्याला त्याच टोमॅटोमधून तिप्पट नफा मिळाला."
        },
        {
          id: "market-research",
          icon: "🔍",
          title: "बाजार संशोधन",
          description: "व्यवसाय सुरू करण्यापूर्वी आपले ग्राहक, प्रतिस्पर्धी आणि स्थानिक बाजारपेठ समजून घ्या.",
          explanation: "बाजार संशोधन म्हणजे पैसे गुंतवण्यापूर्वी प्रत्यक्ष ग्राहकांशी बोलणे, आठवडे बाजारातील भाव तपासणे आणि आपल्या मालाला किती मागणी आहे हे जाणून घेणे.",
          keyPoints: [
            "आपला माल कोण विकत घेईल हे निश्चित करा: शेजारी, स्थानिक हॉटेल्स, आठवडे बाजार की शहरातील व्यापारी.",
            "गावातील किंवा तालुक्याच्या आठवडे बाजारात जाऊन कोणत्या वस्तू पटकन विकल्या जातात आणि त्यांचे भाव काय आहेत ते पहा.",
            "इतर विक्रेते काय विकत आहेत आणि आपण त्यांच्यापेक्षा अधिक चांगला, ताजा किंवा नीट पॅक केलेला माल कसा देऊ शकतो ते ठरवा.",
            "आपण दर आठवड्याला अंदाजे किती माल विकू शकतो याचा हिशोब करा."
          ],
          example: "सुनीताला तालुक्यात घरगुती आयुर्वेदिक साबण विकायचा होता. तिने एकाच वेळी ५०० साबण न बनवता प्रथम २० साबण बनवले, शेजारी व ब्युटी पार्लरमध्ये नमुने दिले आणि त्यांचा प्रतिसाद पाहून साबणाचा दर्जा अधिक सुधारला."
        },
        {
          id: "finance-budgeting",
          icon: "💰",
          title: "वित्त आणि अंदाजपत्रक",
          description: "व्यवसायाचा खर्च, किंमत ठरवणे, बचत आणि नफा यांचे मूलभूत नियम शिका.",
          explanation: "व्यवसायात यश मिळवण्यासाठी घरचा खर्च आणि व्यवसायाचे पैसे नेहमी वेगळे ठेवावेत. दररोजचा खर्च व नफा वहीत लिहून ठेवण्याची सवय ठेवावी.",
          keyPoints: [
            "कायमचा खर्च (यंत्रसामग्री) आणि दैनंदिन खर्च (कच्चा माल) यांची स्वतंत्र नोंद ठेवा.",
            "किंमत ठरवण्याचे सूत्र: विक्री किंमत = कच्चा माल + मजुरी/वेळ + वाहतूक खर्च + २०% नफा.",
            "घरगुती खर्चाचे पैसे आणि व्यवसायातील गल्ल्यातील पैसे कधीही एकत्र करू नका.",
            "उधारी आणि रोख व्यवहारांसाठी एक साधी हिशोबाची वही (खातावही) नियमितपणे वापरा."
          ],
          example: "बाळासाहेबांनी गावात मसाला गिरणी सुरू केली. त्यांनी घरासाठी एक आणि गिरणीसाठी दुसरे असे दोन स्वतंत्र बँक खाते उघडले. दररोज संध्याकाळी ₹७०० कच्च्या मिरच्यांचा खर्च आणि ₹१,३०० मसाला विक्री लिहून ठेवली, ज्यामुळे गिरणीच्या देखभालीसाठी नेहमी पैसे शिल्लक राहिले."
        },
        {
          id: "digital-marketing",
          icon: "📱",
          title: "डिजिटल मार्केटिंग",
          description: "व्हॉट्सॲप, सोशल मीडिया आणि इतर डिजिटल माध्यमांद्वारे व्यवसायाची जाहिरात कशी करायची ते शिका.",
          explanation: "जाहिरातीसाठी लाखो रुपये खर्च करण्याची गरज नाही. स्मार्टफोनेमधील मोफत व्हॉट्सॲप बिझनेस, गुगल मॅप्स आणि सोशल मीडियाच्या माध्यमातून थेट ग्राहकांपर्यंत पोहोचता येते.",
          keyPoints: [
            "व्हॉट्सॲप बिझनेस (WhatsApp Business) वर आपल्या उत्पादनांचे फोटो आणि दर असलेला कॅटलॉग बनवा.",
            "उत्पादने तयार करतानाचा व्हिडिओ (स्वच्छता, पारंपरिक पद्धत) मोबाईलने शूट करून स्टेटसला ठेवा.",
            "आपले दुकान किंवा फार्म गुगल मॅप्स (Google Maps) वर जोडा, जेणेकरून बाहेरचे ग्राहकही सहज पोहोचू शकतील.",
            "ग्राहकांसाठी फोनपे (PhonePe), गुगल पे किंवा भीम यूपीआय (UPI) पेमेंटची सोय ठेवा."
          ],
          example: "साताऱ्यातील एका महिला बचत गटाने गावरान हळद तयार केली. त्यांनी व्हॉट्सॲप ग्रुपवर हळदीच्या पॅकिंगचे फोटो शेअर केले. दोनच महिन्यांत पुण्यातील ग्राहकांकडून दरमहा हळदीच्या नियमित ऑर्डर्स थेट यूपीआयने पैसे भरून येऊ लागल्या."
        },
        {
          id: "how-to-start",
          icon: "🚀",
          title: "व्यवसाय कसा सुरू करावा",
          description: "छोट्या व्यवसायाचे नियोजन आणि प्रत्यक्ष सुरुवात करण्यासाठीचे महत्त्वाचे टप्पे जाणून घ्या.",
          explanation: "व्यवसाय सुरू करणे म्हणजे पद्धतशीरपणे नियोजन करून, आवश्यक नोंदणी पूर्ण करून आणि पहिल्या १० समाधानी ग्राहकांपासून सुरुवात करणे होय.",
          keyPoints: [
            "टप्पा १: एका पानावर लिहून काढा - काय विकणार, कोण घेणार आणि एकूण किती भांडवल लागेल.",
            "टप्पा २: आधार कार्डावरून मोफत उद्यम नोंदणी (Udyam MSME) आणि ग्रामपंचायतीचा दाखला मिळवा.",
            "टप्पा ३: स्वतःची बचत, महिला बचत गट किंवा मुद्रा योजनेतून आवश्यक तेवढेच कर्ज घ्या.",
            "टप्पा ४: सुरुवातीला लहान तुकडी (Batch) तयार करा, ग्राहकांचे अभिप्राय घ्या आणि हळूहळू व्यवसाय वाढवा."
          ],
          example: "प्रविणने लाकडी घाण्यावर शुद्ध शेंगदाणा तेल काढण्याचा व्यवसाय सुरू केला. त्याने प्रथम आधार कार्डावरून मोफत उद्यम नोंदणी केली, मुद्रा योजनेतून छोटे कर्ज घेऊन घाणा बसवला आणि पहिल्याच महिन्यात गावातील कुटुंबांना ५० लिटर तेल विकले."
        }
      ]
    },
    ideas: {
      heading: "ग्रामीण व्यवसाय कल्पना",
      subheading: "स्थानिक साधनांवर आधारित गावातच सुरू करता येणारे फायदेशीर उद्योग.",
      btnLearnMore: "अधिक माहिती",
      investmentLabel: "अंदाजे सुरुवातीचे भांडवल:",
      stepsLabel: "सुरुवात कशी करावी:",
      tipsLabel: "महत्त्वाची स्थानिक टीप:",
      items: [
        {
          id: "food-processing",
          icon: "🌾",
          title: "अन्न प्रक्रिया उद्योग",
          description: "लोणचे, पापड, मसाले किंवा पीठ तयार करून शेतीमालाला जास्त भाव मिळवा.",
          investment: "₹१५,००० ते ₹५०,००० (कमी ते मध्यम)",
          steps: [
            "गावातील शेतकऱ्यांकडून थेट चांगल्या दर्जाचा हंगामी शेतीमाल योग्य भावात खरेदी करा.",
            "स्वच्छता आणि गुणवत्तेचे नियम पाळा तसेच अन्न सुरक्षा नोंदणी (FSSAI) घ्या.",
            "उत्पादने आकर्षक पाऊचमध्ये पॅक करून त्यावर उत्पादन तारीख आणि वजन लिहा.",
            "स्थानिक दुकाने, आठवडे बाजार आणि शहरातील परिचितांना विक्री करा."
          ],
          tip: "प्रक्रियेमुळे नफा वाढतो: कच्ची कैरी ₹२० प्रति किलो विकते, पण त्याच कैरीचे लोणचे ₹२०० प्रति किलोने विकले जाते."
        },
        {
          id: "dairy-products",
          icon: "🥛",
          title: "दुग्ध व्यवसाय व दुग्धजन्य पदार्थ",
          description: "दूध, दही, पनीर आणि साजूक तूप तयार करून स्थानिक बाजारात विक्री करा.",
          investment: "₹३०,००० ते ₹१,००,००० (मध्यम)",
          steps: [
            "जनावरांची स्वच्छता आणि सकस आहाराची व्यवस्था करा.",
            "फक्त दूध विकण्यापेक्षा पनीर, दही आणि साजूक तूप यांसारखी उत्पादने बनवा.",
            "स्वच्छ काचेच्या किंवा फूड-ग्रेड बरण्यांमध्ये पॅकिंग करा.",
            "स्थानिक हॉटेल्स, लग्न समारंभ आणि जवळच्या शहरातील सोसायट्यांमध्ये थेट पुरवठा करा."
          ],
          tip: "गावरान गाईचे बिलोना पद्धतीने काढलेले तूप शहरात ₹१,५०० ते ₹२,५०० प्रति किलो भावाने सहज विकले जाते."
        },
        {
          id: "handmade-products",
          icon: "🎨",
          title: "हस्तकला आणि गृहउद्योग",
          description: "बांबूच्या वस्तू, कापडी पिशव्या, मातीची भांडी आणि सजावटीच्या वस्तूंची निर्मिती करा.",
          investment: "₹५,००० ते ₹२५,००० (फारच कमी)",
          steps: [
            "गावातील कुशल कारागीर किंवा बचत गटातील महिलांना एकत्र आणा.",
            "कापडी पिशव्या, बांबूच्या टोपल्या, पायपुसणी किंवा मातीचे दिवे यांसारख्या पर्यावरणपूरक वस्तू बनवा.",
            "वस्तूंचे फिनिशिंग आणि मजबुती यावर विशेष लक्ष द्या.",
            "जिल्हा प्रदर्शन, ग्रामीण जत्रा आणि सोशल मीडियाच्या माध्यमातून विक्री करा."
          ],
          tip: "प्लास्टिक बंदीमुळे स्थानिक किराणा आणि कपड्यांच्या दुकानांना कापडी पिशव्यांची वर्षभर मोठी मागणी असते."
        },
        {
          id: "organic-farming",
          icon: "🌱",
          title: "सेंद्रिय शेती",
          description: "रासायनिक खतांशिवाय विषमुक्त भाजीपाला, फळे व अन्नधान्य पिकवून चांगला नफा कमवा.",
          investment: "₹२०,००० ते ₹६०,००० (कमी)",
          steps: [
            "घरीच गांडूळ खत, जीवामृत आणि दशपर्णी अर्क तयार करा.",
            "सुरुवातीला १ किंवा २ एकर जमिनीत रासायनिक खते न वापरता भाजीपाला लावा.",
            "शेवगा, देशी पालेभाज्या आणि भरडधान्ये (ज्वारी, बाजरी, नाचणी) यांसारखी मागणी असलेली पिके निवडा.",
            "शहरातील ग्राहकांचे ग्रुप बनवून दर आठवड्याला थेट भाजीपाला बास्केट घरपोच पोहोचवा."
          ],
          tip: "शहरातील २० ते ३० कुटुंबांना थेट जोडा, जे दरमहा आगाऊ पैसे देऊन दर आठवड्याला ताजी सेंद्रिय भाजी घेतात."
        },
        {
          id: "poultry-farming",
          icon: "🐔",
          title: "कुक्कुटपालन",
          description: "कमी जागेत आणि कमी भांडवलात गावरान किंवा ब्रॉयलर कोंबडी पालन व्यवसाय सुरू करा.",
          investment: "₹२५,००० ते ₹८०,००० (कमी ते मध्यम)",
          steps: [
            "बांबू आणि जाळीचा वापर करून हवेशीर व सुरक्षित शेड तयार करा.",
            "स्थानिक वातावरणात टिकणाऱ्या देशी, कावेरी किंवा कडकनाथ जातींची निवड करा.",
            "वेळेवर लसीकरण आणि पिण्यासाठी स्वच्छ पाण्याची सोय ठेवा.",
            "गावरान अंडी आणि पक्षी स्थानिक बाजार आणि हॉटेल्समध्ये थेट विका."
          ],
          tip: "गावरान अंड्याला बाजारात ₹१२ ते ₹१५ भाव मिळतो, जो साध्या अंड्यापेक्षा दुप्पट नफा मिळवून देतो."
        },
        {
          id: "grocery-retail",
          icon: "🏪",
          title: "स्थानिक किराणा व किरकोळ दुकान",
          description: "गावात दैनंदिन गरजेच्या वस्तू, शेती बी-बियाणे आणि किराणा मालाचे दुकान चालवा.",
          investment: "₹४०,००० ते ₹१,२०,००० (मध्यम)",
          steps: [
            "गावातील चौक, बस स्टॉप किंवा मंदिराच्या जवळ योग्य जागेची निवड करा.",
            "डाळी, तेल, साबण, स्टेशनरी आणि शेती बियाणे यांसारख्या सतत लागणाऱ्या वस्तू ठेवा.",
            "योग्य भाव, प्रामाणिक वजन आणि ग्राहकांशी आदराची वागणूक ठेवा.",
            "वृद्ध किंवा गरजू गावकऱ्यांसाठी फोनवर ऑर्डर घेऊन घरपोच सामान देण्याची सोय ठेवा."
          ],
          tip: "गावातील ग्राहकांसाठी एक व्हॉट्सॲप ग्रुप बनवा, ज्यावर नवीन माल आल्याची माहिती लगेच देता येईल."
        }
      ]
    },
    schemes: {
      heading: "सरकारी योजना",
      subheading: "ग्रामीण उद्योजकांसाठी आर्थिक अनुदान आणि कर्ज देणाऱ्या अधिकृत सरकारी योजना.",
      btnOfficial: "अधिकृत वेबसाईट",
      badgeVerified: "सत्यापित अधिकृत पोर्टल",
      items: [
        {
          id: "pmegp",
          name: "PMEGP (पंतप्रधान रोजगार निर्मिती कार्यक्रम)",
          fullName: "Prime Minister's Employment Generation Programme",
          purpose: "पात्र उद्योजकांना नवीन सूक्ष्म उद्योग उभारण्यासाठी आर्थिक अनुदान व पाठबळ देते.",
          details: "सूक्ष्म, लघु व मध्यम उद्योग मंत्रालयाची योजना. ग्रामीण भागातील उद्योगांसाठी २५% ते ३५% पर्यंत सरकारी अनुदान मिळते. उत्पादन उद्योगासाठी ₹५० लाखांपर्यंत आणि सेवा उद्योगासाठी ₹२० लाखांपर्यंत प्रकल्प मर्यादा.",
          officialUrl: "https://www.kviconline.gov.in/pmegpeportal/pmegphome/index.jsp"
        },
        {
          id: "mudra",
          name: "MUDRA (मुद्रा योजना)",
          fullName: "Pradhan Mantri MUDRA Yojana (PMMY)",
          purpose: "पात्र छोट्या व्यावसायिकांना विनातारण कर्ज स्वरूपात आर्थिक पाठबळ पुरवते.",
          details: "बँकांमार्फत ₹१० लाखांपर्यंत विनातारण कर्ज मिळते. शिशु (₹५०,००० पर्यंत), किशोर (₹५०,००० ते ₹५ लाख) आणि तरुण (₹५ लाख ते ₹१० लाख) अशा तीन टप्प्यांत कर्ज उपलब्ध.",
          officialUrl: "https://www.mudra.org.in/"
        },
        {
          id: "svep",
          name: "SVEP (स्टार्ट-अप व्हिलेज योजना)",
          fullName: "Start-up Village Entrepreneurship Programme",
          purpose: "ग्रामीण भागातील नवउद्योजकांना मदत करून स्वयंरोजगाराला प्रोत्साहन देते.",
          details: "ग्रामीण विकास मंत्रालयाच्या राष्ट्रीय ग्रामीण जीवनोन्नती अभियानांतर्गत (NRLM) राबवली जाणारी योजना. महिला बचत गटातील सदस्य आणि ग्रामीण तरुणांना गावातच व्यवसाय सुरू करण्यासाठी आर्थिक व तांत्रिक मार्गदर्शन.",
          officialUrl: "https://nrlm.gov.in/"
        }
      ]
    },
    about: {
      heading: "ग्रामउद्यम विषयी",
      tagline: "सामाजिक प्रगतीसाठी शैक्षणिक मिनी-प्रोजेक्ट",
      mainDesc: "ग्रामउद्यम हा ग्रामीण भागातील लोकांना उद्योजकतेचे शिक्षण स्थानिक भाषेत सहज उपलब्ध करून देण्यासाठी तयार केलेला कॉलेज मिनी प्रोजेक्ट आहे.",
      problemQuote: "महाराष्ट्रभरातील विविध ग्रामीण भागांत स्थानिक भाषेत उद्योजकतेची माहिती व प्रशिक्षण साहित्य सहजासहजी उपलब्ध नसते किंवा समजण्यास कठीण असते.",
      detailsTitle: "प्रोजेक्ट माहिती",
      themeLabel: "प्रोजेक्ट विषय",
      themeVal: "ग्रामीण उद्योजकता (Rural Entrepreneurship)",
      focusLabel: "मुख्य उद्देश",
      focusVal: "स्थानिक भाषेतील डिजिटल शिक्षण (मराठी, हिंदी, इंग्रजी)",
      targetLabel: "लक्षित वर्ग",
      targetVal: "ग्रामीण युवक, महिला बचत गट आणि इच्छुक छोटे व्यावसायिक",
      techLabel: "तंत्रज्ञान",
      techVal: "HTML5, CSS3, Vanilla JavaScript, Browser Web Speech API",
      ttsFeatureTitle: "आवाज सुविधा (Text-to-Speech)",
      ttsFeatureDesc: "ग्रामउद्यममध्ये आवाजाची इन-बिल्ट सोय आहे, ज्यामुळे वाचण्याऐवजी ऐकून माहिती समजून घेणे ग्रामीण वापरकर्त्यांसाठी सोपे होते."
    },
    footer: {
      title: "ग्रामउद्यम",
      tagline: "उद्योजकतेचे ज्ञान प्रत्येकासाठी सोपे आणि सुलभ बनवणे.",
      quickLinksTitle: "महत्त्वाचे दुवे",
      disclaimer: "कॉलेज मिनी प्रोजेक्ट — शैक्षणिक प्रात्यक्षिक आणि ग्रामीण डिजिटल सबलीकरणासाठी तयार केलेला.",
      copyright: "© २०२६ ग्रामउद्यम. HTML, CSS आणि JavaScript द्वारे निर्मित. शैक्षणिक उपयोगासाठी पूर्णपणे मोफत."
    },
    modal: {
      close: "बंद करा",
      speakNotice: "निवडलेल्या भाषेत माहिती ऐकण्यासाठी क्लिक करा.",
      ttsNotSupported: "या ब्राउझरमध्ये आवाज सुविधा उपलब्ध नाही."
    }
  },

  hi: {
    metaTitle: "ग्रामउद्यम - ग्रामीण उद्यमिता शिक्षण",
    brandName: "ग्रामउद्यम",
    brandTagline: "ग्रामीण उद्यमिता",
    nav: {
      home: "होम",
      learn: "सीखें",
      ideas: "बिज़नेस आइडिया",
      schemes: "सरकारी योजनाएं",
      about: "परिचय"
    },
    hero: {
      tag: "कॉलेज मिनी प्रोजेक्ट • ग्रामीण सशक्तिकरण",
      title: "सीखें. शुरू करें. आगे बढ़ें.",
      subtitle: "ग्रामीण समुदायों के लिए सरल भाषा में उद्यमिता ज्ञान।",
      description: "ग्रामउद्यम ग्रामीण उद्यमियों को सरल स्थानीय भाषाओं में बुनियादी व्यापारिक अवधारणाएं सीखने, नए बिज़नेस आइडिया खोजने और उपयोगी सरकारी योजनाओं को समझने में मदद करता है।",
      btnLearn: "सीखना शुरू करें",
      btnSchemes: "योजनाएं देखें",
      quickStat1: "३ भाषाओं में",
      quickStat1Desc: "अंग्रेज़ी, मराठी और हिंदी",
      quickStat2: "१००% मुफ्त",
      quickStat2Desc: "सभी के लिए सुलभ",
      quickStat3: "व्यावहारिक ज्ञान",
      quickStat3Desc: "वास्तविक उदाहरणों सहित"
    },
    why: {
      heading: "ग्रामउद्यम ही क्यों?",
      subheading: "ग्रामीण व्यापार शिक्षा में भाषा की बाधा को समाप्त करने के लिए तैयार किया गया मंच।",
      card1Title: "स्थानीय भाषा",
      card1Desc: "महत्वपूर्ण बिज़नेस कॉन्सेप्ट्स को सरल अंग्रेज़ी, मराठी और हिंदी में सीखें।",
      card2Title: "आसान समझ",
      card2Desc: "शुरुआती लोगों के लिए तैयार की गई छोटी और व्यावहारिक जानकारी।",
      card3Title: "उपयोगी जानकारी",
      card3Desc: "बिज़नेस आइडियाज़ और सरकारी योजनाओं की प्रामाणिक जानकारी एक ही जगह।"
    },
    learn: {
      heading: "उद्यमिता सीखें",
      subheading: "ग्रामीण क्षेत्र में एक सफल छोटा व्यापार शुरू करने के लिए व्यावहारिक कदम।",
      modalTitlePrefix: "विषय गाइड: ",
      btnLearnMore: "और जानें",
      listenBtnText: "बोलकर सुनें",
      stopBtnText: "आवाज़ रोकें",
      keyPointsTitle: "मुख्य बिंदु:",
      exampleTitle: "गांव का वास्तविक उदाहरण:",
      topics: [
        {
          id: "business-idea",
          icon: "💡",
          title: "बिज़नेस आइडिया",
          description: "स्थानीय जरूरतों और उपलब्ध संसाधनों के आधार पर सही बिज़नेस आइडिया कैसे चुनें, यह सीखें।",
          explanation: "एक बेहतरीन ग्रामीण व्यापार विचार वह होता है जो गांव की किसी दैनिक समस्या को हल करे या स्थानीय कृषि उपज को मूल्यवान बनाकर बेचे।",
          keyPoints: [
            "ध्यान दें कि गांव के लोगों को किन वस्तुओं या सेवाओं के लिए दूर कस्बे में जाना पड़ता है।",
            "बाहर से महंगी सामग्री लाने के बजाय स्थानीय फसल, दूध या पारंपरिक हुनर का उपयोग करें।",
            "बड़ी रकम लगाने से पहले शुरुआत में छोटे स्तर पर प्रयोग करें।",
            "स्थानीय दुकानदारों और पड़ोसियों से उनकी अधूरी जरूरतों के बारे में बातचीत करें।"
          ],
          example: "रमेश ने देखा कि फसल के समय गांव में टमाटर केवल ₹५ किलो बिकता था, जबकि कस्बे में सॉस की बोतल ₹१२० में मिलती थी। उसने घर में टमाटर प्यूरी और सॉस बनाना शुरू किया, जिससे उसे उसी टमाटर से तिगुना मुनाफा मिला।"
        },
        {
          id: "market-research",
          icon: "🔍",
          title: "बाज़ार रिसर्च",
          description: "बिज़नेस शुरू करने से पहले अपने ग्राहकों, प्रतिस्पर्धियों और स्थानीय बाज़ार को समझें।",
          explanation: "बाज़ार रिसर्च का अर्थ है पैसे खर्च करने से पहले असली ग्राहकों से बात करना, साप्ताहिक हाट में कीमतों को देखना और मांग का सही अनुमान लगाना।",
          keyPoints: [
            "तय करें कि आपका ग्राहक कौन है: पड़ोसी, स्थानीय ढाबे या शहर के थोक खरीदार।",
            "साप्ताहिक बाज़ार (हाट) में जाकर देखें कि कौन सी वस्तुएं तेजी से बिकती हैं और किस दाम पर।",
            "मौजूदा विक्रेताओं के उत्पाद देखें और सोचें कि आपका सामान उनसे अधिक ताज़ा, साफ़ या बेहतर कैसे हो सकता है।",
            "हर हफ्ते आप कितना माल आसानी से बेच सकते हैं, इसका यथार्थवादी अनुमान लगाएं।"
          ],
          example: "सुनीता अपने कस्बे में हर्बल साबुन बेचना चाहती थी। उसने एक साथ ५०० साबुन बनाने के बजाय २० साबुन बनाए, पड़ोसियों और स्थानीय पार्लर में मुफ्त सैंपल दिए और उनकी राय लेकर नुस्खा बेहतर किया।"
        },
        {
          id: "finance-budgeting",
          icon: "💰",
          title: "वित्त और बजट",
          description: "व्यापार के खर्च, मूल्य निर्धारण, बचत और मुनाफे के बुनियादी नियम समझें।",
          explanation: "सफल व्यापार के लिए घर के खर्चे और दुकान के पैसे को हमेशा अलग रखना चाहिए, और रोज़ाना के लेन-देन को डायरी में लिखना चाहिए।",
          keyPoints: [
            "स्थायी लागत (मशीन) और दैनिक लागत (कच्चा माल) का अलग-अलग हिसाब रखें।",
            "सही कीमत का नियम: बिक्री मूल्य = कच्चा माल + आपकी मेहनत का समय + परिवहन + २०% मुनाफा।",
            "घर के खर्चे के पैसे और दुकान की बिक्री के पैसे कभी न मिलाएं।",
            "उधारी और नकद का हिसाब रखने के लिए रोज़ाना एक खाता-बही नियमित रूप से भरें।"
          ],
          example: "बालासाहेब ने मसाले पीसने की चक्की लगाई। उन्होंने घर और चक्की के लिए दो अलग बैंक खाते खोले। रोज़ शाम ₹७०० मिर्च का खर्च और ₹१,३०० की बिक्री डायरी में दर्ज की, जिससे चक्की की मरम्मत के लिए हमेशा पैसे सुरक्षित रहे।"
        },
        {
          id: "digital-marketing",
          icon: "📱",
          title: "डिजिटल मार्केटिंग",
          description: "व्हाट्सएप, सोशल मीडिया और डिजिटल प्लेटफॉर्म के ज़रिये अपने व्यापार का प्रचार करना सीखें।",
          explanation: "महंगे विज्ञापनों की जरूरत नहीं है। व्हाट्सएप बिजनेस, गूगल मैप्स और स्मार्टफोन से आप अपने गांव के उत्पाद सीधे शहर के ग्राहकों तक पहुंचा सकते हैं।",
          keyPoints: [
            "व्हाट्सएप बिजनेस पर अपने उत्पादों की फोटो और तय दामों के साथ कैटलॉग बनाएं।",
            "सामान बनाते समय की शुद्धता और सफाई का १५-सेकंड का वीडियो बनाकर स्टेटस पर लगाएं।",
            "अपनी दुकान या खेत की लोकेशन गूगल मैप्स (Google Maps) पर जोड़ें ताकि बाहर के ग्राहक आसानी से पहुंच सकें।",
            "ग्राहकों की सुविधा के लिए फोनपे, गूगल पे या यूपीआई क्यूआर कोड (QR Code) ज़रूर रखें।"
          ],
          example: "सतारा के एक महिला स्व-सहायता समूह ने शुद्ध हल्दी तैयार की। उन्होंने व्हाट्सएप ग्रुप पर फोटो शेयर किए। दो महीने के भीतर पुणे के ग्राहकों से हर महीने नियमित ऑर्डर सीधे यूपीआई भुगतान के साथ मिलने लगे।"
        },
        {
          id: "how-to-start",
          icon: "🚀",
          title: "बिज़नेस कैसे शुरू करें",
          description: "छोटे व्यापार की योजना बनाने और उसे शुरू करने के प्रमुख चरणों को समझें।",
          explanation: "व्यापार शुरू करना एक योजनाबद्ध प्रक्रिया है जिसमें विचार को परखना, बुनियादी पंजीकरण करना और पहले १० संतुष्ट ग्राहकों तक पहुंचना शामिल है।",
          keyPoints: [
            "चरण १: एक पन्ने पर लिखें - क्या उत्पाद है, खरीदार कौन है और कुल कितनी लागत आएगी।",
            "चरण २: आधार कार्ड से मुफ्त उद्यम आधार (MSME) पंजीकरण और ग्राम पंचायत एनओसी प्राप्त करें।",
            "चरण ३: बचत, स्वयं सहायता समूह या मुद्रा योजना से आवश्यक पूंजी का प्रबंध करें।",
            "चरण ४: पहले छोटा बैच तैयार करें, ग्राहकों की प्रतिक्रिया लें और धीरे-धीरे उत्पादन बढ़ाएं।"
          ],
          example: "प्रवीण ने शुद्ध मूंगफली तेल निकालने का काम शुरू किया। उसने पहले आधार कार्ड से मुफ्त उद्यम पंजीकरण कराया, मुद्रा योजना से छोटा लोन लिया, छोटी मशीन लगाई और पहले महीने में ही स्थानीय परिवारों को ५० लीटर तेल बेचा।"
        }
      ]
    },
    ideas: {
      heading: "ग्रामीण बिज़नेस आइडियाज़",
      subheading: "स्थानीय संसाधनों पर आधारित गांव में शुरू किए जा सकने वाले व्यावहारिक व्यवसाय।",
      btnLearnMore: "और जानें",
      investmentLabel: "अनुमानित शुरुआती लागत:",
      stepsLabel: "शुरुआत कैसे करें:",
      tipsLabel: "महत्वपूर्ण स्थानीय सुझाव:",
      items: [
        {
          id: "food-processing",
          icon: "🌾",
          title: "खाद्य प्रसंस्करण",
          description: "अचार, पापड़, मसाले और आटा चक्की जैसे उत्पाद बनाकर कृषि उपज का बेहतर दाम पाएं।",
          investment: "₹१५,००० से ₹५०,००० (कम से मध्यम)",
          steps: [
            "स्थानीय किसानों से सीधे अच्छी गुणवत्ता का मौसमी कच्चा माल उचित मूल्य पर खरीदें।",
            "रसोई में स्वच्छता बनाए रखें और बुनियादी FSSAI पंजीकरण प्राप्त करें।",
            "सामान को सीलबंद पाउच में पैक करें और निर्माण तिथि व सामग्री का लेबल लगाएं।",
            "गांव की दुकानों, साप्ताहिक हाट और शहर के परिचितों को सीधे बेचें।"
          ],
          tip: "प्रसंस्करण से कमाई कई गुना बढ़ती है: कच्चा आम ₹२० प्रति किलो बिकता है, लेकिन उसी आम का अचार ₹२०० प्रति किलो में आसानी से बिकता है।"
        },
        {
          id: "dairy-products",
          icon: "🥛",
          title: "दुग्ध व्यवसाय व डेयरी उत्पाद",
          description: "ताज़ा दूध, पनीर, दही और शुद्ध घी बनाकर स्थानीय बाज़ारों में बेचें।",
          investment: "₹३०,००० से ₹१,००,००० (मध्यम)",
          steps: [
            "पशुओं के लिए स्वच्छ वातावरण और पौष्टिक चारे की व्यवस्था करें।",
            "केवल कच्चा दूध बेचने के बजाय पनीर, दही और देशी घी जैसे उत्पाद तैयार करें।",
            "स्वच्छ कांच या फ़ूड-ग्रेड डिब्बों में सुरक्षित पैकिंग करें।",
            "स्थानीय हलवाई, विवाह कैटरर्स और नज़दीकी कस्बे की हाउसिंग सोसायटियों से संपर्क करें।"
          ],
          tip: "देशी गाय का बिलोना घी शहरों में ₹१,५०० से ₹२,५०० प्रति किलो के प्रीमियम भाव पर बिकता है।"
        },
        {
          id: "handmade-products",
          icon: "🎨",
          title: "हस्तशिल्प और कुटीर उद्योग",
          description: "बांस की वस्तुएं, कपड़े के थैले और पारंपरिक सजावटी सामान तैयार करें।",
          investment: "₹५,००० से ₹२५,००० (अत्यंत कम)",
          steps: [
            "गांव के पारंपरिक कारीगरों या महिला स्वयं सहायता समूह को एक साथ जोड़ें।",
            "कपड़े के थैले, बांस की टोकरियां, जूट के पायदान या मिट्टी के बर्तन बनाएं।",
            "तैयार उत्पादों की फिनिशिंग और मजबूती पर विशेष ध्यान दें।",
            "जिला स्तर की प्रदर्शनियों, ग्रामीण मेलों और सोशल मीडिया पर उत्पादों का प्रदर्शन करें।"
          ],
          tip: "प्लास्टिक प्रतिबंध के कारण स्थानीय किराना और कपड़ों की दुकानों में कपड़े के थैलों की मांग साल भर बनी रहती है।"
        },
        {
          id: "organic-farming",
          icon: "🌱",
          title: "जैविक खेती",
          description: "बिना रासायनिक दवाओं के फल, सब्जियां और अनाज उगाकर अच्छा मुनाफा कमाएं।",
          investment: "₹२०,००० से ₹६०,००० (कम)",
          steps: [
            "घर पर ही केंचुआ खाद (वर्मीकम्पोस्ट), जीवामृत और प्राकृतिक कीटनाशक तैयार करें।",
            "शुरुआत में खेत के छोटे हिस्से में बिना रसायन के खेती का अनुभव लें।",
            "सहजन (मोरिंगा), देशी हरी सब्जियां और मोटे अनाज (मिलेट्स) जैसी मांग वाली फसलें चुनें।",
            "नज़दीकी शहर के परिवारों का एक ग्रुप बनाकर हर हफ्ते ताज़ी सब्जियों की बास्केट पहुंचाएं।"
          ],
          tip: "शहर के २०-३० परिवारों को सीधे जोड़ें, जो हर महीने अग्रिम भुगतान कर साप्ताहिक ताज़ी जैविक सब्जियां लेते हैं।"
        },
        {
          id: "poultry-farming",
          icon: "🐔",
          title: "मुर्गी पालन",
          description: "कम जगह और कम लागत में देशी व ब्रायलर मुर्गी पालन का व्यवसाय शुरू करें।",
          investment: "₹२५,००० से ₹८०,००० (कम से मध्यम)",
          steps: [
            "स्थानीय बांस और जाली की मदद से हवादार और सुरक्षित बाड़ा बनाएं।",
            "स्थानीय जलवायु के अनुकूल मजबूत देशी, कड़कनाथ या गिरिराज नस्ल चुनें।",
            "नियमित टीकाकरण कराएं और पीने के लिए रोज़ साफ़ पानी उपलब्ध कराएं।",
            "देशी अंडे और मुर्गियां स्थानीय बाज़ार व होटलों में सीधे बेचें।"
          ],
          tip: "देशी भूरे अंडे बाज़ार में ₹१२ से ₹१५ प्रति अंडा बिकते हैं, जिससे साधारण अंडों की तुलना में दोगुना मुनाफा होता है।"
        },
        {
          id: "grocery-retail",
          icon: "🏪",
          title: "स्थानीय किराना व खुदरा दुकान",
          description: "दैनिक उपयोग का सामान, बीज-खाद और किराना स्टोर शुरू करें।",
          investment: "₹४०,००० से ₹१,२०,००० (मध्यम)",
          steps: [
            "गांव के मुख्य चौराहे, बस स्टैंड या मंदिर के पास दुकान की जगह चुनें।",
            "आटा, तेल, साबुन, स्टेशनरी और उन्नत बीज जैसी दैनिक उपयोग की वस्तुएं रखें।",
            "उचित मूल्य, सही तौल और ग्राहकों के साथ सम्मानजनक व्यवहार रखें।",
            "बुजुर्ग ग्रामीणों के लिए फोन पर आर्डर लेकर घर तक सामान पहुंचाने की सुविधा दें।"
          ],
          tip: "गांव के ग्राहकों का एक व्हाट्सएप ग्रुप बनाएं ताकि नया माल आने की सूचना तुरंत दी जा सके।"
        }
      ]
    },
    schemes: {
      heading: "सरकारी योजनाएं",
      subheading: "ग्रामीण उद्यमियों को वित्तीय सब्सिडी और ऋण सहायता प्रदान करने वाली आधिकारिक योजनाएं।",
      btnOfficial: "आधिकारिक वेबसाइट",
      badgeVerified: "सत्यापित आधिकारिक पोर्टल",
      items: [
        {
          id: "pmegp",
          name: "PMEGP (प्रधानमंत्री रोजगार सृजन कार्यक्रम)",
          fullName: "Prime Minister's Employment Generation Programme",
          purpose: "पात्र उद्यमियों को नए सूक्ष्म उद्यम स्थापित करने हेतु वित्तीय सहायता और सब्सिडी प्रदान करता है।",
          details: "एमएसएमई मंत्रालय की क्रेडिट-लिंक्ड सब्सिडी योजना। ग्रामीण क्षेत्र के उद्यमियों को २५% से ३५% तक सरकारी अनुदान मिलता है। विनिर्माण के लिए ₹५० लाख और सेवा उद्योग के लिए ₹२० लाख तक की परियोजना सीमा।",
          officialUrl: "https://www.kviconline.gov.in/pmegpeportal/pmegphome/index.jsp"
        },
        {
          id: "mudra",
          name: "MUDRA (प्रधानमंत्री मुद्रा योजना)",
          fullName: "Pradhan Mantri MUDRA Yojana (PMMY)",
          purpose: "पात्र छोटे व्यवसायों को ऋण (लोन) के माध्यम से वित्तीय सहायता उपलब्ध कराता है।",
          details: "बैंकों द्वारा बिना किसी गारंटी के ₹१० लाख तक का ऋण प्रदान किया जाता है। शिशु (₹५०,००० तक), किशोर (₹५०,००० से ₹५ लाख) और तरुण (₹५ लाख से ₹१० लाख) श्रेणियों में सहायता।",
          officialUrl: "https://www.mudra.org.in/"
        },
        {
          id: "svep",
          name: "SVEP (स्टार्ट-अप विलेज योजना)",
          fullName: "Start-up Village Entrepreneurship Programme",
          purpose: "ग्रामीण उद्यमियों को सहयोग देकर ग्रामीण स्वरोजगार को बढ़ावा देता है।",
          details: "ग्रामीण विकास मंत्रालय के दीनदयाल अंत्योदय योजना - राष्ट्रीय ग्रामीण आजीविका मिशन (DAY-NRLM) के अंतर्गत संचालित। स्वयं सहायता समूह की महिलाओं और ग्रामीण युवाओं को गांव में ही उद्यम शुरू करने के लिए वित्तीय और तकनीकी मार्गदर्शन।",
          officialUrl: "https://nrlm.gov.in/"
        }
      ]
    },
    about: {
      heading: "ग्रामउद्यम के बारे में",
      tagline: "सामाजिक बदलाव हेतु शैक्षणिक मिनी-प्रोजेक्ट",
      mainDesc: "ग्रामउद्यम एक कॉलेज मिनी-प्रोजेक्ट है, जो ग्रामीण समुदायों के लिए स्थानीय भाषाओं में उद्यमिता सीखने की चुनौतियों को हल करने के लिए बनाया गया है।",
      problemQuote: "ग्रामीण उद्यमिता से संबंधित डिजिटल सामग्री और प्रशिक्षण सामग्री अक्सर स्थानीय भाषाओं और ग्रामीण बोलियों में आसानी से उपलब्ध या समझने योग्य नहीं होती है।",
      detailsTitle: "प्रोजेक्ट का विवरण",
      themeLabel: "प्रोजेक्ट थीम",
      themeVal: "ग्रामीण उद्यमिता (Rural Entrepreneurship)",
      focusLabel: "मुख्य फोकस",
      focusVal: "स्थानीय भाषाओं में डिजिटल शिक्षण (मराठी, हिंदी, अंग्रेज़ी)",
      targetLabel: "लक्षित उपयोगकर्ता",
      targetVal: "ग्रामीण युवा, महिला स्वयं सहायता समूह और आकांक्षी छोटे उद्यमी",
      techLabel: "प्रयुक्त तकनीक",
      techVal: "HTML5, CSS3, Vanilla JavaScript, Browser Web Speech API",
      ttsFeatureTitle: "ध्वनि सहायता (Text-to-Speech)",
      ttsFeatureDesc: "ग्रामउद्यम में ब्राउज़र आधारित वाक् संश्लेषण (Speech Synthesizer) शामिल है ताकि जो उपयोगकर्ता सुनकर सीखना पसंद करते हैं, वे अपनी चुनी हुई भाषा में सामग्री सुन सकें।"
    },
    footer: {
      title: "ग्रामउद्यम",
      tagline: "उद्यमिता ज्ञान को सभी के लिए सरल और सुलभ बनाना।",
      quickLinksTitle: "त्वरित नेविगेशन",
      disclaimer: "कॉलेज मिनी प्रोजेक्ट — शैक्षणिक प्रदर्शन और ग्रामीण डिजिटल सशक्तिकरण के लिए विकसित।",
      copyright: "© २०२६ ग्रामउद्यम। HTML, CSS और JavaScript द्वारा निर्मित। शैक्षणिक उपयोग के लिए पूर्णतः निःशुल्क।"
    },
    modal: {
      close: "बंद करें",
      speakNotice: "अपनी चुनी हुई भाषा में जानकारी सुनने के लिए क्लिक करें।",
      ttsNotSupported: "इस ब्राउज़र में टेक्स्ट-टू-स्पीच सुविधा उपलब्ध नहीं है।"
    }
  }
};

// Application State
let currentLanguage = 'en';
let isSpeaking = false;
let currentUtterance = null;
let activeModalData = null;

// Speech Synthesis Helper
function getPreferredVoice(lang) {
  if (!('speechSynthesis' in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  if (!voices || voices.length === 0) return null;

  if (lang === 'mr') {
    // Look for Marathi voice or Hindi voice as regional fallback
    const mrVoice = voices.find(v => v.lang.toLowerCase().includes('mr'));
    if (mrVoice) return mrVoice;
    const hiVoice = voices.find(v => v.lang.toLowerCase().includes('hi'));
    if (hiVoice) return hiVoice;
  } else if (lang === 'hi') {
    const hiVoice = voices.find(v => v.lang.toLowerCase().includes('hi'));
    if (hiVoice) return hiVoice;
  } else {
    // English Indian or general English
    const enInVoice = voices.find(v => v.lang.toLowerCase().includes('en-in'));
    if (enInVoice) return enInVoice;
    const enVoice = voices.find(v => v.lang.toLowerCase().startsWith('en'));
    if (enVoice) return enVoice;
  }
  return null;
}

// Stop any active speech
function stopSpeech() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  isSpeaking = false;
  updateSpeechButtonState(false);
}

// Speak specified text
function speakText(textToSpeak, btnElement) {
  if (!('speechSynthesis' in window)) {
    alert(translations[currentLanguage].modal.ttsNotSupported);
    return;
  }

  // If already speaking, stop it (toggle action)
  if (isSpeaking) {
    stopSpeech();
    return;
  }

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(textToSpeak);
  currentUtterance = utterance;

  const langCode = currentLanguage === 'mr' ? 'mr-IN' : currentLanguage === 'hi' ? 'hi-IN' : 'en-IN';
  utterance.lang = langCode;
  utterance.rate = 0.92; // Slightly measured rate for clear comprehension
  utterance.pitch = 1.0;

  const matchedVoice = getPreferredVoice(currentLanguage);
  if (matchedVoice) {
    utterance.voice = matchedVoice;
  }

  utterance.onstart = function () {
    isSpeaking = true;
    updateSpeechButtonState(true);
  };

  utterance.onend = function () {
    isSpeaking = false;
    updateSpeechButtonState(false);
  };

  utterance.onerror = function (e) {
    console.warn("Speech synthesis notice:", e);
    isSpeaking = false;
    updateSpeechButtonState(false);
  };

  window.speechSynthesis.speak(utterance);
}

function updateSpeechButtonState(speaking) {
  const btn = document.getElementById('modal-tts-btn');
  if (!btn) return;
  const t = translations[currentLanguage].learn;
  if (speaking) {
    btn.classList.add('is-speaking');
    btn.setAttribute('aria-pressed', 'true');
    btn.innerHTML = `<span class="speaker-icon">⏹️</span> <span>${t.stopBtnText}</span>`;
  } else {
    btn.classList.remove('is-speaking');
    btn.setAttribute('aria-pressed', 'false');
    btn.innerHTML = `<span class="speaker-icon">🔊</span> <span>${t.listenBtnText}</span>`;
  }
}

// Render dynamic content for active language
function renderContent() {
  const t = translations[currentLanguage];
  if (!t) return;

  // HTML lang & Page title
  document.documentElement.lang = currentLanguage;
  document.title = t.metaTitle;

  // Navbar
  document.getElementById('nav-logo-text').textContent = t.brandName;
  document.getElementById('nav-link-home').textContent = t.nav.home;
  document.getElementById('nav-link-learn').textContent = t.nav.learn;
  document.getElementById('nav-link-ideas').textContent = t.nav.ideas;
  document.getElementById('nav-link-schemes').textContent = t.nav.schemes;
  document.getElementById('nav-link-about').textContent = t.nav.about;

  // Hero Section
  document.getElementById('hero-tag').textContent = t.hero.tag;
  document.getElementById('hero-title').textContent = t.hero.title;
  document.getElementById('hero-subtitle').textContent = t.hero.subtitle;
  document.getElementById('hero-desc').textContent = t.hero.description;
  document.getElementById('hero-btn-learn').textContent = t.hero.btnLearn;
  document.getElementById('hero-btn-schemes').textContent = t.hero.btnSchemes;
  
  // Hero Stats
  document.getElementById('stat-1-title').textContent = t.hero.quickStat1;
  document.getElementById('stat-1-desc').textContent = t.hero.quickStat1Desc;
  document.getElementById('stat-2-title').textContent = t.hero.quickStat2;
  document.getElementById('stat-2-desc').textContent = t.hero.quickStat2Desc;
  document.getElementById('stat-3-title').textContent = t.hero.quickStat3;
  document.getElementById('stat-3-desc').textContent = t.hero.quickStat3Desc;

  // Why Section
  document.getElementById('why-heading').textContent = t.why.heading;
  document.getElementById('why-subheading').textContent = t.why.subheading;
  document.getElementById('why-card-1-title').textContent = t.why.card1Title;
  document.getElementById('why-card-1-desc').textContent = t.why.card1Desc;
  document.getElementById('why-card-2-title').textContent = t.why.card2Title;
  document.getElementById('why-card-2-desc').textContent = t.why.card2Desc;
  document.getElementById('why-card-3-title').textContent = t.why.card3Title;
  document.getElementById('why-card-3-desc').textContent = t.why.card3Desc;

  // Learn Section
  document.getElementById('learn-heading').textContent = t.learn.heading;
  document.getElementById('learn-subheading').textContent = t.learn.subheading;
  renderLearnCards();

  // Business Ideas Section
  document.getElementById('ideas-heading').textContent = t.ideas.heading;
  document.getElementById('ideas-subheading').textContent = t.ideas.subheading;
  renderIdeaCards();

  // Schemes Section
  document.getElementById('schemes-heading').textContent = t.schemes.heading;
  document.getElementById('schemes-subheading').textContent = t.schemes.subheading;
  renderSchemeCards();

  // About Section
  document.getElementById('about-heading').textContent = t.about.heading;
  document.getElementById('about-tagline').textContent = t.about.tagline;
  document.getElementById('about-main-desc').textContent = t.about.mainDesc;
  document.getElementById('about-problem-quote').textContent = t.about.problemQuote;
  document.getElementById('about-details-title').textContent = t.about.detailsTitle;
  document.getElementById('about-label-theme').textContent = t.about.themeLabel;
  document.getElementById('about-val-theme').textContent = t.about.themeVal;
  document.getElementById('about-label-focus').textContent = t.about.focusLabel;
  document.getElementById('about-val-focus').textContent = t.about.focusVal;
  document.getElementById('about-label-target').textContent = t.about.targetLabel;
  document.getElementById('about-val-target').textContent = t.about.targetVal;
  document.getElementById('about-label-tech').textContent = t.about.techLabel;
  document.getElementById('about-val-tech').textContent = t.about.techVal;
  document.getElementById('about-tts-title').textContent = t.about.ttsFeatureTitle;
  document.getElementById('about-tts-desc').textContent = t.about.ttsFeatureDesc;

  // Footer Section
  document.getElementById('footer-brand').textContent = t.footer.title;
  document.getElementById('footer-tagline').textContent = t.footer.tagline;
  document.getElementById('footer-nav-title').textContent = t.footer.quickLinksTitle;
  document.getElementById('footer-link-home').textContent = t.nav.home;
  document.getElementById('footer-link-learn').textContent = t.nav.learn;
  document.getElementById('footer-link-ideas').textContent = t.nav.ideas;
  document.getElementById('footer-link-schemes').textContent = t.nav.schemes;
  document.getElementById('footer-link-about').textContent = t.nav.about;
  document.getElementById('footer-disclaimer').textContent = t.footer.disclaimer;
  document.getElementById('footer-copyright').textContent = t.footer.copyright;

  // Update language switcher active states
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const isCurrent = btn.getAttribute('data-lang') === currentLanguage;
    btn.classList.toggle('active', isCurrent);
    btn.setAttribute('aria-pressed', isCurrent ? 'true' : 'false');
  });

  // If a modal is currently open, refresh its content in the newly chosen language
  if (activeModalData) {
    if (activeModalData.type === 'learn') {
      openLearnModal(activeModalData.id, false);
    } else if (activeModalData.type === 'idea') {
      openIdeaModal(activeModalData.id, false);
    }
  }
}

// Render 5 Learn Cards
function renderLearnCards() {
  const container = document.getElementById('learn-cards-grid');
  if (!container) return;

  const t = translations[currentLanguage].learn;
  container.innerHTML = t.topics.map((topic, index) => `
    <article class="card learn-card" data-topic-id="${topic.id}">
      <div class="card-icon-wrapper">
        <span class="card-icon" aria-hidden="true">${topic.icon}</span>
        <span class="card-step-badge">#0${index + 1}</span>
      </div>
      <h3 class="card-title">${topic.title}</h3>
      <p class="card-description">${topic.description}</p>
      <div class="card-footer">
        <button type="button" class="btn btn-outline learn-more-btn" onclick="openLearnModal('${topic.id}', true)">
          <span>${t.btnLearnMore}</span>
          <span class="btn-arrow" aria-hidden="true">➔</span>
        </button>
      </div>
    </article>
  `).join('');
}

// Render 6 Business Idea Cards
function renderIdeaCards() {
  const container = document.getElementById('ideas-cards-grid');
  if (!container) return;

  const t = translations[currentLanguage].ideas;
  container.innerHTML = t.items.map(idea => `
    <article class="card idea-card" data-idea-id="${idea.id}">
      <div class="card-icon-wrapper">
        <span class="card-icon" aria-hidden="true">${idea.icon}</span>
      </div>
      <h3 class="card-title">${idea.title}</h3>
      <p class="card-description">${idea.description}</p>
      <div class="card-footer">
        <button type="button" class="btn btn-outline idea-more-btn" onclick="openIdeaModal('${idea.id}', true)">
          <span>${t.btnLearnMore}</span>
          <span class="btn-arrow" aria-hidden="true">➔</span>
        </button>
      </div>
    </article>
  `).join('');
}

// Render 3 Government Scheme Cards
function renderSchemeCards() {
  const container = document.getElementById('schemes-cards-grid');
  if (!container) return;

  const t = translations[currentLanguage].schemes;
  container.innerHTML = t.items.map(scheme => `
    <article class="card scheme-card" data-scheme-id="${scheme.id}">
      <div class="scheme-header">
        <span class="scheme-verified-badge">
          <svg class="badge-icon" viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          ${t.badgeVerified}
        </span>
        <h3 class="scheme-acronym">${scheme.name}</h3>
      </div>
      <h4 class="scheme-full-name">${scheme.fullName}</h4>
      <p class="scheme-purpose"><strong>${scheme.purpose}</strong></p>
      <p class="scheme-details">${scheme.details}</p>
      <div class="card-footer">
        <a href="${scheme.officialUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary scheme-official-link">
          <span>${t.btnOfficial}</span>
          <span class="external-icon" aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  `).join('');
}

// Open Topic Modal with Text-to-Speech
function openLearnModal(topicId, stopExistingSpeech = true) {
  if (stopExistingSpeech) stopSpeech();

  const t = translations[currentLanguage].learn;
  const topic = t.topics.find(item => item.id === topicId);
  if (!topic) return;

  activeModalData = { type: 'learn', id: topicId };

  const modal = document.getElementById('info-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body-content');
  const modalTtsBtn = document.getElementById('modal-tts-btn');

  modalTitle.textContent = `${topic.icon} ${topic.title}`;

  // Build clean text to be read by Speech Synthesis
  const spokenText = `${topic.title}. ${topic.explanation}. ${t.keyPointsTitle} ${topic.keyPoints.join('. ')}. ${t.exampleTitle} ${topic.example}`;

  // Configure speech button
  modalTtsBtn.style.display = 'inline-flex';
  modalTtsBtn.onclick = function () {
    speakText(spokenText, modalTtsBtn);
  };
  updateSpeechButtonState(isSpeaking);

  // Content HTML
  modalBody.innerHTML = `
    <div class="modal-section modal-explanation">
      <p class="lead-text">${topic.explanation}</p>
    </div>
    
    <div class="modal-section modal-key-points">
      <h4 class="modal-section-title">${t.keyPointsTitle}</h4>
      <ul class="styled-list">
        ${topic.keyPoints.map(point => `<li>${point}</li>`).join('')}
      </ul>
    </div>

    <div class="modal-section modal-example-box">
      <div class="example-header">
        <span class="example-icon" aria-hidden="true">🌱</span>
        <h4 class="modal-section-title">${t.exampleTitle}</h4>
      </div>
      <p class="example-text">${topic.example}</p>
    </div>
  `;

  showModal(modal);
}

// Open Business Idea Modal
function openIdeaModal(ideaId, stopExistingSpeech = true) {
  if (stopExistingSpeech) stopSpeech();

  const t = translations[currentLanguage].ideas;
  const idea = t.items.find(item => item.id === ideaId);
  if (!idea) return;

  activeModalData = { type: 'idea', id: ideaId };

  const modal = document.getElementById('info-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body-content');
  const modalTtsBtn = document.getElementById('modal-tts-btn');

  modalTitle.textContent = `${idea.icon} ${idea.title}`;

  // Build spoken text
  const spokenText = `${idea.title}. ${idea.description}. ${t.investmentLabel} ${idea.investment}. ${t.stepsLabel} ${idea.steps.join('. ')}. ${t.tipsLabel} ${idea.tip}`;

  modalTtsBtn.style.display = 'inline-flex';
  modalTtsBtn.onclick = function () {
    speakText(spokenText, modalTtsBtn);
  };
  updateSpeechButtonState(isSpeaking);

  modalBody.innerHTML = `
    <div class="modal-section">
      <p class="lead-text">${idea.description}</p>
      
      <div class="investment-badge-box">
        <span class="investment-label">${t.investmentLabel}</span>
        <span class="investment-val">${idea.investment}</span>
      </div>
    </div>

    <div class="modal-section">
      <h4 class="modal-section-title">${t.stepsLabel}</h4>
      <ol class="styled-numbered-list">
        ${idea.steps.map(step => `<li>${step}</li>`).join('')}
      </ol>
    </div>

    <div class="modal-section modal-example-box">
      <div class="example-header">
        <span class="example-icon" aria-hidden="true">💡</span>
        <h4 class="modal-section-title">${t.tipsLabel}</h4>
      </div>
      <p class="example-text">${idea.tip}</p>
    </div>
  `;

  showModal(modal);
}

// Display modal helper
function showModal(modal) {
  modal.classList.add('is-active');
  document.body.classList.add('modal-open');
  modal.setAttribute('aria-hidden', 'false');
  // Focus close button for accessibility
  const closeBtn = document.getElementById('modal-close-btn');
  if (closeBtn) closeBtn.focus();
}

// Close Modal
function closeModal() {
  const modal = document.getElementById('info-modal');
  if (!modal) return;
  stopSpeech();
  modal.classList.remove('is-active');
  document.body.classList.remove('modal-open');
  modal.setAttribute('aria-hidden', 'true');
  activeModalData = null;
}

// Set active language and refresh
function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLanguage = lang;
  try {
    localStorage.setItem('gramudyam_lang', lang);
  } catch (e) {
    // Local storage disabled or restricted
  }
  renderContent();
}

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  // Check cached language preference
  try {
    const savedLang = localStorage.getItem('gramudyam_lang');
    if (savedLang && translations[savedLang]) {
      currentLanguage = savedLang;
    }
  } catch (e) {}

  // Language buttons event binding
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
    });
  });

  // Mobile navigation drawer toggle
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const navMenu = document.getElementById('navbar-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', !isExpanded);
      mobileToggle.classList.toggle('is-active');
      navMenu.classList.toggle('is-open');
    });

    // Close menu when clicking any nav link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileToggle.classList.remove('is-active');
        navMenu.classList.remove('is-open');
      });
    });
  }

  // Modal close events
  const closeBtn = document.getElementById('modal-close-btn');
  const modalOverlay = document.getElementById('modal-overlay');

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }
  if (modalOverlay) {
    modalOverlay.addEventListener('click', closeModal);
  }

  // Keyboard accessibility: ESC closes modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const modal = document.getElementById('info-modal');
      if (modal && modal.classList.contains('is-active')) {
        closeModal();
      }
    }
  });

  // SpeechSynthesis voices loaded listener (for Chrome/Safari voice population)
  if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = () => {
      // Voices ready
    };
  }

  // Initial Content Render
  renderContent();
});
