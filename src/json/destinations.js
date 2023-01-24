import el_nido_palawan from "../assets/images/1280px-El_Nido_Palawan_2.jpg";
import pagudpud from "../assets/images/1280px-Patapat_Viaduct_in_Pagudpud.jpg";
import banuer_rice_terraces from "../assets/images/banuer_rice_terraces.jpg";
import Boracay_White_Beach from "../assets/images/Boracay_White_Beach.png";
import coron_beach_resort from "../assets/images/coron_beach_resort.jpg";
import danao_adventure_park from "../assets/images/danao_adventure_park.webp";
import donsol from "../assets/images/donsol.webp";
import pangasinan from "../assets/images/pangasinan.jpg";
import puerto_princesa from "../assets/images/puerto_princesa.webp";
import samal_island from "../assets/images/samal_island.webp";
import siargao from "../assets/images/siargao.webp";
import taal_from_tagaytay from "../assets/images/taal_from_tagaytay.jpg";
import snake_island from "../assets/images/snake_island.webp";

const places = [
  {
    destination: "El Nido, Palawan",
    description: "Palawan is long and narrow and trends northeast-southwest between the South China and Sulu seas. It has a maximum width of 24 miles (39 km) and a mountainous backbone that runs its entire 270-mile (434-km) length, with Mount Mantalingajan (6,840 feet [2,085 metres]) in the south as its highest peak",
    img: el_nido_palawan,
    location: "El Nido, MIMAROPA, Philippines",
    rating: 4
  },
  {
    destination: "Boracay",
    description: "Boracay is a tropical island about an hour's flight from Metro Manila in the Philippines. It has superb long white sand beaches and is one of the country's most developed tourist destinations",
    img: Boracay_White_Beach,
    location: "Boracay, Philippines",
    rating: 4
  },
  {
    destination: "Pagudpud, Ilocos Norte",
    description: "Pagudpud is a coastal town located at the northernmost tip of Ilocos Norte. It is known as the “Boracay of the North”, but it has so much more to offer apart from its pristine coastline. Pagudpud's Bangui Bay also features 20 wind turbines, which makes it Southeast Asia's first windmill farm.",
    img: pagudpud,
    location: "Ilocos Norte, Philippines.",
    rating: 4
  },
  {
    destination: "Pangasinan",
    description: "Pangasinan is known for its breathtaking and captivating beaches that are praised by tourists from all over the world. Deep blue sea water, clean white-sand beaches, diverse aquatic life, a mesmerizing view of the sunset, world-class resorts, and a lot more!",
    img: pangasinan,
    location: "Pangasinan, Philippines.",
    rating: 4
  },
  {
    destination: "Puerto-Princesa",
    description: "This park features a spectacular limestone karst landscape with an underground river. One of the river's distinguishing features is that it emerges directly into the sea, and its lower portion is subject to tidal influences. The area also represents a significant habitat for biodiversity conservation. The site contains a full 'mountain-to-sea' ecosystem and has some of the most important forests in Asia.",
    img: puerto_princesa,
    location: "Puerto Princesa, MIMAROPA, Philippines",
    rating: 4
  },
  {
    destination: "Siargao",
    description: "Siargao is known to be one of the famous places in the Philippines for surfing. Even though the island is very small, almost like a teardrop, it’s one of the most visited places. The entire island is bordered with white sandy beaches while the turquoise blue water washes off the shoreline. Inland waterfalls and lagoons are also present, which are major relaxing and rejuvenating spots.",
    img: siargao,
    location: "Towards the Northeast coast of Mindanao, Philippines",
    rating: 4
  },
  {
    destination: "Coron Beach, Palawan",
    description: "Spread around the entire Coron Island, the 5 main Coron Beaches that every traveler must explore while touring the Philippines are Smith Point Beach, Coron Youth Club Beach, Atwayan, Malkapuya, and Banol. Home to some of the most beautiful Japanese shipwrecks from the time of World War II, the island is home to the indigenous tribe of Tagbanwa.",
    img: coron_beach_resort,
    location:"100 kilometres towards the north direction of Palawan, Philippines.",
    rating: 4      
  },
  {
    destination: "Banaue Rice Terraces",
    description: "The famous Banaue Rice Terraces once were just winding fields that laid embracing a mountain side. Although the locals had totally abandoned this place, young farmers at the present day are reviving these plantations.",
    img: banuer_rice_terraces,
    location:"Nueva Vizcaya - Ifugao - Mountain Province Rd, Banaue, Ifugao, Philippines",
    rating: 4
      
  },
  {
    destination: "Samal Island",
    description: "Samal Island is said to be one of the largest resort islands in the entire Philippines. It's one of those places where you won't ever get bored, thanks to the joyous lifestyle and the exquisite scenarios surrounding the island. The Hagimit Falls on the island is one of the hotspots for relaxation for many tourists. If you want to discover the fruit-eating bats, a must is a visit to the Monfort Bat Cave.",
    img: samal_island,
    location: "Davao Gulf, Philippines",
    rating: 4
  },
  {
    destination: "Tagaytay",
    description: "Out of all the tourist places in the Philippines, Tagaytay is quite popular in scenic beauty and the comfort its weather provides. Being perched at a higher altitude, you can view the famous Taal Lake and the Taal volcano. The Picnic Grove is another place where you can visit for a relaxing meal while marvelling at the far-off cliffs and a clear view of the ocean and some of the islands.",
    img: taal_from_tagaytay,
    location: "Calabarzon region, Philippines",
    rating: 4
  },
  {
    destination: "Donsol",
    description:"As its name suggests, the eco-tourism destination of Danao Adventure Park  is one of the perfect places to visit in the Philippines for fun, leisure, thrill, and adventure seekers. During their visit to this recreational park, the travelers can engage in a myriad of exhilarating activities, including ziplining, rappelling, bungee jumping, wall climbing, skybiking, parasailing, water rafting, and boating.",
    img: donsol,
    location: "Sorsogon Province, Philippines",
    rating: 4
  },
  {
    destination: "Danao Adventure Park",
    description: "If you want to get away from the regular hustle-bustle of the urban lifestyle, Donsol will be one of the amazing Philippines places to visit. It’s a small, quaint rural area that will help you forget everything else in the world and connect with your inner-self and nature. Here, you will get a perfect view of the Mayon volcano overlooking a huge lake and greeneries.",
    img: danao_adventure_park,
    location:"Buenavista-Carmen-Danao-Jetafe Road, Danao, 6344 Bohol, Philippines",
    rating: 4
  },
  {
    destination: "Snake Island",
    description: "Nestled in a corner of the picturesque Bacuit Bay, the Snake Island is named so as the island curls into a ‘S-shaped’ sandbar, which links to the mainland. Locally known as “Vigan Island'', the island flaunts deep blue waters,  soft white sand, and tall palms with steep lush forest hills serving as the backdrop.",
    img: snake_island,
    location:"Bacuit Bay, El Nido, Palawan, Philippines",
    rating: 4
  },
];


export { places }