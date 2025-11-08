// Categories for filtering
const categories = [
    "All",
    "Cars & Motorcycles",
    "Fitness & Training",
    "Style & Fashion",
    "Tech & Gadgets",
    "Watches",
    "Cooking & BBQ",
    "Home & Workshop",
    "Travel & Adventure",
    "Business & Finance",
    "Sports",
    "Gaming"
];

// Pin data - Are.na style intellectual/creative content
const pins = [
    {
        title: "Brutalist Architecture as Digital Metaphor",
        description: "How raw concrete structures inform modern UI design. The honest materiality of Brutalism mirrors the 'show your work' ethos in contemporary web design.",
        user: "Marcus D.",
        category: "Tech & Gadgets",
        height: 320
    },
    {
        title: "Stoic Morning Routines",
        description: "Seneca's letters on time management. 'We suffer more in imagination than in reality.' Building resilience through voluntary discomfort.",
        user: "Alex R.",
        category: "Fitness & Training",
        height: 280
    },
    {
        title: "Wabi-Sabi in Men's Fashion",
        description: "Japanese aesthetic of imperfection. Raw denim fades, patina on leather boots, the beauty of things worn and well-used.",
        user: "Kenji M.",
        category: "Style & Fashion",
        height: 340
    },
    {
        title: "The Mechanical Watch as Rebellion",
        description: "In an age of smart everything, the manual watch is protest. 300 components doing one thing: telling time. Patek Philippe 5711 discontinuation.",
        user: "David L.",
        category: "Watches",
        height: 300
    },
    {
        title: "Fermentation as Philosophy",
        description: "Koji, kimchi, kombucha. Controlled decay as creation. Patience as ingredient. Time cannot be hacked.",
        user: "Chen W.",
        category: "Cooking & BBQ",
        height: 280
    },
    {
        title: "Bauhaus Workshop Principles",
        description: "Form follows function. Every object designed from first principles. Dieter Rams' ten principles for good design applied to the home shop.",
        user: "Stefan K.",
        category: "Home & Workshop",
        height: 310
    },
    {
        title: "Overlap Theory of Adventure",
        description: "Yvon Chouinard's philosophy: best climbs require no summit. The journey becoming the destination. Maps of places you'll never reach.",
        user: "Tom H.",
        category: "Travel & Adventure",
        height: 360
    },
    {
        title: "Compound Interest as Time Travel",
        description: "Einstein called it the 8th wonder. Your future self as stranger. Charlie Munger's '3 rules: never sell, never sell, never sell.'",
        user: "Warren S.",
        category: "Business & Finance",
        height: 290
    },
    {
        title: "The Negative Space in Brazilian Jiu-Jitsu",
        description: "What John Danaher won't teach you. The positions between positions. Strategic patience vs tactical aggression.",
        user: "Marcus A.",
        category: "Sports",
        height: 320
    },
    {
        title: "Cyberpunk Wasn't Fiction",
        description: "William Gibson's Neuromancer predicted gig economy, corporate states, digital identity. We got the dystopia without the cool aesthetics.",
        user: "Kevin N.",
        category: "Gaming",
        height: 340
    },
    {
        title: "Air-Cooled Porsche Philosophy",
        description: "The 911's refusal to die. Rear-engine 'wrongness' that worked. Stuttgart's 60-year middle finger to conventional wisdom.",
        user: "Hans B.",
        category: "Cars & Motorcycles",
        height: 270
    },
    {
        title: "Pavel Tsatsouline's Minimalism",
        description: "Soviet special forces training. 'More is not better, better is better.' The power of greasing the groove. Strength as skill.",
        user: "Dmitri K.",
        category: "Fitness & Training",
        height: 300
    },
    {
        title: "Savile Row's Dying Art",
        description: "10,000 stitches per suit. Knowledge passed master to apprentice. Anderson & Sheppard's soft tailoring. Traditions vs trends.",
        user: "James P.",
        category: "Style & Fashion",
        height: 290
    },
    {
        title: "Unix Philosophy Applied to Life",
        description: "Do one thing well. Programs that work together. Text streams as universal interface. Doug McIlroy's elegance in simplicity.",
        user: "Rob P.",
        category: "Tech & Gadgets",
        height: 310
    },
    {
        title: "Perpetual Calendar Complexity",
        description: "Patek 5320G. Mechanical solution to Gregorian calendar. 400-year accuracy. Engineering as art, art as engineering.",
        user: "Philippe S.",
        category: "Watches",
        height: 280
    },
    {
        title: "Maillard Reaction Chemistry",
        description: "The science of sear. Amino acids meeting reducing sugars at 300°F. Why cast iron matters. Harold McGee's 'On Food and Cooking.'",
        user: "Kenji L.",
        category: "Cooking & BBQ",
        height: 260
    },
    {
        title: "Mortise & Tenon Joinery",
        description: "Ancient method, modern relevance. Japanese carpentry's wood-only construction. Roy Underhill's hand tool mastery.",
        user: "Chris S.",
        category: "Home & Workshop",
        height: 330
    },
    {
        title: "Silk Road Archaeology",
        description: "Trading routes as information highways. How ideas traveled with spices. Samarkand's role in globalization 1.0.",
        user: "Peter F.",
        category: "Travel & Adventure",
        height: 350
    },
    {
        title: "Taleb's Antifragility",
        description: "Systems that gain from disorder. Barbell strategy for portfolio and life. Skin in the game as ethical filter.",
        user: "Nassim T.",
        category: "Business & Finance",
        height: 300
    },
    {
        title: "Chess Thinking in MMA",
        description: "Positional vs tactical. Kasparov's planning meets Octagon chaos. Khabib's pressure as zugzwang.",
        user: "Garry K.",
        category: "Sports",
        height: 280
    },
    {
        title: "Doom's Influence on 3D Graphics",
        description: "John Carmack's fast inverse square root. Binary space partitioning. How a 1993 game shaped GPU architecture.",
        user: "John C.",
        category: "Gaming",
        height: 310
    },
    {
        title: "Gordon Murray's Design Philosophy",
        description: "McLaren F1 creator. 'Simplify, then add lightness.' iStream carbon fiber process. The physics of perfection.",
        user: "Gordon M.",
        category: "Cars & Motorcycles",
        height: 340
    },
    {
        title: "Breath Work Beyond Wellness",
        description: "Wim Hof method's scientific basis. Pranayama's 5000-year A/B test. Voluntary control of involuntary systems.",
        user: "Wim H.",
        category: "Fitness & Training",
        height: 270
    },
    {
        title: "The Modernist Paradox",
        description: "Tom Ford vs Raf Simons. Luxury as accessibility vs exclusivity. The semiotics of the logo-less.",
        user: "Virgil A.",
        category: "Style & Fashion",
        height: 320
    },
    {
        title: "Right to Repair Movement",
        description: "John Deere's DRM on tractors. Louis Rossmann's fight. Ownership in the age of software-defined everything.",
        user: "Louis R.",
        category: "Tech & Gadgets",
        height: 290
    },
    {
        title: "Grand Seiko's Spring Drive",
        description: "Mechanical + quartz hybrid. The sweep that doesn't tick. Zaratsu polishing. Japan's challenge to Swiss supremacy.",
        user: "Akio N.",
        category: "Watches",
        height: 300
    },
    {
        title: "Mycelium Networks in Cooking",
        description: "Fungal consciousness. Shiitake cultivation. Paul Stamets' research. The wood wide web on your plate.",
        user: "Paul S.",
        category: "Cooking & BBQ",
        height: 340
    },
    {
        title: "Shaker Furniture Principles",
        description: "Form, function, nothing extra. 'Don't make something unless it is both necessary and useful.' 18th century minimalism.",
        user: "Thomas M.",
        category: "Home & Workshop",
        height: 280
    },
    {
        title: "Walking as Thinking",
        description: "Kant's daily routine. Thoreau's surveying. Nietzsche's mountain paths. 'All truly great thoughts are conceived while walking.'",
        user: "Friedrich N.",
        category: "Travel & Adventure",
        height: 310
    },
    {
        title: "Kelly Criterion in Life",
        description: "Optimal bet sizing beyond gambling. Ed Thorp's application to investing. Risk of ruin as guiding principle.",
        user: "Ed T.",
        category: "Business & Finance",
        height: 260
    },
    {
        title: "Flow States in Competition",
        description: "Mihaly Csikszentmihalyi's research. Challenge-skill balance. Why amateurs plateau. Deliberate practice vs mere repetition.",
        user: "Anders E.",
        category: "Sports",
        height: 330
    },
    {
        title: "Speedrunning as Deconstruction",
        description: "Breaking games to understand them. Tool-assisted vs human limits. Summoning Salt's documentation. Bugs becoming features.",
        user: "Salt S.",
        category: "Gaming",
        height: 290
    },
    {
        title: "Motorcycle Maintenance as Meditation",
        description: "Robert Pirsig was right. The wrench as teacher. BMW's evolution of the boxer engine. Quality as event, not thing.",
        user: "Robert P.",
        category: "Cars & Motorcycles",
        height: 320
    },
    {
        title: "Fascia Research Revolution",
        description: "Tom Myers' Anatomy Trains. Connective tissue as organ. Why stretching isn't enough. The body's tensegrity structure.",
        user: "Tom M.",
        category: "Fitness & Training",
        height: 300
    },
    {
        title: "Workwear's Military Heritage",
        description: "MA-1 bomber jacket evolution. Carhartt WIP's recontextualization. Function becoming fashion becoming function.",
        user: "Eugene R.",
        category: "Style & Fashion",
        height: 280
    },
    {
        title: "Attention Economy & Dopamine",
        description: "Tristan Harris' time well spent. Variable reward schedules. The slot machine in your pocket. Digital minimalism as resistance.",
        user: "Cal N.",
        category: "Tech & Gadgets",
        height: 340
    }
];
