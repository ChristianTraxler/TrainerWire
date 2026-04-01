// --- CONSTANTS ---
const COMMUNITY_NAME = "TrainerWire";
const COMMUNITY_TAGLINE = "Your Local Pokémon GO Event & News Center";

// --- POKEMON IMAGE LOOKUP ---
const IMG_BASE = "assets/pokemon-images";
function getGenFolder(dex) {
  if (dex <= 151) return "Gen-1_Kanto";
  if (dex <= 251) return "Gen-2_Johto";
  if (dex <= 386) return "Gen-3_Hoenn";
  if (dex <= 493) return "Gen-4_Sinnoh";
  if (dex <= 649) return "Gen-5_Unova";
  if (dex <= 721) return "Gen-6_Kalos";
  if (dex <= 809) return "Gen-7_Alola";
  if (dex <= 898) return "Gen-8_Galar";
  if (dex <= 905) return "Gen-8.5_Hisui";
  return "Gen-9_Paldea";
}
function dexPad(d) { return String(d).padStart(4, "0"); }
function natDexImg(dex, suffix) { return `${IMG_BASE}/National-Dex/regular/${getGenFolder(dex)}/${dexPad(dex)}${suffix || ""}.webp`; }
function eventDexImg(dex, costume) { return `${IMG_BASE}/Event-Dex/regular/${getGenFolder(dex)}/${dexPad(dex)}_${costume}.webp`; }
function megaImg(dex, suffix) { return `${IMG_BASE}/Mega/regular/${getGenFolder(dex)}/${dexPad(dex)}_${suffix || "mega"}${GENDER_SUFFIX[dex] || ""}.webp`; }
function gmaxImg(dex) { return `${IMG_BASE}/Gigantamax/regular/Gen-8_Galar/${dexPad(dex)}_gigamax.webp`; }
const GENDER_SUFFIX = {3:"-male",12:"-male",19:"-male",20:"-male",25:"-male",26:"-male",29:"-female",30:"-female",31:"-female",32:"-male",33:"-male",34:"-male",41:"-male",42:"-male",44:"-male",45:"-male",64:"-male",65:"-male",84:"-male",85:"-male",97:"-male",106:"-male",107:"-male",111:"-male",112:"-male",113:"-female",115:"-female",118:"-male",119:"-male",123:"-male",124:"-female",128:"-male",129:"-male",130:"-male",133:"-male",154:"-male",165:"-male",166:"-male",178:"-male",185:"-male",186:"-male",190:"-male",194:"-male",195:"-male",198:"-male",202:"-male",203:"-male",207:"-male",208:"-male",212:"-male",214:"-male",215:"-male",217:"-male",221:"-male",224:"-male",229:"-male",232:"-male",236:"-male",237:"-male",238:"-female",241:"-female",242:"-female",255:"-male",256:"-male",257:"-male",267:"-male",269:"-male",272:"-male",274:"-male",275:"-male",307:"-male",308:"-male",313:"-male",314:"-female",315:"-male",316:"-male",317:"-male",322:"-male",323:"-male",332:"-male",350:"-male",369:"-male",380:"-female",381:"-male",396:"-male",397:"-male",398:"-male",399:"-male",400:"-male",401:"-male",402:"-male",403:"-male",404:"-male",405:"-male",407:"-male",414:"-male",415:"-male",416:"-female",417:"-male",418:"-male",419:"-male",424:"-male",440:"-female",443:"-male",444:"-male",445:"-male",449:"-male",450:"-male",453:"-male",454:"-male",456:"-male",457:"-male",459:"-male",460:"-male",461:"-male",464:"-male",465:"-male",473:"-male",475:"-male",478:"-female",488:"-female",521:"-male",538:"-male",539:"-male",548:"-female",549:"-female",592:"-male",593:"-male",627:"-male",628:"-male",629:"-female",630:"-female",668:"-male",678:"-male",758:"-female",761:"-female",762:"-female",763:"-female",856:"-female",857:"-female",858:"-female",859:"-male",860:"-male",861:"-male",876:"-male",916:"-male",957:"-female",958:"-female",959:"-female"};
const DEX = {
  "Bulbasaur":1,"Ivysaur":2,"Venusaur":3,"Charmander":4,"Charmeleon":5,"Charizard":6,"Squirtle":7,"Wartortle":8,"Blastoise":9,"Caterpie":10,"Metapod":11,"Butterfree":12,"Weedle":13,"Kakuna":14,"Beedrill":15,"Pidgey":16,"Pidgeotto":17,"Pidgeot":18,"Rattata":19,"Raticate":20,"Spearow":21,"Fearow":22,"Ekans":23,"Arbok":24,"Pikachu":25,"Raichu":26,"Sandshrew":27,"Sandslash":28,"Nidoran":29,"Nidorina":30,"Nidoqueen":31,"Nidorino":33,"Nidoking":34,"Clefairy":35,"Clefable":36,"Vulpix":37,"Ninetales":38,"Jigglypuff":39,"Wigglytuff":40,"Zubat":41,"Golbat":42,"Oddish":43,"Gloom":44,"Vileplume":45,"Paras":46,"Parasect":47,"Venonat":48,"Venomoth":49,"Diglett":50,"Dugtrio":51,"Meowth":52,"Persian":53,"Psyduck":54,"Golduck":55,"Mankey":56,"Primeape":57,"Growlithe":58,"Arcanine":59,"Poliwag":60,"Poliwhirl":61,"Poliwrath":62,"Abra":63,"Kadabra":64,"Alakazam":65,"Machop":66,"Machoke":67,"Machamp":68,"Bellsprout":69,"Weepinbell":70,"Victreebel":71,"Tentacool":72,"Tentacruel":73,"Geodude":74,"Graveler":75,"Golem":76,"Ponyta":77,"Rapidash":78,"Slowpoke":79,"Slowbro":80,"Magnemite":81,"Magneton":82,"Farfetchd":83,"Doduo":84,"Dodrio":85,"Seel":86,"Dewgong":87,"Grimer":88,"Muk":89,"Shellder":90,"Cloyster":91,"Gastly":92,"Haunter":93,"Gengar":94,"Onix":95,"Drowzee":96,"Hypno":97,"Krabby":98,"Kingler":99,"Voltorb":100,"Electrode":101,"Exeggcute":102,"Exeggutor":103,"Cubone":104,"Marowak":105,"Hitmonlee":106,"Hitmonchan":107,"Lickitung":108,"Koffing":109,"Weezing":110,"Rhyhorn":111,"Rhydon":112,"Chansey":113,"Tangela":114,"Kangaskhan":115,"Horsea":116,"Seadra":117,"Goldeen":118,"Seaking":119,"Staryu":120,"Starmie":121,"Mr. Mime":122,"Scyther":123,"Jynx":124,"Electabuzz":125,"Magmar":126,"Pinsir":127,"Tauros":128,"Magikarp":129,"Gyarados":130,"Lapras":131,"Ditto":132,"Eevee":133,"Vaporeon":134,"Jolteon":135,"Flareon":136,"Porygon":137,"Omanyte":138,"Omastar":139,"Kabuto":140,"Kabutops":141,"Aerodactyl":142,"Snorlax":143,"Articuno":144,"Zapdos":145,"Moltres":146,"Dratini":147,"Dragonair":148,"Dragonite":149,"Mewtwo":150,"Mew":151,
  "Chikorita":152,"Bayleef":153,"Meganium":154,"Cyndaquil":155,"Quilava":156,"Typhlosion":157,"Totodile":158,"Croconaw":159,"Feraligatr":160,"Sentret":161,"Furret":162,"Hoothoot":163,"Noctowl":164,"Ledyba":165,"Ledian":166,"Spinarak":167,"Ariados":168,"Crobat":169,"Chinchou":170,"Lanturn":171,"Pichu":172,"Cleffa":173,"Igglybuff":174,"Togepi":175,"Togetic":176,"Natu":177,"Xatu":178,"Mareep":179,"Flaaffy":180,"Ampharos":181,"Bellossom":182,"Marill":183,"Azumarill":184,"Sudowoodo":185,"Politoed":186,"Hoppip":187,"Skiploom":188,"Jumpluff":189,"Aipom":190,"Sunkern":191,"Sunflora":192,"Yanma":193,"Wooper":194,"Quagsire":195,"Espeon":196,"Umbreon":197,"Murkrow":198,"Slowking":199,"Misdreavus":200,"Unown":201,"Wobbuffet":202,"Girafarig":203,"Pineco":204,"Forretress":205,"Dunsparce":206,"Gligar":207,"Steelix":208,"Snubbull":209,"Granbull":210,"Qwilfish":211,"Scizor":212,"Shuckle":213,"Heracross":214,"Sneasel":215,"Teddiursa":216,"Ursaring":217,"Slugma":218,"Magcargo":219,"Swinub":220,"Piloswine":221,"Corsola":222,"Remoraid":223,"Octillery":224,"Delibird":225,"Mantine":226,"Skarmory":227,"Houndour":228,"Houndoom":229,"Kingdra":230,"Phanpy":231,"Donphan":232,"Porygon2":233,"Stantler":234,"Smeargle":235,"Tyrogue":236,"Hitmontop":237,"Smoochum":238,"Elekid":239,"Magby":240,"Miltank":241,"Blissey":242,"Raikou":243,"Entei":244,"Suicune":245,"Larvitar":246,"Pupitar":247,"Tyranitar":248,"Lugia":249,"Ho-Oh":250,"Celebi":251,
  "Treecko":252,"Grovyle":253,"Sceptile":254,"Torchic":255,"Combusken":256,"Blaziken":257,"Mudkip":258,"Marshtomp":259,"Swampert":260,"Poochyena":261,"Mightyena":262,"Zigzagoon":263,"Linoone":264,"Wurmple":265,"Silcoon":266,"Beautifly":267,"Cascoon":268,"Dustox":269,"Lotad":270,"Lombre":271,"Ludicolo":272,"Seedot":273,"Nuzleaf":274,"Shiftry":275,"Taillow":276,"Swellow":277,"Wingull":278,"Pelipper":279,"Ralts":280,"Kirlia":281,"Gardevoir":282,"Surskit":283,"Masquerain":284,"Shroomish":285,"Breloom":286,"Slakoth":287,"Vigoroth":288,"Slaking":289,"Nincada":290,"Ninjask":291,"Shedinja":292,"Whismur":293,"Loudred":294,"Exploud":295,"Makuhita":296,"Hariyama":297,"Azurill":298,"Nosepass":299,"Skitty":300,"Delcatty":301,"Sableye":302,"Mawile":303,"Aron":304,"Lairon":305,"Aggron":306,"Meditite":307,"Medicham":308,"Electrike":309,"Manectric":310,"Plusle":311,"Minun":312,"Volbeat":313,"Illumise":314,"Roselia":315,"Gulpin":316,"Swalot":317,"Carvanha":318,"Sharpedo":319,"Wailmer":320,"Wailord":321,"Numel":322,"Camerupt":323,"Torkoal":324,"Spoink":325,"Grumpig":326,"Spinda":327,"Trapinch":328,"Vibrava":329,"Flygon":330,"Cacnea":331,"Cacturne":332,"Swablu":333,"Altaria":334,"Zangoose":335,"Seviper":336,"Lunatone":337,"Solrock":338,"Barboach":339,"Whiscash":340,"Corphish":341,"Crawdaunt":342,"Baltoy":343,"Claydol":344,"Lileep":345,"Cradily":346,"Anorith":347,"Armaldo":348,"Feebas":349,"Milotic":350,"Castform":351,"Kecleon":352,"Shuppet":353,"Banette":354,"Duskull":355,"Dusclops":356,"Tropius":357,"Chimecho":358,"Absol":359,"Wynaut":360,"Snorunt":361,"Glalie":362,"Spheal":363,"Sealeo":364,"Walrein":365,"Clamperl":366,"Huntail":367,"Gorebyss":368,"Relicanth":369,"Luvdisc":370,"Bagon":371,"Shelgon":372,"Salamence":373,"Beldum":374,"Metang":375,"Metagross":376,"Regirock":377,"Regice":378,"Registeel":379,"Latias":380,"Latios":381,"Kyogre":382,"Groudon":383,"Rayquaza":384,"Jirachi":385,"Deoxys":386,
  "Turtwig":387,"Grotle":388,"Torterra":389,"Chimchar":390,"Monferno":391,"Infernape":392,"Piplup":393,"Prinplup":394,"Empoleon":395,"Starly":396,"Staravia":397,"Staraptor":398,"Bidoof":399,"Bibarel":400,"Kricketot":401,"Kricketune":402,"Shinx":403,"Luxio":404,"Luxray":405,"Budew":406,"Roserade":407,"Cranidos":408,"Rampardos":409,"Shieldon":410,"Bastiodon":411,"Burmy":412,"Wormadam":413,"Mothim":414,"Combee":415,"Vespiquen":416,"Pachirisu":417,"Buizel":418,"Floatzel":419,"Cherubi":420,"Cherrim":421,"Shellos":422,"Gastrodon":423,"Ambipom":424,"Drifloon":425,"Drifblim":426,"Buneary":427,"Lopunny":428,"Mismagius":429,"Honchkrow":430,"Glameow":431,"Purugly":432,"Chingling":433,"Stunky":434,"Skuntank":435,"Bronzor":436,"Bronzong":437,"Bonsly":438,"Mime Jr.":439,"Happiny":440,"Chatot":441,"Spiritomb":442,"Gible":443,"Gabite":444,"Garchomp":445,"Munchlax":446,"Riolu":447,"Lucario":448,"Hippopotas":449,"Hippowdon":450,"Skorupi":451,"Drapion":452,"Croagunk":453,"Toxicroak":454,"Carnivine":455,"Finneon":456,"Lumineon":457,"Mantyke":458,"Snover":459,"Abomasnow":460,"Weavile":461,"Magnezone":462,"Lickilicky":463,"Rhyperior":464,"Tangrowth":465,"Electivire":466,"Magmortar":467,"Togekiss":468,"Yanmega":469,"Leafeon":470,"Glaceon":471,"Gliscor":472,"Mamoswine":473,"Porygon-Z":474,"Gallade":475,"Probopass":476,"Dusknoir":477,"Froslass":478,"Rotom":479,"Uxie":480,"Mesprit":481,"Azelf":482,"Dialga":483,"Palkia":484,"Heatran":485,"Regigigas":486,"Giratina":487,"Cresselia":488,"Phione":489,"Manaphy":490,"Darkrai":491,"Shaymin":492,"Arceus":493,
  "Victini":494,"Snivy":495,"Servine":496,"Serperior":497,"Tepig":498,"Pignite":499,"Emboar":500,"Oshawott":501,"Dewott":502,"Samurott":503,"Patrat":504,"Watchog":505,"Lillipup":506,"Herdier":507,"Stoutland":508,"Purrloin":509,"Liepard":510,"Pansage":511,"Simisage":512,"Pansear":513,"Simisear":514,"Panpour":515,"Simipour":516,"Munna":517,"Musharna":518,"Pidove":519,"Tranquill":520,"Unfezant":521,"Blitzle":522,"Zebstrika":523,"Roggenrola":524,"Boldore":525,"Gigalith":526,"Woobat":527,"Swoobat":528,"Drilbur":529,"Excadrill":530,"Audino":531,"Timburr":532,"Gurdurr":533,"Conkeldurr":534,"Tympole":535,"Palpitoad":536,"Seismitoad":537,"Throh":538,"Sawk":539,"Sewaddle":540,"Swadloon":541,"Leavanny":542,"Venipede":543,"Whirlipede":544,"Scolipede":545,"Cottonee":546,"Whimsicott":547,"Petilil":548,"Lilligant":549,"Basculin":550,"Sandile":551,"Krokorok":552,"Krookodile":553,"Darumaka":554,"Darmanitan":555,"Maractus":556,"Dwebble":557,"Crustle":558,"Scraggy":559,"Scrafty":560,"Sigilyph":561,"Yamask":562,"Cofagrigus":563,"Tirtouga":564,"Carracosta":565,"Archen":566,"Archeops":567,"Trubbish":568,"Garbodor":569,"Zorua":570,"Zoroark":571,"Minccino":572,"Cinccino":573,"Gothita":574,"Gothorita":575,"Gothitelle":576,"Solosis":577,"Duosion":578,"Reuniclus":579,"Ducklett":580,"Swanna":581,"Vanillite":582,"Vanillish":583,"Vanilluxe":584,"Deerling":585,"Sawsbuck":586,"Emolga":587,"Karrablast":588,"Escavalier":589,"Foongus":590,"Amoonguss":591,"Frillish":592,"Jellicent":593,"Alomomola":594,"Joltik":595,"Galvantula":596,"Ferroseed":597,"Ferrothorn":598,"Klink":599,"Klang":600,"Klinklang":601,"Tynamo":602,"Eelektrik":603,"Eelektross":604,"Elgyem":605,"Beheeyem":606,"Litwick":607,"Lampent":608,"Chandelure":609,"Axew":610,"Fraxure":611,"Haxorus":612,"Cubchoo":613,"Beartic":614,"Cryogonal":615,"Shelmet":616,"Accelgor":617,"Stunfisk":618,"Mienfoo":619,"Mienshao":620,"Druddigon":621,"Golett":622,"Golurk":623,"Pawniard":624,"Bisharp":625,"Bouffalant":626,"Rufflet":627,"Braviary":628,"Vullaby":629,"Mandibuzz":630,"Heatmor":631,"Durant":632,"Deino":633,"Zweilous":634,"Hydreigon":635,"Larvesta":636,"Volcarona":637,"Cobalion":638,"Terrakion":639,"Virizion":640,"Tornadus":641,"Thundurus":642,"Reshiram":643,"Zekrom":644,"Landorus":645,"Kyurem":646,"Keldeo":647,"Meloetta":648,"Genesect":649,
  "Chespin":650,"Quilladin":651,"Chesnaught":652,"Fennekin":653,"Braixen":654,"Delphox":655,"Froakie":656,"Frogadier":657,"Greninja":658,"Bunnelby":659,"Diggersby":660,"Fletchling":661,"Fletchinder":662,"Talonflame":663,"Scatterbug":664,"Spewpa":665,"Vivillon":666,"Litleo":667,"Pyroar":668,"Skiddo":672,"Gogoat":673,"Pancham":674,"Pangoro":675,"Furfrou":676,"Espurr":677,"Meowstic":678,"Honedge":679,"Doublade":680,"Aegislash":681,"Spritzee":682,"Aromatisse":683,"Swirlix":684,"Slurpuff":685,"Inkay":686,"Malamar":687,"Binacle":688,"Barbaracle":689,"Skrelp":690,"Dragalge":691,"Clauncher":692,"Clawitzer":693,"Helioptile":694,"Heliolisk":695,"Tyrunt":696,"Tyrantrum":697,"Amaura":698,"Aurorus":699,"Sylveon":700,"Hawlucha":701,"Dedenne":702,"Carbink":703,"Goomy":704,"Sliggoo":705,"Goodra":706,"Klefki":707,"Phantump":708,"Trevenant":709,"Pumpkaboo":710,"Gourgeist":711,"Bergmite":712,"Avalugg":713,"Noibat":714,"Noivern":715,"Xerneas":716,"Yveltal":717,"Zygarde":718,"Diancie":719,"Hoopa":720,"Volcanion":721,
  "Rowlet":722,"Dartrix":723,"Decidueye":724,"Litten":725,"Torracat":726,"Incineroar":727,"Popplio":728,"Brionne":729,"Primarina":730,"Pikipek":731,"Trumbeak":732,"Toucannon":733,"Yungoos":734,"Gumshoos":735,"Grubbin":736,"Charjabug":737,"Vikavolt":738,"Crabrawler":739,"Crabominable":740,"Oricorio":741,"Cutiefly":742,"Ribombee":743,"Rockruff":744,"Lycanroc":745,"Wishiwashi":746,"Mareanie":747,"Toxapex":748,"Mudbray":749,"Mudsdale":750,"Dewpider":751,"Araquanid":752,"Fomantis":753,"Lurantis":754,"Morelull":755,"Shiinotic":756,"Salandit":757,"Salazzle":758,"Stufful":759,"Bewear":760,"Bounsweet":761,"Steenee":762,"Tsareena":763,"Comfey":764,"Oranguru":765,"Passimian":766,"Wimpod":767,"Golisopod":768,"Sandygast":769,"Palossand":770,"Pyukumuku":771,"Type: Null":772,"Silvally":773,"Minior":774,"Komala":775,"Turtonator":776,"Togedemaru":777,"Mimikyu":778,"Bruxish":779,"Drampa":780,"Dhelmise":781,"Jangmo-o":782,"Hakamo-o":783,"Kommo-o":784,"Tapu Koko":785,"Tapu Lele":786,"Tapu Bulu":787,"Tapu Fini":788,"Cosmog":789,"Cosmoem":790,"Solgaleo":791,"Lunala":792,"Nihilego":793,"Buzzwole":794,"Pheromosa":795,"Xurkitree":796,"Celesteela":797,"Kartana":798,"Guzzlord":799,"Necrozma":800,"Magearna":801,"Marshadow":802,"Poipole":803,"Naganadel":804,"Stakataka":805,"Blacephalon":806,"Zeraora":807,"Meltan":808,"Melmetal":809,
  "Grookey":810,"Thwackey":811,"Rillaboom":812,"Scorbunny":813,"Raboot":814,"Cinderace":815,"Sobble":816,"Drizzile":817,"Inteleon":818,"Skwovet":819,"Greedent":820,"Rookidee":821,"Corvisquire":822,"Corviknight":823,"Blipbug":824,"Dottler":825,"Orbeetle":826,"Nickit":827,"Thievul":828,"Gossifleur":829,"Eldegoss":830,"Wooloo":831,"Dubwool":832,"Chewtle":833,"Drednaw":834,"Yamper":835,"Boltund":836,"Rolycoly":837,"Carkol":838,"Coalossal":839,"Applin":840,"Flapple":841,"Appletun":842,"Silicobra":843,"Sandaconda":844,"Cramorant":845,"Arrokuda":846,"Barraskewda":847,"Toxel":848,"Toxtricity":849,"Sizzlipede":850,"Centiskorch":851,"Clobbopus":852,"Grapploct":853,"Sinistea":854,"Polteageist":855,"Hatenna":856,"Hattrem":857,"Hatterene":858,"Impidimp":859,"Morgrem":860,"Grimmsnarl":861,"Obstagoon":862,"Perrserker":863,"Cursola":864,"Sirfetchd":865,"Mr. Rime":866,"Runerigus":867,"Milcery":868,"Alcremie":869,"Falinks":870,"Pincurchin":871,"Snom":872,"Frosmoth":873,"Stonjourner":874,"Eiscue":875,"Indeedee":876,"Morpeko":877,"Cufant":878,"Copperajah":879,"Dracozolt":880,"Arctozolt":881,"Dracovish":882,"Arctovish":883,"Duraludon":884,"Dreepy":885,"Drakloak":886,"Dragapult":887,"Zacian":888,"Zamazenta":889,"Eternatus":890,"Kubfu":891,"Urshifu":892,"Zarude":893,"Regieleki":894,"Regidrago":895,"Glastrier":896,"Spectrier":897,"Calyrex":898,"Wyrdeer":899,"Kleavor":900,"Ursaluna":901,"Basculegion":902,"Sneasler":903,"Overqwil":904,"Enamorus":905,
  "Sprigatito":906,"Floragato":907,"Meowscarada":908,"Fuecoco":909,"Crocalor":910,"Skeledirge":911,"Quaxly":912,"Quaxwell":913,"Quaquaval":914,"Lechonk":915,"Oinkologne":916,"Tarountula":917,"Spidops":918,"Nymble":919,"Lokix":920,"Pawmi":921,"Pawmo":922,"Pawmot":923,"Tandemaus":924,"Maushold":925,"Fidough":926,"Dachsbun":927,"Smoliv":928,"Dolliv":929,"Arboliva":930,"Squawkabilly":931,"Nacli":932,"Naclstack":933,"Garganacl":934,"Charcadet":935,"Armarouge":936,"Ceruledge":937,"Tadbulb":938,"Bellibolt":939,"Wattrel":940,"Kilowattrel":941,"Maschiff":942,"Mabosstiff":943,"Shroodle":944,"Grafaiai":945,"Bramblin":946,"Brambleghast":947,"Toedscool":948,"Toedscruel":949,"Klawf":950,"Capsakid":951,"Scovillain":952,"Rellor":953,"Rabsca":954,"Flittle":955,"Espathra":956,"Tinkatink":957,"Tinkatuff":958,"Tinkaton":959,"Wiglett":960,"Wugtrio":961,"Bombirdier":962,"Finizen":963,"Palafin":964,"Varoom":965,"Revavroom":966,"Cyclizar":967,"Orthworm":968,"Glimmet":969,"Glimmora":970,"Greavard":971,"Houndstone":972,"Flamigo":973,"Cetoddle":974,"Cetitan":975,"Veluza":976,"Dondozo":977,"Tatsugiri":978,"Annihilape":979,"Clodsire":980,"Farigiraf":981,"Dudunsparce":982,"Kingambit":983,"Great Tusk":984,"Scream Tail":985,"Brute Bonnet":986,"Flutter Mane":987,"Slither Wing":988,"Sandy Shocks":989,"Iron Treads":990,"Iron Bundle":991,"Iron Hands":992,"Iron Jugulis":993,"Iron Moth":994,"Iron Thorns":995,"Frigibax":996,"Arctibax":997,"Baxcalibur":998,"Gimmighoul":999,"Gholdengo":1000,"Wo-Chien":1001,"Chien-Pao":1002,"Ting-Lu":1003,"Chi-Yu":1004,"Roaring Moon":1005,"Iron Valiant":1006,"Koraidon":1007,"Miraidon":1008,"Walking Wake":1009,"Iron Leaves":1010,"Dipplin":1011,"Poltchageist":1012,"Sinistcha":1013,"Okidogi":1014,"Munkidori":1015,"Fezandipiti":1016,"Ogerpon":1017,"Archaludon":1018,"Hydrapple":1019,"Gouging Fire":1020,"Raging Bolt":1021,"Iron Boulder":1022,"Iron Crown":1023,"Terapagos":1024,"Pecharunt":1025
};
const DEX_BY_NUM = {};
for (const [name, num] of Object.entries(DEX)) DEX_BY_NUM[num] = name;
const REGIONS = [
  { folder: "Gen-1_Kanto", label: "Gen 1 \u2014 Kanto", start: 1, end: 151 },
  { folder: "Gen-2_Johto", label: "Gen 2 \u2014 Johto", start: 152, end: 251 },
  { folder: "Gen-3_Hoenn", label: "Gen 3 \u2014 Hoenn", start: 252, end: 386 },
  { folder: "Gen-4_Sinnoh", label: "Gen 4 \u2014 Sinnoh", start: 387, end: 493 },
  { folder: "Gen-5_Unova", label: "Gen 5 \u2014 Unova", start: 494, end: 649 },
  { folder: "Gen-6_Kalos", label: "Gen 6 \u2014 Kalos", start: 650, end: 721 },
  { folder: "Gen-7_Alola", label: "Gen 7 \u2014 Alola", start: 722, end: 809 },
  { folder: "Gen-8_Galar", label: "Gen 8 \u2014 Galar", start: 810, end: 898 },
  { folder: "Gen-8.5_Hisui", label: "Gen 8.5 \u2014 Hisui", start: 899, end: 905 },
  { folder: "Gen-9_Paldea", label: "Gen 9 \u2014 Paldea", start: 906, end: 1025 }
];
const POKEMON_FORMS = {
  19:[{l:"Alola",f:"0019_alola"}],20:[{l:"Alola",f:"0020_alola"}],26:[{l:"Alola",f:"0026_alola"}],27:[{l:"Alola",f:"0027_alola"}],28:[{l:"Alola",f:"0028_alola"}],37:[{l:"Alola",f:"0037_alola"}],38:[{l:"Alola",f:"0038_alola"}],50:[{l:"Alola",f:"0050_alola"}],51:[{l:"Alola",f:"0051_alola"}],52:[{l:"Alola",f:"0052_alola"}],53:[{l:"Alola",f:"0053_alola"}],74:[{l:"Alola",f:"0074_alola"}],75:[{l:"Alola",f:"0075_alola"}],76:[{l:"Alola",f:"0076_alola"}],88:[{l:"Alola",f:"0088_alola"}],89:[{l:"Alola",f:"0089_alola"}],103:[{l:"Alola",f:"0103_alola"}],105:[{l:"Alola",f:"0105_alola"}],
  201:[{l:"A",f:"0201_a"},{l:"B",f:"0201_b"},{l:"C",f:"0201_c"},{l:"D",f:"0201_d"},{l:"E",f:"0201_e"},{l:"F",f:"0201_f"},{l:"G",f:"0201_g"},{l:"H",f:"0201_h"},{l:"I",f:"0201_i"},{l:"J",f:"0201_j"},{l:"K",f:"0201_k"},{l:"L",f:"0201_l"},{l:"M",f:"0201_m"},{l:"N",f:"0201_n"},{l:"O",f:"0201_o"},{l:"P",f:"0201_p"},{l:"Q",f:"0201_q"},{l:"R",f:"0201_r"},{l:"S",f:"0201_s"},{l:"T",f:"0201_t"},{l:"U",f:"0201_u"},{l:"V",f:"0201_v"},{l:"W",f:"0201_w"},{l:"X",f:"0201_x"},{l:"Y",f:"0201_y"},{l:"Z",f:"0201_z"},{l:"!",f:"0201_zem"},{l:"?",f:"0201_zim"}],
  327:[{l:"Pattern 1",f:"0327_01"},{l:"Pattern 2",f:"0327_02"},{l:"Pattern 3",f:"0327_03"},{l:"Pattern 4",f:"0327_04"},{l:"Pattern 5",f:"0327_05"},{l:"Pattern 6",f:"0327_06"},{l:"Pattern 7",f:"0327_07"},{l:"Pattern 8",f:"0327_08"},{l:"Pattern 9",f:"0327_09"}],
  351:[{l:"Rainy",f:"0351_rain"},{l:"Snowy",f:"0351_snow"},{l:"Sunny",f:"0351_sun"}],
  386:[{l:"Attack",f:"0386_attack"},{l:"Defense",f:"0386_defense"},{l:"Speed",f:"0386_speed"}],
  412:[{l:"Plant",f:"0412_plant"},{l:"Sandy",f:"0412_sandy"},{l:"Trash",f:"0412_trash"}],
  413:[{l:"Plant",f:"0413_plant-female"},{l:"Sandy",f:"0413_sandy-female"},{l:"Trash",f:"0413_trash-female"}],
  421:[{l:"Overcast",f:"0421_over"},{l:"Sunshine",f:"0421_sun"}],
  422:[{l:"East Sea",f:"0422_east"},{l:"West Sea",f:"0422_west"}],
  423:[{l:"East Sea",f:"0423_east"},{l:"West Sea",f:"0423_west"}],
  479:[{l:"Fan",f:"0479_fan"},{l:"Frost",f:"0479_frost"},{l:"Heat",f:"0479_heat"},{l:"Mow",f:"0479_mow"},{l:"Wash",f:"0479_wash"}],
  483:[{l:"Origin",f:"0483_origin"}],484:[{l:"Origin",f:"0484_origin"}],
  487:[{l:"Altered",f:"0487_alt"},{l:"Origin",f:"0487_ori"}],
  492:[{l:"Land",f:"0492_land"},{l:"Sky",f:"0492_sky"}],
  550:[{l:"Blue-Striped",f:"0550_blue"},{l:"Red-Striped",f:"0550_red"}],
  585:[{l:"Autumn",f:"0585_autumn"},{l:"Spring",f:"0585_spring"},{l:"Summer",f:"0585_summer"},{l:"Winter",f:"0585_winter"}],
  586:[{l:"Autumn",f:"0586_autumn"},{l:"Spring",f:"0586_spring"},{l:"Summer",f:"0586_summer"},{l:"Winter",f:"0586_winter"}],
  641:[{l:"Incarnate",f:"0641_incarnate-male"},{l:"Therian",f:"0641_therian-male"}],
  642:[{l:"Incarnate",f:"0642_incarnate-male"},{l:"Therian",f:"0642_therian-male"}],
  645:[{l:"Incarnate",f:"0645_incarnate-male"},{l:"Therian",f:"0645_therian-male"}],
  646:[{l:"Black",f:"0646_black"},{l:"White",f:"0646_white"}],
  647:[{l:"Resolute",f:"0647_resolute"}],
  649:[{l:"Burn",f:"0649_burn"},{l:"Chill",f:"0649_chill"},{l:"Douse",f:"0649_douse"},{l:"Shock",f:"0649_shock"}],
  666:[{l:"Archipelago",f:"0666_archipelago"},{l:"Continental",f:"0666_continental"},{l:"Elegant",f:"0666_elegant"},{l:"Garden",f:"0666_garden"},{l:"High Plains",f:"0666_highplains"},{l:"Icy Snow",f:"0666_icysnow"},{l:"Jungle",f:"0666_jungle"},{l:"Marine",f:"0666_marine"},{l:"Meadow",f:"0666_meadow"},{l:"Modern",f:"0666_modern"},{l:"Monsoon",f:"0666_monsoon"},{l:"Ocean",f:"0666_ocean"},{l:"Polar",f:"0666_polar"},{l:"River",f:"0666_river"},{l:"Sandstorm",f:"0666_sandstorm"},{l:"Savanna",f:"0666_savanna"},{l:"Sun",f:"0666_sun"},{l:"Tundra",f:"0666_tundra"}],
  669:[{l:"Blue",f:"0669_blue-female"},{l:"Orange",f:"0669_orange-female"},{l:"Red",f:"0669_red-female"},{l:"White",f:"0669_white-female"},{l:"Yellow",f:"0669_yellow-female"}],
  670:[{l:"Blue",f:"0670_blue-female"},{l:"Orange",f:"0670_orange-female"},{l:"Red",f:"0670_red-female"},{l:"White",f:"0670_white-female"},{l:"Yellow",f:"0670_yellow-female"}],
  671:[{l:"Blue",f:"0671_blue-female"},{l:"Orange",f:"0671_orange-female"},{l:"Red",f:"0671_red-female"},{l:"White",f:"0671_white-female"},{l:"Yellow",f:"0671_yellow-female"}],
  676:[{l:"Dandy",f:"0676_dandy"},{l:"Debutante",f:"0676_debutante"},{l:"Diamond",f:"0676_diamond"},{l:"Heart",f:"0676_heart"},{l:"Kabuki",f:"0676_kabuki"},{l:"La Reine",f:"0676_lareine"},{l:"Matron",f:"0676_matron"},{l:"Pharaoh",f:"0676_pharaoh"},{l:"Star",f:"0676_star"}],
  681:[{l:"Blade",f:"0681_blade"}],
  710:[{l:"Small",f:"0710a_small"},{l:"Average",f:"0710b_average"},{l:"Large",f:"0710c_large"},{l:"Super",f:"0710d_super"}],
  711:[{l:"Small",f:"0711a_small"},{l:"Average",f:"0711b_average"},{l:"Large",f:"0711c_large"},{l:"Super",f:"0711d_super"}],
  718:[{l:"10%",f:"0718_010"},{l:"50%",f:"0718_050"},{l:"100%",f:"0718_100"}],
  720:[{l:"Confined",f:"0720_confined"},{l:"Unbound",f:"0720_unbound"}],
  741:[{l:"Baile",f:"0741_baile"},{l:"Pa'u",f:"0741_pau"},{l:"Pom-Pom",f:"0741_pom"},{l:"Sensu",f:"0741_sensu"}],
  745:[{l:"Dusk",f:"0745_dusk"},{l:"Midday",f:"0745_midday"},{l:"Midnight",f:"0745_midnight"}],
  746:[{l:"School",f:"0746_school"}],
  800:[{l:"Dawn Wings",f:"0800_dawn"},{l:"Dusk Mane",f:"0800_dusk"}],
  849:[{l:"Amped",f:"0849_amped"},{l:"Low Key",f:"0849_lowkey"}],
  854:[{l:"Antique",f:"0854_antique"}],855:[{l:"Antique",f:"0855_antique"}],
  888:[{l:"Crowned Sword",f:"0888_sword"}],889:[{l:"Crowned Shield",f:"0889_shield"}],
  892:[{l:"Rapid Strike",f:"0892_rapid"},{l:"Single Strike",f:"0892_single"}],
  905:[{l:"Incarnate",f:"0905_incarnate-female"},{l:"Therian",f:"0905_therian-female"}],
  925:[{l:"Family of Four",f:"0925_four"},{l:"Family of Three",f:"0925_three"}],
  978:[{l:"Curly",f:"0978_curly"},{l:"Droopy",f:"0978_droopy"},{l:"Stretchy",f:"0978_stretchy"}],
  982:[{l:"Two-Segment",f:"0982_2segment"},{l:"Three-Segment",f:"0982_3segment"}],
  1012:[{l:"Artisan",f:"1012_artisan"},{l:"Counterfeit",f:"1012_counterfeit"}],
  1013:[{l:"Masterpiece",f:"1013_masterpiece"},{l:"Unremarkable",f:"1013_unremarkable"}]
};
function formImgUrl(dex, filename) { return `${IMG_BASE}/National-Dex/regular/${getGenFolder(dex)}/${filename}.webp`; }

