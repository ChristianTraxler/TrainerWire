// --- CONSTANTS ---
const COMMUNITY_NAME = "TrainerWire";
const COMMUNITY_TAGLINE = "Your Local Pokémon GO Event & News Center";
const APP_VERSION = "2.51";
const REPORT_EMAIL = "ssj4gogeta2004@gmail.com";

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
function shinyDexImg(dex, suffix) { return `${IMG_BASE}/National-Dex/shiny/${getGenFolder(dex)}/${dexPad(dex)}${suffix || ""}.webp`; }
function eventDexImg(dex, costume) { return `${IMG_BASE}/Event-Dex/regular/${getGenFolder(dex)}/${dexPad(dex)}_${costume}.webp`; }
function megaImg(dex, suffix) { return `${IMG_BASE}/Mega/regular/${getGenFolder(dex)}/${dexPad(dex)}_${suffix || "mega"}${GENDER_SUFFIX[dex] || ""}.webp`; }
function gmaxImg(dex) { return `${IMG_BASE}/Gigantamax/regular/Gen-8_Galar/${dexPad(dex)}_gigamax.webp`; }
const SHINY_DESC={1:"Body becomes a deeper, darker green",2:"Body deepens to darker green with yellow-green leaves",3:"Body turns deeper green with a yellow-orange flower",4:"Body turns golden yellow instead of orange",5:"Body turns golden yellow instead of dark red",6:"Body turns black with red-highlighted wings",7:"Shell lightens and body becomes pale green-blue",8:"Body becomes purple-tinted blue with a lighter shell",9:"Body becomes purple-tinted with a lighter shell",10:"Body turns golden yellow instead of green",11:"Shell turns orange-red instead of green",12:"Wings become pink-purple instead of white",13:"Body turns golden with a teal-colored nose",14:"Body becomes green instead of yellow",15:"Body becomes green with blue eyes",16:"Plumage shifts to a more golden-orange tone",17:"Plumage becomes more golden; subtle change",18:"Plumage shifts to golden-orange; subtle change",19:"Body turns green with a lighter belly",20:"Body becomes orange-brown with a lighter belly",21:"Body shifts to a golden-green tone",22:"Body becomes lighter green-gold overall",23:"Body turns green with golden bands",24:"Body becomes golden-yellow instead of purple",25:"Slightly darker, deeper yellow; very hard to spot",26:"Body becomes a darker orange-brown",27:"Body turns darker green instead of yellow",28:"Body turns brick red with darker spines",29:"Body shifts to a slightly more purple-pink tone",30:"Body becomes slightly more purple; subtle change",31:"Body changes from blue to olive green",32:"Body shifts to a deeper blue-purple tone",33:"Body becomes a deeper blue-purple shade",34:"Body turns blue instead of purple",35:"Ear tips turn green with a slightly pinker body",36:"Ear tips turn green with a slightly pinker body",37:"Fur becomes golden-yellow instead of reddish-brown",38:"Fur turns silver-gray with blue-tipped tails",39:"Eyes turn green; body color nearly unchanged",40:"Eyes turn green; body color nearly unchanged",41:"Body turns green instead of blue",42:"Body turns green with a pink mouth interior",43:"Body lightens and leaves turn golden",44:"Body becomes green with an orange flower",45:"Body turns green with an orange-pink flower",46:"Body deepens to darker orange with gold mushrooms",47:"Mushroom cap shifts to orange-red",48:"Body turns blue instead of purple",49:"Body turns blue-teal instead of purple",50:"Nose becomes blue; skin tone nearly unchanged",51:"Noses turn from brown to blue",52:"Body becomes a slightly paler gray-white",53:"Fur darkens to a deeper gray tone",54:"Body turns from yellow to blue",55:"Body turns darker blue with a lighter blue bill",56:"Body takes on a green tint instead of beige",57:"Body shifts to an olive-green tone",58:"Orange fur becomes a bright golden-yellow",59:"Fur deepens to a rich golden-yellow",60:"Body becomes lighter blue with a pink tint",61:"Body shifts from blue to a green-blue tone",62:"Body turns green instead of blue",63:"Body lightens to a pink-gold hue",64:"Body becomes a lighter pink tone",65:"Body shifts to a lighter pink color",66:"Body becomes a lighter green-gray",67:"Skin turns green instead of blue-gray",68:"Skin turns green instead of blue-gray",69:"Body becomes a deeper yellow-green",70:"Body shifts to a deeper yellow tone",71:"Body becomes a deeper yellow-orange",72:"Body turns purple instead of blue",73:"Body turns green instead of blue",74:"Body shifts from gray to golden-brown",75:"Body shifts from gray to golden-brown",76:"Body darkens with a golden rock shell",77:"Flames change from red-orange to blue",78:"Flames turn gray-silver and body becomes gray",79:"Body becomes a slightly deeper pink-purple",80:"Body turns purple instead of pink",81:"Body gains a subtle gold tint",82:"Body gains a subtle gold tint",83:"Feathers become slightly more brown",84:"Body turns green instead of brown",85:"Body turns green instead of brown",86:"Body shifts to a subtle cream-white",87:"Body becomes a slightly more cream tone",88:"Body turns green instead of purple",89:"Body turns green instead of purple",90:"Shell changes from purple to orange",91:"Inner body turns blue-purple with a darker shell",92:"Surrounding gas shifts to a purple-blue hue",93:"Body becomes a darker blue-purple",94:"Body becomes very slightly darker gray-purple",95:"Body shifts from gray to green-yellow",96:"Body turns pink instead of yellow",97:"Body turns pink instead of yellow",98:"Body shifts from red to golden-green",99:"Body changes from red to green-gold",100:"Top and bottom color halves are subtly swapped",101:"Red and white color placement is slightly reversed",102:"Eggs turn golden-yellow instead of white-pink",103:"Leaves turn golden-yellow and body becomes lighter",104:"Body turns green instead of brown",105:"Body turns green instead of brown",106:"Body becomes olive-green instead of brown",107:"Body becomes olive-green instead of brown",108:"Body turns golden-yellow instead of pink",109:"Body becomes lighter teal-blue instead of purple",110:"Body becomes lighter teal-blue instead of purple",111:"Body turns red-orange instead of gray",112:"Body becomes gray-tan with an orange drill horn",113:"Body turns green with a lighter green egg pouch",114:"Vines become darker with a blue-green tint",115:"Body becomes olive-green instead of brown",116:"Body turns darker blue-purple instead of light blue",117:"Body becomes darker blue instead of light blue",118:"Body turns solid orange instead of red and white",119:"Body becomes orange instead of red and white",120:"Body turns white-cream with a blue center gem",121:"Body becomes blue-gray with a brighter core gem",122:"Pink skin turns green instead of pink",123:"Body becomes lighter yellow-green instead of dark green",124:"Body turns pink-purple instead of deep purple",125:"Body becomes slightly more orange than yellow",126:"Body turns pink-red instead of yellow-orange",127:"Body becomes blue-gray instead of brown",128:"Body becomes olive-green instead of brown",129:"Body turns golden instead of orange-red",130:"Body becomes red instead of blue",131:"Body turns purple instead of blue",132:"Body becomes blue instead of purple-pink",133:"Body turns silver-white instead of brown",134:"Body becomes purple instead of blue",135:"Body turns green instead of yellow",136:"Body becomes darker gold-brown instead of orange",137:"Body turns blue instead of pink-red",138:"Shell and body turn purple instead of blue",139:"Shell and body turn purple instead of blue",140:"Body turns green instead of brown",141:"Body becomes green instead of brown",142:"Body turns purple-pink instead of gray",143:"Body becomes darker navy-blue instead of teal",144:"Body becomes slightly lighter icy blue; very subtle",145:"Feet turn slightly darker orange; very subtle change",146:"Body becomes pinkish-rose instead of yellow-orange",147:"Body turns pink instead of blue",148:"Body turns pink instead of blue",149:"Body becomes green instead of orange",150:"Tail turns green-teal instead of purple",151:"Body becomes blue instead of pink",152:"Body turns slightly darker green with a golden leaf",153:"Body shifts to a golden-yellow hue",154:"Body becomes yellow; flower petals turn pink-orange",155:"Body darkens to a deeper brown shade",156:"Body becomes a darker brown-maroon color",157:"Body darkens to a deeper brown tone",158:"Body takes on a subtle green-teal tint",159:"Body shifts to a green-teal color",160:"Body becomes a noticeable teal-green",161:"Body lightens to a pale cream color",162:"Body turns pink-magenta instead of brown",163:"Body shifts to a warm golden-brown",164:"Body becomes a striking golden color",165:"Body turns golden-orange instead of red",166:"Body shifts to golden-orange",167:"Body turns blue instead of green",168:"Body becomes purple-pink instead of red",169:"Body turns pink instead of purple",170:"Body shifts to a purple-blue hue",171:"Body becomes purple instead of blue",172:"Ear tips darken slightly; body shade barely changes",173:"Ear tips turn green instead of brown",174:"Eyes turn green; body becomes slightly lighter",175:"Red and blue shell markings become lighter and muted",176:"Body takes on a slightly more cream tone",177:"Body shifts to a brighter green-yellow",178:"Body turns mostly green instead of red and green",179:"Wool and body turn pink instead of white and blue",180:"Body and wool become pink instead of pink and white",181:"Body turns pink instead of yellow",182:"Flower petals become purple instead of red-green",183:"Body turns green instead of blue",184:"Body becomes golden-yellow instead of blue",185:"Body shifts to a lighter green tone",186:"Body turns blue-teal instead of green",187:"Body becomes green instead of pink",188:"Body turns pink instead of green",189:"Body becomes pink instead of blue",190:"Body turns pink-magenta instead of purple",191:"Body shifts to a golden-brown shade",192:"Petals lighten; face takes on a slight orange tint",193:"Body turns blue instead of red-green",194:"Body becomes pink-magenta instead of blue",195:"Body shifts to purple-pink instead of blue",196:"Body turns green instead of lavender",197:"Ring markings become blue instead of yellow",198:"Body turns purple-pink instead of black",199:"Body becomes purple; ruff collar turns blue",200:"Body shifts to green-yellow instead of purple",201:"Body turns blue instead of black",202:"Body becomes pink-magenta instead of blue",203:"Body shifts to a slightly deeper golden-yellow",204:"Body turns a golden-green instead of gray-blue",205:"Body becomes golden instead of purple-gray",206:"Body lightens to a subtle cream shade",207:"Body turns blue instead of purple",208:"Body becomes golden instead of silver-gray",209:"Body shifts to golden-yellow instead of pink",210:"Body turns green-olive instead of purple",211:"Body becomes pink-magenta instead of teal",212:"Body turns green-golden instead of red",213:"Body becomes blue instead of yellow",214:"Body turns pink-magenta instead of blue",215:"Body becomes pink-magenta instead of dark blue",216:"Body turns green instead of brown",217:"Body shifts to green instead of brown",218:"Body becomes silver-gray instead of red-orange",219:"Shell turns purple; body becomes gray",220:"Body turns green instead of brown",221:"Body shifts to a golden-green hue",222:"Body becomes blue-purple instead of pink",223:"Body turns purple instead of gray-blue",224:"Body becomes golden-yellow instead of red",225:"Body turns purple instead of red",226:"Body shifts to a slightly deeper purple-blue",227:"Body becomes green-gold instead of silver",228:"Body turns blue-teal instead of black",229:"Body becomes blue-teal instead of black",230:"Body turns purple instead of blue",231:"Body becomes red-pink instead of blue",232:"Body shifts to golden-brown instead of gray",233:"Body turns blue instead of red-pink",234:"Body becomes a slightly lighter brown shade",235:"Ear tips and tail paint turn green",236:"Body shifts to purple-pink instead of tan",237:"Body turns green instead of brown-tan",238:"Body becomes a lighter purple shade",239:"Body takes on a subtle orange-gold tint",240:"Body shifts to a slightly deeper orange",241:"Body turns blue instead of pink",242:"Body becomes an even lighter pink with more white",243:"Body takes on a subtle orange-gold tint",244:"Body shifts to a subtle brown-gold tone",245:"Body turns blue-gray; crystal mane becomes lighter",246:"Body becomes a lighter purple shade",247:"Body shifts to purple-blue instead of green",248:"Body turns tan-desert colored instead of green",249:"Belly becomes pink-red instead of blue",250:"Body turns golden-silver instead of multicolored",251:"Body becomes pink instead of green",252:"Body becomes darker teal-green",253:"Body becomes darker green",254:"Body becomes darker green",255:"Body becomes lighter golden",256:"Body becomes lighter tan",257:"Body becomes darker red with cream accents",258:"Body becomes purple instead of blue",259:"Body becomes purple-orange",260:"Body becomes purple instead of blue",261:"Body becomes golden-blue",262:"Body becomes golden-brown",263:"Body becomes orange instead of brown",264:"Body becomes orange instead of brown",265:"Body becomes purple",266:"Body becomes orange-tinted",267:"Wings become purple and pink",268:"Body becomes orange-red",269:"Body becomes orange with golden wings",270:"Body becomes red-purple",271:"Body becomes orange-green",272:"Body becomes orange-red",273:"Body becomes red-brown",274:"Body becomes red",275:"Body becomes red",276:"Body becomes green",277:"Body becomes green with orange accents",278:"Beak becomes slightly different color",279:"Body becomes slightly green-tinted",280:"Markings become blue instead of red",281:"Markings become blue instead of red",282:"Markings become blue instead of red-orange",283:"Body becomes green",284:"Body becomes yellow-green",285:"Body becomes orange-red",286:"Body becomes orange-red",287:"Body becomes purple-pink",288:"Body becomes lighter cream",289:"Body becomes lighter gold",290:"Body becomes green-golden",291:"Body becomes darker with red eyes",292:"Body becomes darker brown",293:"Body becomes cream-colored",294:"Body becomes blue-gray",295:"Body becomes blue-gray",296:"Body becomes green-olive",297:"Body becomes red-orange",298:"Body becomes green instead of blue",299:"Body becomes orange-yellow",300:"Body becomes orange-golden",301:"Body becomes golden-orange",302:"Body becomes golden",303:"Body becomes purple",304:"Body becomes red-brown",305:"Body becomes green-red tinted",306:"Body becomes green-tinted",307:"Body becomes red-orange",308:"Body becomes blue",309:"Body becomes blue-teal",310:"Body becomes blue-gray",311:"Body becomes deeper red",312:"Body becomes green instead of blue",313:"Body becomes orange-gold",314:"Body becomes orange-gold",315:"Roses swap colors to blue and black",316:"Body becomes blue-teal",317:"Body becomes blue-purple",318:"Body becomes green",319:"Body becomes purple",320:"Body becomes purple-pink",321:"Body becomes purple-pink",322:"Body becomes golden-yellow",323:"Body becomes darker gray",324:"Body becomes golden-yellow",325:"Body becomes golden",326:"Body becomes golden",327:"Body becomes green",328:"Body becomes darker green",329:"Body becomes blue-teal",330:"Body becomes blue instead of green",331:"Body becomes darker green",332:"Body becomes darker green",333:"Body becomes golden-yellow",334:"Body becomes golden-yellow",335:"Markings become blue instead of red",336:"Markings become blue-gold",337:"Body becomes slightly blue-gray",338:"Body becomes red-orange",339:"Body becomes orange",340:"Body becomes orange-yellow",341:"Body becomes orange",342:"Body becomes orange",343:"Body becomes green",344:"Body becomes green",345:"Body becomes purple-pink",346:"Body becomes red-pink",347:"Body becomes golden-red",348:"Body becomes golden-red",349:"Body becomes purple",350:"Body becomes golden-cream",351:"Body becomes slightly lighter",352:"Body becomes purple instead of green",353:"Body becomes teal",354:"Body becomes blue-teal",355:"Body becomes red instead of gray",356:"Body becomes red",357:"Body becomes golden-brown",358:"Body becomes green-teal",359:"Body becomes red-crimson",360:"Body becomes purple-pink",361:"Body becomes blue-teal",362:"Body becomes blue-purple",363:"Body becomes pale yellow",364:"Body becomes pale cream",365:"Body becomes purple-blue",366:"Body becomes orange-gold",367:"Body becomes green-teal",368:"Body becomes golden-yellow",369:"Body becomes green-olive",370:"Body becomes golden-yellow",371:"Body becomes green",372:"Body becomes green",373:"Body becomes green",374:"Body becomes gold-silver",375:"Body becomes gold-silver",376:"Body becomes gold-silver",377:"Body becomes orange-brown",378:"Body becomes darker blue",379:"Body becomes green-blue",380:"Body becomes golden-orange",381:"Body becomes green-teal",382:"Body becomes purple-pink",383:"Body becomes golden-yellow",384:"Body becomes black",385:"Markings become red-orange",386:"Body becomes green-teal",387:"Shell turns blue-teal with a lighter green body",388:"Shell becomes blue with a lighter green body",389:"Tree turns golden-orange and shell becomes blue",390:"Body changes from orange to pink-magenta",391:"Body changes from reddish to pink-magenta",392:"Body turns pink with blue-tinted flames",393:"Body becomes a slightly lighter blue",394:"Body shifts to a lighter blue-teal tone",395:"Body becomes a slightly lighter blue",396:"Plumage shifts to a lighter brown tone",397:"Plumage shifts to a lighter brown tone",398:"Plumage shifts to a slightly lighter brown",399:"Body turns a rich golden-brown color",400:"Body shifts to a deeper golden-brown",401:"Body changes to golden-yellow",402:"Body changes to golden-yellow",403:"Blue fur becomes golden-yellow",404:"Blue fur becomes golden-yellow",405:"Blue-black fur becomes golden-yellow",406:"Body shifts to a purple-olive tone",407:"Roses swap to black and purple colors",408:"Body changes to a reddish-brown tone",409:"Body changes from blue to deep blue-purple",410:"Face shield becomes golden-yellow",411:"Face shield becomes golden-orange",412:"Cloak shifts to a slightly different shade",413:"Cloak shifts to a slightly different shade",414:"Wings become golden-orange instead of orange",415:"Body becomes slightly lighter yellow",416:"Body shifts to a brighter orange-gold",417:"White-blue fur becomes pink",418:"Orange body becomes a deeper golden-orange",419:"Orange body becomes a deeper golden-orange",420:"Body shifts to golden-purple tones",421:"Pink petals change to purple",422:"Body turns orange-gold (West) or purple (East)",423:"Body turns orange-gold (West) or blue (East)",424:"Purple body becomes pink-magenta",425:"Purple body becomes golden-yellow",426:"Purple body becomes golden-yellow",427:"Brown fur shifts to a pink-brown tone",428:"Brown fur changes to pink",429:"Purple body becomes golden-yellow",430:"Dark blue body shifts to purple-pink",431:"Gray body becomes pink-magenta",432:"Body shifts to a slightly lighter gray",433:"Body becomes a lighter golden tone",434:"Purple stripe becomes pink-toned",435:"Purple accents shift to pink-purple",436:"Green-blue body becomes green-teal",437:"Green-blue body becomes green-teal",438:"Brown body shifts to a lighter purple",439:"Body becomes a lighter cream tone",440:"Pink body becomes a lighter cream tone",441:"Head plumage becomes brighter yellow",442:"Purple aura changes to green-teal",443:"Blue body becomes golden-orange",444:"Blue body becomes golden-orange",445:"Body becomes very slightly darker",446:"Body becomes slightly lighter overall",447:"Blue-black body becomes golden-yellow",448:"Blue-black body becomes golden-yellow",449:"Brown body changes to green",450:"Brown-gray body changes to green",451:"Body shifts from purple to red-orange",452:"Purple body becomes red-pink",453:"Blue body changes to green-teal",454:"Blue body changes to blue-teal",455:"Green body becomes slightly darker",456:"Blue body becomes golden",457:"Blue body becomes golden",458:"Body shifts to a deeper purple-blue",459:"Body becomes lighter green with orange accents",460:"Body becomes a slightly lighter green",461:"Dark body becomes pink-magenta",462:"Body becomes very slightly darker",463:"Pink body becomes golden-yellow",464:"Gray body becomes golden-tan",465:"Blue vines replace the usual red-tipped green",466:"Yellow body becomes orange-golden",467:"Red body changes to pink",468:"Body shifts to a slightly warmer cream",469:"Red body becomes blue",470:"Green tones shift to darker autumn colors",471:"Body becomes a lighter icy blue",472:"Purple body becomes blue-teal",473:"Brown body changes to green",474:"Red-blue body becomes mostly blue",475:"Green accents change to blue",476:"Red nose and body become golden",477:"Gray-black body becomes blood red",478:"White body shifts to blue-gray",479:"Orange glow changes to orange-red plasma",480:"Yellow accents become golden overall",481:"Pink accents become golden overall",482:"Blue accents become golden overall",483:"Steel-blue body becomes green-teal",484:"Purple-pink body becomes golden-tan",485:"Red-orange body becomes brighter orange-gold",486:"Body accents shift to blue-teal",487:"Gray and gold body becomes blue-toned",488:"Purple-pink body becomes golden-orange",489:"Blue body shifts to a subtle purple",490:"Blue body becomes golden-orange",491:"Dark body gains purple-magenta tones",492:"Flowers become lighter with greener body",493:"White body becomes golden-yellow",494:"Ears and accents become orange-golden, body lighter",495:"Body becomes a deeper, darker shade of green",496:"Body becomes a deeper, darker shade of green",497:"Green body takes on a deeper blue-green tone",498:"Body becomes a darker reddish-brown shade",499:"Body becomes a slightly darker brown tone",500:"Flames and accents turn blue instead of red-orange",501:"Body becomes a slightly lighter blue tone",502:"Body becomes a slightly lighter blue shade",503:"Dark blue body becomes a deeper navy shade",504:"Body turns a warm golden-tan color",505:"Body becomes golden with reddish-brown accents",506:"Fur becomes a warm golden-brown shade",507:"Fur turns a bright golden color",508:"Fur becomes a rich golden shade",509:"Purple fur shifts to a cool blue-gray tone",510:"Body becomes blue-tinted with magenta spots",511:"Body becomes a slightly lighter green shade",512:"Green fur takes on a golden-green hue",513:"Body becomes a slightly lighter red tone",514:"Body becomes a slightly lighter reddish tone",515:"Body becomes a slightly lighter blue shade",516:"Blue fur shifts to pink-magenta",517:"Pink body shifts to a purple-blue shade",518:"Body becomes a deeper purple color",519:"Gray body shifts to a greenish tone",520:"Body takes on a greenish hue",521:"Body becomes green-tinted instead of gray",522:"Lightning bolt stripes shift to lighter blue",523:"Stripes become a brighter white-blue tone",524:"Body shifts from brown to purple-blue",525:"Orange crystals and body shift to blue",526:"Red crystals and body shift to blue",527:"Blue fur changes to green",528:"Blue body shifts to green",529:"Body becomes a slightly different brown shade",530:"Steel-gray body becomes red-brown",531:"Pink body shifts to purple",532:"Gray body becomes orange-golden",533:"Body becomes orange-purple toned",534:"Body becomes orange with purple veins",535:"Body shifts to a blue-teal shade",536:"Blue body becomes a deeper blue tone",537:"Body shifts to a blue-teal shade",538:"Red body changes to green",539:"Blue body changes to red",540:"Yellow-green body shifts to orange",541:"Leaf cloak takes on an orange hue",542:"Yellow accents shift to orange",543:"Body shifts from red-purple to blue-teal",544:"Purple body becomes blue-teal",545:"Magenta body shifts to blue-teal",546:"White body gains an orange tint",547:"White fluff gains an orange-brown tint",548:"Body becomes a slightly lighter shade",549:"Red flower becomes orange instead",550:"Body shifts to green from red or blue",551:"Body becomes a slightly darker brown shade",552:"Body becomes a noticeably darker tone",553:"Black body shifts to orange-tan",554:"Red body shifts to pink-magenta",555:"Red body shifts to tan-golden",556:"Green body gains golden and pink tones",557:"Body shifts to green with orange shell",558:"Rocky shell becomes orange-red",559:"Yellow body shifts to teal-green",560:"Body shifts to teal-green tones",561:"Body shifts to golden-orange tones",562:"Body becomes a slightly darker purple",563:"Gold body becomes slightly lighter",564:"Blue body shifts to purple-pink",565:"Blue shell shifts to purple-blue",566:"Body shifts to golden-orange tones",567:"Body shifts to golden-orange tones",568:"Green body shifts to blue-teal",569:"Body shifts to golden-green tones",570:"Dark gray fur shifts to blue",571:"Dark body and red accents turn purple",572:"Gray fur shifts to pink",573:"Gray fur shifts to pink",574:"Body shifts to a purple-brown tone",575:"Body shifts to a purple-brown tone",576:"Body shifts to a purple-brown tone",577:"Green cell body shifts to red-orange",578:"Green cell body shifts to blue",579:"Green body shifts to blue",580:"Blue body shifts to pink-magenta",581:"White body gains a cream-purple tint",582:"White body shifts to purple-pink",583:"White body shifts to purple-pink",584:"White body shifts to purple-pink",585:"Body becomes a darker seasonal shade",586:"Body becomes a lighter shade overall",587:"Body becomes a slightly darker brown",588:"Blue shell shifts to blue-purple",589:"Red armor shifts to golden-blue",590:"Poke Ball red and white colors swap",591:"Poke Ball colors swap with golden-brown cap",592:"Body becomes a darker shade of its color",593:"Body becomes a darker shade of its color",594:"Pink body shifts to purple-blue",595:"Yellow body shifts to blue-teal",596:"Body shifts to a brighter yellow-orange",597:"Body shifts to a golden tone",598:"Body shifts to a golden tone",599:"Body becomes a slightly lighter gray shade",600:"Body becomes a slightly lighter gold shade",601:"Body and gears shift to golden",602:"Body becomes a slightly lighter shade",603:"Blue body shifts to green-teal",604:"Blue body shifts to green",605:"Brown body shifts to blue",606:"Brown body shifts to golden",607:"Body turns white with an orange flame",608:"Body shifts to orange-cream tones",609:"Purple flames shift to orange",610:"Green body becomes a darker green shade",611:"Body becomes a darker green tone",612:"Golden body turns black",613:"White body shifts to purple-pink",614:"White body shifts to purple-blue",615:"Body becomes a slightly deeper blue shade",616:"Red body shifts to orange-red",617:"Purple body shifts to pink-magenta",618:"Body becomes a slightly lighter green shade",619:"Yellow body shifts to purple",620:"Body shifts to purple tones",621:"Red body shifts to green",622:"Body shifts to green-teal",623:"Body shifts to green-teal",624:"Red-black body shifts to blue",625:"Body shifts to blue tones",626:"Afro becomes a slightly golden-brown shade",627:"Body becomes lighter with golden tints",628:"Body becomes lighter with golden accents",629:"Body becomes a lighter purple shade",630:"Body shifts to golden-brown tones",631:"Red body shifts to purple",632:"Gray body shifts to golden",633:"Blue body shifts to green",634:"Blue body shifts to green",635:"Blue body and accents shift to green",636:"White fur and red body shift to golden",637:"Body and wings shift to golden tones",638:"Body becomes a slightly lighter blue shade",639:"Body becomes a slightly lighter tone overall",640:"Green body shifts to pink-magenta",641:"Body shifts to a blue-gray tone",642:"Body shifts to a blue-gray tone",643:"Tail ring shifts to golden; body barely changes",644:"Body becomes very slightly lighter overall",645:"Body shifts to orange-red tones",646:"Body becomes a slightly lighter gray shade",647:"Body becomes a slightly lighter blue shade",648:"Body becomes a slightly different shade overall",649:"Purple body shifts to red-orange",650:"Body turns brown-red with darker green accents",651:"Body becomes brown-red with darker armor",652:"Shell and body shift to brown-red tones",653:"Fur turns gray-silver instead of yellow",654:"Fur becomes gray-purple with muted accents",655:"Robes and fur shift to deep purple tones",656:"Foam and body become slightly lighter blue",657:"Body becomes a subtly lighter blue shade",658:"Body darkens to black with red tongue scarf",659:"Fur shifts to a muted gray-green tone",660:"Fur turns golden-brown with warmer accents",661:"Feathers shift to orange-golden tones",662:"Plumage becomes more orange-golden overall",663:"Feathers shift to bright orange-golden hues",664:"Body becomes slightly lighter overall",665:"Fur coat becomes subtly lighter in shade",666:"Wing patterns shift to different vivid colors",667:"Mane and body become darker brown tones",668:"Mane turns bluish with darker brown body",669:"Body becomes a subtly lighter shade of white",670:"Body shifts to a slightly lighter shade",671:"Body takes on a slightly different hue",672:"Fur becomes a subtly darker green shade",673:"Body and fur darken slightly overall",674:"Fur lightens to a pale gray shade",675:"Fur shifts to lighter gray with muted markings",676:"Fur becomes a subtly darker gray tone",677:"Fur turns soft pink instead of gray",678:"Body shifts to golden-brown tones",679:"Sheath and blade turn red-orange",680:"Sheaths and blades become red-orange",681:"Shield and body turn black with red accents",682:"Plumage shifts to gray-blue tones",683:"Body becomes brown-tan with muted accents",684:"Fluff turns yellow-brown instead of white",685:"Body and frosting shift to brown-tan hues",686:"Body turns bright orange-golden",687:"Body shifts to orange-golden tones",688:"Hands and body become orange-golden",689:"Limbs and body shift to orange-golden tones",690:"Body changes to brown-tan coloring",691:"Body and fins shift to brown-tan hues",692:"Shell turns red-orange instead of blue",693:"Claws and body become vivid red-orange",694:"Body turns red-orange with warm accents",695:"Frill and body shift to red-orange tones",696:"Body turns blue instead of brown",697:"Body becomes blue with lighter accents",698:"Body takes on a whiter, icier appearance",699:"Sails and body become whiter and icier",700:"Pink accents turn blue throughout the body",701:"Feathers shift to orange-golden tones",702:"Fur becomes a subtly lighter cream shade",703:"Gems take on a subtle golden tint",704:"Body turns white-cream instead of purple",705:"Body shifts to brown-tan tones",706:"Body becomes yellow-golden with warm hues",707:"Keys and body take on a golden shine",708:"Stump and body turn red-brown",709:"Trunk turns white with red-brown leaves",710:"Pumpkin body shifts to golden-orange",711:"Body becomes brighter golden-orange",712:"Ice body takes on a subtle golden tint",713:"Body shifts from blue to golden-orange",714:"Fur and wings turn green-teal",715:"Wings and body shift to green-teal hues",716:"Body and antlers turn white-blue",717:"Wings and body become white with red accents",718:"Body shifts to white-blue coloring",719:"Gems and body darken toward black tones",720:"Body and rings shift to golden-white",721:"Body turns golden-orange with warm accents",722:"Plumage becomes subtly lighter overall",723:"Feathers lighten slightly in tone",724:"Hood and body darken to deep green-black",725:"Fur turns white-cream instead of black",726:"Fur lightens to a warm cream tone",727:"Dark fur turns white-cream with muted stripes",728:"Body becomes a subtly lighter cream shade",729:"Body shifts to a slightly lighter tone",730:"Hair turns golden with lighter body tones",731:"Plumage shifts to lighter brown tones",732:"Feathers become subtly lighter overall",733:"Beak turns bright orange-golden",734:"Fur turns vivid pink-magenta",735:"Fur shifts to bright pink-magenta",736:"Body takes on a subtle golden hue",737:"Shell turns golden-green instead of green",738:"Mandibles and body become golden",739:"Shell and claws shift to golden-brown",740:"Fur and body become golden overall",741:"Feathers shift to a different shade by style",742:"Wings and body turn blue-teal",743:"Wings and scarf shift to blue-teal",744:"Fur turns blue-gray instead of brown",745:"Fur changes to blue, red, or deeper orange by form",746:"Body turns purple instead of blue",747:"Spines and body shift to green-teal",748:"Tentacles and body become golden-orange",749:"Fur becomes a subtly lighter cream shade",750:"Fur and mane lighten to cream tones",751:"Bubble and body turn purple",752:"Body and bubble shift to purple tones",753:"Leaves and body become purple",754:"Body turns vivid pink-magenta",755:"Cap and body shift to golden-brown",756:"Cap becomes golden with purple accents",757:"Body turns cream-white instead of dark gray",758:"Body shifts to cream-white coloring",759:"Fur turns golden-brown with warm accents",760:"Body shifts to golden-green tones",761:"Body turns golden-orange instead of purple",762:"Body and leaves become golden overall",763:"Body and legs shift to golden-brown",764:"Flowers become lighter with different hues",765:"Fur shifts to a lighter purple shade",766:"Body becomes subtly lighter overall",767:"Shell turns green instead of purple",768:"Armor shifts to golden-orange tones",769:"Sand body darkens to black",770:"Sand body becomes black and darker overall",771:"Body turns green instead of pink",772:"Body becomes subtly darker in tone",773:"Body lightens slightly in shade",774:"Core shifts to black when shell breaks",775:"Fur turns blue instead of gray",776:"Shell and body become vivid red-orange",777:"Fur becomes subtly darker in tone",778:"Disguise cloth shifts to a slightly different shade",779:"Body becomes pink-purple with vivid patterns",780:"Body and hair shift to golden-orange",781:"Anchor and body turn golden-orange",782:"Scales shift to bright golden tones",783:"Scales and armor become golden",784:"Scales turn golden with pink accents",785:"Shell becomes orange with black accents",786:"Shell shifts to black with gold markings",787:"Shell turns black with golden accents",788:"Shell becomes purple with black tones",789:"Body darkens to a subtly deeper blue",790:"Shell shifts very subtly in color",791:"Mane and body turn vivid red-crimson",792:"Wings and body shift to red-crimson",793:"Tentacles and body turn orange-golden",794:"Muscles and body shift to orange-golden",795:"Body takes on a subtle golden-white hue",796:"Wires and body become golden-orange",797:"Body and jets shift to golden-orange",798:"Body and blades turn bright orange",799:"Body turns white-cream instead of dark purple",800:"Prism body shifts to blue-teal tones",801:"Body and accents become golden overall",802:"Flames and body shift to pink-purple",803:"Body turns white-golden instead of purple",804:"Body and wings become white-cream",805:"Bricks become subtly lighter in shade",806:"Body and head shift to white-cream",807:"Fur turns white instead of yellow",808:"Body becomes subtly darker in tone",809:"Body shifts to blue-teal metallic tones",810:"Body becomes a lighter, more muted green",811:"Body shifts to a lighter green tone",812:"Body takes on a lighter green-brown hue",813:"Body becomes slightly more cream-colored",814:"Body shifts to a gray-cream tone",815:"Body becomes gray-cream instead of white",816:"Body changes from blue to a purple-pink",817:"Body shifts to a lighter purple shade",818:"Body becomes a lighter blue-white",819:"Body changes from brown to orange-red",820:"Body becomes a darker, richer brown",821:"Body changes from blue to golden-yellow",822:"Body shifts to a golden tone",823:"Armor changes from dark blue to golden-cream",824:"Body changes from purple to orange",825:"Shell becomes a golden-brown color",826:"Body shifts from red to orange-red",827:"Body becomes a lighter cream shade",828:"Fur becomes a slightly lighter brown",829:"Body becomes a subtly lighter green",830:"Body shifts from green to purple-pink",831:"Wool changes from white to black",832:"Wool becomes slightly darker overall",833:"Body shifts to a lighter green tone",834:"Shell changes from brown to orange-red",835:"Body becomes a lighter cream color",836:"Body shifts to a lighter cream tone",837:"Eye glow changes to orange",838:"Body takes on an orange hue",839:"Flames and accents shift to orange",840:"Body becomes a subtly different green",841:"Body shifts to a green-golden tone",842:"Body takes on a green-golden hue",843:"Body changes from tan to green",844:"Body shifts to a darker black tone",845:"Body changes from blue to pink-magenta",846:"Body shifts from silver to pink-magenta",847:"Body changes to a brown-golden hue",848:"Body becomes a lighter purple shade",849:"Body shifts from purple to gray-white",850:"Body changes to golden-orange",851:"Body becomes subtly lighter and more orange",852:"Body shifts to golden-green",853:"Body changes from purple to golden-yellow",854:"Tea color becomes slightly lighter",855:"Body shifts to a lighter cream shade",856:"Body changes from pink to lighter blue",857:"Body shifts to a lighter blue tone",858:"Body becomes a lighter blue shade",859:"Body changes from pink to blue-teal",860:"Body shifts to a blue-teal tone",861:"Body changes from purple to blue-teal",862:"Body lightens with red accent markings",863:"Body becomes a darker gray steel tone",864:"Body changes from pink to white-cream",865:"Body shifts to a darker brown shade",866:"Body takes on a darker blue hue",867:"Body becomes a lighter gray tone",868:"Body shifts to a slightly different shade",869:"Cream becomes subtly lighter overall",870:"Body shifts to golden-brown",871:"Body changes from dark to lighter purple",872:"Body shifts to a golden-green hue",873:"Wings and body become golden-green",874:"Body becomes a lighter tan color",875:"Ice head becomes subtly lighter",876:"Body becomes slightly darker overall",877:"Body shifts to a lighter cream tone",878:"Body changes from copper to green-teal",879:"Body shifts from copper to green-teal",880:"Body shifts to green and lighter tones",881:"Body becomes a lighter blue shade",882:"Body shifts to a lighter green",883:"Body becomes lighter with pink accents",884:"Body shifts to a lighter cream tone",885:"Body changes from green to orange-red",886:"Body becomes a lighter purple shade",887:"Body shifts to orange-golden tones",888:"Body becomes a lighter pink shade",889:"Body shifts to a lighter red-pink",890:"Body becomes a lighter white tone",891:"Body changes to a golden-tan hue",892:"Body shifts to golden-cream",893:"Body becomes a subtly lighter green",894:"Body becomes slightly darker overall",895:"Body shifts to a subtly lighter shade",896:"Body changes from white to darker gray",897:"Body shifts from dark to lighter gray",898:"Body becomes subtly lighter overall",899:"Body shifts to a lighter cream color",900:"Body becomes a lighter brown tone",901:"Body shifts to a darker brown shade",902:"Body becomes a lighter orange hue",903:"Body shifts to a lighter purple",904:"Body becomes a darker purple shade",905:"Body shifts to a lighter gold tone",906:"Body becomes a subtly lighter green",907:"Body shifts to a lighter green shade",908:"Body changes to lighter purple-pink tones",909:"Body shifts from red to lighter cream-white",910:"Body becomes a lighter golden shade",911:"Body changes from red to purple-blue",912:"Body becomes subtly lighter overall",913:"Body shifts to a lighter blue tone",914:"Body becomes lighter with red and blue tones",915:"Body changes from gray to brown-golden",916:"Body shifts to a lighter brown shade",917:"Body changes to a green-teal hue",918:"Body shifts to golden-green tones",919:"Body becomes a lighter gray shade",920:"Body shifts to a lighter purple tone",921:"Body becomes a lighter cream shade",922:"Body shifts to a subtly lighter cream",923:"Body becomes a lighter cream tone",924:"Body changes from white to green",925:"Body shifts from white to green",926:"Body becomes subtly lighter overall",927:"Body shifts to a lighter cream shade",928:"Body becomes subtly lighter overall",929:"Body shifts to a lighter green shade",930:"Body becomes a lighter brown tone",931:"Body becomes lighter; varies by form",932:"Body changes from white to orange-brown",933:"Body shifts to an orange hue",934:"Body becomes an orange-golden shade",935:"Body changes from red to blue-purple",936:"Armor shifts from red to golden-yellow",937:"Armor changes from blue to red-orange",938:"Body changes from yellow to green-teal",939:"Body shifts to a green-teal color",940:"Body becomes subtly lighter overall",941:"Body shifts to a lighter pink hue",942:"Body becomes a lighter brown shade",943:"Body shifts to a lighter gray tone",944:"Body changes from white to purple",945:"Body shifts to blue-teal tones",946:"Body becomes a lighter shade overall",947:"Body shifts to a lighter tone",948:"Body changes to golden-yellow",949:"Body shifts to a golden hue",950:"Body becomes a golden-orange shade",951:"Body shifts to a golden tone",952:"Body changes to golden-purple tones",953:"Body shifts from brown to green",954:"Body changes to a green hue",955:"Body shifts from white to blue",956:"Body changes to brown-golden tones",957:"Body becomes a lighter orange shade",958:"Body shifts to a lighter golden tone",959:"Body becomes a lighter golden hue",960:"Body changes from white to red",961:"Bodies change from white to red",962:"Body shifts to a purple hue",963:"Body changes from blue to pink-purple",964:"Body becomes a darker purple in Hero Form",965:"Body becomes subtly lighter overall",966:"Body shifts to orange-golden tones",967:"Body becomes a lighter green shade",968:"Body shifts to a darker blue hue",969:"Body changes to a blue color",970:"Body shifts to blue-purple tones",971:"Body becomes a lighter brown shade",972:"Body shifts to golden-brown",973:"Body changes from pink to cream-white",974:"Body shifts from white to pink",975:"Body becomes a pink-golden shade",976:"Body shifts to a darker blue tone",977:"Body becomes a lighter cream color",978:"Body shifts to a different shade by form",979:"Body changes to golden-tan tones",980:"Body shifts from purple to brown",981:"Body becomes subtly lighter overall",982:"Body shifts to a subtly lighter cream",983:"Body changes to a golden tone",984:"Body becomes lighter overall",985:"Body shifts to a lighter shade",986:"Body becomes a lighter golden tone",987:"Body shifts to a golden hue",988:"Body changes to a golden shade",989:"Body shifts to golden tones",990:"Body changes to a golden color",991:"Body shifts to golden-orange tones",992:"Body becomes a golden shade",993:"Body shifts to a golden hue",994:"Body changes to golden-green tones",995:"Body becomes a golden shade",996:"Body shifts to golden-green tones",997:"Body becomes a golden-lighter shade",998:"Body shifts to golden-lighter tones",999:"Chest coin becomes a lighter gold",1000:"Body becomes subtly lighter overall",1001:"Body shifts to a lighter green shade",1002:"Body changes to a golden tone",1003:"Body becomes golden-lighter overall",1004:"Body shifts to golden-lighter tones",1005:"Body changes to a golden shade",1006:"Body shifts to a golden hue",1007:"Body becomes golden-lighter overall",1008:"Body shifts to golden-lighter tones",1009:"Body changes to a golden shade",1010:"Body shifts to a golden hue",1012:"Body becomes a golden-green shade",1013:"Body shifts to a lighter tone",1014:"Body becomes a lighter shade overall",1015:"Body shifts to a lighter purple hue",1016:"Body becomes lighter overall",1017:"Body shifts to a lighter golden tone",1018:"Mask takes on a golden hue",1020:"Body changes to a golden shade",1021:"Body shifts to a golden hue",1022:"Body becomes a golden shade",1023:"Body shifts to a golden tone",1024:"Body becomes golden-lighter overall",1025:"Body becomes subtly lighter overall"};
const GENDER_SUFFIX = {3:"-male",12:"-male",19:"-male",20:"-male",25:"-male",26:"-male",29:"-female",30:"-female",31:"-female",32:"-male",33:"-male",34:"-male",41:"-male",42:"-male",44:"-male",45:"-male",64:"-male",65:"-male",84:"-male",85:"-male",97:"-male",106:"-male",107:"-male",111:"-male",112:"-male",113:"-female",115:"-female",118:"-male",119:"-male",123:"-male",124:"-female",128:"-male",129:"-male",130:"-male",133:"-male",154:"-male",165:"-male",166:"-male",178:"-male",185:"-male",186:"-male",190:"-male",194:"-male",195:"-male",198:"-male",202:"-male",203:"-male",207:"-male",208:"-male",212:"-male",214:"-male",215:"-male",217:"-male",221:"-male",224:"-male",229:"-male",232:"-male",236:"-male",237:"-male",238:"-female",241:"-female",242:"-female",255:"-male",256:"-male",257:"-male",267:"-male",269:"-male",272:"-male",274:"-male",275:"-male",307:"-male",308:"-male",313:"-male",314:"-female",315:"-male",316:"-male",317:"-male",322:"-male",323:"-male",332:"-male",350:"-male",369:"-male",380:"-female",381:"-male",396:"-male",397:"-male",398:"-male",399:"-male",400:"-male",401:"-male",402:"-male",403:"-male",404:"-male",405:"-male",407:"-male",414:"-male",415:"-male",416:"-female",417:"-male",418:"-male",419:"-male",424:"-male",440:"-female",443:"-male",444:"-male",445:"-male",449:"-male",450:"-male",453:"-male",454:"-male",456:"-male",457:"-male",459:"-male",460:"-male",461:"-male",464:"-male",465:"-male",473:"-male",475:"-male",478:"-female",488:"-female",521:"-male",538:"-male",539:"-male",548:"-female",549:"-female",592:"-male",593:"-male",627:"-male",628:"-male",629:"-female",630:"-female",668:"-male",678:"-male",758:"-female",761:"-female",762:"-female",763:"-female",856:"-female",857:"-female",858:"-female",859:"-male",860:"-male",861:"-male",876:"-male",916:"-male",957:"-female",958:"-female",959:"-female"};
const DEX = {
  "Bulbasaur":1,"Ivysaur":2,"Venusaur":3,"Charmander":4,"Charmeleon":5,"Charizard":6,"Squirtle":7,"Wartortle":8,"Blastoise":9,"Caterpie":10,"Metapod":11,"Butterfree":12,"Weedle":13,"Kakuna":14,"Beedrill":15,"Pidgey":16,"Pidgeotto":17,"Pidgeot":18,"Rattata":19,"Raticate":20,"Spearow":21,"Fearow":22,"Ekans":23,"Arbok":24,"Pikachu":25,"Raichu":26,"Sandshrew":27,"Sandslash":28,"Nidoran\u2640":29,"Nidorina":30,"Nidoqueen":31,"Nidoran\u2642":32,"Nidorino":33,"Nidoking":34,"Clefairy":35,"Clefable":36,"Vulpix":37,"Ninetales":38,"Jigglypuff":39,"Wigglytuff":40,"Zubat":41,"Golbat":42,"Oddish":43,"Gloom":44,"Vileplume":45,"Paras":46,"Parasect":47,"Venonat":48,"Venomoth":49,"Diglett":50,"Dugtrio":51,"Meowth":52,"Persian":53,"Psyduck":54,"Golduck":55,"Mankey":56,"Primeape":57,"Growlithe":58,"Arcanine":59,"Poliwag":60,"Poliwhirl":61,"Poliwrath":62,"Abra":63,"Kadabra":64,"Alakazam":65,"Machop":66,"Machoke":67,"Machamp":68,"Bellsprout":69,"Weepinbell":70,"Victreebel":71,"Tentacool":72,"Tentacruel":73,"Geodude":74,"Graveler":75,"Golem":76,"Ponyta":77,"Rapidash":78,"Slowpoke":79,"Slowbro":80,"Magnemite":81,"Magneton":82,"Farfetchd":83,"Doduo":84,"Dodrio":85,"Seel":86,"Dewgong":87,"Grimer":88,"Muk":89,"Shellder":90,"Cloyster":91,"Gastly":92,"Haunter":93,"Gengar":94,"Onix":95,"Drowzee":96,"Hypno":97,"Krabby":98,"Kingler":99,"Voltorb":100,"Electrode":101,"Exeggcute":102,"Exeggutor":103,"Cubone":104,"Marowak":105,"Hitmonlee":106,"Hitmonchan":107,"Lickitung":108,"Koffing":109,"Weezing":110,"Rhyhorn":111,"Rhydon":112,"Chansey":113,"Tangela":114,"Kangaskhan":115,"Horsea":116,"Seadra":117,"Goldeen":118,"Seaking":119,"Staryu":120,"Starmie":121,"Mr. Mime":122,"Scyther":123,"Jynx":124,"Electabuzz":125,"Magmar":126,"Pinsir":127,"Tauros":128,"Magikarp":129,"Gyarados":130,"Lapras":131,"Ditto":132,"Eevee":133,"Vaporeon":134,"Jolteon":135,"Flareon":136,"Porygon":137,"Omanyte":138,"Omastar":139,"Kabuto":140,"Kabutops":141,"Aerodactyl":142,"Snorlax":143,"Articuno":144,"Zapdos":145,"Moltres":146,"Dratini":147,"Dragonair":148,"Dragonite":149,"Mewtwo":150,"Mew":151,
  "Chikorita":152,"Bayleef":153,"Meganium":154,"Cyndaquil":155,"Quilava":156,"Typhlosion":157,"Totodile":158,"Croconaw":159,"Feraligatr":160,"Sentret":161,"Furret":162,"Hoothoot":163,"Noctowl":164,"Ledyba":165,"Ledian":166,"Spinarak":167,"Ariados":168,"Crobat":169,"Chinchou":170,"Lanturn":171,"Pichu":172,"Cleffa":173,"Igglybuff":174,"Togepi":175,"Togetic":176,"Natu":177,"Xatu":178,"Mareep":179,"Flaaffy":180,"Ampharos":181,"Bellossom":182,"Marill":183,"Azumarill":184,"Sudowoodo":185,"Politoed":186,"Hoppip":187,"Skiploom":188,"Jumpluff":189,"Aipom":190,"Sunkern":191,"Sunflora":192,"Yanma":193,"Wooper":194,"Quagsire":195,"Espeon":196,"Umbreon":197,"Murkrow":198,"Slowking":199,"Misdreavus":200,"Unown":201,"Wobbuffet":202,"Girafarig":203,"Pineco":204,"Forretress":205,"Dunsparce":206,"Gligar":207,"Steelix":208,"Snubbull":209,"Granbull":210,"Qwilfish":211,"Scizor":212,"Shuckle":213,"Heracross":214,"Sneasel":215,"Teddiursa":216,"Ursaring":217,"Slugma":218,"Magcargo":219,"Swinub":220,"Piloswine":221,"Corsola":222,"Remoraid":223,"Octillery":224,"Delibird":225,"Mantine":226,"Skarmory":227,"Houndour":228,"Houndoom":229,"Kingdra":230,"Phanpy":231,"Donphan":232,"Porygon2":233,"Stantler":234,"Smeargle":235,"Tyrogue":236,"Hitmontop":237,"Smoochum":238,"Elekid":239,"Magby":240,"Miltank":241,"Blissey":242,"Raikou":243,"Entei":244,"Suicune":245,"Larvitar":246,"Pupitar":247,"Tyranitar":248,"Lugia":249,"Ho-Oh":250,"Celebi":251,
  "Treecko":252,"Grovyle":253,"Sceptile":254,"Torchic":255,"Combusken":256,"Blaziken":257,"Mudkip":258,"Marshtomp":259,"Swampert":260,"Poochyena":261,"Mightyena":262,"Zigzagoon":263,"Linoone":264,"Wurmple":265,"Silcoon":266,"Beautifly":267,"Cascoon":268,"Dustox":269,"Lotad":270,"Lombre":271,"Ludicolo":272,"Seedot":273,"Nuzleaf":274,"Shiftry":275,"Taillow":276,"Swellow":277,"Wingull":278,"Pelipper":279,"Ralts":280,"Kirlia":281,"Gardevoir":282,"Surskit":283,"Masquerain":284,"Shroomish":285,"Breloom":286,"Slakoth":287,"Vigoroth":288,"Slaking":289,"Nincada":290,"Ninjask":291,"Shedinja":292,"Whismur":293,"Loudred":294,"Exploud":295,"Makuhita":296,"Hariyama":297,"Azurill":298,"Nosepass":299,"Skitty":300,"Delcatty":301,"Sableye":302,"Mawile":303,"Aron":304,"Lairon":305,"Aggron":306,"Meditite":307,"Medicham":308,"Electrike":309,"Manectric":310,"Plusle":311,"Minun":312,"Volbeat":313,"Illumise":314,"Roselia":315,"Gulpin":316,"Swalot":317,"Carvanha":318,"Sharpedo":319,"Wailmer":320,"Wailord":321,"Numel":322,"Camerupt":323,"Torkoal":324,"Spoink":325,"Grumpig":326,"Spinda":327,"Trapinch":328,"Vibrava":329,"Flygon":330,"Cacnea":331,"Cacturne":332,"Swablu":333,"Altaria":334,"Zangoose":335,"Seviper":336,"Lunatone":337,"Solrock":338,"Barboach":339,"Whiscash":340,"Corphish":341,"Crawdaunt":342,"Baltoy":343,"Claydol":344,"Lileep":345,"Cradily":346,"Anorith":347,"Armaldo":348,"Feebas":349,"Milotic":350,"Castform":351,"Kecleon":352,"Shuppet":353,"Banette":354,"Duskull":355,"Dusclops":356,"Tropius":357,"Chimecho":358,"Absol":359,"Wynaut":360,"Snorunt":361,"Glalie":362,"Spheal":363,"Sealeo":364,"Walrein":365,"Clamperl":366,"Huntail":367,"Gorebyss":368,"Relicanth":369,"Luvdisc":370,"Bagon":371,"Shelgon":372,"Salamence":373,"Beldum":374,"Metang":375,"Metagross":376,"Regirock":377,"Regice":378,"Registeel":379,"Latias":380,"Latios":381,"Kyogre":382,"Groudon":383,"Rayquaza":384,"Jirachi":385,"Deoxys":386,
  "Turtwig":387,"Grotle":388,"Torterra":389,"Chimchar":390,"Monferno":391,"Infernape":392,"Piplup":393,"Prinplup":394,"Empoleon":395,"Starly":396,"Staravia":397,"Staraptor":398,"Bidoof":399,"Bibarel":400,"Kricketot":401,"Kricketune":402,"Shinx":403,"Luxio":404,"Luxray":405,"Budew":406,"Roserade":407,"Cranidos":408,"Rampardos":409,"Shieldon":410,"Bastiodon":411,"Burmy":412,"Wormadam":413,"Mothim":414,"Combee":415,"Vespiquen":416,"Pachirisu":417,"Buizel":418,"Floatzel":419,"Cherubi":420,"Cherrim":421,"Shellos":422,"Gastrodon":423,"Ambipom":424,"Drifloon":425,"Drifblim":426,"Buneary":427,"Lopunny":428,"Mismagius":429,"Honchkrow":430,"Glameow":431,"Purugly":432,"Chingling":433,"Stunky":434,"Skuntank":435,"Bronzor":436,"Bronzong":437,"Bonsly":438,"Mime Jr.":439,"Happiny":440,"Chatot":441,"Spiritomb":442,"Gible":443,"Gabite":444,"Garchomp":445,"Munchlax":446,"Riolu":447,"Lucario":448,"Hippopotas":449,"Hippowdon":450,"Skorupi":451,"Drapion":452,"Croagunk":453,"Toxicroak":454,"Carnivine":455,"Finneon":456,"Lumineon":457,"Mantyke":458,"Snover":459,"Abomasnow":460,"Weavile":461,"Magnezone":462,"Lickilicky":463,"Rhyperior":464,"Tangrowth":465,"Electivire":466,"Magmortar":467,"Togekiss":468,"Yanmega":469,"Leafeon":470,"Glaceon":471,"Gliscor":472,"Mamoswine":473,"Porygon-Z":474,"Gallade":475,"Probopass":476,"Dusknoir":477,"Froslass":478,"Rotom":479,"Uxie":480,"Mesprit":481,"Azelf":482,"Dialga":483,"Palkia":484,"Heatran":485,"Regigigas":486,"Giratina":487,"Cresselia":488,"Phione":489,"Manaphy":490,"Darkrai":491,"Shaymin":492,"Arceus":493,
  "Victini":494,"Snivy":495,"Servine":496,"Serperior":497,"Tepig":498,"Pignite":499,"Emboar":500,"Oshawott":501,"Dewott":502,"Samurott":503,"Patrat":504,"Watchog":505,"Lillipup":506,"Herdier":507,"Stoutland":508,"Purrloin":509,"Liepard":510,"Pansage":511,"Simisage":512,"Pansear":513,"Simisear":514,"Panpour":515,"Simipour":516,"Munna":517,"Musharna":518,"Pidove":519,"Tranquill":520,"Unfezant":521,"Blitzle":522,"Zebstrika":523,"Roggenrola":524,"Boldore":525,"Gigalith":526,"Woobat":527,"Swoobat":528,"Drilbur":529,"Excadrill":530,"Audino":531,"Timburr":532,"Gurdurr":533,"Conkeldurr":534,"Tympole":535,"Palpitoad":536,"Seismitoad":537,"Throh":538,"Sawk":539,"Sewaddle":540,"Swadloon":541,"Leavanny":542,"Venipede":543,"Whirlipede":544,"Scolipede":545,"Cottonee":546,"Whimsicott":547,"Petilil":548,"Lilligant":549,"Basculin":550,"Sandile":551,"Krokorok":552,"Krookodile":553,"Darumaka":554,"Darmanitan":555,"Maractus":556,"Dwebble":557,"Crustle":558,"Scraggy":559,"Scrafty":560,"Sigilyph":561,"Yamask":562,"Cofagrigus":563,"Tirtouga":564,"Carracosta":565,"Archen":566,"Archeops":567,"Trubbish":568,"Garbodor":569,"Zorua":570,"Zoroark":571,"Minccino":572,"Cinccino":573,"Gothita":574,"Gothorita":575,"Gothitelle":576,"Solosis":577,"Duosion":578,"Reuniclus":579,"Ducklett":580,"Swanna":581,"Vanillite":582,"Vanillish":583,"Vanilluxe":584,"Deerling":585,"Sawsbuck":586,"Emolga":587,"Karrablast":588,"Escavalier":589,"Foongus":590,"Amoonguss":591,"Frillish":592,"Jellicent":593,"Alomomola":594,"Joltik":595,"Galvantula":596,"Ferroseed":597,"Ferrothorn":598,"Klink":599,"Klang":600,"Klinklang":601,"Tynamo":602,"Eelektrik":603,"Eelektross":604,"Elgyem":605,"Beheeyem":606,"Litwick":607,"Lampent":608,"Chandelure":609,"Axew":610,"Fraxure":611,"Haxorus":612,"Cubchoo":613,"Beartic":614,"Cryogonal":615,"Shelmet":616,"Accelgor":617,"Stunfisk":618,"Mienfoo":619,"Mienshao":620,"Druddigon":621,"Golett":622,"Golurk":623,"Pawniard":624,"Bisharp":625,"Bouffalant":626,"Rufflet":627,"Braviary":628,"Vullaby":629,"Mandibuzz":630,"Heatmor":631,"Durant":632,"Deino":633,"Zweilous":634,"Hydreigon":635,"Larvesta":636,"Volcarona":637,"Cobalion":638,"Terrakion":639,"Virizion":640,"Tornadus":641,"Thundurus":642,"Reshiram":643,"Zekrom":644,"Landorus":645,"Kyurem":646,"Keldeo":647,"Meloetta":648,"Genesect":649,
  "Chespin":650,"Quilladin":651,"Chesnaught":652,"Fennekin":653,"Braixen":654,"Delphox":655,"Froakie":656,"Frogadier":657,"Greninja":658,"Bunnelby":659,"Diggersby":660,"Fletchling":661,"Fletchinder":662,"Talonflame":663,"Scatterbug":664,"Spewpa":665,"Vivillon":666,"Litleo":667,"Pyroar":668,"Flabebe":669,"Floette":670,"Florges":671,"Skiddo":672,"Gogoat":673,"Pancham":674,"Pangoro":675,"Furfrou":676,"Espurr":677,"Meowstic":678,"Honedge":679,"Doublade":680,"Aegislash":681,"Spritzee":682,"Aromatisse":683,"Swirlix":684,"Slurpuff":685,"Inkay":686,"Malamar":687,"Binacle":688,"Barbaracle":689,"Skrelp":690,"Dragalge":691,"Clauncher":692,"Clawitzer":693,"Helioptile":694,"Heliolisk":695,"Tyrunt":696,"Tyrantrum":697,"Amaura":698,"Aurorus":699,"Sylveon":700,"Hawlucha":701,"Dedenne":702,"Carbink":703,"Goomy":704,"Sliggoo":705,"Goodra":706,"Klefki":707,"Phantump":708,"Trevenant":709,"Pumpkaboo":710,"Gourgeist":711,"Bergmite":712,"Avalugg":713,"Noibat":714,"Noivern":715,"Xerneas":716,"Yveltal":717,"Zygarde":718,"Diancie":719,"Hoopa":720,"Volcanion":721,
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
  19:[{l:"Alola",f:"0019_alola"}],20:[{l:"Alola",f:"0020_alola"}],26:[{l:"Alola",f:"0026_alola"}],27:[{l:"Alola",f:"0027_alola"}],28:[{l:"Alola",f:"0028_alola"}],37:[{l:"Alola",f:"0037_alola"}],38:[{l:"Alola",f:"0038_alola"}],50:[{l:"Alola",f:"0050_alola"}],51:[{l:"Alola",f:"0051_alola"}],52:[{l:"Alola",f:"0052_alola"},{l:"Galar",f:"0052_galarian"}],53:[{l:"Alola",f:"0053_alola"}],58:[{l:"Hisui",f:"0058_hisuian"}],59:[{l:"Hisui",f:"0059_hisuian"}],74:[{l:"Alola",f:"0074_alola"}],75:[{l:"Alola",f:"0075_alola"}],76:[{l:"Alola",f:"0076_alola"}],77:[{l:"Galar",f:"0077_galarian"}],78:[{l:"Galar",f:"0078_galarian"}],79:[{l:"Galar",f:"0079_galarian"}],80:[{l:"Galar",f:"0080_galarian"}],83:[{l:"Galar",f:"0083_galarian"}],88:[{l:"Alola",f:"0088_alola"}],89:[{l:"Alola",f:"0089_alola"}],100:[{l:"Hisui",f:"0100_hisuian"}],101:[{l:"Hisui",f:"0101_hisuian"}],103:[{l:"Alola",f:"0103_alola"}],105:[{l:"Alola",f:"0105_alola"}],
  128:[{l:"Paldea",f:"0128_paldean_combat"},{l:"Paldea Blaze",f:"0128_paldean_blaze"},{l:"Paldea Aqua",f:"0128_paldean_aqua"}],
  144:[{l:"Galar",f:"0144_galarian"}],145:[{l:"Galar",f:"0145_galarian"}],146:[{l:"Galar",f:"0146_galarian"}],110:[{l:"Galar",f:"0110_galarian"}],122:[{l:"Galar",f:"0122_galarian"}],157:[{l:"Hisui",f:"0157_hisuian"}],
  194:[{l:"Paldea",f:"0194_paldean"}],199:[{l:"Galar",f:"0199_galarian"}],211:[{l:"Hisui",f:"0211_hisuian"}],215:[{l:"Hisui",f:"0215_hisuian"}],222:[{l:"Galar",f:"0222_galarian"}],263:[{l:"Galar",f:"0263_galarian"}],264:[{l:"Galar",f:"0264_galarian"}],
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
  503:[{l:"Hisui",f:"0503_hisuian"}],
  549:[{l:"Hisui",f:"0549_hisuian"}],
  550:[{l:"Blue-Striped",f:"0550_blue"},{l:"Red-Striped",f:"0550_red"},{l:"Hisui",f:"0550_hisuian"}],
  554:[{l:"Galar",f:"0554_galarian"}],
  555:[{l:"Galar",f:"0555_galarian"}],
  562:[{l:"Galar",f:"0562_galarian"}],
  570:[{l:"Hisui",f:"0570_hisuian"}],
  571:[{l:"Hisui",f:"0571_hisuian"}],
  585:[{l:"Autumn",f:"0585_autumn"},{l:"Spring",f:"0585_spring"},{l:"Summer",f:"0585_summer"},{l:"Winter",f:"0585_winter"}],
  586:[{l:"Autumn",f:"0586_autumn"},{l:"Spring",f:"0586_spring"},{l:"Summer",f:"0586_summer"},{l:"Winter",f:"0586_winter"}],
  618:[{l:"Galar",f:"0618_galarian"}],
  628:[{l:"Hisui",f:"0628_hisuian"}],
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
  705:[{l:"Hisui",f:"0705_hisuian"}],
  706:[{l:"Hisui",f:"0706_hisuian"}],
  710:[{l:"Small",f:"0710a_small"},{l:"Average",f:"0710b_average"},{l:"Large",f:"0710c_large"},{l:"Super",f:"0710d_super"}],
  711:[{l:"Small",f:"0711a_small"},{l:"Average",f:"0711b_average"},{l:"Large",f:"0711c_large"},{l:"Super",f:"0711d_super"}],
  713:[{l:"Hisui",f:"0713_hisuian"}],
  718:[{l:"10%",f:"0718_010"},{l:"50%",f:"0718_050"},{l:"100%",f:"0718_100"}],
  720:[{l:"Confined",f:"0720_confined"},{l:"Unbound",f:"0720_unbound"}],
  724:[{l:"Hisui",f:"0724_hisuian"}],
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
const POGO_EVO = {
  2:"25 Candy",3:"100 Candy",5:"25 Candy",6:"100 Candy",8:"25 Candy",9:"100 Candy",11:"12 Candy",12:"50 Candy",14:"12 Candy",15:"50 Candy",17:"12 Candy",18:"50 Candy",20:"25 Candy",22:"50 Candy",24:"50 Candy",26:"50 Candy",28:"50 Candy",30:"25 Candy",31:"100 Candy",33:"25 Candy",34:"100 Candy",36:"50 Candy",38:"50 Candy",40:"50 Candy",42:"25 Candy",44:"25 Candy",45:"100 Candy",47:"50 Candy",49:"50 Candy",51:"50 Candy",53:"50 Candy",55:"50 Candy",57:"50 Candy",59:"50 Candy",61:"25 Candy",62:"100 Candy",64:"25 Candy",65:"100 Candy or Trade",67:"25 Candy",68:"100 Candy or Trade",70:"25 Candy",71:"100 Candy",73:"50 Candy",75:"25 Candy",76:"100 Candy or Trade",78:"50 Candy",80:"50 Candy",82:"25 Candy",85:"50 Candy",87:"50 Candy",89:"50 Candy",91:"50 Candy",93:"25 Candy",94:"100 Candy or Trade",97:"50 Candy",99:"50 Candy",101:"50 Candy",103:"50 Candy",105:"50 Candy",110:"50 Candy",112:"50 Candy",117:"50 Candy",119:"50 Candy",121:"50 Candy",124:"25 Candy",125:"25 Candy",126:"25 Candy",130:"400 Candy",134:"25 Candy",135:"25 Candy",136:"25 Candy",139:"50 Candy",141:"50 Candy",143:"50 Candy",148:"25 Candy",149:"100 Candy",
  153:"25 Candy",154:"100 Candy",156:"25 Candy",157:"100 Candy",159:"25 Candy",160:"100 Candy",162:"50 Candy",164:"50 Candy",166:"25 Candy",168:"50 Candy",169:"100 Candy",171:"50 Candy",176:"25 Candy",178:"50 Candy",180:"25 Candy",181:"100 Candy",182:"100 Candy + Sun Stone",184:"25 Candy",186:"100 Candy + King's Rock",188:"25 Candy",189:"100 Candy",192:"50 Candy + Sun Stone",195:"50 Candy",196:"25 Candy + Walk 10km (Day)",197:"25 Candy + Walk 10km (Night)",199:"50 Candy + King's Rock",202:"25 Candy",205:"50 Candy",208:"50 Candy + Metal Coat",210:"50 Candy",212:"50 Candy + Metal Coat",217:"50 Candy",219:"50 Candy",221:"25 Candy",224:"50 Candy",229:"50 Candy",230:"100 Candy + Dragon Scale",232:"50 Candy",233:"50 Candy + Up-Grade",237:"25 Candy",242:"50 Candy",247:"25 Candy",248:"100 Candy",
  253:"25 Candy",254:"100 Candy",256:"25 Candy",257:"100 Candy",259:"25 Candy",260:"100 Candy",262:"50 Candy",264:"50 Candy",266:"12 Candy",267:"50 Candy",268:"12 Candy",269:"50 Candy",271:"25 Candy",272:"100 Candy",274:"25 Candy",275:"100 Candy",277:"50 Candy",279:"50 Candy",281:"25 Candy",282:"100 Candy",284:"50 Candy",286:"50 Candy",288:"25 Candy",289:"100 Candy",291:"50 Candy",292:"50 Candy",294:"12 Candy",295:"50 Candy",297:"50 Candy",301:"50 Candy",305:"25 Candy",306:"100 Candy",308:"50 Candy",310:"50 Candy",317:"50 Candy",319:"50 Candy",321:"400 Candy",323:"50 Candy",326:"50 Candy",329:"25 Candy",330:"100 Candy",332:"50 Candy",334:"400 Candy",340:"50 Candy",342:"50 Candy",344:"50 Candy",346:"50 Candy",348:"50 Candy",350:"100 Candy + Walk 20km",354:"50 Candy",356:"25 Candy",362:"50 Candy",364:"25 Candy",365:"100 Candy",367:"50 Candy (Random)",368:"50 Candy (Random)",372:"25 Candy",373:"100 Candy",375:"25 Candy",376:"100 Candy",
  388:"25 Candy",389:"100 Candy",391:"25 Candy",392:"100 Candy",394:"25 Candy",395:"100 Candy",397:"25 Candy",398:"100 Candy",400:"50 Candy",402:"50 Candy",404:"25 Candy",405:"100 Candy",407:"100 Candy + Sinnoh Stone",409:"50 Candy",411:"50 Candy",413:"50 Candy",414:"50 Candy",416:"50 Candy (\u2640 Only)",419:"50 Candy",421:"50 Candy",423:"50 Candy",424:"100 Candy + Sinnoh Stone",426:"50 Candy",428:"50 Candy",429:"100 Candy + Sinnoh Stone",430:"100 Candy + Sinnoh Stone",432:"50 Candy",435:"50 Candy",437:"50 Candy",444:"25 Candy",445:"100 Candy",448:"50 Candy",450:"50 Candy",452:"50 Candy",454:"50 Candy",457:"50 Candy",460:"50 Candy",461:"100 Candy + Sinnoh Stone",462:"100 Candy + Magnetic Lure",463:"100 Candy + Sinnoh Stone",464:"100 Candy + Sinnoh Stone",465:"100 Candy + Sinnoh Stone",466:"100 Candy + Sinnoh Stone",467:"100 Candy + Sinnoh Stone",468:"100 Candy + Sinnoh Stone",469:"100 Candy + Sinnoh Stone",470:"25 Candy + Mossy Lure",471:"25 Candy + Glacial Lure",472:"100 Candy + Sinnoh Stone",473:"100 Candy + Sinnoh Stone",474:"100 Candy + Sinnoh Stone",475:"100 Candy + Sinnoh Stone (\u2642 Only)",476:"100 Candy + Magnetic Lure",477:"100 Candy + Sinnoh Stone",478:"100 Candy + Sinnoh Stone (\u2640 Only)",
  496:"25 Candy",497:"100 Candy",499:"25 Candy",500:"100 Candy",502:"25 Candy",503:"100 Candy",505:"50 Candy",507:"25 Candy",508:"100 Candy",510:"50 Candy",512:"100 Candy + Unova Stone",514:"100 Candy + Unova Stone",516:"100 Candy + Unova Stone",518:"50 Candy",520:"12 Candy",521:"50 Candy",523:"50 Candy",525:"25 Candy",526:"200 Candy or Trade",528:"50 Candy + Walk 1km (Buddy)",530:"50 Candy",533:"25 Candy",534:"200 Candy or Trade",536:"25 Candy",537:"100 Candy",541:"25 Candy",542:"100 Candy",544:"25 Candy",545:"100 Candy",547:"50 Candy + Sun Stone",549:"50 Candy + Sun Stone",552:"25 Candy",553:"100 Candy",555:"50 Candy",558:"50 Candy",560:"50 Candy",563:"50 Candy",565:"50 Candy",567:"50 Candy",569:"50 Candy",571:"50 Candy",573:"50 Candy",575:"25 Candy",576:"100 Candy",578:"25 Candy",579:"100 Candy",581:"50 Candy",583:"25 Candy",584:"100 Candy",586:"50 Candy",589:"200 Candy or Trade",591:"50 Candy",593:"50 Candy",596:"50 Candy",598:"50 Candy",600:"25 Candy",601:"100 Candy",603:"25 Candy",604:"100 Candy + Unova Stone",606:"50 Candy",608:"25 Candy",609:"100 Candy + Unova Stone",611:"25 Candy",612:"100 Candy",614:"50 Candy",617:"200 Candy or Trade",620:"50 Candy",623:"50 Candy",625:"50 Candy",628:"50 Candy",630:"50 Candy",634:"25 Candy",635:"100 Candy",637:"400 Candy",
  651:"25 Candy",652:"100 Candy",654:"25 Candy",655:"100 Candy",657:"25 Candy",658:"100 Candy",660:"50 Candy",662:"25 Candy",663:"100 Candy",665:"25 Candy",666:"100 Candy",668:"50 Candy",673:"50 Candy",675:"50 Candy",680:"25 Candy",681:"100 Candy",683:"50 Candy + Use Incense (Buddy)",685:"50 Candy + Feed 25 Treats (Buddy)",687:"50 Candy (Phone Upside Down)",689:"50 Candy",691:"50 Candy",693:"50 Candy",695:"50 Candy",697:"50 Candy",699:"50 Candy",700:"25 Candy + Earn 70 Hearts (Buddy)",705:"25 Candy",706:"100 Candy (Rainy Weather or Rainy Lure)",709:"200 Candy or Trade",711:"50 Candy",713:"50 Candy",715:"400 Candy",
  723:"25 Candy",724:"100 Candy",726:"25 Candy",727:"100 Candy",729:"25 Candy",730:"100 Candy",732:"25 Candy",733:"100 Candy",735:"50 Candy",737:"25 Candy",738:"100 Candy + Magnetic Lure",740:"50 Candy",743:"50 Candy",745:"50 Candy (Day=Midday, Night=Midnight, Dusk=Event Rockruff)",748:"50 Candy",750:"50 Candy",752:"50 Candy",754:"50 Candy",756:"50 Candy",758:"50 Candy (\u2640 Only)",760:"400 Candy",762:"25 Candy",763:"100 Candy (\u2640 Only)",768:"50 Candy",770:"50 Candy",783:"25 Candy",784:"100 Candy",809:"400 Candy",
  811:"25 Candy",812:"100 Candy",814:"25 Candy",815:"100 Candy",817:"25 Candy",818:"100 Candy",820:"50 Candy",822:"25 Candy",823:"100 Candy",825:"25 Candy",826:"100 Candy",828:"50 Candy",830:"50 Candy",832:"50 Candy",834:"50 Candy",836:"50 Candy",838:"25 Candy",839:"100 Candy",841:"50 Candy",842:"50 Candy",844:"50 Candy",847:"50 Candy",849:"50 Candy",851:"50 Candy",853:"50 Candy",855:"50 Candy",857:"25 Candy",858:"100 Candy",860:"25 Candy",861:"100 Candy",862:"100 Candy (Night)",863:"50 Candy",864:"50 Candy",865:"50 Candy",866:"100 Candy",867:"50 Candy",869:"50 Candy",873:"50 Candy",879:"50 Candy",886:"25 Candy",887:"100 Candy",
  899:"50 Candy",900:"Max Battles Only",901:"100 Candy (During Full Moon)",902:"50 Candy",903:"100 Candy + Walk 7km (Buddy, Sunny)",904:"50 Candy + Win 10 Raids (Buddy)",
  907:"25 Candy",908:"100 Candy",910:"25 Candy",911:"100 Candy",913:"25 Candy",914:"100 Candy",916:"50 Candy",918:"50 Candy",920:"50 Candy",922:"25 Candy",923:"100 Candy + Walk 10km",925:"25 Candy",927:"50 Candy",929:"25 Candy",930:"100 Candy",933:"25 Candy",934:"100 Candy",936:"50 Candy + Defeat 30 Psychic (Buddy)",937:"50 Candy + Defeat 30 Ghost (Buddy)",939:"50 Candy",941:"50 Candy",943:"50 Candy",945:"50 Candy",947:"50 Candy",949:"50 Candy",952:"50 Candy",954:"50 Candy",956:"50 Candy",958:"25 Candy",959:"100 Candy",961:"50 Candy",964:"50 Candy",966:"50 Candy",970:"50 Candy",972:"50 Candy",975:"50 Candy",979:"100 Candy + Defeat 30 Raids (Buddy)",980:"50 Candy",981:"50 Candy",982:"50 Candy",983:"100 Candy",997:"25 Candy",998:"100 Candy",1000:"100 Candy",1011:"50 Candy",1013:"50 Candy",1019:"100 Candy"
};

// --- RAID BOSS CP RANGES (verified from LeekDuck Apr 2026) ---
const RAID_CP = {
  // 1-Star Raids
  "Emolga":{normal:"876–933",boosted:"1095–1166",weather:"Rainy, Windy"},
  "Dedenne":{normal:"991–1051",boosted:"1239–1315",weather:"Rainy, Cloudy"},
  "Yamper":{normal:"410–450",boosted:"512–562",weather:"Rainy"},
  "Pawmi":{normal:"326–363",boosted:"408–454",weather:"Rainy"},
  // 3-Star Raids
  "Raichu":{normal:"1180–1247",boosted:"1476–1558",weather:"Rainy"},
  "Alolan Raichu":{normal:"1238–1306",boosted:"1548–1633",weather:"Rainy, Windy"},
  "Azumarill":{normal:"849–907",boosted:"1061–1134",weather:"Rainy, Cloudy"},
  // 5-Star Raids
  "Regidrago":{normal:"1614–1699",boosted:"2017–2124",weather:"Windy"},
  // Mega Raids
  "Mega Manectric":{normal:"1267–1337",boosted:"1585–1672",weather:"Rainy"},
  // Shadow Raids
  "Shadow Latios":{normal:"2021–2178",boosted:"2526–2723",weather:"Windy"},
  // Upcoming (from event data - verified from LeekDuck when they were active)
  "Kyogre":{normal:"2260–2351",boosted:"2825–2939",weather:"Rainy"},
  "Groudon":{normal:"2260–2351",boosted:"2825–2939",weather:"Sunny"},
  "Tapu Koko":{normal:"1730–1810",boosted:"2162–2263",weather:"Rainy or Cloudy"},
  "Tapu Lele":{normal:"1718–1799",boosted:"2148–2249",weather:"Windy or Cloudy"}
};

function formImgUrl(dex, filename) { return `${IMG_BASE}/National-Dex/regular/${getGenFolder(dex)}/${filename}.webp`; }
function shinyFormImgUrl(dex, filename) { return `${IMG_BASE}/National-Dex/shiny/${getGenFolder(dex)}/${filename}.webp`; }

// Regional evolution chains: maps a form prefix to its evolution line [{dex, form file, name}]
const EVO_REGIONAL_BRANCH = {
  903: { parentImgFile: "0215_hisuian", parentName: "Hisuian Sneasel", parentDex: 215 },
  904: { parentImgFile: "0211_hisuian", parentName: "Hisuian Qwilfish", parentDex: 211 }
};
const REGIONAL_EVOS = {
  alola: [
    [19,20],[27,28],[37,38],[50,51],[52,53],[74,75,76],[88,89]
  ],
  galarian: [
    [52,863],[77,78],[79,80],[79,199],[83,865],[109,110],[122,866],[222,864],[263,264,862],[554,555],[562,867]
  ],
  hisuian: [
    [58,59],[100,101],[155,156,157],[211,904],[215,903],[501,502,503],[548,549],[550,902],[570,571],[627,628],[704,705,706],[712,713],[722,723,724]
  ],
  paldea: [
    [194,980]
  ]
};
function getRegionalEvoChain(dex, formLabel) {
  const region = formLabel.toLowerCase().replace("galar","galarian").replace("hisui","hisuian").replace("paldea","paldea");
  const chains = REGIONAL_EVOS[region];
  if (!chains) return null;
  const chain = chains.find(c => c.includes(dex));
  return chain || null;
}

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
    stages.push({ name: _fmtName(node.species.name), dexNum: num, trigger: POGO_EVO[num] || "", depth });
    for (const child of node.evolves_to) walk(child, depth + 1);
  }
  walk(chain.chain, 0);
  // Expand Pokemon with multiple evolution forms
  const EVO_FORM_EXPAND = {
    413: [
      { name: "Wormadam (Plant)", dexNum: 413, trigger: "50 Candy (Plant Cloak)", imgFile: "0413_plant-female" },
      { name: "Wormadam (Sandy)", dexNum: 413, trigger: "50 Candy (Sandy Cloak)", imgFile: "0413_sandy-female" },
      { name: "Wormadam (Trash)", dexNum: 413, trigger: "50 Candy (Trash Cloak)", imgFile: "0413_trash-female" }
    ],
    745: [
      { name: "Lycanroc (Midday)", dexNum: 745, trigger: "50 Candy (Day)", imgFile: "0745_midday" },
      { name: "Lycanroc (Dusk)", dexNum: 745, trigger: "50 Candy (Event Rockruff)", imgFile: "0745_dusk" },
      { name: "Lycanroc (Midnight)", dexNum: 745, trigger: "50 Candy (Night)", imgFile: "0745_midnight" }
    ],
    849: [
      { name: "Toxtricity (Amped)", dexNum: 849, trigger: "50 Candy (Random)", imgFile: "0849_amped" },
      { name: "Toxtricity (Low Key)", dexNum: 849, trigger: "50 Candy (Random)", imgFile: "0849_lowkey" }
    ],
    892: [
      { name: "Urshifu (Single Strike)", dexNum: 892, trigger: "50 Candy", imgFile: "0892_single" },
      { name: "Urshifu (Rapid Strike)", dexNum: 892, trigger: "50 Candy", imgFile: "0892_rapid" }
    ],
    925: [
      { name: "Maushold (Three)", dexNum: 925, trigger: "25 Candy (Random)", imgFile: "0925_three" },
      { name: "Maushold (Four)", dexNum: 925, trigger: "25 Candy (Random)", imgFile: "0925_four" }
    ]
  };
  const expanded = [];
  for (const s of stages) {
    if (EVO_FORM_EXPAND[s.dexNum]) {
      for (const form of EVO_FORM_EXPAND[s.dexNum]) expanded.push({ ...form, depth: s.depth });
    } else {
      expanded.push(s);
    }
  }
  // Append Mega Evolutions (Pokemon GO uses Mega Energy)
  const MEGA_EVOS = {
    3:[{n:"Mega Venusaur",f:"0003_mega"}],
    6:[{n:"Mega Charizard X",f:"0006_megax"},{n:"Mega Charizard Y",f:"0006_megay"}],
    9:[{n:"Mega Blastoise",f:"0009_mega"}],
    15:[{n:"Mega Beedrill",f:"0015_mega"}],
    18:[{n:"Mega Pidgeot",f:"0018_mega"}],
    65:[{n:"Mega Alakazam",f:"0065_mega"}],
    80:[{n:"Mega Slowbro",f:"0080_mega"}],
    94:[{n:"Mega Gengar",f:"0094_mega"}],
    115:[{n:"Mega Kangaskhan",f:"0115_mega-female"}],
    127:[{n:"Mega Pinsir",f:"0127_mega"}],
    130:[{n:"Mega Gyarados",f:"0130_mega"}],
    142:[{n:"Mega Aerodactyl",f:"0142_mega"}],
    150:[{n:"Mega Mewtwo X",f:"0150_megax"},{n:"Mega Mewtwo Y",f:"0150_megay"}],
    181:[{n:"Mega Ampharos",f:"0181_mega"}],
    208:[{n:"Mega Steelix",f:"0208_mega"}],
    212:[{n:"Mega Scizor",f:"0212_mega"}],
    214:[{n:"Mega Heracross",f:"0214_mega"}],
    229:[{n:"Mega Houndoom",f:"0229_mega"}],
    248:[{n:"Mega Tyranitar",f:"0248_mega"}],
    254:[{n:"Mega Sceptile",f:"0254_mega"}],
    257:[{n:"Mega Blaziken",f:"0257_mega"}],
    260:[{n:"Mega Swampert",f:"0260_mega"}],
    282:[{n:"Mega Gardevoir",f:"0282_mega"}],
    302:[{n:"Mega Sableye",f:"0302_mega"}],
    303:[{n:"Mega Mawile",f:"0303_mega"}],
    306:[{n:"Mega Aggron",f:"0306_mega"}],
    310:[{n:"Mega Manectric",f:"0310_mega"}],
    319:[{n:"Mega Sharpedo",f:"0319_mega"}],
    323:[{n:"Mega Camerupt",f:"0323_mega"}],
    334:[{n:"Mega Altaria",f:"0334_mega"}],
    354:[{n:"Mega Banette",f:"0354_mega"}],
    359:[{n:"Mega Absol",f:"0359_mega"}],
    362:[{n:"Mega Glalie",f:"0362_mega"}],
    373:[{n:"Mega Salamence",f:"0373_mega"}],
    376:[{n:"Mega Metagross",f:"0376_mega"}],
    380:[{n:"Mega Latias",f:"0380_mega-female"}],
    381:[{n:"Mega Latios",f:"0381_mega-male"}],
    382:[{n:"Primal Kyogre",f:"0382_primal"}],
    383:[{n:"Primal Groudon",f:"0383_primal"}],
    384:[{n:"Mega Rayquaza",f:"0384_mega"}],
    428:[{n:"Mega Lopunny",f:"0428_mega"}],
    445:[{n:"Mega Garchomp",f:"0445_mega"}],
    448:[{n:"Mega Lucario",f:"0448_mega"}],
    460:[{n:"Mega Abomasnow",f:"0460_mega"}],
    475:[{n:"Mega Gallade",f:"0475_mega-male"}],
    531:[{n:"Mega Audino",f:"0531_mega"}],
    719:[{n:"Mega Diancie",f:"0719_mega"}]
  };
  const maxDepth = Math.max(...expanded.map(e => e.depth));
  // Check all Pokemon in the chain for Megas (e.g., Slowbro has Mega but isn't final)
  const allDexInChain = [...new Set(expanded.map(e => e.dexNum))];
  const megasAdded = new Set();
  for (const dex of allDexInChain) {
    if (MEGA_EVOS[dex] && !megasAdded.has(dex)) {
      megasAdded.add(dex);
      const parentDepth = expanded.find(e => e.dexNum === dex)?.depth || maxDepth;
      for (const m of MEGA_EVOS[dex]) {
        const triggerText = dex === 382 || dex === 383 ? "400 Primal Energy" : dex === 384 ? "300 Mega Energy + Dragon Ascent (Meteorite)" : "200 Mega Energy (first), free after";
        expanded.push({ name: m.n, dexNum: dex, trigger: triggerText, depth: parentDepth + 1, imgFile: m.f, isMega: true });
      }
    }
  }
  _pokeCache[ck] = expanded;
  return expanded;
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
    if (m) { const dex = DEX[m[1]]; if (dex) return { url: natDexImg(dex, "_galarian"), shadow: lower.startsWith("shadow ") }; }
  }
  if (lower.includes("alolan")) {
    const m = name.match(/Alolan\s+(\w+)/);
    if (m) { const dex = DEX[m[1]]; if (dex) return { url: natDexImg(dex, "_alola"), shadow: lower.startsWith("shadow ") }; }
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
  "Gyarados","Honedge","Dhelmise","Sinistea","Duraludon","Dreepy",
  "Emolga","Raichu","Alolan Raichu","Azumarill","Regidrago"
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
  if (w >= 1280) return "desktop";
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
  { id: 3, title: "Fashion Raid Day", type: "Raid", url: "https://pokemongo.com/news/fashion-raid-day-2026", date: "2026-04-04", endDate: null, time: "2:00 PM – 5:00 PM", color: "#E91E63", icon: "\uD83D\uDC57", iconImg: "assets/pokemon-images/Event-Dex/regular/Gen-1_Kanto/0149_fashion.webp", featured: true, summary: "Costumed Pokémon take over raids! Dragonite, Butterfree, Diglett, Wooper, Sneasel, Kirlia, Absol, Shinx, Croagunk, Blitzle, and Minccino in costume.", details: { bosses: ["Costume Dragonite (3\u2605 Raid)", "Costume Absol (3\u2605 Raid)", "Costume Butterfree (3\u2605 Raid)", "Costume Kirlia (3\u2605 Raid)", "Costume Blitzle (1\u2605 Raid)", "Costume Croagunk (1\u2605 Raid)", "Costume Diglett (1\u2605 Raid)", "Costume Minccino (1\u2605 Raid)", "Costume Shinx (1\u2605 Raid)", "Costume Sneasel (1\u2605 Raid)", "Costume Wooper (1\u2605 Raid)"], bonuses: ["Up to 6 free Raid Passes from spinning Gym Photo Discs", "Remote Raid Pass limit increased to 20 (Apr 3 5 PM \u2013 Apr 4 8 PM PDT)", "Boosted Shiny rates for all costumed raid Pok\u00E9mon", "Costumed Pok\u00E9mon appearing more frequently in raids for 3 hours"], ticketPrice: "$4.99", ticketBonuses: ["Up to 14 Raid Passes from spinning Gym Photo Discs (vs 6 free)", "50% more XP from Raid Battles", "2\u00D7 Stardust from Raid Battles", "Increased chance of Rare Candy XL from Raid Battles", "Ultra Ticket Box $4.99 (ticket + Premium Battle Pass)", "Tickets giftable to Great Friends or higher"], tips: ["Costume Dragonite and Absol are the rarest \u2014 prioritize those raids.", "These costumed forms can't evolve \u2014 collector items only.", "Ultra Ticket Box is Web Store exclusive.", "Plan a raid route with your group ahead of time."], counters: { label: "Costume Dragonite (Dragon/Flying)", pokemon: [{ name: "Mega Gardevoir", fast: "Charm", charged: "Dazzling Gleam" }, { name: "Shadow Mamoswine", fast: "Powder Snow", charged: "Avalanche" }, { name: "Mega Rayquaza", fast: "Dragon Tail", charged: "Dragon Ascent", chargedNote: "Signature" }, { name: "Shadow Salamence", fast: "Dragon Tail", charged: "Outrage" }, { name: "Galarian Darmanitan", fast: "Ice Fang", charged: "Avalanche" }, { name: "Shadow Weavile", fast: "Ice Shard", charged: "Avalanche" }] } } },
  // Historical Community Days
  ...[
    ["Sprigatito","2025-01-05","Frenzy Plant → Meowscarada","\uD83C\uDF31","#27AE60","3× Stardust, 2× Candy"],
    ["CD Classic: Ralts","2025-01-25","Gardevoir with Synchronoise (exclusive Charged Move), Gallade with Synchronoise (exclusive Charged Move)","\uD83D\uDC83","#9B59B6","1/4 Hatch Distance"],
    ["Karrablast & Shelmet","2025-02-09","Escavalier with Razor Shell (exclusive Charged Move), Accelgor with Energy Ball (exclusive Charged Move)","\uD83D\uDC1B","#E67E22","3× XP, 2× Candy"],
    ["Fuecoco","2025-03-08","Blast Burn → Skeledirge","\uD83D\uDD25","#E74C3C","3× Stardust, 2× Candy"],
    ["CD Classic: Totodile","2025-03-22","Hydro Cannon → Feraligatr","\uD83D\uDC0A","#3498DB","1/4 Hatch Distance"],
    ["Vanillite","2025-04-27","Avalanche → Vanilluxe","\uD83C\uDF66","#85C1E9","3× XP, 2× Candy"],
    ["Pawmi","2025-05-11","Brick Break → Pawmot","\u26A1","#F39C12","1/4 Hatch Distance, 2× Candy"],
    ["CD Classic: Machop","2025-05-24","Payback → Machamp","\uD83D\uDCAA","#95A5A6","3× Stardust"],
    ["Jangmo-o","2025-06-21","Clanging Scales → Kommo-o","\uD83D\uDC09","#E74C3C","3× XP, 2× Candy"],
    ["CD Classic: Eevee","2025-07-05","Eevee with Last Resort (exclusive Charged Move)","\uD83E\uDD8A","#A0522D","1/4 Hatch Distance"],
    ["Quaxly","2025-07-20","Hydro Cannon → Quaquaval","\uD83E\uDD86","#2980B9","3× Stardust, 2× Candy"],
    ["Rookidee","2025-08-30","Air Cutter → Corviknight","\uD83D\uDC26","#5D6D7E","1/4 Hatch Distance, 2× Candy"],
    ["Flabébé","2025-09-14","Chilling Water → Florges","\uD83C\uDF38","#FF69B4","1/4 Hatch Distance, 2× Candy"],
    ["Solosis","2025-10-12","Charm → Reuniclus","\uD83E\uDDEC","#27AE60","3× Stardust, 2× Candy"],
    ["Pikipek","2025-11-30","Beak Blast → Toucannon","\uD83D\uDC26","#E67E22","3× XP, 2× Candy"],
    ["December Recap 2025","2025-12-06","All 2025 CD moves available","\uD83C\uDF84","#C0392B","2× XP, 2× Stardust, 2× Candy"],
    ["Rowlet","2024-01-06","Frenzy Plant → Decidueye","\uD83C\uDF43","#27AE60","3× Stardust, 2× Candy"],
    ["CD Classic: Porygon","2024-01-20","Tri Attack → Porygon-Z","\uD83D\uDCA0","#E91E63","1/4 Hatch Distance"],
    ["Chansey","2024-02-10","Wild Charge → Blissey","\uD83E\uDD5A","#FF69B4","3× XP, 2× Candy"],
    ["Bellsprout","2024-03-16","Magical Leaf → Victreebel","\uD83C\uDF3F","#27AE60","3× Stardust, 2× Candy"],
    ["CD Classic: Bagon","2024-04-07","Outrage → Salamence","\uD83D\uDC09","#3498DB","1/4 Hatch Distance"],
    ["Litten","2024-04-20","Blast Burn → Incineroar","\uD83D\uDC31","#E74C3C","3× XP, 2× Candy"],
    ["Bounsweet","2024-05-19","High Jump Kick → Tsareena","\uD83C\uDF4A","#27AE60","3× Stardust, 2× Candy"],
    ["Goomy","2024-06-09","Thunder Punch → Goodra","\uD83D\uDC0C","#8E44AD","3× Stardust, 2× Candy"],
    ["CD Classic: Cyndaquil","2024-06-22","Blast Burn → Typhlosion","\uD83D\uDD25","#E74C3C","2× Stardust, 2× XP"],
    ["Tynamo","2024-07-21","Volt Switch → Eelektross","\u26A1","#3498DB","1/4 Hatch Distance, 2× Candy"],
    ["Popplio","2024-08-31","Hydro Cannon → Primarina","\uD83C\uDFA4","#2980B9","3× XP, 2× Candy"],
    ["CD Classic: Beldum","2024-08-18","Meteor Mash → Metagross","\u2699\uFE0F","#95A5A6","1/4 Hatch Distance"],
    ["Ponyta & G-Ponyta","2024-09-14","Rapidash with Wild Charge (exclusive Charged Move), Galarian Rapidash with Wild Charge (exclusive Charged Move)","\uD83D\uDC34","#E67E22","3× Stardust, 2× Candy"],
    ["Sewaddle","2024-10-05","Shadow Claw → Leavanny","\uD83C\uDF42","#27AE60","1/4 Hatch Distance, 2× Candy"],
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
    ["Poliwag","2023-08-13","Poliwrath with Counter (exclusive Charged Move), Politoed with Ice Beam (exclusive Charged Move)","\uD83C\uDF00","#3498DB","3× Stardust"],
    ["Charmander","2023-09-02","Charizard with Dragon Breath (exclusive Fast Move), Charizard with Blast Burn (exclusive Charged Move)","\uD83D\uDD25","#E74C3C","CD Classic"],
    ["Grubbin","2023-09-23","Volt Switch → Vikavolt","\u26A1","#F39C12","3× XP"],
    ["Timburr","2023-10-15","Brutal Swing → Conkeldurr","\uD83D\uDCAA","#6D4C41","3× Stardust"],
    ["Mareep","2023-11-25","Dragon Pulse → Ampharos","\uD83D\uDC11","#F1C40F","CD Classic"],
    ["Wooper & Paldean Wooper","2023-11-05","Quagsire with Aqua Tail (exclusive Charged Move), Clodsire with Megahorn (exclusive Charged Move)","\uD83D\uDC1F","#3498DB","3× XP"],
    ["December Recap 2023","2023-12-16","All 2023 CD moves available","\uD83C\uDF84","#C0392B","2× Candy, 2× Stardust, 2× XP"],
    ["Bulbasaur","2022-01-22","Frenzy Plant → Venusaur","\uD83C\uDF31","#27AE60","CD Classic"],
    ["Hoppip","2022-01-16","Acrobatics → Jumpluff","\uD83C\uDF88","#FF69B4","3× Stardust"],
    ["Hoppip (Makeup)","2022-02-05","Acrobatics → Jumpluff","\uD83C\uDF88","#FF69B4","Makeup Day"],
    ["Sandshrew & A-Sandshrew","2022-03-13","Sandslash with Night Slash (exclusive Charged Move), Alolan Sandslash with Shadow Claw (exclusive Charged Move)","\uD83E\uDD94","#F39C12","2× Stardust, 3× XP"],
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
    ["Roselia","2021-02-07","Roserade with Bullet Seed (exclusive Fast Move), Roserade with Weather Ball (exclusive Charged Move)","\uD83C\uDF39","#27AE60","3× Stardust"],
    ["Fletchling","2021-03-06","Incinerate → Talonflame","\uD83D\uDC26","#E74C3C","3× XP"],
    ["Snivy","2021-04-11","Frenzy Plant → Serperior","\uD83D\uDC0D","#27AE60","3× XP"],
    ["Swablu","2021-05-15","Moonblast → Altaria","\u2601\uFE0F","#3498DB","3× XP"],
    ["Gible","2021-06-06","Earth Power → Garchomp","\uD83E\uDD88","#2C3E50","3× XP"],
    ["Tepig","2021-07-03","Blast Burn → Emboar","\uD83D\uDC37","#E74C3C","3× Stardust"],
    ["Eevee","2021-08-14","Eevee with Last Resort (exclusive Charged Move)","\uD83E\uDD8A","#A0522D","2-day event"],
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
    ["Charmander","2020-10-17","Charizard with Dragon Breath (exclusive Fast Move)","\uD83D\uDD25","#E74C3C","3× Stardust"],
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
    ["Ralts","2019-08-03","Gardevoir with Synchronoise (exclusive Charged Move), Gallade with Synchronoise (exclusive Charged Move)","\uD83D\uDC83","#9B59B6","3× XP"],
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
    ["Eevee","2018-08-11","Eevee with Last Resort (exclusive Charged Move)","\uD83E\uDD8A","#A0522D","2-day event"],
    ["Chikorita","2018-09-22","Frenzy Plant → Meganium","\uD83C\uDF3F","#27AE60","3× XP"],
    ["Beldum","2018-10-21","Meteor Mash → Metagross","\u2699\uFE0F","#95A5A6","3× Stardust"],
    ["Cyndaquil","2018-11-10","Blast Burn → Typhlosion","\uD83D\uDD25","#E74C3C","2× Stardust"],
    ["December Recap 2018","2018-12-01","All 2018 CD moves available","\uD83C\uDF84","#C0392B","2× Candy, 2× Stardust, 2× XP"],
  ].map(([title,date,move,icon,color,bonus],i) => {
    const cdName = title.replace("CD Classic: ","").replace("Community Day: ","").replace(/December Recap \d+/,"").replace(/\s*\(.*?\)/,"").replace("A-","Alolan ").replace("G-","Galarian ").split(" & ")[0].split(" + ")[0].replace("Flabébé","Flabebe").trim();
    const cdImg = cdName ? getPokemonImg(cdName) : null;
    const transformedMove = (move.includes(" with ") || move.startsWith("All ") || move.includes("Eeveelution")) ? move : move.split(", ").map(m => {
      const match = m.match(/^(.+?)\s*→\s*(.+)$/);
      return match ? `Evolve to ${match[2]} for the exclusive Charged Attack ${match[1]}` : m;
    }).join(". ");
    const cdPokemon = title.replace("CD Classic: ","").replace("Community Day: ","").replace(/\s*\(.*?\)/,"").trim();
    const summaryText = move.startsWith("All ") ? move : `${cdPokemon} takes the spotlight! ${transformedMove}`;
    return {
      id: 1000+i, title, type: "Community Day", date, endDate: null,
      time: "2:00 PM – 5:00 PM", color, icon, iconImg: cdImg ? cdImg.url : undefined, featured: false,
      summary: `${summaryText}.`,
      details: { bosses: (move.includes(", ") ? move.split(", ") : [move]).map(m => {
        if (m.includes(" with ") || m.startsWith("All ") || m.includes("Eeveelution")) return m;
        const match = m.match(/^(.+?)\s*→\s*(.+)$/);
        if (match) return `${match[2]} with ${match[1]} (exclusive Charged Move)`;
        return m;
      }), bonuses: [bonus], tips: [] }
    };
  }),
  { id: 50, title: "CD Classic: Piplup", type: "Community Day", date: "2026-01-04", endDate: null, time: "2:00 PM – 5:00 PM", color: "#3498DB", icon: "\uD83D\uDC27", iconImg: "assets/pokemon-images/National-Dex/regular/Gen-4_Sinnoh/0393.webp", featured: false, summary: "Piplup Community Day Classic! Evolve to Empoleon for the exclusive Charged Attack Hydro Cannon.", details: { bosses: ["Empoleon with Hydro Cannon (exclusive Charged Move)"], bonuses: ["1/4 Hatch Distance", "3-hour Incense", "1-hour Lure Modules", "Boosted Shiny Piplup rate", "Special Research available for $1.99"], tips: ["Hydro Cannon Empoleon is a solid Water attacker and PvP pick.", "Piplup attracted to Lure Modules have boosted Shiny rates.", "Community Day Classic events revisit fan-favorite Pokémon."] } },
  { id: 51, title: "Community Day: Grookey", type: "Community Day", date: "2026-01-18", endDate: null, time: "2:00 PM – 5:00 PM", color: "#27AE60", icon: "\uD83C\uDF31", iconImg: "assets/pokemon-images/National-Dex/regular/Gen-8_Galar/0810.webp", featured: false, summary: "Grookey takes the spotlight! Evolve to Rillaboom for the exclusive Charged Attack Frenzy Plant.", details: { bosses: ["Rillaboom with Frenzy Plant (exclusive Charged Move)"], bonuses: ["Boosted Shiny Grookey rate", "3-hour Incense", "1-hour Lure Modules (2–9 PM)", "Extra Special Trade (2–9 PM)", "Special Background encounters available"], tips: ["Frenzy Plant is the premier Grass Charged Move — Rillaboom benefits hugely.", "First Community Day of 2026 with the new yearly Special Background feature.", "Check in at Community Ambassador events for bonus Timed Research."] } },
  { id: 52, title: "Community Day: Vulpix & Alolan Vulpix", type: "Community Day", date: "2026-02-15", endDate: null, time: "2:00 PM – 5:00 PM", color: "#E67E22", icon: "\uD83E\uDD8A", iconImg: "assets/pokemon-images/National-Dex/regular/Gen-1_Kanto/0037.webp", featured: false, summary: "Vulpix and Alolan Vulpix share the spotlight! Exclusive moves Energy Ball and Chilling Water.", details: { bosses: ["Ninetales with Energy Ball (exclusive)", "Alolan Ninetales with Chilling Water (exclusive)"], bonuses: ["Both forms spawning in the wild", "Boosted Shiny rates for both Vulpix forms", "3-hour Incense", "Standard Community Day bonuses"], tips: ["Alolan Ninetales with Chilling Water is excellent in PvP Great League.", "Dual-feature Community Days let you hunt two shinies at once.", "Prioritize Alolan Vulpix if you care about PvP meta relevance."] } },
  { id: 53, title: "Community Day: Scorbunny", type: "Community Day", url: "https://pokemongo.com/news/communityday-march-2026-scorbunny", date: "2026-03-14", endDate: null, time: "2:00 PM – 5:00 PM", color: "#E74C3C", icon: "\uD83D\uDC30", iconImg: "assets/pokemon-images/National-Dex/regular/Gen-8_Galar/0813.webp", featured: false, summary: "Scorbunny stars in March! Evolve Raboot to Cinderace for the exclusive Charged Attack Blast Burn.", details: { bosses: ["Cinderace with Blast Burn (exclusive Charged Move)"], bonuses: ["1/4 Egg Hatch Distance", "3-hour Incense", "1-hour Lure Modules (2–9 PM)", "Extra Special Trade (2–9 PM)", "50% less Trade Stardust cost (2–9 PM)"], tips: ["Blast Burn is the best Fire Charged Move — makes Cinderace a solid Fire attacker.", "Evolve within 5 hours after the event ends to get the exclusive move.", "Overlaps with Pokémon Pokopia Celebration Event — double-dip on bonuses."] } },
  { id: 4, title: "Community Day: Tinkatink", type: "Community Day", url: "https://pokemongo.com/news/communityday-april-2026-tinkatink", date: "2026-04-11", endDate: null, time: "2:00 PM – 5:00 PM", color: "#E84393", icon: "\uD83D\uDD28", iconImg: "assets/pokemon-images/National-Dex/regular/Gen-9_Paldea/0957-female.webp", featured: true, summary: "Tinkatink takes the spotlight! Evolve to Tinkaton for the exclusive Charged Attack Gigaton Hammer.", details: { bosses: ["Tinkaton with Gigaton Hammer (exclusive Charged Move)"], bonuses: ["3× Catch Stardust", "2× Catch Candy", "2× chance for Candy XL", "3-hour Incense", "1-hour Lure Modules (2–9 PM)", "1 extra Special Trade (2–9 PM)", "50% less Trade Stardust cost (2–9 PM)"], tips: ["Evolve Tinkatuff during the event or up to 4 hours after (by 9 PM) for Gigaton Hammer.", "Stack Star Pieces with the 3× Stardust bonus — one of the best dust events.", "Tinkatink with Special Backgrounds from Field Research and Lure Modules.", "Take snapshots for Tinkatink photobomb encounters."] } },
  { id: 54, title: "Community Day: May 2026", type: "Community Day", date: "2026-05-09", endDate: null, time: "2:00 PM – 5:00 PM", color: "#636E72", icon: "\u2753", featured: false, summary: "May Community Day — date confirmed, featured Pokémon to be announced.", details: { bosses: ["Featured Pokémon: TBA"], bonuses: ["Standard Community Day bonuses expected", "Exclusive move for final evolution", "Boosted Shiny rate"], tips: ["Date is locked in — mark your calendar.", "Featured Pokémon usually announced 2–4 weeks before.", "Start stockpiling Poké Balls and Star Pieces."] } },
  { id: 55, title: "CD Classic: May 2026", type: "Community Day", date: "2026-05-16", endDate: null, time: "2:00 PM – 5:00 PM", color: "#636E72", icon: "\uD83D\uDD04", featured: false, summary: "May Community Day Classic — date confirmed, featured Pokémon to be announced.", details: { bosses: ["Featured Pokémon: TBA (past Community Day rerun)"], bonuses: ["Standard CD Classic bonuses expected", "Exclusive move available again"], tips: ["CD Classics bring back Pokémon and moves from past Community Days.", "Great chance to get an exclusive move you missed."] } },
  { id: 5, title: "Sustainability Week 2026", type: "Event", url: "https://pokemongo.com/news/sustainability-week-2026", date: "2026-04-14", endDate: "2026-04-20", time: "10:00 AM – 8:00 PM", color: "#27AE60", icon: "\uD83C\uDF3F", featured: true, summary: "Silicobra debuts! G. Corsola w/ pink sunglasses and Shiny Toedscool make first appearances.", details: { bosses: ["Silicobra (debut)", "G. Corsola w/ pink sunglasses", "Shiny Toedscool", "Seedot", "Castform", "Wiglett"], bonuses: ["Rotating Route spawns every 2 days", "Boosted Shiny Lapras, Togetic, Castform, Trubbish", "Toedscool in forested/grassy biomes", "Silicobra in desert-like biomes", "GO Pass milestone bonuses"], tips: ["Shiny Toedscool is brand new — check every one.", "Galarian Corsola in sunglasses is a top collector target.", "Route spawns rotate every 2 days — plan your priorities.", "Silicobra evolves into Sandaconda for 50 Candy."] } },
  { id: 6, title: "Replay: Riolu Hatch Day", type: "Event", url: "https://pokemongo.com/en/news/replay-riolu-hatch-day-2026", date: "2026-04-18", endDate: null, time: "11:00 AM – 5:00 PM", color: "#3498DB", icon: "\uD83E\uDD5A", iconImg: "assets/pokemon-images/eggs/egg-2.png", featured: false, summary: "Riolu Hatch Day returns! Boosted Shiny Riolu odds from eggs.", details: { bosses: ["Riolu"], bonuses: ["Riolu eggs with boosted Shiny odds", "Timed Research", "Overlaps with Sustainability Week"], paidResearch: { price: "$1.99", rewards: ["1/4 Egg Hatch Distance during event", "1 Star Piece", "2 Super Incubators"], note: "Tasks must be completed and rewards claimed before 5:00 PM local time on April 18." }, tips: ["Clear egg slots before the event.", "Use Super Incubators during the 6-hour window.", "Shiny Riolu/Lucario is one of the most coveted shinies."] } },
  { id: 7, title: "Replay: GO Bigger", type: "Max Battle", url: "https://pokemongo.com/news/replay-go-bigger-2026", date: "2026-04-25", endDate: null, time: "2:00 PM – 5:00 PM", color: "#8E44AD", icon: "\uD83D\uDCA5", featured: true, summary: "Gigantamax Venusaur, Charizard, Blastoise & Gengar at all Power Spots! Shiny forms available. Max Particle cap raised to 1,600.", details: { bosses: ["Gigantamax Venusaur \u2728", "Gigantamax Charizard \u2728", "Gigantamax Blastoise \u2728", "Gigantamax Gengar \u2728"], bonuses: ["Max Particle storage cap raised to 1,600", "8\u00D7 Max Particles from Power Spots", "2\u00D7 Max Particles from exploring (12 AM \u2013 5 PM local time)", "1/4 Adventuring distance (12 AM \u2013 5 PM local time)", "All Power Spots host Gigantamax Battles with increased refresh rates", "3 Special Trades for the day", "Remote Raid limit increased to 20 (Apr 24 5 PM \u2013 Apr 25 8 PM PDT)"], paidResearch: { price: "$4.99", rewards: ["1 Max Mushroom", "25,000 XP", "6,400 Max Particles", "2\u00D7 XP from Max Battles"] }, tips: ["Gigantamax Gengar is new to this replay \u2014 prioritize if you need it.", "All four Gigantamax forms can be Shiny \u2014 check every encounter.", "Max Mushrooms temporarily double Dynamax/Gigantamax damage in Max Battles.", "Coordinate 4-player groups for the toughest Gigantamax raids.", "Use Campfire to locate nearby Max Battles."] } },
  { id: 8, title: "Steeled Resolve", type: "Event", url: "https://pokemongo.com/news/steeled-resolve-2026", urlDisabled: false, date: "2026-04-28", endDate: "2026-05-04", time: "10:00 AM – 8:00 PM", color: "#95A5A6", icon: "\uD83D\uDEE1\uFE0F", iconImg: "assets/pokemon-images/National-Dex/regular/Gen-9_Paldea/0968.webp", featured: true, summary: "Orthworm debuts! Steel-type event with Shiny Meltan from Mystery Boxes and GO Pass milestones. 'Steeled Resolve: Taken Over' sub-event begins April 30.", details: { bosses: ["Orthworm (debut) \u2728", "Magnemite \u2728", "Aron \u2728", "Ferroseed \u2728", "Pawniard \u2728", "Magnemite (Field Research) \u2728", "Pineco (Field Research) \u2728", "Nosepass (Field Research) \u2728", "Bronzor (Field Research) \u2728", "Drilbur (Field Research) \u2728", "Ferroseed (Field Research) \u2728", "Beldum (Field Research - rare) \u2728", "Shieldon (Field Research - rare) \u2728", "Honedge (1\u2605 Raid) \u2728", "Shieldon (1\u2605 Raid) \u2728", "Beldum (1\u2605 Raid) \u2728", "Orthworm (3\u2605 Raid) \u2728", "Meltan (Mystery Box) \u2728"], bonuses: ["Reduced Mystery Box cooldown timer", "Shiny Meltan available from Mystery Box during event", "No daily GO Point cap May 2\u20134"], milestones: [{ tier: "Tier 1", bonus: "2\u00D7 Catch Candy" }, { tier: "Tier 2", bonus: "Increased Stardust from Team GO Rocket defeats" }], goPass: { free: ["Encounters with Beldum, Pawniard, Honedge, Meltan, and more Steel-types", "1 Super Rocket Radar", "Mysterious Components and Shadow Shards", "2\u00D7 Catch Candy (Tier 1 milestone)", "Increased Stardust from Team GO Rocket defeats (Tier 2 milestone)"], deluxe: { price: "$4.99", rewards: ["Everything in the free track", "Extra Steel-type Pok\u00E9mon encounters", "2 Super Rocket Radars (1 extra)", "Upgraded milestone rewards", "Faster progression through ranks"] }, deluxePlus: { price: "$6.99", rewards: ["Everything in GO Pass Deluxe", "Instantly skip to Rank 7", "Web Store bundle: 10 Ultra Balls, 5 Max Revives, 1 Premium Battle Pass, 5 Max Potions"] } }, tips: ["Orthworm is brand new \u2014 catch and raid for candy.", "Use Mystery Box during the event for a shot at Shiny Meltan.", "Beldum and Shieldon are rare Field Research encounters \u2014 complete every task.", "Steeled Resolve: Taken Over sub-event begins April 30 \u2014 likely Team GO Rocket themed.", "GO Pass Deluxe rewards include Super Rocket Radars and Shadow Shards.", "No GO Point cap May 2\u20134 \u2014 grind milestones that weekend."] } },
  { id: 20, title: "5\u2605 Raid: Regidrago", type: "Raid", date: "2026-04-01", endDate: "2026-04-07", time: "Raid Hour: Wed Apr 1, 6–7 PM", color: "#E74C3C", icon: "\uD83D\uDC09", iconImg: "assets/pokemon-images/National-Dex/regular/Gen-8_Galar/0895.webp", featured: false, summary: "Regidrago in 5-Star Raids. Mega Manectric in Mega Raids. Shadow Latios weekends.", details: { bosses: ["Regidrago (5\u2605)", "Mega Manectric (Mega)", "Shadow Latios (weekends through May 5)", "Raichu (3\u2605)", "Alolan Raichu (3\u2605)", "Azumarill (3\u2605)", "Emolga (1\u2605)", "Dedenne (1\u2605)", "Yamper (1\u2605)", "Pawmi (1\u2605)"], bonuses: ["Raid Hour: Wednesday 6–7 PM"], tips: ["Weak to Fairy, Ice, Dragon.", "Shadow Latios on weekends — bring Purified Gems."], counters: { label: "Regidrago (Dragon)", pokemon: [{ name: "Mega Rayquaza", fast: "Dragon Tail", charged: "Dragon Ascent", chargedNote: "Signature" }, { name: "Shadow Salamence", fast: "Dragon Tail", charged: "Outrage" }, { name: "Shadow Dragonite", fast: "Dragon Tail", charged: "Outrage" }, { name: "Mega Gardevoir", fast: "Charm", charged: "Dazzling Gleam" }, { name: "Shadow Garchomp", fast: "Dragon Tail", charged: "Outrage" }, { name: "Mega Latios", fast: "Dragon Breath", charged: "Dragon Claw" }] } } },
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
    "Emolga (1\u2605 Raid)","Dedenne (1\u2605 Raid)","Yamper (1\u2605 Raid)","Pawmi (1\u2605 Raid)"
  ],
  "3-Star Raids": [
    "Raichu (3\u2605 Raid)","Alolan Raichu (3\u2605 Raid)","Azumarill (3\u2605 Raid)"
  ],
  "5-Star Raids": [
    "Regidrago (5\u2605 Raid)"
  ],
  "Mega Raids": [
    "Mega Manectric (Mega)"
  ],
  "Shadow 1-Star Raids": [
    "Shadow Dratini (1\u2605 Shadow Raid)","Shadow Cacnea (1\u2605 Shadow Raid)","Shadow Gligar (1\u2605 Shadow Raid)","Shadow Joltik (1\u2605 Shadow Raid)"
  ],
  "Shadow 3-Star Raids": [
    "Shadow Alolan Marowak (3\u2605 Shadow Raid)","Shadow Lapras (3\u2605 Shadow Raid)","Shadow Stantler (3\u2605 Shadow Raid)"
  ],
  "Shadow 5-Star Raids": [
    "Shadow Latios (5\u2605 Shadow Raid)"
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

// --- WEB STORE BOX DATA ---
const STORE_ITEM_VALUES = {
  "Remote Raid Pass": 1.50,
  "Premium Battle Pass": 1.00,
  "Egg Incubator": 1.00,
  "Super Incubator": 1.50,
  "Lucky Egg": 0.62,
  "Star Piece": 0.75,
  "Max Revive": 0.13,
  "Max Potion": 0.20,
  "Ultra Ball": 0.05,
  "Silver Pinap Berry": 0.20,
  "Golden Razz Berry": 0.13,
  "Max Particle Pack": 1.33,
  "Max Mushroom": 3.33,
  "Link Charge": 0.005,
  "GO Pass Deluxe": 4.99,
  "Fashion Raid Day Ticket": 2.99,
  "Pokémon Storage Upgrade": 1.99,
  "Item Bag Upgrade": 1.99,
  "PokéCoin": 0.007
};

const ESTIMATED_VALUE_ITEMS = new Set(["Ultra Ball", "GO Pass Deluxe", "Fashion Raid Day Ticket", "PokéCoin"]);

const ITEM_IMAGES = {
  "Remote Raid Pass": "remote-raid-pass.png",
  "Premium Battle Pass": "premium-raid-pass.png",
  "Egg Incubator": "EggIncubatorIAP_Activated.png",
  "Super Incubator": "super_incubator.webp",
  "Lucky Egg": "luckyegg.png",
  "Star Piece": "starpiece.png",
  "Max Revive": "Max-revive.png",
  "Max Potion": "Max-potion.png",
  "Ultra Ball": "ultraball_sprite.png",
  "Silver Pinap Berry": "Silver-pinap-berry.png",
  "Golden Razz Berry": "Golden-razz-berry.png",
  "Max Particle Pack": "mp_pack.png",
  "Max Mushroom": "max_mushrooms.webp",
  "Link Charge": "link_charge.webp",
  "GO Pass Deluxe": "go_pass_deluxe.webp",
  "Fashion Raid Day Ticket": "item_1608_hd.png",
  "Pok\u00E9mon Storage Upgrade": "pokemonstorageupgrade.1.png",
  "Item Bag Upgrade": "itemstorageupgrade.1.png",
  "Pok\u00E9Coin": "pokecoin.png"
};
const ITEM_IMAGES_MULTI = {
  "Egg Incubator": { 3: "limited_incubatorx3.png" },
  "Max Particle Pack": { 3: "mp_pack_mulit.png", 6: "mp_pack_mulit.png" },
  "Star Piece": { 8: "starpiece.8.png" }
};

const WEB_STORE_BOXES = [
  {
    name: "GO Pass Deluxe: A Shockingly Good Time Ultra Box",
    price: 8.99,
    category: "Event Bundle",
    limited: true,
    availableFrom: "2026-03-31",
    expires: "2026-04-06",
    oneTime: true,
    items: [
      { name: "GO Pass Deluxe", qty: 1, note: "A Shockingly Good Time" },

      { name: "Ultra Ball", qty: 20 },
      { name: "Max Revive", qty: 10 },
      { name: "Premium Battle Pass", qty: 2 },
      { name: "Egg Incubator", qty: 1 },
      { name: "Super Incubator", qty: 1 },
      { name: "Max Potion", qty: 10 }
    ]
  },
  {
    name: "GO Pass Deluxe: April Ultra Box",
    price: 14.99,
    category: "Event Bundle",
    limited: true,
    limitedLabel: "LIMITED-TIME ONLY",
    oneTime: true,
    items: [
      { name: "GO Pass Deluxe", qty: 1, note: "April" },

      { name: "Ultra Ball", qty: 20 },
      { name: "Max Revive", qty: 10 },
      { name: "Premium Battle Pass", qty: 2 },
      { name: "Egg Incubator", qty: 1 },
      { name: "Super Incubator", qty: 1 },
      { name: "Max Potion", qty: 10 }
    ]
  },
  {
    name: "Fashion Raid Day Ultra Ticket Box",
    price: 4.99,
    category: "Event Bundle",
    limited: true,
    availableFrom: "2026-03-28",
    expires: "2026-04-04",
    oneTime: true,
    items: [
      { name: "Fashion Raid Day Ticket", qty: 1 },
      { name: "Premium Battle Pass", qty: 1 }
    ],
    ticketBonuses: ["Up to 14 Raid Passes from spinning Gym Photo Discs", "Increased chance to get Rare Candy XL from Raid Battles", "50% more XP from Raid Battles", "2\u00D7 Stardust from Raid Battles"]
  },
  {
    name: "GO Pass Deluxe: April",
    price: 7.99,
    category: "Event Bundle",
    limited: true,
    limitedLabel: "LIMITED-TIME ONLY",
    oneTime: true,
    items: [
      { name: "GO Pass Deluxe", qty: 1, note: "April" },
      { name: "Ultra Ball", qty: 10 },
      { name: "Max Revive", qty: 5 },
      { name: "Premium Battle Pass", qty: 1 },
      { name: "Max Potion", qty: 5 }
    ]
  },
  {
    name: "GO Pass Deluxe: Shockingly Good Time + 6 Ranks",
    price: 6.99,
    category: "Event Bundle",
    limited: true,
    availableFrom: "2026-03-31",
    expires: "2026-04-06",
    oneTime: true,
    items: [
      { name: "GO Pass Deluxe", qty: 1, note: "A Shockingly Good Time" },

      { name: "Ultra Ball", qty: 10 },
      { name: "Max Revive", qty: 5 },
      { name: "Premium Battle Pass", qty: 1 },
      { name: "Max Potion", qty: 5 }
    ]
  },
  {
    name: "GO Pass Deluxe: A Shockingly Good Time",
    price: 4.99,
    category: "Event Bundle",
    limited: true,
    availableFrom: "2026-03-31",
    expires: "2026-04-06",
    oneTime: true,
    items: [
      { name: "GO Pass Deluxe", qty: 1, note: "A Shockingly Good Time" },
      { name: "Ultra Ball", qty: 10 },
      { name: "Max Revive", qty: 5 },
      { name: "Premium Battle Pass", qty: 1 },
      { name: "Max Potion", qty: 5 }
    ]
  },
  {
    name: "GO Pass Deluxe: April + 10 Ranks",
    price: 9.99,
    category: "Event Bundle",
    limited: true,
    limitedLabel: "LIMITED-TIME ONLY",
    oneTime: true,
    items: [
      { name: "GO Pass Deluxe", qty: 1, note: "April" },

      { name: "Ultra Ball", qty: 10 },
      { name: "Max Revive", qty: 5 },
      { name: "Premium Battle Pass", qty: 1 },
      { name: "Max Potion", qty: 5 }
    ]
  },
  {
    name: "Lucky Egg Bundle",
    price: 4.99,
    category: "Item",
    limited: false,
    items: [
      { name: "Lucky Egg", qty: 8 }
    ]
  },
  {
    name: "Star Piece Bundle",
    price: 5.99,
    category: "Item",
    limited: false,
    items: [
      { name: "Star Piece", qty: 8 }
    ]
  },
  {
    name: "Remote Raid Pass",
    price: 2.99,
    category: "Raid",
    popular: true,
    limited: false,
    items: [
      { name: "Remote Raid Pass", qty: 2 }
    ]
  },
  {
    name: "Egg Incubator Bundle",
    price: 2.99,
    category: "Item",
    limited: false,
    items: [
      { name: "Egg Incubator", qty: 3 }
    ]
  },
  {
    name: "Super Incubator Bundle",
    price: 2.99,
    category: "Item",
    limited: false,
    items: [
      { name: "Super Incubator", qty: 2 }
    ]
  },
  {
    name: "Premium Battle Pass Bundle",
    price: 2.99,
    category: "Raid",
    limited: false,
    items: [
      { name: "Premium Battle Pass", qty: 3 }
    ]
  },
  {
    name: "600 Link Charge + 3 Remote Raid Pass",
    price: 7.99,
    category: "Raid",
    limited: false,
    items: [
      { name: "Link Charge", qty: 600 },
      { name: "Remote Raid Pass", qty: 3 }
    ]
  },
  {
    name: "Max Particle Pack Bundle",
    price: 7.99,
    category: "Max",
    limited: false,
    items: [
      { name: "Max Particle Pack", qty: 6 }
    ]
  },
  {
    name: "Max Mushroom Bundle",
    price: 9.99,
    category: "Max",
    limited: false,
    items: [
      { name: "Max Mushroom", qty: 3 }
    ]
  },
  {
    name: "3 Max Particle Pack + 3 Remote Raid Pass",
    price: 7.99,
    category: "Max",
    limited: false,
    items: [
      { name: "Max Particle Pack", qty: 3 },
      { name: "Remote Raid Pass", qty: 3 }
    ]
  },
  {
    name: "Max Particle Pack + Remote Raid Pass",
    price: 2.99,
    category: "Max",
    limited: false,
    items: [
      { name: "Max Particle Pack", qty: 1 },
      { name: "Remote Raid Pass", qty: 1 }
    ]
  },
  {
    name: "Pokémon Storage Upgrade",
    price: 1.99,
    category: "Upgrade",
    popular: true,
    limited: false,
    items: [
      { name: "Pokémon Storage Upgrade", qty: 1 }
    ]
  },
  {
    name: "Item Bag Upgrade",
    price: 1.99,
    category: "Upgrade",
    popular: true,
    limited: false,
    items: [
      { name: "Item Bag Upgrade", qty: 1 }
    ]
  },
  {
    name: "Max Revive Bundle",
    price: 1.99,
    category: "Item",
    limited: false,
    items: [
      { name: "Max Revive", qty: 15 }
    ]
  },
  {
    name: "Silver Pinap Berry Bundle",
    price: 1.99,
    category: "Item",
    limited: false,
    items: [
      { name: "Silver Pinap Berry", qty: 10 }
    ]
  },
  {
    name: "Golden Razz Berry Bundle",
    price: 1.99,
    category: "Item",
    limited: false,
    items: [
      { name: "Golden Razz Berry", qty: 15 }
    ]
  },
  {
    name: "Max Potion Bundle",
    price: 1.99,
    category: "Item",
    limited: false,
    items: [
      { name: "Max Potion", qty: 10 }
    ]
  },
  {
    name: "600 Link Charge",
    price: 2.99,
    category: "Item",
    limited: false,
    items: [
      { name: "Link Charge", qty: 600 }
    ]
  }
];

function calcBoxValue(box) {
  let totalValue = 0;
  box.items.forEach(item => {
    const unitVal = STORE_ITEM_VALUES[item.name] || 0;
    totalValue += unitVal * item.qty;
  });
  const savings = totalValue - box.price;
  const savingsPct = totalValue > 0 ? ((savings / totalValue) * 100) : 0;
  let rating, ratingColor;
  if (savingsPct >= 30) { rating = "Great Deal"; ratingColor = "#2ECC71"; }
  else if (savingsPct >= 15) { rating = "Good Deal"; ratingColor = "#3498DB"; }
  else if (savingsPct >= 0) { rating = "Fair"; ratingColor = "#F39C12"; }
  else { rating = "Bad Deal"; ratingColor = "#E74C3C"; }
  return { totalValue, savings, savingsPct, rating, ratingColor };
}

const STORE_CATEGORIES = ["All", "Event Bundle", "Raid", "Max", "Item", "Upgrade", "Pok\u00E9Coins"];

const EVENT_TYPES = ["All", "Event", "Raid", "Max Battle", "Community Day", "GO Fest"];

// --- STATE ---
let state = {
  selectedEvent: null,
  selectedNews: null,
  filter: "All",
  newsFilter: "All",
  tab: sessionStorage.getItem("trainerwire_tab") || "home",
  openYears: {},
  openNewsYears: {},
  heroRendered: false,
  calMonth: new Date().getMonth(),
  calYear: new Date().getFullYear(),
  calSelectedDay: null,
  pokedexDetail: null,
  pokedexDetailData: null,
  pokedexDetailEvolutions: null,
  storeFilter: "All",
  storeGuideOpen: false,
  openStoreArchiveYears: {},
  openStoreArchiveMonths: {}
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
      return `<div style="display:flex;gap:4px;align-items:center"><span style="font-size:16px;color:#2ECC71;font-weight:700;margin-right:4px">Ends in</span>${units.map(([l, v], i) =>
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
  return `<div style="display:flex;gap:4px;align-items:center"><span style="font-size:16px;color:${color};font-weight:700;margin-right:4px">Starts in</span>${units.map(([l, v], i) =>
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
  if (/Field Research - rare/i.test(name)) return "Field Research (Rare)";
  if (/Field Research/i.test(name)) return "Field Research";
  if (/Mystery Box/i.test(name)) return "Mystery Box";
  return null;
}
const TIER_COLORS = { "1-Star Raids": "#FFB6C1", "3-Star Raids": "#F1C40F", "5-Star Raids": "#8E44AD", "6-Star Max Battles": "#E74C3C", "Mega Raids": "#E67E22", "Shadow Raids": "#7B2FBE", "Lure Encounters": "#3498DB", "Shadow 1-Star Raids": "#7B2FBE", "Shadow 3-Star Raids": "#7B2FBE", "Shadow 5-Star Raids": "#7B2FBE", "Research Breakthrough": "#E67E22", "Field Research": "#3498DB", "Field Research (Rare)": "#9B59B6", "Mystery Box": "#95A5A6" };
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
let RAID_BOSS_DATA = {};
fetch("data/pokemon-data.json").then(r => r.json()).then(data => { Object.assign(RAID_BOSS_DATA, data); render(); }).catch(() => {});
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
  // Check longer keys first so "Alolan Ninetales" matches before "Ninetales"
  const sortedEntries = Object.entries(RAID_BOSS_DATA).sort((a, b) => b[0].length - a[0].length);
  for (const [pkmn, data] of sortedEntries) {
    if (name.includes(pkmn)) return data;
  }
  // Fallback: try to get types from cached PokéAPI data
  const cleaned = cleanRaidLabel(name).replace(/^Shadow\s+/,"").replace(/^Mega\s+/,"").replace(/^Alolan\s+/,"").replace(/^Galarian\s+/,"").replace(/\s+with\s+.*/,"").trim();
  const dex = DEX[cleaned];
  if (dex) {
    const cached = _pokeCache[`pokemon_${dex}`];
    if (cached && cached.types) {
      return { types: cached.types.map(t => t.charAt(0).toUpperCase() + t.slice(1)) };
    }
  }
  return null;
}
function cleanRaidLabel(name) {
  return name.replace(/^★/, "").replace(/\s*\(\d★\s*(?:Raid|Shadow Raid)?\)|\s*\(Mega\)|\s*\(\d★\s*Max Battle.*?\)|\s*\(Research Breakthrough\)|\s*\(Field Research(?:\s*-\s*rare)?\)|\s*\(Mystery Box\)/gi, "").replace(/\s*✨/g, "").trim();
}
function renderBossItem(item, color, th, cardLayout, noSparkles) {
  const pkmn = getPokemonImg(item);
  const imgSize = cardLayout ? 120 : 150;
  let imgEl = pokemonImgHTML(pkmn, imgSize);
  if (imgEl && !noSparkles) imgEl = wrapShinySparkles(imgEl, item, imgSize);
  const raidData = getRaidBossData(item);
  const typesHTML = raidData ? `<div style="display:flex;gap:4px;margin-top:4px;flex-wrap:wrap;${cardLayout ? "justify-content:center" : ""}">${raidData.types.map(t =>
    `<span style="font-size:${cardLayout ? 11 : 13}px;font-weight:700;color:#fff;background:${TYPE_COLORS[t] || "#888"};padding:2px 8px;border-radius:10px">${t}</span>`
  ).join("")}</div>` : "";
  const isRaidTier = /\(\d★\s*(?:Raid|Shadow Raid)?\)|\(Mega\)|\(\d★\s*Max Battle/.test(item);
  const cpHTML = raidData && raidData.cp && isRaidTier ? `<div style="margin-top:5px;font-size:${cardLayout ? 13 : 14}px;color:${th.text};line-height:1.6;${cardLayout ? "text-align:center" : ""}">
    <div>CP <span style="font-weight:800;font-size:${cardLayout ? 15 : 16}px">${raidData.cp}</span></div>
    ${raidData.weather ? `<div style="font-size:${cardLayout ? 11 : 13}px;color:${th.textSecondary}">\u2601\uFE0F ${raidData.weather}: <span style="font-weight:700">${raidData.cpBoost}</span></div>` : ""}
  </div>` : "";
  const weaknesses = raidData ? getWeaknesses(raidData.types) : [];
  const resistances = raidData ? getResistances(raidData.types) : [];
  const hasBack = weaknesses.length > 0 || resistances.length > 0;
  const backContent = hasBack ? `
    <div style="font-size:11px;font-weight:700;color:${th.textMuted};margin-bottom:16px;text-transform:uppercase;letter-spacing:0.5px">${esc(cleanRaidLabel(item).replace(/\s+with\s+.*/i,"").trim())}</div>
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

function renderDetailSection(title, emoji, items, color, th, showImages, noSparkles) {
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
      <div style="display:flex;${breakpoint !== "mobile" ? "flex-wrap:wrap;gap:8px" : "flex-direction:column;gap:5px"}">${items.map(item => renderBossItem(item, color, th, breakpoint !== "mobile", noSparkles)).join("")}</div></div>`;
  }
  // Render with tier groupings
  let html = `<div style="display:flex;flex-direction:column"><h4 style="margin:0 0 12px 0;font-size:13px;font-weight:700;color:${th.text};display:flex;align-items:center;gap:8px"><span>${emoji}</span> ${esc(title)}</h4>${legendHTML}`;
  // Untiered items first (wild spawns etc)
  if (untiered.length > 0) {
    html += `<div style="margin-bottom:12px">${tierKeys.length > 0 ? "" : ""}
      <div style="display:flex;${breakpoint !== "mobile" ? "flex-wrap:wrap;gap:8px" : "flex-direction:column;gap:5px"}">${untiered.map(item => renderBossItem(item, color, th, breakpoint !== "mobile", noSparkles)).join("")}</div></div>`;
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
      <div style="padding:8px;display:flex;${breakpoint !== "mobile" ? "flex-wrap:wrap;gap:8px" : "flex-direction:column;gap:5px"}">${tiered[tier].map(item => renderBossItem(item, tierColor, th, breakpoint !== "mobile", noSparkles)).join("")}</div>
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
        : `<div style="display:flex;flex-direction:column;gap:1px;width:100%;padding:0 3px;overflow:hidden">${dayEvents.slice(0, 3).map(ev => `<div style="display:flex;align-items:center;gap:3px;font-size:11px;font-weight:600;color:#fff;background:${ev.color};border-radius:4px;padding:1px 4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:1.5">${ev.iconImg ? `<img src="${ev.iconImg}" style="width:14px;height:14px;object-fit:contain" />` : ev.icon} ${esc(ev.title)}</div>`).join("")}${dayEvents.length > 3 ? `<div style="font-size:9px;color:${th.textMuted};text-align:center">+${dayEvents.length - 3} more</div>` : ""}</div>`
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
              ${(() => {
                if (ev.iconImg) return `<img src="${ev.iconImg}" style="width:32px;height:32px;object-fit:contain;border-radius:8px" />`;
                const calPkmn = (ev.type === "Raid" || ev.type === "Max Battle") && ev.details && ev.details.bosses && ev.details.bosses[0] ? getPokemonImg(ev.details.bosses[0]) : null;
                if (calPkmn) return `<img src="${calPkmn.url}" style="width:32px;height:32px;object-fit:contain;border-radius:8px" />`;
                return `<div style="font-size:18px">${ev.icon}</div>`;
              })()}
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
              return `<div style="width:70px;height:70px;border-radius:16px;background:${th.accentBg(event.color)};border:2px solid ${th.countdownBorder(event.color)};display:flex;align-items:center;justify-content:center;flex-shrink:0;overflow:hidden"><img src="${event.iconImg}" style="width:62px;height:62px;object-fit:contain" onerror="this.parentElement.innerHTML='${event.icon}'" /></div>`;
            }
            const detailPkmn = (event.type === "Raid" || event.type === "Max Battle") && event.details && event.details.bosses && event.details.bosses[0] ? getPokemonImg(event.details.bosses[0]) : null;
            return detailPkmn
              ? `<div style="width:70px;height:70px;border-radius:16px;background:${th.accentBg(event.color)};border:2px solid ${th.countdownBorder(event.color)};display:flex;align-items:center;justify-content:center;flex-shrink:0;overflow:hidden"><img src="${detailPkmn.url}" style="width:62px;height:62px;object-fit:contain" onerror="this.parentElement.innerHTML='${event.icon}'" /></div>`
              : `<div style="width:70px;height:70px;border-radius:16px;background:${th.accentBg(event.color)};border:2px solid ${th.countdownBorder(event.color)};display:flex;align-items:center;justify-content:center;font-size:32px">${event.icon}</div>`;
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
        ${event.details.bosses ? renderDetailSection(event.type === "Community Day" ? "Featured Move(s)" : "Featured Encounters", "\uD83C\uDFAF", event.details.bosses, event.color, th, true, event.type === "Community Day") : ""}
        ${event.type === "Community Day" && event.iconImg ? (() => {
          const cdTitle = event.title.replace("CD Classic: ","").replace("Community Day: ","").replace(/\s*\(.*?\)/,"");
          const cdNames = cdTitle.split(" & ").map(n => n.split(" + ")[0].trim());
          const separateChains = [];
          cdNames.forEach(cdName => {
            const isAlolan = cdName.startsWith("Alolan ") || cdName.startsWith("A-");
            const isGalarian = cdName.startsWith("Galarian ") || cdName.startsWith("G-");
            const isPaldean = cdName.startsWith("Paldean ");
            const baseName = cdName.replace("Alolan ","").replace("A-","").replace("Galarian ","").replace("G-","").replace("Paldean ","").replace("Flabébé","Flabebe");
            const cdDex = DEX[baseName];
            if (!cdDex) return;
            // Override regional evolution chains that don't follow the base chain
            const REGIONAL_CHAIN_OVERRIDE = {
              "194_paldean": [{ dexNum: 194, name: "Paldean Wooper", depth: 0, isPaldean: true, isRegional: true }, { dexNum: 980, name: "Clodsire", depth: 1, isPaldean: true, isRegional: true }],
              "263_galarian": [{ dexNum: 263, name: "Galarian Zigzagoon", depth: 0, isGalarian: true, isRegional: true }, { dexNum: 264, name: "Galarian Linoone", depth: 1, isGalarian: true, isRegional: true }, { dexNum: 862, name: "Obstagoon", depth: 2, isGalarian: true, isRegional: true }]
            };
            const overrideKey = `${cdDex}_${isPaldean ? "paldean" : isGalarian ? "galarian" : isAlolan ? "alolan" : ""}`;
            if (REGIONAL_CHAIN_OVERRIDE[overrideKey]) {
              separateChains.push(REGIONAL_CHAIN_OVERRIDE[overrideKey]);
              return;
            }
            const evoKey = `evo_${cdDex}`;
            let family = _pokeCache[evoKey];
            if (!family || family.length === 0) {
              family = [{ name: baseName, dexNum: cdDex }];
            }
            // Build direct evolution line for this Pokemon
            const baseEntry = family.find(f => f.dexNum === cdDex && !f.isMega);
            const directLine = [];

            // Walk backwards to find all ancestors
            if (baseEntry) {
              const ancestors = [];
              for (let d = 0; d < baseEntry.depth; d++) {
                const atDepth = family.filter(f => f.depth === d && !f.isMega);
                if (atDepth.length === 1) ancestors.push(atDepth[0]);
                else if (atDepth.length > 1) {
                  const closest = atDepth.find(f => f.dexNum < cdDex) || atDepth[0];
                  ancestors.push(closest);
                }
              }
              directLine.push(...ancestors, baseEntry);

              // Walk forward to find all descendants
              let currentDepth = baseEntry.depth;
              let lastDex = cdDex;
              while (true) {
                const nextLevel = family.filter(f => f.depth === currentDepth + 1 && !f.isMega);
                if (nextLevel.length === 0) break;
                if (nextLevel.length === 1) {
                  directLine.push(nextLevel[0]);
                  lastDex = nextLevel[0].dexNum;
                } else if (cdNames.length === 1 && !isAlolan && !isGalarian && !isPaldean) {
                  // Single CD Pokemon with branching evolutions (e.g., Eevee, Ralts) - include ALL
                  directLine.push(...nextLevel);
                  lastDex = nextLevel[nextLevel.length - 1].dexNum;
                } else {
                  // Dual CD - pick closest dex number to last
                  const directEvo = nextLevel.find(f => Math.abs(f.dexNum - lastDex) <= 2) || nextLevel[0];
                  directLine.push(directEvo);
                  lastDex = directEvo.dexNum;
                }
                currentDepth++;
              }
            } else {
              directLine.push({ name: baseName, dexNum: cdDex, depth: 0 });
            }
            const chain = [];
            const seenChain = new Set();
            const regionPrefix = isAlolan ? "Alolan" : isGalarian ? "Galarian" : isPaldean ? "Paldean" : "";
            const isRegional = isAlolan || isGalarian || isPaldean;
            directLine.filter(f => !seenChain.has(f.dexNum) && (seenChain.add(f.dexNum), true)).forEach(f => {
              if (isRegional) {
                chain.push({ ...f, name: regionPrefix + " " + (DEX_BY_NUM[f.dexNum] || f.name), isAlolan, isGalarian, isPaldean, isRegional: true });
              } else {
                chain.push(f);
              }
            });
            if (chain.length > 0) separateChains.push(chain);
          });
          if (separateChains.length === 0) return "";
          const allFamilies = separateChains.length === 1 ? separateChains[0] : [];
          const isMob = breakpoint === "mobile";
          const imgSize = isMob ? 60 : 100;
          const cardStyle = `display:flex;flex-direction:column;align-items:center;padding:${isMob ? "8px 4px" : "12px 10px"};border-radius:12px;background:${th.accentBgSubtle(event.color)};border:1.5px solid ${th.border};text-align:center;min-width:${isMob ? 70 : 110}px;max-width:${isMob ? 110 : 160}px;flex:1`;

          const arrowHTML = (dex) => {
            const evo = POGO_EVO[dex] || "";
            return `<div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0;margin:0 ${isMob ? 1 : 2}px">
              <div style="font-size:${isMob ? 14 : 18}px;color:${th.textMuted}">\u2192</div>
              <div style="font-size:${isMob ? 7 : 9}px;color:${th.textSecondary};text-align:center;max-width:${isMob ? 50 : 70}px;line-height:1.2">${esc(evo)}</div>
            </div>`;
          };

          const buildChainRow = (chain, getFn, nameColor) => chain.map((f, i) => {
            // Only use regional suffix for Pokemon that have regional form images (not new evolutions like Obstagoon, Clodsire)
            const hasRegionalImg = f.isAlolan && POKEMON_FORMS[f.dexNum]?.some(fm => fm.l === "Alola") || f.isGalarian && POKEMON_FORMS[f.dexNum]?.some(fm => fm.l === "Galar") || f.isPaldean && POKEMON_FORMS[f.dexNum]?.some(fm => fm.l === "Paldea");
            const suffix = hasRegionalImg ? (f.isAlolan ? "_alola" : f.isGalarian ? "_galarian" : "_paldean") : (GENDER_SUFFIX[f.dexNum] || "");
            const src = getFn(f.dexNum, suffix);
            const name = f.name || DEX_BY_NUM[f.dexNum];
            const isShiny = nameColor === "#F39C12";
            const arrow = i > 0 ? arrowHTML(f.dexNum) : "";
            const ALOLAN_TYPES = {19:["Dark","Normal"],20:["Dark","Normal"],26:["Electric","Psychic"],27:["Ice","Steel"],28:["Ice","Steel"],37:["Ice"],38:["Ice","Fairy"],50:["Ground","Steel"],51:["Ground","Steel"],52:["Dark"],53:["Dark"],74:["Rock","Electric"],75:["Rock","Electric"],76:["Rock","Electric"],88:["Poison","Dark"],89:["Poison","Dark"],103:["Grass","Dragon"],105:["Fire","Ghost"]};
            const GALARIAN_TYPES = {77:["Psychic"],78:["Psychic","Fairy"],263:["Dark","Normal"],264:["Dark","Normal"],862:["Dark","Normal"]};
            const PALDEAN_TYPES = {194:["Poison","Ground"],980:["Poison","Ground"]};
            const chainName = name;
            const rbd = getRaidBossData(chainName);
            const types = f.isAlolan ? (ALOLAN_TYPES[f.dexNum] || null) : f.isGalarian ? (GALARIAN_TYPES[f.dexNum] || null) : f.isPaldean ? (PALDEAN_TYPES[f.dexNum] || null) : (rbd ? rbd.types : null);
            const typesEl = types ? `<div style="display:flex;gap:3px;margin-top:3px;justify-content:center;flex-wrap:wrap">${types.map(t => { const cap = t.charAt(0).toUpperCase()+t.slice(1); return `<span style="font-size:${isMob ? 8 : 9}px;font-weight:700;color:#fff;background:${TYPE_COLORS[cap] || "#888"};padding:1px 6px;border-radius:8px">${cap}</span>`; }).join("")}</div>` : "";
            return `${arrow}<div onclick="showFormModal('${src}','${esc(name)}')" style="${cardStyle}${isShiny ? ";position:relative" : ""};cursor:pointer;transition:transform 0.15s ease" onmouseenter="this.style.transform='scale(1.03)'" onmouseleave="this.style.transform='scale(1)'">
              ${isShiny ? `<div style="position:absolute;top:6%;right:10%;z-index:2;font-size:20px">\u2728</div>` : ""}
              <img src="${src}" style="width:${imgSize}px;height:${imgSize}px;object-fit:contain" onerror="this.style.opacity='0.3'" />
              <div style="margin-top:4px;font-weight:700;color:${nameColor};font-size:${isMob ? 9 : 12}px">${esc(name)}</div>
              ${typesEl}
            </div>`;
          }).join("");

          // Split into separate chains
          let chains;
          if (separateChains.length > 1) {
            chains = separateChains;
          } else {
            const regularChain = allFamilies.filter(f => !f.isRegional);
            const regionalChain = allFamilies.filter(f => f.isRegional);
            chains = regularChain.length > 0 ? [regularChain] : [];
            if (regionalChain.length > 0) chains.push(regionalChain);
          }

          const buildGridRow = (chain, getFn, nameColor) => {
            const base = chain[0];
            const evos = chain.slice(1);
            const baseSuffix = base.isAlolan ? "_alola" : base.isGalarian ? "_galarian" : base.isPaldean ? "_paldean" : (GENDER_SUFFIX[base.dexNum] || "");
            const baseSrc = getFn(base.dexNum, baseSuffix);
            const baseName = base.name || DEX_BY_NUM[base.dexNum];
            const isShiny = nameColor === "#F39C12";
            const baseRbd = getRaidBossData(baseName);
            const baseTypes = baseRbd ? baseRbd.types : null;
            const baseTypesEl = baseTypes ? `<div style="display:flex;gap:3px;margin-top:3px;justify-content:center;flex-wrap:wrap">${baseTypes.map(t => `<span style="font-size:9px;font-weight:700;color:#fff;background:${TYPE_COLORS[t] || "#888"};padding:1px 6px;border-radius:8px">${t}</span>`).join("")}</div>` : "";
            const baseCard = `<div style="display:flex;flex-direction:column;align-items:center;margin-bottom:8px">
              <div onclick="showFormModal('${baseSrc}','${esc(baseName)}')" style="${cardStyle}${isShiny ? ";position:relative" : ""};cursor:pointer;transition:transform 0.15s ease" onmouseenter="this.style.transform='scale(1.03)'" onmouseleave="this.style.transform='scale(1)'">
                ${isShiny ? `<div style="position:absolute;top:6%;right:10%;z-index:2;font-size:20px">\u2728</div>` : ""}
                <img src="${baseSrc}" style="width:${imgSize}px;height:${imgSize}px;object-fit:contain" />
                <div style="margin-top:4px;font-weight:700;color:${nameColor};font-size:${isMob ? 9 : 12}px">${esc(baseName)}</div>
                ${baseTypesEl}
              </div>
              <div style="font-size:14px;color:${th.textMuted};margin-top:6px">\u25BC</div>
            </div>`;
            const evoCards = evos.map(f => {
              const hasRegionalImg = f.isAlolan && POKEMON_FORMS[f.dexNum]?.some(fm => fm.l === "Alola") || f.isGalarian && POKEMON_FORMS[f.dexNum]?.some(fm => fm.l === "Galar") || f.isPaldean && POKEMON_FORMS[f.dexNum]?.some(fm => fm.l === "Paldea");
              const suffix = hasRegionalImg ? (f.isAlolan ? "_alola" : f.isGalarian ? "_galarian" : "_paldean") : (GENDER_SUFFIX[f.dexNum] || "");
              const src = getFn(f.dexNum, suffix);
              const name = f.name || DEX_BY_NUM[f.dexNum];
              const evo = POGO_EVO[f.dexNum] || "";
              const rbd = getRaidBossData(name);
              const types = rbd ? rbd.types : null;
              const typesEl = types ? `<div style="display:flex;gap:3px;margin-top:3px;justify-content:center;flex-wrap:wrap">${types.map(t => `<span style="font-size:${isMob ? 8 : 9}px;font-weight:700;color:#fff;background:${TYPE_COLORS[t] || "#888"};padding:1px 5px;border-radius:6px">${t}</span>`).join("")}</div>` : "";
              return `<div onclick="showFormModal('${src}','${esc(name)}')" style="display:flex;flex-direction:column;align-items:center;padding:${isMob ? "8px 4px" : "8px 6px"};border-radius:10px;background:${th.accentBgSubtle(event.color)};border:1px solid ${th.border};text-align:center;cursor:pointer;transition:transform 0.15s ease${isShiny ? ";position:relative" : ""}" onmouseenter="this.style.transform='scale(1.05)'" onmouseleave="this.style.transform='scale(1)'">
                ${isShiny ? `<div style="position:absolute;top:4px;right:6px;font-size:14px">\u2728</div>` : ""}
                <img src="${src}" style="width:${isMob ? 48 : 60}px;height:${isMob ? 48 : 60}px;object-fit:contain" />
                <div style="font-size:${isMob ? 10 : 11}px;font-weight:700;color:${nameColor};margin-top:3px">${esc(name)}</div>
                ${typesEl}
                <div style="font-size:${isMob ? 8 : 11}px;color:${th.textMuted};margin-top:3px;line-height:1.2">${esc(evo)}</div>
              </div>`;
            }).join("");
            const gridCols = evos.length <= 4 ? evos.length : (isMob ? 3 : Math.min(evos.length, 4));
            return `${baseCard}<div style="display:grid;grid-template-columns:repeat(${gridCols},1fr);gap:${isMob ? 4 : 8}px;max-width:${isMob ? "100%" : "600px"};margin:0 auto">${evoCards}</div>`;
          };

          const chainsHTML = chains.map(chain => {
            const isLargeChain = chain.length > 4;
            const regionLabel = chain[0]?.isRegional ? ` (${chain[0]?.isAlolan ? "Alolan" : chain[0]?.isGalarian ? "Galarian" : "Paldean"})` : chains.length > 1 ? ` (${DEX_BY_NUM[chain[0]?.dexNum] || ""})` : "";
            if (isLargeChain) {
              return `<div style="margin-bottom:12px">
                <div style="font-size:11px;font-weight:600;color:${th.textMuted};margin-bottom:6px">Normal${regionLabel}</div>
                ${buildGridRow(chain, natDexImg, th.text)}
                <div style="font-size:11px;font-weight:600;color:#F39C12;margin-top:12px;margin-bottom:6px">\u2728 Shiny${regionLabel}</div>
                ${buildGridRow(chain, shinyDexImg, "#F39C12")}
              </div>`;
            }
            return `<div style="margin-bottom:12px">
              <div style="font-size:11px;font-weight:600;color:${th.textMuted};margin-bottom:6px">Normal${regionLabel}</div>
              <div style="display:flex;align-items:center;flex-wrap:wrap;gap:4px">${buildChainRow(chain, natDexImg, th.text)}</div>
              <div style="font-size:11px;font-weight:600;color:#F39C12;margin-top:8px;margin-bottom:6px">\u2728 Shiny${regionLabel}</div>
              <div style="display:flex;align-items:center;flex-wrap:wrap;gap:4px">${buildChainRow(chain, shinyDexImg, "#F39C12")}</div>
            </div>`;
          }).join("");

          return `<div>
            <h4 style="margin:0 0 10px 0;font-size:13px;font-weight:700;color:${th.text};display:flex;align-items:center;gap:8px"><span>\uD83D\uDD17</span> Evolution Chain</h4>
            ${chainsHTML}
          </div>`;
        })() : ""}
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
        ${event.details.milestones ? `<div><h4 style="margin:0 0 10px 0;font-size:13px;font-weight:700;color:${th.text};display:flex;align-items:center;gap:8px"><span>\uD83C\uDFC6</span> Major Milestone Bonuses</h4>
          <div style="display:flex;flex-wrap:wrap;gap:8px">${event.details.milestones.map(m => `<div style="flex:1;min-width:200px;border:1.5px solid ${th.border};border-radius:14px;overflow:hidden">
            <div style="padding:8px 14px;background:${th.accentBgSubtle("#F39C12")};border-bottom:1.5px solid ${th.border};display:flex;align-items:center;gap:8px">
              <span style="font-size:12px;font-weight:700;color:${th.text};letter-spacing:0.5px;text-transform:uppercase">${esc(m.tier)}</span>
            </div>
            <div style="padding:12px 14px;font-size:14px;font-weight:700;color:${th.text};line-height:1.45">${esc(m.bonus)}</div>
          </div>`).join("")}</div></div>` : ""}
        ${event.details.goPass ? (() => {
          const gp = event.details.goPass;
          const renderTier = (title, emoji, color, items) => `<div style="border:1.5px solid ${th.border};border-radius:14px;overflow:hidden;flex:1;min-width:200px">
            <div style="padding:10px 14px;background:${th.accentBgSubtle(color)};border-bottom:1.5px solid ${th.border};display:flex;align-items:center;gap:8px">
              <span>${emoji}</span><span style="font-size:12px;font-weight:700;color:${th.text};letter-spacing:0.5px;text-transform:uppercase">${title}</span>
            </div>
            <div style="padding:10px;display:flex;flex-direction:column;gap:5px">${items.map(r => `<div style="padding:8px 12px;border-radius:9px;background:${th.accentBgSubtle(color)};font-size:13px;color:${th.textSecondary};line-height:1.45;display:flex;align-items:center;gap:8px"><span style="color:${color};font-weight:700">\u2022</span> ${esc(r)}</div>`).join("")}</div>
          </div>`;
          return `<div><h4 style="margin:0 0 10px 0;font-size:13px;font-weight:700;color:${th.text};display:flex;align-items:center;gap:8px"><span>\uD83C\uDFAB</span> GO Pass</h4>
            <div style="display:flex;flex-wrap:wrap;gap:10px">
              ${gp.free ? renderTier("Free Track", "\uD83C\uDD93", "#27AE60", gp.free) : ""}
              ${gp.deluxe ? renderTier("Deluxe \u2014 " + gp.deluxe.price, "\uD83D\uDCB0", "#E67E22", gp.deluxe.rewards) : ""}
              ${gp.deluxePlus ? renderTier("Deluxe + 6 Ranks \u2014 " + gp.deluxePlus.price, "\uD83D\uDE80", "#8E44AD", gp.deluxePlus.rewards) : ""}
            </div></div>`;
        })() : ""}
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
  // Pre-fetch evolution chain and Pokemon data for Community Day
  const ev = state.selectedEvent;
  if (ev && ev.type === "Community Day") {
    const cdTitle = ev.title.replace("CD Classic: ","").replace("Community Day: ","").replace(/\s*\(.*?\)/,"");
    const cdNames = cdTitle.split(" & ").map(n => n.replace("Alolan ","").replace("A-","").replace("Galarian ","").replace("G-","").replace("Paldean ","").replace("Flabébé","Flabebe").split(" + ")[0].trim());
    const fetches = [];
    cdNames.forEach(cdName => {
      const cdDex = DEX[cdName];
      if (cdDex) {
        const fetchAllStages = async () => {
          if (!_pokeCache[`evo_${cdDex}`]) await fetchEvolutionChain(cdDex);
          const evoChain = _pokeCache[`evo_${cdDex}`] || [];
          const seen = new Set();
          for (const stage of evoChain) {
            if (!stage.isMega && !seen.has(stage.dexNum)) {
              seen.add(stage.dexNum);
              if (!_pokeCache[`pokemon_${stage.dexNum}`]) await fetchPokemonData(stage.dexNum);
            }
          }
        };
        fetches.push(fetchAllStages());
      }
    });
    // Fetch type data for all bosses in the event
    if (ev.details && ev.details.bosses) {
      ev.details.bosses.forEach(boss => {
        const cleaned = boss.replace(/\s+with\s+.*/,"").replace(/\s*\(.*?\)/g,"").trim();
        const dex = DEX[cleaned];
        if (dex && !_pokeCache[`pokemon_${dex}`]) fetches.push(fetchPokemonData(dex));
      });
    }
    if (fetches.length > 0) Promise.all(fetches).then(() => render());
  }
}

function selectNews(id) {
  state.selectedNews = ANNOUNCEMENTS.find(a => a.id === id);
  render();
  window.scrollTo(0, 0);
}

function goBack() {
  const wasCD = state.selectedEvent && state.selectedEvent.type === "Community Day" && isOver(state.selectedEvent);
  state.selectedEvent = null;
  render();
  if (wasCD) {
    requestAnimationFrame(() => {
      const archiveEl = document.getElementById("cd-archive-search");
      if (archiveEl) archiveEl.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
}

function getPokemonOfTheDay() {
  const now = new Date();
  const seed = now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate();
  let hash = seed;
  hash = ((hash >> 16) ^ hash) * 0x45d9f3b;
  hash = ((hash >> 16) ^ hash) * 0x45d9f3b;
  hash = (hash >> 16) ^ hash;
  const dex = (Math.abs(hash) % 1025) + 1;
  return dex;
}

// Auto-update Pokemon of the Day at midnight
function schedulePotdUpdate() {
  const now = new Date();
  const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 1);
  const msUntilMidnight = midnight.getTime() - now.getTime();
  setTimeout(() => { render(); schedulePotdUpdate(); }, msUntilMidnight);
}
schedulePotdUpdate();

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
  sessionStorage.setItem("trainerwire_tab", "home");
  render();
}

let reportPhotoFile = null;

function updateReportSection() {
  const type = document.getElementById("report-type").value;
  const select = document.getElementById("report-section");
  const label = document.getElementById("report-section-label");
  if (type === "suggestion") {
    label.textContent = "What area is this about?";
    select.innerHTML = `<option value="accessibility">Accessibility</option><option value="content-data">Content & Data</option><option value="general">General</option><option value="new-feature">New Feature</option><option value="notifications">Notifications & Alerts</option><option value="performance">Performance</option><option value="ui-design">UI / Design</option>`;
  } else {
    label.textContent = "Which page or section?";
    select.innerHTML = `<option value="calendar">Calendar</option><option value="store">Deal Check</option><option value="events">Events</option><option value="general">General / Sitewide</option><option value="max-battles">Max Battles</option><option value="nests">Nests</option><option value="news">News</option><option value="pokedex">Pok\u00E9Dex</option><option value="tools">PoGO Tools</option><option value="raids">Raids</option>`;
  }
}

function previewReportPhoto(input) {
  const file = input.files[0];
  const preview = document.getElementById("report-photo-preview");
  const prompt = document.getElementById("report-photo-prompt");
  if (!file) { preview.style.display = "none"; prompt.style.display = "flex"; reportPhotoFile = null; return; }
  if (file.size > 10 * 1024 * 1024) { alert("Image must be under 10 MB."); input.value = ""; return; }
  reportPhotoFile = file;
  const reader = new FileReader();
  reader.onload = function(e) {
    preview.innerHTML = `<div style="position:relative;display:inline-block"><img src="${e.target.result}" style="max-width:100%;max-height:200px;border-radius:10px;object-fit:contain" /><button onclick="event.stopPropagation();removeReportPhoto()" style="position:absolute;top:-8px;right:-8px;width:24px;height:24px;border-radius:50%;background:#E74C3C;border:none;color:#fff;font-size:14px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1">\u00D7</button></div><div style="margin-top:6px;font-size:12px;color:${t(darkMode).textMuted}">${file.name}</div>`;
    preview.style.display = "block";
    prompt.style.display = "none";
  };
  reader.readAsDataURL(file);
}

function removeReportPhoto() {
  reportPhotoFile = null;
  document.getElementById("report-photo").value = "";
  document.getElementById("report-photo-preview").style.display = "none";
  document.getElementById("report-photo-preview").innerHTML = "";
  document.getElementById("report-photo-prompt").style.display = "flex";
}

function submitReport() {
  const type = document.getElementById("report-type").value;
  const section = document.getElementById("report-section").value;
  const description = document.getElementById("report-description").value.trim();
  const name = document.getElementById("report-name").value.trim();
  if (!description) { alert("Please describe the issue before submitting."); return; }
  const typeLabels = {"wrong-info":"Wrong Information","bug":"Bug / Something Broken","missing":"Missing Event or Data","suggestion":"Suggestion / Feature Request","other":"Other"};
  const hasPhoto = reportPhotoFile !== null;
  const subject = encodeURIComponent(`[TrainerWire Report] ${typeLabels[type] || type}`);
  const body = encodeURIComponent(`Report Type: ${typeLabels[type] || type}\nSection: ${section}\n${name ? "From: " + name + "\n" : ""}\nDescription:\n${description}\n${hasPhoto ? "\n\u26A0\uFE0F SCREENSHOT: Please attach the screenshot you selected (" + reportPhotoFile.name + ") to this email before sending.\n" : ""}\n---\nSent from TrainerWire v${APP_VERSION}`);
  window.open(`mailto:${REPORT_EMAIL}?subject=${subject}&body=${body}`, "_self");
}

function setTab(tab) {
  state.tab = tab;
  state.selectedEvent = null;
  state.selectedNews = null;
  state.pokedexDetail = null;
  sessionStorage.setItem("trainerwire_tab", tab);
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
    function evoCard(evo) {
      const isActive = evo.dexNum === data.dexNum && (!evo.imgFile || evo.name === data.name);
      return `<div onclick="openPokemonDetail(${evo.dexNum})" style="display:flex;flex-direction:column;align-items:center;cursor:pointer;padding:8px;border-radius:12px;background:${isActive ? th.accentBgSubtle(primaryColor) : "transparent"};border:2px solid ${isActive ? primaryColor : "transparent"};transition:all 0.2s;flex-shrink:0" onmouseenter="this.style.background='${th.surfaceHover}'" onmouseleave="this.style.background='${isActive ? th.accentBgSubtle(primaryColor) : "transparent"}'">
        <img src="${evo.isMega ? `${IMG_BASE}/Mega/regular/${getGenFolder(evo.dexNum)}/${evo.imgFile}.webp` : evo.imgFile ? formImgUrl(evo.dexNum, evo.imgFile) : pokemonImgUrl(evo.dexNum)}" style="width:56px;height:56px;object-fit:contain" onerror="this.style.opacity='0.3'" />
        <div style="font-size:11px;font-weight:${isActive ? 700 : 500};color:${isActive ? th.text : th.textSecondary};margin-top:4px;text-align:center;max-width:90px">${esc(evo.name)}</div>
        <div style="font-size:10px;color:${th.textMuted}">#${String(evo.dexNum).padStart(4,"0")}</div>
      </div>`;
    }
    // Separate Megas from regular evolutions
    const regularEvos = evolutions.filter(e => !e.isMega);
    const megaEvos = evolutions.filter(e => e.isMega);
    // Group by depth to detect branching
    const byDepth = {};
    regularEvos.forEach(e => { if (!byDepth[e.depth]) byDepth[e.depth] = []; byDepth[e.depth].push(e); });
    const depths = Object.keys(byDepth).map(Number).sort((a,b) => a - b);
    const hasBranch = depths.some(d => byDepth[d].length > 1);

    let evoContent = "";
    // Check if any branch evo has a regional parent override
    const hasRegionalBranch = regularEvos.some(e => EVO_REGIONAL_BRANCH[e.dexNum]);
    if (hasBranch && hasRegionalBranch) {
      // Render as stacked rows: each branch gets its own full linear chain
      const base = regularEvos.find(e => e.depth === 0);
      const rows = regularEvos.filter(e => e.depth > 0).map(evo => {
        const rb = EVO_REGIONAL_BRANCH[evo.dexNum];
        const parent = rb ? { name: rb.parentName, dexNum: rb.parentDex, imgFile: rb.parentImgFile, trigger: "", depth: 0 } : base;
        return `<div style="display:flex;align-items:center;justify-content:center;gap:4px">
          ${evoCard(parent)}
          <div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0;margin:0 4px">
            <div style="font-size:18px;color:${th.textMuted}">\u2192</div>
            <div style="font-size:10px;color:${th.textSecondary};text-align:center;max-width:80px;line-height:1.2">${esc(evo.trigger)}</div>
          </div>
          ${evoCard(evo)}
        </div>`;
      }).join("");
      evoContent = `<div style="display:flex;flex-direction:column;gap:8px;padding:12px;background:${th.surface};border-radius:12px;border:1px solid ${th.border}">${rows}</div>`;
    } else if (hasBranch) {
      // Build stages: each depth is either a single Pokemon or a branch group
      const stagesHTML = depths.map((d, di) => {
        const group = byDepth[d];
        if (group.length === 1) {
          // Single Pokemon at this depth
          const evo = group[0];
          const arrow = di > 0 ? `<div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0">
            <div style="font-size:18px;color:${th.textMuted}">\u2192</div>
            <div style="font-size:10px;color:${th.textSecondary};text-align:center;max-width:80px;line-height:1.2">${esc(evo.trigger)}</div>
          </div>` : "";
          return `${arrow}${evoCard(evo)}`;
        } else {
          // Multiple Pokemon = branch
          const branchRows = group.map(evo => `<div style="display:flex;align-items:center;gap:4px">
            <div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0;width:${isMobile ? 60 : 70}px">
              <div style="font-size:16px;color:${th.textMuted}">\u2192</div>
              <div style="font-size:${isMobile ? 8 : 9}px;color:${th.textSecondary};text-align:center;line-height:1.2">${esc(evo.trigger)}</div>
            </div>
            <div style="min-width:${isMobile ? 80 : 100}px">${evoCard(evo)}</div>
          </div>`).join("");
          return `<div style="display:flex;flex-direction:column;gap:6px">${branchRows}</div>`;
        }
      }).join("");

      evoContent = `<div style="display:flex;align-items:center;justify-content:center;gap:6px;padding:12px;background:${th.surface};border-radius:12px;border:1px solid ${th.border};overflow-x:auto">
        ${stagesHTML}
      </div>`;
    } else if (hasRegionalBranch) {
      // Linear chain where child evolves from a regional form
      // Show base form on its own line, then regional parent → child on second line
      const base = regularEvos.find(e => e.depth === 0);
      const rows = [];
      // First row: base form alone (doesn't evolve)
      if (base) rows.push(`<div style="display:flex;align-items:center;justify-content:center;gap:4px">${evoCard(base)}</div>`);
      // Second row: regional parent → evolved form
      regularEvos.filter(e => e.depth > 0).forEach(evo => {
        const rb = EVO_REGIONAL_BRANCH[evo.dexNum];
        if (rb) {
          const parent = { name: rb.parentName, dexNum: rb.parentDex, imgFile: rb.parentImgFile, trigger: "", depth: 0 };
          rows.push(`<div style="display:flex;align-items:center;justify-content:center;gap:4px">
            ${evoCard(parent)}
            <div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0;margin:0 4px">
              <div style="font-size:18px;color:${th.textMuted}">\u2192</div>
              <div style="font-size:10px;color:${th.textSecondary};text-align:center;max-width:80px;line-height:1.2">${esc(evo.trigger)}</div>
            </div>
            ${evoCard(evo)}
          </div>`);
        }
      });
      evoContent = `<div style="display:flex;flex-direction:column;gap:8px;padding:12px;background:${th.surface};border-radius:12px;border:1px solid ${th.border}">${rows.join("")}</div>`;
    } else {
      // Linear layout
      const evoItems = regularEvos.map((evo, i) => {
        const arrow = i > 0 && evo.trigger ? `<div style="display:flex;flex-direction:column;align-items:center;margin:0 4px;flex-shrink:0">
          <div style="font-size:18px;color:${th.textMuted}">\u2192</div>
          <div style="font-size:10px;color:${th.textSecondary};text-align:center;max-width:80px;line-height:1.2">${esc(evo.trigger)}</div>
        </div>` : "";
        return `${arrow}${evoCard(evo)}`;
      }).join("");
      evoContent = `<div style="display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:4px;padding:12px;background:${th.surface};border-radius:12px;border:1px solid ${th.border}">${evoItems}</div>`;
    }

    let megaHtml = "";
    if (megaEvos.length > 0) {
      const megaCards = megaEvos.map(evo => {
        const megaSrc = `${IMG_BASE}/Mega/regular/${getGenFolder(evo.dexNum)}/${evo.imgFile}.webp`;
        return `<div onclick="showFormModal('${megaSrc}','${esc(evo.name)}')" style="display:flex;align-items:center;gap:${isMobile ? 8 : 12}px;padding:${isMobile ? 10 : 12}px;background:${th.accentBgSubtle("#8E44AD")};border:1px solid ${th.countdownBorder("#8E44AD")};border-radius:12px;cursor:pointer;transition:transform 0.15s ease,box-shadow 0.15s ease" onmouseenter="this.style.transform='scale(1.02)';this.style.boxShadow='0 4px 12px rgba(142,68,173,0.2)'" onmouseleave="this.style.transform='scale(1)';this.style.boxShadow='none'">
        <img src="${megaSrc}" style="width:${isMobile ? 52 : 60}px;height:${isMobile ? 52 : 60}px;object-fit:contain;flex-shrink:0" onerror="this.style.opacity='0.3'" />
        <div style="flex:1;min-width:0">
          <div style="font-size:${isMobile ? 13 : 14}px;font-weight:700;color:${th.text}">${esc(evo.name)}</div>
          <div style="font-size:${isMobile ? 10 : 11}px;color:${th.textSecondary};margin-top:2px">${esc(evo.trigger)}</div>
        </div>
      </div>`;
      }).join("");
      megaHtml = `<div style="margin-top:12px">
        <div style="font-size:13px;font-weight:700;color:#8E44AD;margin-bottom:8px">\u26A1 Mega Evolution</div>
        <div style="display:flex;flex-direction:column;gap:8px">${megaCards}</div>
      </div>`;
    }

    evoHtml = `<div style="margin-top:20px">
      <div style="font-size:14px;font-weight:700;color:${th.text};margin-bottom:10px">Evolution Chain</div>
      ${evoContent}
      ${megaHtml}
    </div>`;
  }
  const pad = isMobile ? "16px" : "24px";
  return `<div style="padding:${pad};max-width:480px;margin:0 auto">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
      <button onclick="closePokemonDetail()" style="display:flex;align-items:center;gap:6px;background:none;border:none;color:${th.textSecondary};font-size:14px;font-weight:600;cursor:pointer;padding:8px 0;font-family:inherit" onmouseenter="this.style.color='${th.text}'" onmouseleave="this.style.color='${th.textSecondary}'">\u2190 Back</button>
      <div style="display:flex;gap:8px">
        ${data.dexNum > 1 ? `<button onclick="openPokemonDetail(${data.dexNum - 1})" style="width:36px;height:36px;border-radius:10px;border:1.5px solid ${th.border};background:${th.surface};color:${th.text};font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center;font-family:inherit;transition:all 0.15s ease" onmouseenter="this.style.background='${th.surfaceHover}'" onmouseleave="this.style.background='${th.surface}'">\u25C0</button>` : ""}
        ${data.dexNum < 1025 ? `<button onclick="openPokemonDetail(${data.dexNum + 1})" style="width:36px;height:36px;border-radius:10px;border:1.5px solid ${th.border};background:${th.surface};color:${th.text};font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center;font-family:inherit;transition:all 0.15s ease" onmouseenter="this.style.background='${th.surfaceHover}'" onmouseleave="this.style.background='${th.surface}'">\u25B6</button>` : ""}
      </div>
    </div>
    <div style="text-align:center;padding:20px 0;background:linear-gradient(135deg,${primaryColor}22,${primaryColor}08);border-radius:16px;margin-bottom:16px;position:relative;overflow:hidden">
      <div style="position:absolute;top:8px;right:12px;font-size:28px;font-weight:800;color:${primaryColor};opacity:0.7">${dexStr}</div>
      <img onclick="showFormModal('${pokemonImgUrl(data.dexNum)}','${esc(data.name)}')" src="${pokemonImgUrl(data.dexNum)}" style="width:${isMobile ? 140 : 180}px;height:${isMobile ? 140 : 180}px;object-fit:contain;filter:drop-shadow(0 4px 12px ${primaryColor}40);cursor:pointer" onerror="this.style.opacity='0.3'" />
    </div>
    <div style="text-align:center;margin-bottom:16px">
      <div style="font-size:12px;font-weight:700;color:${th.textMuted};letter-spacing:1px">${dexStr}</div>
      <div style="font-size:24px;font-weight:800;color:${th.text};margin:2px 0;text-transform:capitalize">${esc(data.name)}</div>
      <div style="font-size:13px;color:${th.textSecondary};font-style:italic;margin-bottom:4px">${esc(data.genus)}</div>
      <div style="font-size:11px;color:${primaryColor};font-weight:600;margin-bottom:10px">${getGenFolder(data.dexNum).replace("Gen-","Gen ").replace("_"," \u2014 ")} Region</div>
      <div>${typeBadges}</div>
    </div>
    ${(() => {
      const capTypes = data.types.map(t => t.charAt(0).toUpperCase() + t.slice(1));
      const weaknesses = getWeaknesses(capTypes);
      const resistances = getResistances(capTypes);
      let wrHtml = "";
      if (weaknesses.length > 0) {
        wrHtml += `<div style="padding:14px;background:${th.surface};border-radius:12px;border:1px solid ${th.border};margin-bottom:12px">
          <div style="font-size:11px;font-weight:700;color:#E74C3C;letter-spacing:0.5px;margin-bottom:8px;text-transform:uppercase">Weak To</div>
          <div style="display:flex;gap:4px;flex-wrap:wrap">${weaknesses.map(w =>
            `<span style="font-size:12px;font-weight:700;color:#fff;background:${TYPE_COLORS[w.type] || "#888"};padding:3px 10px;border-radius:10px;text-shadow:0 1px 2px rgba(0,0,0,0.3)">${w.type}${w.multiplier > 2 ? " 2\u00D7" : ""}</span>`
          ).join("")}</div>
        </div>`;
      }
      if (resistances.length > 0) {
        wrHtml += `<div style="padding:14px;background:${th.surface};border-radius:12px;border:1px solid ${th.border};margin-bottom:12px">
          <div style="font-size:11px;font-weight:700;color:#27AE60;letter-spacing:0.5px;margin-bottom:8px;text-transform:uppercase">Resists</div>
          <div style="display:flex;gap:4px;flex-wrap:wrap">${resistances.map(r =>
            `<span style="font-size:12px;font-weight:700;color:#fff;background:${TYPE_COLORS[r.type] || "#888"};padding:3px 10px;border-radius:10px;opacity:${r.double ? "1" : "0.7"};text-shadow:0 1px 2px rgba(0,0,0,0.3)">${r.type}${r.double ? " 2\u00D7" : ""}</span>`
          ).join("")}</div>
        </div>`;
      }
      return wrHtml;
    })()}
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
      const shinySrc = shinyDexImg(data.dexNum, GENDER_SUFFIX[data.dexNum] || "");
      const shinyLabel = "Shiny " + data.name;
      const shinyDesc = SHINY_DESC[data.dexNum] || "";
      return `<div style="margin-top:20px">
        <div style="font-size:14px;font-weight:700;color:${th.text};margin-bottom:10px">\u2728 Shiny Variant</div>
        <div onclick="showFormModal('${shinySrc}','${esc(shinyLabel)}')" style="display:flex;align-items:center;gap:${isMobile ? 12 : 16}px;padding:${isMobile ? 14 : 16}px;background:${th.surface};border-radius:12px;border:1px solid ${th.border};cursor:pointer;transition:transform 0.15s ease,box-shadow 0.15s ease" onmouseenter="this.style.transform='scale(1.02)';this.style.boxShadow='0 4px 16px rgba(255,215,0,0.2)'" onmouseleave="this.style.transform='scale(1)';this.style.boxShadow='none'">
          <div style="position:relative;flex-shrink:0">
            <img src="${shinySrc}" style="width:${isMobile ? 80 : 100}px;height:${isMobile ? 80 : 100}px;object-fit:contain;filter:drop-shadow(0 2px 8px rgba(255,215,0,0.3))" onerror="this.style.opacity='0.3'" />
          </div>
          <div>
            <div style="font-size:${isMobile ? 15 : 16}px;font-weight:700;color:${th.text}">${esc(shinyLabel)}</div>
            ${shinyDesc ? `<div style="font-size:${isMobile ? 11 : 12}px;color:${th.textSecondary};margin-top:4px;line-height:1.4">${esc(shinyDesc)}</div>` : ""}
            <div style="font-size:${isMobile ? 10 : 11}px;color:${th.textMuted};margin-top:${shinyDesc ? 4 : 4}px">Tap to view full size</div>
          </div>
        </div>
      </div>`;
    })()}
    ${(() => {
      const forms = POKEMON_FORMS[data.dexNum];
      if (!forms || forms.length === 0) return "";
      const fullName = data.name;
      // Group forms by region type
      const regionTypes = {};
      const otherForms = [];
      forms.forEach(fm => {
        const lLower = fm.l.toLowerCase();
        if (["alola","galar","hisui","paldea"].includes(lLower)) {
          if (!regionTypes[lLower]) regionTypes[lLower] = [];
          regionTypes[lLower].push(fm);
        } else {
          otherForms.push(fm);
        }
      });

      let formsHTML = "";

      // Render regional form sections with evolution chains
      for (const [region, rForms] of Object.entries(regionTypes)) {
        const regionLabel = region === "alola" ? "Alolan" : region === "galar" ? "Galarian" : region === "hisui" ? "Hisuian" : "Paldean";
        const evoChain = getRegionalEvoChain(data.dexNum, region);
        let evoHTML = "";
        if (evoChain && evoChain.length > 1) {
          const evoItems = evoChain.map((d, i) => {
            const eName = DEX_BY_NUM[d] || "???";
            const regionKey = region === "alola" ? "alola" : region === "galar" ? "galarian" : "hisuian";
            const formFile = String(d).padStart(4,"0") + "_" + regionKey;
            const eSrc = formImgUrl(d, formFile);
            const arrow = i > 0 ? `<div style="font-size:16px;color:${th.textMuted};flex-shrink:0">\u2192</div>` : "";
            return `${arrow}<div onclick="openPokemonDetail(${d})" style="display:flex;flex-direction:column;align-items:center;cursor:pointer;padding:6px;border-radius:10px;flex-shrink:0" onmouseenter="this.style.background='${th.surfaceHover}'" onmouseleave="this.style.background='transparent'">
              <img src="${eSrc}" style="width:${isMobile ? 48 : 56}px;height:${isMobile ? 48 : 56}px;object-fit:contain" onerror="this.src='${pokemonImgUrl(d)}'" />
              <div style="font-size:10px;font-weight:600;color:${th.textSecondary};margin-top:2px">${regionLabel} ${esc(eName)}</div>
              <div style="font-size:9px;color:${th.textMuted}">#${String(d).padStart(4,"0")}</div>
            </div>`;
          }).join("");
          evoHTML = `<div style="display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:4px;padding:10px;background:${th.surface};border-radius:10px;border:1px solid ${th.border};margin-top:8px">${evoItems}</div>`;
        }

        const fSrc = formImgUrl(data.dexNum, rForms[0].f);
        const shinyfSrc = shinyFormImgUrl(data.dexNum, rForms[0].f);
        const formFullName = `${regionLabel} ${fullName}`;
        const shinyFormFullName = `Shiny ${regionLabel} ${fullName}`;
        formsHTML += `<div style="padding:${isMobile ? "12px" : "14px"};background:${th.accentBgSubtle(primaryColor)};border:1px solid ${th.border};border-radius:12px">
          <div style="margin-bottom:10px">
            <div style="font-size:${isMobile ? 14 : 15}px;font-weight:700;color:${th.text}">${esc(formFullName)}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:2px">
              <span style="font-size:${isMobile ? 11 : 12}px;color:${th.textMuted}">#${String(data.dexNum).padStart(4,"0")}</span>
              <span style="font-size:${isMobile ? 10 : 11}px;color:${primaryColor};font-weight:600">${region === "alola" ? "Alola Region" : region === "galar" ? "Galar Region" : region === "hisui" ? "Hisui Region" : "Paldea Region"}</span>
            </div>
          </div>
          <div style="display:flex;align-items:flex-end;justify-content:center;gap:${isMobile ? 20 : 28}px">
            <div onclick="showFormModal('${fSrc}','${esc(formFullName)}')" style="display:flex;flex-direction:column;align-items:center;cursor:pointer">
              <img src="${fSrc}" style="width:${isMobile ? 72 : 84}px;height:${isMobile ? 72 : 84}px;object-fit:contain" onerror="this.style.opacity='0.3'" />
              <div style="font-size:${isMobile ? 9 : 10}px;font-weight:600;color:${th.textSecondary};margin-top:4px">Regular</div>
            </div>
            <div onclick="showFormModal('${shinyfSrc}','${esc(shinyFormFullName)}')" style="display:flex;flex-direction:column;align-items:center;cursor:pointer;transition:transform 0.15s ease" onmouseenter="this.style.transform='scale(1.05)'" onmouseleave="this.style.transform='scale(1)'">
              <img src="${shinyfSrc}" style="width:${isMobile ? 72 : 84}px;height:${isMobile ? 72 : 84}px;object-fit:contain;filter:drop-shadow(0 2px 6px rgba(255,215,0,0.3))" onerror="this.parentElement.style.display='none'" />
              <div style="font-size:${isMobile ? 9 : 10}px;font-weight:600;color:${th.textMuted};margin-top:4px">\u2728 Shiny</div>
            </div>
          </div>
          ${evoHTML}
        </div>`;
      }

      // Render other (non-regional) forms as grid
      if (otherForms.length > 0) {
        const otherCards = otherForms.map(fm => {
          const fSrc = formImgUrl(data.dexNum, fm.f);
          const shinyfSrc = shinyFormImgUrl(data.dexNum, fm.f);
          const formFullName = `${fm.l} ${fullName}`;
          const shinyFormFullName = `Shiny ${fm.l} ${fullName}`;
          return `<div style="display:flex;flex-direction:column;align-items:center;gap:4px;padding:${isMobile ? "10px 6px" : "12px 8px"};border-radius:12px;background:${th.accentBgSubtle(primaryColor)};border:1px solid ${th.border}">
            <div onclick="showFormModal('${fSrc}','${esc(formFullName)}')" style="cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:4px;transition:transform 0.15s ease" onmouseenter="this.style.transform='scale(1.05)'" onmouseleave="this.style.transform='scale(1)'">
              <img src="${fSrc}" style="width:${isMobile ? 64 : 76}px;height:${isMobile ? 64 : 76}px;object-fit:contain" onerror="this.style.opacity='0.3'" />
              <span style="font-size:${isMobile ? 11 : 12}px;font-weight:700;color:${th.text};text-align:center">${esc(formFullName)}</span>
              <span style="font-size:${isMobile ? 9 : 10}px;color:${th.textMuted}">#${String(data.dexNum).padStart(4,"0")}</span>
            </div>
            <div onclick="showFormModal('${shinyfSrc}','${esc(shinyFormFullName)}')" style="cursor:pointer;margin-top:4px;padding:4px 8px;border-radius:8px;background:${th.surface};border:1px solid ${th.border};display:flex;align-items:center;gap:6px;transition:transform 0.15s ease,box-shadow 0.15s ease" onmouseenter="this.style.transform='scale(1.05)';this.style.boxShadow='0 2px 8px rgba(255,215,0,0.15)'" onmouseleave="this.style.transform='scale(1)';this.style.boxShadow='none'">
              <img src="${shinyfSrc}" style="width:${isMobile ? 28 : 32}px;height:${isMobile ? 28 : 32}px;object-fit:contain;filter:drop-shadow(0 1px 4px rgba(255,215,0,0.3))" onerror="this.parentElement.style.display='none'" />
              <span style="font-size:${isMobile ? 9 : 10}px;font-weight:600;color:${th.textSecondary}">\u2728 Shiny</span>
            </div>
          </div>`;
        }).join("");
        formsHTML += `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(${isMobile ? 100 : 120}px,1fr));gap:8px">${otherCards}</div>`;
      }

      return `<div style="margin-top:20px">
        <div style="font-size:14px;font-weight:700;color:${th.text};margin-bottom:10px">Forms</div>
        <div style="display:flex;flex-direction:column;gap:10px">${formsHTML}</div>
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

function setStoreFilter(f) {
  state.storeFilter = f;
  render();
}

function toggleStoreArchiveYear(year) {
  state.openStoreArchiveYears[year] = !state.openStoreArchiveYears[year];
  if (!state.openStoreArchiveYears[year]) {
    Object.keys(state.openStoreArchiveMonths).forEach(function(k) {
      if (k.startsWith(year + "-")) state.openStoreArchiveMonths[k] = false;
    });
  }
  render();
}
function toggleStoreArchiveMonth(key) {
  state.openStoreArchiveMonths[key] = !state.openStoreArchiveMonths[key];
  var isOpen = state.openStoreArchiveMonths[key];
  var content = document.getElementById("store-archive-month-content-" + key);
  var arrow = document.getElementById("store-archive-month-arrow-" + key);
  if (content) content.style.display = isOpen ? "grid" : "none";
  if (arrow) arrow.style.transform = isOpen ? "rotate(180deg)" : "rotate(0deg)";
}

function toggleStoreGuide() {
  state.storeGuideOpen = !state.storeGuideOpen;
  const wrapper = document.getElementById("store-guide-wrapper");
  const arrow = document.getElementById("store-guide-arrow");
  const fade = document.getElementById("store-guide-fade");
  const mobile = getBreakpoint() === "mobile";
  if (wrapper) {
    if (state.storeGuideOpen) {
      wrapper.style.maxHeight = mobile ? "350px" : "600px";
      wrapper.style.opacity = "1";
      wrapper.style.overflowY = mobile ? "auto" : "hidden";
      wrapper.scrollTop = 0;
    } else {
      wrapper.style.maxHeight = "0";
      wrapper.style.opacity = "0";
      wrapper.style.overflowY = "hidden";
    }
  }
  if (fade) {
    fade.style.opacity = state.storeGuideOpen ? "1" : "0";
  }
  if (arrow) {
    arrow.style.transform = state.storeGuideOpen ? "rotate(180deg)" : "rotate(0deg)";
  }
}

function handleGuideScroll(el) {
  const fade = document.getElementById("store-guide-fade");
  if (!fade) return;
  const distFromBottom = el.scrollHeight - el.scrollTop - el.clientHeight;
  fade.style.opacity = distFromBottom < 10 ? "0" : "1";
}

function renderCoinTiers(th, isMobile) {
  const tiers = [
    { coins: 100, bonus: 10, price: 0.99, img: "Item_COIN_HANDFUL_01.png", label: "Handful" },
    { coins: 550, bonus: 50, price: 4.99, img: "Item_COIN_STACK_01.png", label: "Stack" },
    { coins: 1200, bonus: 100, price: 9.99, img: "Item_COIN_POUCH_01.png", label: "Pouch" },
    { coins: 2500, bonus: 200, price: 19.99, img: "Item_COIN_BOX_01.png", label: "Box" },
    { coins: 5200, bonus: 400, price: 39.99, img: "Item_COIN_BUCKET_01.png", label: "Bucket" },
    { coins: 14500, bonus: 1000, price: 99.99, img: "Item_COIN_HEAP_01.png", label: "Heap" }
  ];
  const baseRate = tiers[0].price / (tiers[0].coins + tiers[0].bonus);
  const bestVal = tiers.reduce(function(best, t) { var v = (t.coins + t.bonus) / t.price; return v > best ? v : best; }, 0);
  var imgSize = isMobile ? 48 : 56;
  return tiers.map(function(tier, i) {
    var total = tier.coins + tier.bonus;
    var costPerCoin = (tier.price / total).toFixed(4);
    var coinsPerDollar = (total / tier.price).toFixed(1);
    var isBest = (total / tier.price) === bestVal;
    var savingsPct = ((1 - (tier.price / total) / baseRate) * 100).toFixed(0);
    var rating, ratingColor;
    if (savingsPct >= 25) { rating = "Best Value"; ratingColor = "#2ECC71"; }
    else if (savingsPct >= 15) { rating = "Great"; ratingColor = "#3498DB"; }
    else if (savingsPct >= 5) { rating = "Good"; ratingColor = "#F39C12"; }
    else { rating = "Base Rate"; ratingColor = th.textMuted; }
    var cheaperHTML = i > 0 ? '<span style="font-size:' + (isMobile ? 10 : 11) + 'px;font-weight:700;color:#2ECC71">' + savingsPct + '% cheaper</span>' : "";
    var bonusColor = "#F39C12";
    var borderColor = isBest ? "#2ECC71" : th.border;
    var ratingIcon = isBest ? "\uD83C\uDFC6" : savingsPct >= 15 ? "\u2705" : savingsPct >= 5 ? "\u2696\uFE0F" : "\u26AA";
    return '<div style="background:' + th.surface + ';border:1.5px solid ' + borderColor + ';border-radius:' + (isMobile ? 18 : 20) + 'px;overflow:hidden;transition:all 0.25s ease;box-shadow:' + th.shadow + '"'
      + ' onmouseenter="this.style.borderColor=\'' + ratingColor + '\';this.style.transform=\'translateY(-3px)\';this.style.boxShadow=\'0 8px 25px ' + ratingColor + '22\'"'
      + ' onmouseleave="this.style.borderColor=\'' + borderColor + '\';this.style.transform=\'translateY(0)\';this.style.boxShadow=\'' + th.shadow + '\'">'
      + '<div style="padding:' + (isMobile ? "16px 16px 12px" : "20px 24px 16px") + ';display:flex;flex-direction:column;gap:10px">'
        // Title row with image, name, price
        + '<div style="display:flex;align-items:flex-start;justify-content:space-between;gap:10px">'
          + '<div style="display:flex;align-items:center;gap:' + (isMobile ? 10 : 12) + 'px;flex:1;min-width:0">'
            + '<img src="assets/pokemon-images/Items/' + tier.img + '" style="width:' + imgSize + 'px;height:' + imgSize + 'px;object-fit:contain;flex-shrink:0" alt="' + tier.label + '" />'
            + '<div>'
              + '<h3 style="margin:0;font-size:' + (isMobile ? 15 : 17) + 'px;font-weight:800;color:' + th.text + ';line-height:1.3">' + tier.coins.toLocaleString() + ' Pok\u00E9Coins</h3>'
              + '<div style="display:flex;align-items:center;gap:6px;margin-top:6px;flex-wrap:wrap">'
                + '<span style="font-size:9px;font-weight:700;color:' + bonusColor + ';background:' + th.accentBg(bonusColor) + ';padding:3px 8px;border-radius:20px">+' + tier.bonus.toLocaleString() + ' BONUS</span>'
                + (isBest ? '<span style="font-size:9px;font-weight:800;color:#fff;background:linear-gradient(135deg,#2ECC71,#27AE60);padding:3px 10px;border-radius:20px;letter-spacing:0.5px">\uD83C\uDFC6 BEST VALUE</span>' : "")
              + '</div>'
            + '</div>'
          + '</div>'
          + '<div style="text-align:right;flex-shrink:0">'
            + '<div style="font-size:' + (isMobile ? 22 : 26) + "px;font-weight:900;color:" + th.text + ";font-family:'JetBrains Mono',monospace\">$" + tier.price.toFixed(2) + '</div>'
          + '</div>'
        + '</div>'
        // Rating bar
        + '<div style="display:flex;align-items:center;gap:' + (isMobile ? 8 : 12) + 'px;padding:' + (isMobile ? "10px 12px" : "12px 16px") + ';border-radius:14px;background:' + th.accentBg(ratingColor) + ';border:1px solid ' + ratingColor + '33">'
          + '<span style="font-size:' + (isMobile ? 20 : 24) + 'px">' + ratingIcon + '</span>'
          + '<div>'
            + '<div style="font-size:' + (isMobile ? 14 : 16) + 'px;font-weight:800;color:' + ratingColor + '">' + rating + '</div>'
            + '<div style="font-size:' + (isMobile ? 11 : 12) + 'px;color:' + th.textSecondary + ';font-weight:600">' + total.toLocaleString() + ' total coins \u00B7 $' + costPerCoin + '/coin</div>'
          + '</div>'
        + '</div>'
        // Details
        + '<div style="display:flex;flex-direction:column">'
          + '<div style="display:flex;align-items:center;justify-content:space-between;padding:6px 0;border-bottom:1px solid ' + th.border + '">'
            + '<span style="font-size:' + (isMobile ? 12 : 13) + 'px;font-weight:600;color:' + th.text + '">' + tier.coins.toLocaleString() + 'x Pok\u00E9Coins</span>'
            + '<span style="font-size:' + (isMobile ? 11 : 12) + "px;font-weight:700;color:" + th.textSecondary + ";font-family:'JetBrains Mono',monospace\">base</span>"
          + '</div>'
          + '<div style="display:flex;align-items:center;justify-content:space-between;padding:6px 0;border-bottom:1px solid ' + th.border + '">'
            + '<span style="font-size:' + (isMobile ? 12 : 13) + 'px;font-weight:600;color:' + th.text + '">' + tier.bonus.toLocaleString() + 'x Web Store Bonus Coins</span>'
            + '<span style="font-size:' + (isMobile ? 11 : 12) + 'px;font-weight:700;color:' + bonusColor + '">FREE</span>'
          + '</div>'
        + '</div>'
        // Bottom stats
        + '<div style="display:flex;align-items:center;justify-content:space-between;padding-top:4px">'
          + '<div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap">'
            + '<span style="font-size:' + (isMobile ? 10 : 11) + 'px;font-weight:700;color:' + th.textSecondary + ";font-family:'JetBrains Mono',monospace;background:" + th.accentBgSubtle("#888") + ';padding:3px 8px;border-radius:8px">' + coinsPerDollar + ' coins/$1</span>'
            + cheaperHTML
          + '</div>'
          + '<span style="font-size:' + (isMobile ? 11 : 12) + 'px;font-weight:600;color:' + th.textMuted + '">' + total.toLocaleString() + ' total</span>'
        + '</div>'
      + '</div>'
    + '</div>';
  }).join("");
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

function searchArchivedCDs(val) {
  const query = val.trim().toLowerCase();
  const resultsEl = document.getElementById("cd-archive-results");
  if (!resultsEl || query.length < 1) { if (resultsEl) resultsEl.style.display = "none"; return; }
  const th = t(darkMode);
  const matches = EVENTS.filter(e => e.type === "Community Day" && isOver(e) && e.title.toLowerCase().includes(query)).slice(0, 10);
  if (matches.length === 0) { resultsEl.innerHTML = `<div style="padding:12px;text-align:center;color:${th.textMuted};font-size:13px">No Community Days found</div>`; resultsEl.style.display = "block"; return; }
  resultsEl.innerHTML = matches.map(ev => {
    const dateStr = formatDate(ev.date);
    return `<div onclick="selectEvent(${ev.id});document.getElementById('cd-archive-search').value='';document.getElementById('cd-archive-results').style.display='none'" style="display:flex;align-items:center;gap:10px;padding:10px 14px;cursor:pointer;transition:background 0.1s ease" onmouseenter="this.style.background='${th.surfaceHover}'" onmouseleave="this.style.background='transparent'">
      ${ev.iconImg ? `<img src="${ev.iconImg}" style="width:36px;height:36px;object-fit:contain;border-radius:8px" onerror="this.style.display='none'" />` : `<span style="font-size:20px">${ev.icon}</span>`}
      <div><div style="font-size:13px;font-weight:600;color:${th.text}">${esc(ev.title)}</div><div style="font-size:11px;color:${th.textMuted}">${dateStr}</div></div>
    </div>`;
  }).join("");
  resultsEl.style.display = "block";
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
              <span style="font-size:11px;font-weight:700;color:${th.textMuted};letter-spacing:1px;text-transform:uppercase;white-space:nowrap">Archived Community Days</span>
              <div style="flex:1;height:1px;background:${th.border}"></div>
            </div>
            <div style="position:relative;max-width:400px;margin:0 auto;width:100%">
              <input id="cd-archive-search" placeholder="Search past Community Days..." oninput="searchArchivedCDs(this.value)" autocomplete="off" style="width:100%;padding:${isMobile ? "10px 14px 10px 38px" : "12px 16px 12px 42px"};border-radius:12px;border:1.5px solid ${th.border};background:${th.surface};color:${th.text};font-size:${isMobile ? 13 : 14}px;font-family:inherit;outline:none;box-sizing:border-box" />
              <span style="position:absolute;left:12px;top:50%;transform:translateY(-50%);font-size:16px;pointer-events:none">\uD83D\uDD0D</span>
              <div id="cd-archive-results" style="display:none;position:absolute;top:100%;left:0;right:0;max-height:300px;overflow-y:auto;background:${th.surface};border:1.5px solid ${th.border};border-radius:12px;margin-top:4px;z-index:100;box-shadow:0 8px 24px rgba(0,0,0,0.2)"></div>
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
                ${isOpen ? `<div style="background:${th.surface};border:1.5px solid ${th.border};border-top:none;border-radius:0 0 16px 16px;overflow:hidden;animation:fadeSlideIn 0.25s ease">
                  ${items.map((ev, i) =>
                    `<button onclick="selectEvent(${ev.id})" style="display:flex;align-items:center;gap:12px;padding:14px 18px;background:${th.surface};border:none;border-top:${i > 0 ? `1px solid ${th.border}` : "none"};cursor:pointer;text-align:left;width:100%;font-family:inherit;transition:background 0.15s ease;-webkit-tap-highlight-color:transparent;outline:none"
                      onmouseenter="this.style.background='${th.surfaceHover}'"
                      onmouseleave="this.style.background='${th.surface}'">
                      ${(() => {
                        if (ev.iconImg) {
                          return `<div style="width:55px;height:55px;border-radius:14px;background:${th.accentBg(ev.color)};display:flex;align-items:center;justify-content:center;flex-shrink:0;overflow:hidden"><img src="${ev.iconImg}" style="width:48px;height:48px;object-fit:contain" onerror="this.parentElement.innerHTML='${ev.icon}'" /></div>`;
                        }
                        const raidPkmn = (ev.type === "Raid" || ev.type === "Max Battle") && ev.details && ev.details.bosses && ev.details.bosses[0] ? getPokemonImg(ev.details.bosses[0]) : null;
                        return raidPkmn
                          ? `<div style="width:55px;height:55px;border-radius:14px;background:${th.accentBg(ev.color)};display:flex;align-items:center;justify-content:center;flex-shrink:0;overflow:hidden"><img src="${raidPkmn.url}" style="width:48px;height:48px;object-fit:contain" onerror="this.parentElement.innerHTML='${ev.icon}'" /></div>`
                          : `<div style="width:55px;height:55px;border-radius:14px;background:${th.accentBg(ev.color)};display:flex;align-items:center;justify-content:center;font-size:24px;flex-shrink:0">${ev.icon}</div>`;
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
              ${isOpen ? `<div style="background:${th.surface};border:1.5px solid ${th.border};border-top:none;border-radius:0 0 16px 16px;overflow:hidden;animation:fadeSlideIn 0.25s ease">
                ${items.map((a, i) =>
                  `<button onclick="selectNews(${a.id})" style="display:flex;align-items:center;gap:12px;padding:14px 18px;background:${th.surface};border:none;border-top:${i > 0 ? `1px solid ${th.border}` : "none"};cursor:pointer;text-align:left;width:100%;font-family:inherit;transition:background 0.15s ease;-webkit-tap-highlight-color:transparent;outline:none"
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

    // Store tab
    let storeTabHTML = "";
    if (state.tab === "store") {
      const isCoinsFilter = state.storeFilter === "Pok\u00E9Coins";
      const filteredBoxes = isCoinsFilter ? [] : state.storeFilter === "All" ? WEB_STORE_BOXES : WEB_STORE_BOXES.filter(b => b.category === state.storeFilter);
      const now = new Date();
      const isEventExpired = (b) => b.category === "Event Bundle" && b.expires && new Date(b.expires + "T23:59:59").getTime() < now.getTime();
      const activeEventBundles = filteredBoxes.filter(b => b.category === "Event Bundle" && !isEventExpired(b));
      const expiredEventBundles = filteredBoxes.filter(b => isEventExpired(b));
      const otherBoxes = filteredBoxes.filter(b => b.category !== "Event Bundle").sort((a, b) => {
        const va = calcBoxValue(a), vb = calcBoxValue(b);
        return vb.savingsPct - va.savingsPct;
      });
      const sortedBoxes = [...activeEventBundles, ...otherBoxes];
      const catPillsHTML = STORE_CATEGORIES.map(cat => {
        const isActive = state.storeFilter === cat;
        return `<button onclick="setStoreFilter('${cat}')" style="padding:${isMobile ? "6px 14px" : "7px 16px"};border-radius:20px;border:1.5px solid ${isActive ? "#E74C3C" : th.border};background:${isActive ? th.accentBg("#E74C3C") : th.surface};color:${isActive ? "#E74C3C" : th.textSecondary};font-size:${isMobile ? 11 : 12}px;font-weight:700;cursor:pointer;font-family:inherit;transition:all 0.15s ease;white-space:nowrap">${cat}</button>`;
      }).join("");
      const boxCardsHTML = sortedBoxes.map(box => {
        const v = calcBoxValue(box);
        const itemsHTML = box.items.map(item => {
          const unitVal = STORE_ITEM_VALUES[item.name] || 0;
          const totalVal = unitVal * item.qty;
          const isEstimated = ESTIMATED_VALUE_ITEMS.has(item.name);
          const multiImgs = ITEM_IMAGES_MULTI[item.name];
          const itemImg = (multiImgs && multiImgs[item.qty]) || ITEM_IMAGES[item.name];
          return `<div style="display:flex;align-items:center;justify-content:space-between;padding:6px 0;border-bottom:1px solid ${th.border}">
            <div style="display:flex;align-items:center;gap:8px">
              ${itemImg ? `<img src="assets/pokemon-images/Items/${itemImg}" style="width:30px;height:30px;object-fit:contain;flex-shrink:0" alt="${item.name}" />` : ""}
              <span style="font-size:${isMobile ? 12 : 13}px;font-weight:600;color:${th.text}">${item.qty}x ${item.name}</span>
              ${item.note ? `<span style="font-size:10px;color:${th.textMuted};font-weight:500">(${item.note})</span>` : ""}
            </div>
            ${box.category !== "Event Bundle" ? `<span style="font-size:${isMobile ? 11 : 12}px;font-weight:700;color:${th.textSecondary};font-family:'JetBrains Mono',monospace">$${totalVal.toFixed(2)}${isEstimated ? `<span style="color:#F39C12;font-size:12px;font-weight:900;margin-left:3px;cursor:help" title="Estimated \u2014 not sold individually on the web store">*</span>` : ""}</span>` : ""}
          </div>`;
        }).join("");
        let timeLeftText = "";
        if (box.expires) {
          const now = new Date();
          const expDate = new Date(box.expires + "T23:59:59");
          const diffMs = expDate.getTime() - now.getTime();
          if (diffMs <= 0) { timeLeftText = "EXPIRED"; }
          else {
            const daysLeft = Math.ceil(diffMs / 86400000);
            timeLeftText = daysLeft === 1 ? "1 day left" : daysLeft + " days left";
          }
        }
        const isExpired = timeLeftText === "EXPIRED";
        const badgeHTML = box.limited ? `<span style="font-size:12px;font-weight:800;color:#fff;background:linear-gradient(135deg,${isExpired ? "#666,#555" : "#E74C3C,#C0392B"});padding:5px 14px;border-radius:20px;letter-spacing:0.5px;white-space:nowrap">${isExpired ? "EXPIRED" : box.limitedLabel ? box.limitedLabel : "LIMITED" + (timeLeftText ? " \u00B7 " + timeLeftText : "")}</span>` : "";
        const popularHTML = box.popular ? `<span style="font-size:9px;font-weight:800;color:#F39C12;background:${th.accentBg("#F39C12")};padding:3px 10px;border-radius:20px;letter-spacing:0.5px">POPULAR</span>` : "";
        const oneTimeHTML = box.oneTime ? `<span style="font-size:9px;font-weight:700;color:${th.textMuted};background:${th.accentBgSubtle("#888")};padding:3px 8px;border-radius:20px;white-space:nowrap">ONE-TIME</span>` : "";
        const ratingIcon = v.rating === "Great Deal" ? "\uD83D\uDD25" : v.rating === "Good Deal" ? "\u2705" : v.rating === "Fair" ? "\u2696\uFE0F" : "\u274C";
        return `<div style="background:${th.surface};border:1.5px solid ${th.border};border-radius:${isMobile ? 18 : 20}px;overflow:hidden;transition:all 0.25s ease;box-shadow:${th.shadow}" onmouseenter="this.style.borderColor='${v.ratingColor}';this.style.transform='translateY(-3px)';this.style.boxShadow='0 8px 25px ${v.ratingColor}22'" onmouseleave="this.style.borderColor='${th.border}';this.style.transform='translateY(0)';this.style.boxShadow='${th.shadow}'">
          <div style="padding:${isMobile ? "16px 16px 12px" : "20px 24px 16px"};display:flex;flex-direction:column;gap:10px">
            <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:10px;flex-wrap:wrap">
              <div style="flex:1;min-width:0">
                <h3 style="margin:0;font-size:${isMobile ? 15 : 17}px;font-weight:800;color:${th.text};line-height:1.3">${box.name}</h3>
                <div style="display:flex;${isMobile ? "flex-direction:column;align-items:flex-start" : "align-items:center"};gap:6px;margin-top:6px">
                  ${badgeHTML}
                  <div style="display:flex;align-items:center;gap:6px">
                    ${popularHTML}${oneTimeHTML}
                    <span style="font-size:10px;font-weight:700;color:${th.textMuted};background:${th.accentBgSubtle("#888")};padding:3px 8px;border-radius:20px;white-space:nowrap">${box.category}</span>
                  </div>
                </div>
              </div>
              <div style="display:flex;align-items:center;gap:${isMobile ? 8 : 10}px;flex-shrink:0">
                <div style="font-size:${isMobile ? 22 : 26}px;font-weight:900;color:${th.text};font-family:'JetBrains Mono',monospace">$${box.price.toFixed(2)}</div>
                ${box.category === "Event Bundle" ? `<img src="assets/pokemon-images/icons/image.gif" style="width:${isMobile ? 36 : 42}px;height:${isMobile ? 36 : 42}px;object-fit:contain" alt="Bundle" />` : ""}
              </div>
            </div>
            ${box.category !== "Event Bundle" ? `<div style="display:flex;align-items:center;gap:${isMobile ? 8 : 12}px;padding:${isMobile ? "10px 12px" : "12px 16px"};border-radius:14px;background:${th.accentBg(v.ratingColor)};border:1px solid ${v.ratingColor}33">
              <span style="font-size:${isMobile ? 20 : 24}px">${ratingIcon}</span>
              <div>
                <div style="font-size:${isMobile ? 14 : 16}px;font-weight:800;color:${v.ratingColor}">${v.rating}</div>
                <div style="font-size:${isMobile ? 11 : 12}px;color:${th.textSecondary};font-weight:600">${v.savingsPct >= 0 ? "Save" : "Overpay"} ${Math.abs(v.savingsPct).toFixed(0)}% \u00B7 Value: $${v.totalValue.toFixed(2)}</div>
              </div>
            </div>` : ""}
            <div style="display:flex;flex-direction:column">${itemsHTML}</div>
            ${box.category !== "Event Bundle" ? `<div style="display:flex;align-items:center;justify-content:space-between;padding-top:4px">
              <span style="font-size:${isMobile ? 11 : 12}px;color:${th.textMuted};font-weight:600">Total Item Value</span>
              <span style="font-size:${isMobile ? 14 : 15}px;font-weight:800;color:${v.savingsPct >= 0 ? "#2ECC71" : "#E74C3C"};font-family:'JetBrains Mono',monospace">${v.savingsPct >= 0 ? "+" : "-"}$${Math.abs(v.savings).toFixed(2)}</span>
            </div>` : ""}
          </div>
          ${box.ticketBonuses ? `<div style="margin:${isMobile ? "10px 14px 14px" : "14px 20px 20px"};padding:${isMobile ? "14px" : "16px"};border-radius:14px;background:${th.accentBgSubtle("#E67E22")};border:1px solid ${th.countdownBorder("#E67E22")}">
            <div style="font-size:12px;font-weight:700;color:#E67E22;margin-bottom:4px">\uD83C\uDFAB Ticket Bonuses</div>
            <div style="font-size:${isMobile ? 10 : 11}px;color:${th.textMuted};font-weight:500;margin-bottom:8px">These bonuses will be effective on Saturday, April 4, 2026, from 2:00 p.m. to 5:00 p.m.</div>
            <ul style="margin:0;padding-left:18px;font-size:${isMobile ? 12 : 13}px;color:${th.textSecondary};line-height:1.8">${box.ticketBonuses.map(b => `<li>${esc(b)}</li>`).join("")}</ul>
            <div style="margin-top:12px;padding-top:10px;border-top:1px solid ${th.countdownBorder("#E67E22")};font-size:${isMobile ? 11 : 12}px;color:#2ECC71;font-weight:700">\uD83D\uDCA1 Pro Tip: <span style="font-weight:500;color:${th.textSecondary}">Purchasing the ticket through the Web Store gives you an extra Raid Pass!</span></div>
          </div>` : ""}
        </div>`;
      }).join("");
      // Build archived event bundles section grouped by year/month
      const MONTH_NAMES = ["January","February","March","April","May","June","July","August","September","October","November","December"];
      const fmtArchiveDate = function(d) { return MONTH_NAMES[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear(); };
      function renderArchiveCard(box, th, isMobile) {
        var archItemsHTML = box.items.map(function(item) {
          var itemImg = (ITEM_IMAGES_MULTI[item.name] && ITEM_IMAGES_MULTI[item.name][item.qty]) || ITEM_IMAGES[item.name];
          var imgTag = itemImg ? '<img src="assets/pokemon-images/Items/' + itemImg + '" style="width:30px;height:30px;object-fit:contain;flex-shrink:0" alt="' + item.name + '" />' : "";
          var noteTag = item.note ? '<span style="font-size:10px;color:' + th.textMuted + ';font-weight:500">(' + item.note + ')</span>' : "";
          return '<div style="display:flex;align-items:center;justify-content:space-between;padding:6px 0;border-bottom:1px solid ' + th.border + '">' +
            '<div style="display:flex;align-items:center;gap:8px">' + imgTag +
            '<span style="font-size:' + (isMobile ? 12 : 13) + 'px;font-weight:600;color:' + th.text + '">' + item.qty + 'x ' + item.name + '</span>' + noteTag +
            '</div></div>';
        }).join("");
        var fromDate = box.availableFrom ? new Date(box.availableFrom) : null;
        var toDate = new Date(box.expires);
        var dateRangeText = fromDate ? fmtArchiveDate(fromDate) + " \u2013 " + fmtArchiveDate(toDate) : "Through " + fmtArchiveDate(toDate);
        var oneTimeTag = box.oneTime ? '<span style="font-size:9px;font-weight:700;color:' + th.textMuted + ';background:' + th.accentBgSubtle("#888") + ';padding:3px 8px;border-radius:20px;white-space:nowrap">ONE-TIME</span>' : "";
        var ticketHTML = "";
        if (box.ticketBonuses) {
          ticketHTML = '<div style="margin:' + (isMobile ? "10px 14px 14px" : "14px 20px 20px") + ';padding:' + (isMobile ? "14px" : "16px") + ';border-radius:14px;background:' + th.accentBgSubtle("#E67E22") + ';border:1px solid ' + th.countdownBorder("#E67E22") + '">' +
            '<div style="font-size:12px;font-weight:700;color:#E67E22;margin-bottom:4px">&#127915; Ticket Bonuses</div>' +
            '<ul style="margin:0;padding-left:18px;font-size:' + (isMobile ? 12 : 13) + 'px;color:' + th.textSecondary + ';line-height:1.8">' + box.ticketBonuses.map(function(b) { return '<li>' + esc(b) + '</li>'; }).join("") + '</ul></div>';
        }
        return '<div style="background:' + th.surface + ';border:1.5px solid ' + th.border + ';border-radius:' + (isMobile ? 18 : 20) + 'px;overflow:hidden;opacity:0.75;box-shadow:' + th.shadow + '">' +
          '<div style="padding:' + (isMobile ? "16px 16px 12px" : "20px 24px 16px") + ';display:flex;flex-direction:column;gap:10px">' +
            '<div style="display:flex;align-items:flex-start;justify-content:space-between;gap:10px;flex-wrap:wrap">' +
              '<div style="flex:1;min-width:0">' +
                '<h3 style="margin:0;font-size:' + (isMobile ? 15 : 17) + 'px;font-weight:800;color:' + th.text + ';line-height:1.3">' + box.name + '</h3>' +
                '<div style="display:flex;' + (isMobile ? "flex-direction:column;align-items:flex-start" : "align-items:center") + ';gap:6px;margin-top:6px">' +
                  '<span style="font-size:12px;font-weight:800;color:#fff;background:linear-gradient(135deg,#666,#555);padding:5px 14px;border-radius:20px;letter-spacing:0.5px;white-space:nowrap">EXPIRED</span>' +
                  '<div style="display:flex;align-items:center;gap:6px">' + oneTimeTag +
                    '<span style="font-size:10px;font-weight:700;color:' + th.textMuted + ';background:' + th.accentBgSubtle("#888") + ';padding:3px 8px;border-radius:20px;white-space:nowrap">' + box.category + '</span>' +
                  '</div>' +
                '</div>' +
                '<div style="margin-top:8px;font-size:' + (isMobile ? 11 : 12) + 'px;font-weight:600;color:' + th.textMuted + ';display:flex;align-items:center;gap:6px"><span style="font-size:14px">&#128197;</span> ' + dateRangeText + '</div>' +
              '</div>' +
              '<div style="display:flex;align-items:center;gap:' + (isMobile ? 8 : 10) + 'px;flex-shrink:0">' +
                '<div style="font-size:' + (isMobile ? 22 : 26) + 'px;font-weight:900;color:' + th.text + ';font-family:\'JetBrains Mono\',monospace">$' + box.price.toFixed(2) + '</div>' +
                '<img src="assets/pokemon-images/icons/image.gif" style="width:' + (isMobile ? 36 : 42) + 'px;height:' + (isMobile ? 36 : 42) + 'px;object-fit:contain" alt="Bundle" />' +
              '</div>' +
            '</div>' +
            '<div style="display:flex;flex-direction:column">' + archItemsHTML + '</div>' +
          '</div>' + ticketHTML +
        '</div>';
      }
      // Group expired bundles by year then month
      var archiveByYear = {};
      expiredEventBundles.forEach(function(box) {
        var expD = new Date(box.expires);
        var y = String(expD.getFullYear());
        var m = expD.getMonth();
        if (!archiveByYear[y]) archiveByYear[y] = {};
        if (!archiveByYear[y][m]) archiveByYear[y][m] = [];
        archiveByYear[y][m].push(box);
      });
      var archiveYearKeys = Object.keys(archiveByYear).sort().reverse();
      var archiveHTML = "";
      if ((state.storeFilter === "All" || state.storeFilter === "Event Bundle") && archiveYearKeys.length > 0) {
        // Header divider
        archiveHTML = '<div style="width:100%;display:flex;flex-direction:column;gap:10px">' +
          '<div style="display:flex;align-items:center;gap:10px">' +
            '<div style="flex:1;height:1px;background:' + th.border + '"></div>' +
            '<span style="font-size:11px;font-weight:700;color:' + th.textMuted + ';letter-spacing:1px;text-transform:uppercase;white-space:nowrap">Archived Event Bundles</span>' +
            '<div style="flex:1;height:1px;background:' + th.border + '"></div>' +
          '</div>';
        // Year accordions
        archiveYearKeys.forEach(function(year) {
          var monthsInYear = archiveByYear[year];
          var monthKeys = Object.keys(monthsInYear).sort().reverse();
          var totalBundles = 0;
          monthKeys.forEach(function(m) { totalBundles += monthsInYear[m].length; });
          var yearOpen = !!state.openStoreArchiveYears[year];
          var yearLabel = totalBundles + ' bundle' + (totalBundles === 1 ? '' : 's');
          archiveHTML += '<div style="margin-top:6px">' +
            '<button onclick="toggleStoreArchiveYear(\'' + year + '\')" style="display:flex;align-items:center;justify-content:space-between;width:100%;padding:14px 18px;background:' + th.surface + ';border:1.5px solid ' + th.border + ';border-radius:' + (yearOpen ? '16px 16px 0 0' : '16px') + ';cursor:pointer;font-family:inherit;transition:all 0.2s ease;box-shadow:' + th.shadow + '">' +
              '<div style="display:flex;align-items:center;gap:10px">' +
                '<div style="width:36px;height:36px;border-radius:10px;background:' + th.accentBg("#636E72") + ';display:flex;align-items:center;justify-content:center;font-size:16px">&#128230;</div>' +
                '<div style="text-align:left"><div style="font-size:15px;font-weight:700;color:' + th.text + '">' + year + '</div>' +
                '<div style="font-size:12px;color:' + th.textMuted + ';font-weight:500">' + yearLabel + '</div></div>' +
              '</div>' +
              '<div style="font-size:18px;color:' + th.textMuted + ';transition:transform 0.2s ease;transform:' + (yearOpen ? 'rotate(180deg)' : 'rotate(0deg)') + '">\u25BE</div>' +
            '</button>';
          if (yearOpen) {
            archiveHTML += '<div style="background:' + th.surface + ';border:1.5px solid ' + th.border + ';border-top:none;border-radius:0 0 16px 16px;overflow:hidden">';
            monthKeys.forEach(function(m, mIdx) {
              var boxes = monthsInYear[m];
              var monthKey = year + '-' + m;
              var monthOpen = !!state.openStoreArchiveMonths[monthKey];
              var monthLabel = boxes.length + ' bundle' + (boxes.length === 1 ? '' : 's');
              archiveHTML += '<div style="border-top:' + (mIdx > 0 ? '1px solid ' + th.border : 'none') + '">' +
                '<button onclick="toggleStoreArchiveMonth(\'' + monthKey + '\')" style="display:flex;align-items:center;justify-content:space-between;width:100%;padding:12px 18px;background:' + th.surface + ';border:none;cursor:pointer;font-family:inherit;box-sizing:border-box;transition:background 0.15s ease;-webkit-tap-highlight-color:transparent;outline:none" onmouseenter="this.style.background=\'' + th.surfaceHover + '\'" onmouseleave="this.style.background=\'' + th.surface + '\'">' +
                  '<div style="display:flex;align-items:center;gap:10px">' +
                    '<div style="width:30px;height:30px;border-radius:8px;background:' + th.accentBg("#636E72") + ';display:flex;align-items:center;justify-content:center;font-size:13px">&#128197;</div>' +
                    '<div style="text-align:left"><div style="font-size:14px;font-weight:600;color:' + th.text + '">' + MONTH_NAMES[m] + '</div>' +
                    '<div style="font-size:11px;color:' + th.textMuted + ';font-weight:500">' + monthLabel + '</div></div>' +
                  '</div>' +
                  '<div id="store-archive-month-arrow-' + monthKey + '" style="font-size:16px;color:' + th.textMuted + ';transition:transform 0.2s ease;transform:' + (monthOpen ? 'rotate(180deg)' : 'rotate(0deg)') + '">\u25BE</div>' +
                '</button>';
              var cardsHTML = boxes.map(function(box) { return renderArchiveCard(box, th, isMobile); }).join("");
              archiveHTML += '<div id="store-archive-month-content-' + monthKey + '" style="border-top:1px solid ' + th.border + ';padding:' + (isMobile ? '12px 14px 14px' : '16px 18px 18px') + ';display:' + (monthOpen ? 'grid' : 'none') + ';grid-template-columns:' + (isMobile ? '1fr' : 'repeat(auto-fill,minmax(380px,1fr))') + ';gap:' + (isMobile ? 14 : 18) + 'px;background:' + th.surface + '">' + cardsHTML + '</div>';
              archiveHTML += '</div>';
            });
            archiveHTML += '</div>';
          }
          archiveHTML += '</div>';
        });
        archiveHTML += '</div>';
      }
      storeTabHTML = `<div style="display:flex;flex-direction:column;gap:${isMobile ? 16 : 20}px">
        <div style="text-align:center;padding:10px">
          <h2 style="margin:0;font-size:${isMobile ? 20 : 26}px;font-weight:800;color:${th.text}">\uD83D\uDED2 Web Store Box Analysis</h2>
          <p style="margin:6px 0 0 0;font-size:${isMobile ? 12 : 14}px;color:${th.textMuted};font-weight:500">Are the current Pok\u00E9mon GO web store boxes worth it?</p>
          <p style="margin:4px 0 0 0;font-size:${isMobile ? 10 : 11}px;color:${th.textFaint};font-weight:500">Values based on individual item prices from <a href="https://store.pokemongo.com" target="_blank" rel="noopener noreferrer" style="color:${th.textMuted};text-decoration:underline">store.pokemongo.com</a></p>
        </div>
        <div style="background:${th.surface};border:1.5px solid ${th.border};border-radius:${isMobile ? 14 : 16}px;overflow:hidden;box-shadow:${th.shadow}">
          <div onclick="toggleStoreGuide()" style="padding:${isMobile ? "12px 16px" : "14px 20px"};cursor:pointer;font-size:${isMobile ? 13 : 14}px;font-weight:700;color:${th.text};display:flex;align-items:center;gap:8px;user-select:none">
            <span style="font-size:16px">\u2753</span> How to Read This Page
            <span style="margin-left:auto;display:flex;align-items:center;gap:6px"><span style="font-size:11px;color:${th.textMuted};font-weight:500">${state.storeGuideOpen ? "tap to collapse" : "tap to expand"}</span><span id="store-guide-arrow" style="font-size:12px;color:${th.textMuted};transition:transform 0.3s ease;transform:rotate(${state.storeGuideOpen ? "180deg" : "0deg"})">&#9660;</span></span>
          </div>
          <div id="store-guide-wrapper" style="position:relative;max-height:${state.storeGuideOpen ? (isMobile ? "350px" : "600px") : "0"};transition:max-height 0.4s cubic-bezier(0.25,0.46,0.45,0.94),opacity 0.3s ease;opacity:${state.storeGuideOpen ? "1" : "0"};overflow-y:${state.storeGuideOpen && isMobile ? "auto" : "hidden"};overflow-x:hidden;${isMobile ? "-webkit-overflow-scrolling:touch" : ""}"${isMobile ? ` onscroll="handleGuideScroll(this)"` : ""}>
            <div style="padding:${isMobile ? "0 16px 16px" : "0 20px 20px"};display:flex;flex-direction:column;gap:14px;border-top:1px solid ${th.border}">
              <div style="padding-top:14px">
                <div style="font-size:${isMobile ? 12 : 13}px;font-weight:700;color:${th.text};margin-bottom:6px">What is this?</div>
                <p style="margin:0;font-size:${isMobile ? 12 : 13}px;color:${th.textSecondary};line-height:1.6">We compare the price of each bundle to what you\u2019d pay buying every item inside it individually. If the bundle costs less than the items are worth separately, you\u2019re saving money.</p>
              </div>
              <div>
                <div style="font-size:${isMobile ? 12 : 13}px;font-weight:700;color:${th.text};margin-bottom:8px">Rating Breakdown</div>
                <div style="display:flex;flex-direction:column;gap:8px">
                  ${[
                    {icon:"\uD83D\uDD25",label:"Great Deal",color:"#2ECC71",desc:"30%+ savings \u2014 strong value, worth buying if you need the items"},
                    {icon:"\u2705",label:"Good Deal",color:"#3498DB",desc:"15\u201330% savings \u2014 solid bundle that saves you a meaningful amount"},
                    {icon:"\u2696\uFE0F",label:"Fair",color:"#F39C12",desc:"0\u201315% savings \u2014 small discount, only worth it if you want everything inside"},
                    {icon:"\u274C",label:"Bad Deal",color:"#E74C3C",desc:"Costs more than buying items separately \u2014 skip it"}
                  ].map(r => `<div style="display:flex;align-items:flex-start;gap:${isMobile ? 8 : 10}px">
                    <span style="font-size:16px;flex-shrink:0;margin-top:1px">${r.icon}</span>
                    <div><span style="font-size:${isMobile ? 12 : 13}px;font-weight:700;color:${r.color}">${r.label}</span><span style="font-size:${isMobile ? 11 : 12}px;color:${th.textSecondary}"> \u2014 ${r.desc}</span></div>
                  </div>`).join("")}
                </div>
              </div>
              <div>
                <div style="font-size:${isMobile ? 12 : 13}px;font-weight:700;color:${th.text};margin-bottom:6px">Reading a Box Card</div>
                <div style="display:flex;flex-direction:column;gap:4px;font-size:${isMobile ? 11 : 12}px;color:${th.textSecondary};line-height:1.6">
                  <p style="margin:0"><strong style="color:${th.text}">Price</strong> \u2014 what the bundle costs in USD</p>
                  <p style="margin:0"><strong style="color:${th.text}">Value</strong> \u2014 what all items inside are worth if bought separately</p>
                  <p style="margin:0"><strong style="color:${th.text}">Save/Overpay %</strong> \u2014 how much you save (or lose) compared to individual prices</p>
                  <p style="margin:0"><strong style="color:${th.text}">Total Item Value (+/\u2212)</strong> \u2014 the green or red number at the bottom of each card. Green (+) means you\u2019re saving that much compared to buying items separately. Red (\u2212) means you\u2019re overpaying by that amount.</p>
                  <p style="margin:0"><strong style="color:${th.text}">Item list</strong> \u2014 each item with quantity and its individual value on the right</p>
                  <p style="margin:0;display:flex;align-items:center;gap:6px"><img src="assets/pokemon-images/icons/image.gif" style="width:20px;height:20px;object-fit:contain" alt="Bundle icon" /> <strong style="color:${th.text}">Bundle icon</strong> \u2014 cards with this gold badge are event bundles</p>
                </div>
              </div>
              <div style="font-size:${isMobile ? 11 : 12}px;color:${th.textSecondary};line-height:1.6;padding:${isMobile ? "10px 12px" : "12px 16px"};margin-top:4px;border-radius:10px;background:${th.accentBg("#F39C12")};border:1px solid #F39C1233">
                <span style="font-size:14px;margin-right:4px">\u26A0\uFE0F</span>
                <strong style="color:${th.text}">Disclaimer:</strong> Item values are estimated from the cheapest way to buy each item individually on the web store. Event tickets (GO Pass Deluxe) are valued at their standalone price. Items marked with an asterisk (*) are not sold individually and use approximate values based on in-game Pok\u00E9Coin costs. Boxes are sorted best-to-worst by savings percentage.
              </div>
            </div>
            ${isMobile ? `<div id="store-guide-fade" style="position:sticky;bottom:0;left:0;right:0;height:50px;margin-top:-50px;background:linear-gradient(to bottom,transparent,${th.surface});pointer-events:none;z-index:1;transition:opacity 0.3s ease;opacity:${state.storeGuideOpen ? "1" : "0"}"></div>` : ""}
          </div>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center">${catPillsHTML}</div>
        <div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin-bottom:8px">
          ${[{label:"Great Deal",color:"#2ECC71",icon:"\uD83D\uDD25"},{label:"Good Deal",color:"#3498DB",icon:"\u2705"},{label:"Fair",color:"#F39C12",icon:"\u2696\uFE0F"},{label:"Bad Deal",color:"#E74C3C",icon:"\u274C"}].map(r =>
            `<span style="font-size:${isMobile ? 10 : 11}px;font-weight:700;color:${r.color};display:flex;align-items:center;gap:4px">${r.icon} ${r.label}</span>`
          ).join(`<span style="color:${th.textFaint}">\u00B7</span>`)}
        </div>
        ${!isCoinsFilter ? `<div style="display:grid;grid-template-columns:${isMobile ? "1fr" : "repeat(auto-fill,minmax(380px,1fr))"};gap:${isMobile ? 14 : 18}px">${boxCardsHTML}</div>` : ""}
        ${state.storeFilter === "All" ? `<div style="display:flex;align-items:center;gap:${isMobile ? 12 : 16}px;margin:${isMobile ? "6px 0" : "10px 0"}"><hr style="flex:1;border:none;border-top:1.5px solid ${th.border}"><span style="font-size:${isMobile ? 11 : 12}px;font-weight:700;color:${th.textMuted};white-space:nowrap">Pok\u00E9Coins</span><hr style="flex:1;border:none;border-top:1.5px solid ${th.border}"></div>` : ""}
        ${state.storeFilter === "All" || isCoinsFilter ? `<div id="coin-breakdown" style="display:flex;flex-direction:column;gap:${isMobile ? 16 : 20}px">
          <div style="display:flex;align-items:center;gap:${isMobile ? 10 : 14}px;padding:0 4px">
            <img src="assets/pokemon-images/Items/pokecoin.png" style="width:${isMobile ? 36 : 44}px;height:${isMobile ? 36 : 44}px;object-fit:contain" alt="Pok\u00E9Coin" />
            <div>
              <h3 style="margin:0;font-size:${isMobile ? 18 : 22}px;font-weight:800;color:${th.text}">Pok\u00E9Coin Breakdown</h3>
              <p style="margin:2px 0 0 0;font-size:${isMobile ? 11 : 12}px;color:${th.textMuted};font-weight:500">Web store prices with bonus coins included</p>
            </div>
          </div>
          <p style="margin:0;font-size:${isMobile ? 12 : 13}px;color:${th.textSecondary};line-height:1.6;padding:0 4px">The web store offers bonus Pok\u00E9Coins on top of what you\u2019d get in the app. Bigger packs give you more coins per dollar. Here\u2019s how each option stacks up:</p>
          <div style="display:grid;grid-template-columns:${isMobile ? "1fr" : "repeat(auto-fill,minmax(380px,1fr))"};gap:${isMobile ? 14 : 18}px">
            ${renderCoinTiers(th, isMobile)}
          </div>
          <div style="padding:${isMobile ? "10px 12px" : "12px 16px"};border-radius:10px;background:${th.accentBg("#2ECC71")};border:1px solid #2ECC7133">
            <p style="margin:0;font-size:${isMobile ? 11 : 12}px;color:${th.textSecondary};line-height:1.6"><strong style="color:${th.text}">Tip:</strong> The $99.99 pack gives you the most coins per dollar at 15,500 total. But if that\u2019s too much at once, the $19.99 and $39.99 packs are still a solid value. The $0.99 pack has the worst rate \u2014 avoid buying coins in small amounts if you can.</p>
          </div>
        </div>` : ""}
        ${archiveHTML}
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
          ${(() => {
            const potdDex = getPokemonOfTheDay();
            const potdName = DEX_BY_NUM[potdDex] || "???";
            const potdImg = pokemonImgUrl(potdDex);
            const potdRegion = getGenFolder(potdDex).replace("Gen-","Gen ").replace("_"," \u2014 ");
            return `<div onclick="openPokemonDetail(${potdDex})" style="padding:${isMobile ? "18px" : "24px"};background:linear-gradient(135deg,${th.heroBg("#F39C12")},${th.heroBg("#E74C3C")});border:1.5px solid ${th.border};border-radius:${isMobile ? 18 : 20}px;cursor:pointer;transition:all 0.2s ease;box-shadow:${th.shadow}" onmouseenter="this.style.transform='translateY(-2px)';this.style.boxShadow='0 8px 24px rgba(0,0,0,0.15)'" onmouseleave="this.style.transform='translateY(0)';this.style.boxShadow='${th.shadow}'">
              <div style="font-size:${isMobile ? 11 : 12}px;font-weight:700;color:#F39C12;text-transform:uppercase;letter-spacing:1px;margin-bottom:${isMobile ? 10 : 12}px">\u2B50 Pok\u00E9mon of the Day</div>
              <div style="display:flex;align-items:center;gap:${isMobile ? 14 : 18}px">
                <img src="${potdImg}" style="width:${isMobile ? 80 : 100}px;height:${isMobile ? 80 : 100}px;object-fit:contain;filter:drop-shadow(0 4px 10px rgba(0,0,0,0.3));flex-shrink:0" onerror="this.style.opacity='0.3'" />
                <div>
                  <div style="font-size:${isMobile ? 20 : 24}px;font-weight:800;color:${th.text}">${esc(potdName)}</div>
                  <div style="font-size:${isMobile ? 12 : 13}px;color:${th.textMuted};margin-top:2px">#${String(potdDex).padStart(4,"0")} \u00B7 ${potdRegion}</div>
                  <div style="margin-top:8px;font-size:${isMobile ? 11 : 12}px;font-weight:600;color:#F39C12">Tap to learn more \u2192</div>
                </div>
              </div>
            </div>`;
          })()}
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

    // Report tab
    let reportTabHTML = "";
    if (state.tab === "report") {
      reportTabHTML = `<div style="display:flex;flex-direction:column;gap:${isMobile ? 16 : 20}px;max-width:640px;margin:0 auto;width:100%">
        <div style="text-align:center;padding:10px">
          <h2 style="margin:0;font-size:${isMobile ? 20 : 26}px;font-weight:800;color:${th.text}">\uD83D\uDCDD Report an Issue</h2>
          <p style="margin:6px 0 0 0;font-size:${isMobile ? 12 : 14}px;color:${th.textMuted};font-weight:500">Found a bug or incorrect info? Let us know and we'll fix it!</p>
        </div>
        <div style="padding:${isMobile ? "20px 18px" : "28px 28px"};background:${th.surface};border:1.5px solid ${th.border};border-radius:${isMobile ? 18 : 20}px;display:flex;flex-direction:column;gap:${isMobile ? 14 : 18}px;box-shadow:${th.shadow}">
          <div>
            <label style="display:block;font-size:${isMobile ? 12 : 13}px;font-weight:700;color:${th.text};margin-bottom:6px">Report Type</label>
            <select id="report-type" onchange="updateReportSection()" style="width:100%;padding:${isMobile ? "11px 14px" : "12px 16px"};border-radius:12px;border:1.5px solid ${th.border};background:${th.bg};color:${th.text};font-size:${isMobile ? 14 : 15}px;font-family:inherit;outline:none;cursor:pointer;appearance:auto">
              <option value="bug">Bug / Something Broken</option>
              <option value="missing">Missing Event or Data</option>
              <option value="suggestion">Suggestion / Feature Request</option>
              <option value="wrong-info">Wrong Information</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div id="report-section-wrapper">
            <label id="report-section-label" style="display:block;font-size:${isMobile ? 12 : 13}px;font-weight:700;color:${th.text};margin-bottom:6px">Which page or section?</label>
            <select id="report-section" style="width:100%;padding:${isMobile ? "11px 14px" : "12px 16px"};border-radius:12px;border:1.5px solid ${th.border};background:${th.bg};color:${th.text};font-size:${isMobile ? 14 : 15}px;font-family:inherit;outline:none;cursor:pointer;appearance:auto">
              <option value="calendar">Calendar</option>
              <option value="store">Deal Check</option>
              <option value="events">Events</option>
              <option value="general">General / Sitewide</option>
              <option value="max-battles">Max Battles</option>
              <option value="nests">Nests</option>
              <option value="news">News</option>
              <option value="pokedex">Pok\u00E9Dex</option>
              <option value="tools">PoGO Tools</option>
              <option value="raids">Raids</option>
            </select>
          </div>
          <div>
            <label style="display:block;font-size:${isMobile ? 12 : 13}px;font-weight:700;color:${th.text};margin-bottom:6px">Description <span style="color:${th.textMuted};font-weight:500">(be as specific as possible)</span></label>
            <textarea id="report-description" rows="5" placeholder="Describe the issue or what's wrong..." style="width:100%;padding:${isMobile ? "11px 14px" : "12px 16px"};border-radius:12px;border:1.5px solid ${th.border};background:${th.bg};color:${th.text};font-size:${isMobile ? 14 : 15}px;font-family:inherit;outline:none;resize:vertical;box-sizing:border-box;line-height:1.5"></textarea>
          </div>
          <div>
            <label style="display:block;font-size:${isMobile ? 12 : 13}px;font-weight:700;color:${th.text};margin-bottom:6px">Screenshot <span style="color:${th.textMuted};font-weight:500">(optional)</span></label>
            <div id="report-photo-drop" onclick="document.getElementById('report-photo').click()" style="width:100%;padding:${isMobile ? "20px 14px" : "24px 16px"};border-radius:12px;border:2px dashed ${th.border};background:${th.bg};cursor:pointer;text-align:center;box-sizing:border-box;transition:border-color 0.2s ease" onmouseenter="this.style.borderColor='#E74C3C'" onmouseleave="this.style.borderColor='${th.border}'">
              <div id="report-photo-preview" style="display:none;margin-bottom:10px"></div>
              <div id="report-photo-prompt" style="display:flex;flex-direction:column;align-items:center;gap:6px">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="${th.textMuted}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
                <span style="font-size:${isMobile ? 13 : 14}px;color:${th.textMuted};font-weight:500">Tap to add a screenshot</span>
                <span style="font-size:${isMobile ? 10 : 11}px;color:${th.textFaint}">PNG, JPG, or GIF \u00B7 Max 10 MB</span>
              </div>
            </div>
            <input id="report-photo" type="file" accept="image/*" style="display:none" onchange="previewReportPhoto(this)" />
          </div>
          <div>
            <label style="display:block;font-size:${isMobile ? 12 : 13}px;font-weight:700;color:${th.text};margin-bottom:6px">Your Name <span style="color:${th.textMuted};font-weight:500">(optional)</span></label>
            <input id="report-name" type="text" placeholder="Trainer name or nickname" style="width:100%;padding:${isMobile ? "11px 14px" : "12px 16px"};border-radius:12px;border:1.5px solid ${th.border};background:${th.bg};color:${th.text};font-size:${isMobile ? 14 : 15}px;font-family:inherit;outline:none;box-sizing:border-box" />
          </div>
          <button onclick="submitReport()" style="width:100%;padding:${isMobile ? "13px" : "14px"};border-radius:12px;border:none;background:linear-gradient(135deg,#E74C3C,#F39C12);color:#fff;font-size:${isMobile ? 15 : 16}px;font-weight:700;cursor:pointer;font-family:inherit;transition:all 0.2s ease;letter-spacing:0.3px" onmouseenter="this.style.transform='translateY(-2px)';this.style.boxShadow='0 6px 20px rgba(231,76,60,0.3)'" onmouseleave="this.style.transform='translateY(0)';this.style.boxShadow='none'">Submit Report</button>
        </div>
        <div style="text-align:center;font-size:${isMobile ? 11 : 12}px;color:${th.textFaint};line-height:1.6;padding:0 8px">
          Reports are sent via email. Your email app will open with the details pre-filled.<br>Thank you for helping us keep TrainerWire accurate!
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
      ${welcomeHTML}${!["home","tools","nests","pokedex","store","report"].includes(state.tab) ? `${liveHTML}${heroHTML}${tabsHTML}` : ""}${state.tab === "home" ? `${liveHTML}${heroHTML}${tabsHTML}` : ""}${eventsTabHTML}${calendarTabHTML}${raidsTabHTML}${maxTabHTML}${newsTabHTML}${storeTabHTML}${pokedexTabHTML}${toolsTabHTML}${nestsTabHTML}${reportTabHTML}
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
      ${[["goHome()","Home"],["setTab('events')","Events"],["setTab('calendar')","Calendar"],["setTab('raids')","Raids"],["setTab('max')","Max Battles"],["setTab('news')","News"],["setTab('pokedex')","Pok\u00E9Dex"],["setTab('store')","Deal Check"],["setTab('nests')","Nests"],["setTab('tools')","PoGO Tools"]].map(([fn, label]) => {
        const tabMap = {"Home":"home","Events":"events","Calendar":"calendar","Raids":"raids","Max Battles":"max","News":"news","Deal Check":"store","Pok\u00E9Dex":"pokedex","Nests":"nests","PoGO Tools":"tools"};
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
    ${COMMUNITY_NAME} \u00B7 v${APP_VERSION} \u00B7 Not affiliated with Niantic, The Pok\u00E9mon Company, or Nintendo
    <div style="margin-top:8px"><a onclick="setTab('report')" style="color:${th.textMuted};cursor:pointer;text-decoration:underline;font-size:${isMobile ? 11 : 12}px">Report a Bug or Issue</a></div>
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
  sessionStorage.setItem("trainerwire_tab", tab);
  if (tab === "nests") { loadNestsFromSupabase().then(() => render()); }
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
    { id: "store", icon: "\uD83D\uDED2", label: "Deal Check" },
    { id: "nests", icon: "\uD83C\uDF33", iconImg: "assets/pokemon-images/icons/ic_grass.png", label: "Nests" },
    { id: "tools", icon: "\uD83D\uDEE0\uFE0F", label: "PoGO Tools" },
    { id: "report", icon: "\uD83D\uDCDD", label: "Report Issue" }
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
      <div style="font-size:11px;color:${th.textFaint};text-align:center">${COMMUNITY_NAME} \u00B7 v${APP_VERSION}</div>
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

// --- PULL TO REFRESH ---
(() => {
  let ptrStartY = 0;
  let ptrDist = 0;
  let ptrActive = false;
  let ptrEl = null;

  function getPtrEl() {
    if (!ptrEl) {
      ptrEl = document.createElement("div");
      ptrEl.id = "pull-to-refresh-indicator";
      document.body.appendChild(ptrEl);
    }
    const iconColor = darkMode ? "#a0a0b8" : "#666";
    const bgColor = darkMode ? "#1a1a24" : "#fff";
    const borderColor = darkMode ? "#2a2a3a" : "#e8e8e8";
    ptrEl.innerHTML = `<div style="width:40px;height:40px;border-radius:50%;background:${bgColor};border:1.5px solid ${borderColor};display:flex;align-items:center;justify-content:center;box-shadow:0 2px 12px rgba(0,0,0,${darkMode ? "0.5" : "0.12"})">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${iconColor}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
    </div>`;
    Object.assign(ptrEl.style, {
      position: "fixed", top: "-50px", left: "50%", transform: "translateX(-50%)",
      width: "40px", height: "40px", zIndex: "99999", transition: "none",
      pointerEvents: "none"
    });
    return ptrEl;
  }

  document.addEventListener("touchstart", (e) => {
    if (window.scrollY <= 0) {
      ptrStartY = e.touches[0].clientY;
      ptrActive = true;
      ptrDist = 0;
    }
  }, { passive: true });

  document.addEventListener("touchmove", (e) => {
    if (!ptrActive) return;
    ptrDist = e.touches[0].clientY - ptrStartY;
    if (ptrDist < 0) { ptrDist = 0; return; }
    const el = getPtrEl();
    const travel = Math.min(ptrDist * 0.45, 100);
    el.style.top = (travel - 50) + "px";
    el.style.transition = "none";
    const circle = el.querySelector("div");
    if (circle) {
      const rot = Math.min((ptrDist / 150) * 360, 360);
      circle.style.transform = `rotate(${rot}deg)`;
      circle.style.opacity = Math.min(ptrDist / 80, 1);
    }
  }, { passive: true });

  document.addEventListener("touchend", () => {
    if (!ptrActive) return;
    ptrActive = false;
    const el = getPtrEl();
    if (ptrDist > 150) {
      el.style.transition = "top 0.2s ease";
      el.style.top = "16px";
      const circle = el.querySelector("div");
      if (circle) circle.style.animation = "spin 0.6s linear infinite";
      setTimeout(() => location.reload(), 400);
    } else {
      el.style.transition = "top 0.2s ease";
      el.style.top = "-50px";
    }
    ptrDist = 0;
  }, { passive: true });
})();

// Initial render
updateThemeColor();
loadNestsFromSupabase().then(() => render());
render();
