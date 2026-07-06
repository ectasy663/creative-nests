const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data', 'work.json');
let projects = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// Clean up old ones if they already exist
projects = projects.filter(p => !['creative-art', 'logo-designs', 'resonance-2k25', 'vibrant-gujarat', 'cgi-vfx-ads'].includes(p.slug));

// 1. Creative Art (7 images)
projects.push({
  title: "Creative Art",
  slug: "creative-art",
  category: "Branding",
  desc: "Custom creative art showcases.",
  image: "/creative art/art 01.png",
  videoUrl: "",
  tags: ["Art", "Branding"],
  featured: false,
  about: "A diverse collection of creative art pieces tailored for branding campaigns.",
  challenge: "Crafting unique visual styles.",
  solution: "Utilized varied digital painting and composition techniques.",
  results: ["Stunning visuals", "High engagement"],
  gallery: [
    "/creative art/art 01.png",
    "/creative art/art 2.png",
    "/creative art/art-4-first.jpg",
    "/creative art/art-5.jpg",
    "/creative art/art-6--.jpg",
    "/creative art/ChatGPT Image May 18, 2026, 06_32_40 PM.png",
    "/creative art/Poster.1.jpg"
  ]
});

// 2. Logo (5 images)
projects.push({
  title: "Logo Designs",
  slug: "logo-designs",
  category: "Branding",
  desc: "Distinctive logo and identity marks.",
  image: "/Logo/Creative Nests Logo.png",
  videoUrl: "",
  tags: ["Logo", "Identity"],
  featured: false,
  about: "A curated selection of our finest logo designs.",
  challenge: "Creating memorable and scalable marks.",
  solution: "Focused on geometric precision and meaning.",
  results: ["Strong brand recall", "Versatile usage"],
  gallery: [
    "/Logo/Creative Nests Logo.png",
    "/Logo/old logo.png",
    "/Logo/phycics logo.png",
    "/Logo/tushar 0.png",
    "/Logo/tushar 01.png"
  ]
});

// 3. Resonance 2k25 (9 images)
projects.push({
  title: "Resonance 2k25",
  slug: "resonance-2k25",
  category: "Branding",
  desc: "Event branding and visual design for Resonance 2k25.",
  image: "/resonance 2k25/aramn-malik.1.jpg",
  videoUrl: "",
  tags: ["Event", "Branding"],
  featured: false,
  about: "Comprehensive visual branding for the Resonance 2k25 festival.",
  challenge: "Capturing the high energy of the event.",
  solution: "Vibrant color palettes and dynamic typography.",
  results: ["Massive turnout", "Cohesive visual theme"],
  gallery: [
    "/resonance 2k25/aramn-malik.1.jpg",
    "/resonance 2k25/BHOMENDRA SINGH RATHORE.png",
    "/resonance 2k25/Bollwood-day.1.jpg",
    "/resonance 2k25/final-coordinator.jpg",
    "/resonance 2k25/Final-volunteer.jpg",
    "/resonance 2k25/javaid-ali.2.jpg",
    "/resonance 2k25/kabeera (2).png",
    "/resonance 2k25/Madhur virli final.png",
    "/resonance 2k25/Madhur-virli.jpg"
  ]
});

// 4. Vibrant Gujarat (7 images)
projects.push({
  title: "Vibrant Gujarat",
  slug: "vibrant-gujarat",
  category: "Branding",
  desc: "High-impact visual campaigns for Vibrant Gujarat.",
  image: "/vibrant gujarat/AD_Hoarding _ 10 x 10.png",
  videoUrl: "",
  tags: ["Campaign", "Branding"],
  featured: false,
  about: "Strategic visual campaign assets developed for Vibrant Gujarat.",
  challenge: "Delivering massive scale outdoor and print assets.",
  solution: "High-resolution 3D renders and pristine vector layouts.",
  results: ["Widespread visibility", "Professional execution"],
  gallery: [
    "/vibrant gujarat/AD_Hoarding _ 10 x 10.png",
    "/vibrant gujarat/AD_Invitation Card_02.png",
    "/vibrant gujarat/AD_Standee Mockup_01.png",
    "/vibrant gujarat/AD_Standee Mockup_02.png",
    "/vibrant gujarat/Hording_16x9.png",
    "/vibrant gujarat/ID CARD_01.png",
    "/vibrant gujarat/Pamphlet.png"
  ]
});

// 5. CGI and VFX Ads (2 videos)
projects.push({
  title: "CGI and VFX Showreels",
  slug: "cgi-vfx-ads",
  category: "CGI & VFX",
  desc: "Mind-bending visual effects and CGI campaigns.",
  image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80",
  videoUrl: "/cgi and vfx ads/lv_0_20260624232603.mp4",
  tags: ["CGI", "VFX", "Video"],
  featured: false,
  about: "Direct showcase of our premium CGI and VFX production capabilities.",
  challenge: "Executing photorealistic simulations.",
  solution: "Leveraged cutting-edge rendering techniques.",
  results: ["Viral engagement", "Unmatched visual fidelity"],
  videos: [
    "/cgi and vfx ads/lv_0_20260624232603.mp4",
    "/cgi and vfx ads/Screen Recording 2026-07-06 171647_edited.mp4"
  ]
});

fs.writeFileSync(dataPath, JSON.stringify(projects, null, 2));
console.log('work.json updated successfully!');