// --- POKEMON DETAIL VIEW ---
const STAT_COLORS = {hp:"#FF5959",attack:"#F5AC78",defense:"#FAE078","special-attack":"#9DB7F5","special-defense":"#A7DB8D",speed:"#FA92B2"};
const STAT_LABELS = {hp:"HP",attack:"Attack",defense:"Defense","special-attack":"Sp. Atk","special-defense":"Sp. Def",speed:"Speed"};
const _pokeCache = {};
async function fetchPokemonData(dexNum) {
  const key = `pokemon_${dexNum}`;
  if (_pokeCache[key]) return _pokeCache[key];
  const [pokeRes, speciesRes] = await Promise.all([fetch(`https://pokeapi.co/api/v2/pokemon/${dexNum}`), fetch(`https://pokeapi.co/api/v2/pokemon-species/${dexNum}`)]);
  if (!pokeRes.ok || !speciesRes.ok) throw new Error(`Failed to fetch #${dexNum}`);
  const [poke, species] = await Promise.all([pokeRes.json(), speciesRes.json()]);
  const flavorEntry = species.flavor_text_entries.find(e => e.language.name === "en");
  const genusEntry = species.genera.find(e => e.language.name === "en");
  const result = { name: species.names?.find(n => n.language.name === "en")?.name || poke.name, dexNum, types: poke.types.map(t => t.type.name), height: poke.height, weight: poke.weight, flavorText: flavorEntry?.flavor_text.replace(/[\f\n\r]/g, " ") || "", genus: genusEntry?.genus || "", stats: poke.stats.map(s => ({ name: s.stat.name, value: s.base_stat })), evolutionChainUrl: species.evolution_chain?.url || null };
  _pokeCache[key] = result;
  return result;
}
function _fmtName(n) { return n.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" "); }
function _parseTrigger(details) {
  if (!details || !details.length) return "";
  const d = details[0]; const p = [];
  switch (d.trigger?.name) {
    case "level-up": p.push(d.min_level ? `Level ${d.min_level}` : "Level up"); if (d.min_happiness) p.push(`(Happiness ${d.min_happiness})`); if (d.time_of_day) p.push(`(${d.time_of_day})`); if (d.known_move) p.push(`(knows ${_fmtName(d.known_move.name)})`); if (d.known_move_type) p.push(`(knows ${d.known_move_type.name} move)`); if (d.location) p.push(`(at ${_fmtName(d.location.name)})`); if (d.needs_overworld_rain) p.push("(rain)"); if (d.turn_upside_down) p.push("(upside down)"); break;
    case "use-item": p.push(`Use ${_fmtName(d.item?.name || "item")}`); break;
    case "trade": p.push("Trade"); if (d.held_item) p.push(`(holding ${_fmtName(d.held_item.name)})`); break;
    default: if (d.trigger?.name) p.push(_fmtName(d.trigger.name));
  }
  return p.join(" ");
}
async function fetchEvolutionChain(dexNum) {
  const ck = `evo_${dexNum}`;
  if (_pokeCache[ck]) return _pokeCache[ck];
  const data = await fetchPokemonData(dexNum);
  if (!data.evolutionChainUrl) { _pokeCache[ck] = []; return []; }
  const res = await fetch(data.evolutionChainUrl);
  if (!res.ok) throw new Error("Failed to fetch evolution chain");
  const chain = await res.json();
  const stages = [];
  function walk(node, depth) {
    const num = parseInt(node.species.url.split("/").filter(Boolean).pop(), 10);
    stages.push({ name: _fmtName(node.species.name), dexNum: num, trigger: _parseTrigger(node.evolution_details), depth });
    for (const child of node.evolves_to) walk(child, depth + 1);
  }
  walk(chain.chain, 0);
  _pokeCache[ck] = stages;
  return stages;
}
function pokemonImgUrl(dex) { return natDexImg(dex, GENDER_SUFFIX[dex] || ""); }

function getPokemonImg(name) {
  const lower = name.toLowerCase();
  if (lower.includes("tba") || lower.includes("other ") || lower.includes("possible") || lower.includes("featured pok") || lower.includes("surprise") || lower.includes("steel-type") || lower.includes("10th anniversary") || lower.includes("raid bosses")) return null;
  const megaMatch = name.match(/Mega\s+(\w+)/);
  if (megaMatch) { const dex = DEX[megaMatch[1]]; if (dex) return { url: megaImg(dex, "mega"), shadow: false }; }
  const gmaxMatch = name.match(/Gigantamax\s+(\w+)/);
  if (gmaxMatch) { const dex = DEX[gmaxMatch[1]]; if (dex) return { url: gmaxImg(dex), shadow: false }; }
  const dmaxMatch = name.match(/Dynamax\s+(\w+)/);
  if (dmaxMatch) { const dex = DEX[dmaxMatch[1]]; if (dex) return { url: natDexImg(dex, GENDER_SUFFIX[dex] || ""), shadow: false }; }
  if (lower.includes("origin")) {
    const m = name.match(/Origin\s+(\w+)/);
    if (m) { const dex = DEX[m[1]]; if (dex) return { url: natDexImg(dex, "_ori"), shadow: false }; }
  }
  if (lower.includes("primal")) {
    const m = name.match(/Primal\s+(\w+)/);
    if (m) { const dex = DEX[m[1]]; if (dex) return { url: megaImg(dex, "primal"), shadow: false }; }
  }
  if (lower.includes("therian")) {
    const m = name.match(/(\w+)\s*\(Therian\)/);
    if (m) { const dex = DEX[m[1]]; if (dex) return { url: natDexImg(dex, "_therian" + (GENDER_SUFFIX[dex] || "-male")), shadow: false }; }
  }
  if (lower.includes("corsola") && lower.includes("sunglasses")) {
    return { url: eventDexImg(222, "spring_2026"), shadow: false };
  }
  if (lower.includes("galarian")) {
    const m = name.match(/Galarian\s+(\w+)/);
    if (m) { const dex = DEX[m[1]]; if (dex) return { url: natDexImg(dex, "_galarian"), shadow: lower.includes("shadow") }; }
  }
  if (lower.includes("alolan")) {
    const m = name.match(/Alolan\s+(\w+)/);
    if (m) { const dex = DEX[m[1]]; if (dex) return { url: natDexImg(dex, "_alola"), shadow: lower.includes("shadow") }; }
  }
  if (lower.includes("shadow")) {
    const m = name.match(/Shadow\s+(\w+)/);
    if (m) { const dex = DEX[m[1]]; if (dex) return { url: natDexImg(dex, GENDER_SUFFIX[dex] || ""), shadow: true }; }
  }
  if (lower.includes("costume") || lower.includes("costumed")) {
    const COSTUME_MAP = {"Dragonite":"fashion","Butterfree":"fashion-male","Diglett":"fashion","Wooper":"fashion-male","Sneasel":"fashion-male","Kirlia":"tophat","Absol":"fashion","Shinx":"tophat-male","Croagunk":"cap-male","Blitzle":"fashion","Minccino":"fashion","Pikachu":"party-male"};
    const m = name.match(/(?:Costume|Costumed)\s+(\w+)/);
    if (m) {
      const costume = COSTUME_MAP[m[1]]; const dex = DEX[m[1]];
      if (dex && costume) return { url: eventDexImg(dex, costume), shadow: false };
      if (dex) return { url: natDexImg(dex, GENDER_SUFFIX[dex] || ""), shadow: false };
    }
  }
  if (lower.includes("paldean tauros")) {
    if (lower.includes("blaze")) return { url: natDexImg(128, "_blaze"), shadow: false };
    if (lower.includes("aqua")) return { url: natDexImg(128, "_aqua"), shadow: false };
    return { url: natDexImg(128, "_combat"), shadow: false };
  }
  for (const [pkmn, dex] of Object.entries(DEX).sort((a, b) => b[0].length - a[0].length)) {
    if (name.includes(pkmn)) return { url: natDexImg(dex, GENDER_SUFFIX[dex] || ""), shadow: false };
  }
  return null;
}
function pokemonImgHTML(pkmn, size) {
  if (!pkmn) return null;
  if (pkmn.shadow) {
    return `<div style="position:relative;width:${size}px;height:${size}px;flex-shrink:0">
      <div style="position:absolute;top:18%;left:15%;width:35%;height:30%;background:rgba(120,40,180,0.55);border-radius:60% 40% 55% 45%;filter:blur(6px);transform:rotate(-15deg);animation:flameWisp1 2.2s ease-in-out infinite"></div>
      <div style="position:absolute;top:10%;left:45%;width:30%;height:25%;background:rgba(100,20,160,0.45);border-radius:45% 55% 50% 40%;filter:blur(7px);transform:rotate(10deg);animation:flameWisp2 2.5s ease-in-out infinite"></div>
      <div style="position:absolute;top:35%;left:55%;width:35%;height:32%;background:rgba(130,50,190,0.5);border-radius:50% 60% 40% 55%;filter:blur(6px);transform:rotate(20deg);animation:flameWisp3 2s ease-in-out infinite"></div>
      <div style="position:absolute;top:50%;left:10%;width:32%;height:28%;background:rgba(110,30,170,0.5);border-radius:55% 45% 60% 40%;filter:blur(7px);transform:rotate(-10deg);animation:flameWisp4 2.3s ease-in-out infinite"></div>
      <div style="position:absolute;top:55%;left:45%;width:30%;height:25%;background:rgba(140,50,200,0.45);border-radius:40% 60% 45% 55%;filter:blur(6px);transform:rotate(5deg);animation:flameWisp5 2.1s ease-in-out infinite"></div>
      <div style="position:absolute;top:30%;left:25%;width:40%;height:35%;background:rgba(115,35,175,0.4);border-radius:50% 45% 55% 50%;filter:blur(8px);transform:rotate(-5deg);animation:flameWisp2 2.4s ease-in-out 0.3s infinite"></div>
      <div style="position:absolute;top:15%;left:55%;width:25%;height:22%;background:rgba(105,25,165,0.4);border-radius:45% 55% 40% 50%;filter:blur(7px);transform:rotate(25deg);animation:flameWisp4 2.6s ease-in-out 0.2s infinite"></div>
      <div style="position:absolute;top:45%;left:20%;width:28%;height:24%;background:rgba(135,45,195,0.45);border-radius:55% 40% 50% 45%;filter:blur(6px);transform:rotate(-20deg);animation:flameWisp1 2.3s ease-in-out 0.4s infinite"></div>
      <img src="${pkmn.url}" style="position:relative;width:100%;height:100%;object-fit:contain;z-index:1" onerror="this.parentElement.style.display='none'" />
    </div>`;
  }
  if (pkmn.dynamax) {
    return `<div style="position:relative;width:${size}px;height:${size}px;flex-shrink:0">
      <img src="assets/pokemon-images/dynamax.png" style="position:absolute;top:0;left:50%;transform:translateX(-50%);width:80%;object-fit:contain;opacity:0.85" />
      <img src="${pkmn.url}" style="position:relative;width:100%;height:100%;object-fit:contain;z-index:1" onerror="this.parentElement.style.display='none'" />
    </div>`;
  }
  return `<img src="${pkmn.url}" style="width:${size}px;height:${size}px;object-fit:contain;flex-shrink:0" onerror="this.style.display='none'" />`;
}
function fourPointStar(s, color) {
  return `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="${color}" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C13 7 17 11 24 12C17 13 13 17 12 24C11 17 7 13 0 12C7 11 11 7 12 0Z"/></svg>`;
}
const SHINY_AVAILABLE = new Set([
  "Pikachu","Chinchou","Dedenne","Pawmi","Castform","Seedot","Wiglett","Riolu",
  "Bulbasaur","Charmander","Squirtle","Ditto","Sudowoodo","Zorua","Lapras","Snorlax","Dragonite",
  "Caterpie","Dwebble","Sizzlipede","Paras","Cutiefly","Combee","Pinsir","Scizor","Kleavor","Scyther",
  "Regidrago","Kyogre","Groudon","Tapu Koko","Tapu Lele","Mewtwo",
  "Aerodactyl","Alakazam","Banette","Manectric","Sharpedo",
  "Venusaur","Charizard","Blastoise","Rayquaza","Sceptile","Swampert","Gardevoir","Gengar","Latios",
  "Absol","Butterfree","Diglett","Wooper","Sneasel","Kirlia","Shinx","Croagunk","Blitzle","Minccino",
  "Corsola","Dragonite","Salamence","Garchomp","Mamoswine","Weavile","Raikou","Electivire",
  "Excadrill","Metagross","Rhyperior","Tangrowth","Chandelure","Giratina","Darmanitan",
  "Regirock","Shuckle","Trapinch","Drilbur","Tauros","Cinderace","Rillaboom","Empoleon",
  "Tinkatink","Tinkaton","Toedscool","Ninetales","Silicobra","Zekrom","Kartana","Landorus",
  "Scorbunny","Mareep","Magnemite","Joltik",
  "Larvitar","Lileep","Stunfisk","Rockruff","Machamp","Hippowdon",
  "Regieleki","Houndoom","Dratini","Gligar","Stantler","Latias","Marowak","Wooloo","Wailmer","Regice",
  "Growlithe","Gastly","Pidove","Woobat","Drilbur","Inkay","Skwovet","Trubbish",
  "Rookidee","Spheal","Roggenrola","Bounsweet","Kabuto","Omanyte","Abra","Ralts",
  "Krabby","Hatenna","Darumaka","Eevee","Machop",
  "Hitmonchan","Hitmonlee","Drampa","Sableye","Falinks","Passimian","Beldum",
  "Cryogonal","Chansey","Grookey",
  "Gyarados","Honedge","Dhelmise","Sinistea","Duraludon","Dreepy"
]);
function isShinyEligible(name) {
  if (name.includes("\u2728")) return true;
  for (const pkmn of SHINY_AVAILABLE) {
    if (name.includes(pkmn)) return true;
  }
  return false;
}
function wrapShinySparkles(imgHTML, name, size) {
  if (!isShinyEligible(name)) return imgHTML;
  const boosted = name.startsWith("\u2605");
  const sparkles = boosted
    ? `<div style="position:absolute;top:6%;right:18%;z-index:2">
        <div style="position:absolute;top:0;left:0;animation:boostedShiny 1.8s ease-in-out infinite">${fourPointStar(10, "#FFD700")}</div>
        <div style="position:absolute;top:10px;left:12px;animation:boostedShiny 1.8s ease-in-out 0.4s infinite">${fourPointStar(16, "#FFD700")}</div>
        <div style="position:absolute;top:18px;left:4px;animation:boostedShiny 1.8s ease-in-out 0.8s infinite">${fourPointStar(8, "#FFD700")}</div>
      </div>`
    : `<div style="position:absolute;top:6%;right:10%;z-index:2;font-size:24px">\u2728</div>`;
  // If imgHTML is already wrapped in a relative div (shadow pokemon), inject sparkles into it
  if (imgHTML.includes("position:relative;width:")) {
    return imgHTML.replace(/<\/div>$/, `${sparkles}</div>`);
  }
  // Otherwise wrap the image
  return `<div style="position:relative;width:${size}px;height:${size}px;flex-shrink:0">
    <img src="${imgHTML.match(/src="([^"]+)"/)[1]}" style="width:100%;height:100%;object-fit:contain" onerror="this.style.display='none'" />
    ${sparkles}
  </div>`;
}

// --- THEME SYSTEM ---
let darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
  darkMode = e.matches;
  render();
});
function updateThemeColor() {
  const color = darkMode ? "#0e0e12" : "#FAFBFC";
  document.querySelectorAll('meta[name="theme-color"]').forEach(m => m.setAttribute("content", color));
}
function toggleDarkMode() {
  darkMode = !darkMode;
  updateThemeColor();
  const btn = document.getElementById("theme-toggle");
  if (btn) { btn.style.transform = "rotate(360deg) scale(1.2)"; setTimeout(() => { btn.style.transform = "rotate(0deg) scale(1)"; }, 400); }
  render();
}

let breakpoint = getBreakpoint();
function getBreakpoint() {
  const w = window.innerWidth;
  if (w >= 1024) return "desktop";
  if (w >= 640) return "tablet";
  return "mobile";
}
window.addEventListener("resize", () => {
  const bp = getBreakpoint();
  if (bp !== breakpoint) { breakpoint = bp; render(); }
});

function t(dark) {
  return {
    bg: dark ? "#0e0e12" : "#FAFBFC",
    surface: dark ? "#1a1a24" : "#fff",
    surfaceHover: dark ? "#22222e" : "#fff",
    border: dark ? "#2a2a3a" : "#f0f0f0",
    borderHover: dark ? "#3a3a4e" : "#e0e0e0",
    text: dark ? "#e8e8f0" : "#1a1a2e",
    textSecondary: dark ? "#a0a0b8" : "#666",
    textMuted: dark ? "#6a6a80" : "#aaa",
    textFaint: dark ? "#50506a" : "#ccc",
    headerBg: dark ? "rgba(14,14,18,0.92)" : "rgba(255,255,255,0.92)",
    heroBg: (c) => dark ? `${c}18` : `${c}14`,
    heroBorder: (c) => dark ? `${c}30` : `${c}22`,
    cardBg: (active, c) => active ? (dark ? `${c}15` : `${c}06`) : (dark ? "#1a1a24" : "#fff"),
    cardBorder: (active, c) => active ? `${c}${dark ? "40" : "35"}` : (dark ? "#2a2a3a" : "#f0f0f0"),
    accentBg: (c) => `${c}${dark ? "20" : "12"}`,
    accentBgSubtle: (c) => `${c}${dark ? "15" : "08"}`,
    countdownBg: (c) => `${c}${dark ? "22" : "14"}`,
    countdownBorder: (c) => `${c}${dark ? "35" : "25"}`,
    tipBg: dark ? "#2a2518" : "#FFFBF0",
    tipBorder: dark ? "#3d3520" : "#FEF3C7",
    tipText: dark ? "#d4b86a" : "#92742E",
    detailHeaderBg: (c) => dark ? `${c}12` : `${c}18`,
    detailHeaderBorder: (c) => dark ? `${c}20` : `${c}18`,
    pillActiveBg: dark ? "#e8e8f0" : "#1a1a2e",
    pillActiveText: dark ? "#0e0e12" : "#fff",
    pillBg: dark ? "#1a1a24" : "#fff",
    pillBorder: dark ? "#2a2a3a" : "#e8e8e8",
    pillText: dark ? "#8888a0" : "#888",
    tabBorder: dark ? "#2a2a3a" : "#f0f0f0",
    tabActive: dark ? "#e8e8f0" : "#1a1a2e",
    tabInactive: dark ? "#50506a" : "#bbb",
    footerBorder: dark ? "#1a1a24" : "#f5f5f5",
    shadow: dark ? "0 1px 3px rgba(0,0,0,0.3)" : "0 1px 3px rgba(0,0,0,0.04)",
    shadowLg: dark ? "0 2px 12px rgba(0,0,0,0.4)" : "0 2px 12px rgba(0,0,0,0.06)",
    tagBg: (tag) => {
      const map = { Update: dark ? "#1a2a3a" : "#EBF5FB", News: dark ? "#2a1a3a" : "#F5EEF8", Meetup: dark ? "#1a2a1a" : "#EAFAF1", Alert: dark ? "#2a2218" : "#FDF2E9" };
      return map[tag] || map.Update;
    },
    tagText: (tag) => {
      const map = { Update: "#5DADE2", News: "#BB8FCE", Meetup: "#58D68D", Alert: "#F0B27A" };
      if (dark) return map[tag] || map.Update;
      const mapL = { Update: "#2980B9", News: "#8E44AD", Meetup: "#27AE60", Alert: "#E67E22" };
      return mapL[tag] || mapL.Update;
    }
  };
}

