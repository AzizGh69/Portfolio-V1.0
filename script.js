/* ── Image map: governorate key → filename ───── */
const imageMap = {
    ariana:      "Assets/ihec.jpg",
    beja:        "Assets/beja.png",
    benarous:    "Assets/benarous.png",
    bizzert:     "Assets/bizzert.png",
    gabes:       "Assets/gabes.png",
    gafsa:       "Assets/gafsa.png",
    jendouba:    "Assets/jendouba.png",
    kairouan:    "Assets/kairouan.png",
    kasserine:   "Assets/kasserine.png",
    kebili:      "Assets/kebili.png",
    lekef:       "Assets/lekef.png",
    mahdia:      "Assets/mahdia.png",
    manouba:     "Assets/manouba.png",
    mednine:     "Assets/mednine.jpg",
    monastir:    "Assets/monastir.png",
    nabeul:      "Assets/nabeul.png",
    sfax:        "Assets/sfax.png",
    sidibouzid:  "Assets/sidibouzid.png",
    siliana:     "Assets/siliana.png",
    sousse:      "Assets/sousse.png",
    tattaouine:  "Assets/tattaouine.png",
    tozeur:      "Assets/tozeur.png",
    tunis:       "Assets/tunis.png",
    zaghouane:   "Assets/zaghouane.png"
};

/* ── Display names ────────────────────────────── */
const nameMap = {
    ariana:      "Carthage",
    beja:        "Béja",
    benarous:    "Ben Arous",
    bizzert:     "Bizerte",
    gabes:       "Gabès",
    gafsa:       "Gafsa",
    jendouba:    "Jendouba",
    kairouan:    "Kairouan",
    kasserine:   "Kasserine",
    kebili:      "Kébili",
    lekef:       "Le Kef",
    mahdia:      "Mahdia",
    manouba:     "La Manouba",
    mednine:     "Médenine",
    monastir:    "Monastir",
    nabeul:      "Nabeul",
    sfax:        "Sfax",
    sidibouzid:  "Sidi Bouzid",
    siliana:     "Siliana",
    sousse:      "Sousse",
    tattaouine:  "Tataouine",
    tozeur:      "Tozeur",
    tunis:       "Tunis",
    zaghouane:   "Zaghouan"
};

/* ── DOM refs ─────────────────────────────────── */
const bgImage   = document.getElementById("bgImage");
const cityLabel = document.getElementById("cityLabel");
const govs      = document.querySelectorAll(".gov");

/* ── Preload all images for smooth transitions ── */
Object.values(imageMap).forEach(src => {
    const img = new Image();
    img.src = src;
});

/* ── Event listeners ──────────────────────────── */
govs.forEach(gov => {

    gov.addEventListener("mouseenter", () => {
        const key   = gov.dataset.gov;
        const color = gov.dataset.color;

        // Background image
        bgImage.style.backgroundImage = `url('${imageMap[key]}')`;
        bgImage.classList.add("active");

        // City label
        cityLabel.textContent = nameMap[key];
        cityLabel.style.color = color;
        cityLabel.classList.add("visible");
    });

    gov.addEventListener("mouseleave", () => {
        bgImage.classList.remove("active");
        cityLabel.classList.remove("visible");
    });
});

/* ── Journey Cinematic ────────────────────────── */
const journeyBtn       = document.getElementById("journeyBtn");
const cinematicOverlay = document.getElementById("cinematicOverlay");
const cinematicBg      = document.getElementById("cinematicBg");
const cinematicText1   = document.getElementById("cinematicText1");
const cinematicText2   = document.getElementById("cinematicText2");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const mapWrapper = document.querySelector('.map-wrapper');

journeyBtn.addEventListener("click", async () => {
    // Block all interaction
    journeyBtn.style.display = "none";

    // Remove any active hover effects
    bgImage.classList.remove("active");
    cityLabel.classList.remove("visible");

    // Step 1: Zoom the actual map into Carthage region
    mapWrapper.classList.add("zoom-carthage");
    await sleep(2800);

    // Step 2: Fade in the cinematic overlay on top
    cinematicOverlay.classList.add("active");
    await sleep(400);

    // Step 3: Show the IHEC image crystal clear
    cinematicBg.classList.add("zoom-in");
    await sleep(4000);

    // Step 4: Fade out the image
    cinematicBg.classList.add("fade-out");
    await sleep(1500);

    // Step 4: Show first text
    cinematicText1.classList.add("show");
    await sleep(3500);

    // Step 5: Hide first text
    cinematicText1.classList.remove("show");
    cinematicText1.classList.add("hide");
    await sleep(1200);

    // Step 6: Show second text
    cinematicText2.classList.add("show");
    await sleep(3500);

    // Step 7: Fade everything and navigate to journey page
    cinematicText2.classList.remove("show");
    cinematicText2.classList.add("hide");
    await sleep(1000);

    window.location.href = "journey.html";
});
