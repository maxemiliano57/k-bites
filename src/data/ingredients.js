export const ingredients = [
  {
    id: "gochujang",
    name: "Gochujang",
    nameKo: "고추장",
    type: "paste",
    description:
      "A thick, deep-red fermented paste made from red chili, glutinous rice, fermented soybeans, and salt. It is simultaneously spicy, sweet, and savory — the backbone of many Korean dishes.",
    substitute: "Mix sriracha with a small amount of white miso paste for a rough approximation.",
    usedIn: ["bibimbap", "tteokbokki", "kimchi-jjigae", "dakgalbi", "gamja-tang", "budae-jjigae"],
  },
  {
    id: "doenjang",
    name: "Doenjang",
    nameKo: "된장",
    type: "paste",
    description:
      "Fermented soybean paste with a deeply earthy, pungent flavor. Made from salted soybeans left to ferment for months or years. Richer and more complex than Japanese miso.",
    substitute: "Japanese miso (use a darker variety like hatcho miso for a closer profile).",
    usedIn: ["doenjang-jjigae", "bossam", "gamja-tang"],
  },
  {
    id: "ssamjang",
    name: "Ssamjang",
    nameKo: "쌈장",
    type: "paste",
    description:
      "A thick, intensely savory dipping paste made by blending doenjang and gochujang with sesame oil, garlic, and green onion. It is the essential condiment for ssam (wraps) — a small dab inside a lettuce or perilla leaf with grilled meat transforms the whole bite.",
    substitute: "Mix two parts doenjang with one part gochujang as a rough stand-in.",
    usedIn: ["samgyeopsal", "bossam", "dakgalbi"],
  },
  {
    id: "kimchi",
    name: "Kimchi",
    nameKo: "김치",
    type: "vegetable",
    description:
      "Korea's most iconic fermented dish — typically napa cabbage brined and coated with gochugaru, garlic, ginger, and fish sauce, then left to ferment. Tangy, spicy, and probiotic-rich.",
    substitute: "Sauerkraut with a pinch of chili flakes (flavor will differ significantly).",
    usedIn: ["kimchi-jjigae", "samgyeopsal", "bossam", "budae-jjigae"],
  },
  {
    id: "garlic",
    name: "Garlic (Maneul)",
    nameKo: "마늘",
    type: "vegetable",
    description:
      "Koreans use garlic in extraordinary quantities — minced raw into marinades, sliced and grilled at the table, simmered in soups, and fermented in kimchi. It is the aromatic foundation of the cuisine.",
    substitute: "Garlic powder can substitute in cooked applications (use sparingly).",
    usedIn: [
      "bulgogi", "kimchi-jjigae", "doenjang-jjigae", "samgyeopsal", "sundubu-jjigae",
      "galbi-tang", "yukgaejang", "seolleongtang", "dakgalbi", "bossam",
      "mandu", "jjajangmyeon", "samgyetang", "gamja-tang", "budae-jjigae",
    ],
  },
  {
    id: "green-onions",
    name: "Green Onions (Pa)",
    nameKo: "파",
    type: "vegetable",
    description:
      "Korean green onions appear in nearly every savory dish — sliced thin as a raw garnish, sautéed into pancakes, simmered in soups, and grilled whole alongside meat. Both the white and green parts are used, each adding different levels of sharpness. The white base is stronger and suits long cooking; the green tops are milder and best added at the end.",
    substitute: "Chives or scallions work well as garnish. Yellow onion can substitute in cooked applications but will be much stronger.",
    usedIn: [
      "bulgogi", "tteokbokki", "samgyeopsal", "doenjang-jjigae", "sundubu-jjigae",
      "galbi-tang", "haemul-pajeon", "yukgaejang", "seolleongtang", "gamja-tang",
      "bossam", "mandu", "samgyetang",
    ],
  },
  {
    id: "ginger",
    name: "Ginger (Saenggang)",
    nameKo: "생강",
    type: "vegetable",
    description:
      "Fresh ginger root is grated or sliced into marinades, soups, and kimchi, where it adds warmth and a subtle floral spice. In Korean cooking it acts mainly as an odor neutralizer for meats and fish rather than the dominant flavor it carries in other cuisines. Older ginger is stronger and more fibrous — younger ginger is milder and easier to grate.",
    substitute: "Ginger powder (use one-quarter of the amount). The fresh floral notes are largely lost.",
    usedIn: ["bulgogi", "galbi-tang", "seolleongtang", "bossam", "mandu", "samgyetang"],
  },
  {
    id: "napa-cabbage",
    name: "Napa Cabbage (Baechu)",
    nameKo: "배추",
    type: "vegetable",
    description:
      "The mild, slightly sweet cabbage that is the base of baechu-kimchi — standard kimchi. Its broad, tender leaves and high water content make it ideal for fermentation: it absorbs brine and gochugaru paste deeply without becoming mushy. When fresh, the inner yellow leaves are also eaten as ssam (wraps) for grilled meat, or quick-pickled as a side.",
    substitute: "Savoy cabbage or green cabbage can work, but the texture and water content differ and fermentation results will vary.",
    usedIn: ["bossam"],
  },
  {
    id: "korean-radish",
    name: "Korean Radish (Mu)",
    nameKo: "무",
    type: "vegetable",
    description:
      "A large, dense white radish with a mild, slightly sweet flavor — crisper and less peppery than daikon. Cubed and simmered in galbi-tang or seolleongtang, it adds a natural sweetness to the broth. Fermented into kkakdugi (diced radish kimchi), and sliced thin for naengmyeon cold noodle garnish. In banchan it is often julienned and quick-pickled with vinegar and sugar.",
    substitute: "Daikon radish is nearly identical in flavor and texture and works well in all applications.",
    usedIn: ["galbi-tang", "seolleongtang", "naengmyeon"],
  },
  {
    id: "bean-sprouts",
    name: "Bean Sprouts (Kongnamul)",
    nameKo: "콩나물",
    type: "vegetable",
    description:
      "Soybean sprouts that are blanched and seasoned with sesame oil, garlic, and salt as one of the most common banchan (side dishes). They cook quickly and maintain a satisfying crunch even when briefly heated. In bibimbap they are one of the classic vegetable toppings; in yukgaejang they add bulk and texture to the broth. Kongnamul-guk (bean sprout soup) is a beloved hangover remedy.",
    substitute: "Mung bean sprouts are slightly more delicate but work similarly in most applications.",
    usedIn: ["bibimbap", "yukgaejang"],
  },
  {
    id: "perilla",
    name: "Perilla Leaves (Kkaennip)",
    nameKo: "깻잎",
    type: "vegetable",
    description:
      "Large, aromatic leaves in the mint family with a flavor that blends basil, anise, and a hint of mint. Eaten fresh as a wrap for grilled meats in place of or alongside lettuce, adding a herbal brightness to each bite. Also commonly pickled layer by layer in soy sauce, garlic, and sesame oil as a banchan — a jar of kkaennip-jangajji is a staple in Korean refrigerators. Occasionally shredded into soups for aroma.",
    substitute: "Shiso leaves (Japanese perilla) are very similar. Thai basil offers a comparable anise note.",
    usedIn: ["samgyeopsal", "bossam", "dakgalbi"],
  },
  {
    id: "gochugaru",
    name: "Gochugaru",
    nameKo: "고춧가루",
    type: "sauce",
    description:
      "Coarse Korean red chili pepper flakes, sun-dried and ground. Less sharp than cayenne, with a mild fruity heat and vivid red color that stains broths and sauces. Used in everything from kimchi to soups, it comes in two grinds — coarse (for kimchi) and fine (for marinades and sauces). The heat level varies by brand; taste before using.",
    substitute: "A mix of mild paprika and a small amount of cayenne pepper.",
    usedIn: ["sundubu-jjigae", "doenjang-jjigae", "yukgaejang", "dakgalbi", "gamja-tang", "budae-jjigae", "mandu"],
  },
  {
    id: "sesame-oil",
    name: "Sesame Oil",
    nameKo: "참기름",
    type: "sauce",
    description:
      "Toasted sesame oil used as a finishing condiment rather than a cooking oil. A few drops add a rich, nutty aroma to rice, noodles, vegetables, and marinades. It burns at relatively low temperatures, so it is almost always added off-heat or drizzled at the end. A small bottle goes a long way — the fragrance should be strong and immediate when you open it.",
    substitute: "Toasted sesame seeds blended with a neutral oil give the flavor without the intensity.",
    usedIn: [
      "bibimbap", "bulgogi", "japchae", "samgyeopsal", "sundubu-jjigae",
      "gimbap", "yukgaejang", "mandu", "jjajangmyeon", "gamja-tang",
    ],
  },
  {
    id: "fish-sauce",
    name: "Fish Sauce (Aekjeot)",
    nameKo: "액젓",
    type: "sauce",
    description:
      "Fermented fish liquid — usually from anchovies (myeolchi-aekjeot) or sand lance — that delivers deep, salty umami without any identifiable fishy taste once cooked. Primarily used to season kimchi during preparation, replacing some of the salt while adding complexity. Also stirred into soups and stews in small amounts. A few teaspoons can dramatically deepen a broth.",
    substitute: "Japanese or Thai fish sauce work well as direct substitutes. Soy sauce can be used in smaller amounts but lacks the fermented depth.",
    usedIn: ["kimchi-jjigae", "sundubu-jjigae", "yukgaejang"],
  },
  {
    id: "plum-syrup",
    name: "Plum Extract (Maesil-cheong)",
    nameKo: "매실청",
    type: "sauce",
    description:
      "A sweet syrup made by fermenting Korean green plums (maesil) with sugar for months until the sugar draws out the fruit's liquid. It adds a fruity, gentle sweetness with a subtle tartness to marinades, dressings, and stir-fry sauces. Commonly used where sugar might otherwise be called for, but with more complexity — it rounds out the sharpness of gochujang in spicy marinades.",
    substitute: "Equal parts honey and a small splash of apple cider vinegar. Apple juice concentrate also approximates the sweet-tart profile.",
    usedIn: ["bulgogi", "dakgalbi", "bossam"],
  },
  {
    id: "soy-sauce",
    name: "Soy Sauce (Ganjang)",
    nameKo: "간장",
    type: "sauce",
    description:
      "Korean soy sauce comes in two main types: brewed ganjang (all-purpose, deep and salty, used in marinades and dipping sauces) and soup ganjang / guk-ganjang (lighter in color but saltier, used specifically to season broths without darkening them). The distinction matters — guk-ganjang has a fermented, funkier flavor suited to soups while regular ganjang is milder and more versatile.",
    substitute: "Japanese soy sauce or tamari are very close substitutes for regular ganjang.",
    usedIn: ["bulgogi", "japchae", "tteokbokki", "samgyeopsal", "galbi-tang", "naengmyeon", "seolleongtang", "mandu", "jjajangmyeon"],
  },
  {
    id: "sesame-seeds",
    name: "Sesame Seeds (Chamkkae)",
    nameKo: "참깨",
    type: "sauce",
    description:
      "Toasted white sesame seeds used almost exclusively as a finishing garnish across Korean cuisine. Scattered over bulgogi, japchae, and bibimbap, they add a faint nuttiness and visual texture. Often paired with sesame oil — both come from the same roasted sesame flavor profile that defines Korean seasoning. Buy them pre-toasted or dry-toast in a pan for 2–3 minutes until golden.",
    substitute: "A small drizzle of sesame oil delivers the flavor without the crunch. Pine nuts add a similar nutty finish.",
    usedIn: ["bulgogi", "japchae", "bibimbap", "gimbap", "dakgalbi", "gamja-tang"],
  },
  {
    id: "rice-cakes",
    name: "Tteok (Rice Cakes)",
    nameKo: "떡",
    type: "grain",
    description:
      "Cylindrical cakes made from pounded glutinous rice flour. Chewy and dense with a mild flavor, they absorb surrounding sauces beautifully. Sold fresh, refrigerated, or frozen — refrigerated tteok should be soaked in cold water for 10–15 minutes before cooking to soften them. They firm up and lose chewiness as they cool, so tteokbokki is best eaten immediately.",
    substitute: "There is no true substitute for the texture, but gnocchi can approximate them in stews.",
    usedIn: ["tteokbokki", "dakgalbi"],
  },
  {
    id: "glass-noodles",
    name: "Glass Noodles (Dangmyeon)",
    nameKo: "당면",
    type: "grain",
    description:
      "Translucent noodles made from sweet potato starch. When cooked they become slippery and chewy, absorbing the flavor of whatever sauce they are in without becoming mushy. Unlike wheat noodles, they stay pleasant even when reheated. Sold dried, they must be soaked in hot water for 20–30 minutes before stir-frying or can be boiled directly for soups.",
    substitute: "Mung bean vermicelli or rice noodles work similarly, though the texture will be slightly less chewy.",
    usedIn: ["japchae", "galbi-tang", "yukgaejang", "mandu"],
  },
  {
    id: "rice",
    name: "Short-grain Rice (Ssalbap)",
    nameKo: "쌀",
    type: "grain",
    description:
      "The foundation of nearly every Korean meal. Short to medium-grain white rice cooked until slightly sticky — not fluffy and separate like basmati. A rice cooker is the standard tool in Korean households, but the absorption method in a heavy pot works equally well. Freshly cooked rice is used in gimbap while still warm and pliable; leftover rice is often crisped in a pan for bokkeum-bap (fried rice).",
    substitute: "Japanese sushi rice (short-grain) is interchangeable. Long-grain rice like jasmine produces a drier, less cohesive result.",
    usedIn: ["bibimbap", "gimbap", "samgyeopsal", "samgyetang"],
  },
  {
    id: "tofu",
    name: "Tofu (Dubu)",
    nameKo: "두부",
    type: "protein",
    description:
      "Pressed soybean curd used extensively in Korean cooking in two main forms: firm tofu (dubu) holds its shape in stir-fries and stews; soft silken tofu (sundubu) is custard-like and used in jjigae, where it is spooned in gently in large chunks so it doesn't fall apart. Firm tofu is often pan-fried in sesame oil before being added to soups to give it a slightly golden exterior.",
    substitute: "Paneer can substitute firm tofu in stews. Silken tofu has no close substitute in dishes that depend on its texture.",
    usedIn: ["kimchi-jjigae", "doenjang-jjigae", "sundubu-jjigae", "mandu", "budae-jjigae"],
  },
  {
    id: "egg",
    name: "Egg (Gyeran)",
    nameKo: "달걀",
    type: "protein",
    description:
      "Korean cooking deploys eggs in multiple forms: sunny-side up over bibimbap, hard-boiled and halved in tteokbokki, cracked raw into the still-bubbling pot of sundubu-jjigae so it sets in the residual heat, and beaten into jeon (savory pancake) batter as a binder. Gyeran-jjim — a steamed egg custard cooked in a stone pot until it puffs up — is a popular standalone banchan.",
    substitute: "No direct substitute in most applications. For custards, very soft silken tofu can approximate the texture if not the flavor.",
    usedIn: ["bibimbap", "tteokbokki", "haemul-pajeon", "sundubu-jjigae", "gimbap", "mandu", "naengmyeon"],
  },
  {
    id: "beef",
    name: "Beef (Sogogi)",
    nameKo: "소고기",
    type: "protein",
    description:
      "Korean beef preparations vary dramatically by cut and technique. Ribeye or sirloin is shaved paper-thin for bulgogi and seared quickly. Short ribs (galbi) are braised for hours or scored and grilled. Brisket is simmered for seolleongtang or shredded for yukgaejang. Tenderloin is sliced raw into yukhoe (steak tartare). The quality of the cut and thickness of the slice matter enormously — what works for bulgogi won't work for galbi-tang.",
    substitute: "Pork or chicken can substitute in marinated preparations like bulgogi. For bone broths, only beef bones provide the correct collagen for the milky texture.",
    usedIn: ["bulgogi", "japchae", "galbi-tang", "yukgaejang", "seolleongtang", "jjajangmyeon", "naengmyeon"],
  },
  {
    id: "fish-cakes",
    name: "Fish Cake (Eomuk)",
    nameKo: "어묵",
    type: "protein",
    description:
      "Processed cakes made from pureed white fish (pollock is traditional), starch, and seasoning, pressed into flat sheets or thick tubes. Sold refrigerated, they are skewered as street food alongside tteokbokki, simmered in soups, or sliced and sautéed as banchan. At pojangmacha (street food stalls), the broth from simmering fish cake skewers is served in paper cups as a complimentary warm drink on cold days.",
    substitute: "Japanese kamaboko or chikuwa are nearly identical in composition. Omit if unavailable — there is no true vegetarian substitute that replicates the texture.",
    usedIn: ["tteokbokki", "budae-jjigae"],
  },
  {
    id: "dried-anchovies",
    name: "Dried Anchovies (Myeolchi)",
    nameKo: "멸치",
    type: "protein",
    description:
      "Small, intensely savory dried fish that form the backbone of Korean soup stock (myeolchi-yuksu). Simmered with dashima (dried kelp) for 10–15 minutes, then strained, the resulting broth is the base for tteokbokki sauce, doenjang-jjigae, and many other soups. The larger the anchovy, the stronger and sometimes more bitter the stock — remove heads and dark innards before simmering for a cleaner flavor. Smaller anchovies are also stir-fried whole with soy sauce, sesame, and a touch of sugar as myeolchi-bokkeum, one of the most common banchan.",
    substitute: "Japanese dashi stock (kombu and bonito) is the closest flavor substitute for broth. Vegetable broth can be used but lacks the savory depth.",
    usedIn: ["doenjang-jjigae", "tteokbokki", "sundubu-jjigae"],
  },
];