// --- EVENT DATA ---
const EVENTS = [
  { id: 1, title: "A Shockingly Good Time", type: "Event", url: "https://pokemongo.com/news/a-shockingly-good-time", date: "2026-03-31", endDate: "2026-04-06", time: "10:00 AM – 8:00 PM", color: "#F1C40F", icon: "\u26A1", featured: false, summary: "Electric Pokémon extravaganza with daily Spotlight Hours, boosted Shiny odds for Pikachu, Chinchou, and Dedenne.", details: { bosses: ["★Pikachu", "★Chinchou", "★Dedenne", "Pawmi", "Other Electric-types in the wild"], bonuses: ["Daily Spotlight Hour 6–7 PM featuring different Electric-types", "Boosted Shiny rates for event spawns", "Incense lasts twice as long", "GO Pass and GO Pass Deluxe rewards available"], spotlightHours: [
      { date: "Tue, Mar 31", pokemon: "Mareep", shiny: true },
      { date: "Wed, Apr 1", pokemon: "Pikachu", shiny: true, boostedShiny: true },
      { date: "Thu, Apr 2", pokemon: "Magnemite", shiny: true },
      { date: "Fri, Apr 3", pokemon: "Chinchou", shiny: true, boostedShiny: true },
      { date: "Sat, Apr 4", pokemon: "Pawmi", shiny: true },
      { date: "Sun, Apr 5", pokemon: "Dedenne", shiny: true, boostedShiny: true },
      { date: "Mon, Apr 6", pokemon: "Joltik", shiny: true }
    ], tips: ["Spotlight Hours run every day of this event, not just Tuesday.", "Shiny Dedenne and Pawmi are the big targets — check every one.", "Activate Incense during Spotlight Hours for doubled duration + boosted spawns.", "GO Pass Deluxe is available on the Web Store for premium rewards."] } },
  // { id: 2, title: "April Fools 2026", type: "Event", date: "2026-04-01", endDate: null, time: "10:00 AM – 6:00 PM", color: "#9B59B6", icon: "\uD83C\uDCCF", featured: false, summary: "One-day April Fools surprise event. Expect trick spawns, disguised Pokémon, and limited-time shenanigans.", details: { bosses: ["Surprise spawns and disguised Pokémon (revealed day-of)"], bonuses: ["One-day-only event spawns", "Possible Ditto-themed encounters", "April Fools Field Research tasks"], tips: ["These events are always short — block out a couple hours.", "Keep an eye on social media for real-time spawn reports.", "Ditto often plays a role — catch everything that looks 'normal'.", "Don't transfer unusual catches until you've checked for Ditto."] } },
  { id: 3, title: "Fashion Raid Day", type: "Raid", url: "https://pokemongo.com/news/fashion-raid-day-2026", date: "2026-04-04", endDate: null, time: "2:00 PM – 5:00 PM", color: "#E91E63", icon: "\uD83D\uDC57", iconImg: "assets/pokemon-images/pm149.cFALL_2023.icon.png", featured: true, summary: "Costumed Pokémon take over raids! Dragonite, Butterfree, Diglett, Wooper, Sneasel, Kirlia, Absol, Shinx, Croagunk, Blitzle, and Minccino in costume.", details: { bosses: ["Costume Dragonite (3\u2605 Raid)", "Costume Absol (3\u2605 Raid)", "Costume Butterfree (3\u2605 Raid)", "Costume Kirlia (3\u2605 Raid)", "Costume Blitzle (1\u2605 Raid)", "Costume Croagunk (1\u2605 Raid)", "Costume Diglett (1\u2605 Raid)", "Costume Minccino (1\u2605 Raid)", "Costume Shinx (1\u2605 Raid)", "Costume Sneasel (1\u2605 Raid)", "Costume Wooper (1\u2605 Raid)"], bonuses: ["Up to 6 free Raid Passes from spinning Gym Photo Discs", "Remote Raid Pass limit increased to 20 (Apr 3 5 PM \u2013 Apr 4 8 PM PDT)", "Boosted Shiny rates for all costumed raid Pok\u00E9mon", "Costumed Pok\u00E9mon appearing more frequently in raids for 3 hours"], ticketPrice: "$4.99", ticketBonuses: ["Up to 14 Raid Passes from spinning Gym Photo Discs (vs 6 free)", "50% more XP from Raid Battles", "2\u00D7 Stardust from Raid Battles", "Increased chance of Rare Candy XL from Raid Battles", "Ultra Ticket Box $4.99 (ticket + Premium Battle Pass)", "Tickets giftable to Great Friends or higher"], tips: ["Costume Dragonite and Absol are the rarest \u2014 prioritize those raids.", "These costumed forms can't evolve \u2014 collector items only.", "Ultra Ticket Box is Web Store exclusive.", "Plan a raid route with your group ahead of time."], counters: { label: "Costume Dragonite (Dragon/Flying)", pokemon: [{ name: "Mega Gardevoir", fast: "Charm", charged: "Dazzling Gleam" }, { name: "Shadow Mamoswine", fast: "Powder Snow", charged: "Avalanche" }, { name: "Mega Rayquaza", fast: "Dragon Tail", charged: "Dragon Ascent", chargedNote: "Signature" }, { name: "Shadow Salamence", fast: "Dragon Tail", charged: "Outrage" }, { name: "Galarian Darmanitan", fast: "Ice Fang", charged: "Avalanche" }, { name: "Shadow Weavile", fast: "Ice Shard", charged: "Avalanche" }] } } },
  // Historical Community Days
  ...[
    ["Sprigatito","2025-01-05","Frenzy Plant → Meowscarada","\uD83C\uDF31","#27AE60","3× Stardust, 2× Candy"],
    ["CD Classic: Ralts","2025-01-25","Synchronoise → Gardevoir/Gallade","\uD83D\uDC83","#9B59B6","¼ Hatch Distance"],
    ["Karrablast & Shelmet","2025-02-09","Razor Shell → Escavalier","\uD83D\uDC1B","#E67E22","3× XP, 2× Candy"],
    ["Fuecoco","2025-03-08","Blast Burn → Skeledirge","\uD83D\uDD25","#E74C3C","3× Stardust, 2× Candy"],
    ["CD Classic: Totodile","2025-03-22","Hydro Cannon → Feraligatr","\uD83D\uDC0A","#3498DB","¼ Hatch Distance"],
    ["Vanillite","2025-04-27","Avalanche → Vanilluxe","\uD83C\uDF66","#85C1E9","3× XP, 2× Candy"],
    ["Pawmi","2025-05-11","Brick Break → Pawmot","\u26A1","#F39C12","¼ Hatch Distance, 2× Candy"],
    ["CD Classic: Machop","2025-05-24","Payback → Machamp","\uD83D\uDCAA","#95A5A6","3× Stardust"],
    ["Jangmo-o","2025-06-21","Clanging Scales → Kommo-o","\uD83D\uDC09","#E74C3C","3× XP, 2× Candy"],
    ["CD Classic: Eevee","2025-07-05","Last Resort → Eevee + Eeveelution moves","\uD83E\uDD8A","#A0522D","¼ Hatch Distance"],
    ["Quaxly","2025-07-20","Hydro Cannon → Quaquaval","\uD83E\uDD86","#2980B9","3× Stardust, 2× Candy"],
    ["Rookidee","2025-08-30","Air Cutter → Corviknight","\uD83D\uDC26","#5D6D7E","¼ Hatch Distance, 2× Candy"],
    ["Flabébé","2025-09-14","Chilling Water → Florges","\uD83C\uDF38","#FF69B4","¼ Hatch Distance, 2× Candy"],
    ["Solosis","2025-10-12","Charm → Reuniclus","\uD83E\uDDEC","#27AE60","3× Stardust, 2× Candy"],
    ["Pikipek","2025-11-30","Beak Blast → Toucannon","\uD83D\uDC26","#E67E22","3× XP, 2× Candy"],
    ["December Recap 2025","2025-12-06","All 2025 CD moves available","\uD83C\uDF84","#C0392B","2× XP, 2× Stardust, 2× Candy"],
    ["Rowlet","2024-01-06","Frenzy Plant → Decidueye","\uD83C\uDF43","#27AE60","3× Stardust, 2× Candy"],
    ["CD Classic: Porygon","2024-01-20","Tri Attack → Porygon-Z","\uD83D\uDCA0","#E91E63","¼ Hatch Distance"],
    ["Chansey","2024-02-10","Wild Charge → Blissey","\uD83E\uDD5A","#FF69B4","3× XP, 2× Candy"],
    ["Bellsprout","2024-03-16","Magical Leaf → Victreebel","\uD83C\uDF3F","#27AE60","3× Stardust, 2× Candy"],
    ["CD Classic: Bagon","2024-04-07","Outrage → Salamence","\uD83D\uDC09","#3498DB","¼ Hatch Distance"],
    ["Litten","2024-04-20","Blast Burn → Incineroar","\uD83D\uDC31","#E74C3C","3× XP, 2× Candy"],
    ["Bounsweet","2024-05-19","High Jump Kick → Tsareena","\uD83C\uDF4A","#27AE60","3× Stardust, 2× Candy"],
    ["Goomy","2024-06-09","Thunder Punch → Goodra","\uD83D\uDC0C","#8E44AD","3× Stardust, 2× Candy"],
    ["CD Classic: Cyndaquil","2024-06-22","Blast Burn → Typhlosion","\uD83D\uDD25","#E74C3C","2× Stardust, 2× XP"],
    ["Tynamo","2024-07-21","Volt Switch → Eelektross","\u26A1","#3498DB","¼ Hatch Distance, 2× Candy"],
    ["Popplio","2024-08-31","Hydro Cannon → Primarina","\uD83C\uDFA4","#2980B9","3× XP, 2× Candy"],
    ["CD Classic: Beldum","2024-08-18","Meteor Mash → Metagross","\u2699\uFE0F","#95A5A6","¼ Hatch Distance"],
    ["Ponyta & G-Ponyta","2024-09-14","Wild Charge → Rapidash","\uD83D\uDC34","#E67E22","3× Stardust, 2× Candy"],
    ["Sewaddle","2024-10-05","Shadow Claw → Leavanny","\uD83C\uDF42","#27AE60","¼ Hatch Distance, 2× Candy"],
    ["Mankey","2024-11-10","Rage Fist → Annihilape","\uD83D\uDC12","#C0392B","3× XP, 2× Candy"],
    ["December Recap 2024","2024-12-21","All 2024 CD moves available","\uD83C\uDF84","#C0392B","2× Candy, 2× Stardust, 2× XP"],
    ["Larvitar","2023-01-21","Smack Down → Tyranitar","\uD83E\uDEA8","#27AE60","CD Classic"],
    ["Chespin","2023-01-07","Frenzy Plant → Chesnaught","\uD83C\uDF30","#27AE60","3× Stardust"],
    ["Noibat","2023-02-05","Boomburst → Noivern","\uD83E\uDD87","#8E44AD","3× XP"],
    ["Fennekin","2023-03-04","Blast Burn → Delphox","\uD83E\uDD8A","#E74C3C","3× Stardust"],
    ["Swinub","2023-04-29","Ancient Power → Mamoswine","\uD83D\uDC37","#6D4C41","CD Classic"],
    ["Froakie","2023-05-21","Hydro Cannon → Greninja","\uD83D\uDC38","#2980B9","3× Stardust"],
    ["Axew","2023-06-10","Breaking Swipe → Haxorus","\uD83D\uDC09","#27AE60","3× XP"],
    ["Squirtle","2023-07-09","Hydro Cannon → Blastoise","\uD83D\uDC22","#3498DB","CD Classic"],
    ["Poliwag","2023-08-13","Ice Beam → Poliwrath","\uD83C\uDF00","#3498DB","3× Stardust"],
    ["Charmander","2023-09-02","Dragon Breath → Charizard","\uD83D\uDD25","#E74C3C","CD Classic"],
    ["Grubbin","2023-09-23","Volt Switch → Vikavolt","\u26A1","#F39C12","3× XP"],
    ["Timburr","2023-10-15","Brutal Swing → Conkeldurr","\uD83D\uDCAA","#6D4C41","3× Stardust"],
    ["Mareep","2023-11-25","Dragon Pulse → Ampharos","\uD83D\uDC11","#F1C40F","CD Classic"],
    ["Wooper & Paldean Wooper","2023-11-05","Aqua Tail → Quagsire","\uD83D\uDC1F","#3498DB","3× XP"],
    ["December Recap 2023","2023-12-16","All 2023 CD moves available","\uD83C\uDF84","#C0392B","2× Candy, 2× Stardust, 2× XP"],
    ["Bulbasaur","2022-01-22","Frenzy Plant → Venusaur","\uD83C\uDF31","#27AE60","CD Classic"],
    ["Hoppip","2022-01-16","Acrobatics → Jumpluff","\uD83C\uDF88","#FF69B4","3× Stardust"],
    ["Hoppip (Makeup)","2022-02-05","Acrobatics → Jumpluff","\uD83C\uDF88","#FF69B4","Makeup Day"],
    ["Sandshrew & A-Sandshrew","2022-03-13","Shadow Claw → Sandslash","\uD83E\uDD94","#F39C12","2× Stardust, 3× XP"],
    ["Mudkip","2022-04-10","Hydro Cannon → Swampert","\uD83D\uDCA7","#3498DB","CD Classic"],
    ["Stufful","2022-04-23","Drain Punch → Bewear","\uD83E\uDDF8","#FF69B4","3× XP"],
    ["Alolan Geodude","2022-05-21","Rollout → A-Golem","\uD83E\uDEA8","#6D4C41","3× Stardust"],
    ["Deino","2022-06-25","Brutal Swing → Hydreigon","\uD83D\uDC09","#2C3E50","3× XP"],
    ["Starly","2022-07-17","Gust → Staraptor","\uD83D\uDC26","#95A5A6","3× Stardust"],
    ["Galarian Zigzagoon","2022-08-13","Obstruct → Obstagoon","\uD83E\uDDA1","#2C3E50","3× XP"],
    ["Roggenrola","2022-09-18","Meteor Beam → Gigalith","\uD83E\uDEA8","#6D4C41","3× Stardust"],
    ["Litwick","2022-10-15","Poltergeist → Chandelure","\uD83D\uDD6F\uFE0F","#8E44AD","3× XP"],
    ["Dratini","2022-11-05","Draco Meteor → Dragonite","\uD83D\uDC09","#3498DB","CD Classic"],
    ["Teddiursa","2022-11-12","High Horsepower → Ursaluna","\uD83E\uDDF8","#6D4C41","3× Stardust"],
    ["December Recap 2022","2022-12-17","All 2022 CD moves available","\uD83C\uDF84","#C0392B","2× Candy, 2× Stardust"],
    ["Machop","2021-01-16","Payback → Machamp","\uD83D\uDCAA","#95A5A6","3× Stardust"],
    ["Roselia","2021-02-07","Bullet Seed/Weather Ball → Roserade","\uD83C\uDF39","#27AE60","3× Stardust"],
    ["Fletchling","2021-03-06","Incinerate → Talonflame","\uD83D\uDC26","#E74C3C","3× XP"],
    ["Snivy","2021-04-11","Frenzy Plant → Serperior","\uD83D\uDC0D","#27AE60","3× XP"],
    ["Swablu","2021-05-15","Moonblast → Altaria","\u2601\uFE0F","#3498DB","3× XP"],
    ["Gible","2021-06-06","Earth Power → Garchomp","\uD83E\uDD88","#2C3E50","3× XP"],
    ["Tepig","2021-07-03","Blast Burn → Emboar","\uD83D\uDC37","#E74C3C","3× Stardust"],
    ["Eevee","2021-08-14","Last Resort + Eeveelution moves","\uD83E\uDD8A","#A0522D","2-day event"],
    ["Oshawott","2021-09-19","Hydro Cannon → Samurott","\uD83E\uDDA6","#2980B9","3× Stardust"],
    ["Duskull","2021-10-09","Shadow Ball → Dusknoir","\uD83D\uDC80","#8E44AD","3× XP"],
    ["Shinx","2021-11-21","Psychic Fangs → Luxray","\u26A1","#F1C40F","3× Stardust"],
    ["December Recap 2021","2021-12-18","All 2020–2021 CD moves","\uD83C\uDF84","#C0392B","2× Candy, 2× Stardust"],
    ["Piplup","2020-01-19","Hydro Cannon → Empoleon","\uD83D\uDC27","#3498DB","3× Stardust"],
    ["Rhyhorn","2020-02-22","Rock Wrecker → Rhyperior","\uD83E\uDD8F","#6D4C41","3× Stardust"],
    ["Abra","2020-04-25","Counter → Alakazam","\uD83E\uDDE0","#F1C40F","3× Stardust"],
    ["Seedot","2020-05-24","Bullet Seed → Shiftry","\uD83C\uDF30","#27AE60","3× Stardust"],
    ["Weedle","2020-06-20","Drill Run → Beedrill","\uD83D\uDC1D","#F39C12","3× XP"],
    ["Gastly","2020-07-19","Shadow Punch → Gengar","\uD83D\uDC7B","#8E44AD","3× Stardust"],
    ["Magikarp","2020-08-08","Aqua Tail → Gyarados","\uD83D\uDC1F","#E74C3C","3× Stardust"],
    ["Porygon","2020-09-20","Tri Attack → Porygon-Z","\uD83D\uDCA0","#E91E63","3× XP"],
    ["Charmander","2020-10-17","Dragon Breath → Charizard","\uD83D\uDD25","#E74C3C","3× Stardust"],
    ["Electabuzz","2020-11-15","Flamethrower → Electivire","\u26A1","#F1C40F","3× Stardust"],
    ["Magmar","2020-11-21","Thunderbolt → Magmortar","\uD83D\uDD25","#E74C3C","3× Stardust"],
    ["December Recap 2020","2020-12-12","All 2019–2020 CD moves","\uD83C\uDF84","#C0392B","2× Candy"],
    ["Totodile","2019-01-12","Hydro Cannon → Feraligatr","\uD83D\uDC0A","#3498DB","3× XP"],
    ["Swinub","2019-02-16","Ancient Power → Mamoswine","\uD83D\uDC37","#6D4C41","3× Stardust"],
    ["Treecko","2019-03-23","Frenzy Plant → Sceptile","\uD83C\uDF3F","#27AE60","3× XP"],
    ["Bagon","2019-04-13","Outrage → Salamence","\uD83D\uDC09","#3498DB","3× XP"],
    ["Torchic","2019-05-19","Blast Burn → Blaziken","\uD83D\uDC14","#E74C3C","3× Stardust"],
    ["Slakoth","2019-06-08","Body Slam → Slaking","\uD83E\uDDA5","#6D4C41","3× XP"],
    ["Mudkip","2019-07-21","Hydro Cannon → Swampert","\uD83D\uDCA7","#3498DB","3× Stardust"],
    ["Ralts","2019-08-03","Synchronoise → Gardevoir/Gallade","\uD83D\uDC83","#9B59B6","3× XP"],
    ["Turtwig","2019-09-15","Frenzy Plant → Torterra","\uD83D\uDC22","#27AE60","3× Stardust"],
    ["Trapinch","2019-10-12","Earth Power → Flygon","\uD83C\uDFDC\uFE0F","#E67E22","3× Stardust"],
    ["Chimchar","2019-11-16","Blast Burn → Infernape","\uD83D\uDC35","#E74C3C","3× Stardust"],
    ["December Recap 2019","2019-12-14","All 2018–2019 CD moves","\uD83C\uDF84","#C0392B","2× Candy"],
    ["Pikachu","2018-01-20","Surf → Pikachu","\u26A1","#F1C40F","The original Community Day"],
    ["Dratini","2018-02-24","Draco Meteor → Dragonite","\uD83D\uDC09","#3498DB","3× Stardust"],
    ["Bulbasaur","2018-03-25","Frenzy Plant → Venusaur","\uD83C\uDF31","#27AE60","3× XP"],
    ["Mareep","2018-04-15","Dragon Pulse → Ampharos","\uD83D\uDC11","#F1C40F","3× XP"],
    ["Charmander","2018-05-19","Blast Burn → Charizard","\uD83D\uDD25","#E74C3C","3× Stardust"],
    ["Larvitar","2018-06-16","Smack Down → Tyranitar","\uD83E\uDEA8","#27AE60","3× XP"],
    ["Squirtle","2018-07-08","Hydro Cannon → Blastoise","\uD83D\uDC22","#3498DB","3× Stardust"],
    ["Eevee","2018-08-11","Last Resort → Eevee","\uD83E\uDD8A","#A0522D","2-day event"],
    ["Chikorita","2018-09-22","Frenzy Plant → Meganium","\uD83C\uDF3F","#27AE60","3× XP"],
    ["Beldum","2018-10-21","Meteor Mash → Metagross","\u2699\uFE0F","#95A5A6","3× Stardust"],
    ["Cyndaquil","2018-11-10","Blast Burn → Typhlosion","\uD83D\uDD25","#E74C3C","2× Stardust"],
    ["December Recap 2018","2018-12-01","All 2018 CD moves available","\uD83C\uDF84","#C0392B","2× Candy, 2× Stardust, 2× XP"],
  ].map(([title,date,move,icon,color,bonus],i) => ({
    id: 1000+i, title, type: "Community Day", date, endDate: null,
    time: "2:00 PM – 5:00 PM", color, icon, featured: false,
    summary: `${move}. ${bonus}.`,
    details: { bosses: [move], bonuses: [bonus], tips: [] }
  })),
  { id: 50, title: "CD Classic: Piplup", type: "Community Day", date: "2026-01-04", endDate: null, time: "2:00 PM – 5:00 PM", color: "#3498DB", icon: "\uD83D\uDC27", featured: false, summary: "Piplup Community Day Classic! Evolve to Empoleon for the exclusive Charged Attack Hydro Cannon.", details: { bosses: ["Empoleon with Hydro Cannon (exclusive Charged Move)"], bonuses: ["¼ Hatch Distance", "3-hour Incense", "1-hour Lure Modules", "Boosted Shiny Piplup rate", "Special Research available for $1.99"], tips: ["Hydro Cannon Empoleon is a solid Water attacker and PvP pick.", "Piplup attracted to Lure Modules have boosted Shiny rates.", "Community Day Classic events revisit fan-favorite Pokémon."] } },
  { id: 51, title: "Community Day: Grookey", type: "Community Day", date: "2026-01-18", endDate: null, time: "2:00 PM – 5:00 PM", color: "#27AE60", icon: "\uD83C\uDF31", featured: false, summary: "Grookey takes the spotlight! Evolve to Rillaboom for the exclusive Charged Attack Frenzy Plant.", details: { bosses: ["Rillaboom with Frenzy Plant (exclusive Charged Move)"], bonuses: ["Boosted Shiny Grookey rate", "3-hour Incense", "1-hour Lure Modules (2–9 PM)", "Extra Special Trade (2–9 PM)", "Special Background encounters available"], tips: ["Frenzy Plant is the premier Grass Charged Move — Rillaboom benefits hugely.", "First Community Day of 2026 with the new yearly Special Background feature.", "Check in at Community Ambassador events for bonus Timed Research."] } },
  { id: 52, title: "Community Day: Vulpix & Alolan Vulpix", type: "Community Day", date: "2026-02-15", endDate: null, time: "2:00 PM – 5:00 PM", color: "#E67E22", icon: "\uD83E\uDD8A", featured: false, summary: "Vulpix and Alolan Vulpix share the spotlight! Exclusive moves Energy Ball and Chilling Water.", details: { bosses: ["Ninetales with Energy Ball (exclusive)", "Alolan Ninetales with Chilling Water (exclusive)"], bonuses: ["Both forms spawning in the wild", "Boosted Shiny rates for both Vulpix forms", "3-hour Incense", "Standard Community Day bonuses"], tips: ["Alolan Ninetales with Chilling Water is excellent in PvP Great League.", "Dual-feature Community Days let you hunt two shinies at once.", "Prioritize Alolan Vulpix if you care about PvP meta relevance."] } },
  { id: 53, title: "Community Day: Scorbunny", type: "Community Day", url: "https://pokemongo.com/news/communityday-march-2026-scorbunny", date: "2026-03-14", endDate: null, time: "2:00 PM – 5:00 PM", color: "#E74C3C", icon: "\uD83D\uDC30", featured: false, summary: "Scorbunny stars in March! Evolve Raboot to Cinderace for the exclusive Charged Attack Blast Burn.", details: { bosses: ["Cinderace with Blast Burn (exclusive Charged Move)"], bonuses: ["¼ Egg Hatch Distance", "3-hour Incense", "1-hour Lure Modules (2–9 PM)", "Extra Special Trade (2–9 PM)", "50% less Trade Stardust cost (2–9 PM)"], tips: ["Blast Burn is the best Fire Charged Move — makes Cinderace a solid Fire attacker.", "Evolve within 5 hours after the event ends to get the exclusive move.", "Overlaps with Pokémon Pokopia Celebration Event — double-dip on bonuses."] } },
  { id: 4, title: "Community Day: Tinkatink", type: "Community Day", url: "https://pokemongo.com/news/communityday-april-2026-tinkatink", date: "2026-04-11", endDate: null, time: "2:00 PM – 5:00 PM", color: "#E84393", icon: "\uD83D\uDD28", iconImg: "assets/pokemon-images/National-Dex/regular/Gen-9_Paldea/0957-female.webp", featured: true, summary: "Tinkatink takes the spotlight! Evolve to Tinkaton for the exclusive Charged Attack Gigaton Hammer.", details: { bosses: ["Tinkaton"], bonuses: ["3× Catch Stardust", "2× Catch Candy", "2× chance for Candy XL", "3-hour Incense", "1-hour Lure Modules (2–9 PM)", "1 extra Special Trade (2–9 PM)", "50% less Trade Stardust cost (2–9 PM)"], tips: ["Evolve Tinkatuff during the event or up to 4 hours after (by 9 PM) for Gigaton Hammer.", "Stack Star Pieces with the 3× Stardust bonus — one of the best dust events.", "Tinkatink with Special Backgrounds from Field Research and Lure Modules.", "Take snapshots for Tinkatink photobomb encounters."] } },
  { id: 54, title: "Community Day: May 2026", type: "Community Day", date: "2026-05-09", endDate: null, time: "2:00 PM – 5:00 PM", color: "#636E72", icon: "\u2753", featured: false, summary: "May Community Day — date confirmed, featured Pokémon to be announced.", details: { bosses: ["Featured Pokémon: TBA"], bonuses: ["Standard Community Day bonuses expected", "Exclusive move for final evolution", "Boosted Shiny rate"], tips: ["Date is locked in — mark your calendar.", "Featured Pokémon usually announced 2–4 weeks before.", "Start stockpiling Poké Balls and Star Pieces."] } },
  { id: 55, title: "CD Classic: May 2026", type: "Community Day", date: "2026-05-16", endDate: null, time: "2:00 PM – 5:00 PM", color: "#636E72", icon: "\uD83D\uDD04", featured: false, summary: "May Community Day Classic — date confirmed, featured Pokémon to be announced.", details: { bosses: ["Featured Pokémon: TBA (past Community Day rerun)"], bonuses: ["Standard CD Classic bonuses expected", "Exclusive move available again"], tips: ["CD Classics bring back Pokémon and moves from past Community Days.", "Great chance to get an exclusive move you missed."] } },
  { id: 5, title: "Sustainability Week 2026", type: "Event", url: "https://pokemongo.com/news/sustainability-week-2026", date: "2026-04-14", endDate: "2026-04-20", time: "10:00 AM – 8:00 PM", color: "#27AE60", icon: "\uD83C\uDF3F", featured: true, summary: "Silicobra debuts! G. Corsola w/ pink sunglasses and Shiny Toedscool make first appearances.", details: { bosses: ["Silicobra (debut)", "G. Corsola w/ pink sunglasses", "Shiny Toedscool", "Seedot", "Castform", "Wiglett"], bonuses: ["Rotating Route spawns every 2 days", "Boosted Shiny Lapras, Togetic, Castform, Trubbish", "Toedscool in forested/grassy biomes", "Silicobra in desert-like biomes", "GO Pass milestone bonuses"], tips: ["Shiny Toedscool is brand new — check every one.", "Galarian Corsola in sunglasses is a top collector target.", "Route spawns rotate every 2 days — plan your priorities.", "Silicobra evolves into Sandaconda for 50 Candy."] } },
  { id: 6, title: "Replay: Riolu Hatch Day", type: "Event", url: "https://pokemongo.com/en/news/replay-riolu-hatch-day-2026", date: "2026-04-18", endDate: null, time: "11:00 AM – 5:00 PM", color: "#3498DB", icon: "\uD83E\uDD5A", iconImg: "assets/pokemon-images/eggs/egg-2.png", featured: false, summary: "Riolu Hatch Day returns! Boosted Shiny Riolu odds from eggs.", details: { bosses: ["Riolu"], bonuses: ["Riolu eggs with boosted Shiny odds", "Timed Research", "Overlaps with Sustainability Week"], paidResearch: { price: "$1.99", rewards: ["1/4 Egg Hatch Distance during event", "1 Star Piece", "2 Super Incubators"], note: "Tasks must be completed and rewards claimed before 5:00 PM local time on April 18." }, tips: ["Clear egg slots before the event.", "Use Super Incubators during the 6-hour window.", "Shiny Riolu/Lucario is one of the most coveted shinies."] } },
  // { id: 7, title: "Max Battle Day: GO Bigger Replay", type: "Max Battle", date: "2026-04-25", endDate: null, time: "2:00 PM – 5:00 PM", color: "#8E44AD", icon: "\uD83D\uDCA5", featured: true, summary: "Gigantamax Kanto Starters return! Venusaur, Charizard, and Blastoise at Power Spots.", details: { bosses: ["Gigantamax Venusaur", "Gigantamax Charizard", "Gigantamax Blastoise", "Possible new Gigantamax forms"], bonuses: ["Boosted Power Spot spawns", "Shiny Gigantamax forms available", "Boosted Max Particles"], tips: ["Shiny Gigantamax Charizard is the coolest Charizard design.", "Coordinate 4-player groups.", "Farm Max Particles during the event."] } },
  { id: 8, title: "Steeled Resolve", type: "Event", url: "https://pokemongo.com/news/steeled-resolve-2026", urlDisabled: true, date: "2026-04-28", endDate: "2026-05-04", time: "10:00 AM – 8:00 PM", color: "#95A5A6", icon: "\uD83D\uDEE1\uFE0F", featured: false, summary: "Steel-type event closing out April. 'Steeled Resolve: Taken Over' sub-event begins April 30.", details: { bosses: ["Steel-type featured spawns (details TBA)"], bonuses: ["Steel-type wild spawns", "Event Field Research", "Steeled Resolve: Taken Over begins April 30"], tips: ["Stock Steel-type candy.", "'Steeled Resolve: Taken Over' likely involves Team GO Rocket.", "Shadow Latios continues in Shadow Raids."] } },
  { id: 20, title: "5\u2605 Raid: Regidrago", type: "Raid", date: "2026-04-01", endDate: "2026-04-07", time: "Raid Hour: Wed Apr 1, 6–7 PM", color: "#E74C3C", icon: "\uD83D\uDC09", featured: false, summary: "Regidrago in 5-Star Raids. Mega Manectric in Mega Raids. Shadow Latios weekends.", details: { bosses: ["Regidrago (5\u2605)", "Mega Manectric (Mega)", "Shadow Latios (weekends through May 5)"], bonuses: ["Raid Hour: Wednesday 6–7 PM"], tips: ["Weak to Fairy, Ice, Dragon.", "Shadow Latios on weekends — bring Purified Gems."], counters: { label: "Regidrago (Dragon)", pokemon: [{ name: "Mega Rayquaza", fast: "Dragon Tail", charged: "Dragon Ascent", chargedNote: "Signature" }, { name: "Shadow Salamence", fast: "Dragon Tail", charged: "Outrage" }, { name: "Shadow Dragonite", fast: "Dragon Tail", charged: "Outrage" }, { name: "Mega Gardevoir", fast: "Charm", charged: "Dazzling Gleam" }, { name: "Shadow Garchomp", fast: "Dragon Tail", charged: "Outrage" }, { name: "Mega Latios", fast: "Dragon Breath", charged: "Dragon Claw" }] } } },
  { id: 21, title: "5\u2605 Raid: Kyogre", type: "Raid", date: "2026-04-08", endDate: "2026-04-14", time: "Raid Hour: Wed Apr 8, 6–7 PM", color: "#2980B9", icon: "\uD83C\uDF0A", featured: false, summary: "Kyogre returns. Top-tier Water attacker. Mega Aerodactyl in Mega Raids.", details: { bosses: ["Kyogre (5\u2605)", "Mega Aerodactyl (Mega)", "Shadow Latios (weekends)"], bonuses: ["Raid Hour: Wednesday 6–7 PM"], tips: ["Top-tier Water attacker — raid heavily.", "Weak to Grass and Electric.", "Shiny Kyogre is a gorgeous pink whale."], counters: { label: "Kyogre (Water)", pokemon: [{ name: "Mega Sceptile", fast: "Bullet Seed", charged: "Frenzy Plant", chargedNote: "CD Exclusive" }, { name: "Kartana", fast: "Razor Leaf", charged: "Leaf Blade" }, { name: "Shadow Raikou", fast: "Thunder Shock", charged: "Wild Charge" }, { name: "Zekrom", fast: "Charge Beam", charged: "Fusion Bolt" }, { name: "Shadow Electivire", fast: "Thunder Shock", charged: "Wild Charge" }, { name: "Shadow Tangrowth", fast: "Vine Whip", charged: "Power Whip" }] }, catchCP: [{ name: "Kyogre", normal: "2260–2351", boosted: "2825–2939", weather: "Rainy" }] } },
  { id: 22, title: "5\u2605 Raid: Groudon", type: "Raid", date: "2026-04-15", endDate: "2026-04-21", time: "Raid Hour: Wed Apr 15, 6–7 PM", color: "#C0392B", icon: "\uD83C\uDF0B", featured: false, summary: "Groudon returns. Best Ground-type attacker. Mega Alakazam in Mega Raids.", details: { bosses: ["Groudon (5\u2605)", "Mega Alakazam (Mega)", "Shadow Latios (weekends)"], bonuses: ["Raid Hour: Wednesday 6–7 PM"], tips: ["Best Ground attacker — prioritize high-IV catches.", "Weak to Water, Grass, Ice.", "Shiny Groudon (golden) is one of the best shinies."], counters: { label: "Groudon (Ground)", pokemon: [{ name: "Mega Swampert", fast: "Water Gun", charged: "Hydro Cannon", chargedNote: "CD Exclusive" }, { name: "Kartana", fast: "Razor Leaf", charged: "Leaf Blade" }, { name: "Shadow Swampert", fast: "Water Gun", charged: "Hydro Cannon", chargedNote: "CD Exclusive" }, { name: "Mega Sceptile", fast: "Bullet Seed", charged: "Frenzy Plant", chargedNote: "CD Exclusive" }, { name: "Shadow Mamoswine", fast: "Powder Snow", charged: "Avalanche" }, { name: "Kyogre", fast: "Waterfall", charged: "Surf" }] }, catchCP: [{ name: "Groudon", normal: "2260–2351", boosted: "2825–2939", weather: "Sunny" }] } },
  { id: 23, title: "5\u2605 Raid: Tapu Koko", type: "Raid", date: "2026-04-22", endDate: "2026-04-28", time: "Raid Hour: Wed Apr 22, 6–7 PM", color: "#F39C12", icon: "\u26A1", featured: false, summary: "Tapu Koko in 5-Star Raids. Electric/Fairy. Mega Sharpedo in Mega Raids.", details: { bosses: ["Tapu Koko (5\u2605)", "Mega Sharpedo (Mega)", "Shadow Latios (weekends)"], bonuses: ["Raid Hour: Wednesday 6–7 PM"], tips: ["Solid PvP pick — Electric/Fairy.", "Weak to Poison and Ground.", "Shiny has black/orange scheme."], counters: { label: "Tapu Koko (Electric/Fairy)", pokemon: [{ name: "Primal Groudon", fast: "Mud Shot", charged: "Precipice Blades", chargedNote: "Signature" }, { name: "Shadow Garchomp", fast: "Mud Shot", charged: "Earth Power", chargedNote: "CD Exclusive" }, { name: "Shadow Excadrill", fast: "Mud-Slap", charged: "Drill Run" }, { name: "Mega Gengar", fast: "Lick", charged: "Sludge Bomb" }, { name: "Shadow Rhyperior", fast: "Mud-Slap", charged: "Earthquake" }, { name: "Landorus (Therian)", fast: "Mud Shot", charged: "Earth Power" }] }, catchCP: [{ name: "Tapu Koko", normal: "1730–1810", boosted: "2162–2263", weather: "Rainy or Cloudy" }] } },
  { id: 24, title: "5\u2605 Raid: Tapu Lele", type: "Raid", date: "2026-04-29", endDate: "2026-05-05", time: "Raid Hour: Wed Apr 29, 6–7 PM", color: "#FF6B81", icon: "\uD83E\uDD8B", featured: false, summary: "Tapu Lele closes April. Mega Banette. Final week for Shadow Latios.", details: { bosses: ["Tapu Lele (5\u2605)", "Mega Banette (Mega)", "Shadow Latios (final week)"], bonuses: ["Raid Hour: Wednesday 6–7 PM", "Last week for Shadow Latios"], tips: ["Final week for Shadow Latios — get raids in before May 5.", "Tapu Lele weak to Ghost, Poison, Steel."], counters: { label: "Tapu Lele (Psychic/Fairy)", pokemon: [{ name: "Mega Gengar", fast: "Lick", charged: "Shadow Ball" }, { name: "Shadow Metagross", fast: "Bullet Punch", charged: "Meteor Mash", chargedNote: "CD Exclusive" }, { name: "Origin Giratina", fast: "Shadow Claw", charged: "Shadow Force", chargedNote: "Signature" }, { name: "Shadow Chandelure", fast: "Hex", charged: "Shadow Ball" }, { name: "Mega Banette", fast: "Shadow Claw", charged: "Shadow Ball" }, { name: "Shadow Excadrill", fast: "Metal Claw", charged: "Iron Head" }] }, catchCP: [{ name: "Tapu Lele", normal: "1718–1799", boosted: "2148–2249", weather: "Windy or Cloudy" }] } },
  { id: 62, title: "Season: Memories in Motion", type: "Event", url: "https://pokemongo.com/news/welcome-to-memories-in-motion", date: "2026-03-03", endDate: "2026-06-02", time: "10:00 AM", color: "#9B59B6", icon: "\uD83C\uDF1F", featured: false, summary: "The current season celebrating Pok\u00E9mon's 30th anniversary and GO's 10th year. Featuring daily discovery bonuses, Volcanion Special Research, and new event formats.", details: { bosses: ["Gyarados (Research Breakthrough)", "Honedge (Research Breakthrough)", "Dhelmise (Research Breakthrough)", "Sinistea (Research Breakthrough)", "Duraludon (Research Breakthrough)", "Dreepy (Research Breakthrough)"], bonuses: ["Free Volcanion Special Research available all season", "Guaranteed Candy XL on in-person trades for level 31+", "Weekend events have moved to Saturdays this season", "In-game event calendar coming later in the season"], seasonBonuses: ["Double-Time Sundays \u2014 Incense & Lures last 2\u00D7", "Fast-Track Mondays \u2014 2\u00D7 GO Points, extra Power Spots", "Max Mondays \u2014 rotating Dynamax Pok\u00E9mon (6 AM\u20139 PM)", "Showcase Tuesdays \u2014 Pok\u00E9Stop Showcases (10 AM\u20138 PM)", "Raid Hour Wednesdays \u2014 6\u20137 PM", "GO Battle Thursdays \u2014 up to 10 sets, 4\u00D7 Stardust from wins", "Friendship Fridays \u2014 2 Special Trades, Lucky boost, \u221210% Stardust"], tips: ["Free Volcanion Special Research available all season \u2014 no expiration.", "Guaranteed Candy XL on in-person trades for level 31+.", "Weekend events have moved to Saturdays this season.", "In-game event calendar coming later in the season."] } },
  { id: 60, title: "Pok\u00E9mon Pokopia Celebration", type: "Event", url: "https://pokemongo.com/news/pokemon-pokopia-celebration-event-2026", date: "2026-03-10", endDate: "2026-03-16", time: "10:00 AM \u2013 8:00 PM", color: "#E056A0", icon: "\uD83C\uDFAD", featured: false, summary: "Costumed Ditto debuts wearing a hat and cap! Boosted Shiny Sudowoodo and Zorua. Kanto starters, Lapras, Snorlax, and Dragonite in 3-Star Raids. Free Ditto Eye Mask avatar item.", details: { bosses: ["Ditto wearing a hat (debut)", "Ditto wearing a cap (debut)", "Sudowoodo (boosted Shiny)", "Zorua (boosted Shiny)", "Bulbasaur", "Charmander", "Squirtle", "Pikachu", "Lapras (3\u2605 Raid)", "Snorlax (3\u2605 Raid)", "Dragonite (3\u2605 Raid)"], bonuses: ["2\u00D7 XP for spinning Pok\u00E9Stops", "10\u00D7 XP for spinning a Pok\u00E9Stop for the first time", "Boosted Shiny rates for Sudowoodo and Zorua", "Collection Challenges with themed rewards", "Free Ditto Eye Mask avatar item in shop", "Event-themed stickers from Pok\u00E9Stops, Gyms, and Gifts"], tips: ["Catch everything \u2014 costumed Ditto transforms and hides among wild spawns.", "Shiny Zorua is extremely rare normally, take advantage of the boosted rates.", "Spin new Pok\u00E9Stops for 10\u00D7 XP \u2014 great time to explore new areas.", "Overlaps with Scorbunny Community Day on March 14."] } },
  { id: 61, title: "Bug Out 2026", type: "Event", url: "https://pokemongo.com/news/bug-out-2026", date: "2026-03-17", endDate: "2026-03-23", time: "10:00 AM \u2013 8:00 PM", color: "#2ECC71", icon: "\uD83D\uDC1B", featured: false, summary: "Blipbug, Dottler, and Orbeetle debut! Shiny Sizzlipede released. Rotating Lure spawns with Pinsir, Scizor, and Kleavor in 3-Star Raids.", details: { bosses: ["Blipbug (debut)", "Sizzlipede (Shiny debut)", "Caterpie", "Dwebble", "Nymble", "Scyther", "Blipbug (1\u2605 Raid)", "Pinsir (3\u2605 Raid)", "Scizor (3\u2605 Raid)", "Kleavor (3\u2605 Raid)", "Paras (Lures Mar 17\u201319)", "Cutiefly (Lures Mar 19\u201321)", "Combee (Lures Mar 21\u201323)"], bonuses: ["2\u00D7 XP for Nice Throws or better (GO Pass Tier 1)", "2\u00D7 Catch Candy (GO Pass Tier 2)", "3\u00D7 Catch Candy (GO Pass Deluxe Tier 2)", "Rotating Lure Module spawns every 2 days", "GO Pass Deluxe $4.99 or Deluxe + 6 Ranks $6.99", "Boosted Shiny rates for Lure Pok\u00E9mon"], tips: ["Blipbug evolves to Dottler (25 Candy) then Orbeetle (100 Candy) \u2014 stock up.", "Shiny Sizzlipede is brand new \u2014 check every one you see.", "Pinsir, Scizor, and Kleavor in 3-Star Raids can all be Shiny.", "Paras, Combee, and Cutiefly from Lures have boosted Shiny rates.", "GO Pass rewards expire March 25 at 8 PM."] } },
  { id: 29, title: "Max Battle Day: Gigantamax Pikachu", type: "Max Battle", date: "2026-03-28", endDate: null, time: "2:00 PM – 5:00 PM", color: "#F1C40F", icon: "\u26A1", featured: false, summary: "Gigantamax Pikachu debuted in 6-Star Max Battles! Pikachu caught from Max Battles cannot evolve. Shiny Gigantamax Pikachu was available.", details: { bosses: ["Gigantamax Pikachu (6\u2605 Max Battle debut)"], bonuses: ["2× Max Particles from exploring (12 AM – 5 PM)", "Increased Max Particle storage limit", "3 Special Trades for the day", "Power Spots refreshed more frequently", "Gigantamax Pikachu on all Power Spots", "Remote Raid limit increased to 20 (Mar 27 5 PM – Mar 28 8 PM PDT)"], tips: ["Gigantamax Pikachu cannot evolve — it's a standalone collector Pokémon.", "As a pure Electric-type, Ground-type counters were the way to go.", "Paid Timed Research ($4.99) rewarded 1 Max Mushroom, 25,000 XP, 6,400 Max Particles, and 2× XP from Max Battles.", "Coordinating with a full group of 4 was essential for 6-Star difficulty."] } },
  { id: 63, title: "Max Monday: D-Max Woobat", type: "Max Battle", date: "2026-03-30", endDate: null, time: "6:00 AM – 9:00 PM", color: "#A890F0", icon: "\uD83D\uDCA5", iconImg: "assets/pokemon-images/National-Dex/regular/Gen-5_Unova/0527.webp", featured: false, summary: "Dynamax Woobat featured at Power Spots this week.", details: { bosses: ["Dynamax Woobat"], bonuses: ["Max Monday: 6 AM – 9 PM Mar 30", "Power Spots all week", "Extra Power Spots on Monday"], tips: ["Woobat evolves into Swoobat with high friendship.", "Max Mondays have more Power Spots."] } },
  { id: 30, title: "Dynamax Trapinch (Debut)", type: "Max Battle", date: "2026-04-06", endDate: "2026-04-12", time: "Max Monday: 6–7 PM", color: "#E67E22", icon: "\uD83C\uDFDC\uFE0F", featured: false, summary: "Dynamax Trapinch debuts at Power Spots.", details: { bosses: ["Dynamax Trapinch (debut)"], bonuses: ["Max Monday: 6–7 PM Apr 6", "Power Spots all week", "Extra Power Spots on Monday"], tips: ["Trapinch evolves into Flygon.", "Max Mondays have more Power Spots."] } },
  { id: 31, title: "Dynamax Drilbur", type: "Max Battle", date: "2026-04-13", endDate: "2026-04-19", time: "Max Monday: 6–7 PM", color: "#6D4C41", icon: "\u26CF\uFE0F", featured: false, summary: "Dynamax Drilbur at Power Spots. Excadrill is top-tier.", details: { bosses: ["Dynamax Drilbur"], bonuses: ["Max Monday: 6–7 PM Apr 13", "Power Spots all week"], tips: ["Excadrill is top Ground AND Steel attacker.", "Overlaps with Sustainability Week."] } },
  { id: 32, title: "Dynamax Regirock (Debut)", type: "Max Battle", date: "2026-04-20", endDate: "2026-04-26", time: "Max Monday: 6–7 PM", color: "#D4A574", icon: "\uD83E\uDEA8", featured: true, summary: "Dynamax Regirock debuts at Power Spots! Another Legendary Regi joins the Dynamax roster.", details: { bosses: ["Dynamax Regirock (debut)"], bonuses: ["Max Monday: 6–7 PM Apr 20", "Power Spots all week"], tips: ["Headline event — expect higher difficulty.", "Coordinate with your local group.", "Coordinate with your local group for max rewards."] } },
  { id: 33, title: "Dynamax Shuckle", type: "Max Battle", date: "2026-04-27", endDate: "2026-05-03", time: "Max Monday: 6–7 PM", color: "#FF7043", icon: "\uD83D\uDC1B", featured: false, summary: "Dynamax Shuckle rounds out April. Absurdly tanky.", details: { bosses: ["Dynamax Shuckle"], bonuses: ["Max Monday: 6–7 PM Apr 27"], tips: ["Highest Defense in the game.", "Collector piece more than meta pick."] } },
  { id: 40, title: "GO Fest 2026: Tokyo", type: "GO Fest", date: "2026-05-29", endDate: "2026-06-01", time: "9 AM – 6 PM (Citywide from May 25)", color: "#FF6348", icon: "\uD83D\uDDFC", featured: true, summary: "GO Fest kicks off in Tokyo! Zeraora debut, Mewtwo raids, costumed Pikachu.", details: { bosses: ["Zeraora (debut)", "Mewtwo (5\u2605 citywide)", "Aqua Paldean Tauros", "Costumed Pikachu", "All Unown forms"], bonuses: ["Park sessions at Odaiba", "Citywide from May 25", "City Exploration Tickets", "4 City Districts", "GO Expert medal"], tips: ["Zeraora available once per trainer.", "Park tickets $33.", "Mewtwo raids citywide."] } },
  { id: 41, title: "GO Fest 2026: Chicago", type: "GO Fest", date: "2026-06-05", endDate: "2026-06-07", time: "Park Sessions + Citywide (from Jun 4)", color: "#0984E3", icon: "\uD83C\uDFD9\uFE0F", featured: false, summary: "GO Fest returns to Grant Park! Spark hosts. Zeraora, Mewtwo.", details: { bosses: ["Zeraora", "Mewtwo (5\u2605)", "Blaze Paldean Tauros", "Costumed Pikachu", "All Unown forms"], bonuses: ["Citywide from June 4", "Spark coaching", "4 City Districts"], tips: ["Grant Park confirmed 2026 AND 2027.", "Tickets $33 — first-come-first-served."] } },
  { id: 42, title: "GO Fest 2026: Copenhagen", type: "GO Fest", date: "2026-06-12", endDate: "2026-06-14", time: "9 AM – 6 PM CEST (Citywide from Jun 11)", color: "#00B894", icon: "\uD83C\uDFF0", featured: false, summary: "European GO Fest at Fælledparken! Candela hosts. Shiny Paldean Tauros exclusive.", details: { bosses: ["Zeraora", "Mewtwo (5\u2605)", "Shiny Combat Breed Paldean Tauros", ], bonuses: ["Fælledparken park", "Citywide from June 11", "Candela coaching"], tips: ["Shiny Paldean Tauros exclusive to ticket-holding raiders.", "Last in-person Zeraora before Global."] } },
  { id: 43, title: "GO Fest 2026: Global", type: "GO Fest", date: "2026-07-11", endDate: "2026-07-12", time: "10:00 AM – 6:00 PM Local", color: "#6C5CE7", icon: "\uD83C\uDF0D", featured: true, summary: "Global finale! All trainers worldwide. Zeraora encounters, 10th anniversary.", details: { bosses: ["Zeraora (Special Research)", "Raid bosses TBA", "10th Anniversary Pokémon"], bonuses: ["Global participation", "Special Research", "10th anniversary celebrations"], tips: ["Your chance if you couldn't attend in person.", "Zeraora available globally for the first time."] } }
];

const ANNOUNCEMENTS = [
  { id: 1, date: "2026-03-28", title: "April Raid Schedule Confirmed", tag: "Update", body: "5-Star Raids: Regidrago → Kyogre → Groudon → Tapu Koko → Tapu Lele. Shadow Latios weekends through May 5.", fullBody: "The full April 2026 raid rotation has been confirmed:", sections: [{ heading: "5-Star Raid Bosses", items: ["Apr 1–7: Regidrago", "Apr 8–14: Kyogre", "Apr 15–21: Groudon", "Apr 22–28: Tapu Koko", "Apr 29–May 5: Tapu Lele"] }, { heading: "Mega Raid Bosses", items: ["Apr 1–7: Mega Manectric", "Apr 8–14: Mega Aerodactyl", "Apr 15–21: Mega Alakazam", "Apr 22–28: Mega Sharpedo", "Apr 29–May 5: Mega Banette"] }, { heading: "Shadow Raids", items: ["Shadow Latios every weekend Apr 1 – May 5", "Bring Purified Gems"] }, { heading: "Raid Hours (Wed 6–7 PM)", items: ["Each Wednesday features that week's 5-Star boss"] }] },
  { id: 2, date: "2026-03-27", title: "GO Pass: April — Lucky Trinket Returns", tag: "News", body: "April's GO Pass Deluxe includes the Lucky Trinket — instantly become Lucky Friends with any Great Friend or higher.", fullBody: "The April 2026 GO Pass is packed with rewards:", sections: [{ heading: "GO Pass (Free)", items: ["Available April 7 at 10 AM", "Rank up for Entei encounters", "Active until May 5", "May 2–3: No daily GO Points limit!"] }, { heading: "GO Pass Deluxe (Paid)", items: ["Lucky Trinket — instantly Lucky Friends with any Great Friend+", "Expires May 12", "Available on the Web Store"] }] },
  { id: 3, date: "2026-03-25", title: "Tinkatink Community Day — April 11", tag: "Alert", body: "3× Catch Stardust, 2× Candy, and exclusive Gigaton Hammer for Tinkaton.", fullBody: "Full breakdown:", sections: [{ heading: "Event Details", items: ["Saturday, April 11, 2:00–5:00 PM local", "Boosted Shiny Tinkatink", "Evolve for Gigaton Hammer (until 9 PM)"] }, { heading: "Bonuses (2–5 PM)", items: ["3× Catch Stardust", "2× Catch Candy", "2× Candy XL chance", "3-hour Incense"] }, { heading: "Extended (2–9 PM)", items: ["1-hour Lure Modules", "1 extra Special Trade", "50% less Trade Stardust"] }] },
  // { id: 4, date: "2026-03-23", title: "GO Bigger Replay Datamined for April 25", tag: "News", body: "Dataminers found Gigantamax Kanto Starters returning. New Gigantamax debuts possible.", fullBody: "The Pokémod Group datamined GO Bigger Replay:", sections: [{ heading: "What We Know", items: ["Scheduled for April 25", "Gigantamax Venusaur, Charizard, Blastoise expected", "Max Battle Day format: 2–5 PM"] }, { heading: "Unconfirmed", items: ["New Gigantamax debuts — 17 forms unreleased", "Shiny Gigantamax forms expected"] }] },
  { id: 5, date: "2026-03-21", title: "Spotlight Hours → Daily Discoveries", tag: "Update", url: "https://pokemongo.com/news/welcome-to-memories-in-motion", body: "Weekly Spotlight Hours ended. Daily Discoveries is the new recurring system.", fullBody: "The Memories in Motion season replaced Spotlight Hours:", sections: [{ heading: "What Changed", items: ["Weekly Tuesday Spotlight Hours removed", "Now only during specific events", "Daily Discoveries replaces them"] }, { heading: "Daily Discoveries", items: ["Double-Time Sundays — Incense/Lures last 2×", "Fast-Track Mondays — extra Power Spots", "Showcase Tuesdays — PokéStop Showcases", "GBL Thursdays — 10 sets, up to 4× Stardust", "Friendship Fridays — extra trades, Lucky boost"] }] },
  { id: 6, date: "2026-03-15", title: "GO Fest 2026 Tickets On Sale", tag: "Alert", body: "Tickets for Tokyo, Chicago, Copenhagen live. $33/day. Global finale July 11–12.", fullBody: "GO Fest 2026 celebrates 10 years of Pokémon GO:", sections: [{ heading: "Tokyo — May 29–Jun 1", items: ["Odaiba Seaside Park", "Citywide from May 25", "City Exploration Tickets"] }, { heading: "Chicago — Jun 5–7", items: ["Grant Park", "Hosted by Spark", "Tickets $33"] }, { heading: "Copenhagen — Jun 12–14", items: ["Fælledparken", "Hosted by Candela", "Shiny Paldean Tauros exclusive"] }, { heading: "Global — Jul 11–12", items: ["All trainers worldwide", "Zeraora via Special Research", "One per trainer across all events"] }] }
];

const CURRENT_RAID_BOSSES = {
  "1-Star Raids": [
    "Larvitar (1\u2605 Raid)","Lileep (1\u2605 Raid)","Galarian Stunfisk (1\u2605 Raid)","Rockruff (1\u2605 Raid)"
  ],
  "3-Star Raids": [
    "Machamp (3\u2605 Raid)","Hippowdon (3\u2605 Raid)","Bombirdier (3\u2605 Raid)"
  ],
  "5-Star Raids": [
    "Regieleki (5\u2605 Raid)"
  ],
  "Mega Raids": [
    "Mega Houndoom (Mega)"
  ],
  "Shadow 1-Star Raids": [
    "Shadow Dratini (1\u2605 Shadow Raid)","Shadow Gligar (1\u2605 Shadow Raid)","Shadow Cacnea (1\u2605 Shadow Raid)","Shadow Joltik (1\u2605 Shadow Raid)"
  ],
  "Shadow 3-Star Raids": [
    "Shadow Alolan Marowak (3\u2605 Shadow Raid)","Shadow Lapras (3\u2605 Shadow Raid)","Shadow Stantler (3\u2605 Shadow Raid)"
  ],
  "Shadow 5-Star Raids": [
    "Shadow Latias (5\u2605 Shadow Raid)"
  ]
};

const CURRENT_MAX_BATTLES = {
  "1-Star Max Battles": [
    { name: "D-Max Abra", dex: 63 },
    { name: "D-Max Bounsweet", dex: 761 },
    { name: "D-Max Bulbasaur", dex: 1 },
    { name: "D-Max Caterpie", dex: 10 },
    { name: "D-Max Charmander", dex: 4 },
    { name: "D-Max Drilbur", dex: 529 },
    { name: "D-Max Gastly", dex: 92 },
    { name: "D-Max Grookey", dex: 810 },
    { name: "D-Max Growlithe", dex: 58 },
    { name: "D-Max Hatenna", dex: 856 },
    { name: "D-Max Inkay", dex: 686 },
    { name: "D-Max Kabuto", dex: 140 },
    { name: "D-Max Krabby", dex: 98 },
    { name: "D-Max Omanyte", dex: 138 },
    { name: "D-Max Pidove", dex: 519 },
    { name: "D-Max Ralts", dex: 280 },
    { name: "D-Max Roggenrola", dex: 524 },
    { name: "D-Max Rookidee", dex: 821 },
    { name: "D-Max Scorbunny", dex: 813 },
    { name: "D-Max Skwovet", dex: 819 },
    { name: "D-Max Sobble", dex: 816 },
    { name: "D-Max Spheal", dex: 363 },
    { name: "D-Max Squirtle", dex: 7 },
    { name: "D-Max Trubbish", dex: 568 },
    { name: "D-Max Woobat", dex: 527 },
    { name: "D-Max Wooloo", dex: 831 }
  ],
  "2-Star Max Battles": [
    { name: "D-Max Darumaka", dex: 554 },
    { name: "D-Max Eevee", dex: 133 },
    { name: "D-Max Machop", dex: 66 },
    { name: "D-Max Shuckle", dex: 213 },
    { name: "D-Max Wailmer", dex: 320 }
  ],
  "3-Star Max Battles": [
    { name: "D-Max Beldum", dex: 374 },
    { name: "D-Max Chansey", dex: 113 },
    { name: "D-Max Cryogonal", dex: 615 },
    { name: "D-Max Drampa", dex: 780 },
    { name: "D-Max Falinks", dex: 870 },
    { name: "D-Max Hitmonchan", dex: 107 },
    { name: "D-Max Hitmonlee", dex: 106 },
    { name: "D-Max Passimian", dex: 766 },
    { name: "D-Max Sableye", dex: 302 }
  ],
  "5-Star Max Battles": [
    { name: "D-Max Regice", dex: 378 }
  ],
  // "6-Star Max Battles": [
  //   { name: "Gigantamax Venusaur", dex: 3, gmax: true },
  //   { name: "Gigantamax Charizard", dex: 6, gmax: true },
  //   { name: "Gigantamax Blastoise", dex: 9, gmax: true },
  //   { name: "Gigantamax Pikachu", dex: 25, gmax: true },
  //   { name: "Gigantamax Meowth", dex: 52, gmax: true },
  //   { name: "Gigantamax Machamp", dex: 68, gmax: true },
  //   { name: "Gigantamax Gengar", dex: 94, gmax: true },
  //   { name: "Gigantamax Kingler", dex: 99, gmax: true },
  //   { name: "Gigantamax Lapras", dex: 131, gmax: true },
  //   { name: "Gigantamax Snorlax", dex: 143, gmax: true }
  // ]
  // "6-Star Max Battles": [
  //   { name: "Gigantamax Venusaur", dex: 3, gmax: true },
  //   { name: "Gigantamax Charizard", dex: 6, gmax: true },
  //   { name: "Gigantamax Blastoise", dex: 9, gmax: true },
  //   { name: "Gigantamax Pikachu", dex: 25, gmax: true },
  //   { name: "Gigantamax Meowth", dex: 52, gmax: true },
  //   { name: "Gigantamax Machamp", dex: 68, gmax: true },
  //   { name: "Gigantamax Gengar", dex: 94, gmax: true },
  //   { name: "Gigantamax Kingler", dex: 99, gmax: true },
  //   { name: "Gigantamax Lapras", dex: 131, gmax: true },
  //   { name: "Gigantamax Snorlax", dex: 143, gmax: true }
  // ]
};
const MAX_TIER_COLORS = { "1-Star Max Battles": "#78C850", "2-Star Max Battles": "#F39C12", "3-Star Max Battles": "#F1C40F", "5-Star Max Battles": "#8E44AD", "6-Star Max Battles": "#E74C3C" };

const EVENT_TYPES = ["All", "Event", "Raid", "Max Battle", "Community Day", "GO Fest"];

// --- STATE ---
let state = {
  selectedEvent: null,
  selectedNews: null,
  filter: "All",
  newsFilter: "All",
  tab: "home",
  openYears: {},
  openNewsYears: {},
  heroRendered: false,
  calMonth: new Date().getMonth(),
  calYear: new Date().getFullYear(),
  calSelectedDay: null,
  pokedexDetail: null,
  pokedexDetailData: null,
  pokedexDetailEvolutions: null
};

// --- NEST MIGRATION ---
const NEST_EPOCH = new Date("2024-01-04T00:00:00Z").getTime(); // known migration Thursday
const NEST_CYCLE = 14 * 24 * 60 * 60 * 1000; // 14 days in ms
function getNextNestMigration() {
  const now = Date.now();
  const elapsed = now - NEST_EPOCH;
  const remaining = NEST_CYCLE - (elapsed % NEST_CYCLE);
  return new Date(now + remaining);
}
function renderNestCountdown() {
  const next = getNextNestMigration();
  const diff = next.getTime() - Date.now();
  if (diff <= 0) return "";
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  const estStr = next.toLocaleString("en-US", { timeZone: "America/New_York", weekday: "short", month: "short", day: "numeric", hour: "numeric", minute: "2-digit", hour12: true });
  return `${d > 0 ? `${d}d ` : ""}${h}h ${m}m ${s}s<span style="margin-left:8px;font-weight:500;opacity:0.7">(${estStr} EST)</span>`;
}

// --- SUPABASE NESTS ---
const SUPABASE_URL = "https://elbwqcbvmnjafbfkbuew.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVsYndxY2J2bW5qYWZiZmtidWV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ5ODM2MDYsImV4cCI6MjA5MDU1OTYwNn0.G0PtC2msAkGY6bBJMHKVXDP9PSDDUMid01np9d8N2wQ";
function getReporterId() {
  let id = localStorage.getItem("trainerwire_reporter_id");
  if (!id) { id = crypto.randomUUID(); localStorage.setItem("trainerwire_reporter_id", id); }
  return id;
}
let _nestsCache = [];
async function loadNestsFromSupabase() {
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/nests?select=*&order=created_at.desc`, {
      headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` }
    });
    if (res.ok) _nestsCache = await res.json();
  } catch {}
  return _nestsCache;
}
function loadNests() { return _nestsCache; }

// --- SUPABASE REALTIME ---
function subscribeToNests() {
  const ws = new WebSocket(`${SUPABASE_URL.replace("https://","wss://")}/realtime/v1/websocket?apikey=${SUPABASE_KEY}&vsn=1.0.0`);
  let heartbeat;
  ws.onopen = () => {
    ws.send(JSON.stringify({ topic: "realtime:public:nests", event: "phx_join", payload: { config: { broadcast: { self: true }, postgres_changes: [{ event: "*", schema: "public", table: "nests" }] } }, ref: "1" }));
    heartbeat = setInterval(() => ws.send(JSON.stringify({ topic: "phoenix", event: "heartbeat", payload: {}, ref: "hb" })), 30000);
  };
  ws.onmessage = (e) => {
    const msg = JSON.parse(e.data);
    if (msg.event === "postgres_changes") {
      loadNestsFromSupabase().then(() => { if (state.tab === "nests") render(); });
    }
  };
  ws.onclose = () => { clearInterval(heartbeat); setTimeout(subscribeToNests, 3000); };
}
subscribeToNests();

// --- POKEMON AUTOCOMPLETE ---
const DEX_NAMES = Object.keys(DEX).sort();
function onPokemonInput(e) {
  const val = e.target.value.trim().toLowerCase();
  const dropdown = document.getElementById("nest-pokemon-dropdown");
  if (!dropdown || val.length < 1) { if (dropdown) dropdown.style.display = "none"; return; }
  const matches = DEX_NAMES.filter(n => n.toLowerCase().startsWith(val)).slice(0, 8);
  if (matches.length === 0 || (matches.length === 1 && matches[0].toLowerCase() === val)) {
    dropdown.style.display = "none"; return;
  }
  const th = t(darkMode);
  dropdown.innerHTML = matches.map(m => {
    const img = getPokemonImg(m);
    const imgHTML = img ? `<img src="${esc(img.url)}" style="width:32px;height:32px;object-fit:contain" onerror="this.style.display='none'" />` : `<span style="font-size:20px">\uD83D\uDCE6</span>`;
    return `<div onclick="selectPokemon('${m.replace(/'/g, "\\'")}')" style="display:flex;align-items:center;gap:10px;padding:8px 14px;cursor:pointer;font-size:14px;color:${th.text};transition:background 0.1s ease" onmouseenter="this.style.background='${th.surfaceHover}'" onmouseleave="this.style.background='transparent'">${imgHTML}<span>${esc(m)}</span></div>`;
  }).join("");
  dropdown.style.display = "block";
}
function selectPokemon(name) {
  document.getElementById("nest-pokemon").value = name;
  document.getElementById("nest-pokemon-dropdown").style.display = "none";
}

// --- NEST MIGRATION AUTO-CLEAR ---
function getCurrentMigrationId() {
  return Math.floor((Date.now() - NEST_EPOCH) / NEST_CYCLE);
}
let _lastMigrationId = getCurrentMigrationId();
async function checkNestMigration() {
  const currentId = getCurrentMigrationId();
  if (currentId > _lastMigrationId) {
    _lastMigrationId = currentId;
    await fetch(`${SUPABASE_URL}/rest/v1/nests?id=gt.0`, {
      method: "DELETE",
      headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` }
    });
    _nestsCache = [];
    if (state.tab === "nests") render();
  }
}
async function geocodeLocation(query) {
  try {
    const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(query)}`, {
      headers: { "User-Agent": "TrainerWire/1.0" }
    });
    const data = await res.json();
    if (data.length > 0) return { lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon) };
  } catch {}
  return null;
}
function useMyLocation() {
  if (!navigator.geolocation) return;
  const btn = document.getElementById("nest-gps-btn");
  if (btn) { btn.textContent = "Locating..."; btn.disabled = true; }
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      window._nestGPS = { lat: pos.coords.latitude, lng: pos.coords.longitude };
      if (btn) { btn.textContent = "\u2705 Location set"; btn.disabled = false; }
    },
    () => { if (btn) { btn.textContent = "\u274C Failed \u2014 try again"; btn.disabled = false; } },
    { enableHighAccuracy: true, timeout: 10000 }
  );
}
async function insertNest(pokemon, location) {
  const reporterId = getReporterId();
  let lat = null, lng = null;
  if (window._nestGPS) {
    lat = window._nestGPS.lat;
    lng = window._nestGPS.lng;
    window._nestGPS = null;
  } else {
    const geo = await geocodeLocation(location);
    if (geo) { lat = geo.lat; lng = geo.lng; }
  }
  await fetch(`${SUPABASE_URL}/rest/v1/nests`, {
    method: "POST",
    headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}`, "Content-Type": "application/json", Prefer: "return=minimal", "x-reporter-id": reporterId },
    body: JSON.stringify({ pokemon, location, reporter_id: reporterId, lat, lng })
  });
  await loadNestsFromSupabase();
}
async function deleteNest(id) {
  const reporterId = getReporterId();
  await fetch(`${SUPABASE_URL}/rest/v1/nests?id=eq.${id}`, {
    method: "DELETE",
    headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}`, "x-reporter-id": reporterId }
  });
  await loadNestsFromSupabase();
}

// --- UTILITY FUNCTIONS ---
function getCountdown(d, ev) {
  let target;
  if (ev) {
    const { h, min } = parseStartHour(ev);
    target = new Date(d + "T00:00:00");
    target.setHours(h === 0 && min === 0 ? 10 : h, h === 0 && min === 0 ? 0 : min, 0);
  } else {
    target = new Date(d + "T10:00:00");
  }
  const diff = target - new Date();
  if (diff <= 0) return null;
  return { days: Math.floor(diff / 864e5), hours: Math.floor((diff % 864e5) / 36e5), minutes: Math.floor((diff % 36e5) / 6e4), seconds: Math.floor((diff % 6e4) / 1000) };
}

function formatDate(d) {
  return new Date(d + "T12:00:00").toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
}

function formatDateRange(s, e) {
  if (!e) return formatDate(s);
  const a = new Date(s + "T12:00:00"), b = new Date(e + "T12:00:00");
  return a.getMonth() === b.getMonth()
    ? `${a.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })} – ${b.toLocaleDateString("en-US", { weekday: "short", day: "numeric" })}`
    : `${formatDate(s)} – ${formatDate(e)}`;
}

function daysUntil(d) { return Math.ceil((new Date(d + "T10:00:00") - new Date()) / 864e5); }

function parseStartHour(ev) {
  const m = ev.time && ev.time.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);
  if (m) {
    let h = parseInt(m[1]);
    const min = parseInt(m[2]);
    const ampm = m[3].toUpperCase();
    if (ampm === "PM" && h !== 12) h += 12;
    if (ampm === "AM" && h === 12) h = 0;
    return { h, min };
  }
  return { h: 0, min: 0 };
}
function parseEndHour(ev) {
  const m = ev.time && ev.time.match(/[–\u2013]\s*(\d{1,2}):(\d{2})\s*(AM|PM)/i);
  if (m) {
    let h = parseInt(m[1]);
    const min = parseInt(m[2]);
    const ampm = m[3].toUpperCase();
    if (ampm === "PM" && h !== 12) h += 12;
    if (ampm === "AM" && h === 12) h = 0;
    return { h, min };
  }
  return { h: 23, min: 59 };
}

function isActive(ev) {
  const n = new Date();
  const startTime = parseStartHour(ev);
  const s = new Date(ev.date + "T00:00:00");
  s.setHours(startTime.h, startTime.min, 0);
  const endDate = ev.endDate || ev.date;
  const endTime = parseEndHour(ev);
  const e = new Date(endDate + "T00:00:00");
  e.setHours(endTime.h, endTime.min, 59);
  return n >= s && n <= e;
}

function isOver(ev) {
  const endDate = ev.endDate || ev.date;
  const { h, min } = parseEndHour(ev);
  const e = new Date(endDate + "T00:00:00");
  e.setHours(h, min, 59);
  return new Date() > e;
}

function getMoveDeadline(ev) {
  if (ev.type !== "Community Day") return null;
  const dateStr = ev.endDate || ev.date;
  const isClassic = ev.title.toLowerCase().includes("classic");
  const isRecap = ev.title.toLowerCase().includes("recap") || ev.title.toLowerCase().includes("december");
  if (isRecap) return new Date(dateStr + "T21:00:00");
  return new Date(dateStr + (isClassic ? "T19:00:00" : "T21:00:00"));
}

function esc(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

// --- COUNTDOWN TIMER ---
function getEndCountdown(ev) {
  if (!ev) return null;
  const endDate = ev.endDate || ev.date;
  const { h, min } = parseEndHour(ev);
  const end = new Date(endDate + "T00:00:00");
  end.setHours(h, min, 59);
  const diff = end - new Date();
  if (diff <= 0) return null;
  return { days: Math.floor(diff / 864e5), hours: Math.floor((diff % 864e5) / 36e5), minutes: Math.floor((diff % 36e5) / 6e4), seconds: Math.floor((diff % 6e4) / 1000) };
}

function renderCountdown(dateStr, color, over, th, ev) {
  // If event is active, show countdown to end time
  if (ev && isActive(ev)) {
    const endCd = getEndCountdown(ev);
    if (endCd) {
      const units = endCd.days > 0
        ? [["D", endCd.days], ["H", endCd.hours], ["M", endCd.minutes], ["S", endCd.seconds]]
        : [["H", endCd.hours], ["M", endCd.minutes], ["S", endCd.seconds]];
      return `<div style="display:flex;gap:4px;align-items:center">${units.map(([l, v], i) =>
        `<div style="display:flex;align-items:center;gap:1px"><div style="background:${th.countdownBg("#2ECC71")};border:1.5px solid ${th.countdownBorder("#2ECC71")};border-radius:7px;padding:3px 6px;min-width:32px;text-align:center;font-weight:700;font-size:14px;font-variant-numeric:tabular-nums;color:#2ECC71;font-family:'JetBrains Mono',monospace;${l === "S" ? "animation:countdownTick 1s ease infinite;" : ""}">${String(v).padStart(2, "0")}</div><span style="font-size:9px;color:${th.textMuted};font-weight:600">${l}</span>${i < units.length - 1 ? `<span style="color:${th.border};font-weight:300;margin-left:1px;font-size:12px">:</span>` : ""}</div>`
      ).join("")}</div>`;
    }
    return `<span style="font-size:12px;color:#2ECC71;font-weight:700">LIVE NOW</span>`;
  }
  if (ev && isOver(ev)) return `<span style="font-size:12px;color:${th.textMuted};font-weight:600">Event Over</span>`;
  const cd = getCountdown(dateStr, ev);
  if (!cd && over) return `<span style="font-size:12px;color:${th.textMuted};font-weight:600">Event Over</span>`;
  if (!cd) return `<span style="font-size:12px;color:#2ECC71;font-weight:700">LIVE NOW</span>`;
  const units = [["D", cd.days], ["H", cd.hours], ["M", cd.minutes], ["S", cd.seconds]];
  return `<div style="display:flex;gap:4px;align-items:center">${units.map(([l, v], i) =>
    `<div style="display:flex;align-items:center;gap:1px"><div style="background:${th.countdownBg(color)};border:1.5px solid ${th.countdownBorder(color)};border-radius:7px;padding:3px 6px;min-width:32px;text-align:center;font-weight:700;font-size:14px;font-variant-numeric:tabular-nums;color:${color};font-family:'JetBrains Mono',monospace;${l === "S" ? "animation:countdownTick 1s ease infinite;" : ""}">${String(v).padStart(2, "0")}</div><span style="font-size:9px;color:${th.textMuted};font-weight:600">${l}</span>${i < 3 ? `<span style="color:${th.border};font-weight:300;margin-left:1px;font-size:12px">:</span>` : ""}</div>`
  ).join("")}</div>`;
}

// --- MOVE DEADLINE BANNER ---
function renderMoveDeadlineBanner(event, th) {
  const deadline = getMoveDeadline(event);
  if (!deadline) return "";
  const now = new Date();
  const eventStarted = now >= new Date(event.date + "T00:00:00");
  const diff = deadline - now;
  const deadlinePassed = diff <= 0;
  const eventEndedButWindowOpen = isOver(event) && !deadlinePassed;
  if (!eventStarted) return "";
  if (deadlinePassed) {
    return `<div style="padding:12px 16px;border-radius:12px;background:${th.accentBgSubtle("#E74C3C")};border:1.5px solid #E74C3C30;display:flex;align-items:center;gap:10px">
      <span style="font-size:18px">\uD83D\uDD12</span>
      <div><div style="font-size:13px;font-weight:700;color:#E74C3C">Move Window Closed</div>
      <div style="font-size:12px;color:${th.textMuted};margin-top:2px">Exclusive move requires an Elite TM or the December Community Day recap.</div></div></div>`;
  }
  const hours = Math.floor(diff / 36e5);
  const minutes = Math.floor((diff % 36e5) / 6e4);
  const seconds = Math.floor((diff % 6e4) / 1000);
  const urgentColor = eventEndedButWindowOpen ? "#E74C3C" : "#F39C12";
  return `<div style="padding:12px 16px;border-radius:12px;background:${th.accentBgSubtle(urgentColor)};border:1.5px solid ${urgentColor}30;display:flex;align-items:center;gap:10px">
    <span style="font-size:18px">${eventEndedButWindowOpen ? "\uD83D\uDEA8" : "\u23F0"}</span>
    <div style="flex:1"><div style="font-size:13px;font-weight:700;color:${urgentColor}">${eventEndedButWindowOpen ? "Evolve Now — Move Window Closing!" : "Exclusive Move Window"}</div>
    <div style="font-size:12px;color:${th.textSecondary};margin-top:2px">Evolve to get the exclusive move before the window closes.</div></div>
    <div style="display:flex;gap:3px;align-items:center;font-family:'JetBrains Mono',monospace;font-weight:700;font-size:15px;color:${urgentColor};font-variant-numeric:tabular-nums">${hours > 0 ? String(hours).padStart(2, "0") + "h " : ""}${String(minutes).padStart(2, "0")}m ${String(seconds).padStart(2, "0")}s</div></div>`;
}

// --- DETAIL SECTION ---
let catchCPIdCounter = 0;

function renderCatchCPItem(cp, th) {
  return `<div style="padding:12px 14px;border-radius:11px;background:${th.accentBgSubtle("#8E44AD")};border:1px solid ${th.countdownBorder("#8E44AD")}">
    <div style="font-weight:700;color:${th.text};font-size:13.5px;margin-bottom:8px">${esc(cp.name)}</div>
    <div style="display:flex;gap:8px;flex-wrap:wrap">
      <div style="flex:1;min-width:120px;padding:8px 12px;border-radius:8px;background:${th.accentBgSubtle("#3498DB")};border:1px solid ${th.countdownBorder("#3498DB")}">
        <div style="font-size:10px;font-weight:700;color:#3498DB;letter-spacing:0.5px;text-transform:uppercase;margin-bottom:3px">Normal</div>
        <div style="font-size:15px;font-weight:700;color:${th.text};font-family:'JetBrains Mono',monospace;font-variant-numeric:tabular-nums">${esc(cp.normal)}</div>
      </div>
      <div style="flex:1;min-width:120px;padding:8px 12px;border-radius:8px;background:${th.accentBgSubtle("#E67E22")};border:1px solid ${th.countdownBorder("#E67E22")}">
        <div style="font-size:10px;font-weight:700;color:#E67E22;letter-spacing:0.5px;text-transform:uppercase;margin-bottom:3px">Weather Boosted</div>
        <div style="font-size:15px;font-weight:700;color:${th.text};font-family:'JetBrains Mono',monospace;font-variant-numeric:tabular-nums">${esc(cp.boosted)}</div>
        <div style="font-size:10px;color:${th.textMuted};margin-top:2px">\u2601\uFE0F ${esc(cp.weather)}</div>
      </div>
    </div>
  </div>`;
}

function renderCatchCP(catchCP, th) {
  if (!catchCP || catchCP.length === 0) return "";
  const collapsible = catchCP.length > 1;
  if (!collapsible) {
    return `<div><h4 style="margin:0 0 10px 0;font-size:13px;font-weight:700;color:${th.text};display:flex;align-items:center;gap:8px"><span>\uD83C\uDFAF</span> Catch CP Ranges</h4>
      <div style="display:flex;flex-direction:column;gap:8px">${catchCP.map(cp => renderCatchCPItem(cp, th)).join("")}</div></div>`;
  }
  const id = "catchcp-" + (catchCPIdCounter++);
  const preview = catchCP.slice(0, 3).map(cp => cp.name).join(", ") + (catchCP.length > 3 ? ` +${catchCP.length - 3} more` : "");
  return `<div>
    <button onclick="toggleCatchCP('${id}')" style="display:flex;align-items:center;justify-content:space-between;width:100%;background:${th.accentBgSubtle("#8E44AD")};border:1.5px solid ${th.countdownBorder("#8E44AD")};border-radius:14px;cursor:pointer;padding:14px 16px;font-family:inherit;transition:all 0.2s ease"
      onmouseenter="this.style.borderColor='#8E44AD60'"
      onmouseleave="this.style.borderColor='${th.countdownBorder("#8E44AD")}'">
      <div style="display:flex;align-items:center;gap:10px">
        <div style="width:36px;height:36px;border-radius:10px;background:${th.accentBg("#8E44AD")};display:flex;align-items:center;justify-content:center;font-size:17px;flex-shrink:0">\uD83C\uDFAF</div>
        <div style="text-align:left">
          <div style="font-size:13px;font-weight:700;color:${th.text};display:flex;align-items:center;gap:6px">Catch CP Ranges <span style="font-size:10px;font-weight:700;color:#8E44AD;background:${th.accentBg("#8E44AD")};padding:2px 8px;border-radius:20px">${catchCP.length} bosses</span></div>
          <div id="${id}-preview" style="font-size:12px;color:${th.textMuted};margin-top:3px;transition:opacity 0.2s ease">${esc(preview)}</div>
        </div>
      </div>
      <div id="${id}-arrow" style="font-size:18px;color:${th.textMuted};transition:transform 0.3s cubic-bezier(0.25,0.46,0.45,0.94)">\u25BE</div>
    </button>
    <div id="${id}" style="display:flex;flex-direction:column;gap:8px;max-height:0;overflow:hidden;opacity:0;transition:max-height 0.4s cubic-bezier(0.25,0.46,0.45,0.94),opacity 0.3s ease,margin 0.3s ease;margin-top:0">${catchCP.map(cp => renderCatchCPItem(cp, th)).join("")}</div>
  </div>`;
}

function renderCounters(counters, th) {
  if (!counters) return "";
  return `<div><h4 style="margin:0 0 4px 0;font-size:13px;font-weight:700;color:${th.text};display:flex;align-items:center;gap:8px"><span>\u2694\uFE0F</span> Top Counters</h4>
    <div style="font-size:11px;color:${th.textMuted};margin-bottom:10px">vs ${esc(counters.label)}</div>
    <div style="display:flex;${breakpoint !== "mobile" ? "flex-wrap:wrap;gap:8px" : "flex-direction:column;gap:6px"}">${counters.pokemon.map((c, i) => {
      const cPkmn = getPokemonImg(c.name);
      const rd = getRaidBossData(c.name);
      const typesEl = rd ? `<div style="display:flex;gap:4px;margin-top:3px;flex-wrap:wrap;${breakpoint !== "mobile" ? "justify-content:center" : ""}">${rd.types.map(t => `<span style="font-size:10px;font-weight:700;color:#fff;background:${TYPE_COLORS[t] || "#888"};padding:2px 8px;border-radius:10px">${t}</span>`).join("")}</div>` : "";
      if (breakpoint !== "mobile") {
        return `<div style="display:flex;flex-direction:column;align-items:center;padding:12px 8px;border-radius:12px;background:${th.accentBgSubtle("#3498DB")};border:1.5px solid ${th.border};font-size:13px;color:${th.textSecondary};line-height:1.4;text-align:center;flex:1;min-width:140px;max-width:200px;position:relative">
          <div style="position:absolute;top:8px;left:8px;width:20px;height:20px;border-radius:50%;background:${th.countdownBg("#3498DB")};border:1.5px solid ${th.countdownBorder("#3498DB")};display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:#3498DB">${i + 1}</div>
          ${pokemonImgHTML(cPkmn, 120) || ""}
          <div style="margin-top:6px;font-weight:700;color:${th.text};font-size:13px">${esc(c.name)}</div>
          ${typesEl}
          <div style="margin-top:4px;font-size:11px;display:flex;flex-wrap:wrap;gap:3px;align-items:center;justify-content:center">
            <span style="color:${th.textSecondary}">${esc(c.fast)}</span>
            <span style="color:${th.textFaint}">/</span>
            <span style="color:${th.textSecondary}">${esc(c.charged)}</span>
          </div>
          ${c.chargedNote ? `<span style="font-size:10px;font-weight:700;color:#E67E22;background:${th.accentBg("#E67E22")};padding:1px 6px;border-radius:10px;margin-top:3px">${esc(c.chargedNote)}</span>` : ""}
        </div>`;
      }
      return `<div style="display:flex;align-items:center;gap:10px;padding:10px 14px;border-radius:10px;background:${th.accentBgSubtle("#3498DB")};font-size:13px;color:${th.textSecondary};line-height:1.4">
        <div style="width:22px;height:22px;border-radius:50%;background:${th.countdownBg("#3498DB")};border:1.5px solid ${th.countdownBorder("#3498DB")};display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:#3498DB;flex-shrink:0">${i + 1}</div>
        ${pokemonImgHTML(cPkmn, 150) || ""}
        <div style="flex:1;min-width:0">
          <div style="font-weight:700;color:${th.text};font-size:13.5px">${esc(c.name)}</div>
          ${typesEl}
          <div style="margin-top:2px;font-size:12px;display:flex;flex-wrap:wrap;gap:4px;align-items:center">
            <span style="color:${th.textSecondary}">${esc(c.fast)}</span>
            <span style="color:${th.textFaint}">/</span>
            <span style="color:${th.textSecondary}">${esc(c.charged)}</span>
            ${c.chargedNote ? `<span style="font-size:10px;font-weight:700;color:#E67E22;background:${th.accentBg("#E67E22")};padding:1px 6px;border-radius:10px">${esc(c.chargedNote)}</span>` : ""}
          </div>
        </div>
      </div>`;
    }).join("")}</div></div>`;
}

function getRaidTier(name) {
  if (/\(1\u2605/.test(name)) return "1-Star Raids";
  if (/\(3\u2605/.test(name)) return "3-Star Raids";
  if (/\(5\u2605/.test(name)) return "5-Star Raids";
  if (/\(6\u2605/.test(name)) return "6-Star Max Battles";
  if (/\(Mega\)/.test(name)) return "Mega Raids";
  if (/Shadow/.test(name) && /weekend|final week/i.test(name)) return "Shadow Raids";
  if (/Lures/.test(name)) return "Lure Encounters";
  if (/Research Breakthrough/.test(name)) return "Research Breakthrough";
  return null;
}
const TIER_COLORS = { "1-Star Raids": "#FFB6C1", "3-Star Raids": "#F1C40F", "5-Star Raids": "#8E44AD", "6-Star Max Battles": "#E74C3C", "Mega Raids": "#E67E22", "Shadow Raids": "#7B2FBE", "Lure Encounters": "#3498DB", "Shadow 1-Star Raids": "#7B2FBE", "Shadow 3-Star Raids": "#7B2FBE", "Shadow 5-Star Raids": "#7B2FBE", "Research Breakthrough": "#E67E22" };
const TIER_HEADS = { "1-Star Raids": 1, "3-Star Raids": 3, "5-Star Raids": 5, "6-Star Max Battles": 6, "Mega Raids": 4, "Shadow Raids": 5, "Shadow 1-Star Raids": 1, "Shadow 3-Star Raids": 3, "Shadow 5-Star Raids": 5 };
function raidHeadIcon(size, color) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 250 250" fill="${color}" xmlns="http://www.w3.org/2000/svg"><path d="M196.15 92.13c6.34-4.09 8.67-10 10.87-15.95 3-8 5.36-7.4 11.38-2.15 3.6 3.17 5.6 6.62 1.15 12.87 5.86-.57 9.64-.88 13.42-1.33s5.28 1 5.68 4.91c.78 7.6-2.75 11.91-11.25 14.29 7.39 2.65 8.43 6.89 7.43 12.91-.91 5.5-4.15 6.86-8.86 7 3.88 9 1.57 12.78-7.48 13.2-9.37.43-12.26 3.26-10.07 12.32 2.63 10.84-.63 19.28-7.24 27.59-10.85 13.64-22.52 26.37-36.41 36.94-26.77 20.27-53.18 20.37-79.86.21-14.74-11.14-27-24.66-38.31-39.24-5.73-7.41-8-15.1-5.8-24.21.59-2.52 1.27-5.43.58-7.78-1.6-5.42-6.08-6-11.21-6q-12.18.09-6.83-13c-5-.26-8.33-2.11-9-7.82s0-9.83 8-12c-9.59-2.54-12.78-7.54-11.77-15.3.37-2.79 1.59-4.34 4.46-4.13 3.94.3 7.87.74 12.4 1.18 0-3.21-.82-6.33.22-8.61 1.16-2.54 3.81-4.58 6.17-6.35 3.89-2.81 5.18-2.24 7.56 2.32 2.57 5 5.12 10 7.93 14.9.77 1.33 2.41 2.16 3.69 3.25 6.68-5.28 9.32-11.5 6.58-19.47-2.8-8.16-5.66-16.29-8.48-24.44-1-2.81-2.48-5.59-2.73-8.47-.72-8 5.83-13.28 13.27-10.63C76 34.25 88.92 41.61 97.36 55a34 34 0 0 0 3.42 5 7.16 7.16 0 0 0 12-2.25c2.76-6.78 5.16-13.71 8.07-20.42a6.87 6.87 0 0 1 4.23-3.33c.82-.19 2.68 1.83 3.25 3.2 2.57 6.13 4.94 12.36 7.19 18.62 1.17 3.24 2.15 6 6.48 6.3 4 .31 6.23-1.13 8.09-4.32C157.64 44.83 169 36.42 182.7 31c4.68-1.85 9.62-5.8 14.67-.54s4 10.52 1.46 16.59c-3.36 7.92-5.77 16.24-8.71 24.34s-1.12 14.96 6.03 20.74ZM71 142c-2.06 5.58-4.44 11-6 16.65a11 11 0 0 0 1.15 7.51c8.57 15.27 19.26 28.78 34.28 38.25 16.63 10.49 33.37 10.1 49.7-.69 14.18-9.37 24.65-22.21 32.8-37 1.2-2.17 2.17-5.23 1.61-7.45-1.5-5.88-3.9-11.54-5.94-17.28l-2.54.14c-.68 2.58-1.82 5.14-1.92 7.75-.17 4.3.64 8.65.41 12.95-.12 2.4-1.33 6.61-2.39 6.72-2.51.26-5.55-1-7.8-2.46-2.94-2-5.32-4.75-7.74-7-25.39 13.75-35.73 13.77-64 .35-3.09 2.76-6.11 5.86-9.54 8.43-4.32 3.24-8 1.75-8.21-3.54a83.55 83.55 0 0 1 .84-14.9c.53-3.83-.49-6.43-4.71-8.43Zm27.17.67C103 126 94.86 103.92 82.32 96.5c-2.57-1.53-4.39-.59-6.17 1.09-6.26 5.87-9.69 13.24-11.27 21.58-.68 3.58 1.23 5.52 4.06 7.09 9.49 5.29 18.94 10.64 29.19 16.4Zm52.13.14c9.2-5 17.07-9.15 24.83-13.52 10.61-6 11.12-7.56 6.54-18.72a43.61 43.61 0 0 0-2.14-4.47c-7.2-12.92-11.35-13.32-20.43-1.64-8.5 10.86-12.63 22.89-8.84 38.34Zm-25 4.8c6.22-.41 13-2.14 16.64-9 3.53-6.62 1.66-12.76-2.78-18.42-3.26-4.17-6.16-8.62-9.46-12.75-4.48-5.62-5.74-5.58-10.4.31-3.28 4.15-6.08 8.68-9.44 12.76-4.71 5.74-5.86 12-2.35 18.41s9.72 8.49 17.76 8.68Z"/><path d="M109.32 128.36c9 10.28 21.31 10.41 30.1 1.19-.12 9.77-4.21 13.84-14.25 14.18-10.43.35-14.79-3.57-15.85-15.37Z"/><path d="M114.67 120.53c6.64 4.72 13.16 6 19.53-.25 3.52 4.38 1.57 7.35-1.09 9.87-3.45 3.26-11.82 3.59-15.8.65-3.37-2.49-5.31-5.62-2.64-10.27Z"/><path d="M124.38 107.52c6.53 7 7.53 9.48 5 11.88-2.23 2.15-6.69 2.24-9.2.18-2.84-2.37-2.18-4.51 4.2-12.06Z"/></svg>`;
}
function renderRaidHeads(tier) {
  const count = TIER_HEADS[tier];
  if (!count) return "";
  const color = darkMode ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.85)";
  return `<div style="display:flex;gap:2px;align-items:center;margin-left:auto">${Array(count).fill(raidHeadIcon(20, color)).join("")}</div>`;
}
const TIER_EGGS = { "1-Star Raids": "assets/pokemon-images/Raid-Eggs/1-star.png", "3-Star Raids": "assets/pokemon-images/Raid-Eggs/3-star.png", "5-Star Raids": "assets/pokemon-images/Raid-Eggs/5-star.png", "Mega Raids": "assets/pokemon-images/Raid-Eggs/mega.png", "Shadow Raids": "assets/pokemon-images/Raid-Eggs/5-star.png", "Shadow 1-Star Raids": "assets/pokemon-images/Raid-Eggs/1-star.png", "Shadow 3-Star Raids": "assets/pokemon-images/Raid-Eggs/3-star.png", "Shadow 5-Star Raids": "assets/pokemon-images/Raid-Eggs/5-star.png" };
const RAID_BOSS_DATA = {
  "Regidrago":{types:["Dragon"],cp:"1831–1916",cpBoost:"2289–2395",weather:"Windy"},
  "Kyogre":{types:["Water"],cp:"2260–2351",cpBoost:"2825–2939",weather:"Rainy"},
  "Groudon":{types:["Ground"],cp:"2260–2351",cpBoost:"2825–2939",weather:"Sunny"},
  "Tapu Koko":{types:["Electric","Fairy"],cp:"1730–1810",cpBoost:"2162–2263",weather:"Rainy or Cloudy"},
  "Tapu Lele":{types:["Psychic","Fairy"],cp:"1718–1799",cpBoost:"2148–2249",weather:"Windy or Cloudy"},
  "Mewtwo":{types:["Psychic"],cp:"2294–2387",cpBoost:"2868–2984",weather:"Windy"},
  "Latios":{types:["Dragon","Psychic"],cp:"2006–2090",cpBoost:"2507–2613",weather:"Windy"},
  "Lapras":{types:["Water","Ice"],cp:"1435–1509",cpBoost:"1794–1886",weather:"Rainy or Snow"},
  "Snorlax":{types:["Normal"],cp:"1760–1843",cpBoost:"2201–2304",weather:"Partly Cloudy"},
  "Dragonite":{types:["Dragon","Flying"],cp:"2079–2167",cpBoost:"2599–2709",weather:"Windy"},
  "Pinsir":{types:["Bug"],cp:"1613–1690",cpBoost:"2016–2113",weather:"Rainy"},
  "Scizor":{types:["Bug","Steel"],cp:"1636–1714",cpBoost:"2046–2143",weather:"Rainy or Snow"},
  "Kleavor":{types:["Bug","Rock"],cp:"1627–1705",cpBoost:"2034–2131",weather:"Rainy or Partly Cloudy"},
  "Blipbug":{types:["Bug"],cp:"161–190",cpBoost:"201–238",weather:"Rainy"},
  "Aerodactyl":{types:["Rock","Flying"],cp:"1490–1565",cpBoost:"1862–1956",weather:"Partly Cloudy or Windy"},
  "Alakazam":{types:["Psychic"],cp:"1666–1747",cpBoost:"2083–2184",weather:"Windy"},
  "Banette":{types:["Ghost"],cp:"1312–1385",cpBoost:"1641–1731",weather:"Foggy"},
  "Manectric":{types:["Electric"],cp:"1201–1267",cpBoost:"1502–1584",weather:"Rainy"},
  "Sharpedo":{types:["Water","Dark"],cp:"1174–1246",cpBoost:"1468–1558",weather:"Rainy or Foggy"},
  "Pikachu":{types:["Electric"]/*,cp:"530–574",cpBoost:"663–718",weather:"Rainy"*/},
  "Butterfree":{types:["Bug","Flying"],cp:"1016–1083",cpBoost:"1270–1354",weather:"Rainy"},
  "Diglett":{types:["Ground"],cp:"300–337",cpBoost:"375–421",weather:"Sunny"},
  "Wooper":{types:["Water","Ground"],cp:"291–326",cpBoost:"364–408",weather:"Rainy or Sunny"},
  "Absol":{types:["Dark"],cp:"1370–1443",cpBoost:"1712–1804",weather:"Foggy"},
  "Kirlia":{types:["Psychic","Fairy"],cp:"396–437",cpBoost:"495–547",weather:"Windy or Cloudy"},
  "Shinx":{types:["Electric"],cp:"303–340",cpBoost:"379–425",weather:"Rainy"},
  "Croagunk":{types:["Poison","Fighting"],cp:"479–525",cpBoost:"599–656",weather:"Cloudy"},
  "Blitzle":{types:["Electric"],cp:"484–531",cpBoost:"605–664",weather:"Rainy"},
  "Minccino":{types:["Normal"],cp:"371–412",cpBoost:"464–515",weather:"Partly Cloudy"},
  "Sneasel":{types:["Dark","Ice"],cp:"1067–1143",cpBoost:"1334–1429",weather:"Foggy or Snow"},
  "Garchomp":{types:["Dragon","Ground"]},
  "Salamence":{types:["Dragon","Flying"]},
  "Mamoswine":{types:["Ice","Ground"]},
  "Weavile":{types:["Dark","Ice"]},
  "Raikou":{types:["Electric"]},
  "Electivire":{types:["Electric"]},
  "Excadrill":{types:["Ground","Steel"]},
  "Metagross":{types:["Steel","Psychic"]},
  "Rhyperior":{types:["Ground","Rock"]},
  "Tangrowth":{types:["Grass"]},
  "Chandelure":{types:["Ghost","Fire"]},
  "Swampert":{types:["Water","Ground"]},
  "Gardevoir":{types:["Psychic","Fairy"]},
  "Gengar":{types:["Ghost","Poison"]},
  "Sceptile":{types:["Grass"]},
  "Rayquaza":{types:["Dragon","Flying"]},
  "Giratina":{types:["Ghost","Dragon"]},
  "Darmanitan":{types:["Ice"]},
  "Kartana":{types:["Grass","Steel"]},
  "Landorus":{types:["Ground","Flying"]},
  "Zekrom":{types:["Dragon","Electric"]},
  "Larvitar":{types:["Rock","Ground"],cp:"548–594",cpBoost:"686–743",weather:"Partly Cloudy or Sunny"},
  "Lileep":{types:["Rock","Grass"],cp:"686–738",cpBoost:"858–922",weather:"Partly Cloudy or Sunny"},
  "Stunfisk":{types:["Ground","Steel"],cp:"1169–1235",cpBoost:"1461–1544",weather:"Sunny or Snow"},
  "Rockruff":{types:["Rock"],cp:"499–543",cpBoost:"624–679",weather:"Partly Cloudy"},
  "Machamp":{types:["Fighting"],cp:"1667–1746",cpBoost:"2084–2183",weather:"Cloudy"},
  "Hippowdon":{types:["Ground"],cp:"1684–1763",cpBoost:"2105–2204",weather:"Sunny"},
  "Bombirdier":{types:["Flying","Dark"],cp:"1351–1421",cpBoost:"1688–1777",weather:"Windy or Foggy"},
  "Regieleki":{types:["Electric"],cp:"1524–1602",cpBoost:"1905–2002",weather:"Rainy"},
  "Houndoom":{types:["Dark","Fire"],cp:"1432–1505",cpBoost:"1790–1882",weather:"Foggy or Sunny"},
  "Dratini":{types:["Dragon"],cp:"495–574",cpBoost:"618–717",weather:"Windy"},
  "Gligar":{types:["Ground","Flying"],cp:"952–1061",cpBoost:"1191–1326",weather:"Sunny or Windy"},
  "Cacnea":{types:["Grass"],cp:"618–709",cpBoost:"773–887",weather:"Sunny"},
  "Joltik":{types:["Bug","Electric"],cp:"504–584",cpBoost:"631–730",weather:"Rainy"},
  "Marowak":{types:["Fire","Ghost"],cp:"941–1048",cpBoost:"1176–1311",weather:"Sunny or Foggy"},
  "Stantler":{types:["Normal"],cp:"1118–1236",cpBoost:"1398–1546",weather:"Partly Cloudy"},
  "Latias":{types:["Dragon","Psychic"],cp:"1855–2006",cpBoost:"2320–2507",weather:"Windy"},
  "Growlithe":{types:["Fire"],cp:"660–710"},
  "Gastly":{types:["Ghost","Poison"],cp:"649–702"},
  "Pidove":{types:["Normal","Flying"],cp:"443–484"},
  "Woobat":{types:["Psychic","Flying"],cp:"535–580",cpBoost:"669–725",weather:"Windy"},
  "Drilbur":{types:["Ground"],cp:"732–786"},
  "Inkay":{types:["Dark","Psychic"],cp:"486–529"},
  "Grookey":{types:["Grass"],cp:"574–620"},
  "Sobble":{types:["Water"],cp:"579–627"},
  "Skwovet":{types:["Normal"],cp:"495–539"},
  "Wooloo":{types:["Normal"],cp:"366–403"},
  "Scorbunny":{types:["Fire"],cp:"579–627"},
  "Trubbish":{types:["Poison"],cp:"526–571"},
  "Rookidee":{types:["Flying"],cp:"344–380"},
  "Spheal":{types:["Ice","Water"],cp:"505–550"},
  "Roggenrola":{types:["Rock"],cp:"639–688"},
  "Bounsweet":{types:["Grass"],cp:"237–268"},
  "Kabuto":{types:["Rock","Water"],cp:"730–783"},
  "Omanyte":{types:["Rock","Water"],cp:"826–882"},
  "Abra":{types:["Psychic"],cp:"712–767"},
  "Ralts":{types:["Psychic","Fairy"],cp:"275–308"},
  "Krabby":{types:["Water"],cp:"835–892"},
  "Hatenna":{types:["Psychic"],cp:"451–492"},
  "Darumaka":{types:["Fire"],cp:"768–823"},
  "Eevee":{types:["Normal"],cp:"565–612"},
  "Machop":{types:["Fighting"],cp:"678–730"},
  "Hitmonchan":{types:["Fighting"],cp:"1263–1332"},
  "Hitmonlee":{types:["Fighting"],cp:"1399–1472"},
  "Drampa":{types:["Normal","Dragon"],cp:"1588–1665"},
  "Sableye":{types:["Dark","Ghost"],cp:"789–843"},
  "Falinks":{types:["Fighting"],cp:"1278–1347"},
  "Passimian":{types:["Fighting"],cp:"1654–1733"},
  "Beldum":{types:["Steel","Psychic"],cp:"513–558"},
  "Cryogonal":{types:["Ice"],cp:"1524–1598"},
  "Chansey":{types:["Normal"],cp:"654–717"},
  "Regice":{types:["Ice"],cp:"1703–1784"},
  "Riolu":{types:["Fighting"]},
  "Tinkaton":{types:["Fairy","Steel"]},
  "Silicobra":{types:["Ground"]},
  "Corsola":{types:["Ghost"]},
  "Toedscool":{types:["Ground","Grass"]},
  "Seedot":{types:["Grass"]},
  "Castform":{types:["Normal"]},
  "Wiglett":{types:["Water"]},
  "Gyarados":{types:["Water","Flying"]},
  "Honedge":{types:["Steel","Ghost"]},
  "Dhelmise":{types:["Ghost","Grass"]},
  "Sinistea":{types:["Ghost"]},
  "Duraludon":{types:["Steel","Dragon"]},
  "Dreepy":{types:["Dragon","Ghost"]},
  "Caterpie":{types:["Bug"],cp:"219–249"},
  "Charmander":{types:["Fire"],cp:"516–560"},
  "Bulbasaur":{types:["Grass","Poison"],cp:"590–637"},
  "Squirtle":{types:["Water"],cp:"497–540"},
  "Shuckle":{types:["Bug","Rock"],cp:"189–231"},
  "Wailmer":{types:["Water"],cp:"779–838"},
  "Chinchou":{types:["Water","Electric"]/*,cp:"443–479"*/},
  "Dedenne":{types:["Electric","Fairy"]/*,cp:"743–789"*/},
  "Pawmi":{types:["Electric"]/*,cp:"244–272"*/},
  "Magnemite":{types:["Electric","Steel"]/*,cp:"544–583"*/},
  "Mareep":{types:["Electric"]/*,cp:"391–424"*/},
  "Joltik":{types:["Bug","Electric"]/*,cp:"404–438"*/},
  "Raichu":{types:["Electric","Psychic"]/*,cp:"929–980"*/}
};
const TYPE_COLORS = {
  "Normal":"#A8A878","Fire":"#F08030","Water":"#6890F0","Electric":"#F8D030","Grass":"#78C850",
  "Ice":"#98D8D8","Fighting":"#C03028","Poison":"#A040A0","Ground":"#E0C068","Flying":"#A890F0",
  "Psychic":"#F85888","Bug":"#A8B820","Rock":"#B8A038","Ghost":"#705898","Dragon":"#7038F8",
  "Dark":"#705848","Steel":"#B8B8D0","Fairy":"#EE99AC"
};

const TYPE_EFFECTIVENESS = {
  "Normal":   { weak: ["Fighting"], resist: ["Ghost"], doubleResist: [] },
  "Fire":     { weak: ["Water","Ground","Rock"], resist: ["Fire","Grass","Ice","Bug","Steel","Fairy"], doubleResist: [] },
  "Water":    { weak: ["Electric","Grass"], resist: ["Fire","Water","Ice","Steel"], doubleResist: [] },
  "Electric": { weak: ["Ground"], resist: ["Electric","Flying","Steel"], doubleResist: [] },
  "Grass":    { weak: ["Fire","Ice","Poison","Flying","Bug"], resist: ["Water","Electric","Grass","Ground"], doubleResist: [] },
  "Ice":      { weak: ["Fire","Fighting","Rock","Steel"], resist: ["Ice"], doubleResist: [] },
  "Fighting": { weak: ["Flying","Psychic","Fairy"], resist: ["Bug","Rock","Dark"], doubleResist: [] },
  "Poison":   { weak: ["Ground","Psychic"], resist: ["Grass","Fighting","Poison","Bug","Fairy"], doubleResist: [] },
  "Ground":   { weak: ["Water","Grass","Ice"], resist: ["Poison","Rock","Electric"], doubleResist: [] },
  "Flying":   { weak: ["Electric","Ice","Rock"], resist: ["Grass","Fighting","Bug","Ground"], doubleResist: [] },
  "Psychic":  { weak: ["Bug","Ghost","Dark"], resist: ["Fighting","Psychic"], doubleResist: [] },
  "Bug":      { weak: ["Fire","Flying","Rock"], resist: ["Grass","Fighting","Ground"], doubleResist: [] },
  "Rock":     { weak: ["Water","Grass","Fighting","Ground","Steel"], resist: ["Normal","Fire","Poison","Flying"], doubleResist: [] },
  "Ghost":    { weak: ["Ghost","Dark"], resist: ["Poison","Bug","Normal","Fighting"], doubleResist: [] },
  "Dragon":   { weak: ["Ice","Dragon","Fairy"], resist: ["Fire","Water","Electric","Grass"], doubleResist: [] },
  "Dark":     { weak: ["Fighting","Bug","Fairy"], resist: ["Ghost","Dark","Psychic"], doubleResist: [] },
  "Steel":    { weak: ["Fire","Fighting","Ground"], resist: ["Normal","Grass","Ice","Flying","Psychic","Bug","Rock","Dragon","Steel","Fairy","Poison"], doubleResist: [] },
  "Fairy":    { weak: ["Poison","Steel"], resist: ["Fighting","Bug","Dark","Dragon"], doubleResist: [] }
};
function getWeaknesses(types) {
  if (!types || types.length === 0) return [];
  const multipliers = {};
  types.forEach(t => {
    const eff = TYPE_EFFECTIVENESS[t];
    if (!eff) return;
    eff.weak.forEach(w => { multipliers[w] = (multipliers[w] || 1) * 1.6; });
    eff.resist.forEach(r => { multipliers[r] = (multipliers[r] || 1) * 0.625; });
  });
  return Object.entries(multipliers)
    .filter(([, v]) => v > 1)
    .sort((a, b) => b[1] - a[1])
    .map(([t, v]) => ({ type: t, multiplier: v }));
}

function getResistances(types) {
  if (!types || types.length === 0) return [];
  const multipliers = {};
  types.forEach(t => {
    const eff = TYPE_EFFECTIVENESS[t];
    if (!eff) return;
    eff.weak.forEach(w => { multipliers[w] = (multipliers[w] || 1) * 1.6; });
    eff.resist.forEach(r => { multipliers[r] = (multipliers[r] || 1) * 0.625; });
  });
  return Object.entries(multipliers)
    .filter(([, v]) => v < 1)
    .sort((a, b) => a[1] - b[1])
    .map(([t, v]) => ({ type: t, double: v < 0.5 }));
}

function flipCard(el) {
  const card = el.closest('.flip-card') || el;
  card.classList.toggle('flipped');
}

function getRaidBossData(name) {
  for (const [pkmn, data] of Object.entries(RAID_BOSS_DATA)) {
    if (name.includes(pkmn)) return data;
  }
  return null;
}
function cleanRaidLabel(name) {
  return name.replace(/^★/, "").replace(/\s*\(\d★\s*(?:Raid|Shadow Raid)?\)|\s*\(Mega\)|\s*\(\d★\s*Max Battle.*?\)|\s*\(Research Breakthrough\)/g, "").trim();
}
function renderBossItem(item, color, th, cardLayout) {
  const pkmn = getPokemonImg(item);
  const imgSize = cardLayout ? 120 : 150;
  let imgEl = pokemonImgHTML(pkmn, imgSize);
  if (imgEl) imgEl = wrapShinySparkles(imgEl, item, imgSize);
  const raidData = getRaidBossData(item);
  const typesHTML = raidData ? `<div style="display:flex;gap:4px;margin-top:4px;flex-wrap:wrap;${cardLayout ? "justify-content:center" : ""}">${raidData.types.map(t =>
    `<span style="font-size:${cardLayout ? 11 : 13}px;font-weight:700;color:#fff;background:${TYPE_COLORS[t] || "#888"};padding:2px 8px;border-radius:10px">${t}</span>`
  ).join("")}</div>` : "";
  const cpHTML = raidData && raidData.cp ? `<div style="margin-top:5px;font-size:${cardLayout ? 13 : 14}px;color:${th.text};line-height:1.6;${cardLayout ? "text-align:center" : ""}">
    <div>CP <span style="font-weight:800;font-size:${cardLayout ? 15 : 16}px">${raidData.cp}</span></div>
    <div style="font-size:${cardLayout ? 11 : 13}px;color:${th.textSecondary}">\u2601\uFE0F ${raidData.weather}: <span style="font-weight:700">${raidData.cpBoost}</span></div>
  </div>` : "";
  const weaknesses = raidData ? getWeaknesses(raidData.types) : [];
  const resistances = raidData ? getResistances(raidData.types) : [];
  const hasBack = weaknesses.length > 0 || resistances.length > 0;
  const backContent = hasBack ? `
    <div style="font-size:11px;font-weight:700;color:${th.textMuted};margin-bottom:16px;text-transform:uppercase;letter-spacing:0.5px">${esc(cleanRaidLabel(item))}</div>
    ${weaknesses.length > 0 ? `<div style="margin-bottom:20px">
      <div style="font-size:10px;font-weight:700;color:#E74C3C;letter-spacing:0.5px;margin-bottom:4px">WEAK TO</div>
      <div style="display:flex;gap:3px;flex-wrap:wrap;${cardLayout ? "justify-content:center" : ""}">${weaknesses.map(w =>
        `<span style="font-size:11px;font-weight:700;color:#fff;background:${TYPE_COLORS[w.type] || "#888"};padding:2px 7px;border-radius:8px">${w.type}${w.multiplier > 2 ? " 2\u00D7" : ""}</span>`
      ).join("")}</div>
    </div>` : ""}
    ${resistances.length > 0 ? `<div>
      <div style="font-size:10px;font-weight:700;color:#27AE60;letter-spacing:0.5px;margin-bottom:4px">RESISTS</div>
      <div style="display:flex;gap:3px;flex-wrap:wrap;${cardLayout ? "justify-content:center" : ""}">${resistances.map(r =>
        `<span style="font-size:11px;font-weight:700;color:#fff;background:${TYPE_COLORS[r.type] || "#888"};padding:2px 7px;border-radius:8px;opacity:${r.double ? "1" : "0.7"}">${r.type}${r.double ? " 2\u00D7" : ""}</span>`
      ).join("")}</div>
    </div>` : ""}
    <div style="font-size:10px;color:${th.textFaint};margin-top:auto;padding-top:6px">Tap to flip back</div>
  ` : "";
  if (cardLayout && pkmn) {
    const frontHTML = `<div style="display:flex;flex-direction:column;align-items:center;padding:12px 8px;font-size:13px;color:${th.textSecondary};line-height:1.45;text-align:center">
      ${imgEl}
      <div style="margin-top:6px;font-weight:700;color:${th.text};font-size:13px">${esc(cleanRaidLabel(item))}</div>
      ${typesHTML}${cpHTML}
    </div>`;
    if (!hasBack) {
      return `<div style="border-radius:12px;background:${th.accentBgSubtle(color)};border:1.5px solid ${th.border};flex:1;min-width:140px;max-width:200px">${frontHTML}</div>`;
    }
    return `<div class="flip-card" onclick="flipCard(this)" style="flex:1;min-width:140px;max-width:200px">
      <div class="flip-card-front" style="background:${th.accentBgSubtle(color)};border:1.5px solid ${th.border}">${frontHTML}</div>
      <div class="flip-card-back" style="background:${th.accentBgSubtle(color)};border:1.5px solid ${th.border};padding:14px 10px;display:flex;flex-direction:column;align-items:center;text-align:center">${backContent}</div>
    </div>`;
  }
  // Row layout (mobile)
  const frontRowHTML = `<div style="display:flex;align-items:center;gap:10px;padding:${pkmn ? "4px" : "7px"} 12px;font-size:13.5px;color:${th.textSecondary};line-height:1.45">${imgEl
    || `<div style="width:5px;height:5px;border-radius:50%;background:${color};flex-shrink:0"></div>`}<div><div>${esc(cleanRaidLabel(item))}</div>${typesHTML}${cpHTML}</div></div>`;
  if (!hasBack) {
    return `<div style="border-radius:9px;background:${th.accentBgSubtle(color)};width:100%">${frontRowHTML}</div>`;
  }
  return `<div class="flip-card" onclick="flipCard(this)" style="width:100%">
    <div class="flip-card-front" style="background:${th.accentBgSubtle(color)};border-radius:9px">${frontRowHTML}</div>
    <div class="flip-card-back" style="background:${th.accentBgSubtle(color)};border-radius:9px;padding:12px 14px;display:flex;flex-direction:column;${pkmn ? "" : "justify-content:center"}">${backContent}</div>
  </div>`;
}

function renderDetailSection(title, emoji, items, color, th, showImages) {
  if (!showImages) {
    return `<div><h4 style="margin:0 0 8px 0;font-size:13px;font-weight:700;color:${th.text};display:flex;align-items:center;gap:8px"><span>${emoji}</span> ${esc(title)}</h4>
      <div style="display:flex;flex-direction:column;gap:5px">${items.map(item =>
        `<div style="display:flex;align-items:center;gap:10px;padding:7px 12px;border-radius:9px;background:${th.accentBgSubtle(color)};font-size:13.5px;color:${th.textSecondary};line-height:1.45"><div style="width:5px;height:5px;border-radius:50%;background:${color};flex-shrink:0"></div>${esc(item)}</div>`
      ).join("")}</div></div>`;
  }
  const hasBoosted = items.some(i => i.startsWith("\u2605"));
  const legendHTML = hasBoosted ? `<div style="display:flex;align-items:center;gap:8px;padding:10px 14px;border-radius:8px;background:${th.accentBgSubtle("#FFD700")};border:1px solid ${th.countdownBorder("#FFD700")};align-self:flex-start;margin-bottom:8px">
    <div style="position:relative;width:28px;height:26px;flex-shrink:0;top:-4px">
      <div style="position:absolute;top:0;left:0;animation:boostedShiny 1.8s ease-in-out infinite">${fourPointStar(10, "#FFD700")}</div>
      <div style="position:absolute;top:10px;left:12px;animation:boostedShiny 1.8s ease-in-out 0.4s infinite">${fourPointStar(16, "#FFD700")}</div>
      <div style="position:absolute;top:18px;left:4px;animation:boostedShiny 1.8s ease-in-out 0.8s infinite">${fourPointStar(8, "#FFD700")}</div>
    </div>
    <span style="font-size:11px;font-weight:600;color:${th.textMuted}">= Boosted Shiny Rate</span>
  </div>` : "";
  // Group items by raid tier
  const tiered = {};
  const untiered = [];
  items.forEach(item => {
    const tier = getRaidTier(item);
    if (tier) {
      if (!tiered[tier]) tiered[tier] = [];
      tiered[tier].push(item);
    } else {
      untiered.push(item);
    }
  });
  const tierKeys = Object.keys(tiered);
  // If no tiers found, render flat with card layout on tablet+
  if (tierKeys.length === 0) {
    return `<div style="display:flex;flex-direction:column"><h4 style="margin:0 0 8px 0;font-size:13px;font-weight:700;color:${th.text};display:flex;align-items:center;gap:8px"><span>${emoji}</span> ${esc(title)}</h4>
      ${legendHTML}
      <div style="display:flex;${breakpoint !== "mobile" ? "flex-wrap:wrap;gap:8px" : "flex-direction:column;gap:5px"}">${items.map(item => renderBossItem(item, color, th, breakpoint !== "mobile")).join("")}</div></div>`;
  }
  // Render with tier groupings
  let html = `<div style="display:flex;flex-direction:column"><h4 style="margin:0 0 12px 0;font-size:13px;font-weight:700;color:${th.text};display:flex;align-items:center;gap:8px"><span>${emoji}</span> ${esc(title)}</h4>${legendHTML}`;
  // Untiered items first (wild spawns etc)
  if (untiered.length > 0) {
    html += `<div style="margin-bottom:12px">${tierKeys.length > 0 ? "" : ""}
      <div style="display:flex;${breakpoint !== "mobile" ? "flex-wrap:wrap;gap:8px" : "flex-direction:column;gap:5px"}">${untiered.map(item => renderBossItem(item, color, th, breakpoint !== "mobile")).join("")}</div></div>`;
  }
  // Tiered groups
  tierKeys.forEach(tier => {
    const tierColor = TIER_COLORS[tier] || color;
    const eggUrl = TIER_EGGS[tier];
    const eggImg = eggUrl ? (tier === "Shadow Raids"
      ? `<div style="position:relative;width:28px;height:28px;flex-shrink:0;overflow:visible">
          <div style="position:absolute;top:-15%;left:-20%;width:75%;height:70%;background:rgba(120,40,180,0.6);border-radius:60% 40% 55% 45%;filter:blur(5px);transform:rotate(-15deg);animation:flameWisp1 2.2s ease-in-out infinite"></div>
          <div style="position:absolute;top:-25%;left:30%;width:70%;height:60%;background:rgba(100,20,160,0.5);border-radius:45% 55% 50% 40%;filter:blur(5px);transform:rotate(10deg);animation:flameWisp2 2.5s ease-in-out infinite"></div>
          <div style="position:absolute;top:25%;left:45%;width:70%;height:65%;background:rgba(130,50,190,0.55);border-radius:50% 60% 40% 55%;filter:blur(5px);transform:rotate(20deg);animation:flameWisp3 2s ease-in-out infinite"></div>
          <div style="position:absolute;top:40%;left:-15%;width:65%;height:60%;background:rgba(110,30,170,0.55);border-radius:55% 45% 60% 40%;filter:blur(5px);transform:rotate(-10deg);animation:flameWisp4 2.3s ease-in-out infinite"></div>
          <img src="${eggUrl}" style="position:relative;width:100%;height:100%;object-fit:contain;z-index:1" onerror="this.parentElement.style.display='none'" />
        </div>`
      : `<img src="${eggUrl}" style="width:28px;height:28px;object-fit:contain" onerror="this.style.display='none'" />`) : "";
    html += `<div style="margin-bottom:12px;border:1.5px solid ${th.border};border-radius:14px;overflow:hidden">
      <div style="padding:10px 14px;background:${th.accentBgSubtle(tierColor)};border-bottom:1.5px solid ${th.border};display:flex;align-items:center;gap:8px">
        ${eggImg}
        <span style="font-size:12px;font-weight:700;color:${th.text};letter-spacing:0.5px;text-transform:uppercase">${tier}</span>
        ${renderRaidHeads(tier)}
      </div>
      <div style="padding:8px;display:flex;${breakpoint !== "mobile" ? "flex-wrap:wrap;gap:8px" : "flex-direction:column;gap:5px"}">${tiered[tier].map(item => renderBossItem(item, tierColor, th, breakpoint !== "mobile")).join("")}</div>
    </div>`;
  });
  html += `</div>`;
  return html;
}

// --- CALENDAR ---
function renderCalendar(th) {
  const year = state.calYear;
  const month = state.calMonth;
  const isMobile = breakpoint === "mobile";
  const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const dayNames = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const today = new Date();
  const todayStr = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,"0")}-${String(today.getDate()).padStart(2,"0")}`;
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cellSize = isMobile ? 44 : 150;

  // Pre-filter events that overlap this month
  const monthStart = `${year}-${String(month+1).padStart(2,"0")}-01`;
  const monthEnd = `${year}-${String(month+1).padStart(2,"0")}-${String(daysInMonth).padStart(2,"0")}`;
  const monthEvents = EVENTS.filter(ev => {
    const end = ev.endDate || ev.date;
    return end >= monthStart && ev.date <= monthEnd;
  });

  // Header with nav
  let html = `<div style="display:flex;flex-direction:column;gap:12px;width:100%;overflow:hidden">
    <div style="display:flex;align-items:center;justify-content:space-between;padding:0 4px">
      <button onclick="calPrev()" style="background:${th.surface};border:1.5px solid ${th.border};border-radius:10px;width:36px;height:36px;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:16px;color:${th.text};font-family:inherit">\u25C0</button>
      <div style="font-size:${isMobile ? 16 : 18}px;font-weight:700;color:${th.text}">${monthNames[month]} ${year}</div>
      <button onclick="calNext()" style="background:${th.surface};border:1.5px solid ${th.border};border-radius:10px;width:36px;height:36px;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:16px;color:${th.text};font-family:inherit">\u25B6</button>
    </div>`;

  // Day headers
  html += `<div style="display:grid;grid-template-columns:repeat(7,1fr);gap:${isMobile ? 1 : 2}px;width:100%">`;
  dayNames.forEach(d => {
    html += `<div style="text-align:center;font-size:${isMobile ? 10 : 11}px;font-weight:700;color:${th.textMuted};padding:4px 0;letter-spacing:0.5px">${d}</div>`;
  });

  // Empty cells before first day
  for (let i = 0; i < firstDay; i++) {
    html += `<div style="min-height:${cellSize}px"></div>`;
  }

  // Day cells
  for (let day = 1; day <= daysInMonth; day++) {
    const dateStr = `${year}-${String(month+1).padStart(2,"0")}-${String(day).padStart(2,"0")}`;
    const dayEvents = monthEvents.filter(ev => {
      const end = ev.endDate || ev.date;
      return dateStr >= ev.date && dateStr <= end;
    }).sort((a, b) => {
      const aSeason = a.title.toLowerCase().includes("season");
      const bSeason = b.title.toLowerCase().includes("season");
      if (aSeason && !bSeason) return -1;
      if (!aSeason && bSeason) return 1;
      return 0;
    });
    const isToday = dateStr === todayStr;
    const isSelected = dateStr === state.calSelectedDay;
    const isPast = dateStr < todayStr;
    const hasEvents = dayEvents.length > 0;

    html += `<div onclick="calDayClick('${dateStr}')" style="min-height:${cellSize}px;border-radius:${isMobile ? 8 : 10}px;display:flex;flex-direction:column;align-items:center;padding:4px 0;gap:2px;cursor:${hasEvents ? "pointer" : "default"};background:${isSelected ? th.accentBgSubtle(dayEvents[0]?.color || "#3498DB") : isToday ? th.accentBgSubtle("#2ECC71") : "transparent"};border:${isToday ? "2px solid #2ECC71" : isSelected ? `2px solid ${dayEvents[0]?.color || "#3498DB"}` : `1px solid ${th.border}`};opacity:${isPast && !isToday ? 0.5 : 1};transition:all 0.15s ease">
      <div style="font-size:${isMobile ? 12 : 13}px;font-weight:${isToday || hasEvents ? 700 : 500};color:${isToday ? "#2ECC71" : hasEvents ? th.text : th.textMuted}">${day}</div>
      ${hasEvents ? (isMobile
        ? `<div style="display:flex;flex-wrap:wrap;gap:2px;justify-content:center;padding:0 2px">${dayEvents.slice(0, 4).map(ev => `<div style="width:6px;height:6px;border-radius:50%;background:${ev.color}"></div>`).join("")}${dayEvents.length > 4 ? `<div style="font-size:7px;color:${th.textMuted}">+${dayEvents.length - 4}</div>` : ""}</div>`
        : `<div style="display:flex;flex-direction:column;gap:1px;width:100%;padding:0 3px;overflow:hidden">${dayEvents.slice(0, 3).map(ev => `<div style="font-size:11px;font-weight:600;color:#fff;background:${ev.color};border-radius:4px;padding:1px 4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:1.5">${ev.icon} ${esc(ev.title)}</div>`).join("")}${dayEvents.length > 3 ? `<div style="font-size:9px;color:${th.textMuted};text-align:center">+${dayEvents.length - 3} more</div>` : ""}</div>`
      ) : ""}
    </div>`;
  }
  html += `</div>`;

  // Selected day detail
  if (state.calSelectedDay) {
    const selEvents = getEventsForDate(state.calSelectedDay);
    if (selEvents.length > 0) {
      const selDate = new Date(state.calSelectedDay + "T12:00:00");
      const dateLabel = selDate.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
      html += `<div style="margin-top:8px;border:1.5px solid ${th.border};border-radius:14px;overflow:hidden">
        <div style="padding:10px 14px;background:${th.surface};border-bottom:1.5px solid ${th.border};font-size:13px;font-weight:700;color:${th.text}">\uD83D\uDCC5 ${dateLabel}</div>
        <div style="padding:8px;display:flex;flex-direction:column;gap:6px">
          ${selEvents.map(ev => {
            const active = isActive(ev);
            return `<button onclick="selectEvent(${ev.id})" style="display:flex;align-items:center;gap:10px;padding:10px 14px;background:${th.accentBgSubtle(ev.color)};border:1.5px solid ${th.border};border-radius:10px;cursor:pointer;text-align:left;width:100%;font-family:inherit;border-left:4px solid ${ev.color}">
              <div style="font-size:18px">${ev.icon}</div>
              <div style="flex:1;min-width:0">
                <div style="font-size:13px;font-weight:700;color:${th.text};display:flex;align-items:center;gap:6px">${esc(ev.title)}${active ? `<span style="font-size:9px;font-weight:700;color:#fff;background:#2ECC71;padding:1px 6px;border-radius:10px">LIVE</span>` : ""}</div>
                <div style="font-size:11px;color:${th.textMuted};margin-top:2px">${esc(ev.type)} \u00B7 ${esc(ev.time)}</div>
              </div>
            </button>`;
          }).join("")}
        </div>
      </div>`;
    }
  }

  html += `</div>`;
  return html;
}

// --- EVENT DETAIL ---
function renderEventDetail(event, th) {
  const active = isActive(event);
  const over = isOver(event);
  return `<div style="animation:fadeSlideIn 0.3s ease">
    <button onclick="goBack()" style="display:inline-flex;align-items:center;gap:6px;background:none;border:none;cursor:pointer;font-size:14px;color:${th.textMuted};font-weight:500;padding:4px 0;margin-bottom:16px;font-family:inherit">\u2190 Back</button>
    <div style="background:${th.surface};border-radius:20px;border:1.5px solid ${th.border};overflow:hidden;box-shadow:${th.shadowLg}">
      <div style="background:${th.detailHeaderBg(event.color)};padding:24px 20px;border-bottom:2px solid ${th.detailHeaderBorder(event.color)}">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px">
          ${(() => {
            if (event.iconImg) {
              return `<div style="width:50px;height:50px;border-radius:14px;background:${th.accentBg(event.color)};border:2px solid ${th.countdownBorder(event.color)};display:flex;align-items:center;justify-content:center;flex-shrink:0;overflow:hidden"><img src="${event.iconImg}" style="width:46px;height:46px;object-fit:contain" onerror="this.parentElement.innerHTML='${event.icon}'" /></div>`;
            }
            const detailPkmn = (event.type === "Raid" || event.type === "Max Battle") && event.details && event.details.bosses && event.details.bosses[0] ? getPokemonImg(event.details.bosses[0]) : null;
            return detailPkmn
              ? `<div style="width:50px;height:50px;border-radius:14px;background:${th.accentBg(event.color)};border:2px solid ${th.countdownBorder(event.color)};display:flex;align-items:center;justify-content:center;flex-shrink:0;overflow:hidden"><img src="${detailPkmn.url}" style="width:46px;height:46px;object-fit:contain" onerror="this.parentElement.innerHTML='${event.icon}'" /></div>`
              : `<div style="width:50px;height:50px;border-radius:14px;background:${th.accentBg(event.color)};border:2px solid ${th.countdownBorder(event.color)};display:flex;align-items:center;justify-content:center;font-size:26px">${event.icon}</div>`;
          })()}
          <div>
            <div style="font-size:10px;font-weight:700;color:${event.color};letter-spacing:1.2px;text-transform:uppercase;margin-bottom:3px;display:flex;gap:6px;align-items:center">${esc(event.type)}${active ? `<span style="background:#2ECC71;color:#fff;padding:1px 7px;border-radius:20px;font-size:9px">LIVE NOW</span>` : ""}</div>
            <h2 style="margin:0;font-size:20px;font-weight:800;color:${th.text}">${esc(event.title)}</h2>
          </div>
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:14px;align-items:center">
          <div style="font-size:13px;color:${th.textSecondary};font-weight:500">\uD83D\uDCC5 ${formatDateRange(event.date, event.endDate)}</div>
          <div style="font-size:13px;color:${th.textSecondary};font-weight:500">\uD83D\uDD50 ${esc(event.time)}</div>
          <span class="countdown" data-date="${event.date}" data-color="${event.color}" data-over="${over}" data-event-id="${event.id}">${renderCountdown(event.date, event.color, over, th, event)}</span>
        </div>
      </div>
      <div style="padding:20px 20px 24px;display:flex;flex-direction:column;gap:22px">
        <p style="margin:0;font-size:14.5px;color:${th.textSecondary};line-height:1.65">${esc(event.summary)}</p>
        ${event.url ? (event.urlDisabled
          ? `<div style="display:inline-flex;align-items:center;gap:6px;font-size:13px;font-weight:600;color:${th.textMuted};padding:8px 14px;border:1.5px solid ${th.border};border-radius:10px;background:${th.surface};opacity:0.6;cursor:default">\uD83D\uDD17 More information coming soon</div>`
          : `<a href="${event.url}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:6px;font-size:13px;font-weight:600;color:${event.color};text-decoration:none;padding:8px 14px;border:1.5px solid ${event.color}40;border-radius:10px;background:${th.accentBgSubtle(event.color)};transition:all 0.2s ease" onmouseenter="this.style.background='${event.color}20';this.style.borderColor='${event.color}'" onmouseleave="this.style.background='${th.accentBgSubtle(event.color)}';this.style.borderColor='${event.color}40'">\uD83D\uDD17 For more information about this event, click here</a>`) : ""}
        <div class="move-deadline" data-event-id="${event.id}">${renderMoveDeadlineBanner(event, th)}</div>
        ${event.details.bosses ? renderDetailSection("Featured Encounters", "\uD83C\uDFAF", event.details.bosses, event.color, th, true) : ""}
        ${event.details.catchCP ? renderCatchCP(event.details.catchCP, th) : ""}
        ${event.details.spotlightHours ? `<div><h4 style="margin:0 0 10px 0;font-size:13px;font-weight:700;color:${th.text};display:flex;align-items:center;gap:8px"><span>\uD83D\uDD26</span> Daily Spotlight Hours <span style="font-size:11px;font-weight:500;color:${th.textMuted}">(6:00 \u2013 7:00 PM)</span></h4>
          <div style="display:flex;${breakpoint !== "mobile" ? "flex-wrap:wrap;gap:8px" : "flex-direction:column;gap:6px"}">${event.details.spotlightHours.map(sh => {
            const pkmn = getPokemonImg(sh.pokemon);
            const shImgSize = breakpoint !== "mobile" ? 120 : 150;
            let imgEl = pokemonImgHTML(pkmn, shImgSize);
            if (imgEl && sh.shiny) imgEl = wrapShinySparkles(imgEl, sh.boostedShiny ? "\u2605" + sh.pokemon : sh.pokemon, shImgSize);
            const rd = getRaidBossData(sh.pokemon);
            const typeEl = rd ? `<div style="display:flex;gap:3px;margin-top:3px;${breakpoint !== "mobile" ? "justify-content:center" : ""};flex-wrap:wrap">${rd.types.map(t => `<span style="font-size:9px;font-weight:700;color:#fff;background:${TYPE_COLORS[t] || "#888"};padding:1px 6px;border-radius:8px">${t}</span>`).join("")}</div>` : "";
            if (breakpoint !== "mobile") {
              return `<div style="display:flex;flex-direction:column;align-items:center;padding:10px 8px;border-radius:12px;background:${th.accentBgSubtle(event.color)};border:1.5px solid ${th.border};text-align:center;flex:1;min-width:110px;max-width:160px">
                ${imgEl || ""}
                <div style="margin-top:4px;font-weight:700;color:${th.text};font-size:12px">${esc(sh.pokemon)}</div>
                ${typeEl}
                <div style="margin-top:4px;font-size:11px;color:${th.textMuted};font-weight:600">${esc(sh.date)}</div>
              </div>`;
            }
            return `<div style="display:flex;align-items:center;gap:12px;padding:10px 14px;border-radius:12px;background:${th.accentBgSubtle(event.color)};border:1.5px solid ${th.border}">
              <div style="flex-shrink:0">${imgEl || ""}</div>
              <div style="flex:1;min-width:0">
                <div style="font-weight:700;color:${th.text};font-size:15px">${esc(sh.pokemon)}</div>
                ${typeEl}
                <div style="margin-top:4px;font-size:12px;font-weight:600;color:${th.textMuted}">${esc(sh.date)} \u00B7 6:00\u20137:00 PM</div>
              </div>
            </div>`;
          }).join("")}</div></div>` : ""}
        ${event.details.seasonBonuses ? renderDetailSection("Season Bonuses", "\uD83D\uDCC6", event.details.seasonBonuses, "#9B59B6", th) : ""}
        ${event.details.bonuses ? renderDetailSection("Active Bonuses", "\u2728", event.details.bonuses, "#27AE60", th) : ""}
        ${event.details.ticketBonuses ? renderDetailSection(`Ticket Bonuses${event.details.ticketPrice ? " — " + event.details.ticketPrice : ""}`, "\uD83C\uDFAB", event.details.ticketBonuses, "#E67E22", th) : ""}
        ${event.details.paidResearch ? `<div><h4 style="margin:0 0 10px 0;font-size:13px;font-weight:700;color:${th.text};display:flex;align-items:center;gap:8px"><span>\uD83D\uDCB0</span> Paid Timed Research — ${esc(event.details.paidResearch.price)}</h4>
          <div style="display:flex;flex-direction:column;gap:6px">
            ${event.details.paidResearch.rewards.map(r => `<div style="padding:10px 14px;border-radius:10px;background:${th.accentBgSubtle("#E67E22")};border:1px solid ${th.countdownBorder("#E67E22")};font-size:13.5px;color:${th.textSecondary};line-height:1.5;display:flex;align-items:center;gap:8px"><span style="color:#E67E22;font-weight:700">•</span> ${esc(r)}</div>`).join("")}
            ${event.details.paidResearch.note ? `<div style="padding:10px 14px;border-radius:10px;background:${th.accentBgSubtle("#E74C3C")};border:1px solid ${th.countdownBorder("#E74C3C")};font-size:12px;color:#E74C3C;font-weight:700;line-height:1.5;display:flex;align-items:center;gap:8px"><span style="font-size:14px">\u26A0\uFE0F</span> ${esc(event.details.paidResearch.note)}</div>` : ""}
          </div></div>` : ""}
        ${event.details.counters ? renderCounters(event.details.counters, th) : ""}
        ${event.details.tips && event.details.tips.length > 0 ? `<div><h4 style="margin:0 0 10px 0;font-size:13px;font-weight:700;color:${th.text};display:flex;align-items:center;gap:8px"><span>\uD83D\uDCA1</span> Trainer Tips</h4>
          <div style="display:flex;flex-direction:column;gap:6px">${event.details.tips.map(tip =>
            `<div style="padding:10px 14px;border-radius:10px;background:${th.tipBg};border:1px solid ${th.tipBorder};font-size:13.5px;color:${th.tipText};line-height:1.5">${esc(tip)}</div>`
          ).join("")}</div></div>` : ""}
      </div>
    </div>
  </div>`;
}

// --- NEWS DETAIL ---
function renderNewsDetail(announcement, th) {
  return `<div style="animation:fadeSlideIn 0.3s ease">
    <button onclick="goBackNews()" style="display:inline-flex;align-items:center;gap:6px;background:none;border:none;cursor:pointer;font-size:14px;color:${th.textMuted};font-weight:500;padding:4px 0;margin-bottom:16px;font-family:inherit">\u2190 Back to news</button>
    <div style="background:${th.surface};border-radius:20px;border:1.5px solid ${th.border};overflow:hidden;box-shadow:${th.shadowLg}">
      <div style="padding:24px 20px;border-bottom:1.5px solid ${th.border}">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
          <span style="font-size:11px;font-weight:700;background:${th.tagBg(announcement.tag)};color:${th.tagText(announcement.tag)};padding:4px 12px;border-radius:20px;letter-spacing:0.3px">${esc(announcement.tag)}</span>
          <span style="font-size:12px;color:${th.textFaint};font-weight:500">${formatDate(announcement.date)}</span>
        </div>
        <h2 style="margin:0;font-size:20px;font-weight:800;color:${th.text};line-height:1.3">${esc(announcement.title)}</h2>
      </div>
      <div style="padding:20px 20px 24px;display:flex;flex-direction:column;gap:20px">
        <p style="margin:0;font-size:14.5px;color:${th.textSecondary};line-height:1.65">${esc(announcement.fullBody)}</p>
        ${announcement.url ? `<a href="${announcement.url}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:6px;font-size:13px;font-weight:600;color:${th.tagText(announcement.tag)};text-decoration:none;padding:8px 14px;border:1.5px solid ${th.tagText(announcement.tag)}40;border-radius:10px;background:${th.tagBg(announcement.tag)};transition:all 0.2s ease" onmouseenter="this.style.borderColor='${th.tagText(announcement.tag)}'" onmouseleave="this.style.borderColor='${th.tagText(announcement.tag)}40'">\uD83D\uDD17 For more information, click here</a>` : ""}
        ${announcement.sections ? announcement.sections.map(s =>
          `<div><h4 style="margin:0 0 10px 0;font-size:14px;font-weight:700;color:${th.text}">${esc(s.heading)}</h4>
          <div style="display:flex;flex-direction:column;gap:5px">${s.items.map(item =>
            `<div style="display:flex;align-items:baseline;gap:10px;padding:8px 14px;border-radius:10px;background:${th.tagBg(announcement.tag)};font-size:13.5px;color:${th.textSecondary};line-height:1.5"><div style="width:5px;height:5px;border-radius:50%;background:${th.tagText(announcement.tag)};flex-shrink:0;margin-top:6px"></div>${esc(item)}</div>`
          ).join("")}</div></div>`
        ).join("") : ""}
      </div>
    </div>
  </div>`;
}

// --- EVENT CARD ---
function renderEventCard(event, index, th) {
  const active = isActive(event);
  const isPast = isOver(event);
  const today = new Date();
  const eventStart = new Date(event.date + "T00:00:00");
  const endDate = event.endDate || event.date;
  const eventEnd = new Date(endDate + "T23:59:59");
  const isToday = today >= eventStart && today <= eventEnd && !active;
  const calendarDays = Math.ceil((eventStart - new Date(today.getFullYear(), today.getMonth(), today.getDate())) / 864e5);
  const daysLabel = isToday ? "TODAY" : calendarDays === 0 ? "TODAY" : calendarDays === 1 ? "TOMORROW" : `${calendarDays}d`;
  const daysColor = calendarDays <= 3 ? "#E74C3C" : calendarDays <= 7 ? "#F39C12" : th.textMuted;
  return `<button onclick="selectEvent(${event.id})" style="display:flex;flex-direction:column;gap:12px;padding:18px 18px 16px;background:${th.cardBg(active, event.color)};border:1.5px solid ${th.cardBorder(active, event.color)};border-radius:16px;cursor:pointer;text-align:left;transition:all 0.25s cubic-bezier(0.25,0.46,0.45,0.94);opacity:${isPast ? 0.5 : 1};width:100%;box-shadow:${th.shadow};position:relative;overflow:hidden;font-family:inherit;animation:fadeSlideUp 0.4s cubic-bezier(0.25,0.46,0.45,0.94) ${index * 0.06}s both"
    onmouseenter="this.style.borderColor='${event.color}60';this.style.transform='translateY(-3px)';this.style.boxShadow='0 8px 25px ${event.color}18';"
    onmouseleave="this.style.borderColor='${th.cardBorder(active, event.color)}';this.style.transform='translateY(0)';this.style.boxShadow='${th.shadow}';">
    <div style="position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,${event.color},${event.color}88,${event.color});background-size:200% 100%;animation:gradientShift 3s ease infinite"></div>
    <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px">
      <div style="display:flex;align-items:center;gap:10px;flex:1;min-width:0">
        ${(() => {
          if (event.iconImg) {
            return `<div style="width:48px;height:48px;border-radius:12px;background:${th.accentBg(event.color)};display:flex;align-items:center;justify-content:center;flex-shrink:0;overflow:hidden"><img src="${event.iconImg}" style="width:44px;height:44px;object-fit:contain" onerror="this.parentElement.innerHTML='${event.icon}'" /></div>`;
          }
          const raidPkmn = (event.type === "Raid" || event.type === "Max Battle") && event.details && event.details.bosses && event.details.bosses[0] ? getPokemonImg(event.details.bosses[0]) : null;
          return raidPkmn
            ? `<div style="width:48px;height:48px;border-radius:12px;background:${th.accentBg(event.color)};display:flex;align-items:center;justify-content:center;flex-shrink:0;overflow:hidden"><img src="${raidPkmn.url}" style="width:44px;height:44px;object-fit:contain" onerror="this.parentElement.innerHTML='${event.icon}'" /></div>`
            : `<div style="width:40px;height:40px;border-radius:11px;background:${th.accentBg(event.color)};display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">${event.icon}</div>`;
        })()}
        <div style="min-width:0">
          <h3 style="margin:0;font-size:15px;font-weight:700;color:${th.text};line-height:1.3">${esc(event.title)}</h3>
          <div style="display:flex;gap:6px;margin-top:4px;align-items:center;flex-wrap:wrap">
            <span style="font-size:10px;font-weight:700;color:${event.color};background:${th.accentBg(event.color)};padding:2px 8px;border-radius:20px;letter-spacing:0.3px">${esc(event.type)}</span>
            ${active ? `<span style="font-size:10px;font-weight:700;color:#fff;background:#2ECC71;padding:2px 8px;border-radius:20px;animation:badgeBounce 2s ease infinite">LIVE</span>` : ""}
          </div>
        </div>
      </div>
      ${!isPast && !active && calendarDays >= 0 && calendarDays <= 60 ? `<div style="font-size:11px;font-weight:700;white-space:nowrap;padding-top:2px;color:${daysColor}">${daysLabel}</div>` : ""}
    </div>
    <p style="margin:0;font-size:13.5px;color:${th.textSecondary};line-height:1.55">${esc(event.summary)}</p>
    <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
      <div style="font-size:12px;color:${th.textMuted};font-weight:500">\uD83D\uDCC5 ${formatDateRange(event.date, event.endDate)} \u00B7 ${esc(event.time)}</div>
      ${!isPast ? `<span class="countdown" data-date="${event.date}" data-color="${event.color}" data-over="${isPast}" data-event-id="${event.id}">${renderCountdown(event.date, event.color, isPast, th, event)}</span>` : ""}
    </div>
  </button>`;
}

// --- ANNOUNCEMENT CARD ---
function renderAnnouncementCard(announcement, index, th) {
  return `<button onclick="selectNews(${announcement.id})" style="padding:14px 18px;background:${th.surface};border:1.5px solid ${th.border};border-radius:14px;display:flex;flex-direction:column;gap:7px;box-shadow:${th.shadow};cursor:pointer;text-align:left;width:100%;font-family:inherit;transition:all 0.25s cubic-bezier(0.25,0.46,0.45,0.94);animation:fadeSlideUp 0.4s cubic-bezier(0.25,0.46,0.45,0.94) ${index * 0.06}s both"
    onmouseenter="this.style.borderColor='${th.tagText(announcement.tag)}40';this.style.transform='translateY(-3px)';this.style.boxShadow='0 8px 20px rgba(0,0,0,0.08)';"
    onmouseleave="this.style.borderColor='${th.border}';this.style.transform='translateY(0)';this.style.boxShadow='${th.shadow}';">
    <div style="display:flex;justify-content:space-between;align-items:center;width:100%">
      <span style="font-size:10px;font-weight:700;background:${th.tagBg(announcement.tag)};color:${th.tagText(announcement.tag)};padding:3px 10px;border-radius:20px;letter-spacing:0.3px">${esc(announcement.tag)}</span>
      <span style="font-size:11px;color:${th.textFaint};font-weight:500">${formatDate(announcement.date)}</span>
    </div>
    <h4 style="margin:0;font-size:14px;font-weight:700;color:${th.text}">${esc(announcement.title)}</h4>
    <p style="margin:0;font-size:13.5px;color:${th.textSecondary};line-height:1.5">${esc(announcement.body)}</p>
    <div style="font-size:12px;color:${th.tagText(announcement.tag)};font-weight:600;display:inline-flex;align-items:center;gap:4px">Read more <span>\u2192</span></div>
  </button>`;
}

// --- FILTER PILLS ---
function renderFilterPills(active, options, onClickFn, th) {
  return `<div style="display:flex;gap:7px;overflow-x:auto;padding-bottom:4px;-webkit-overflow-scrolling:touch;scrollbar-width:none">${options.map(opt =>
    `<button onclick="${onClickFn}('${opt}')" style="padding:6px 14px;border-radius:20px;border:${active === opt ? `1.5px solid ${th.pillActiveBg}` : `1.5px solid ${th.pillBorder}`};background:${active === opt ? th.pillActiveBg : th.pillBg};color:${active === opt ? th.pillActiveText : th.pillText};font-size:12px;font-weight:600;cursor:pointer;white-space:nowrap;transition:all 0.15s ease;font-family:inherit">${esc(opt)}</button>`
  ).join("")}</div>`;
}

// --- GLOBAL ACTIONS ---
function selectEvent(id) {
  state.selectedEvent = EVENTS.find(e => e.id === id);
  render();
  window.scrollTo(0, 0);
}

function selectNews(id) {
  state.selectedNews = ANNOUNCEMENTS.find(a => a.id === id);
  render();
  window.scrollTo(0, 0);
}

function goBack() {
  state.selectedEvent = null;
  render();
}

function searchPokedex(val) {
  const query = val.trim().toLowerCase();
  const resultsEl = document.getElementById("dex-search-results");
  if (!resultsEl || query.length < 1) { if (resultsEl) resultsEl.style.display = "none"; return; }
  const th = t(darkMode);
  const matches = DEX_NAMES.filter(n => n.toLowerCase().includes(query)).slice(0, 12);
  if (matches.length === 0) { resultsEl.innerHTML = `<div style="padding:12px;text-align:center;color:${th.textMuted};font-size:13px">No Pok\u00E9mon found</div>`; resultsEl.style.display = "block"; return; }
  resultsEl.innerHTML = matches.map(m => {
    const dex = DEX[m];
    const img = pokemonImgUrl(dex);
    return `<div onclick="openPokemonDetail(${dex});document.getElementById('dex-search').value='';document.getElementById('dex-search-results').style.display='none'" style="display:flex;align-items:center;gap:10px;padding:8px 14px;cursor:pointer;transition:background 0.1s ease" onmouseenter="this.style.background='${th.surfaceHover}'" onmouseleave="this.style.background='transparent'">
      <img src="${img}" style="width:36px;height:36px;object-fit:contain" onerror="this.style.opacity='0.3'" />
      <div><div style="font-size:14px;font-weight:600;color:${th.text}">${esc(m)}</div><div style="font-size:11px;color:${th.textMuted}">#${String(dex).padStart(4,"0")}</div></div>
    </div>`;
  }).join("");
  resultsEl.style.display = "block";
}

function toggleDexRegion(id) {
  const el = document.getElementById(id);
  const arrow = document.getElementById(id + '-arrow');
  const open = el.dataset.open === 'true';
  el.dataset.open = open ? 'false' : 'true';
  el.style.display = open ? 'none' : 'grid';
  arrow.style.transform = open ? 'rotate(-90deg)' : 'rotate(0deg)';
}

function goBackNews() {
  state.selectedNews = null;
  render();
}

function goHome() {
  state.selectedEvent = null;
  state.selectedNews = null;
  state.tab = "home";
  render();
}

function setTab(tab) {
  state.tab = tab;
  state.selectedEvent = null;
  state.selectedNews = null;
  state.pokedexDetail = null;
  if (tab === "nests") { loadNestsFromSupabase().then(() => render()); }
  render();
}

async function openPokemonDetail(dexNum) {
  // Save which regions are open
  state.pokedexOpenRegions = {};
  for (let i = 0; i < REGIONS.length; i++) {
    const el = document.getElementById(`dex-region-${i}`);
    if (el) state.pokedexOpenRegions[i] = el.dataset.open === 'true';
  }
  state.pokedexDetail = dexNum;
  state.pokedexDetailData = null;
  state.pokedexDetailEvolutions = null;
  render();
  try {
    const [data, evolutions] = await Promise.all([fetchPokemonData(dexNum), fetchEvolutionChain(dexNum)]);
    state.pokedexDetailData = data;
    state.pokedexDetailEvolutions = evolutions;
  } catch (err) { console.error("Failed to load Pokemon detail:", err); }
  render();
}
function closePokemonDetail() {
  const dex = state.pokedexDetail;
  const openRegions = state.pokedexOpenRegions || {};
  state.pokedexDetail = null;
  state.pokedexDetailData = null;
  state.pokedexDetailEvolutions = null;
  render();
  // Restore open regions
  requestAnimationFrame(() => {
    for (let i = 0; i < REGIONS.length; i++) {
      if (openRegions[i]) {
        const el = document.getElementById(`dex-region-${i}`);
        const arrow = document.getElementById(`dex-region-${i}-arrow`);
        if (el && el.dataset.open === 'false') {
          el.style.display = 'grid';
          el.dataset.open = 'true';
          if (arrow) arrow.style.transform = 'rotate(0deg)';
        }
      }
    }
    // Scroll to the region the Pokemon belongs to
    if (dex) {
      const regionIdx = REGIONS.findIndex(r => dex >= r.start && dex <= r.end);
      if (regionIdx >= 0) {
        const regionEl = document.getElementById(`dex-region-${regionIdx}`);
        if (regionEl) regionEl.parentElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
}

function showFormModal(imgSrc, label) {
  const overlay = document.createElement("div");
  overlay.id = "form-modal";
  overlay.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.75);z-index:9999;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;animation:fadeIn 0.2s ease";
  overlay.onclick = () => overlay.remove();
  overlay.innerHTML = `<img src="${imgSrc}" style="max-width:85vw;max-height:65vh;object-fit:contain;filter:drop-shadow(0 8px 30px rgba(0,0,0,0.5));animation:scaleIn 0.25s ease" />
    <div style="margin-top:16px;font-size:20px;font-weight:700;color:#fff;text-shadow:0 2px 8px rgba(0,0,0,0.5)">${label}</div>`;
  document.body.appendChild(overlay);
}

function renderPokemonDetail(data, evolutions, th, isMobile) {
  if (!data) {
    return `<div style="padding:24px;text-align:center;color:${th.textMuted}">
      <div style="font-size:32px;margin-bottom:12px">\uD83D\uDD04</div>
      <div style="font-size:16px;font-weight:600">Loading Pok\u00E9mon data...</div>
    </div>`;
  }
  function typeColor(t) { return TYPE_COLORS[t.charAt(0).toUpperCase() + t.slice(1)] || "#888"; }
  const dexStr = "#" + String(data.dexNum).padStart(4, "0");
  const primaryColor = typeColor(data.types[0]);
  const typeBadges = data.types.map(t => `<span style="display:inline-block;padding:4px 14px;border-radius:20px;background:${typeColor(t)};color:#fff;font-size:13px;font-weight:600;text-transform:capitalize;margin-right:6px;text-shadow:0 1px 2px rgba(0,0,0,0.3)">${t}</span>`).join("");
  const heightM = (data.height / 10).toFixed(1);
  const weightKg = (data.weight / 10).toFixed(1);
  const statBars = data.stats.map(s => {
    const pct = Math.min((s.value / 255) * 100, 100);
    const color = STAT_COLORS[s.name] || primaryColor;
    const label = STAT_LABELS[s.name] || s.name;
    return `<div style="display:flex;align-items:center;margin-bottom:6px;gap:8px">
      <div style="width:70px;text-align:right;font-size:12px;font-weight:600;color:${th.textSecondary};flex-shrink:0">${label}</div>
      <div style="width:32px;text-align:right;font-size:13px;font-weight:700;color:${th.text};flex-shrink:0">${s.value}</div>
      <div style="flex:1;height:10px;background:${th.border};border-radius:5px;overflow:hidden">
        <div style="width:${pct}%;height:100%;background:${color};border-radius:5px"></div>
      </div>
    </div>`;
  }).join("");
  const totalStats = data.stats.reduce((sum, s) => sum + s.value, 0);
  let evoHtml = "";
  if (evolutions && evolutions.length > 1) {
    const evoItems = evolutions.map((evo, i) => {
      const isActive = evo.dexNum === data.dexNum;
      const arrow = i > 0 && evo.trigger ? `<div style="display:flex;flex-direction:column;align-items:center;margin:0 4px;flex-shrink:0">
        <div style="font-size:18px;color:${th.textMuted}">\u2192</div>
        <div style="font-size:10px;color:${th.textSecondary};text-align:center;max-width:80px;line-height:1.2">${esc(evo.trigger)}</div>
      </div>` : "";
      return `${arrow}<div onclick="openPokemonDetail(${evo.dexNum})" style="display:flex;flex-direction:column;align-items:center;cursor:pointer;padding:8px;border-radius:12px;background:${isActive ? th.accentBgSubtle(primaryColor) : "transparent"};border:2px solid ${isActive ? primaryColor : "transparent"};transition:all 0.2s;flex-shrink:0" onmouseenter="this.style.background='${th.surfaceHover}'" onmouseleave="this.style.background='${isActive ? th.accentBgSubtle(primaryColor) : "transparent"}'">
        <img src="${pokemonImgUrl(evo.dexNum)}" style="width:56px;height:56px;object-fit:contain" onerror="this.style.opacity='0.3'" />
        <div style="font-size:11px;font-weight:${isActive ? 700 : 500};color:${isActive ? th.text : th.textSecondary};margin-top:4px">${esc(evo.name)}</div>
        <div style="font-size:10px;color:${th.textMuted}">#${String(evo.dexNum).padStart(4, "0")}</div>
      </div>`;
    }).join("");
    evoHtml = `<div style="margin-top:20px">
      <div style="font-size:14px;font-weight:700;color:${th.text};margin-bottom:10px">Evolution Chain</div>
      <div style="display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:4px;padding:12px;background:${th.surface};border-radius:12px;border:1px solid ${th.border}">${evoItems}</div>
    </div>`;
  }
  const pad = isMobile ? "16px" : "24px";
  return `<div style="padding:${pad};max-width:480px;margin:0 auto">
    <button onclick="closePokemonDetail()" style="display:flex;align-items:center;gap:6px;background:none;border:none;color:${th.textSecondary};font-size:14px;font-weight:600;cursor:pointer;padding:8px 0;margin-bottom:12px;font-family:inherit" onmouseenter="this.style.color='${th.text}'" onmouseleave="this.style.color='${th.textSecondary}'">\u2190 Back to Pok\u00E9Dex</button>
    <div style="text-align:center;padding:20px 0;background:linear-gradient(135deg,${primaryColor}22,${primaryColor}08);border-radius:16px;margin-bottom:16px;position:relative;overflow:hidden">
      <div style="position:absolute;top:8px;right:12px;font-size:28px;font-weight:800;color:${primaryColor};opacity:0.7">${dexStr}</div>
      <img src="${pokemonImgUrl(data.dexNum)}" style="width:${isMobile ? 140 : 180}px;height:${isMobile ? 140 : 180}px;object-fit:contain;filter:drop-shadow(0 4px 12px ${primaryColor}40)" onerror="this.style.opacity='0.3'" />
    </div>
    <div style="text-align:center;margin-bottom:16px">
      <div style="font-size:12px;font-weight:700;color:${th.textMuted};letter-spacing:1px">${dexStr}</div>
      <div style="font-size:24px;font-weight:800;color:${th.text};margin:2px 0;text-transform:capitalize">${esc(data.name)}</div>
      <div style="font-size:13px;color:${th.textSecondary};font-style:italic;margin-bottom:10px">${esc(data.genus)}</div>
      <div>${typeBadges}</div>
    </div>
    <div style="display:flex;justify-content:center;gap:24px;padding:12px;background:${th.surface};border-radius:12px;border:1px solid ${th.border};margin-bottom:16px">
      <div style="text-align:center"><div style="font-size:11px;font-weight:600;color:${th.textMuted};text-transform:uppercase;letter-spacing:0.5px">Height</div><div style="font-size:16px;font-weight:700;color:${th.text}">${heightM} m</div></div>
      <div style="width:1px;background:${th.border}"></div>
      <div style="text-align:center"><div style="font-size:11px;font-weight:600;color:${th.textMuted};text-transform:uppercase;letter-spacing:0.5px">Weight</div><div style="font-size:16px;font-weight:700;color:${th.text}">${weightKg} kg</div></div>
    </div>
    ${data.flavorText ? `<div style="padding:14px;background:${th.surface};border-radius:12px;border:1px solid ${th.border};margin-bottom:16px;font-size:13px;color:${th.textSecondary};line-height:1.6;font-style:italic;text-align:center">"${esc(data.flavorText)}"</div>` : ""}
    <div style="margin-bottom:16px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
        <div style="font-size:14px;font-weight:700;color:${th.text}">Base Stats</div>
        <div style="font-size:12px;color:${th.textMuted};font-weight:600">Total: ${totalStats}</div>
      </div>
      <div style="padding:14px;background:${th.surface};border-radius:12px;border:1px solid ${th.border}">${statBars}</div>
    </div>
    ${evoHtml}
    ${(() => {
      const forms = POKEMON_FORMS[data.dexNum];
      if (!forms || forms.length === 0) return "";
      const formCards = forms.map(fm => {
        const fSrc = formImgUrl(data.dexNum, fm.f);
        return `<div onclick="showFormModal('${fSrc}','${esc(fm.l)}')" style="display:flex;flex-direction:column;align-items:center;gap:4px;padding:8px;border-radius:12px;background:${th.accentBgSubtle(primaryColor)};border:1px solid ${th.border};cursor:pointer;transition:transform 0.15s ease,box-shadow 0.15s ease" onmouseenter="this.style.transform='scale(1.05)';this.style.boxShadow='0 4px 12px rgba(0,0,0,0.15)'" onmouseleave="this.style.transform='scale(1)';this.style.boxShadow='none'">
          <img src="${fSrc}" style="width:${isMobile ? 56 : 64}px;height:${isMobile ? 56 : 64}px;object-fit:contain" onerror="this.style.opacity='0.3'" />
          <span style="font-size:${isMobile ? 10 : 11}px;font-weight:600;color:${th.textSecondary};text-align:center">${esc(fm.l)}</span>
        </div>`;
      }).join("");
      return `<div style="margin-top:20px">
        <div style="font-size:14px;font-weight:700;color:${th.text};margin-bottom:10px">Forms</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(${isMobile ? 70 : 80}px,1fr));gap:8px">${formCards}</div>
      </div>`;
    })()}
  </div>`;
}

async function addNest() {
  const pokemon = document.getElementById("nest-pokemon").value.trim();
  const location = document.getElementById("nest-location").value.trim();
  if (!pokemon || !location) return;
  await insertNest(pokemon, location);
  render();
}
async function removeNest(id) {
  await deleteNest(id);
  render();
}

function calPrev() {
  state.calMonth--;
  if (state.calMonth < 0) { state.calMonth = 11; state.calYear--; }
  state.calSelectedDay = null;
  render();
}
function calNext() {
  state.calMonth++;
  if (state.calMonth > 11) { state.calMonth = 0; state.calYear++; }
  state.calSelectedDay = null;
  render();
}
function calDayClick(dateStr) {
  state.calSelectedDay = state.calSelectedDay === dateStr ? null : dateStr;
  render();
}
function getEventsForDate(dateStr) {
  return EVENTS.filter(ev => {
    const end = ev.endDate || ev.date;
    return dateStr >= ev.date && dateStr <= end;
  });
}

function setFilter(f) {
  state.filter = f;
  state.openYears = {};
  render();
}

function setNewsFilter(f) {
  state.newsFilter = f;
  state.openNewsYears = {};
  render();
}

function toggleCatchCP(id) {
  const el = document.getElementById(id);
  const arrow = document.getElementById(id + "-arrow");
  const preview = document.getElementById(id + "-preview");
  const isOpen = el.dataset.open === "true";
  if (isOpen) {
    el.style.maxHeight = "0";
    el.style.opacity = "0";
    el.style.marginTop = "0";
    el.dataset.open = "false";
    if (arrow) arrow.style.transform = "rotate(0deg)";
    if (preview) { preview.style.opacity = "1"; preview.style.maxHeight = "20px"; }
  } else {
    el.style.maxHeight = el.scrollHeight + "px";
    el.style.opacity = "1";
    el.style.marginTop = "10px";
    el.dataset.open = "true";
    if (arrow) arrow.style.transform = "rotate(180deg)";
    if (preview) { preview.style.opacity = "0"; preview.style.maxHeight = "0"; }
  }
}

function toggleYear(y) {
  state.openYears[y] = !state.openYears[y];
  render();
}

function toggleNewsYear(y) {
  state.openNewsYears[y] = !state.openNewsYears[y];
  render();
}

// --- MAIN RENDER ---
function render() {
  const th = t(darkMode);
  const isMobile = breakpoint === "mobile";
  const isDesktop = breakpoint === "desktop";

  const filteredEvents = [...EVENTS].sort((a, b) => new Date(a.date) - new Date(b.date));
  const filtered = state.filter !== "All" ? filteredEvents.filter(e => e.type === state.filter) : filteredEvents;
  const upcomingEvents = filtered.filter(e => !isOver(e));
  const pastEvents = filtered.filter(e => isOver(e));

  const pastByYear = {};
  pastEvents.forEach(ev => {
    const year = new Date(ev.date + "T12:00:00").getFullYear();
    if (!pastByYear[year]) pastByYear[year] = [];
    pastByYear[year].push(ev);
  });
  Object.keys(pastByYear).forEach(y => pastByYear[y].sort((a, b) => new Date(b.date) - new Date(a.date)));
  const archiveYears = Object.keys(pastByYear).sort((a, b) => b - a);

  const NEWS_TAGS = ["All", ...Array.from(new Set(ANNOUNCEMENTS.map(a => a.tag)))];
  const filteredAnnouncements = state.newsFilter === "All" ? ANNOUNCEMENTS : ANNOUNCEMENTS.filter(a => a.tag === state.newsFilter);
  const threeMonthsAgo = new Date();
  threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
  const recentNews = filteredAnnouncements.filter(a => new Date(a.date + "T12:00:00") >= threeMonthsAgo);
  const archivedNews = filteredAnnouncements.filter(a => new Date(a.date + "T12:00:00") < threeMonthsAgo);
  const archivedNewsByYear = {};
  archivedNews.forEach(a => {
    const year = new Date(a.date + "T12:00:00").getFullYear();
    if (!archivedNewsByYear[year]) archivedNewsByYear[year] = [];
    archivedNewsByYear[year].push(a);
  });
  Object.keys(archivedNewsByYear).forEach(y => archivedNewsByYear[y].sort((a, b) => new Date(b.date) - new Date(a.date)));
  const newsArchiveYears = Object.keys(archivedNewsByYear).sort((a, b) => b - a);

  const activeEvents = EVENTS.filter(isActive);
  const upcomingHero = EVENTS.filter(e => !isOver(e) && !isActive(e)).sort((a, b) => new Date(a.date) - new Date(b.date))[0];
  const hero = upcomingHero || (activeEvents.length === 0 ? null : null);

  const mainPad = isMobile ? "16px 14px" : isDesktop ? "24px 32px" : "20px 24px";

  let content = "";

  if (state.selectedEvent) {
    content = `<main style="padding:${mainPad};display:flex;flex-direction:column;gap:${isMobile ? 16 : 20}px">${renderEventDetail(state.selectedEvent, th)}</main>`;
  } else if (state.selectedNews) {
    content = `<main style="padding:${mainPad};display:flex;flex-direction:column;gap:${isMobile ? 16 : 20}px">${renderNewsDetail(state.selectedNews, th)}</main>`;
  } else {
    // Live events
    let liveHTML = "";
    activeEvents.forEach(ev => {
      liveHTML += `<div onclick="selectEvent(${ev.id})" style="background:${th.heroBg("#2ECC71")};border:1.5px solid ${th.heroBorder("#2ECC71")};border-radius:${isMobile ? 18 : 24}px;padding:${isMobile ? "20px 18px 16px" : "28px 28px 22px"};cursor:pointer;transition:all 0.3s cubic-bezier(0.25,0.46,0.45,0.94);overflow:hidden;${state.heroRendered ? "" : "animation:scaleIn 0.5s cubic-bezier(0.25,0.46,0.45,0.94)"}"
        onmouseenter="this.style.transform='translateY(-2px)';this.style.boxShadow='0 12px 30px #2ECC7120';"
        onmouseleave="this.style.transform='translateY(0)';this.style.boxShadow='none';">
        <div style="font-size:${isMobile ? 10 : 11}px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:${isMobile ? 6 : 8}px;color:#2ECC71;display:flex;align-items:center;gap:6px">
          <span style="position:relative;width:7px;height:7px;display:inline-block"><span style="position:absolute;top:0;left:0;width:100%;height:100%;border-radius:50%;background:#2ECC71"></span><span style="position:absolute;top:0;left:0;width:100%;height:100%;border-radius:50%;background:#2ECC71;animation:sonarPulse 1.5s ease-out infinite"></span></span> LIVE
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:${isMobile ? 10 : 16}px">
          <div><h2 style="margin:0 0 4px 0;font-size:${isMobile ? 18 : 24}px;font-weight:800;color:${th.text};display:flex;align-items:center;gap:8px">${ev.iconImg ? `<img src="${ev.iconImg}" style="width:${isMobile ? 60 : 72}px;height:${isMobile ? 60 : 72}px;object-fit:contain" onerror="this.outerHTML='${ev.icon}'" />` : ev.icon} ${esc(ev.title)}</h2>
          <div style="font-size:${isMobile ? 12 : 14}px;color:${th.textMuted};font-weight:500">${formatDateRange(ev.date, ev.endDate)} \u00B7 ${esc(ev.time)}</div></div>
          <span class="countdown" data-date="${ev.endDate || ev.date}" data-color="#2ECC71" data-over="false" data-event-id="${ev.id}">${renderCountdown(ev.endDate || ev.date, "#2ECC71", false, th, ev)}</span>
        </div>
      </div>`;
    });

    // Hero (upcoming)
    let heroHTML = "";
    if (hero) {
      heroHTML = `<div onclick="selectEvent(${hero.id})" style="background:${th.heroBg(hero.color)};border:1.5px solid ${th.heroBorder(hero.color)};border-radius:${isMobile ? 18 : 24}px;padding:${isMobile ? "20px 18px 16px" : "28px 28px 22px"};cursor:pointer;transition:all 0.3s cubic-bezier(0.25,0.46,0.45,0.94);overflow:hidden;${state.heroRendered ? "" : "animation:scaleIn 0.5s cubic-bezier(0.25,0.46,0.45,0.94)"}"
        onmouseenter="this.style.transform='translateY(-2px)';this.style.boxShadow='0 12px 30px ${hero.color}20';"
        onmouseleave="this.style.transform='translateY(0)';this.style.boxShadow='none';">
        <div style="font-size:${isMobile ? 10 : 11}px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:${isMobile ? 6 : 8}px;color:${hero.color};display:flex;align-items:center;gap:6px">
          \u23F1 Coming Up Next
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:${isMobile ? 10 : 16}px">
          <div><h2 style="margin:0 0 4px 0;font-size:${isMobile ? 18 : 24}px;font-weight:800;color:${th.text};display:flex;align-items:center;gap:8px">${(() => {
            if (hero.iconImg) return `<img src="${hero.iconImg}" style="width:${isMobile ? 36 : 42}px;height:${isMobile ? 36 : 42}px;object-fit:contain;margin-left:-4px" onerror="this.outerHTML='${hero.icon}'" />`;
            const heroPkmn = (hero.type === "Raid" || hero.type === "Max Battle") && hero.details && hero.details.bosses && hero.details.bosses[0] ? getPokemonImg(hero.details.bosses[0]) : null;
            return heroPkmn ? `<img src="${heroPkmn.url}" style="width:${isMobile ? 36 : 42}px;height:${isMobile ? 36 : 42}px;object-fit:contain" onerror="this.outerHTML='${hero.icon}'" />` : hero.icon;
          })()} ${esc(hero.title)}</h2>
          <div style="font-size:${isMobile ? 12 : 14}px;color:${th.textMuted};font-weight:500">${formatDateRange(hero.date, hero.endDate)} \u00B7 ${esc(hero.time)}</div></div>
          <span class="countdown" data-date="${hero.date}" data-color="${hero.color}" data-over="false" data-event-id="${hero.id}">${renderCountdown(hero.date, hero.color, false, th, hero)}</span>
        </div>
      </div>`;
    }

    // Tabs
    const tabsHTML = `<div style="display:flex;border-bottom:2px solid ${th.tabBorder};margin-top:4px">
      ${["events", "calendar", "raids", "max", "news"].map(tb => {
        const mobileLabel = tb === "events" ? `\uD83D\uDCC5 Events` : tb === "calendar" ? `\uD83D\uDDD3\uFE0F Cal` : tb === "raids" ? `\u2694\uFE0F Raids` : tb === "max" ? `\uD83D\uDCA5 Max` : `\uD83D\uDCE2 News`;
        const desktopLabel = tb === "events" ? `\uD83D\uDCC5 Events (${upcomingEvents.length})` : tb === "calendar" ? `\uD83D\uDDD3\uFE0F Calendar` : tb === "raids" ? `\u2694\uFE0F Raids` : tb === "max" ? `\uD83D\uDCA5 Max Battles` : `\uD83D\uDCE2 News (${filteredAnnouncements.length})`;
        const label = isMobile ? mobileLabel : desktopLabel;
        return `<button onclick="setTab('${tb}')" style="flex:1;padding:${isMobile ? "9px 0" : "11px 0"};background:none;border:none;border-bottom:${state.tab === tb ? `2.5px solid ${th.tabActive}` : "2.5px solid transparent"};color:${state.tab === tb ? th.tabActive : th.tabInactive};font-size:${isMobile ? 10 : 13}px;font-weight:700;cursor:pointer;text-transform:uppercase;letter-spacing:${isMobile ? "0.3px" : "1px"};transition:all 0.15s ease;font-family:inherit">${label}</button>`;
      }).join("")}
    </div>`;

    // Events tab
    let eventsTabHTML = "";
    if (state.tab === "events" || state.tab === "home") {
      const pillsHTML = renderFilterPills(state.filter, EVENT_TYPES, "setFilter", th);
      let listHTML = "";
      if (upcomingEvents.length === 0 && archiveYears.length === 0) {
        listHTML = `<div style="text-align:center;padding:40px;color:${th.textFaint};font-size:14px">No ${state.filter} events scheduled yet.</div>`;
      } else {
        const upcomingHTML = upcomingEvents.map((ev, i) => renderEventCard(ev, i, th)).join("");
        let archiveHTML = "";
        if (archiveYears.length > 0) {
          archiveHTML = `<div style="width:100%;display:flex;flex-direction:column;gap:10px">
            <div style="margin-top:${upcomingEvents.length > 0 ? 12 : 0}px;display:flex;align-items:center;gap:10px">
              <div style="flex:1;height:1px;background:${th.border}"></div>
              <span style="font-size:11px;font-weight:700;color:${th.textMuted};letter-spacing:1px;text-transform:uppercase;white-space:nowrap">Archived Events</span>
              <div style="flex:1;height:1px;background:${th.border}"></div>
            </div>
            ${archiveYears.map(year => {
              const items = pastByYear[year];
              const isOpen = !!state.openYears[year];
              const label = state.filter === "All" ? `${items.length} past event${items.length === 1 ? "" : "s"}` : `${items.length} past ${state.filter} event${items.length === 1 ? "" : "s"}`;
              return `<div style="margin-top:${upcomingEvents.length > 0 ? 6 : 0}px">
                <button onclick="toggleYear('${year}')" style="display:flex;align-items:center;justify-content:space-between;width:100%;padding:14px 18px;background:${th.surface};border:1.5px solid ${th.border};border-radius:${isOpen ? "16px 16px 0 0" : "16px"};cursor:pointer;font-family:inherit;transition:all 0.2s ease;box-shadow:${th.shadow}">
                  <div style="display:flex;align-items:center;gap:10px">
                    <div style="width:36px;height:36px;border-radius:10px;background:${th.accentBg("#636E72")};display:flex;align-items:center;justify-content:center;font-size:16px">\uD83D\uDCCB</div>
                    <div style="text-align:left"><div style="font-size:15px;font-weight:700;color:${th.text}">${year}</div>
                    <div style="font-size:12px;color:${th.textMuted};font-weight:500">${label}</div></div>
                  </div>
                  <div style="font-size:18px;color:${th.textMuted};transition:transform 0.2s ease;transform:${isOpen ? "rotate(180deg)" : "rotate(0deg)"}">\u25BE</div>
                </button>
                ${isOpen ? `<div style="border:1.5px solid ${th.border};border-top:none;border-radius:0 0 16px 16px;overflow:hidden;animation:fadeSlideIn 0.25s ease">
                  ${items.map((ev, i) =>
                    `<button onclick="selectEvent(${ev.id})" style="display:flex;align-items:center;gap:12px;padding:14px 18px;background:${th.surface};border:none;border-top:${i > 0 ? `1px solid ${th.border}` : "none"};cursor:pointer;text-align:left;width:100%;font-family:inherit;transition:background 0.15s ease"
                      onmouseenter="this.style.background='${th.surfaceHover}'"
                      onmouseleave="this.style.background='${th.surface}'">
                      ${(() => {
                        if (ev.iconImg) {
                          return `<div style="width:34px;height:34px;border-radius:9px;background:${th.accentBg(ev.color)};display:flex;align-items:center;justify-content:center;flex-shrink:0;overflow:hidden"><img src="${ev.iconImg}" style="width:30px;height:30px;object-fit:contain" onerror="this.parentElement.innerHTML='${ev.icon}'" /></div>`;
                        }
                        const raidPkmn = (ev.type === "Raid" || ev.type === "Max Battle") && ev.details && ev.details.bosses && ev.details.bosses[0] ? getPokemonImg(ev.details.bosses[0]) : null;
                        return raidPkmn
                          ? `<div style="width:34px;height:34px;border-radius:9px;background:${th.accentBg(ev.color)};display:flex;align-items:center;justify-content:center;flex-shrink:0;overflow:hidden"><img src="${raidPkmn.url}" style="width:30px;height:30px;object-fit:contain" onerror="this.parentElement.innerHTML='${ev.icon}'" /></div>`
                          : `<div style="width:34px;height:34px;border-radius:9px;background:${th.accentBg(ev.color)};display:flex;align-items:center;justify-content:center;font-size:17px;flex-shrink:0">${ev.icon}</div>`;
                      })()}
                      <div style="flex:1;min-width:0"><div style="font-size:14px;font-weight:600;color:${th.text};line-height:1.3">${esc(ev.title)}</div>
                      <div style="font-size:12px;color:${th.textMuted};margin-top:2px">${formatDate(ev.date)}</div></div>
                      <span style="font-size:10px;font-weight:700;color:${ev.color};background:${th.accentBg(ev.color)};padding:2px 8px;border-radius:20px;flex-shrink:0">${esc(ev.type)}</span>
                    </button>`
                  ).join("")}
                </div>` : ""}
              </div>`;
            }).join("")}
          </div>`;
        }
        listHTML = `<div style="display:flex;flex-direction:column;gap:10px">
          <div style="display:flex;flex-direction:column;gap:${isMobile ? 10 : 14}px;width:100%">${upcomingHTML}</div>
          ${archiveHTML}
        </div>`;
      }
      eventsTabHTML = `<div style="display:flex;flex-direction:column;gap:14px">${pillsHTML}${listHTML}</div>`;
    }

    // News tab
    let newsTabHTML = "";
    if (state.tab === "news") {
      const pillsHTML = renderFilterPills(state.newsFilter, NEWS_TAGS, "setNewsFilter", th);
      let listHTML = "";
      if (recentNews.length === 0 && newsArchiveYears.length === 0) {
        listHTML = `<div style="text-align:center;padding:40px;color:${th.textFaint};font-size:14px">No ${state.newsFilter === "All" ? "" : state.newsFilter + " "}posts yet.</div>`;
      } else {
        const recentHTML = recentNews.map((a, i) => renderAnnouncementCard(a, i, th)).join("");
        let newsArchiveHTML = "";
        if (newsArchiveYears.length > 0) {
          newsArchiveHTML = `<div style="margin-top:${recentNews.length > 0 ? 12 : 0}px;display:flex;align-items:center;gap:10px">
            <div style="flex:1;height:1px;background:${th.border}"></div>
            <span style="font-size:11px;font-weight:700;color:${th.textMuted};letter-spacing:1px;text-transform:uppercase;white-space:nowrap">Archived News</span>
            <div style="flex:1;height:1px;background:${th.border}"></div>
          </div>`;
          newsArchiveHTML += newsArchiveYears.map(year => {
            const items = archivedNewsByYear[year];
            const isOpen = !!state.openNewsYears[year];
            const label = state.newsFilter === "All" ? `${items.length} older post${items.length === 1 ? "" : "s"}` : `${items.length} older ${state.newsFilter} post${items.length === 1 ? "" : "s"}`;
            return `<div style="margin-top:${recentNews.length > 0 ? 6 : 0}px">
              <button onclick="toggleNewsYear('${year}')" style="display:flex;align-items:center;justify-content:space-between;width:100%;padding:14px 18px;background:${th.surface};border:1.5px solid ${th.border};border-radius:${isOpen ? "16px 16px 0 0" : "16px"};cursor:pointer;font-family:inherit;transition:all 0.2s ease;box-shadow:${th.shadow}">
                <div style="display:flex;align-items:center;gap:10px">
                  <div style="width:36px;height:36px;border-radius:10px;background:${th.accentBg("#636E72")};display:flex;align-items:center;justify-content:center;font-size:16px">\uD83D\uDCF0</div>
                  <div style="text-align:left"><div style="font-size:15px;font-weight:700;color:${th.text}">${year}</div>
                  <div style="font-size:12px;color:${th.textMuted};font-weight:500">${label}</div></div>
                </div>
                <div style="font-size:18px;color:${th.textMuted};transition:transform 0.2s ease;transform:${isOpen ? "rotate(180deg)" : "rotate(0deg)"}">\u25BE</div>
              </button>
              ${isOpen ? `<div style="border:1.5px solid ${th.border};border-top:none;border-radius:0 0 16px 16px;overflow:hidden;animation:fadeSlideIn 0.25s ease">
                ${items.map((a, i) =>
                  `<button onclick="selectNews(${a.id})" style="display:flex;align-items:center;gap:12px;padding:14px 18px;background:${th.surface};border:none;border-top:${i > 0 ? `1px solid ${th.border}` : "none"};cursor:pointer;text-align:left;width:100%;font-family:inherit;transition:background 0.15s ease"
                    onmouseenter="this.style.background='${th.surfaceHover}'"
                    onmouseleave="this.style.background='${th.surface}'">
                    <span style="font-size:10px;font-weight:700;background:${th.tagBg(a.tag)};color:${th.tagText(a.tag)};padding:3px 8px;border-radius:20px;flex-shrink:0">${esc(a.tag)}</span>
                    <div style="flex:1;min-width:0"><div style="font-size:14px;font-weight:600;color:${th.text};line-height:1.3">${esc(a.title)}</div>
                    <div style="font-size:12px;color:${th.textMuted};margin-top:2px">${formatDate(a.date)}</div></div>
                    <div style="font-size:13px;color:${th.textFaint}">\u2192</div>
                  </button>`
                ).join("")}
              </div>` : ""}
            </div>`;
          }).join("");
        }
        listHTML = `<div style="display:flex;flex-direction:column;gap:8px">
          <div style="display:flex;flex-direction:column;gap:${isMobile ? 8 : 12}px;width:100%">${recentHTML}</div>
          ${newsArchiveHTML}
        </div>`;
      }
      newsTabHTML = `<div style="display:flex;flex-direction:column;gap:14px">${pillsHTML}${listHTML}</div>`;
    }

    // Raids tab
    let raidsTabHTML = "";
    if (state.tab === "raids") {
      let raidSectionsHTML = "";
      Object.entries(CURRENT_RAID_BOSSES).forEach(([tier, bosses]) => {
        const tierColor = TIER_COLORS[tier] || "#8E44AD";
        const eggUrl = TIER_EGGS[tier];
        const isShadowTier = tier.startsWith("Shadow");
        const eggImg = eggUrl ? (isShadowTier
          ? `<div style="position:relative;width:28px;height:28px;flex-shrink:0;overflow:visible">
              <div style="position:absolute;top:-15%;left:-20%;width:75%;height:70%;background:rgba(120,40,180,0.6);border-radius:60% 40% 55% 45%;filter:blur(5px);transform:rotate(-15deg);animation:flameWisp1 2.2s ease-in-out infinite"></div>
              <div style="position:absolute;top:-25%;left:30%;width:70%;height:60%;background:rgba(100,20,160,0.5);border-radius:45% 55% 50% 40%;filter:blur(5px);transform:rotate(10deg);animation:flameWisp2 2.5s ease-in-out infinite"></div>
              <div style="position:absolute;top:25%;left:45%;width:70%;height:65%;background:rgba(130,50,190,0.55);border-radius:50% 60% 40% 55%;filter:blur(5px);transform:rotate(20deg);animation:flameWisp3 2s ease-in-out infinite"></div>
              <div style="position:absolute;top:40%;left:-15%;width:65%;height:60%;background:rgba(110,30,170,0.55);border-radius:55% 45% 60% 40%;filter:blur(5px);transform:rotate(-10deg);animation:flameWisp4 2.3s ease-in-out infinite"></div>
              <img src="${eggUrl}" style="position:relative;width:100%;height:100%;object-fit:contain;z-index:1" onerror="this.parentElement.style.display='none'" />
            </div>`
          : `<img src="${eggUrl}" style="width:28px;height:28px;object-fit:contain" onerror="this.style.display='none'" />`) : "";
        raidSectionsHTML += `<div style="border:1.5px solid ${th.border};border-radius:14px;overflow:hidden">
          <div style="padding:10px 14px;background:${th.accentBgSubtle(tierColor)};border-bottom:1.5px solid ${th.border};display:flex;align-items:center;gap:8px">
            ${eggImg}
            <span style="font-size:12px;font-weight:700;color:${th.text};letter-spacing:0.5px;text-transform:uppercase">${tier}</span>
            ${renderRaidHeads(tier)}
          </div>
          <div style="padding:8px;display:flex;${breakpoint !== "mobile" ? "flex-wrap:wrap;gap:8px" : "flex-direction:column;gap:5px"}">${bosses.map(item => renderBossItem(item, tierColor, th, breakpoint !== "mobile")).join("")}</div>
        </div>`;
      });
      raidsTabHTML = `<div style="display:flex;flex-direction:column;gap:14px">
        <div style="text-align:center;padding:10px;font-size:14px;font-weight:600;color:${th.text}">Current Raid Bosses</div>
        <div style="text-align:center;font-size:11px;color:${th.textMuted};font-weight:500;margin-top:-10px">Data sourced from Pok\u00E9monGO.com, LeekDuck.com & Pok\u00E9monGOHUB.net</div>
        <div style="text-align:center;font-size:12px;color:${th.textMuted};font-weight:600;margin-top:2px">Tap a Pok\u00E9mon to see its weaknesses & resistances</div>
        ${raidSectionsHTML}
      </div>`;
    }

    // Max Battles tab
    let maxTabHTML = "";
    if (state.tab === "max") {
      let maxSectionsHTML = "";
      Object.entries(CURRENT_MAX_BATTLES).forEach(([tier, bosses]) => {
        const tierColor = MAX_TIER_COLORS[tier] || "#78C850";
        maxSectionsHTML += `<div style="border:1.5px solid ${th.border};border-radius:14px;overflow:hidden">
          <div style="padding:10px 14px;background:${th.accentBgSubtle(tierColor)};border-bottom:1.5px solid ${th.border};display:flex;align-items:center;gap:8px">
            <span style="font-size:14px">\uD83D\uDCA5</span>
            <span style="font-size:12px;font-weight:700;color:${th.text};letter-spacing:0.5px;text-transform:uppercase">${tier}</span>
          </div>
          <div style="padding:8px;display:flex;${breakpoint !== "mobile" ? "flex-wrap:wrap;gap:8px" : "flex-direction:column;gap:5px"}">${bosses.map(b => {
            const imgUrl = b.gmax ? gmaxImg(b.dex) : natDexImg(b.dex, GENDER_SUFFIX[b.dex] || "");
            const pkmn = { url: imgUrl, shadow: false, dynamax: true };
            const cardLayout = breakpoint !== "mobile";
            const imgSize = cardLayout ? 120 : 150;
            let imgEl = pokemonImgHTML(pkmn, imgSize);
            if (imgEl) imgEl = wrapShinySparkles(imgEl, b.name, imgSize);
            const rd = getRaidBossData(b.name);
            const typesEl = rd ? `<div style="display:flex;gap:4px;margin-top:4px;flex-wrap:wrap;${cardLayout ? "justify-content:center" : ""}">${rd.types.map(t => `<span style="font-size:${cardLayout ? 11 : 13}px;font-weight:700;color:#fff;background:${TYPE_COLORS[t] || "#888"};padding:2px 8px;border-radius:10px">${t}</span>`).join("")}</div>` : "";
            const cpEl = rd && rd.cp ? `<div style="margin-top:5px;font-size:${cardLayout ? 13 : 14}px;color:${th.text};line-height:1.6;${cardLayout ? "text-align:center" : ""}">CP <span style="font-weight:800;font-size:${cardLayout ? 15 : 16}px">${rd.cp}</span></div>` : "";
            const weaknesses = rd ? getWeaknesses(rd.types) : [];
            const resistances = rd ? getResistances(rd.types) : [];
            const hasBack = weaknesses.length > 0 || resistances.length > 0;
            const backContent = hasBack ? `
              <div style="font-size:11px;font-weight:700;color:${th.textMuted};margin-bottom:16px;text-transform:uppercase;letter-spacing:0.5px">${esc(b.name)}</div>
              ${weaknesses.length > 0 ? `<div style="margin-bottom:20px">
                <div style="font-size:10px;font-weight:700;color:#E74C3C;letter-spacing:0.5px;margin-bottom:4px">WEAK TO</div>
                <div style="display:flex;gap:3px;flex-wrap:wrap;${cardLayout ? "justify-content:center" : ""}">${weaknesses.map(w =>
                  `<span style="font-size:11px;font-weight:700;color:#fff;background:${TYPE_COLORS[w.type] || "#888"};padding:2px 7px;border-radius:8px">${w.type}${w.multiplier > 2 ? " 2\u00D7" : ""}</span>`
                ).join("")}</div>
              </div>` : ""}
              ${resistances.length > 0 ? `<div>
                <div style="font-size:10px;font-weight:700;color:#27AE60;letter-spacing:0.5px;margin-bottom:4px">RESISTS</div>
                <div style="display:flex;gap:3px;flex-wrap:wrap;${cardLayout ? "justify-content:center" : ""}">${resistances.map(r =>
                  `<span style="font-size:11px;font-weight:700;color:#fff;background:${TYPE_COLORS[r.type] || "#888"};padding:2px 7px;border-radius:8px;opacity:${r.double ? "1" : "0.7"}">${r.type}${r.double ? " 2\u00D7" : ""}</span>`
                ).join("")}</div>
              </div>` : ""}
              <div style="font-size:10px;color:${th.textFaint};margin-top:auto;padding-top:6px">Tap to flip back</div>
            ` : "";
            if (cardLayout) {
              const frontHTML = `<div style="display:flex;flex-direction:column;align-items:center;padding:12px 8px;font-size:13px;color:${th.textSecondary};line-height:1.45;text-align:center">
                ${imgEl || ""}
                <div style="margin-top:6px;font-weight:700;color:${th.text};font-size:13px">${esc(b.name)}</div>
                ${typesEl}${cpEl}
              </div>`;
              if (!hasBack) return `<div style="border-radius:12px;background:${th.accentBgSubtle(tierColor)};border:1.5px solid ${th.border};flex:1;min-width:140px;max-width:200px">${frontHTML}</div>`;
              return `<div class="flip-card" onclick="flipCard(this)" style="flex:1;min-width:140px;max-width:200px">
                <div class="flip-card-front" style="background:${th.accentBgSubtle(tierColor)};border:1.5px solid ${th.border}">${frontHTML}</div>
                <div class="flip-card-back" style="background:${th.accentBgSubtle(tierColor)};border:1.5px solid ${th.border};padding:14px 10px;display:flex;flex-direction:column;align-items:center;text-align:center">${backContent}</div>
              </div>`;
            }
            const frontRowHTML = `<div style="display:flex;align-items:center;gap:10px;padding:4px 12px;font-size:13.5px;color:${th.textSecondary};line-height:1.45">
              ${imgEl || ""}<div><div>${esc(b.name)}</div>${typesEl}${cpEl}</div>
            </div>`;
            if (!hasBack) return `<div style="border-radius:9px;background:${th.accentBgSubtle(tierColor)};width:100%">${frontRowHTML}</div>`;
            return `<div class="flip-card" onclick="flipCard(this)" style="width:100%">
              <div class="flip-card-front" style="background:${th.accentBgSubtle(tierColor)};border-radius:9px">${frontRowHTML}</div>
              <div class="flip-card-back" style="background:${th.accentBgSubtle(tierColor)};border-radius:9px;padding:12px 14px;display:flex;flex-direction:column">${backContent}</div>
            </div>`;
          }).join("")}</div>
        </div>`;
      });
      maxTabHTML = `<div style="display:flex;flex-direction:column;gap:14px">
        <div style="text-align:center;padding:10px;font-size:14px;font-weight:600;color:${th.text}">Current Max Battle Bosses</div>
        <div style="text-align:center;font-size:11px;color:${th.textMuted};font-weight:500;margin-top:-10px">Data sourced from Pok\u00E9monGO.com, LeekDuck.com & Pok\u00E9monGOHUB.net</div>
        <div style="text-align:center;font-size:12px;color:${th.textMuted};font-weight:600;margin-top:2px">Tap a Pok\u00E9mon to see its weaknesses & resistances</div>
        ${maxSectionsHTML}
      </div>`;
    }

    // Calendar tab
    let calendarTabHTML = "";
    if (state.tab === "calendar") {
      calendarTabHTML = renderCalendar(th);
    }

    // Tools tab
    let toolsTabHTML = "";
    if (state.tab === "tools") {
      toolsTabHTML = `<div style="display:flex;flex-direction:column;gap:${isMobile ? 16 : 20}px">
        <div style="text-align:center;padding:10px">
          <h2 style="margin:0;font-size:${isMobile ? 20 : 26}px;font-weight:800;color:${th.text}">\uD83D\uDEE0\uFE0F PoGO Tools</h2>
          <p style="margin:6px 0 0 0;font-size:${isMobile ? 12 : 14}px;color:${th.textMuted};font-weight:500">Helpful tools and resources for Pok\u00E9mon GO trainers</p>
        </div>
        <a href="https://godex.site" target="_blank" rel="noopener noreferrer" style="display:flex;${isMobile ? "flex-direction:column" : "flex-direction:row;align-items:center"};gap:${isMobile ? 16 : 20}px;padding:${isMobile ? "20px 18px" : "24px 28px"};background:${th.surface};border:1.5px solid ${th.border};border-radius:${isMobile ? 18 : 20}px;text-decoration:none;transition:all 0.25s ease;box-shadow:${th.shadow}" onmouseenter="this.style.borderColor='#2ECC71';this.style.transform='translateY(-3px)';this.style.boxShadow='0 8px 25px rgba(46,204,113,0.15)'" onmouseleave="this.style.borderColor='${th.border}';this.style.transform='translateY(0)';this.style.boxShadow='${th.shadow}'">
          <div style="width:${isMobile ? "100%" : "80px"};display:flex;${isMobile ? "justify-content:center" : "justify-content:center;flex-shrink:0"}">
            <img src="https://godex.site/images/icons/android-icon-192x192.webp" style="width:${isMobile ? 64 : 72}px;height:${isMobile ? 64 : 72}px;border-radius:18px;object-fit:contain" alt="GOdex" />
          </div>
          <div style="flex:1;${isMobile ? "text-align:center" : ""}">
            <div style="display:flex;align-items:center;gap:8px;${isMobile ? "justify-content:center" : ""}">
              <h3 style="margin:0;font-size:${isMobile ? 18 : 22}px;font-weight:800;color:${th.text}">GOdex</h3>
              <span style="font-size:10px;font-weight:700;color:#2ECC71;background:${th.accentBg("#2ECC71")};padding:2px 8px;border-radius:20px">FREE</span>
            </div>
            <p style="margin:8px 0 0 0;font-size:${isMobile ? 13 : 14}px;color:${th.textSecondary};line-height:1.6">Your online Pok\u00E9dex checklist for Pok\u00E9mon GO. Track your National Dex, Shiny Dex, Event Dex, Lucky Dex, Shadow collection, and more \u2014 all in one place.</p>
            <p style="margin:10px 0 0 0;font-size:${isMobile ? 13 : 14}px;color:${th.textSecondary};line-height:1.6">Perfect for coordinating trades with your local community. Mark what you have and what you need, then compare lists with other trainers to find trade matches. Whether you\u2019re hunting for Shiny Event Pikachu or filling out your Hundo Dex, GOdex keeps you organized.</p>
            <p style="margin:10px 0 0 0;font-size:${isMobile ? 13 : 14}px;color:${th.textSecondary};line-height:1.6">\uD83D\uDD12 Sign in with Google or Discord to save your progress and access your collection across all your devices.</p>
            <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:12px;${isMobile ? "justify-content:center" : ""}">
              ${["National Dex","Shiny Dex","Event Dex","Lucky Dex","Shadow","Purified","Hundos","Trade Tracking"].map(tag =>
                `<span style="font-size:10px;font-weight:700;color:${th.textMuted};background:${th.accentBgSubtle("#2ECC71")};border:1px solid ${th.countdownBorder("#2ECC71")};padding:3px 10px;border-radius:20px">${tag}</span>`
              ).join("")}
            </div>
            <div style="margin-top:14px;display:inline-flex;align-items:center;gap:6px;font-size:13px;font-weight:600;color:#2ECC71">Visit godex.site \u2192</div>
          </div>
        </a>
        <div style="display:flex;${isMobile ? "flex-direction:column" : "flex-direction:row;align-items:center"};gap:${isMobile ? 16 : 20}px;padding:${isMobile ? "20px 18px" : "24px 28px"};background:${th.surface};border:1.5px solid ${th.border};border-radius:${isMobile ? 18 : 20}px;transition:all 0.25s ease;box-shadow:${th.shadow}" onmouseenter="this.style.borderColor='#3498DB';this.style.transform='translateY(-3px)';this.style.boxShadow='0 8px 25px rgba(52,152,219,0.15)'" onmouseleave="this.style.borderColor='${th.border}';this.style.transform='translateY(0)';this.style.boxShadow='${th.shadow}'">
          <div style="width:${isMobile ? "100%" : "80px"};display:flex;${isMobile ? "justify-content:center" : "justify-content:center;flex-shrink:0"}">
            <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/33/3c/86/333c86bf-3564-63d9-06e6-8f6b73687377/AppIcon-0-0-1x_U007emarketing-0-5-85-220.png/512x512bb.jpg" style="width:${isMobile ? 64 : 72}px;height:${isMobile ? 64 : 72}px;border-radius:18px;object-fit:contain" alt="Poke Genie" />
          </div>
          <div style="flex:1;${isMobile ? "text-align:center" : ""}">
            <div style="display:flex;align-items:center;gap:8px;${isMobile ? "justify-content:center" : ""}">
              <h3 style="margin:0;font-size:${isMobile ? 18 : 22}px;font-weight:800;color:${th.text}">Poke Genie</h3>
              <span style="font-size:10px;font-weight:700;color:#3498DB;background:${th.accentBg("#3498DB")};padding:2px 8px;border-radius:20px">FREE</span>
            </div>
            <p style="margin:8px 0 0 0;font-size:${isMobile ? 13 : 14}px;color:${th.textSecondary};line-height:1.6">The ultimate companion app for Pok\u00E9mon GO. IV checker, raid host & join, PvP rankings, battle simulator, and more \u2014 all from your phone.</p>
            <p style="margin:10px 0 0 0;font-size:${isMobile ? 13 : 14}px;color:${th.textSecondary};line-height:1.6">Scan your Pok\u00E9mon to instantly check IVs, find the best PvP and raid attackers, and join remote raids with trainers worldwide through the built-in raid lobby system.</p>
            <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:12px;${isMobile ? "justify-content:center" : ""}">
              ${["IV Checker","Raid Hosting","PvP Rankings","Battle Simulator","Remote Raids","Pok\u00E9dex"].map(tag =>
                `<span style="font-size:10px;font-weight:700;color:${th.textMuted};background:${th.accentBgSubtle("#3498DB")};border:1px solid ${th.countdownBorder("#3498DB")};padding:3px 10px;border-radius:20px">${tag}</span>`
              ).join("")}
            </div>
            <div style="display:flex;gap:12px;margin-top:14px;${isMobile ? "justify-content:center" : ""}">
              <a href="https://pokegenie.net" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:6px;font-size:13px;font-weight:600;color:#3498DB;text-decoration:none">Visit pokegenie.net \u2192</a>
              <a href="https://apps.apple.com/us/app/poke-genie-remote-raid-iv-pvp/id1143920524" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:6px;font-size:13px;font-weight:600;color:#3498DB;text-decoration:none">App Store \u2192</a>
              <a href="https://play.google.com/store/apps/details?id=com.cjin.pokegenie.standard" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:6px;font-size:13px;font-weight:600;color:#3498DB;text-decoration:none">Google Play \u2192</a>
            </div>
          </div>
        </div>
      </div>`;
    }

    let pokedexTabHTML = "";
    if (state.tab === "pokedex") {
      const gridCols = isMobile ? "repeat(auto-fill,minmax(80px,1fr))" : "repeat(auto-fill,minmax(110px,1fr))";
      const imgSize = isMobile ? 60 : 80;
      const regionsHTML = REGIONS.map((r, idx) => {
        let cards = "";
        for (let d = r.start; d <= r.end; d++) {
          const name = DEX_BY_NUM[d];
          if (!name) continue;
          const suffix = GENDER_SUFFIX[d] || "";
          const imgSrc = natDexImg(d, suffix);
          cards += `<div onclick="openPokemonDetail(${d})" style="display:flex;flex-direction:column;align-items:center;gap:4px;padding:8px 4px;cursor:pointer;border-radius:12px;transition:background 0.15s ease" onmouseenter="this.style.background='${th.surfaceHover}'" onmouseleave="this.style.background='transparent'">
            <img src="${imgSrc}" style="width:${imgSize}px;height:${imgSize}px;object-fit:contain" onerror="this.style.opacity='0.2'" loading="lazy" />
            <span style="font-size:${isMobile ? 9 : 11}px;font-weight:600;color:${th.textSecondary};text-align:center;line-height:1.2">#${d} ${esc(name)}</span>
          </div>`;
        }
        const regionId = `dex-region-${idx}`;
        const isFirst = idx === 0;
        return `<div style="background:${th.surface};border:1.5px solid ${th.border};border-radius:${isMobile ? 16 : 18}px;box-shadow:${th.shadow}">
          <button class="dex-toggle" onclick="toggleDexRegion('${regionId}')" style="width:100%;padding:${isMobile ? "14px 16px" : "16px 20px"};background:none;border:none;cursor:pointer;display:flex;align-items:center;justify-content:space-between;font-family:inherit;box-sizing:border-box">
            <span class="dex-toggle" style="font-size:${isMobile ? 16 : 18}px;font-weight:800;color:${th.text}">${r.label}</span>
            <span class="dex-toggle" id="${regionId}-arrow" style="font-size:14px;color:${th.textMuted};transition:transform 0.3s ease !important;display:inline-block;transform:rotate(${isFirst ? "0" : "-90"}deg);flex-shrink:0">\u25BC</span>
          </button>
          <div id="${regionId}" data-open="${isFirst ? "true" : "false"}" style="display:${isFirst ? "grid" : "none"};grid-template-columns:${gridCols};gap:${isMobile ? 4 : 8}px;padding:${isMobile ? "8px 10px 14px" : "8px 16px 18px"}">
            ${cards}
          </div>
        </div>`;
      }).join("");
      if (state.pokedexDetail) {
        const detailData = state.pokedexDetailData;
        const detailEvos = state.pokedexDetailEvolutions;
        pokedexTabHTML = renderPokemonDetail(detailData, detailEvos, th, isMobile);
      } else {
        pokedexTabHTML = `<div style="display:flex;flex-direction:column;gap:${isMobile ? 16 : 20}px">
          <div style="text-align:center;padding:10px">
            <img src="assets/pokemon-images/Items/Main1.webp" style="width:${isMobile ? 48 : 60}px;height:${isMobile ? 48 : 60}px;object-fit:contain;margin-bottom:6px" alt="PokeDex" />
            <h2 style="margin:0;font-size:${isMobile ? 20 : 26}px;font-weight:800;color:${th.text}">National Pok\u00E9Dex</h2>
            <p style="margin:6px 0 0 0;font-size:${isMobile ? 12 : 14}px;color:${th.textMuted};font-weight:500">All 1,025 Pok\u00E9mon sorted by region</p>
          </div>
          <div style="position:relative;max-width:400px;margin:0 auto">
            <input id="dex-search" placeholder="Search Pok\u00E9mon..." oninput="searchPokedex(this.value)" autocomplete="off" style="width:100%;padding:${isMobile ? "12px 14px 12px 40px" : "14px 16px 14px 44px"};border-radius:14px;border:1.5px solid ${th.border};background:${th.surface};color:${th.text};font-size:${isMobile ? 14 : 15}px;font-family:inherit;outline:none;box-sizing:border-box" />
            <span style="position:absolute;left:14px;top:50%;transform:translateY(-50%);font-size:18px;pointer-events:none">\uD83D\uDD0D</span>
            <div id="dex-search-results" style="display:none;position:absolute;top:100%;left:0;right:0;max-height:300px;overflow-y:auto;background:${th.surface};border:1.5px solid ${th.border};border-radius:12px;margin-top:4px;z-index:100;box-shadow:0 8px 24px rgba(0,0,0,0.2)"></div>
          </div>
          ${regionsHTML}
        </div>`;
      }
    }

    let nestsTabHTML = "";
    if (state.tab === "nests") {
      const nests = loadNests();
      const inputStyle = `width:100%;padding:${isMobile ? "12px 14px" : "14px 16px"};border-radius:12px;border:1.5px solid ${th.border};background:${th.bg};color:${th.text};font-size:${isMobile ? 14 : 15}px;font-family:inherit;outline:none;box-sizing:border-box`;
      nestsTabHTML = `<div style="display:flex;flex-direction:column;gap:${isMobile ? 16 : 20}px">
        <div style="text-align:center;padding:10px">
          <img src="assets/pokemon-images/icons/ic_grass.png" style="width:${isMobile ? 48 : 60}px;height:${isMobile ? 48 : 60}px;object-fit:contain;margin-bottom:6px" alt="Nests" />
          <h2 style="margin:0;font-size:${isMobile ? 20 : 26}px;font-weight:800;color:${th.text}">Nests</h2>
          <p style="margin:6px 0 0 0;font-size:${isMobile ? 12 : 14}px;color:${th.textMuted};font-weight:500">Track and report local Pok\u00E9mon nests in your area</p>
        </div>
        <div style="padding:${isMobile ? "14px 16px" : "16px 20px"};background:${th.accentBgSubtle("#2ECC71")};border:1.5px solid ${th.countdownBorder("#2ECC71")};border-radius:${isMobile ? 14 : 16}px;text-align:center">
          <div style="font-size:${isMobile ? 11 : 12}px;font-weight:700;color:#2ECC71;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:6px">\uD83D\uDD04 Next Nest Migration</div>
          <div id="nest-migration-countdown" style="font-size:${isMobile ? 18 : 22}px;font-weight:800;color:${th.text};font-variant-numeric:tabular-nums">${renderNestCountdown()}</div>
        </div>
        <div style="padding:${isMobile ? "20px 18px" : "24px 28px"};background:${th.surface};border:1.5px solid ${th.border};border-radius:${isMobile ? 18 : 20}px;box-shadow:${th.shadow}">
          <h3 style="margin:0 0 12px 0;font-size:${isMobile ? 16 : 18}px;font-weight:800;color:${th.text}">\uD83D\uDCD6 How Nests Work</h3>
          <p style="margin:0 0 10px 0;font-size:${isMobile ? 13 : 14}px;color:${th.textSecondary};line-height:1.6">In Pok\u00E9mon GO, <strong style="color:${th.text}">nests</strong> are real-world locations \u2014 typically parks, playgrounds, and landmarks \u2014 where a specific Pok\u00E9mon species spawns more frequently than usual.</p>
          <p style="margin:0 0 10px 0;font-size:${isMobile ? 13 : 14}px;color:${th.textSecondary};line-height:1.6"><strong style="color:${th.text}">Nest migrations</strong> happen every two weeks (typically on Thursdays at 00:00 UTC). When a migration occurs, every nest worldwide shifts to a different Pok\u00E9mon species.</p>
          <p style="margin:0 0 10px 0;font-size:${isMobile ? 13 : 14}px;color:${th.textSecondary};line-height:1.6"><strong style="color:${th.text}">Tips for finding nests:</strong></p>
          <ul style="margin:0;padding-left:20px;font-size:${isMobile ? 13 : 14}px;color:${th.textSecondary};line-height:1.8">
            <li>Look for areas with multiple Pok\u00E9Stops and green patches on the in-game map</li>
            <li>Visit the same park multiple times \u2014 if the same species keeps appearing, it\u2019s likely a nest</li>
            <li>Nests typically spawn 1\u20133 species at higher-than-normal rates</li>
            <li>Events can temporarily override nest spawns</li>
            <li>Not all Pok\u00E9mon can be nest species \u2014 legendaries, babies, and rare spawns are excluded</li>
          </ul>
        </div>
        <div style="padding:${isMobile ? "20px 18px" : "24px 28px"};background:${th.surface};border:1.5px solid ${th.border};border-radius:${isMobile ? 18 : 20}px;box-shadow:${th.shadow}">
          <h3 style="margin:0 0 16px 0;font-size:${isMobile ? 16 : 18}px;font-weight:800;color:${th.text}">\u2795 Report a Nest</h3>
          <div style="display:flex;flex-direction:column;gap:12px">
            <div style="position:relative">
              <input id="nest-pokemon" placeholder="Pok\u00E9mon species (e.g. Magikarp)" style="${inputStyle}" oninput="onPokemonInput(event)" autocomplete="off" />
              <div id="nest-pokemon-dropdown" style="display:none;position:absolute;top:100%;left:0;right:0;max-height:240px;overflow-y:auto;background:${th.surface};border:1.5px solid ${th.border};border-radius:12px;margin-top:4px;z-index:100;box-shadow:0 8px 24px rgba(0,0,0,0.2)"></div>
            </div>
            <input id="nest-location" placeholder="Location name or address (e.g. Central Park)" style="${inputStyle}" />
            <button id="nest-gps-btn" onclick="useMyLocation()" style="padding:${isMobile ? "10px" : "12px"};border-radius:12px;border:1.5px solid ${th.border};background:${th.surface};color:${th.text};font-size:${isMobile ? 13 : 14}px;font-weight:600;cursor:pointer;font-family:inherit;transition:all 0.2s ease" onmouseenter="this.style.background='${th.surfaceHover}'" onmouseleave="this.style.background='${th.surface}'">\uD83D\uDCCD Use My Current Location</button>
            <button onclick="addNest()" style="padding:${isMobile ? "12px" : "14px"};border-radius:12px;border:none;background:#2ECC71;color:#fff;font-size:${isMobile ? 14 : 15}px;font-weight:700;cursor:pointer;font-family:inherit;transition:all 0.2s ease" onmouseenter="this.style.background='#27AE60';this.style.transform='translateY(-1px)'" onmouseleave="this.style.background='#2ECC71';this.style.transform='translateY(0)'">Report Nest</button>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;gap:${isMobile ? 10 : 12}px">
          <h3 style="margin:0;font-size:${isMobile ? 16 : 18}px;font-weight:800;color:${th.text}">\uD83D\uDCCD Reported Nests${nests.length ? ` (${nests.length})` : ""}</h3>
          ${nests.length === 0 ? `<div style="padding:${isMobile ? "30px 18px" : "40px 28px"};background:${th.surface};border:1.5px solid ${th.border};border-radius:${isMobile ? 18 : 20}px;text-align:center;box-shadow:${th.shadow}">
            <div style="font-size:36px;margin-bottom:12px">\uD83C\uDFDE\uFE0F</div>
            <p style="margin:0;font-size:${isMobile ? 13 : 14}px;color:${th.textMuted}">No nests reported yet. Be the first to report one!</p>
          </div>` : nests.map(n => {
            const img = getPokemonImg(n.pokemon);
            const isOwner = n.reporter_id === getReporterId();
            const hasCoords = n.lat != null && n.lng != null;
            const mapUrl = hasCoords ? `https://www.openstreetmap.org/?mlat=${n.lat}&mlon=${n.lng}#map=16/${n.lat}/${n.lng}` : null;
            const bbox = hasCoords ? `${n.lng-0.008},${n.lat-0.004},${n.lng+0.008},${n.lat+0.004}` : null;
            return `<div style="padding:${isMobile ? "14px 16px" : "16px 20px"};background:${th.surface};border:1.5px solid ${th.border};border-radius:16px;box-shadow:${th.shadow}">
              <div style="display:flex;align-items:center;gap:${isMobile ? 12 : 16}px">
                <div style="width:${isMobile ? 90 : 100}px;height:${isMobile ? 90 : 100}px;border-radius:20px;background:${th.accentBgSubtle("#2ECC71")};display:flex;align-items:center;justify-content:center;flex-shrink:0">${img ? `<img src="${esc(img.url)}" style="width:${isMobile ? 74 : 84}px;height:${isMobile ? 74 : 84}px;object-fit:contain" alt="${esc(n.pokemon)}" onerror="this.style.display='none';this.parentElement.innerHTML='\\uD83C\\uDF33'" />` : `<span style="font-size:${isMobile ? 38 : 44}px">\uD83C\uDF33</span>`}</div>
                <div style="flex:1;min-width:0">
                  <div style="font-size:${isMobile ? 14 : 16}px;font-weight:700;color:${th.text}">${esc(n.pokemon)}</div>
                  <div style="font-size:${isMobile ? 13 : 14}px;color:${th.textSecondary};margin-top:3px">\uD83D\uDCCD ${esc(n.location)}</div>
                  <div style="font-size:${isMobile ? 11 : 12}px;color:${th.textMuted};margin-top:2px">Reported ${n.date_reported}</div>
                </div>
                ${isOwner ? `<button onclick="removeNest(${n.id})" style="width:32px;height:32px;border-radius:8px;border:1.5px solid ${th.border};background:${th.surface};color:${th.textMuted};font-size:14px;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all 0.15s ease" onmouseenter="this.style.borderColor='#E74C3C';this.style.color='#E74C3C'" onmouseleave="this.style.borderColor='${th.border}';this.style.color='${th.textMuted}'">\u2715</button>` : ""}
              </div>
              ${hasCoords ? `<div style="margin-top:12px;border-radius:12px;overflow:hidden;border:1.5px solid ${th.border}">
                <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${n.lat},${n.lng}" style="width:100%;height:${isMobile ? 140 : 160}px;border:none;display:block"></iframe>
                <a href="${mapUrl}" target="_blank" rel="noopener noreferrer" style="display:flex;align-items:center;justify-content:space-between;padding:8px 12px;background:${th.surface};text-decoration:none;transition:background 0.15s ease" onmouseenter="this.style.background='${th.surfaceHover}'" onmouseleave="this.style.background='${th.surface}'">
                  <span style="font-size:${isMobile ? 11 : 12}px;font-weight:600;color:${th.textMuted}">Open in Maps</span>
                  <span style="font-size:12px;color:#2ECC71">\u2192</span>
                </a>
              </div>` : ""}
            </div>`;
          }).join("")}
        </div>
      </div>`;
    }

    const welcomeHTML = state.tab === "home" ? `<div style="border-radius:${isMobile ? 18 : 24}px;padding:${isMobile ? "24px 18px" : "32px 28px"};background:linear-gradient(135deg,${th.heroBg("#E74C3C")},${th.heroBg("#F39C12")});border:1.5px solid ${th.border};overflow:hidden;position:relative;animation:fadeSlideUp 0.5s cubic-bezier(0.25,0.46,0.45,0.94)">
        <div style="display:flex;flex-direction:column;align-items:center;text-align:center;margin-bottom:${isMobile ? 14 : 18}px">
          <img src="assets/trainerwire-logo.PNG" style="width:${isMobile ? 278 : 327}px;height:${isMobile ? 278 : 327}px;object-fit:contain;margin-top:${isMobile ? -40 : -50}px" alt="TrainerWire" />
          <h2 style="margin:-52px 0 0 0;font-size:${isMobile ? 18 : 24}px;font-weight:800;color:${th.text};line-height:1.2">Welcome to TrainerWire</h2>
          <p style="margin:4px 0 0 0;font-size:${isMobile ? 12 : 14}px;color:${th.textMuted};font-weight:500">Your one-stop hub for everything Pok\u00E9mon GO</p>
        </div>
        <p style="margin:${isMobile ? 30 : 40}px 0 ${isMobile ? 14 : 18}px 0;font-size:${isMobile ? 13 : 14.5}px;color:${th.textSecondary};line-height:1.65;${isMobile ? "text-align:center" : ""}">Stay up to date with live Events, Raid Bosses, Max Battles, Community Days, and GO Fest updates \u2014 all in one place.</p>
        <div style="display:grid;grid-template-columns:repeat(${isMobile ? 2 : 4},1fr);gap:${isMobile ? 8 : 10}px">
          <button onclick="setTab('events')" style="display:flex;flex-direction:column;align-items:center;gap:6px;padding:${isMobile ? "12px 8px" : "14px 10px"};border-radius:14px;background:${th.surface};border:1.5px solid ${th.border};cursor:pointer;font-family:inherit;transition:all 0.2s ease" onmouseenter="this.style.transform='translateY(-2px)';this.style.boxShadow='0 6px 16px rgba(0,0,0,0.1)'" onmouseleave="this.style.transform='translateY(0)';this.style.boxShadow='none'">
            <span style="font-size:${isMobile ? 22 : 28}px">\uD83D\uDCC5</span>
            <span style="font-size:${isMobile ? 11 : 12}px;font-weight:700;color:${th.text}">Events</span>
            <span style="font-size:${isMobile ? 9 : 10}px;color:${th.textMuted};text-align:center">Live & upcoming events</span>
          </button>
          <button onclick="setTab('raids')" style="display:flex;flex-direction:column;align-items:center;gap:6px;padding:${isMobile ? "12px 8px" : "14px 10px"};border-radius:14px;background:${th.surface};border:1.5px solid ${th.border};cursor:pointer;font-family:inherit;transition:all 0.2s ease" onmouseenter="this.style.transform='translateY(-2px)';this.style.boxShadow='0 6px 16px rgba(0,0,0,0.1)'" onmouseleave="this.style.transform='translateY(0)';this.style.boxShadow='none'">
            <span style="font-size:${isMobile ? 22 : 28}px">\u2694\uFE0F</span>
            <span style="font-size:${isMobile ? 11 : 12}px;font-weight:700;color:${th.text}">Raids</span>
            <span style="font-size:${isMobile ? 9 : 10}px;color:${th.textMuted};text-align:center">Current raid bosses</span>
          </button>
          <button onclick="setTab('max')" style="display:flex;flex-direction:column;align-items:center;gap:6px;padding:${isMobile ? "12px 8px" : "14px 10px"};border-radius:14px;background:${th.surface};border:1.5px solid ${th.border};cursor:pointer;font-family:inherit;transition:all 0.2s ease" onmouseenter="this.style.transform='translateY(-2px)';this.style.boxShadow='0 6px 16px rgba(0,0,0,0.1)'" onmouseleave="this.style.transform='translateY(0)';this.style.boxShadow='none'">
            <span style="font-size:${isMobile ? 22 : 28}px">\uD83D\uDCA5</span>
            <span style="font-size:${isMobile ? 11 : 12}px;font-weight:700;color:${th.text}">Max Battles</span>
            <span style="font-size:${isMobile ? 9 : 10}px;color:${th.textMuted};text-align:center">Dynamax & Gigantamax</span>
          </button>
          <button onclick="setTab('news')" style="display:flex;flex-direction:column;align-items:center;gap:6px;padding:${isMobile ? "12px 8px" : "14px 10px"};border-radius:14px;background:${th.surface};border:1.5px solid ${th.border};cursor:pointer;font-family:inherit;transition:all 0.2s ease" onmouseenter="this.style.transform='translateY(-2px)';this.style.boxShadow='0 6px 16px rgba(0,0,0,0.1)'" onmouseleave="this.style.transform='translateY(0)';this.style.boxShadow='none'">
            <span style="font-size:${isMobile ? 22 : 28}px">\uD83D\uDCE2</span>
            <span style="font-size:${isMobile ? 11 : 12}px;font-weight:700;color:${th.text}">News</span>
            <span style="font-size:${isMobile ? 9 : 10}px;color:${th.textMuted};text-align:center">Updates & announcements</span>
          </button>
        </div>
      </div>` : "";

    content = `<main style="padding:${mainPad};display:flex;flex-direction:column;gap:${isMobile ? 16 : 20}px">
      ${welcomeHTML}${!["home","tools","nests","pokedex"].includes(state.tab) ? `${liveHTML}${heroHTML}${tabsHTML}` : ""}${state.tab === "home" ? `${liveHTML}${heroHTML}${tabsHTML}` : ""}${eventsTabHTML}${calendarTabHTML}${raidsTabHTML}${maxTabHTML}${newsTabHTML}${pokedexTabHTML}${toolsTabHTML}${nestsTabHTML}
    </main>`;
    if (hero || activeEvents.length > 0) state.heroRendered = true;
  }

  // Header
  const headerHTML = `<header style="padding:${isMobile ? "14px 18px" : "16px 32px"};border-bottom:1.5px solid ${th.border};background:${th.headerBg};backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);position:sticky;top:0;z-index:100;width:100%;display:flex;align-items:center;justify-content:space-between">
    <div style="display:flex;align-items:center;gap:${isMobile ? 6 : 14}px">
    ${breakpoint !== "desktop" ? `<button onclick="toggleSidebar()" style="background:none;border:none;cursor:pointer;padding:6px;display:flex;align-items:center;justify-content:center"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="${th.text}" stroke-width="2.5" stroke-linecap="round"><path d="M3 6h18"/><path d="M3 12h18"/><path d="M3 18h18"/></svg></button>` : ""}
    <div onclick="goHome()" style="cursor:pointer;display:flex;align-items:center;gap:${isMobile ? 10 : 14}px">
      <img src="assets/trainerwire-logo.PNG" style="width:${isMobile ? 80 : 95}px;height:${isMobile ? 80 : 95}px;object-fit:contain;margin:-20px 0" alt="TrainerWire" />
      <div><div style="font-size:${isMobile ? 16 : 20}px;font-weight:800;color:${th.text};letter-spacing:-0.3px;line-height:1.2">${COMMUNITY_NAME}</div>
      <div style="font-size:${isMobile ? 10 : 12}px;color:${th.textMuted};font-weight:500;letter-spacing:0.2px">${COMMUNITY_TAGLINE}</div></div>
    </div></div>
    ${isDesktop ? `<nav style="display:flex;align-items:center;gap:4px">
      ${[["goHome()","Home"],["setTab('events')","Events"],["setTab('calendar')","Calendar"],["setTab('raids')","Raids"],["setTab('max')","Max Battles"],["setTab('news')","News"],["setTab('pokedex')","Pok\u00E9Dex"],["setTab('nests')","Nests"],["setTab('tools')","PoGO Tools"]].map(([fn, label]) => {
        const tabMap = {"Home":"home","Events":"events","Calendar":"calendar","Raids":"raids","Max Battles":"max","News":"news","Pok\u00E9Dex":"pokedex","Nests":"nests","PoGO Tools":"tools"};
        const isActive = state.tab === tabMap[label];
        return `<button onclick="${fn || ''}" style="padding:7px 14px;border-radius:10px;border:${isActive ? "1.5px solid #E74C3C" : "1.5px solid transparent"};background:${isActive ? th.accentBg("#E74C3C") : "transparent"};color:${isActive ? "#E74C3C" : th.text};font-size:13px;font-weight:${isActive ? "700" : "600"};cursor:pointer;font-family:inherit;transition:all 0.15s ease;white-space:nowrap" onmouseenter="this.style.background='${isActive ? th.accentBg("#E74C3C") : th.surfaceHover}'" onmouseleave="this.style.background='${isActive ? th.accentBg("#E74C3C") : "transparent"}'">${label}</button>`;
      }
      ).join("")}
    </nav>` : ""}
    <button id="theme-toggle" onclick="toggleDarkMode()" style="background:${darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.06)"};border:1.5px solid ${th.border};border-radius:50%;width:${isMobile ? 36 : 40}px;height:${isMobile ? 36 : 40}px;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:${isMobile ? 18 : 20}px;transition:all 0.4s cubic-bezier(0.25,0.46,0.45,0.94);flex-shrink:0"
      onmouseenter="this.style.transform='scale(1.12)';this.style.boxShadow='0 4px 15px ${darkMode ? "rgba(255,200,50,0.2)" : "rgba(0,0,0,0.15)"}';"
      onmouseleave="this.style.transform='scale(1)';this.style.boxShadow='none';">${darkMode ? "\u2600\uFE0F" : "\uD83C\uDF19"}</button>
  </header>`;

  const tickerText = "\u26A1 GO Fest 2026: Global \u2014 Newton, NC \u00B7 Southside Park \u00B7 July 11\u201312, 2026 \u00B7 Time TBA \u00B7 Join your local trainers for a weekend full of raids, shiny hunting & community fun! Stay tuned for more details!";
  const tickerContent = `${tickerText} \u00A0\u00A0\u00A0\u2728\u00A0\u00A0\u00A0 ${tickerText} \u00A0\u00A0\u00A0\u2728\u00A0\u00A0\u00A0 `;
  const tickerHTML = `<div style="overflow:hidden;white-space:nowrap;background:linear-gradient(90deg,#E74C3C,#F39C12);width:100%;position:relative">
    <div style="display:inline-block;animation:tickerScroll 60s linear infinite;padding:7px 0;font-size:${isMobile ? 11 : 13}px;font-weight:600;color:#fff;letter-spacing:0.3px">${tickerContent}${tickerContent}</div>
  </div>`;

  const footerHTML = `<footer style="text-align:center;padding:${isMobile ? "20px 16px" : "28px 24px"};font-size:${isMobile ? 11 : 12}px;color:${th.textFaint};font-weight:500;border-top:1px solid ${th.footerBorder}">
    ${COMMUNITY_NAME} \u00B7 Not affiliated with Niantic, The Pok\u00E9mon Company, or Nintendo
  </footer>`;

  const scrollTopBtn = `<button id="scroll-top-btn" onclick="window.scrollTo({top:0,behavior:'smooth'})" style="position:fixed;bottom:${isMobile ? 20 : 28}px;right:${isMobile ? 16 : 28}px;width:${isMobile ? 44 : 48}px;height:${isMobile ? 44 : 48}px;border-radius:50%;background:linear-gradient(135deg,#E74C3C,#F39C12);border:none;box-shadow:0 4px 18px rgba(231,76,60,0.35);cursor:pointer;display:none;align-items:center;justify-content:center;z-index:200;transition:opacity 0.4s cubic-bezier(0.25,0.46,0.45,0.94),transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94);font-family:inherit;opacity:0;transform:translateY(20px) scale(0.8)" onmouseenter="this.style.transform='scale(1.1)';this.style.boxShadow='0 6px 24px rgba(231,76,60,0.5)'" onmouseleave="this.style.transform='scale(1)';this.style.boxShadow='0 4px 18px rgba(231,76,60,0.35)'"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5"/><path d="M5 12l7-7 7 7"/></svg></button>`;

  const sidebarHTML = renderSidebar(th);

  document.getElementById("app").innerHTML = `${sidebarHTML}<div style="min-height:100vh;display:flex;flex-direction:column;background:${th.bg};font-family:'Outfit','DM Sans',-apple-system,BlinkMacSystemFont,sans-serif;color:${th.text};width:100%">
    ${headerHTML}${tickerHTML}<div style="flex:1">${content}</div>${footerHTML}
  </div>${scrollTopBtn}`;
}

// --- COUNTDOWN TICK ---
setInterval(() => {
  const th = t(darkMode);
  // Update countdowns in place
  document.querySelectorAll(".countdown").forEach(el => {
    const dateStr = el.dataset.date;
    const color = el.dataset.color;
    const over = el.dataset.over === "true";
    const eventId = el.dataset.eventId ? parseInt(el.dataset.eventId) : null;
    const ev = eventId ? EVENTS.find(e => e.id === eventId) : null;
    el.innerHTML = renderCountdown(dateStr, color, over, th, ev);
  });
  // Update nest migration countdown & check for migration reset
  const nestEl = document.getElementById("nest-migration-countdown");
  if (nestEl) nestEl.innerHTML = renderNestCountdown();
  checkNestMigration();
  // Update move deadline banners
  document.querySelectorAll(".move-deadline").forEach(el => {
    const eventId = parseInt(el.dataset.eventId);
    const event = EVENTS.find(e => e.id === eventId);
    if (event) el.innerHTML = renderMoveDeadlineBanner(event, th);
  });
}, 1000);

// Scroll-to-top button visibility
window.addEventListener("scroll", () => {
  const btn = document.getElementById("scroll-top-btn");
  if (btn) {
    if (window.scrollY > 300) {
      btn.style.display = "flex";
      void btn.offsetHeight;
      btn.style.opacity = "1";
      btn.style.transform = "translateY(0) scale(1)";
    } else {
      btn.style.opacity = "0";
      btn.style.transform = "translateY(20px) scale(0.8)";
      setTimeout(() => { if (window.scrollY <= 300 && btn) btn.style.display = "none"; }, 400);
    }
  }
});

// --- SIDEBAR ---
let sidebarOpen = false;
function toggleSidebar() {
  sidebarOpen = !sidebarOpen;
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebar-overlay");
  if (sidebarOpen) {
    sidebar.style.transform = "translateX(0)";
    overlay.style.opacity = "1";
    overlay.style.pointerEvents = "auto";
  } else {
    sidebar.style.transform = "translateX(-100%)";
    overlay.style.opacity = "0";
    overlay.style.pointerEvents = "none";
  }
}
function closeSidebar() {
  if (sidebarOpen) toggleSidebar();
}
function sidebarNav(tab) {
  closeSidebar();
  if (tab === "home") { goHome(); return; }
  state.selectedEvent = null;
  state.selectedNews = null;
  state.tab = tab;
  render();
  window.scrollTo(0, 0);
}

function renderSidebar(th) {
  if (breakpoint === "desktop") return "";
  const tabs = [
    { id: "home", icon: "\uD83C\uDFE0", label: "Home" },
    { id: "events", icon: "\uD83D\uDCC5", label: "Events" },
    { id: "calendar", icon: "\uD83D\uDDD3\uFE0F", label: "Calendar" },
    { id: "raids", icon: "\u2694\uFE0F", label: "Raids" },
    { id: "max", icon: "\uD83D\uDCA5", label: "Max Battles" },
    { id: "news", icon: "\uD83D\uDCE2", label: "News" },
    { id: "pokedex", icon: "\uD83D\uDCD6", iconImg: "assets/pokemon-images/Items/Main1.webp", label: "Pok\u00E9Dex" },
    { id: "nests", icon: "\uD83C\uDF33", iconImg: "assets/pokemon-images/icons/ic_grass.png", label: "Nests" },
    { id: "tools", icon: "\uD83D\uDEE0\uFE0F", label: "PoGO Tools" }
  ];
  return `<div id="sidebar-overlay" onclick="closeSidebar()" style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);z-index:998;opacity:0;pointer-events:none;transition:opacity 0.3s ease"></div>
  <nav id="sidebar" style="position:fixed;top:0;left:0;width:260px;height:100%;background:${th.surface};border-right:1.5px solid ${th.border};z-index:999;transform:translateX(-100%);transition:transform 0.3s cubic-bezier(0.25,0.46,0.45,0.94);display:flex;flex-direction:column;overflow-y:auto">
    <div style="padding:24px 20px;border-bottom:1.5px solid ${th.border};display:flex;align-items:center;gap:12px">
      <img src="assets/trainerwire-logo.PNG" style="width:80px;height:80px;object-fit:contain" alt="TrainerWire" />
      <div>
        <div style="font-size:16px;font-weight:800;color:${th.text}">TrainerWire</div>
        <div style="font-size:10px;color:${th.textMuted};font-weight:500">Pok\u00E9mon GO Hub</div>
      </div>
    </div>
    <div style="padding:12px 8px;display:flex;flex-direction:column;gap:2px">
      ${tabs.map(t => `<button onclick="sidebarNav('${t.id}')" style="display:flex;align-items:center;gap:12px;padding:14px 16px;border-radius:12px;border:none;background:${state.tab === t.id ? th.accentBgSubtle("#E74C3C") : "transparent"};cursor:pointer;font-family:inherit;transition:background 0.15s ease;width:100%;text-align:left"
        onmouseenter="this.style.background='${th.surfaceHover}'"
        onmouseleave="this.style.background='${state.tab === t.id ? th.accentBgSubtle("#E74C3C") : "transparent"}'">
        ${t.iconImg ? `<img src="${t.iconImg}" style="width:28px;height:28px;object-fit:contain" alt="${t.label}" />` : `<span style="font-size:20px">${t.icon}</span>`}
        <span style="font-size:16px;font-weight:${state.tab === t.id ? "700" : "600"};color:${state.tab === t.id ? th.text : th.textSecondary}">${t.label}</span>
      </button>`).join("")}
    </div>
    <div style="margin-top:auto;padding:16px 20px;border-top:1.5px solid ${th.border}">
      <div style="font-size:11px;color:${th.textFaint};text-align:center">${COMMUNITY_NAME} \u00B7 v1.0</div>
    </div>
  </nav>`;
}

// --- SWIPE GESTURES ---
let touchStartX = 0;
let touchStartY = 0;
let touchStartTime = 0;

document.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
  touchStartTime = Date.now();
}, { passive: true });

document.addEventListener("touchend", (e) => {
  const touchEndX = e.changedTouches[0].clientX;
  const touchEndY = e.changedTouches[0].clientY;
  const deltaX = touchEndX - touchStartX;
  const deltaY = touchEndY - touchStartY;
  const elapsed = Date.now() - touchStartTime;

  // Must be a quick horizontal swipe (not a scroll)
  if (elapsed > 500 || Math.abs(deltaX) < 80 || Math.abs(deltaY) > Math.abs(deltaX) * 0.7) return;

  if (deltaX > 0) {
    // Swipe right — go back or open sidebar
    if (sidebarOpen) return;
    if (state.selectedEvent) { goBack(); }
    else if (state.selectedNews) { goBackNews(); }
    else if (touchStartX < 30) { toggleSidebar(); }
  } else {
    // Swipe left — close sidebar
    if (sidebarOpen) closeSidebar();
  }
}, { passive: true });

// Initial render
updateThemeColor();
loadNestsFromSupabase().then(() => render());
render();
