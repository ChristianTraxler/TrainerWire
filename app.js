// --- CONSTANTS ---
const COMMUNITY_NAME = "TrainerWire";
const COMMUNITY_TAGLINE = "Your Local Pokémon GO Event & News Center";
const APP_VERSION = "3.05";
const REPORT_EMAIL = "reportissue2trainerwire@gmail.com";

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
function costumeDexImg(dex, formId) { return `${IMG_BASE}/National-Event-Costume-Dex/regular/${getGenFolder(dex)}/${dexPad(dex)}_${formId}.webp`; }
function shinyCostumeDexImg(dex, formId) { return `${IMG_BASE}/National-Event-Costume-Dex/shiny/${getGenFolder(dex)}/${dexPad(dex)}_${formId}_s.webp`; }
const MEGA_GENDER_SUFFIX = {115:"-female",380:"-female",381:"-male"};
function megaImg(dex, suffix) { return `${IMG_BASE}/Mega/regular/${getGenFolder(dex)}/${dexPad(dex)}_${suffix || "mega"}${MEGA_GENDER_SUFFIX[dex] || ""}.webp`; }
function gmaxImg(dex) { return `${IMG_BASE}/Gigantamax/regular/Gen-8_Galar/${dexPad(dex)}_gigamax.webp`; }
const SHINY_DESC={1:"Body becomes a deeper, darker green",2:"Body deepens to darker green with yellow-green leaves",3:"Body turns deeper green with a yellow-orange flower",4:"Body turns golden yellow instead of orange",5:"Body turns golden yellow instead of dark red",6:"Body turns black with red-highlighted wings",7:"Shell lightens and body becomes pale green-blue",8:"Body becomes purple-tinted blue with a lighter shell",9:"Body becomes purple-tinted with a lighter shell",10:"Body turns golden yellow instead of green",11:"Shell turns orange-red instead of green",12:"Wings become pink-purple instead of white",13:"Body turns golden with a teal-colored nose",14:"Body becomes green instead of yellow",15:"Body becomes green with blue eyes",16:"Plumage shifts to a more golden-orange tone",17:"Plumage becomes more golden; subtle change",18:"Plumage shifts to golden-orange; subtle change",19:"Body turns green with a lighter belly",20:"Body becomes orange-brown with a lighter belly",21:"Body shifts to a golden-green tone",22:"Body becomes lighter green-gold overall",23:"Body turns green with golden bands",24:"Body becomes golden-yellow instead of purple",25:"Slightly darker, deeper yellow; very hard to spot",26:"Body becomes a darker orange-brown",27:"Body turns darker green instead of yellow",28:"Body turns brick red with darker spines",29:"Body shifts to a slightly more purple-pink tone",30:"Body becomes slightly more purple; subtle change",31:"Body changes from blue to olive green",32:"Body shifts to a deeper blue-purple tone",33:"Body becomes a deeper blue-purple shade",34:"Body turns blue instead of purple",35:"Ear tips turn green with a slightly pinker body",36:"Ear tips turn green with a slightly pinker body",37:"Fur becomes golden-yellow instead of reddish-brown",38:"Fur turns silver-gray with blue-tipped tails",39:"Eyes turn green; body color nearly unchanged",40:"Eyes turn green; body color nearly unchanged",41:"Body turns green instead of blue",42:"Body turns green with a pink mouth interior",43:"Body lightens and leaves turn golden",44:"Body becomes green with an orange flower",45:"Body turns green with an orange-pink flower",46:"Body deepens to darker orange with gold mushrooms",47:"Mushroom cap shifts to orange-red",48:"Body turns blue instead of purple",49:"Body turns blue-teal instead of purple",50:"Nose becomes blue; skin tone nearly unchanged",51:"Noses turn from brown to blue",52:"Body becomes a slightly paler gray-white",53:"Fur darkens to a deeper gray tone",54:"Body turns from yellow to blue",55:"Body turns darker blue with a lighter blue bill",56:"Body takes on a green tint instead of beige",57:"Body shifts to an olive-green tone",58:"Orange fur becomes a bright golden-yellow",59:"Fur deepens to a rich golden-yellow",60:"Body becomes lighter blue with a pink tint",61:"Body shifts from blue to a green-blue tone",62:"Body turns green instead of blue",63:"Body lightens to a pink-gold hue",64:"Body becomes a lighter pink tone",65:"Body shifts to a lighter pink color",66:"Body becomes a lighter green-gray",67:"Skin turns green instead of blue-gray",68:"Skin turns green instead of blue-gray",69:"Body becomes a deeper yellow-green",70:"Body shifts to a deeper yellow tone",71:"Body becomes a deeper yellow-orange",72:"Body turns purple instead of blue",73:"Body turns green instead of blue",74:"Body shifts from gray to golden-brown",75:"Body shifts from gray to golden-brown",76:"Body darkens with a golden rock shell",77:"Flames change from red-orange to blue",78:"Flames turn gray-silver and body becomes gray",79:"Body becomes a slightly deeper pink-purple",80:"Body turns purple instead of pink",81:"Body gains a subtle gold tint",82:"Body gains a subtle gold tint",83:"Feathers become slightly more brown",84:"Body turns green instead of brown",85:"Body turns green instead of brown",86:"Body shifts to a subtle cream-white",87:"Body becomes a slightly more cream tone",88:"Body turns green instead of purple",89:"Body turns green instead of purple",90:"Shell changes from purple to orange",91:"Inner body turns blue-purple with a darker shell",92:"Surrounding gas shifts to a purple-blue hue",93:"Body becomes a darker blue-purple",94:"Body becomes very slightly darker gray-purple",95:"Body shifts from gray to green-yellow",96:"Body turns pink instead of yellow",97:"Body turns pink instead of yellow",98:"Body shifts from red to golden-green",99:"Body changes from red to green-gold",100:"Top and bottom color halves are subtly swapped",101:"Red and white color placement is slightly reversed",102:"Eggs turn golden-yellow instead of white-pink",103:"Leaves turn golden-yellow and body becomes lighter",104:"Body turns green instead of brown",105:"Body turns green instead of brown",106:"Body becomes olive-green instead of brown",107:"Body becomes olive-green instead of brown",108:"Body turns golden-yellow instead of pink",109:"Body becomes lighter teal-blue instead of purple",110:"Body becomes lighter teal-blue instead of purple",111:"Body turns red-orange instead of gray",112:"Body becomes gray-tan with an orange drill horn",113:"Body turns green with a lighter green egg pouch",114:"Vines become darker with a blue-green tint",115:"Body becomes olive-green instead of brown",116:"Body turns darker blue-purple instead of light blue",117:"Body becomes darker blue instead of light blue",118:"Body turns solid orange instead of red and white",119:"Body becomes orange instead of red and white",120:"Body turns white-cream with a blue center gem",121:"Body becomes blue-gray with a brighter core gem",122:"Pink skin turns green instead of pink",123:"Body becomes lighter yellow-green instead of dark green",124:"Body turns pink-purple instead of deep purple",125:"Body becomes slightly more orange than yellow",126:"Body turns pink-red instead of yellow-orange",127:"Body becomes blue-gray instead of brown",128:"Body becomes olive-green instead of brown",129:"Body turns golden instead of orange-red",130:"Body becomes red instead of blue",131:"Body turns purple instead of blue",132:"Body becomes blue instead of purple-pink",133:"Body turns silver-white instead of brown",134:"Body becomes purple instead of blue",135:"Body turns green instead of yellow",136:"Body becomes darker gold-brown instead of orange",137:"Body turns blue instead of pink-red",138:"Shell and body turn purple instead of blue",139:"Shell and body turn purple instead of blue",140:"Body turns green instead of brown",141:"Body becomes green instead of brown",142:"Body turns purple-pink instead of gray",143:"Body becomes darker navy-blue instead of teal",144:"Body becomes slightly lighter icy blue; very subtle",145:"Feet turn slightly darker orange; very subtle change",146:"Body becomes pinkish-rose instead of yellow-orange",147:"Body turns pink instead of blue",148:"Body turns pink instead of blue",149:"Body becomes green instead of orange",150:"Tail turns green-teal instead of purple",151:"Body becomes blue instead of pink",152:"Body turns slightly darker green with a golden leaf",153:"Body shifts to a golden-yellow hue",154:"Body becomes yellow; flower petals turn pink-orange",155:"Body darkens to a deeper brown shade",156:"Body becomes a darker brown-maroon color",157:"Body darkens to a deeper brown tone",158:"Body takes on a subtle green-teal tint",159:"Body shifts to a green-teal color",160:"Body becomes a noticeable teal-green",161:"Body lightens to a pale cream color",162:"Body turns pink-magenta instead of brown",163:"Body shifts to a warm golden-brown",164:"Body becomes a striking golden color",165:"Body turns golden-orange instead of red",166:"Body shifts to golden-orange",167:"Body turns blue instead of green",168:"Body becomes purple-pink instead of red",169:"Body turns pink instead of purple",170:"Body shifts to a purple-blue hue",171:"Body becomes purple instead of blue",172:"Ear tips darken slightly; body shade barely changes",173:"Ear tips turn green instead of brown",174:"Eyes turn green; body becomes slightly lighter",175:"Red and blue shell markings become lighter and muted",176:"Body takes on a slightly more cream tone",177:"Body shifts to a brighter green-yellow",178:"Body turns mostly green instead of red and green",179:"Wool and body turn pink instead of white and blue",180:"Body and wool become pink instead of pink and white",181:"Body turns pink instead of yellow",182:"Flower petals become purple instead of red-green",183:"Body turns green instead of blue",184:"Body becomes golden-yellow instead of blue",185:"Body shifts to a lighter green tone",186:"Body turns blue-teal instead of green",187:"Body becomes green instead of pink",188:"Body turns pink instead of green",189:"Body becomes pink instead of blue",190:"Body turns pink-magenta instead of purple",191:"Body shifts to a golden-brown shade",192:"Petals lighten; face takes on a slight orange tint",193:"Body turns blue instead of red-green",194:"Body becomes pink-magenta instead of blue",195:"Body shifts to purple-pink instead of blue",196:"Body turns green instead of lavender",197:"Ring markings become blue instead of yellow",198:"Body turns purple-pink instead of black",199:"Body becomes purple; ruff collar turns blue",200:"Body shifts to green-yellow instead of purple",201:"Body turns blue instead of black",202:"Body becomes pink-magenta instead of blue",203:"Body shifts to a slightly deeper golden-yellow",204:"Body turns a golden-green instead of gray-blue",205:"Body becomes golden instead of purple-gray",206:"Body lightens to a subtle cream shade",207:"Body turns blue instead of purple",208:"Body becomes golden instead of silver-gray",209:"Body shifts to golden-yellow instead of pink",210:"Body turns green-olive instead of purple",211:"Body becomes pink-magenta instead of teal",212:"Body turns green-golden instead of red",213:"Body becomes blue instead of yellow",214:"Body turns pink-magenta instead of blue",215:"Body becomes pink-magenta instead of dark blue",216:"Body turns green instead of brown",217:"Body shifts to green instead of brown",218:"Body becomes silver-gray instead of red-orange",219:"Shell turns purple; body becomes gray",220:"Body turns green instead of brown",221:"Body shifts to a golden-green hue",222:"Body becomes blue-purple instead of pink",223:"Body turns purple instead of gray-blue",224:"Body becomes golden-yellow instead of red",225:"Body turns purple instead of red",226:"Body shifts to a slightly deeper purple-blue",227:"Body becomes green-gold instead of silver",228:"Body turns blue-teal instead of black",229:"Body becomes blue-teal instead of black",230:"Body turns purple instead of blue",231:"Body becomes red-pink instead of blue",232:"Body shifts to golden-brown instead of gray",233:"Body turns blue instead of red-pink",234:"Body becomes a slightly lighter brown shade",235:"Ear tips and tail paint turn green",236:"Body shifts to purple-pink instead of tan",237:"Body turns green instead of brown-tan",238:"Body becomes a lighter purple shade",239:"Body takes on a subtle orange-gold tint",240:"Body shifts to a slightly deeper orange",241:"Body turns blue instead of pink",242:"Body becomes an even lighter pink with more white",243:"Body takes on a subtle orange-gold tint",244:"Body shifts to a subtle brown-gold tone",245:"Body turns blue-gray; crystal mane becomes lighter",246:"Body becomes a lighter purple shade",247:"Body shifts to purple-blue instead of green",248:"Body turns tan-desert colored instead of green",249:"Belly becomes pink-red instead of blue",250:"Body turns golden-silver instead of multicolored",251:"Body becomes pink instead of green",252:"Body becomes darker teal-green",253:"Body becomes darker green",254:"Body becomes darker green",255:"Body becomes lighter golden",256:"Body becomes lighter tan",257:"Body becomes darker red with cream accents",258:"Body becomes purple instead of blue",259:"Body becomes purple-orange",260:"Body becomes purple instead of blue",261:"Body becomes golden-blue",262:"Body becomes golden-brown",263:"Body becomes orange instead of brown",264:"Body becomes orange instead of brown",265:"Body becomes purple",266:"Body becomes orange-tinted",267:"Wings become purple and pink",268:"Body becomes orange-red",269:"Body becomes orange with golden wings",270:"Body becomes red-purple",271:"Body becomes orange-green",272:"Body becomes orange-red",273:"Body becomes red-brown",274:"Body becomes red",275:"Body becomes red",276:"Body becomes green",277:"Body becomes green with orange accents",278:"Beak becomes slightly different color",279:"Body becomes slightly green-tinted",280:"Markings become blue instead of red",281:"Markings become blue instead of red",282:"Markings become blue instead of red-orange",283:"Body becomes green",284:"Body becomes yellow-green",285:"Body becomes orange-red",286:"Body becomes orange-red",287:"Body becomes purple-pink",288:"Body becomes lighter cream",289:"Body becomes lighter gold",290:"Body becomes green-golden",291:"Body becomes darker with red eyes",292:"Body becomes darker brown",293:"Body becomes cream-colored",294:"Body becomes blue-gray",295:"Body becomes blue-gray",296:"Body becomes green-olive",297:"Body becomes red-orange",298:"Body becomes green instead of blue",299:"Body becomes orange-yellow",300:"Body becomes orange-golden",301:"Body becomes golden-orange",302:"Body becomes golden",303:"Body becomes purple",304:"Body becomes red-brown",305:"Body becomes green-red tinted",306:"Body becomes green-tinted",307:"Body becomes red-orange",308:"Body becomes blue",309:"Body becomes blue-teal",310:"Body becomes blue-gray",311:"Body becomes deeper red",312:"Body becomes green instead of blue",313:"Body becomes orange-gold",314:"Body becomes orange-gold",315:"Roses swap colors to blue and black",316:"Body becomes blue-teal",317:"Body becomes blue-purple",318:"Body becomes green",319:"Body becomes purple",320:"Body becomes purple-pink",321:"Body becomes purple-pink",322:"Body becomes golden-yellow",323:"Body becomes darker gray",324:"Body becomes golden-yellow",325:"Body becomes golden",326:"Body becomes golden",327:"Body becomes green",328:"Body becomes darker green",329:"Body becomes blue-teal",330:"Body becomes blue instead of green",331:"Body becomes darker green",332:"Body becomes darker green",333:"Body becomes golden-yellow",334:"Body becomes golden-yellow",335:"Markings become blue instead of red",336:"Markings become blue-gold",337:"Body becomes slightly blue-gray",338:"Body becomes red-orange",339:"Body becomes orange",340:"Body becomes orange-yellow",341:"Body becomes orange",342:"Body becomes orange",343:"Body becomes green",344:"Body becomes green",345:"Body becomes purple-pink",346:"Body becomes red-pink",347:"Body becomes golden-red",348:"Body becomes golden-red",349:"Body becomes purple",350:"Body becomes golden-cream",351:"Body becomes slightly lighter",352:"Body becomes purple instead of green",353:"Body becomes teal",354:"Body becomes blue-teal",355:"Body becomes red instead of gray",356:"Body becomes red",357:"Body becomes golden-brown",358:"Body becomes green-teal",359:"Body becomes red-crimson",360:"Body becomes purple-pink",361:"Body becomes blue-teal",362:"Body becomes blue-purple",363:"Body becomes pale yellow",364:"Body becomes pale cream",365:"Body becomes purple-blue",366:"Body becomes orange-gold",367:"Body becomes green-teal",368:"Body becomes golden-yellow",369:"Body becomes green-olive",370:"Body becomes golden-yellow",371:"Body becomes green",372:"Body becomes green",373:"Body becomes green",374:"Body becomes gold-silver",375:"Body becomes gold-silver",376:"Body becomes gold-silver",377:"Body becomes orange-brown",378:"Body becomes darker blue",379:"Body becomes green-blue",380:"Body becomes golden-orange",381:"Body becomes green-teal",382:"Body becomes purple-pink",383:"Body becomes golden-yellow",384:"Body becomes black",385:"Markings become red-orange",386:"Body becomes green-teal",387:"Shell turns blue-teal with a lighter green body",388:"Shell becomes blue with a lighter green body",389:"Tree turns golden-orange and shell becomes blue",390:"Body changes from orange to pink-magenta",391:"Body changes from reddish to pink-magenta",392:"Body turns pink with blue-tinted flames",393:"Body becomes a slightly lighter blue",394:"Body shifts to a lighter blue-teal tone",395:"Body becomes a slightly lighter blue",396:"Plumage shifts to a lighter brown tone",397:"Plumage shifts to a lighter brown tone",398:"Plumage shifts to a slightly lighter brown",399:"Body turns a rich golden-brown color",400:"Body shifts to a deeper golden-brown",401:"Body changes to golden-yellow",402:"Body changes to golden-yellow",403:"Blue fur becomes golden-yellow",404:"Blue fur becomes golden-yellow",405:"Blue-black fur becomes golden-yellow",406:"Body shifts to a purple-olive tone",407:"Roses swap to black and purple colors",408:"Body changes to a reddish-brown tone",409:"Body changes from blue to deep blue-purple",410:"Face shield becomes golden-yellow",411:"Face shield becomes golden-orange",412:"Cloak shifts to a slightly different shade",413:"Cloak shifts to a slightly different shade",414:"Wings become golden-orange instead of orange",415:"Body becomes slightly lighter yellow",416:"Body shifts to a brighter orange-gold",417:"White-blue fur becomes pink",418:"Orange body becomes a deeper golden-orange",419:"Orange body becomes a deeper golden-orange",420:"Body shifts to golden-purple tones",421:"Pink petals change to purple",422:"Body turns orange-gold (West) or purple (East)",423:"Body turns orange-gold (West) or blue (East)",424:"Purple body becomes pink-magenta",425:"Purple body becomes golden-yellow",426:"Purple body becomes golden-yellow",427:"Brown fur shifts to a pink-brown tone",428:"Brown fur changes to pink",429:"Purple body becomes golden-yellow",430:"Dark blue body shifts to purple-pink",431:"Gray body becomes pink-magenta",432:"Body shifts to a slightly lighter gray",433:"Body becomes a lighter golden tone",434:"Purple stripe becomes pink-toned",435:"Purple accents shift to pink-purple",436:"Green-blue body becomes green-teal",437:"Green-blue body becomes green-teal",438:"Brown body shifts to a lighter purple",439:"Body becomes a lighter cream tone",440:"Pink body becomes a lighter cream tone",441:"Head plumage becomes brighter yellow",442:"Purple aura changes to green-teal",443:"Blue body becomes golden-orange",444:"Blue body becomes golden-orange",445:"Body becomes very slightly darker",446:"Body becomes slightly lighter overall",447:"Blue-black body becomes golden-yellow",448:"Blue-black body becomes golden-yellow",449:"Brown body changes to green",450:"Brown-gray body changes to green",451:"Body shifts from purple to red-orange",452:"Purple body becomes red-pink",453:"Blue body changes to green-teal",454:"Blue body changes to blue-teal",455:"Green body becomes slightly darker",456:"Blue body becomes golden",457:"Blue body becomes golden",458:"Body shifts to a deeper purple-blue",459:"Body becomes lighter green with orange accents",460:"Body becomes a slightly lighter green",461:"Dark body becomes pink-magenta",462:"Body becomes very slightly darker",463:"Pink body becomes golden-yellow",464:"Gray body becomes golden-tan",465:"Blue vines replace the usual red-tipped green",466:"Yellow body becomes orange-golden",467:"Red body changes to pink",468:"Body shifts to a slightly warmer cream",469:"Red body becomes blue",470:"Green tones shift to darker autumn colors",471:"Body becomes a lighter icy blue",472:"Purple body becomes blue-teal",473:"Brown body changes to green",474:"Red-blue body becomes mostly blue",475:"Green accents change to blue",476:"Red nose and body become golden",477:"Gray-black body becomes blood red",478:"White body shifts to blue-gray",479:"Orange glow changes to orange-red plasma",480:"Yellow accents become golden overall",481:"Pink accents become golden overall",482:"Blue accents become golden overall",483:"Steel-blue body becomes green-teal",484:"Purple-pink body becomes golden-tan",485:"Red-orange body becomes brighter orange-gold",486:"Body accents shift to blue-teal",487:"Gray and gold body becomes blue-toned",488:"Purple-pink body becomes golden-orange",489:"Blue body shifts to a subtle purple",490:"Blue body becomes golden-orange",491:"Dark body gains purple-magenta tones",492:"Flowers become lighter with greener body",493:"White body becomes golden-yellow",494:"Ears and accents become orange-golden, body lighter",495:"Body becomes a deeper, darker shade of green",496:"Body becomes a deeper, darker shade of green",497:"Green body takes on a deeper blue-green tone",498:"Body becomes a darker reddish-brown shade",499:"Body becomes a slightly darker brown tone",500:"Flames and accents turn blue instead of red-orange",501:"Body becomes a slightly lighter blue tone",502:"Body becomes a slightly lighter blue shade",503:"Dark blue body becomes a deeper navy shade",504:"Body turns a warm golden-tan color",505:"Body becomes golden with reddish-brown accents",506:"Fur becomes a warm golden-brown shade",507:"Fur turns a bright golden color",508:"Fur becomes a rich golden shade",509:"Purple fur shifts to a cool blue-gray tone",510:"Body becomes blue-tinted with magenta spots",511:"Body becomes a slightly lighter green shade",512:"Green fur takes on a golden-green hue",513:"Body becomes a slightly lighter red tone",514:"Body becomes a slightly lighter reddish tone",515:"Body becomes a slightly lighter blue shade",516:"Blue fur shifts to pink-magenta",517:"Pink body shifts to a purple-blue shade",518:"Body becomes a deeper purple color",519:"Gray body shifts to a greenish tone",520:"Body takes on a greenish hue",521:"Body becomes green-tinted instead of gray",522:"Lightning bolt stripes shift to lighter blue",523:"Stripes become a brighter white-blue tone",524:"Body shifts from brown to purple-blue",525:"Orange crystals and body shift to blue",526:"Red crystals and body shift to blue",527:"Blue fur changes to green",528:"Blue body shifts to green",529:"Body becomes a slightly different brown shade",530:"Steel-gray body becomes red-brown",531:"Pink body shifts to purple",532:"Gray body becomes orange-golden",533:"Body becomes orange-purple toned",534:"Body becomes orange with purple veins",535:"Body shifts to a blue-teal shade",536:"Blue body becomes a deeper blue tone",537:"Body shifts to a blue-teal shade",538:"Red body changes to green",539:"Blue body changes to red",540:"Yellow-green body shifts to orange",541:"Leaf cloak takes on an orange hue",542:"Yellow accents shift to orange",543:"Body shifts from red-purple to blue-teal",544:"Purple body becomes blue-teal",545:"Magenta body shifts to blue-teal",546:"White body gains an orange tint",547:"White fluff gains an orange-brown tint",548:"Body becomes a slightly lighter shade",549:"Red flower becomes orange instead",550:"Body shifts to green from red or blue",551:"Body becomes a slightly darker brown shade",552:"Body becomes a noticeably darker tone",553:"Black body shifts to orange-tan",554:"Red body shifts to pink-magenta",555:"Red body shifts to tan-golden",556:"Green body gains golden and pink tones",557:"Body shifts to green with orange shell",558:"Rocky shell becomes orange-red",559:"Yellow body shifts to teal-green",560:"Body shifts to teal-green tones",561:"Body shifts to golden-orange tones",562:"Body becomes a slightly darker purple",563:"Gold body becomes slightly lighter",564:"Blue body shifts to purple-pink",565:"Blue shell shifts to purple-blue",566:"Body shifts to golden-orange tones",567:"Body shifts to golden-orange tones",568:"Green body shifts to blue-teal",569:"Body shifts to golden-green tones",570:"Dark gray fur shifts to blue",571:"Dark body and red accents turn purple",572:"Gray fur shifts to pink",573:"Gray fur shifts to pink",574:"Body shifts to a purple-brown tone",575:"Body shifts to a purple-brown tone",576:"Body shifts to a purple-brown tone",577:"Green cell body shifts to red-orange",578:"Green cell body shifts to blue",579:"Green body shifts to blue",580:"Blue body shifts to pink-magenta",581:"White body gains a cream-purple tint",582:"White body shifts to purple-pink",583:"White body shifts to purple-pink",584:"White body shifts to purple-pink",585:"Body becomes a darker seasonal shade",586:"Body becomes a lighter shade overall",587:"Body becomes a slightly darker brown",588:"Blue shell shifts to blue-purple",589:"Red armor shifts to golden-blue",590:"Poke Ball red and white colors swap",591:"Poke Ball colors swap with golden-brown cap",592:"Body becomes a darker shade of its color",593:"Body becomes a darker shade of its color",594:"Pink body shifts to purple-blue",595:"Yellow body shifts to blue-teal",596:"Body shifts to a brighter yellow-orange",597:"Body shifts to a golden tone",598:"Body shifts to a golden tone",599:"Body becomes a slightly lighter gray shade",600:"Body becomes a slightly lighter gold shade",601:"Body and gears shift to golden",602:"Body becomes a slightly lighter shade",603:"Blue body shifts to green-teal",604:"Blue body shifts to green",605:"Brown body shifts to blue",606:"Brown body shifts to golden",607:"Body turns white with an orange flame",608:"Body shifts to orange-cream tones",609:"Purple flames shift to orange",610:"Green body becomes a darker green shade",611:"Body becomes a darker green tone",612:"Golden body turns black",613:"White body shifts to purple-pink",614:"White body shifts to purple-blue",615:"Body becomes a slightly deeper blue shade",616:"Red body shifts to orange-red",617:"Purple body shifts to pink-magenta",618:"Body becomes a slightly lighter green shade",619:"Yellow body shifts to purple",620:"Body shifts to purple tones",621:"Red body shifts to green",622:"Body shifts to green-teal",623:"Body shifts to green-teal",624:"Red-black body shifts to blue",625:"Body shifts to blue tones",626:"Afro becomes a slightly golden-brown shade",627:"Body becomes lighter with golden tints",628:"Body becomes lighter with golden accents",629:"Body becomes a lighter purple shade",630:"Body shifts to golden-brown tones",631:"Red body shifts to purple",632:"Gray body shifts to golden",633:"Blue body shifts to green",634:"Blue body shifts to green",635:"Blue body and accents shift to green",636:"White fur and red body shift to golden",637:"Body and wings shift to golden tones",638:"Body becomes a slightly lighter blue shade",639:"Body becomes a slightly lighter tone overall",640:"Green body shifts to pink-magenta",641:"Body shifts to a blue-gray tone",642:"Body shifts to a blue-gray tone",643:"Tail ring shifts to golden; body barely changes",644:"Body becomes very slightly lighter overall",645:"Body shifts to orange-red tones",646:"Body becomes a slightly lighter gray shade",647:"Body becomes a slightly lighter blue shade",648:"Body becomes a slightly different shade overall",649:"Purple body shifts to red-orange",650:"Body turns brown-red with darker green accents",651:"Body becomes brown-red with darker armor",652:"Shell and body shift to brown-red tones",653:"Fur turns gray-silver instead of yellow",654:"Fur becomes gray-purple with muted accents",655:"Robes and fur shift to deep purple tones",656:"Foam and body become slightly lighter blue",657:"Body becomes a subtly lighter blue shade",658:"Body darkens to black with red tongue scarf",659:"Fur shifts to a muted gray-green tone",660:"Fur turns golden-brown with warmer accents",661:"Feathers shift to orange-golden tones",662:"Plumage becomes more orange-golden overall",663:"Feathers shift to bright orange-golden hues",664:"Body becomes slightly lighter overall",665:"Fur coat becomes subtly lighter in shade",666:"Wing patterns shift to different vivid colors",667:"Mane and body become darker brown tones",668:"Mane turns bluish with darker brown body",669:"Body becomes a subtly lighter shade of white",670:"Body shifts to a slightly lighter shade",671:"Body takes on a slightly different hue",672:"Fur becomes a subtly darker green shade",673:"Body and fur darken slightly overall",674:"Fur lightens to a pale gray shade",675:"Fur shifts to lighter gray with muted markings",676:"Fur becomes a subtly darker gray tone",677:"Fur turns soft pink instead of gray",678:"Body shifts to golden-brown tones",679:"Sheath and blade turn red-orange",680:"Sheaths and blades become red-orange",681:"Shield and body turn black with red accents",682:"Plumage shifts to gray-blue tones",683:"Body becomes brown-tan with muted accents",684:"Fluff turns yellow-brown instead of white",685:"Body and frosting shift to brown-tan hues",686:"Body turns bright orange-golden",687:"Body shifts to orange-golden tones",688:"Hands and body become orange-golden",689:"Limbs and body shift to orange-golden tones",690:"Body changes to brown-tan coloring",691:"Body and fins shift to brown-tan hues",692:"Shell turns red-orange instead of blue",693:"Claws and body become vivid red-orange",694:"Body turns red-orange with warm accents",695:"Frill and body shift to red-orange tones",696:"Body turns blue instead of brown",697:"Body becomes blue with lighter accents",698:"Body takes on a whiter, icier appearance",699:"Sails and body become whiter and icier",700:"Pink accents turn blue throughout the body",701:"Feathers shift to orange-golden tones",702:"Fur becomes a subtly lighter cream shade",703:"Gems take on a subtle golden tint",704:"Body turns white-cream instead of purple",705:"Body shifts to brown-tan tones",706:"Body becomes yellow-golden with warm hues",707:"Keys and body take on a golden shine",708:"Stump and body turn red-brown",709:"Trunk turns white with red-brown leaves",710:"Pumpkin body shifts to golden-orange",711:"Body becomes brighter golden-orange",712:"Ice body takes on a subtle golden tint",713:"Body shifts from blue to golden-orange",714:"Fur and wings turn green-teal",715:"Wings and body shift to green-teal hues",716:"Body and antlers turn white-blue",717:"Wings and body become white with red accents",718:"Body shifts to white-blue coloring",719:"Gems and body darken toward black tones",720:"Body and rings shift to golden-white",721:"Body turns golden-orange with warm accents",722:"Plumage becomes subtly lighter overall",723:"Feathers lighten slightly in tone",724:"Hood and body darken to deep green-black",725:"Fur turns white-cream instead of black",726:"Fur lightens to a warm cream tone",727:"Dark fur turns white-cream with muted stripes",728:"Body becomes a subtly lighter cream shade",729:"Body shifts to a slightly lighter tone",730:"Hair turns golden with lighter body tones",731:"Plumage shifts to lighter brown tones",732:"Feathers become subtly lighter overall",733:"Beak turns bright orange-golden",734:"Fur turns vivid pink-magenta",735:"Fur shifts to bright pink-magenta",736:"Body takes on a subtle golden hue",737:"Shell turns golden-green instead of green",738:"Mandibles and body become golden",739:"Shell and claws shift to golden-brown",740:"Fur and body become golden overall",741:"Feathers shift to a different shade by style",742:"Wings and body turn blue-teal",743:"Wings and scarf shift to blue-teal",744:"Fur turns blue-gray instead of brown",745:"Fur changes to blue, red, or deeper orange by form",746:"Body turns purple instead of blue",747:"Spines and body shift to green-teal",748:"Tentacles and body become golden-orange",749:"Fur becomes a subtly lighter cream shade",750:"Fur and mane lighten to cream tones",751:"Bubble and body turn purple",752:"Body and bubble shift to purple tones",753:"Leaves and body become purple",754:"Body turns vivid pink-magenta",755:"Cap and body shift to golden-brown",756:"Cap becomes golden with purple accents",757:"Body turns cream-white instead of dark gray",758:"Body shifts to cream-white coloring",759:"Fur turns golden-brown with warm accents",760:"Body shifts to golden-green tones",761:"Body turns golden-orange instead of purple",762:"Body and leaves become golden overall",763:"Body and legs shift to golden-brown",764:"Flowers become lighter with different hues",765:"Fur shifts to a lighter purple shade",766:"Body becomes subtly lighter overall",767:"Shell turns green instead of purple",768:"Armor shifts to golden-orange tones",769:"Sand body darkens to black",770:"Sand body becomes black and darker overall",771:"Body turns green instead of pink",772:"Body becomes subtly darker in tone",773:"Body lightens slightly in shade",774:"Core shifts to black when shell breaks",775:"Fur turns blue instead of gray",776:"Shell and body become vivid red-orange",777:"Fur becomes subtly darker in tone",778:"Disguise cloth shifts to a slightly different shade",779:"Body becomes pink-purple with vivid patterns",780:"Body and hair shift to golden-orange",781:"Anchor and body turn golden-orange",782:"Scales shift to bright golden tones",783:"Scales and armor become golden",784:"Scales turn golden with pink accents",785:"Shell becomes orange with black accents",786:"Shell shifts to black with gold markings",787:"Shell turns black with golden accents",788:"Shell becomes purple with black tones",789:"Body darkens to a subtly deeper blue",790:"Shell shifts very subtly in color",791:"Mane and body turn vivid red-crimson",792:"Wings and body shift to red-crimson",793:"Tentacles and body turn orange-golden",794:"Muscles and body shift to orange-golden",795:"Body takes on a subtle golden-white hue",796:"Wires and body become golden-orange",797:"Body and jets shift to golden-orange",798:"Body and blades turn bright orange",799:"Body turns white-cream instead of dark purple",800:"Prism body shifts to blue-teal tones",801:"Body and accents become golden overall",802:"Flames and body shift to pink-purple",803:"Body turns white-golden instead of purple",804:"Body and wings become white-cream",805:"Bricks become subtly lighter in shade",806:"Body and head shift to white-cream",807:"Fur turns white instead of yellow",808:"Body becomes subtly darker in tone",809:"Body shifts to blue-teal metallic tones",810:"Body becomes a lighter, more muted green",811:"Body shifts to a lighter green tone",812:"Body takes on a lighter green-brown hue",813:"Body becomes slightly more cream-colored",814:"Body shifts to a gray-cream tone",815:"Body becomes gray-cream instead of white",816:"Body changes from blue to a purple-pink",817:"Body shifts to a lighter purple shade",818:"Body becomes a lighter blue-white",819:"Body changes from brown to orange-red",820:"Body becomes a darker, richer brown",821:"Body changes from blue to golden-yellow",822:"Body shifts to a golden tone",823:"Armor changes from dark blue to golden-cream",824:"Body changes from purple to orange",825:"Shell becomes a golden-brown color",826:"Body shifts from red to orange-red",827:"Body becomes a lighter cream shade",828:"Fur becomes a slightly lighter brown",829:"Body becomes a subtly lighter green",830:"Body shifts from green to purple-pink",831:"Wool changes from white to black",832:"Wool becomes slightly darker overall",833:"Body shifts to a lighter green tone",834:"Shell changes from brown to orange-red",835:"Body becomes a lighter cream color",836:"Body shifts to a lighter cream tone",837:"Eye glow changes to orange",838:"Body takes on an orange hue",839:"Flames and accents shift to orange",840:"Body becomes a subtly different green",841:"Body shifts to a green-golden tone",842:"Body takes on a green-golden hue",843:"Body changes from tan to green",844:"Body shifts to a darker black tone",845:"Body changes from blue to pink-magenta",846:"Body shifts from silver to pink-magenta",847:"Body changes to a brown-golden hue",848:"Body becomes a lighter purple shade",849:"Body shifts from purple to gray-white",850:"Body changes to golden-orange",851:"Body becomes subtly lighter and more orange",852:"Body shifts to golden-green",853:"Body changes from purple to golden-yellow",854:"Tea color becomes slightly lighter",855:"Body shifts to a lighter cream shade",856:"Body changes from pink to lighter blue",857:"Body shifts to a lighter blue tone",858:"Body becomes a lighter blue shade",859:"Body changes from pink to blue-teal",860:"Body shifts to a blue-teal tone",861:"Body changes from purple to blue-teal",862:"Body lightens with red accent markings",863:"Body becomes a darker gray steel tone",864:"Body changes from pink to white-cream",865:"Body shifts to a darker brown shade",866:"Body takes on a darker blue hue",867:"Body becomes a lighter gray tone",868:"Body shifts to a slightly different shade",869:"Cream becomes subtly lighter overall",870:"Body shifts to golden-brown",871:"Body changes from dark to lighter purple",872:"Body shifts to a golden-green hue",873:"Wings and body become golden-green",874:"Body becomes a lighter tan color",875:"Ice head becomes subtly lighter",876:"Body becomes slightly darker overall",877:"Body shifts to a lighter cream tone",878:"Body changes from copper to green-teal",879:"Body shifts from copper to green-teal",880:"Body shifts to green and lighter tones",881:"Body becomes a lighter blue shade",882:"Body shifts to a lighter green",883:"Body becomes lighter with pink accents",884:"Body shifts to a lighter cream tone",885:"Body changes from green to orange-red",886:"Body becomes a lighter purple shade",887:"Body shifts to orange-golden tones",888:"Body becomes a lighter pink shade",889:"Body shifts to a lighter red-pink",890:"Body becomes a lighter white tone",891:"Body changes to a golden-tan hue",892:"Body shifts to golden-cream",893:"Body becomes a subtly lighter green",894:"Body becomes slightly darker overall",895:"Body shifts to a subtly lighter shade",896:"Body changes from white to darker gray",897:"Body shifts from dark to lighter gray",898:"Body becomes subtly lighter overall",899:"Body shifts to a lighter cream color",900:"Body becomes a lighter brown tone",901:"Body shifts to a darker brown shade",902:"Body becomes a lighter orange hue",903:"Body shifts to a lighter purple",904:"Body becomes a darker purple shade",905:"Body shifts to a lighter gold tone",906:"Body becomes a subtly lighter green",907:"Body shifts to a lighter green shade",908:"Body changes to lighter purple-pink tones",909:"Body shifts from red to lighter cream-white",910:"Body becomes a lighter golden shade",911:"Body changes from red to purple-blue",912:"Body becomes subtly lighter overall",913:"Body shifts to a lighter blue tone",914:"Body becomes lighter with red and blue tones",915:"Body changes from gray to brown-golden",916:"Body shifts to a lighter brown shade",917:"Body changes to a green-teal hue",918:"Body shifts to golden-green tones",919:"Body becomes a lighter gray shade",920:"Body shifts to a lighter purple tone",921:"Body becomes a lighter cream shade",922:"Body shifts to a subtly lighter cream",923:"Body becomes a lighter cream tone",924:"Body changes from white to green",925:"Body shifts from white to green",926:"Body becomes subtly lighter overall",927:"Body shifts to a lighter cream shade",928:"Body becomes subtly lighter overall",929:"Body shifts to a lighter green shade",930:"Body becomes a lighter brown tone",931:"Body becomes lighter; varies by form",932:"Body changes from white to orange-brown",933:"Body shifts to an orange hue",934:"Body becomes an orange-golden shade",935:"Body changes from red to blue-purple",936:"Armor shifts from red to golden-yellow",937:"Armor changes from blue to red-orange",938:"Body changes from yellow to green-teal",939:"Body shifts to a green-teal color",940:"Body becomes subtly lighter overall",941:"Body shifts to a lighter pink hue",942:"Body becomes a lighter brown shade",943:"Body shifts to a lighter gray tone",944:"Body changes from white to purple",945:"Body shifts to blue-teal tones",946:"Body becomes a lighter shade overall",947:"Body shifts to a lighter tone",948:"Body changes to golden-yellow",949:"Body shifts to a golden hue",950:"Body becomes a golden-orange shade",951:"Body shifts to a golden tone",952:"Body changes to golden-purple tones",953:"Body shifts from brown to green",954:"Body changes to a green hue",955:"Body shifts from white to blue",956:"Body changes to brown-golden tones",957:"Body becomes a lighter orange shade",958:"Body shifts to a lighter golden tone",959:"Body becomes a lighter golden hue",960:"Body changes from white to red",961:"Bodies change from white to red",962:"Body shifts to a purple hue",963:"Body changes from blue to pink-purple",964:"Body becomes a darker purple in Hero Form",965:"Body becomes subtly lighter overall",966:"Body shifts to orange-golden tones",967:"Body becomes a lighter green shade",968:"Body shifts to a darker blue hue",969:"Body changes to a blue color",970:"Body shifts to blue-purple tones",971:"Body becomes a lighter brown shade",972:"Body shifts to golden-brown",973:"Body changes from pink to cream-white",974:"Body shifts from white to pink",975:"Body becomes a pink-golden shade",976:"Body shifts to a darker blue tone",977:"Body becomes a lighter cream color",978:"Body shifts to a different shade by form",979:"Body changes to golden-tan tones",980:"Body shifts from purple to brown",981:"Body becomes subtly lighter overall",982:"Body shifts to a subtly lighter cream",983:"Body changes to a golden tone",984:"Body becomes lighter overall",985:"Body shifts to a lighter shade",986:"Body becomes a lighter golden tone",987:"Body shifts to a golden hue",988:"Body changes to a golden shade",989:"Body shifts to golden tones",990:"Body changes to a golden color",991:"Body shifts to golden-orange tones",992:"Body becomes a golden shade",993:"Body shifts to a golden hue",994:"Body changes to golden-green tones",995:"Body becomes a golden shade",996:"Body shifts to golden-green tones",997:"Body becomes a golden-lighter shade",998:"Body shifts to golden-lighter tones",999:"Chest coin becomes a lighter gold",1000:"Body becomes subtly lighter overall",1001:"Body shifts to a lighter green shade",1002:"Body changes to a golden tone",1003:"Body becomes golden-lighter overall",1004:"Body shifts to golden-lighter tones",1005:"Body changes to a golden shade",1006:"Body shifts to a golden hue",1007:"Body becomes golden-lighter overall",1008:"Body shifts to golden-lighter tones",1009:"Body changes to a golden shade",1010:"Body shifts to a golden hue",1012:"Body becomes a golden-green shade",1013:"Body shifts to a lighter tone",1014:"Body becomes a lighter shade overall",1015:"Body shifts to a lighter purple hue",1016:"Body becomes lighter overall",1017:"Body shifts to a lighter golden tone",1018:"Mask takes on a golden hue",1020:"Body changes to a golden shade",1021:"Body shifts to a golden hue",1022:"Body becomes a golden shade",1023:"Body shifts to a golden tone",1024:"Body becomes golden-lighter overall",1025:"Body becomes subtly lighter overall"};
const GENDER_SUFFIX = {3:"-male",12:"-male",19:"-male",20:"-male",25:"-male",26:"-male",29:"-female",30:"-female",31:"-female",32:"-male",33:"-male",34:"-male",41:"-male",42:"-male",44:"-male",45:"-male",64:"-male",65:"-male",84:"-male",85:"-male",97:"-male",106:"-male",107:"-male",111:"-male",112:"-male",113:"-female",115:"-female",118:"-male",119:"-male",123:"-male",124:"-female",128:"-male",129:"-male",130:"-male",133:"-male",154:"-male",165:"-male",166:"-male",178:"-male",185:"-male",186:"-male",190:"-male",194:"-male",195:"-male",198:"-male",202:"-male",203:"-male",207:"-male",208:"-male",212:"-male",214:"-male",215:"-male",217:"-male",221:"-male",224:"-male",229:"-male",232:"-male",236:"-male",237:"-male",238:"-female",241:"-female",242:"-female",255:"-male",256:"-male",257:"-male",267:"-male",269:"-male",272:"-male",274:"-male",275:"-male",307:"-male",308:"-male",313:"-male",314:"-female",315:"-male",316:"-male",317:"-male",322:"-male",323:"-male",332:"-male",350:"-male",369:"-male",380:"-female",381:"-male",396:"-male",397:"-male",398:"-male",399:"-male",400:"-male",401:"-male",402:"-male",403:"-male",404:"-male",405:"-male",407:"-male",414:"-male",415:"-male",416:"-female",417:"-male",418:"-male",419:"-male",424:"-male",440:"-female",443:"-male",444:"-male",445:"-male",449:"-male",450:"-male",453:"-male",454:"-male",456:"-male",457:"-male",459:"-male",460:"-male",461:"-male",464:"-male",465:"-male",473:"-male",475:"-male",478:"-female",488:"-female",521:"-male",538:"-male",539:"-male",548:"-female",549:"-female",592:"-male",593:"-male",627:"-male",628:"-male",629:"-female",630:"-female",668:"-male",678:"-male",758:"-female",761:"-female",762:"-female",763:"-female",856:"-female",857:"-female",858:"-female",859:"-male",860:"-male",861:"-male",876:"-male",905:"-female",916:"-male",957:"-female",958:"-female",959:"-female"};
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

// --- RAID BOSS CP RANGES (verified from LeekDuck/snacknap Apr 2026) ---
const RAID_CP = {
  // 1-Star Raids
  "Foongus":{normal:"514–559",boosted:"643–699",weather:"Sunny, Cloudy"},
  "Phantump":{normal:"595–642",boosted:"743–802",weather:"Fog, Sunny"},
  "Sandygast":{normal:"655–705",boosted:"819–881",weather:"Fog, Sunny"},
  "Gossifleur":{normal:"347–384",boosted:"434–480",weather:"Sunny"},
  // 3-Star Raids
  "Vileplume":{normal:"1391–1462",boosted:"1739–1828",weather:"Sunny, Cloudy"},
  "Dugtrio":{normal:"833–889",boosted:"1042–1112",weather:"Sunny"},
  "Torterra":{normal:"1600–1677",boosted:"2000–2096",weather:"Sunny"},
  // 5-Star Raids
  "Groudon":{normal:"2260–2351",boosted:"2825–2939",weather:"Sunny"},
  // Mega Raids
  "Mega Banette":{normal:"1965–2053",boosted:"2456–2567",weather:"Fog"},
  // Shadow Raids
  "Shadow Dratini":{normal:"495–574",boosted:"618–717",weather:"Windy"},
  "Shadow Gligar":{normal:"952–1061",boosted:"1191–1326",weather:"Sunny, Windy"},
  "Shadow Cacnea":{normal:"618–709",boosted:"773–887",weather:"Sunny"},
  "Shadow Joltik":{normal:"504–584",boosted:"631–730",weather:"Rainy"},
  "Shadow Alolan Marowak":{normal:"941–1048",boosted:"1176–1311",weather:"Sunny, Fog"},
  "Shadow Lapras":{normal:"1377–1509",boosted:"1721–1886",weather:"Rainy, Snow"},
  "Shadow Stantler":{normal:"1118–1236",boosted:"1398–1546",weather:"Partly Cloudy"},
  "Shadow Latios":{normal:"2021–2178",boosted:"2526–2723",weather:"Windy"},
  "Shadow Cresselia":{normal:"1494–1633",boosted:"1867–2041",weather:"Windy"},
  // Upcoming (from event data - verified from LeekDuck when they were active)
  "Tapu Koko":{normal:"1730–1810",boosted:"2162–2263",weather:"Rainy or Cloudy"},
  "Tapu Lele":{normal:"1912–1996",boosted:"2390–2496",weather:"Windy or Cloudy"}
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
    719:[{n:"Mega Diancie",f:"0719_mega"}],
    870:[{n:"Mega Falinks",f:"0870_mega"}]
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
  const megaMatch = name.match(/Mega\s+(\w+)(?:\s+([XY]))?/);
  if (megaMatch) { const dex = DEX[megaMatch[1]]; const suffix = megaMatch[2] ? "mega" + megaMatch[2].toLowerCase() : "mega"; if (dex) return { url: megaImg(dex, suffix), shadow: false }; }
  const gmaxMatch = name.match(/Gigantamax\s+(\w+)/);
  if (gmaxMatch) { const dex = DEX[gmaxMatch[1]]; if (dex) return { url: gmaxImg(dex), shadow: false }; }
  const dmaxMatch = name.match(/Dynamax\s+(\w+)/);
  if (dmaxMatch) { const dex = DEX[dmaxMatch[1]]; if (dex) return { url: natDexImg(dex, GENDER_SUFFIX[dex] || ""), shadow: false, dynamax: true }; }
  if (lower.includes("origin")) {
    const m = name.match(/(\w+)\s*\(Origin(?:\s+Forme)?\)/) || name.match(/Origin\s+(\w+)/);
    if (m) {
      const dex = DEX[m[1]];
      const ORIGIN_SUFFIX = { 483: "_origin", 484: "_origin", 487: "_ori" };
      if (dex) return { url: natDexImg(dex, ORIGIN_SUFFIX[dex] || "_ori"), shadow: false };
    }
  }
  if (lower.includes("altered")) {
    const m = name.match(/(\w+)\s*\(Altered(?:\s+Forme)?\)/) || name.match(/Altered\s+(?:Forme\s+)?(\w+)/);
    if (m) {
      const dex = DEX[m[1]];
      if (dex === 487) return { url: natDexImg(487, "_alt"), shadow: false };
    }
  }
  if (lower.includes("deoxys")) {
    if (lower.includes("attack")) return { url: natDexImg(386, "_attack"), shadow: false };
    if (lower.includes("defense")) return { url: natDexImg(386, "_defense"), shadow: false };
    if (lower.includes("speed")) return { url: natDexImg(386, "_speed"), shadow: false };
    if (lower.includes("normal")) return { url: natDexImg(386, ""), shadow: false };
  }
  if (lower.includes("genesect")) {
    if (lower.includes("douse")) return { url: natDexImg(649, "_douse"), shadow: false };
    if (lower.includes("shock")) return { url: natDexImg(649, "_shock"), shadow: false };
    if (lower.includes("burn")) return { url: natDexImg(649, "_burn"), shadow: false };
    if (lower.includes("chill")) return { url: natDexImg(649, "_chill"), shadow: false };
  }
  if (lower.includes("primal")) {
    const m = name.match(/Primal\s+(\w+)/);
    if (m) { const dex = DEX[m[1]]; if (dex) return { url: megaImg(dex, "primal"), shadow: false }; }
  }
  if (lower.includes("therian")) {
    const m = name.match(/(\w+)\s*\(Therian(?:\s+Forme)?\)/) || name.match(/Therian\s+Forme\s+(\w+)/);
    if (m) { const dex = DEX[m[1]]; if (dex) return { url: natDexImg(dex, "_therian" + (GENDER_SUFFIX[dex] || "-male")), shadow: lower.startsWith("shadow ") }; }
  }
  if (lower.includes("incarnate")) {
    const m = name.match(/Incarnate\s+Forme\s+(\w+)/) || name.match(/(\w+)\s*\(Incarnate(?:\s+Forme)?\)/);
    if (m) { const dex = DEX[m[1]]; if (dex) return { url: natDexImg(dex, "_incarnate" + (GENDER_SUFFIX[dex] || "-male")), shadow: lower.startsWith("shadow ") }; }
  }
  if (lower.includes("corsola") && lower.includes("sunglasses")) {
    return { url: eventDexImg(222, "spring_2026"), shadow: false };
  }
  if (lower.includes("pikachu") && lower.includes("marathon visor")) {
    return { url: costumeDexImg(25, "f3341"), shadow: false };
  }
  if (lower.includes("pikachu") && lower.includes("team")) {
    if (lower.includes("instinct")) return { url: costumeDexImg(25, "cap-instinct"), shadow: false };
    if (lower.includes("mystic")) return { url: costumeDexImg(25, "cap-mystic"), shadow: false };
    if (lower.includes("valor")) return { url: costumeDexImg(25, "cap-valor"), shadow: false };
  }
  if (lower.includes("pikachu visor")) {
    const m = name.match(/^(\w+)/);
    if (m) {
      const dex = DEX[m[1]];
      if (dex) return { url: eventDexImg(dex, "pikavisor"), shadow: false };
    }
  }
  if (lower.includes("caterpie") && lower.includes("poké ball hat")) {
    return { url: costumeDexImg(10, "gofest2026"), shadow: false };
  }
  if (lower.includes("flower crown")) {
    const m = name.match(/^(\w+)/);
    if (m) {
      const dex = DEX[m[1]];
      if (dex) return { url: eventDexImg(dex, "crown" + (GENDER_SUFFIX[dex] || "")), shadow: false };
    }
  }
  if (lower.includes("galarian mr")) {
    return { url: natDexImg(122, "_galarian"), shadow: lower.startsWith("shadow ") };
  }
  if (lower.includes("galarian")) {
    const m = name.match(/Galarian\s+(\w+)/);
    if (m) { const dex = DEX[m[1]]; if (dex) return { url: natDexImg(dex, "_galarian"), shadow: lower.startsWith("shadow ") }; }
  }
  if (lower.includes("alolan")) {
    const m = name.match(/Alolan\s+(\w+)/);
    if (m) { const dex = DEX[m[1]]; if (dex) return { url: natDexImg(dex, "_alola"), shadow: lower.startsWith("shadow ") }; }
  }
  if (lower.includes("hisuian")) {
    const m = name.match(/Hisuian\s+(\w+)/);
    if (m) { const dex = DEX[m[1]]; if (dex) return { url: natDexImg(dex, "_hisuian"), shadow: lower.startsWith("shadow ") }; }
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
  if (lower.includes("(female)")) {
    const m = name.match(/(\w+)\s*\(Female\)/);
    if (m) { const dex = DEX[m[1]]; if (dex) return { url: natDexImg(dex, "-female"), shadow: false }; }
  }
  if (lower.includes("paldean tauros")) {
    if (lower.includes("blaze")) return { url: natDexImg(128, "_paldean_blaze"), shadow: false };
    if (lower.includes("aqua")) return { url: natDexImg(128, "_paldean_aqua"), shadow: false };
    return { url: natDexImg(128, "_paldean_combat"), shadow: false };
  }
  if (lower.includes("rotom")) {
    if (lower.includes("wash")) return { url: natDexImg(479, "_wash"), shadow: false };
    if (lower.includes("heat")) return { url: natDexImg(479, "_heat"), shadow: false };
    if (lower.includes("frost")) return { url: natDexImg(479, "_frost"), shadow: false };
    if (lower.includes("fan")) return { url: natDexImg(479, "_fan"), shadow: false };
    if (lower.includes("mow")) return { url: natDexImg(479, "_mow"), shadow: false };
  }
  if (lower.includes("crowned sword")) {
    return { url: natDexImg(888, "_sword"), shadow: false };
  }
  if (lower.includes("crowned shield")) {
    return { url: natDexImg(889, "_shield"), shadow: false };
  }
  if (lower.includes("dawn wings")) {
    return { url: natDexImg(800, "_dawn"), shadow: false };
  }
  if (lower.includes("dusk mane")) {
    return { url: natDexImg(800, "_dusk"), shadow: false };
  }
  for (const [pkmn, dex] of Object.entries(DEX).sort((a, b) => b[0].length - a[0].length)) {
    if (name.includes(pkmn)) return { url: natDexImg(dex, GENDER_SUFFIX[dex] || ""), shadow: false };
  }
  return null;
}
function pokemonImgHTML(pkmn, size) {
  if (!pkmn) return null;
  if (pkmn.shadow) {
    // --- PURPLE BLOB SHADOW (commented out - re-enable by swapping with shadow icon version below) ---
    // return `<div style="position:relative;width:${size}px;height:${size}px;flex-shrink:0">
    //   <div style="position:absolute;top:18%;left:15%;width:35%;height:30%;background:rgba(120,40,180,0.55);border-radius:60% 40% 55% 45%;filter:blur(6px);transform:rotate(-15deg);animation:flameWisp1 2.2s ease-in-out infinite"></div>
    //   <div style="position:absolute;top:10%;left:45%;width:30%;height:25%;background:rgba(100,20,160,0.45);border-radius:45% 55% 50% 40%;filter:blur(7px);transform:rotate(10deg);animation:flameWisp2 2.5s ease-in-out infinite"></div>
    //   <div style="position:absolute;top:35%;left:55%;width:35%;height:32%;background:rgba(130,50,190,0.5);border-radius:50% 60% 40% 55%;filter:blur(6px);transform:rotate(20deg);animation:flameWisp3 2s ease-in-out infinite"></div>
    //   <div style="position:absolute;top:50%;left:10%;width:32%;height:28%;background:rgba(110,30,170,0.5);border-radius:55% 45% 60% 40%;filter:blur(7px);transform:rotate(-10deg);animation:flameWisp4 2.3s ease-in-out infinite"></div>
    //   <div style="position:absolute;top:55%;left:45%;width:30%;height:25%;background:rgba(140,50,200,0.45);border-radius:40% 60% 45% 55%;filter:blur(6px);transform:rotate(5deg);animation:flameWisp5 2.1s ease-in-out infinite"></div>
    //   <div style="position:absolute;top:30%;left:25%;width:40%;height:35%;background:rgba(115,35,175,0.4);border-radius:50% 45% 55% 50%;filter:blur(8px);transform:rotate(-5deg);animation:flameWisp2 2.4s ease-in-out 0.3s infinite"></div>
    //   <div style="position:absolute;top:15%;left:55%;width:25%;height:22%;background:rgba(105,25,165,0.4);border-radius:45% 55% 40% 50%;filter:blur(7px);transform:rotate(25deg);animation:flameWisp4 2.6s ease-in-out 0.2s infinite"></div>
    //   <div style="position:absolute;top:45%;left:20%;width:28%;height:24%;background:rgba(135,45,195,0.45);border-radius:55% 40% 50% 45%;filter:blur(6px);transform:rotate(-20deg);animation:flameWisp1 2.3s ease-in-out 0.4s infinite"></div>
    //   <img src="${pkmn.url}" style="position:relative;width:100%;height:100%;object-fit:contain;z-index:1" onerror="this.parentElement.style.display='none'" />
    // </div>`;
    // --- SHADOW ICON VERSION (active) ---
    return `<div style="position:relative;width:${size}px;height:${size}px;flex-shrink:0;overflow:visible">
      <img src="assets/pokemon-images/icons/shadow_icon.png" style="position:absolute;top:-15%;left:-15%;width:130%;height:130%;object-fit:contain;opacity:${darkMode ? 0.85 : 0.6};z-index:0" />
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
  "Pikachu","Chinchou","Dedenne","Pawmi","Castform","Seedot","Wiglett","Riolu","Togetic",
  "Bulbasaur","Charmander","Squirtle","Ditto","Sudowoodo","Zorua","Lapras","Snorlax","Dragonite",
  "Caterpie","Dwebble","Sizzlipede","Paras","Cutiefly","Combee","Pinsir","Scizor","Kleavor","Scyther",
  "Regidrago","Kyogre","Groudon","Mewtwo",
  "Aerodactyl","Alakazam","Banette","Manectric","Sharpedo",
  "Venusaur","Charizard","Blastoise","Rayquaza","Sceptile","Swampert","Gardevoir","Gengar","Latios",
  "Absol","Butterfree","Diglett","Wooper","Sneasel","Kirlia","Shinx","Croagunk","Blitzle","Minccino",
  "Corsola","Dragonite","Salamence","Garchomp","Mamoswine","Weavile","Raikou","Electivire",
  "Excadrill","Metagross","Rhyperior","Tangrowth","Chandelure","Giratina","Darmanitan",
  "Regirock","Shuckle","Trapinch","Drilbur","Tauros","Cinderace","Rillaboom","Empoleon",
  "Tinkatink","Tinkaton","Toedscool","Ninetales","Zekrom","Kartana","Landorus",
  "Entei","Scorbunny","Mareep","Magnemite","Joltik",
  "Larvitar","Lileep","Stunfisk","Rockruff","Machamp","Hippowdon",
  "Regieleki","Houndoom","Dratini","Gligar","Stantler","Latias","Marowak","Wooloo","Wailmer","Regice",
  "Growlithe","Gastly","Pidove","Woobat","Drilbur","Inkay","Skwovet","Trubbish",
  "Rookidee","Spheal","Roggenrola","Bounsweet","Kabuto","Omanyte","Abra","Ralts",
  "Krabby","Hatenna","Darumaka","Eevee","Machop",
  "Hitmonchan","Hitmonlee","Drampa","Sableye","Falinks","Passimian","Beldum",
  "Cryogonal","Chansey","Grookey",
  "Gyarados","Honedge","Dhelmise","Sinistea","Duraludon","Dreepy",
  "Emolga","Raichu","Alolan Raichu","Azumarill","Regidrago","Cacnea",
  "Vulpix","Goomy","Ampharos","Shiftry",
  "Chikorita","Cyndaquil","Totodile","Treecko","Torchic","Mudkip",
  "Turtwig","Chimchar","Piplup","Snivy","Tepig","Oshawott",
  "Chespin","Fennekin","Froakie","Rowlet","Litten","Popplio","Sprigatito","Fuecoco","Quaxly",
  "Dunsparce","Wimpod","Tadbulb","Cleffa","Igglybuff","Smoochum","Larvesta",
  "Fidough","Munchlax","Indeedee",
  "Chingling","Happiny","Audino","Skarmory",
  "Meowth","Zigzagoon","Geodude","Slowpoke","Basculin",
  "Deino","Impidimp","Charcadet","Turtonator","Toxel","Gible",
  "Sandile","Vullaby","Pancham","Salandit",
  "Articuno","Zapdos","Moltres","Suicune","Lugia","Ho-Oh",
  "Uxie","Mesprit","Azelf","Dialga","Palkia","Reshiram","Kyurem",
  "Xerneas","Yveltal",
  "Heatran","Registeel","Regigigas","Cresselia","Darkrai",
  "Cobalion","Terrakion","Virizion","Genesect",
  "Nihilego","Buzzwole","Pheromosa","Xurkitree","Celesteela","Guzzlord","Necrozma","Stakataka","Blacephalon",
  "Tornadus","Thundurus","Deoxys",
  "Zacian","Zamazenta",
  "Electabuzz","Jolteon","Unown","Houndour","Mudbray","Varoom","Galarian Corsola","Rotom","Wash Rotom",
  "Vaporeon","Staryu","Anorith","Galarian Mr. Mime",
  "Alolan Meowth","Ponyta","Alolan Marowak","Flareon","Nosepass","Bagon",
  "Heracross","Beedrill","Pidgeot","Blaziken","Abomasnow","Tyranitar","Lucario"
]);
function isShinyEligible(name) {
  if (name.includes("\u2728")) return true;
  if (/\b(Dynamax|Gigantamax|G-Max|D-Max)\b/i.test(name)) return false;
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
    dark,
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
  { id: 54, title: "Community Day: Lechonk", type: "Community Day", url: "https://pokemongo.com/news/communityday-may-2026-lechonk", date: "2026-05-09", endDate: null, time: "2:00 PM \u2013 5:00 PM", color: "#8B6914", icon: "\uD83D\uDC37", iconImg: "assets/pokemon-images/National-Dex/regular/Gen-9_Paldea/0915.webp", featured: false, summary: "Lechonk takes the spotlight! Evolve to Oinkologne for the exclusive Fast Attack Mud Slap.", details: { bosses: ["Oinkologne with Mud Slap (exclusive Fast Move)"], bonuses: ["1/4 Egg Hatch Distance (2\u20135 PM)", "2\u00D7 Catch Candy (2\u20135 PM)", "2\u00D7 Candy XL chance for level 31+ (2\u20135 PM)", "3-hour Incense (2\u20135 PM)", "Snapshot surprise available (2\u20135 PM)", "1-hour Lure Modules (2\u20139 PM)", "1 extra Special Trade (2\u20139 PM)", "50% less Trade Stardust cost (2\u20139 PM)", "Boosted Shiny Lechonk rate", "Special Background encounters from Field Research and Lure Modules"], paidResearch: { price: "$1.99", rewards: ["3 Lechonk encounters with Special Background", "Additional Lechonk encounters", "1 Premium Battle Pass", "1 Rare Candy XL"], note: "Tickets are giftable to Great Friends or higher." }, tips: ["Evolve Lechonk during the event or up to 4 hours after (by 9 PM) for Mud Slap.", "Mud Slap: 11 power in Trainer Battles, 19 power in Gyms/Raids.", "Lechonk attracted to Lure Modules have boosted Shiny rates.", "Field Research rewards Stardust, Ultra Balls, and Lechonk encounters (including Special Backgrounds).", "Community Day Ultra Box ($1.99) includes the event ticket + 5 Ultra Balls."] } },
  { id: 55, title: "CD Classic: Deino", type: "Community Day", url: "https://pokemongo.com/news/communitydayclassic-deino-may-2026", date: "2026-05-16", endDate: null, time: "2:00 PM – 5:00 PM", color: "#2C3E50", icon: "\uD83D\uDC09", iconImg: "assets/pokemon-images/National-Dex/regular/Gen-5_Unova/0633.webp", featured: false, summary: "Deino Community Day Classic! Evolve Zweilous into Hydreigon for the exclusive Charged Attack Brutal Swing.", details: { bosses: ["Hydreigon with Brutal Swing (exclusive Charged Move)"], bonuses: ["3× Catch XP (2–5 PM)", "3-hour Incense (2–5 PM)", "1-hour Lure Modules (2–9 PM, with boosted Deino spawn rates)", "Photo surprise available (2–5 PM)", "Boosted Shiny Deino rate", "Increased chance of Deino with Special Background", "Community Ambassador locations offer Timed Research with premium rewards and extra Special Background Deino encounters"], paidResearch: { price: "$1.99", rewards: ["3 Deino encounters with Special Background", "Additional Deino encounters", "1 Premium Battle Pass", "1 Rare Candy XL"], note: "Tickets are giftable to Great Friends or higher." }, tips: ["Evolve Zweilous during the event or up to 4 hours after (by 9 PM) for Brutal Swing.", "Brutal Swing: 55 power in Trainer Battles, 65 power in Gyms/Raids.", "Deino attracted to Lure Modules have boosted Shiny rates.", "Field Research rewards Stardust, Great Balls, and Deino encounters (some with Special Backgrounds).", "Community Day Ultra Box ($1.99, Web Store) includes the event ticket + 5 Ultra Balls.", "Hydreigon is a top Dark attacker — Brutal Swing gives it a fast-charging Dark STAB option."] } },
  { id: 65, title: "Community Day: Frigibax", type: "Community Day", url: "https://pokemongo.com/news/communityday-june-2026-frigibax", date: "2026-06-20", endDate: null, time: "2:00 PM – 5:00 PM", color: "#5DADE2", icon: "❄️", iconImg: "assets/pokemon-images/National-Dex/regular/Gen-9_Paldea/0996.webp", featured: true, published: "2026-05-26", summary: "Frigibax takes the spotlight! Evolve Arctibax to Baxcalibur for the exclusive Charged Attack Glaive Rush.", details: { bosses: ["Baxcalibur with Glaive Rush (exclusive Charged Move)"], bonuses: ["3× Catch Stardust (2–5 PM)", "2× Catch Candy (2–5 PM)", "2× Candy XL chance for level 31+ (2–5 PM)", "3-hour Incense (2–5 PM)", "Snapshot surprise available (2–5 PM)", "1-hour Lure Modules (2–9 PM, attracts Frigibax until 9 PM)", "1 extra Special Trade, up to 2 daily (2–9 PM)", "50% less Trade Stardust cost (2–9 PM)", "Possible Shiny Frigibax encounters", "Special Background Frigibax encounters from Field Research and Lure Modules"], paidResearch: { price: "$1.99", rewards: ["3 Frigibax encounters with Special Background", "Additional Frigibax encounters", "1 Premium Battle Pass", "1 Rare Candy XL"], note: "Tickets are giftable to Great Friends or higher." }, tips: ["Evolve Arctibax during the event or up to 4 hours after (by 9 PM) for Baxcalibur with Glaive Rush.", "Glaive Rush: 90 power in Trainer Battles (lowers your Defense by 1 stage), 105 power in Gyms/Raids.", "Baxcalibur is a Dragon/Ice type — Glaive Rush gives it a powerful Dragon Charged Move.", "Frigibax attracted to Lure Modules have boosted Shiny rates.", "Field Research rewards Stardust, Ultra Balls, and Frigibax encounters (including Special Backgrounds).", "Take snapshots during Community Day for a surprise.", "Community Day Ultra Box ($1.99) includes the event ticket + 5 Ultra Balls."] } },
  { id: 66, title: "Mega Raid Day", type: "Raid", url: "https://pokemongo.com/news/save-the-date-s23", date: "2026-06-27", endDate: null, time: "2:00 PM – 5:00 PM", color: "#E67E22", icon: "\uD83E\uDDEC", published: "2026-03-03", updated: "2026-05-27", iconImg: "assets/pokemon-images/Mega/regular/Gen-1_Kanto/0018_mega.webp", featured: true, summary: "Mega Raid Day on Saturday June 27 — Mega Pidgeot headlines during its 5★ Raid week. Boosted Shiny odds and extra Raid Passes expected.", details: { bosses: ["Mega Pidgeot ✨ (Mega)"], groupSize: [{ bossName: "Mega Pidgeot", tier: "Mega Raid", minimum: 2, optimalMin: 3, optimalMax: 5, easyAt: 6, greenAt: 6 }], bonuses: ["3-hour Mega Raid Day window: 2:00–5:00 PM local time", "Increased chance of encountering Shiny Pidgeot from Mega Raids", "Extra free Raid Passes from spinning Gym Photo Discs expected", "Falls within Mega Pidgeot's regular rotation (June 24 – 30)"], tips: ["Mega Pidgeot (Normal/Flying) — weak to Electric, Ice, Rock.", "Top counters: Mega Manectric, Mega Ampharos, Shadow Raikou, Shadow Mamoswine, Rampardos.", "Boosted Shiny odds — check every encounter.", "Stack Premium Battle Passes ahead of time to maximize raid attempts.", "Mega Pidgeot is a strong Flying attacker — invest in high-IV catches."] } },
  { id: 67, title: "Community Day: July 2026", type: "Community Day", url: "https://pokemongo.com/news/save-the-date-s23", date: "2026-07-04", endDate: null, time: "2:00 PM – 5:00 PM", color: "#27AE60", icon: "\uD83C\uDF1F", featured: false, summary: "July Community Day — date confirmed, featured Pokémon to be announced.", details: { bosses: ["Featured Pokémon: TBA"], bonuses: ["Standard Community Day bonuses expected", "Exclusive move for the evolution"], tips: ["Details to be shared closer to the event.", "Save the date — announced in Season 23 preview."] } },
  { id: 68, title: "Mystery Event: July 2026", type: "Event", url: "https://pokemongo.com/news/save-the-date-s23", date: "2026-07-18", endDate: null, time: "Time TBA", color: "#8E44AD", icon: "❓", featured: false, summary: "Unannounced event — type and details to be revealed.", details: { bosses: ["Details: TBA"], bonuses: ["Event type unannounced in Season 23 preview"], tips: ["Check back closer to the date for full details.", "Save the date — announced in Season 23 preview."] } },
  { id: 69, title: "Hatch Day: August 2026", type: "Event", url: "https://pokemongo.com/news/save-the-date-s23", date: "2026-08-08", endDate: null, time: "Time TBA", color: "#3498DB", icon: "\uD83E\uDD5A", iconImg: "assets/pokemon-images/eggs/egg-2.png", featured: false, summary: "August Hatch Day — date confirmed, featured Pokémon to be announced.", details: { bosses: ["Featured Hatch Pokémon: TBA"], bonuses: ["Boosted Shiny odds from eggs expected", "Timed Research likely"], tips: ["Clear egg slots before the event.", "Save the date — announced in Season 23 preview."] } },
  { id: 70, title: "Community Day: August 2026", type: "Community Day", url: "https://pokemongo.com/news/save-the-date-s23", date: "2026-08-15", endDate: null, time: "2:00 PM – 5:00 PM", color: "#27AE60", icon: "\uD83C\uDF1F", featured: false, summary: "August Community Day — date confirmed, featured Pokémon to be announced.", details: { bosses: ["Featured Pokémon: TBA"], bonuses: ["Standard Community Day bonuses expected", "Exclusive move for the evolution"], tips: ["Details to be shared closer to the event.", "Save the date — announced in Season 23 preview."] } },
  { id: 71, title: "Raid Day: August 2026", type: "Raid", url: "https://pokemongo.com/news/save-the-date-s23", date: "2026-08-22", endDate: null, time: "2:00 PM – 5:00 PM", color: "#E74C3C", icon: "\uD83D\uDD25", featured: false, summary: "August Raid Day — date confirmed, featured boss to be announced.", details: { bosses: ["Featured Raid Boss: TBA"], bonuses: ["Standard Raid Day bonuses expected", "Extra free Raid Passes from Gym Photo Discs likely", "Boosted Shiny odds likely"], tips: ["Plan a raid route with your group.", "Save the date — announced in Season 23 preview."] } },
  { id: 5, title: "Sustainability Week 2026", type: "Event", url: "https://pokemongo.com/news/sustainability-week-2026", date: "2026-04-14", endDate: "2026-04-20", time: "10:00 AM \u2013 8:00 PM", color: "#27AE60", icon: "\uD83C\uDF3F", featured: true, summary: "Silicobra debuts! G. Corsola w/ pink sunglasses and Shiny Toedscool make first appearances. 7 km Eggs feature Lapras, Togepi, and more.", details: { alert: "GO Pass rewards expire April 22 at 8:00 PM \u2014 claim before then!", bosses: ["Silicobra (debut)", "Sandaconda (evolve 50 Candy)", "Galarian Corsola w/ pink sunglasses \u2728", "Shiny Toedscool (debut) \u2728", "Seedot \u2728", "Castform \u2728", "Wiglett \u2728"], bonuses: ["Toedscool in forested/grassy biomes", "Silicobra in desert-like biomes"], routes: { phases: [{ dates: "Apr 14 \u2013 Apr 16, 10 AM", pokemon: ["\u2605Togetic", "G. Corsola w/ pink sunglasses"] }, { dates: "Apr 16 \u2013 Apr 18, 10 AM", pokemon: ["\u2605Trubbish", "G. Corsola w/ pink sunglasses"] }, { dates: "Apr 18 \u2013 Apr 20, 8 PM", pokemon: ["\u2605Lapras", "G. Corsola w/ pink sunglasses"] }], notes: ["Boosted Shiny: Lapras, Togetic, Castform, Trubbish", "Boosted Shiny Hatch: G. Corsola w/ sunglasses, Castform"] }, eggs: ["Lapras \u2728", "Togepi \u2728", "\u2605G. Corsola w/ pink sunglasses", "\u2605Castform (Normal)", "Trubbish \u2728"], milestones: [{ tier: "Tier 1", bonus: "2\u00D7 XP for Pok\u00E9Stop spins (3\u00D7 with Deluxe)" }, { tier: "Tier 2", bonus: "1/2 Egg Hatch Distance" }], goPass: { free: ["Tier 1: 2\u00D7 XP for Pok\u00E9Stop spins", "Tier 2: 1/2 Egg Hatch Distance"], deluxe: { price: "$4.99", rewards: ["Tier 1: 3\u00D7 XP for Pok\u00E9Stop spins", "Upgraded milestone rewards", "Faster progression through ranks"] }, deluxePlus: { price: "$6.99", rewards: ["Everything in GO Pass Deluxe", "Instantly skip to Rank 7"] } }, tips: ["Shiny Toedscool is brand new \u2014 check every one.", "Galarian Corsola in sunglasses is a top collector target.", "Route spawns rotate in 3 phases \u2014 plan your priorities.", "Silicobra evolves into Sandaconda for 50 Candy.", "7 km Eggs have Lapras, Togepi, G. Corsola, Castform, Trubbish \u2014 all shiny eligible."] } },
  { id: 6, title: "Replay: Riolu Hatch Day", type: "Event", url: "https://pokemongo.com/en/news/replay-riolu-hatch-day-2026", date: "2026-04-18", endDate: null, time: "11:00 AM – 5:00 PM", color: "#3498DB", icon: "\uD83E\uDD5A", iconImg: "assets/pokemon-images/eggs/egg-2.png", featured: false, summary: "Riolu Hatch Day returns! Boosted Shiny Riolu odds from eggs.", details: { bosses: ["Riolu"], bonuses: ["Riolu eggs with boosted Shiny odds", "Timed Research", "Overlaps with Sustainability Week"], paidResearch: { price: "$1.99", rewards: ["1/4 Egg Hatch Distance during event", "1 Star Piece", "2 Super Incubators"], note: "Tasks must be completed and rewards claimed before 5:00 PM local time on April 18." }, tips: ["Clear egg slots before the event.", "Use Super Incubators during the 6-hour window.", "Shiny Riolu/Lucario is one of the most coveted shinies."] } },
  { id: 7, title: "Replay: GO Bigger", type: "Max Battle", url: "https://pokemongo.com/news/replay-go-bigger-2026", date: "2026-04-25", endDate: null, time: "2:00 PM – 5:00 PM", color: "#8E44AD", icon: "\uD83D\uDCA5", featured: true, summary: "Gigantamax Venusaur, Charizard, Blastoise & Gengar at all Power Spots! Shiny forms available. Max Particle cap raised to 1,600.", details: { bosses: ["Gigantamax Venusaur \u2728", "Gigantamax Charizard \u2728", "Gigantamax Blastoise \u2728", "Gigantamax Gengar \u2728"], bonuses: ["Max Particle storage cap raised to 1,600", "8\u00D7 Max Particles from Power Spots", "2\u00D7 Max Particles from exploring (12 AM \u2013 5 PM local time)", "1/4 Adventuring distance (12 AM \u2013 5 PM local time)", "All Power Spots host Gigantamax Battles with increased refresh rates", "3 Special Trades for the day", "Remote Raid limit increased to 20 (Apr 24 5 PM \u2013 Apr 25 8 PM PDT)"], paidResearch: { price: "$4.99", rewards: ["1 Max Mushroom", "25,000 XP", "6,400 Max Particles", "2\u00D7 XP from Max Battles"] }, tips: ["Gigantamax Gengar is new to this replay \u2014 prioritize if you need it.", "All four Gigantamax forms can be Shiny \u2014 check every encounter.", "Max Mushrooms temporarily double Dynamax/Gigantamax damage in Max Battles.", "Coordinate 4-player groups for the toughest Gigantamax raids.", "Use Campfire to locate nearby Max Battles."] } },
  { id: 8, title: "Steeled Resolve", type: "Event", url: "https://pokemongo.com/news/steeled-resolve-2026", urlDisabled: false, date: "2026-04-28", endDate: "2026-05-04", time: "10:00 AM – 8:00 PM", color: "#95A5A6", icon: "\uD83D\uDEE1\uFE0F", iconImg: "assets/pokemon-images/National-Dex/regular/Gen-9_Paldea/0968.webp", featured: true, summary: "Orthworm debuts! Steel-type event with Shiny Meltan from Mystery Boxes and GO Pass milestones. 'Steeled Resolve: Taken Over' sub-event begins April 30.", details: { bosses: ["Orthworm (debut) \u2728", "Magnemite \u2728", "Aron \u2728", "Ferroseed \u2728", "Pawniard \u2728", "Magnemite (Field Research) \u2728", "Pineco (Field Research) \u2728", "Nosepass (Field Research) \u2728", "Bronzor (Field Research) \u2728", "Drilbur (Field Research) \u2728", "Ferroseed (Field Research) \u2728", "Beldum (Field Research - rare) \u2728", "Shieldon (Field Research - rare) \u2728", "Honedge (1\u2605 Raid) \u2728", "Shieldon (1\u2605 Raid) \u2728", "Beldum (1\u2605 Raid) \u2728", "Orthworm (3\u2605 Raid) \u2728", "Meltan (Mystery Box) \u2728"], bonuses: ["Reduced Mystery Box cooldown timer", "Shiny Meltan available from Mystery Box during event", "No daily GO Point cap May 2\u20134"], milestones: [{ tier: "Tier 1", bonus: "2\u00D7 Catch Candy" }, { tier: "Tier 2", bonus: "Increased Stardust from Team GO Rocket defeats" }], goPass: { free: ["Encounters with Beldum, Pawniard, Honedge, Meltan, and more Steel-types", "1 Super Rocket Radar", "Mysterious Components and Shadow Shards", "2\u00D7 Catch Candy (Tier 1 milestone)", "Increased Stardust from Team GO Rocket defeats (Tier 2 milestone)"], deluxe: { price: "$4.99", rewards: ["Everything in the free track", "Extra Steel-type Pok\u00E9mon encounters", "2 Super Rocket Radars (1 extra)", "Upgraded milestone rewards", "Faster progression through ranks"] }, deluxePlus: { price: "$6.99", rewards: ["Everything in GO Pass Deluxe", "Instantly skip to Rank 7", "Web Store bundle: 10 Ultra Balls, 5 Max Revives, 1 Premium Battle Pass, 5 Max Potions"] } }, tips: ["Orthworm is brand new \u2014 catch and raid for candy.", "Use Mystery Box during the event for a shot at Shiny Meltan.", "Beldum and Shieldon are rare Field Research encounters \u2014 complete every task.", "Steeled Resolve: Taken Over sub-event begins April 30 \u2014 see the separate Taken Over card for full details.", "GO Pass Deluxe rewards include Super Rocket Radars and Shadow Shards.", "No GO Point cap May 2\u20134 \u2014 grind milestones that weekend."] } },
  { id: 9, title: "Steeled Resolve: Taken Over", type: "Event", url: "https://pokemongo.com/news/steeled-resolve-taken-over-2026", date: "2026-04-30", endDate: "2026-05-04", time: "12:00 AM – 8:00 PM", color: "#7B68EE", icon: "\uD83D\uDE80", iconImg: "assets/pokemon-images/icons/RocketTakeover.png", featured: true, summary: "Team GO Rocket takes over! Shadow Incarnate Forme Landorus via Super Rocket Radar. Shiny Varoom debuts in 12 km Eggs. Use Charged TMs to remove Frustration.", details: { bosses: ["Shadow Incarnate Forme Landorus", "Shadow Helioptile \u2728", "Shadow Dewpider \u2728", "Shadow Morelull \u2728", "Shadow Stufful \u2728", "Shiny Varoom (12 km Eggs - debut) \u2728", "Beldum (GO Pass encounter) \u2728", "Pawniard (GO Pass encounter) \u2728", "Honedge (GO Pass encounter) \u2728", "Meltan (GO Pass encounter) \u2728"], bonuses: ["Team GO Rocket appears more frequently at Pok\u00E9Stops and in balloons", "Charged TM can remove Frustration from Shadow Pok\u00E9mon", "Shadow Pok\u00E9mon from 1\u2605 and 3\u2605 Shadow Raids have wider variance of Attack, Defense, and HP", "Shiny Varoom available from 12 km Eggs for the first time", "No daily GO Point cap May 2\u20134"], milestones: [{ tier: "Tier 1", bonus: "2\u00D7 Catch Candy" }, { tier: "Tier 2", bonus: "Increased Stardust from Team GO Rocket defeats" }], goPass: { free: ["Encounters with Beldum, Pawniard, Honedge, Meltan, and more Steel-types", "1 Super Rocket Radar", "Mysterious Components and Shadow Shards", "2\u00D7 Catch Candy (Tier 1 milestone)", "Increased Stardust from Team GO Rocket defeats (Tier 2 milestone)"], deluxe: { price: "$4.99", rewards: ["Everything in the free track", "Extra Steel-type Pok\u00E9mon encounters", "2 Super Rocket Radars (1 extra)", "Upgraded milestone rewards", "Faster progression through ranks"] }, deluxePlus: { price: "$6.99", rewards: ["Everything in GO Pass Deluxe", "Instantly skip to Rank 7", "Web Store bundle: 10 Ultra Balls, 5 Max Revives, 1 Premium Battle Pass, 5 Max Potions"] } }, tips: ["Use Charged TMs on your best Shadow Pok\u00E9mon to remove Frustration \u2014 this is rare!", "Shadow Incarnate Forme Landorus requires a Super Rocket Radar from GO Pass.", "Shiny Varoom is brand new \u2014 hatch as many 12 km Eggs as possible.", "Shadow Helioptile, Dewpider, Morelull, and Stufful can all be Shiny from Rocket Grunts.", "Shadow Raids have wider variance of Attack, Defense, and HP \u2014 you could get very high or very low IVs.", "Field Research rewards Fast TMs, Charged TMs, and Mysterious Components.", "No GO Point cap May 2\u20134 \u2014 grind milestones hard that weekend."] } },
  { id: 11, title: "Shadow Latios", type: "Raid", date: "2026-04-04", endDate: "2026-05-05", time: "", color: "#7B2FBE", icon: "🐉", iconImg: "assets/pokemon-images/National-Dex/regular/Gen-3_Hoenn/0381-male.webp", shadowBg: true, featured: false, summary: "Shadow Latios appears in 5-Star Shadow Raids. Bring Purified Gems.", details: { bosses: ["Shadow Latios (5★ Shadow Raid) ✨"], bonuses: ["Leaves all raids May 5 at 10:00 PM local time", "Purified Gems weaken Shadow Latios during the raid"], tips: ["Top-tier Dragon attacker — prioritize high-IV catches.", "Shadow Latios is weak to Ice, Dragon, Bug, Ghost, Dark, and Fairy.", "Use Purified Gems early in the raid to reduce damage taken.", "Final chance — Shadow Latios leaves all raids after May 5 at 10:00 PM."], counters: { label: "Shadow Latios (Dragon/Psychic)", pokemon: [{ name: "Mega Rayquaza", fast: "Dragon Tail", charged: "Dragon Ascent", chargedNote: "Signature" }, { name: "Shadow Salamence", fast: "Dragon Tail", charged: "Outrage" }, { name: "Shadow Dragonite", fast: "Dragon Tail", charged: "Outrage" }, { name: "Shadow Mamoswine", fast: "Powder Snow", charged: "Avalanche" }, { name: "Mega Gardevoir", fast: "Charm", charged: "Dazzling Gleam" }, { name: "Shadow Weavile", fast: "Ice Shard", charged: "Avalanche" }] } } },
  { id: 12, title: "Shadow Cresselia", type: "Raid", date: "2026-05-06", endDate: "2026-06-02", published: "2026-05-03", updated: "2026-05-21", time: "Weekends", color: "#7B2FBE", icon: "🌙", iconImg: "assets/pokemon-images/National-Dex/regular/Gen-4_Sinnoh/0488-female.webp", shadowBg: true, featured: true, summary: "Shadow Cresselia takes over 5★ Shadow Raids on weekends from May 6 to June 2. Bring Purified Gems.", details: { bosses: ["Shadow Cresselia (5★ Shadow Raid) ✨"], groupSize: [{ bossName: "Shadow Cresselia", tier: "5★ Shadow Raid", minimum: 4, optimalMin: 6, optimalMax: 10, easyAt: 11, greenAt: 9 }], bonuses: ["Appears in Shadow Raids on weekends only", "Purified Gems weaken Shadow Cresselia during the raid"], tips: ["Bulky Psychic-type — bring high-DPS Dark, Ghost, and Bug attackers.", "Shadow Cresselia is weak to Bug, Ghost, and Dark.", "Use Purified Gems early to reduce incoming damage.", "Top counter: Dawn Wings Necrozma with Moongeist Beam.", "Shiny Shadow Cresselia is available — check every encounter."], counters: { label: "Shadow Cresselia (Psychic)", pokemon: [{ name: "Dawn Wings Necrozma", fast: "Shadow Claw", charged: "Moongeist Beam", chargedNote: "Signature" }, { name: "Mega Gengar", fast: "Lick", charged: "Shadow Ball" }, { name: "Mega Tyranitar", fast: "Bite", charged: "Brutal Swing" }, { name: "Shadow Darkrai", fast: "Snarl", charged: "Shadow Ball" }, { name: "Shadow Tyranitar", fast: "Bite", charged: "Brutal Swing" }, { name: "Shadow Chandelure", fast: "Hex", charged: "Shadow Ball" }] } } },
  { id: 72, title: "Falinks Super Mega Raid Day", type: "Raid", url: "https://pokemongo.com/news/falinks-super-mega-raid-day-2026", date: "2026-05-23", endDate: null, published: "2026-04-27", updated: "2026-05-23", time: "2:00 PM – 5:00 PM", color: "#C0392B", icon: "🥊", iconImg: "assets/pokemon-images/Mega/regular/Gen-8_Galar/0870_mega.webp", featured: true, summary: "Mega Falinks debuts in Super Mega Raids! Increased Shiny Falinks odds, up to 6 free Raid Passes, and Remote Raid limit raised to 20.", details: { bosses: ["Mega Falinks ✨ (Mega)"], groupSize: [{ bossName: "Mega Falinks", tier: "Mega Raid", minimum: 3, optimalMin: 4, optimalMax: 6, easyAt: 7, greenAt: 8 }], bonuses: ["Up to 6 free Raid Passes from spinning Gym Photo Discs", "Increased chance of encountering Shiny Falinks from Super Mega Raids", "Remote Raid limit increased to 20 (May 22 5 PM – May 23 8 PM PDT)", "Super Mega Raids appear only at select Gyms — locate them via pokemongo.com/map"], ticketPrice: "$4.99", ticketNote: "These bonuses will be effective on Saturday, May 23, 2026, from 2:00 p.m. to 5:00 p.m. local time.", ticketBonuses: ["Up to 14 free Raid Passes from spinning Gym Photo Discs", "Increased chance to get Rare Candy XL from Raid Battles", "An additional 5,000 XP per Super Mega Raid Battle", "An additional 5,000 Stardust per Super Mega Raid Battle", "Timed Research featuring a Premium Battle Pass and a Mawile encounter", "Tickets giftable to Great Friends or higher", "Purchases are non-refundable — cannot be bought with PokéCoins", "Ticket available in-game shop until May 23 at 5:00 PM local time", "Ultra Ticket Box $4.99 on Web Store (ticket + Premium Battle Pass)"], tips: ["Mega Falinks makes its Pokémon GO debut — top priority for collectors.", "Super Mega Raids require significant teamwork — coordinate a full group.", "Plan a raid route with your group — the 3-hour window goes fast.", "Shiny Falinks has boosted odds — check every encounter.", "Paid Timed Research includes a Mawile encounter — a rare Steel/Fairy Pokémon.", "Ultra Ticket Box is Web Store exclusive — grab it before the event.", "Ticket only available in-game shop until event ends at 5:00 PM — buy early."], counters: { label: "Mega Falinks (Fighting)", pokemon: [{ name: "Shadow Mewtwo", fast: "Confusion", charged: "Psystrike", chargedNote: "Signature" }, { name: "Mega Alakazam", fast: "Confusion", charged: "Psychic" }, { name: "Mega Rayquaza", fast: "Air Slash", charged: "Hurricane" }, { name: "Mega Gardevoir", fast: "Charm", charged: "Dazzling Gleam" }, { name: "Shadow Moltres", fast: "Wing Attack", charged: "Sky Attack" }, { name: "Shadow Latios", fast: "Zen Headbutt", charged: "Psychic" }] } } },
  { id: 10, title: "Shadow Entei Raid Day", type: "Raid", url: "https://pokemongo.com/news/shadow-entei-raid-day-2026", date: "2026-05-02", endDate: null, updated: "2026-05-02", time: "2:00 PM \u2013 5:00 PM", color: "#C0392B", icon: "\uD83D\uDD25", iconImg: "assets/pokemon-images/National-Dex/regular/Gen-2_Johto/0244.webp", shadowBg: true, featured: true, summary: "Shadow Entei takes over Shadow Raids! Increased Shiny odds, up to 6 free Raid Passes, and Remote Raid limit raised to 20.", details: { bosses: ["\u2605Shadow Entei (Shadow Raid)"], bonuses: ["Up to 6 free Raid Passes from spinning Gym Photo Discs", "Increased chance of encountering Shiny Entei from Shadow Raids", "Remote Raid limit increased to 20 (May 1 5 PM \u2013 May 2 8 PM PDT)"], ticketPrice: "$4.99", ticketNote: "These bonuses will be effective on Saturday, May 2, 2026, from 2:00 p.m. to 5:00 p.m. local time.", ticketBonuses: ["Up to 14 Raid Passes from spinning Gym Photo Discs", "Increased chance to get Rare Candy XL from Raid Battles", "50% more XP from Raid Battles", "2\u00D7 Stardust from Raid Battles", "Tickets giftable to Great Friends or higher", "Purchases are non-refundable \u2014 cannot be bought with Pok\u00E9Coins", "Ticket available in-game shop until May 2 at 5:00 PM local time", "Ultra Ticket Box $4.99 on Web Store (ticket + Premium Battle Pass)"], tips: ["Shadow Entei is a top-tier Fire attacker \u2014 invest in high-IV catches.", "Bring Purified Gems to weaken Shadow Entei in Shadow Raids.", "Plan a raid route with your group \u2014 3-hour window goes fast.", "Shiny Shadow Entei has boosted odds \u2014 check every encounter.", "Ultra Ticket Box is Web Store exclusive \u2014 grab it before the event.", "Ticket only available in-game shop until event ends at 5:00 PM \u2014 buy early."], counters: { label: "Shadow Entei (Fire)", pokemon: [{ name: "Primal Kyogre", fast: "Waterfall", charged: "Origin Pulse", chargedNote: "Signature" }, { name: "Primal Groudon", fast: "Mud Shot", charged: "Precipice Blades", chargedNote: "Signature" }, { name: "Mega Garchomp", fast: "Mud Shot", charged: "Earth Power", chargedNote: "CD Exclusive" }, { name: "Mega Swampert", fast: "Water Gun", charged: "Hydro Cannon", chargedNote: "CD Exclusive" }, { name: "Shadow Kyogre", fast: "Waterfall", charged: "Origin Pulse", chargedNote: "Signature" }, { name: "Mega Rayquaza", fast: "Dragon Tail", charged: "Dragon Ascent", chargedNote: "Signature" }] } } },
  { id: 20, title: "5\u2605 Raid: Regidrago", type: "Raid", date: "2026-04-01", endDate: "2026-04-07", time: "Raid Hour: Wed Apr 1, 6–7 PM", color: "#E74C3C", icon: "\uD83D\uDC09", iconImg: "assets/pokemon-images/National-Dex/regular/Gen-8_Galar/0895.webp", featured: false, summary: "Regidrago in 5-Star Raids. Mega Manectric in Mega Raids. Shadow Latios weekends.", details: { bosses: ["Regidrago (5\u2605)", "Mega Manectric (Mega)", "Shadow Latios (weekends through May 5)", "Raichu (3\u2605)", "Alolan Raichu (3\u2605)", "Azumarill (3\u2605)", "Emolga (1\u2605)", "Dedenne (1\u2605)", "Yamper (1\u2605)", "Pawmi (1\u2605)"], bonuses: ["Raid Hour: Wednesday 6–7 PM"], tips: ["Weak to Fairy, Ice, Dragon.", "Shadow Latios on weekends — bring Purified Gems."], counters: { label: "Regidrago (Dragon)", pokemon: [{ name: "Mega Rayquaza", fast: "Dragon Tail", charged: "Dragon Ascent", chargedNote: "Signature" }, { name: "Shadow Salamence", fast: "Dragon Tail", charged: "Outrage" }, { name: "Shadow Dragonite", fast: "Dragon Tail", charged: "Outrage" }, { name: "Mega Gardevoir", fast: "Charm", charged: "Dazzling Gleam" }, { name: "Shadow Garchomp", fast: "Dragon Tail", charged: "Outrage" }, { name: "Mega Latios", fast: "Dragon Breath", charged: "Dragon Claw" }] } } },
  { id: 21, title: "5\u2605 Raid: Kyogre", type: "Raid", date: "2026-04-08", endDate: "2026-04-14", time: "Raid Hour: Wed Apr 8, 6–7 PM", color: "#2980B9", icon: "\uD83C\uDF0A", iconImg: "assets/pokemon-images/National-Dex/regular/Gen-3_Hoenn/0382.webp", featured: false, summary: "Kyogre returns. Top-tier Water attacker. Mega Aerodactyl in Mega Raids.", details: { bosses: ["Kyogre (5\u2605)", "Mega Alakazam (Mega)", "Shadow Latios (weekends)"], bonuses: ["Raid Hour: Wednesday 6–7 PM"], tips: ["Top-tier Water attacker — raid heavily.", "Weak to Grass and Electric.", "Shiny Kyogre is a gorgeous pink whale."], counters: { label: "Kyogre (Water)", pokemon: [{ name: "Mega Sceptile", fast: "Bullet Seed", charged: "Frenzy Plant", chargedNote: "CD Exclusive" }, { name: "Kartana", fast: "Razor Leaf", charged: "Leaf Blade" }, { name: "Shadow Raikou", fast: "Thunder Shock", charged: "Wild Charge" }, { name: "Zekrom", fast: "Charge Beam", charged: "Fusion Bolt" }, { name: "Shadow Electivire", fast: "Thunder Shock", charged: "Wild Charge" }, { name: "Shadow Tangrowth", fast: "Vine Whip", charged: "Power Whip" }] } } },
  { id: 22, title: "5\u2605 Raid: Groudon", type: "Raid", date: "2026-04-15", endDate: "2026-04-21", time: "Raid Hour: Wed Apr 15, 6–7 PM", color: "#C0392B", icon: "\uD83C\uDF0B", featured: false, summary: "Groudon returns. Best Ground-type attacker. Mega Alakazam in Mega Raids.", details: { bosses: ["Groudon (5\u2605)", "Mega Alakazam (Mega)", "Shadow Latios (weekends)"], bonuses: ["Raid Hour: Wednesday 6–7 PM"], tips: ["Best Ground attacker — prioritize high-IV catches.", "Weak to Water, Grass, Ice.", "Shiny Groudon (golden) is one of the best shinies."], counters: { label: "Groudon (Ground)", pokemon: [{ name: "Mega Swampert", fast: "Water Gun", charged: "Hydro Cannon", chargedNote: "CD Exclusive" }, { name: "Kartana", fast: "Razor Leaf", charged: "Leaf Blade" }, { name: "Shadow Swampert", fast: "Water Gun", charged: "Hydro Cannon", chargedNote: "CD Exclusive" }, { name: "Mega Sceptile", fast: "Bullet Seed", charged: "Frenzy Plant", chargedNote: "CD Exclusive" }, { name: "Shadow Mamoswine", fast: "Powder Snow", charged: "Avalanche" }, { name: "Kyogre", fast: "Waterfall", charged: "Surf" }] } } },
  { id: 23, title: "5\u2605 Raid: Tapu Koko", type: "Raid", date: "2026-04-22", endDate: "2026-04-28", time: "Raid Hour: Wed Apr 22, 6–7 PM", color: "#F39C12", icon: "\u26A1", featured: false, summary: "Tapu Koko in 5-Star Raids. Electric/Fairy. Mega Sharpedo in Mega Raids.", details: { bosses: ["Tapu Koko (5\u2605)", "Mega Sharpedo (Mega)", "Shadow Latios (weekends)"], bonuses: ["Raid Hour: Wednesday 6–7 PM"], tips: ["Solid PvP pick — Electric/Fairy.", "Weak to Poison and Ground.", "Shiny has black/orange scheme."], counters: { label: "Tapu Koko (Electric/Fairy)", pokemon: [{ name: "Primal Groudon", fast: "Mud Shot", charged: "Precipice Blades", chargedNote: "Signature" }, { name: "Shadow Garchomp", fast: "Mud Shot", charged: "Earth Power", chargedNote: "CD Exclusive" }, { name: "Shadow Excadrill", fast: "Mud-Slap", charged: "Drill Run" }, { name: "Mega Gengar", fast: "Lick", charged: "Sludge Bomb" }, { name: "Shadow Rhyperior", fast: "Mud-Slap", charged: "Earthquake" }, { name: "Landorus (Therian)", fast: "Mud Shot", charged: "Earth Power" }] } } },
  { id: 24, title: "5\u2605 Raid: Tapu Lele", type: "Raid", date: "2026-04-29", endDate: "2026-05-05", time: "Raid Hour: Wed Apr 29, 6–7 PM", color: "#FF6B81", icon: "\uD83E\uDD8B", featured: false, summary: "Tapu Lele closes April. Mega Banette. Final week for Shadow Latios.", details: { bosses: ["Tapu Lele (5\u2605)", "Mega Banette (Mega)", "Shadow Latios (final week)"], bonuses: ["Raid Hour: Wednesday 6–7 PM", "Last week for Shadow Latios"], tips: ["Final week for Shadow Latios — get raids in before May 5.", "Tapu Lele weak to Ghost, Poison, Steel."], counters: { label: "Tapu Lele (Psychic/Fairy)", pokemon: [{ name: "Mega Gengar", fast: "Lick", charged: "Shadow Ball" }, { name: "Shadow Metagross", fast: "Bullet Punch", charged: "Meteor Mash", chargedNote: "CD Exclusive" }, { name: "Origin Giratina", fast: "Shadow Claw", charged: "Shadow Force", chargedNote: "Signature" }, { name: "Shadow Chandelure", fast: "Hex", charged: "Shadow Ball" }, { name: "Mega Banette", fast: "Shadow Claw", charged: "Shadow Ball" }, { name: "Shadow Excadrill", fast: "Metal Claw", charged: "Iron Head" }] } } },
  { id: 25, title: "5★ Raid: Nihilego", type: "Raid", date: "2026-05-06", endDate: "2026-05-12", updated: "2026-05-03", time: "Raid Hour: Wed May 6, 6–7 PM", color: "#B39DDB", icon: "👾", iconImg: "assets/pokemon-images/National-Dex/regular/Gen-7_Alola/0793.webp", featured: false, summary: "Nihilego debuts in 5-Star Raids — the first Ultra Beast in Pokémon GO. Rock/Poison. Shadow Cresselia weekends.", details: { bosses: ["Nihilego (5★)", "Shadow Cresselia (weekends)"], bonuses: ["Raid Hour: Wednesday May 6, 6–7 PM", "Shadow Cresselia in 5★ Shadow Raids on weekends"], tips: ["4× weak to Ground — load up on Ground-type attackers.", "Also weak to Steel, Water, and Psychic.", "Shiny Nihilego is available.", "Top counter: Primal Groudon with Precipice Blades.", "Shadow Cresselia on weekends — bring Purified Gems."], counters: { label: "Nihilego (Rock/Poison)", pokemon: [{ name: "Primal Groudon", fast: "Mud Shot", charged: "Precipice Blades", chargedNote: "Signature" }, { name: "Mega Garchomp", fast: "Mud Shot", charged: "Earth Power", chargedNote: "CD Exclusive" }, { name: "Shadow Groudon", fast: "Mud Shot", charged: "Precipice Blades", chargedNote: "Signature" }, { name: "Shadow Excadrill", fast: "Mud-Slap", charged: "Scorching Sands" }, { name: "Shadow Garchomp", fast: "Mud Shot", charged: "Earth Power", chargedNote: "CD Exclusive" }, { name: "Shadow Rhyperior", fast: "Mud-Slap", charged: "Earthquake" }] } } },
  { id: 26, title: "5★ Raid: Ultra Beasts (Regional)", type: "Raid", date: "2026-05-13", endDate: "2026-05-19", updated: "2026-05-03", time: "Raid Hour: Wed May 13, 6–7 PM", color: "#E74C3C", icon: "🌐", iconImg: "assets/pokemon-images/National-Dex/regular/Gen-7_Alola/0794.webp", featured: false, summary: "Regional Ultra Beasts split across hemispheres: Pheromosa (EMEA), Buzzwole (Americas), Xurkitree (Asia-Pacific). Shadow Cresselia weekends.", details: { bosses: ["Pheromosa (5★)", "Buzzwole (5★)", "Xurkitree (5★)", "Shadow Cresselia (weekends)"], bonuses: ["Raid Hour: Wednesday May 13, 6–7 PM", "Pheromosa — Europe, Middle East & Africa", "Buzzwole — The Americas", "Xurkitree — Asia-Pacific", "Shadow Cresselia in 5★ Shadow Raids on weekends"], tips: ["Regional split — coordinate Remote Raids with friends in other regions to catch all three.", "All three Ultra Beasts have Shiny releases available.", "Pheromosa & Buzzwole are Bug/Fighting; Xurkitree is pure Electric.", "Shadow Cresselia on weekends — bring Purified Gems."], counters: [{ label: "Pheromosa (Bug/Fighting) — EMEA", pokemon: [{ name: "Mega Rayquaza", fast: "Air Slash", charged: "Dragon Ascent", chargedNote: "Signature" }, { name: "Rayquaza", fast: "Air Slash", charged: "Dragon Ascent", chargedNote: "Signature" }, { name: "Shadow Moltres", fast: "Wing Attack", charged: "Fly" }, { name: "Shadow Salamence", fast: "Fire Fang", charged: "Fly" }, { name: "Mega Salamence", fast: "Fire Fang", charged: "Fly" }, { name: "Enamorus (Incarnate)", fast: "Fairy Wind", charged: "Fly" }] }, { label: "Buzzwole (Bug/Fighting) — Americas", pokemon: [{ name: "Mega Rayquaza", fast: "Air Slash", charged: "Dragon Ascent", chargedNote: "Signature" }, { name: "Rayquaza", fast: "Air Slash", charged: "Dragon Ascent", chargedNote: "Signature" }, { name: "Shadow Moltres", fast: "Wing Attack", charged: "Fly" }, { name: "Shadow Toucannon", fast: "Peck", charged: "Beak Blast", chargedNote: "CD Exclusive" }, { name: "Shadow Salamence", fast: "Fire Fang", charged: "Fly" }, { name: "Shadow Staraptor", fast: "Gust", charged: "Fly" }] }, { label: "Xurkitree (Electric) — Asia-Pacific", pokemon: [{ name: "Primal Groudon", fast: "Mud Shot", charged: "Precipice Blades", chargedNote: "Signature" }, { name: "Mega Garchomp", fast: "Mud Shot", charged: "Earth Power", chargedNote: "CD Exclusive" }, { name: "Shadow Groudon", fast: "Mud Shot", charged: "Precipice Blades", chargedNote: "Signature" }, { name: "Shadow Excadrill", fast: "Mud-Slap", charged: "Scorching Sands" }, { name: "Shadow Garchomp", fast: "Mud Shot", charged: "Earth Power", chargedNote: "CD Exclusive" }, { name: "Landorus (Therian Forme)", fast: "Mud Shot", charged: "Sandsear Storm", chargedNote: "Signature" }] }] } },
  { id: 27, title: "5★ Raid: Tapu Bulu", type: "Raid", date: "2026-05-20", endDate: "2026-05-26", updated: "2026-05-20", time: "Raid Hour: Wed May 20, 6–7 PM", color: "#27AE60", icon: "🌿", iconImg: "assets/pokemon-images/National-Dex/regular/Gen-7_Alola/0787.webp", featured: false, summary: "Tapu Bulu in 5-Star Raids — the Land Spirit Pokémon of Ula'ula Island. Grass/Fairy. Mega Altaria in Mega Raids. Shadow Cresselia weekends.", details: { bosses: ["Tapu Bulu (5★)", "Mega Altaria (Mega)", "Shadow Cresselia (weekends)"], groupSize: [{ bossName: "Tapu Bulu", tier: "5-Star Raid", minimum: 2, optimalMin: 3, optimalMax: 4, easyAt: 5, greenAt: 5 }, { bossName: "Mega Altaria", tier: "Mega Raid", minimum: 2, optimalMin: 4, optimalMax: 6, easyAt: 7, greenAt: 5 }, { bossName: "Shadow Cresselia", tier: "5★ Shadow Raid", minimum: 4, optimalMin: 6, optimalMax: 10, easyAt: 11, greenAt: 9 }], bonuses: ["Raid Hour: Wednesday May 20, 6–7 PM", "Mega Altaria in Mega Raids", "Shadow Cresselia in 5★ Shadow Raids on weekends"], tips: ["Weak to Poison, Steel, Fire, Ice, Flying.", "Shiny Tapu Bulu is available.", "Strong PvP pick in Master League with Grass Knot + Megahorn.", "Mega Altaria is a strong Dragon/Fairy PvP & PvE pick — boosted by Windy or Cloudy.", "Shadow Cresselia on weekends — bring Purified Gems."], counters: { label: "Tapu Bulu (Grass/Fairy)", pokemon: [{ name: "Mega Beedrill", fast: "Poison Jab", charged: "Sludge Bomb" }, { name: "Eternatus", fast: "Poison Jab", charged: "Sludge Bomb" }, { name: "Mega Gengar", fast: "Lick", charged: "Sludge Bomb" }, { name: "Mega Rayquaza", fast: "Air Slash", charged: "Dragon Ascent", chargedNote: "Signature" }, { name: "Mega Victreebel", fast: "Acid", charged: "Sludge Bomb" }, { name: "Nihilego", fast: "Poison Jab", charged: "Sludge Bomb" }] } } },
  { id: 28, title: "5★ Raid: Tapu Fini", type: "Raid", date: "2026-05-27", endDate: "2026-06-02", updated: "2026-05-26", time: "Raid Hour: Wed May 27, 6–7 PM", color: "#3498DB", icon: "🌊", iconImg: "assets/pokemon-images/National-Dex/regular/Gen-7_Alola/0788.webp", featured: false, summary: "Tapu Fini closes out May — the Land Spirit Pokémon of Poni Island. Water/Fairy. Final week for Shadow Cresselia.", details: { bosses: ["Tapu Fini (5★)", "Shadow Cresselia (final weekend)"], groupSize: [{ bossName: "Tapu Fini", tier: "5-Star Raid", minimum: 3, optimalMin: 5, optimalMax: 8, easyAt: 9, greenAt: 9 }, { bossName: "Shadow Cresselia", tier: "5★ Shadow Raid", minimum: 4, optimalMin: 6, optimalMax: 10, easyAt: 11, greenAt: 9 }], bonuses: ["Raid Hour: Wednesday May 27, 6–7 PM", "Last weekend for Shadow Cresselia — leaves June 2"], tips: ["Weak to Grass, Electric, Poison.", "Shiny Tapu Fini is available.", "Bulky PvP pick — strong in Ultra and Master League with Surf + Moonblast.", "Final weekend for Shadow Cresselia — get raids in before June 2."], counters: { label: "Tapu Fini (Water/Fairy)", pokemon: [{ name: "Shadow Thundurus (Therian Forme)", fast: "Volt Switch", charged: "Wildbolt Storm", chargedNote: "Signature" }, { name: "Mega Sceptile", fast: "Bullet Seed", charged: "Frenzy Plant", chargedNote: "CD Exclusive" }, { name: "Kartana", fast: "Razor Leaf", charged: "Leaf Blade" }, { name: "Mega Gengar", fast: "Lick", charged: "Sludge Bomb" }, { name: "Regieleki", fast: "Lock-On", charged: "Thunder Cage", chargedNote: "Signature" }, { name: "Shadow Raikou", fast: "Thunder Shock", charged: "Wild Charge" }] } } },
  { id: 80, title: "Season: Forever Forward", type: "Event", url: "https://pokemongo.com/en/seasons/forever-forward", date: "2026-06-02", endDate: "2026-09-08", published: "2026-05-26", time: "10:00 AM", color: "#1ABC9C", icon: "\uD83C\uDF1F", featured: true, summary: "Pok\u00E9mon GO's next season \u2014 June 2 to September 8, 2026. Mewtwo, Zeraora, and Mega Mewtwo X & Y headline GO Fest 2026. Daily Discoveries shift to Scenic Sunday, Max Monday, and Showcase Tuesday. Three Community Days (June 20 Frigibax, July 4, August 16), refreshed eggs, Research Breakthrough rotation, and new Dynamax debuts.", details: { bossesTitle: "Max Pok\u00e9mon Debuts", bosses: ["Dynamax Electabuzz (Power Spots)", "Dynamax Magikarp (Power Spots)", "Dynamax Feebas (Power Spots)", "Dragonite \u2728 (Research Breakthrough)", "Axew \u2728 (Research Breakthrough)", "Honedge \u2728 (Research Breakthrough)", "Jangmo-o \u2728 (Research Breakthrough)", "Indeedee \u2728 (Research Breakthrough)", "Klawf (Research Breakthrough)"], bonuses: ["Three Community Days: June 20 (Frigibax), July 4 (TBA), August 16 (TBA)", "GO Fest 2026 Tokyo / Chicago / Copenhagen / Global", "Free Zeraora Special Research at GO Fest 2026: Global (non-expiring)", "Rotating Web Store boxes throughout the season", "Themed stickers from Pok\u00E9Stops, Gifts, and the in-game shop", "Routes feature with Buddy Pok\u00E9mon exploration", "Mateo's Gift Exchange 7 km Eggs"], seasonBonuses: ["Scenic Sunday \u2014 more Pok\u00E9mon on Routes, reduced Buddy Candy distance on Routes, encounter Mateo up to 3\u00D7 daily", "Max Monday \u2014 frequent Power Spot refreshes, additional active Power Spots, rotating Dynamax battles (6 AM \u2013 9 PM)", "Showcase Tuesday \u2014 enter up to 5 Pok\u00E9Stop Showcases", "Raid Hour Wednesday \u2014 6 PM \u2013 7 PM (featured 5\u2605 boss)", "GO Battle Thursday \u2014 up to 10 sets daily (50 battles), 4\u00D7 Stardust from wins", "Friendship Friday \u2014 2 Special Trades, Lucky boost, \u221210% Stardust trade cost"], dailyDiscoveries: [{ day: "Sunday", name: "Scenic Sunday", icon: "\uD83C\uDF04", color: "#16A085", desc: "More Pok\u00E9mon will appear while following a Route. Reduced Buddy Candy distance on Routes. Encounter Mateo up to three times daily." }, { day: "Monday", name: "Max Monday", icon: "\u26A1", color: "#F39C12", desc: "Power Spots refresh more frequently with additional active locations. Max Battles rotate featured Dynamax Pok\u00E9mon.", time: "Max Monday: 6:00 AM \u2013 9:00 PM" }, { day: "Tuesday", name: "Showcase Tuesday", icon: "\uD83C\uDFC6", color: "#3498DB", desc: "Trainers can enter up to five Pok\u00E9Stop Showcases on Tuesdays.", time: "10:00 AM \u2013 8:00 PM" }, { day: "Wednesday", name: "Raid Hour", icon: "\u2694\uFE0F", color: "#9B59B6", desc: "Raid Bosses for five-star raids and Mega Raids rotate at the start of each day each week. Raid Hours feature the five-star Raid Boss.", time: "6:00 PM \u2013 7:00 PM" }, { day: "Thursday", name: "GO Battle Thursday", icon: "\uD83E\uDD4A", color: "#E67E22", desc: "Up to 4\u00D7 Stardust from win rewards and 10 sets daily (50 battles total) instead of the usual 5." }, { day: "Friday", name: "Friendship Friday", icon: "\uD83E\uDD1D", color: "#2ECC71", desc: "2 Special Trades allowed, increased Lucky Trade chances, \u221210% Stardust trade cost, 2 guaranteed Candy XL from trades (level 31+)." }], eggLabel: "2 km Eggs", eggs: ["Exeggcute \u2728", "Corphish \u2728", "Wynaut \u2728"], seasonEggPools: [{ label: "5 km Eggs", items: ["Riolu \u2728", "Mantyke \u2728", "Flittle"] }, { label: "7 km Eggs", items: ["Alolan Diglett \u2728", "Galarian Corsola \u2728", "Galarian Darumaka \u2728"] }, { label: "7 km Eggs from Mateo's Gift Exchange", items: ["Hisuian Growlithe \u2728", "Hisuian Sneasel \u2728", "White-Striped Form Basculin \u2728"] }, { label: "10 km Eggs", items: ["Mawile \u2728", "Absol \u2728", "Frigibax \u2728"] }, { label: "5 km Adventure Sync Rewards", items: ["Tyrogue \u2728", "Sableye \u2728", "Budew \u2728"] }, { label: "10 km Adventure Sync Rewards", items: ["Bagon \u2728", "Druddigon \u2728", "Drampa \u2728"] }], tips: ["Mega Mewtwo X & Y debut at GO Fest 2026 \u2014 stockpile Mewtwo Mega Energy now (it converts to both forms).", "Scenic Sunday makes Routes essential \u2014 load up Routes with Buddies before the season starts.", "Research Breakthrough cycles through Dragonite, Axew, Honedge, Jangmo-o, Indeedee, and Klawf \u2014 claim weekly.", "Mateo's Gift Exchange 7 km Eggs are separate from regular 7 km Eggs.", "Three Community Days: June 20 (Frigibax), July 4 (TBA), August 16 (fan-voted TBA).", "Adventure Sync Bagon, Drampa, and Druddigon are normally rare \u2014 stack walking distance for hatch eggs.", "GO Fest 2026: Global on July 11\u201312 is FREE for all Trainers."], relatedNews: [{ id: 19, label: "Forever Forward \u2014 Full Season Overview", icon: "\uD83C\uDF1F" }, { id: 20, label: "GO Battle League: Forever Forward Schedule", icon: "\u2694\uFE0F" }, { id: 14, label: "GO Fest 2026: Global \u2014 FREE", icon: "\uD83C\uDF0D" }, { id: 13, label: "Mega Mewtwo X & Y \u2014 Full Breakdown", icon: "\uD83E\uDDBE" }] } },
  { id: 62, title: "Season: Memories in Motion", type: "Event", url: "https://pokemongo.com/news/welcome-to-memories-in-motion", date: "2026-03-03", endDate: "2026-06-02", time: "10:00 AM", color: "#9B59B6", icon: "\uD83C\uDF1F", featured: false, summary: "The current season celebrating Pok\u00E9mon's 30th anniversary and GO's 10th year. Featuring daily discovery bonuses, Volcanion Special Research, and new event formats.", details: { bosses: ["Gyarados (Research Breakthrough)", "Honedge (Research Breakthrough)", "Dhelmise (Research Breakthrough)", "Sinistea (Research Breakthrough)", "Duraludon (Research Breakthrough)", "Dreepy (Research Breakthrough)"], bonuses: ["Free Volcanion Special Research available all season", "Guaranteed Candy XL on in-person trades for level 31+", "Weekend events have moved to Saturdays this season", "In-game event calendar coming later in the season"], seasonBonuses: ["Double-Time Sundays \u2014 Incense & Lures last 2\u00D7", "Fast-Track Mondays \u2014 2\u00D7 GO Points, extra Power Spots", "Max Mondays \u2014 rotating Dynamax Pok\u00E9mon (6 AM\u20139 PM)", "Showcase Tuesdays \u2014 Pok\u00E9Stop Showcases (10 AM\u20138 PM)", "Raid Hour Wednesdays \u2014 6\u20137 PM", "GO Battle Thursdays \u2014 up to 10 sets, 4\u00D7 Stardust from wins", "Friendship Fridays \u2014 2 Special Trades, Lucky boost, \u221210% Stardust"], dailyDiscoveries: [{ day: "Sunday", name: "Double-Time Sunday", icon: "\uD83D\uDD25", color: "#E74C3C", desc: "Incense, Lure Modules, Glacial Lure Modules, Mossy Lure Modules, Magnetic Lure Modules, and Rainy Lure Modules activated on Sunday will last up to twice as long." }, { day: "Monday", name: "Fast-Track Monday & Max Monday", icon: "\u26A1", color: "#F39C12", desc: "2x GO Points from Pass Tasks for both monthly and event GO Passes. Power Spots refresh more frequently with additional locations. Max Battles rotate featured Dynamax Pokemon.", time: "Max Monday: 6:00 AM \u2013 9:00 PM" }, { day: "Tuesday", name: "Showcase Tuesday", icon: "\uD83C\uDFC6", color: "#3498DB", desc: "PokeStop Showcases will be active on Tuesdays, featuring up to 20 different categories.", time: "10:00 AM \u2013 8:00 PM" }, { day: "Wednesday", name: "Raid Hour", icon: "\u2694\uFE0F", color: "#9B59B6", desc: "Raid Bosses for five-star raids and Mega Raids will rotate at the start of the day each week. Raid Hours feature the five-star Raid Boss.", time: "6:00 PM \u2013 7:00 PM" }, { day: "Thursday", name: "GO Battle Thursday", icon: "\uD83E\uDD4A", color: "#E67E22", desc: "Trainers receive up to 4x Stardust from win rewards and can play 10 sets daily (50 battles total) instead of the usual 5 sets." }, { day: "Friday", name: "Friendship Friday", icon: "\uD83E\uDD1D", color: "#2ECC71", desc: "In-person trades feature 2 Special Trades allowed, increased Lucky Trade chances, -10% Stardust cost, and 2 guaranteed Candy XL from trades (level 31+)." }], tips: ["Free Volcanion Special Research available all season \u2014 no expiration.", "Guaranteed Candy XL on in-person trades for level 31+.", "Weekend events have moved to Saturdays this season.", "In-game event calendar coming later in the season."] } },
  { id: 60, title: "Pok\u00E9mon Pokopia Celebration", type: "Event", url: "https://pokemongo.com/news/pokemon-pokopia-celebration-event-2026", date: "2026-03-10", endDate: "2026-03-16", time: "10:00 AM \u2013 8:00 PM", color: "#E056A0", icon: "\uD83C\uDFAD", featured: false, summary: "Costumed Ditto debuts wearing a hat and cap! Boosted Shiny Sudowoodo and Zorua. Kanto starters, Lapras, Snorlax, and Dragonite in 3-Star Raids. Free Ditto Eye Mask avatar item.", details: { bosses: ["Ditto wearing a hat (debut)", "Ditto wearing a cap (debut)", "Sudowoodo (boosted Shiny)", "Zorua (boosted Shiny)", "Bulbasaur", "Charmander", "Squirtle", "Pikachu", "Lapras (3\u2605 Raid)", "Snorlax (3\u2605 Raid)", "Dragonite (3\u2605 Raid)"], bonuses: ["2\u00D7 XP for spinning Pok\u00E9Stops", "10\u00D7 XP for spinning a Pok\u00E9Stop for the first time", "Boosted Shiny rates for Sudowoodo and Zorua", "Collection Challenges with themed rewards", "Free Ditto Eye Mask avatar item in shop", "Event-themed stickers from Pok\u00E9Stops, Gyms, and Gifts"], tips: ["Catch everything \u2014 costumed Ditto transforms and hides among wild spawns.", "Shiny Zorua is extremely rare normally, take advantage of the boosted rates.", "Spin new Pok\u00E9Stops for 10\u00D7 XP \u2014 great time to explore new areas.", "Overlaps with Scorbunny Community Day on March 14."] } },
  { id: 61, title: "Bug Out 2026", type: "Event", url: "https://pokemongo.com/news/bug-out-2026", date: "2026-03-17", endDate: "2026-03-23", time: "10:00 AM \u2013 8:00 PM", color: "#2ECC71", icon: "\uD83D\uDC1B", featured: false, summary: "Blipbug, Dottler, and Orbeetle debut! Shiny Sizzlipede released. Rotating Lure spawns with Pinsir, Scizor, and Kleavor in 3-Star Raids.", details: { bosses: ["Blipbug (debut)", "Sizzlipede (Shiny debut)", "Caterpie", "Dwebble", "Nymble", "Scyther", "Blipbug (1\u2605 Raid)", "Pinsir (3\u2605 Raid)", "Scizor (3\u2605 Raid)", "Kleavor (3\u2605 Raid)", "Paras (Lures Mar 17\u201319)", "Cutiefly (Lures Mar 19\u201321)", "Combee (Lures Mar 21\u201323)"], bonuses: ["2\u00D7 XP for Nice Throws or better (GO Pass Tier 1)", "2\u00D7 Catch Candy (GO Pass Tier 2)", "3\u00D7 Catch Candy (GO Pass Deluxe Tier 2)", "Rotating Lure Module spawns every 2 days", "GO Pass Deluxe $4.99 or Deluxe + 6 Ranks $6.99", "Boosted Shiny rates for Lure Pok\u00E9mon"], tips: ["Blipbug evolves to Dottler (25 Candy) then Orbeetle (100 Candy) \u2014 stock up.", "Shiny Sizzlipede is brand new \u2014 check every one you see.", "Pinsir, Scizor, and Kleavor in 3-Star Raids can all be Shiny.", "Paras, Combee, and Cutiefly from Lures have boosted Shiny rates.", "GO Pass rewards expire March 25 at 8 PM."] } },
  { id: 29, title: "Max Battle Day: Gigantamax Pikachu", type: "Max Battle", date: "2026-03-28", endDate: null, time: "2:00 PM – 5:00 PM", color: "#F1C40F", icon: "\u26A1", featured: false, summary: "Gigantamax Pikachu debuted in 6-Star Max Battles! Pikachu caught from Max Battles cannot evolve. Shiny Gigantamax Pikachu was available.", details: { bosses: ["Gigantamax Pikachu (6\u2605 Max Battle debut)"], bonuses: ["2× Max Particles from exploring (12 AM – 5 PM)", "Increased Max Particle storage limit", "3 Special Trades for the day", "Power Spots refreshed more frequently", "Gigantamax Pikachu on all Power Spots", "Remote Raid limit increased to 20 (Mar 27 5 PM – Mar 28 8 PM PDT)"], tips: ["Gigantamax Pikachu cannot evolve — it's a standalone collector Pokémon.", "As a pure Electric-type, Ground-type counters were the way to go.", "Paid Timed Research ($4.99) rewarded 1 Max Mushroom, 25,000 XP, 6,400 Max Particles, and 2× XP from Max Battles.", "Coordinating with a full group of 4 was essential for 6-Star difficulty."] } },
  { id: 63, title: "Max Monday: D-Max Woobat", type: "Max Battle", date: "2026-03-30", endDate: "2026-04-05", startsAt: "2026-03-30T06:00:00", endsAt: "2026-04-06T06:00:00", time: "Max Monday: 6–7 PM", color: "#A890F0", icon: "\uD83D\uDCA5", iconImg: "assets/pokemon-images/National-Dex/regular/Gen-5_Unova/0527.webp", featured: false, summary: "Dynamax Woobat featured at Power Spots this week.", details: { bosses: ["Dynamax Woobat"], bonuses: ["Max Monday: 6 AM – 9 PM Mar 30", "Power Spots all week", "Extra Power Spots on Monday"], tips: ["Woobat evolves into Swoobat with high friendship.", "Max Mondays have more Power Spots."] } },
  { id: 30, title: "Dynamax Trapinch (Debut)", type: "Max Battle", date: "2026-04-06", endDate: "2026-04-12", time: "Max Monday: 6–7 PM", color: "#E67E22", icon: "\uD83C\uDFDC\uFE0F", iconImg: "assets/pokemon-images/National-Dex/regular/Gen-3_Hoenn/0328.webp", featured: false, summary: "Dynamax Trapinch debuts at Power Spots.", details: { bosses: ["Dynamax Trapinch (debut)"], bonuses: ["Max Monday: 6–7 PM Apr 6", "Power Spots all week", "Extra Power Spots on Monday"], tips: ["Trapinch evolves into Flygon.", "Max Mondays have more Power Spots."] } },
  { id: 31, title: "Dynamax Drilbur", type: "Max Battle", date: "2026-04-13", endDate: "2026-04-19", time: "Max Monday: 6–7 PM", color: "#6D4C41", icon: "\u26CF\uFE0F", featured: false, summary: "Dynamax Drilbur at Power Spots. Excadrill is top-tier.", details: { bosses: ["Dynamax Drilbur"], bonuses: ["Max Monday: 6–7 PM Apr 13", "Power Spots all week"], tips: ["Excadrill is top Ground AND Steel attacker.", "Overlaps with Sustainability Week."] } },
  { id: 32, title: "Dynamax Regirock (Debut)", type: "Max Battle", date: "2026-04-20", endDate: "2026-04-26", time: "Max Monday: 6–7 PM", color: "#D4A574", icon: "\uD83E\uDEA8", featured: true, summary: "Dynamax Regirock debuts at Power Spots! Another Legendary Regi joins the Dynamax roster.", details: { bosses: ["Dynamax Regirock (debut)"], bonuses: ["Max Monday: 6–7 PM Apr 20", "Power Spots all week"], tips: ["Headline event — expect higher difficulty.", "Coordinate with your local group.", "Coordinate with your local group for max rewards."], counters: { label: "Dynamax Regirock (Rock)", pokemon: [{ name: "Gigantamax Kingler", fast: "Mud Shot", charged: "Crabhammer" }, { name: "Gigantamax Inteleon", fast: "Water Gun", charged: "Surf" }, { name: "Zacian (Crowned Sword)", fast: "Metal Claw", charged: "Behemoth Blade", chargedNote: "Signature" }, { name: "Zamazenta (Crowned Shield)", fast: "Metal Claw", charged: "Behemoth Bash", chargedNote: "Signature" }, { name: "Gigantamax Rillaboom", fast: "Scratch", charged: "Drum Beating", chargedNote: "Signature" }, { name: "Gigantamax Machamp", fast: "Karate Chop", charged: "Close Combat" }] } } },
  { id: 33, title: "Dynamax Shuckle", type: "Max Battle", date: "2026-04-27", endDate: "2026-05-03", startsAt: "2026-04-27T06:00:00", endsAt: "2026-05-04T06:00:00", time: "Max Monday: 6–7 PM", color: "#FF7043", icon: "\uD83D\uDC1B", featured: false, summary: "Dynamax Shuckle rounds out April. Absurdly tanky. Rotates out at 6 AM on May 4.", details: { bosses: ["Dynamax Shuckle"], bonuses: ["Max Monday: 6–7 PM Apr 27", "Rotates out: 6:00 AM May 4"], tips: ["Highest Defense in the game.", "Collector piece more than meta pick."] } },
  { id: 73, title: "Dynamax Cottonee", type: "Max Battle", date: "2026-05-04", endDate: "2026-05-10", startsAt: "2026-05-04T06:00:00", endsAt: "2026-05-11T06:00:00", published: "2026-05-03", time: "Max Monday: 6–7 PM", color: "#A8DDA8", icon: "🌱", iconImg: "assets/pokemon-images/National-Dex/regular/Gen-5_Unova/0546.webp", featured: false, summary: "Dynamax Cottonee featured at Power Spots this week.", details: { bosses: ["Dynamax Cottonee ✨"], bonuses: ["Max Monday: 6–7 PM May 4", "Power Spots all week", "Extra Power Spots on Monday", "Shiny Cottonee available"], tips: ["Shiny Cottonee can appear — check every encounter.", "Cottonee evolves into Whimsicott with a Sun Stone + 50 Candy.", "Max Mondays have more Power Spots."] } },
  { id: 74, title: "Dynamax Growlithe", type: "Max Battle", date: "2026-05-11", endDate: "2026-05-17", startsAt: "2026-05-11T06:00:00", endsAt: "2026-05-18T06:00:00", published: "2026-05-03", time: "Max Monday: 6–7 PM", color: "#F08030", icon: "🔥", iconImg: "assets/pokemon-images/National-Dex/regular/Gen-1_Kanto/0058.webp", featured: false, summary: "Dynamax Growlithe featured at Power Spots this week.", details: { bosses: ["Dynamax Growlithe ✨"], bonuses: ["Max Monday: 6–7 PM May 11", "Power Spots all week", "Extra Power Spots on Monday", "Shiny Growlithe available"], tips: ["Shiny Growlithe can appear — check every encounter.", "Growlithe evolves into Arcanine with 50 Candy.", "Max Mondays have more Power Spots."] } },
  { id: 75, title: "Dynamax Registeel (Debut)", type: "Max Battle", date: "2026-05-18", endDate: "2026-05-24", startsAt: "2026-05-18T06:00:00", endsAt: "2026-05-25T06:00:00", published: "2026-05-03", updated: "2026-05-21", time: "Max Monday: 6–7 PM", color: "#B7B7CE", icon: "⚙️", iconImg: "assets/pokemon-images/National-Dex/regular/Gen-3_Hoenn/0379.webp", featured: true, summary: "Dynamax Registeel debuts at Power Spots! The third Legendary Regi to join the Dynamax roster.", details: { bosses: ["Dynamax Registeel (5★ Max Battle) ✨"], bonuses: ["Max Monday: 6–7 PM May 18", "Power Spots all week", "Debut: first appearance of Dynamax Registeel", "Shiny Registeel available"], tips: ["Headline event — expect higher difficulty.", "Shiny Registeel can appear — check every encounter.", "Coordinate with your local group for max rewards.", "Registeel is pure Steel — Fighting, Fire, and Ground attackers excel."], counters: { label: "Dynamax Registeel (Steel)", pokemon: [{ name: "Gigantamax Machamp", fast: "Karate Chop", charged: "Close Combat" }, { name: "Gigantamax Charizard", fast: "Fire Spin", charged: "Blast Burn", chargedNote: "CD Move" }, { name: "Mega Blaziken", fast: "Counter", charged: "Blast Burn", chargedNote: "CD Move" }, { name: "Mega Lucario", fast: "Counter", charged: "Aura Sphere" }, { name: "Gigantamax Rillaboom", fast: "Counter", charged: "Drum Beating", chargedNote: "Signature" }, { name: "Reshiram", fast: "Fire Fang", charged: "Fusion Flare" }] } } },
  { id: 76, title: "Dynamax Combee", type: "Max Battle", date: "2026-05-25", endDate: "2026-05-31", startsAt: "2026-05-25T06:00:00", endsAt: "2026-06-01T06:00:00", published: "2026-05-03", time: "Max Monday: 6–7 PM", color: "#F1C40F", icon: "🐝", iconImg: "assets/pokemon-images/National-Dex/regular/Gen-4_Sinnoh/0415-male.webp", featured: false, summary: "Dynamax Combee featured at Power Spots this week.", details: { bosses: ["Dynamax Combee ✨"], bonuses: ["Max Monday: 6–7 PM May 25", "Power Spots all week", "Extra Power Spots on Monday", "Shiny Combee available"], tips: ["Shiny Combee can appear — check every encounter.", "Only female Combee evolve into Vespiquen — check the gender symbol before transferring.", "Max Mondays have more Power Spots."] } },
  { id: 77, title: "Blanche's Quest for Knowledge", type: "Event", url: "https://pokemongo.com/news/global-events-gofest2026-overlays", date: "2026-05-26", endDate: "2026-06-01", published: "2026-05-18", updated: "2026-05-24", lastUpdated: "May 24, 2026 at 1:00 pm", time: "10:00 AM – 8:00 PM", color: "#3498DB", icon: "🔬", iconImg: "assets/pokemon-images/Event-Dex/regular/Gen-1_Kanto/0131_blanche.webp", featured: true, summary: "Week 1 of the Summer Quest series — Blanche leads a research-focused adventure featuring Field Research tasks and Incense encounters. Free GO Pass with Vaporeon, Larvitar, and Lapras milestone rewards.", details: { bosses: ["Squirtle ✨ (Wild)", "Alolan Vulpix ✨ (Wild)", "Krabby ✨ (Wild)", "Staryu ✨ (Wild)", "Galarian Zigzagoon ✨ (Wild)", "Lapras ✨ (Wild — rare)", "Vaporeon ✨ (Wild — rare)", "Larvitar ✨ (Wild — rare)", "Cubone ✨ (Incense)", "Horsea ✨ (Incense)", "Lapras ✨ (Incense)", "Vaporeon ✨ (Incense)", "Larvitar ✨ (Incense)", "Sableye ✨ (Incense)", "Clamperl ✨ (Incense)", "Cubchoo ✨ (Incense)", "Squirtle ✨ (Field Research)", "Alolan Vulpix ✨ (Field Research)", "Krabby ✨ (Field Research)", "Cubone ✨ (Field Research)", "Horsea ✨ (Field Research)", "Staryu ✨ (Field Research)", "Lapras ✨ (Field Research)", "Larvitar ✨ (Field Research)", "Sableye ✨ (Field Research)", "Cubchoo ✨ (Field Research)", "Sinistea ✨ (Field Research)", "Tandemaus ✨ (Field Research)"], bonuses: ["GO Pass Rank 10+: 1 extra Candy when evolving", "GO Pass Rank 10+: Increased chance of Candy XL when evolving (Trainer Level 31+)", "GO Pass Rank 20+: 2× Incense duration", "Unlimited Point Weekend: May 30 – June 1 (no daily GO Point cap)", "Featured GO Pass rewards: Vaporeon, Larvitar, Lapras + Blanche-themed accessory", "All featured Pokémon can be Shiny", "Reward expiration: June 3 at 7:59 PM local time"], goPass: { free: ["Field Research and Incense encounters across the week", "Rank-up rewards: Vaporeon, Larvitar, and Lapras encounters", "Blanche-themed avatar accessory", "Rank 10+: +1 evolve Candy & boosted Candy XL chance", "Rank 20+: 2× Incense duration"], deluxe: { price: "$4.99", rewards: ["Everything in the free track", "Extra premium encounters", "Upgraded milestone rewards", "Faster progression through ranks"] }, deluxePlus: { price: "$6.99", rewards: ["Everything in GO Pass Deluxe", "Instantly skip 6 ranks"] } }, tips: ["Lapras, Vaporeon, and Larvitar are rare wild spawns — Incense boosts your odds significantly.", "Stack 2× Incense duration (Rank 20+) with the Unlimited Point Weekend for maximum farming.", "Field Research includes Sinistea and Tandemaus — both Shiny eligible.", "Larvitar evolves into Tyranitar — bank candy for a future Mega Tyranitar.", "Reward expires June 3 at 7:59 PM — claim before then.", "All featured Pokémon can be Shiny — check every encounter."], relatedNews: [{ id: 17, label: "Summer Quest Series — Full Breakdown", icon: "🌞" }] } },
  { id: 78, title: "Spark's Caretaking Quest", type: "Event", url: "https://pokemongo.com/news/global-events-gofest2026-overlays", date: "2026-06-02", endDate: "2026-06-08", published: "2026-05-18", updated: "2026-05-24", lastUpdated: "May 24, 2026 at 1:00 pm", time: "10:00 AM – 8:00 PM", color: "#F1C40F", icon: "🥚", iconImg: "assets/pokemon-images/Event-Dex/regular/Gen-2_Johto/0239_spark.webp", featured: true, summary: "Week 2 of the Summer Quest series — Spark hosts an exploration-driven adventure centered on hatching Eggs and discovering Pokémon. Free GO Pass with Jolteon, Galarian Corsola, and Elekid milestone rewards.", details: { bosses: ["Bulbasaur ✨ (Wild)", "Alolan Raichu ✨ (Wild)", "Drowzee ✨ (Wild)", "Jolteon ✨ (Wild)", "Dratini ✨ (Wild)", "Houndour ✨ (Wild)", "Lileep ✨ (Wild)", "Combee ✨ (Wild)", "Bulbasaur ✨ (Field Research)", "Drowzee ✨ (Field Research)", "Jolteon ✨ (Field Research)", "Dratini ✨ (Field Research)", "Houndour ✨ (Field Research)", "Lileep ✨ (Field Research)", "Combee ✨ (Field Research)", "Galarian Corsola ✨ (Field Research)", "Alolan Raichu ✨ (Field Research)"], eggLabel: "7 km Eggs", eggs: ["Pichu ✨", "Elekid ✨", "Shinx ✨", "Varoom ✨", "Galarian Corsola ✨", "Hisuian Qwilfish ✨"], bonuses: ["GO Pass Rank 10+: 1/2 Egg Hatch Distance", "GO Pass Rank 20+: 1.5× Hatch Candy", "GO Pass Deluxe Rank 20+: Adds 1.5× Hatch Stardust", "Unlimited Point Weekend: June 6 – 8 (no daily GO Point cap)", "Featured GO Pass rewards: Jolteon, Galarian Corsola, Elekid + Spark-themed accessory", "All featured Pokémon can be Shiny", "Reward expiration: June 10 at 7:59 PM local time"], goPass: { free: ["7 km Eggs with the event Pokémon pool", "Rank-up rewards: Jolteon, Galarian Corsola, and Elekid encounters", "Spark-themed avatar accessory", "Rank 10+: 1/2 Hatch Distance", "Rank 20+: 1.5× Hatch Candy"], deluxe: { price: "$4.99", rewards: ["Everything in the free track", "Rank 20+: 1.5× Hatch Stardust (Deluxe exclusive)", "Extra premium encounters", "Upgraded milestone rewards", "Faster progression through ranks"] }, deluxePlus: { price: "$6.99", rewards: ["Everything in GO Pass Deluxe", "Instantly skip 6 ranks"] } }, tips: ["Stockpile empty Egg slots and Incubators before the event — 7 km Eggs cycle to the new pool.", "Stack 1/2 Hatch Distance (Rank 10+) with Super Incubators for fastest hatches.", "Shiny Varoom and Hisuian Qwilfish are among the more elusive shinies — every 7 km Egg matters.", "1.5× Hatch Candy + 1.5× Hatch Stardust (Deluxe) compounds beautifully on 7 km Eggs.", "Galarian Corsola evolves into Galarian Cursola — a unique Ghost-type.", "Reward expires June 10 at 7:59 PM — claim before then."], relatedNews: [{ id: 17, label: "Summer Quest Series — Full Breakdown", icon: "🌞" }] } },
  { id: 79, title: "Candela's Quest for Victory", type: "Event", url: "https://pokemongo.com/news/global-events-gofest2026-overlays", date: "2026-06-09", endDate: "2026-06-15", published: "2026-05-18", updated: "2026-05-24", lastUpdated: "May 24, 2026 at 1:00 pm", time: "10:00 AM – 8:00 PM", color: "#E74C3C", icon: "⚔️", iconImg: "assets/pokemon-images/Event-Dex/regular/Gen-1_Kanto/0077_candela.webp", featured: true, summary: "Week 3 of the Summer Quest series — Candela hosts an event focused on raids and battling. Free GO Pass with Flareon, Rockruff, and Ponyta milestone rewards.", details: { bosses: ["Charmander ✨ (Wild)", "Mankey ✨ (Wild)", "Hisuian Growlithe ✨ (Wild)", "Machop ✨ (Wild)", "Ponyta ✨ (Wild)", "Scyther ✨ (Wild)", "Flareon ✨ (Wild)", "Slugma ✨ (Wild)", "Fletchling ✨ (Wild)", "Hisuian Growlithe ✨ (Raid)", "Machamp ✨ (Raid)", "Scizor ✨ (Raid)", "Magcargo ✨ (Raid)", "Scraggy ✨ (Raid)", "Honedge ✨ (Raid)", "Rockruff ✨ (Raid)", "Charmander ✨ (Field Research)", "Mankey ✨ (Field Research)", "Hisuian Growlithe ✨ (Field Research)", "Machop ✨ (Field Research)", "Scyther ✨ (Field Research)", "Flareon ✨ (Field Research)", "Slugma ✨ (Field Research)", "Scraggy ✨ (Field Research)", "Fletchling ✨ (Field Research)", "Honedge ✨ (Field Research)", "Rockruff ✨ (Field Research)"], bonuses: ["GO Pass Rank 10+: Increased Attack bonus from friends in raids", "GO Pass Rank 20+: 1.5× Raid Stardust", "GO Pass Deluxe Rank 20+: Up to 2 Raid Passes from Gym Photo Discs", "Unlimited Point Weekend: June 13 – 15 (no daily GO Point cap)", "Featured GO Pass rewards: Flareon, Rockruff, Ponyta + Candela-themed accessory", "All featured Pokémon can be Shiny", "Reward expiration: June 17 at 7:59 PM local time"], goPass: { free: ["Event-themed Raid Bosses across all tiers", "Rank-up rewards: Flareon, Rockruff, and Ponyta encounters", "Candela-themed avatar accessory", "Rank 10+: Increased Attack bonus from friends in raids", "Rank 20+: 1.5× Raid Stardust"], deluxe: { price: "$4.99", rewards: ["Everything in the free track", "Rank 20+: Up to 2 Raid Passes from Gym Photo Discs (Deluxe exclusive)", "Extra premium encounters", "Upgraded milestone rewards", "Faster progression through ranks"] }, deluxePlus: { price: "$6.99", rewards: ["Everything in GO Pass Deluxe", "Instantly skip 6 ranks"] } }, tips: ["Coordinate raid groups — the friends Attack bonus (Rank 10+) makes group raiding much stronger.", "Stack 1.5× Raid Stardust with Star Pieces during the Unlimited Point Weekend for a massive dust farm.", "Rockruff in raids — evolve based on time of day for Dusk, Midday, or Midnight Lycanroc.", "Honedge raid drops set up for Doublade and Aegislash — a meta Ghost/Steel attacker.", "Hisuian Growlithe is a regional rarity normally — stock up on candy.", "Reward expires June 17 at 7:59 PM — claim before then."], relatedNews: [{ id: 17, label: "Summer Quest Series — Full Breakdown", icon: "🌞" }] } },
  { id: 40, title: "GO Fest 2026: Tokyo", type: "GO Fest", url: "https://pokemongo.com/gofest/tokyo/gameplay", iconImg: "assets/pokemon-images/GO-Fest/gofest-2026-tokyo.webp", updated: "2026-05-25", lastUpdated: "May 25, 2026 at 10:25 PM", startsAt: "2026-05-29T16:00:00+09:00", endsAt: "2026-06-01T20:00:00+09:00", date: "2026-05-29", endDate: "2026-06-01", time: "Citywide 10 AM – 8 PM · May 25 – Jun 1", color: "#FF6348", icon: "🗼", featured: true, summary: "GO Fest kicks off in Tokyo at Tokyo Waterfront City, hosted by Blanche of Team Mystic! Zeraora debuts via park Special Research, Mewtwo headlines citywide 5★ raids, and the park finale opens a Super Mega Raid for Mega Mewtwo X & Y. Aqua Breed Paldean Tauros, a Team Mystic–hat Pikachu, the Shiny Wash Rotom debut, all Unown forms, and Hawaii regional Comfey round out the lineup.", details: { bosses: ["Zeraora (Mythical — Park Special Research)", "Mewtwo (5★ Raid) ✨", "Mega Mewtwo X (Super Mega Raid)", "Mega Mewtwo Y (Super Mega Raid)", "Aqua Paldean Tauros (3★ Raid) ✨", "Pikachu wearing Team Mystic hat (Park) ✨", "Wash Rotom (Shiny debut) ✨", "Articuno (5★ Raid) ✨", "Suicune (5★ Raid) ✨", "Primal Kyogre (Primal Raid) ✨", "Primal Groudon (Primal Raid) ✨", "Shadow Articuno (5★ Shadow Raid) ✨", "Shadow Suicune (5★ Shadow Raid) ✨", "Shadow Kyogre (5★ Shadow Raid) ✨", "Shadow Groudon (5★ Shadow Raid) ✨", "Squirtle wearing a Pikachu visor (Park)", "Caterpie wearing a Poké Ball hat (Park) ✨", "Staryu ✨ (Park)", "Lapras (Park)", "Vaporeon ✨ (Park)", "Unown — all forms ✨ (Park)", "Larvitar (Park)", "Anorith ✨ (Park)", "Beldum (Park)", "Mudbray ✨ (Park)", "Comfey (Park)", "Dhelmise (Park)", "Sinistea (Park)", "Galarian Mr. Mime ✨ (Park — chance)", "Sandile (Park — chance)"], bonuses: ["Park Session window: Monday May 25 – Monday June 1, 2026 (specific times per ticket)", "Citywide gameplay 10:00 AM – 8:00 PM local time, May 25 – June 1", "Hosted by Blanche, leader of Team Mystic", "Park Experience — 4 skill-based Zones: Recruitment (Raids, Team info), Conservatory (variety of wild encounters), Cultivation (event Field Research, Special Eggs, increased incubator effectiveness), and Team GO Rocket's Hideout (Shadow Raids & Rocket battles)", "Climactic finale: a multi-thousand-Trainer Raid with a commemorative group photo", "Super Mega Raid in the final 30 minutes of the park session — 1,000+ Trainers battle Mega Mewtwo X & Y together (caught Mewtwo unlocks Mega Level 1, chance at Level 2 or 3)", "Citywide Timed Research across 4 City Districts — visit at least 2 to earn the Pokémon GO Expert medal", "Bonus Timed Research (after 2+ Trainer Challenges): choose Mega Mewtwo X or Mega Mewtwo Y at Mega Level 1", "Up to 9 daily Raid Passes from spinning Gym Photo Discs (up to 18 with the Raid Lover add-on)", "Up to 6 Special Trades per day", "1/2 Stardust cost for all trades", "1/2 Egg Hatch Distance", "Special Eggs & increased incubator effectiveness", "2× Hatch Candy", "2× Hatch Stardust", "Open up to 50 Gifts each ticketed citywide gameplay day", "Increased chance of catching Pokémon with a Premier Ball", "Ticketed citywide days (10 AM – 8 PM): event-themed stickers, 2-hour Lure Modules & Incense, 2× Catch Candy, hourly event-themed Field Research, more Party Play time, and increased Shiny chance", "Note: the Islands are NOT included in Tokyo's citywide gameplay"], tips: ["Zeraora (Mythical) comes from the park Special Research included with your ticket — one encounter per Trainer; extras award Zeraora Candy. The research is non-expiring.", "Aqua Breed Paldean Tauros (Fighting/Water) appears in 3★ raids in Tokyo — only ticket-holders can find its Shiny, and non-ticket raid catches lose the GO Fest background.", "Don't leave early: the last 30 minutes of your park session opens the Super Mega Raid for Mega Mewtwo X & Y (Mega Level 1 unlocked, chance at Level 2 or 3).", "Complete at least 2 of the 4 City District challenges to earn the GO Expert medal AND unlock the Bonus Timed Research Mega Mewtwo X/Y choice.", "Shiny Wash Rotom makes its in-person debut — check your Rotom encounters.", "Comfey (normally a Hawaii regional) appears in the wild at all three 2026 GO Fest cities — note Shiny Comfey is NOT yet released.", "Galarian Mr. Mime and Sandile are 'possible' park encounters — not guaranteed every session.", "The City Explorer Pass is citywide-only (no Tokyo Waterfront City park session) — buying it means you can't also get a Park Experience ticket.", "Tokyo's citywide gameplay does NOT include the Islands — plan your route accordingly.", "Merchandise is preorder-only and must be picked up at the park on your ticketed day."], relatedNews: [{ id: 13, label: "Mega Mewtwo X & Y — Full Breakdown", icon: "🦾", iconImg: "assets/pokemon-images/icons/mewtwo-icon.webp" }] } },
  { id: 41, title: "GO Fest 2026: Chicago", type: "GO Fest", url: "https://pokemongo.com/en/gofest/chicago", iconImg: "assets/pokemon-images/GO-Fest/gofest-2026-chicago.webp", updated: "2026-05-25", lastUpdated: "May 25, 2026 at 10:25 PM", startsAt: "2026-06-05T09:00:00-05:00", endsAt: "2026-06-07T18:00:00-05:00", date: "2026-06-05", endDate: "2026-06-07", time: "Park Sessions · Citywide Jun 4–7 (12 AM–11:59 PM)", color: "#0984E3", icon: "🏙️", featured: true, summary: "GO Fest returns to Grant Park, hosted by Spark of Team Instinct! Zeraora debuts via park Special Research, Mewtwo headlines citywide 5★ raids, and the park finale opens a Super Mega Raid for Mega Mewtwo X & Y. Blaze Breed Paldean Tauros, a Team Instinct–hat Pikachu, the Shiny Wash Rotom debut, and all Unown forms round out the lineup.", details: { bosses: ["Zeraora (Mythical — Park Special Research)", "Mewtwo (5★ Raid) ✨", "Mega Mewtwo X (Super Mega Raid)", "Mega Mewtwo Y (Super Mega Raid)", "Blaze Paldean Tauros (3★ Raid) ✨", "Pikachu wearing Team Instinct hat (Park) ✨", "Wash Rotom (Shiny debut) ✨", "Zapdos (5★ Raid) ✨", "Raikou (5★ Raid) ✨", "Primal Kyogre (Primal Raid) ✨", "Primal Groudon (Primal Raid) ✨", "Shadow Zapdos (5★ Shadow Raid) ✨", "Shadow Raikou (5★ Shadow Raid) ✨", "Shadow Kyogre (5★ Shadow Raid) ✨", "Shadow Groudon (5★ Shadow Raid) ✨", "Bulbasaur wearing a Pikachu visor (Park)", "Caterpie wearing a Poké Ball hat (Park) ✨", "Alolan Raichu (Park)", "Electabuzz ✨ (Park)", "Jolteon ✨ (Park)", "Dratini (Park)", "Unown — all forms ✨ (Park)", "Houndour ✨ (Park)", "Lileep (Park)", "Combee (Park)", "Mudbray ✨ (Park)", "Comfey (Park)", "Dhelmise (Park)", "Varoom ✨ (Park)", "Galarian Corsola ✨ (Park — rare)"], bonuses: ["Citywide gameplay June 4–7, 12:00 AM – 11:59 PM local time", "Hosted by Spark, leader of Team Instinct", "Park Experience — 4 skill-based Zones: Recruitment (Raids, Team info, PvP Battle Ground), Conservatory (variety of wild encounters), Cultivation (event Field Research, special Eggs, increased incubator effectiveness), and Team GO Rocket's Hideout (Shadow Raids & Rocket battles)", "Climactic finale: a multi-thousand-Trainer Raid with a commemorative group photo", "Super Mega Raid in the final 30 minutes of the park session — 1,000+ Trainers battle Mega Mewtwo X & Y together (caught Mewtwo unlocks Mega Level 1)", "Citywide Timed Research across 4 City Districts — visit at least 2 to earn the Pokémon GO Expert medal", "Bonus Timed Research (after 2+ Trainer Challenges): choose Mega Mewtwo X or Mega Mewtwo Y at Mega Level 1", "Up to 9 daily Raid Passes from spinning Gym Photo Discs (up to 18 with the Raid Lover add-on)", "Up to 6 Special Trades per day", "1/2 Stardust cost for all trades", "1/2 Egg Hatch Distance", "Special Eggs & increased incubator effectiveness", "2× Hatch Candy", "2× Hatch Stardust", "Open up to 50 Gifts each ticketed citywide gameplay day", "Increased chance of catching Pokémon with a Premier Ball", "Ticketed citywide days: event-themed stickers, 2-hour Lure Modules & Incense, 2× Catch Candy, hourly event-themed Field Research, more Party Play time, and increased Shiny chance"], tips: ["Zeraora (Mythical) comes from the park Special Research included with your ticket — one encounter per Trainer; extra completions award Zeraora Candy.", "Blaze Breed Paldean Tauros (Fighting/Fire) appears in 3★ raids — only ticket-holders can find its Shiny, and non-ticket raid catches lose the GO Fest background.", "Don't leave early: the last 30 minutes of your park session opens the Super Mega Raid for Mega Mewtwo X & Y (Mega Level 1 unlocked).", "Complete at least 2 of the 4 City District challenges to earn the GO Expert medal AND unlock the Bonus Timed Research Mega Mewtwo X/Y choice.", "Shiny Wash Rotom makes its in-person debut — check your Rotom encounters.", "Comfey (normally a Hawaii regional) appears in the wild at all three 2026 GO Fest cities.", "Galarian Corsola is a rare park spawn — grab it if you see one.", "The City Explorer Pass is citywide-only (no Grant Park session) — buying it means you can't also get a Park Experience ticket.", "Merchandise is preorder-only and must be picked up at the park on your ticketed day."], relatedNews: [{ id: 13, label: "Mega Mewtwo X & Y — Full Breakdown", icon: "🦾", iconImg: "assets/pokemon-images/icons/mewtwo-icon.webp" }] } },
  { id: 42, title: "GO Fest 2026: Copenhagen", type: "GO Fest", url: "https://pokemongo.com/en/gofest/copenhagen", iconImg: "assets/pokemon-images/GO-Fest/gofest-2026-copenhagen.webp", updated: "2026-05-25", lastUpdated: "May 25, 2026 at 11:00 PM", startsAt: "2026-06-12T18:00:00+02:00", endsAt: "2026-06-14T18:00:00+02:00", date: "2026-06-12", endDate: "2026-06-14", time: "Park Sessions · Citywide Jun 11–14 (9 AM – 6 PM CEST)", color: "#00B894", icon: "🏰", featured: false, summary: "GO Fest's European stop at Fælledparken, hosted by Candela of Team Valor! Zeraora debuts via park Special Research, Mewtwo headlines citywide 5★ raids alongside Moltres and Entei, and the park finale opens a Super Mega Raid for Mega Mewtwo X & Y. Combat Breed Paldean Tauros (pure Fighting), a Team Valor–hat Pikachu, the Shiny Wash Rotom debut, and Hawaii regional Comfey round out the lineup. Last in-person GO Fest before Global on July 11–12.", details: { bosses: ["Zeraora (Mythical — Park Special Research)", "Mewtwo (5★ Raid) ✨", "Mega Mewtwo X (Super Mega Raid)", "Mega Mewtwo Y (Super Mega Raid)", "Combat Breed Paldean Tauros (3★ Raid) ✨", "Pikachu wearing Team Valor hat (Park) ✨", "Wash Rotom (Shiny debut) ✨", "Moltres (5★ Raid) ✨", "Entei (5★ Raid) ✨", "Primal Kyogre (Primal Raid) ✨", "Primal Groudon (Primal Raid) ✨", "Shadow Moltres (5★ Shadow Raid) ✨", "Shadow Entei (5★ Shadow Raid) ✨", "Shadow Kyogre (5★ Shadow Raid) ✨", "Shadow Groudon (5★ Shadow Raid) ✨", "Charmander wearing a Pikachu visor (Park)", "Caterpie wearing a Poké Ball hat (Park)", "Alolan Meowth ✨ (Park)", "Ponyta ✨ (Park)", "Alolan Marowak ✨ (Park)", "Scyther (Park)", "Flareon ✨ (Park)", "Unown — all forms ✨ (Park)", "Nosepass ✨ (Park)", "Bagon ✨ (Park)", "Mudbray ✨ (Park)", "Comfey (Park)", "Dhelmise (Park)", "Charcadet (Park)", "Rockruff (Park — rare)"], bonuses: ["Park Session: Thursday June 11 – Sunday June 14, 2026 (specific times per ticket)", "Citywide gameplay bonuses 9:00 AM – 6:00 PM CEST, June 11–14", "Hosted by Candela, leader of Team Valor", "Park Experience — 4 skill-based Zones: Recruitment (Raids, Team info, PvP Battle Ground), Conservatory (variety of wild encounters), Cultivation (event Field Research, Special Eggs, increased incubator effectiveness), and Team GO Rocket's Hideout (Shadow Raids & Rocket battles)", "Super Mega Raid in the final 30 minutes of the park session — 1,000+ Trainers battle Mega Mewtwo X & Y together (caught Mewtwo unlocks Mega Level 1, chance at Level 2 or 3)", "Citywide Timed Research across 4 City Districts — visit at least 2 to earn the Pokémon GO Expert medal", "Bonus Timed Research (after 2+ Trainer Challenges): choose Mega Mewtwo X or Mega Mewtwo Y at Mega Level 1", "Timed Research can be completed any time until 11:59 PM Sunday June 14, 2026 (local time)", "Up to 9 daily Raid Passes from spinning Gym Photo Discs (up to 18 with the Raid Lover add-on)", "Up to 6 Special Trades per day", "1/2 Stardust cost for all trades", "1/2 Egg Hatch Distance", "Special Eggs & increased incubator effectiveness", "2× Hatch Candy", "2× Hatch Stardust", "Open up to 50 Gifts each ticketed citywide gameplay day", "Increased chance of catching Pokémon with a Premier Ball", "Ticketed citywide days (9 AM – 6 PM CEST): event-themed stickers, 2-hour Lure Modules & Incense, 2× Catch Candy, hourly event-themed Field Research, more Party Play time, and increased Shiny chance"], tips: ["Zeraora (Mythical) comes from the park Special Research included with your ticket — one encounter per Trainer; extras award Zeraora Candy. The research is non-expiring.", "Combat Breed Paldean Tauros (pure Fighting) appears in 3★ raids in Copenhagen — only ticket-holders can find its Shiny, and non-ticket raid catches lose the GO Fest background.", "Don't leave early: the last 30 minutes of your park session opens the Super Mega Raid for Mega Mewtwo X & Y (Mega Level 1 unlocked, chance at Level 2 or 3).", "Complete at least 2 of the 4 City District challenges to earn the GO Expert medal AND unlock the Bonus Timed Research Mega Mewtwo X/Y choice.", "Shiny Wash Rotom makes its in-person debut — check your Rotom encounters.", "Comfey (normally a Hawaii regional) appears in the wild at all three 2026 GO Fest cities — note Shiny Comfey is NOT yet released.", "Rockruff is a rare park spawn — grab it if you see one; it evolves into Lycanroc Day/Dusk/Night based on time of evolution.", "The City Explorer Pass is citywide-only (no Fælledparken park session) — buying it means you can't also get a Park Experience ticket.", "Last in-person GO Fest of 2026 — next is the Global event July 11–12.", "Merchandise is preorder-only and must be picked up at the park on your ticketed day."], relatedNews: [{ id: 13, label: "Mega Mewtwo X & Y — Full Breakdown", icon: "🦾", iconImg: "assets/pokemon-images/icons/mewtwo-icon.webp" }] } },
  { id: 43, title: "GO Fest 2026: Global", type: "GO Fest", url: "https://pokemongo.com/gofest/global", iconImg: "assets/pokemon-images/GO-Fest/gofest-2026-global.webp", wideIcon: true, published: "2026-04-28", updated: "2026-05-25", startsAt: "2026-07-11T10:00:00-07:00", endsAt: "2026-07-12T19:00:00", date: "2026-07-11", endDate: "2026-07-12", time: "10:00 AM – 7:00 PM Local", color: "#6C5CE7", icon: "\uD83C\uDF0D", featured: true, summary: "FREE for all Trainers worldwide! Zeraora debuts via non-expiring Special Research. Mega Mewtwo X (Saturday) and Mega Mewtwo Y (Sunday) debut in Super Mega Raid Battles. Hourly habitat rotations cycle through all 18 types, plus team-hat Pikachu, Pikachu-visor starters, and Incense-exclusive Unown, Tropius, and Bouffalant.", details: { bosses: ["Zeraora (Mythical debut — Special Research)", "Mega Mewtwo X (Saturday Super Mega Raid debut)", "Mega Mewtwo Y (Sunday Super Mega Raid debut)", "Pikachu wearing Team Instinct hat", "Pikachu wearing Team Mystic hat", "Pikachu wearing Team Valor hat", "Bulbasaur wearing Pikachu visor (evolves)", "Charmander wearing Pikachu visor (evolves)", "Squirtle wearing Pikachu visor (evolves)", "Unown — all forms (Incense)", "Tropius ✨ (Incense)", "Bouffalant ✨ (Incense)"], bonuses: ["FREE for all Trainers logged in during the event weekend", "Event Hours (10 AM – 7 PM): Hourly habitat rotations across all 18 types", "10 AM – 1 PM: Stormfire Peaks (Ice / Electric / Fire) & Earthforged Domain (Ground / Steel / Normal)", "1 PM – 4 PM: Astral Tides (Psychic / Ghost / Water) & Verdant Anomaly (Poison / Bug / Grass)", "4 PM – 7 PM: Dragonflight Summit (Flying / Rock / Dragon) & Twilight Battlefield (Dark / Fairy / Fighting)", "Lure Modules last 1 hour during event hours", "Increased chance of encountering Shiny Pokémon during event hours", "Party Play active for the full 9 hours each day", "Hourly type-themed Field Research refreshes with the featured type", "Full Day (12 AM – 11:59 PM): Up to 9 free Raid Passes daily", "Up to 6 Special Trades daily", "1/2 Stardust cost for trades", "Open up to 50 Gifts daily"], bonusGroups: { hero: "FREE for all Trainers logged in during the event weekend", habitatSchedule: [{ time: "10 AM – 1 PM", biomes: [{ name: "Stormfire Peaks", types: ["Ice","Electric","Fire"] }, { name: "Earthforged Domain", types: ["Ground","Steel","Normal"] }] }, { time: "1 PM – 4 PM", biomes: [{ name: "Astral Tides", types: ["Psychic","Ghost","Water"] }, { name: "Verdant Anomaly", types: ["Poison","Bug","Grass"] }] }, { time: "4 PM – 7 PM", biomes: [{ name: "Dragonflight Summit", types: ["Flying","Rock","Dragon"] }, { name: "Twilight Battlefield", types: ["Dark","Fairy","Fighting"] }] }], eventHours: { label: "Event Hours (10 AM – 7 PM)", items: ["Lure Modules last 1 hour", "Increased chance of encountering Shiny Pokémon", "Party Play active for the full 9 hours each day", "Hourly type-themed Field Research refreshes with the featured type"] }, fullDay: { label: "Full Day (12 AM – 11:59 PM)", items: ["Up to 9 free Raid Passes daily", "Up to 6 Special Trades daily", "1/2 Stardust cost for trades", "Open up to 50 Gifts daily"] } }, saturdayRaids: { label: "Saturday, July 11 — The following Pokémon will appear in raids!", megaRaids: ["Mega Ampharos (Mega)", "Mega Blaziken (Mega)", "Mega Abomasnow (Mega)", "Mega Alakazam (Mega)", "Mega Gengar (Mega)", "Mega Swampert (Mega)", "Mega Pidgeot (Mega)", "Mega Aerodactyl (Mega)", "Mega Salamence (Mega)"], fiveStarRaids: ["Articuno (5★ Raid)", "Zapdos (5★ Raid)", "Moltres (5★ Raid)", "Raikou (5★ Raid)", "Entei (5★ Raid)", "Suicune (5★ Raid)", "Lugia (5★ Raid)", "Kyogre (5★ Raid)", "Groudon (5★ Raid)", "Rayquaza (5★ Raid)", "Uxie (5★ Raid)", "Mesprit (5★ Raid)", "Azelf (5★ Raid)", "Dialga (5★ Raid)", "Palkia (5★ Raid)", "Reshiram (5★ Raid)", "Zekrom (5★ Raid)", "Kyurem (5★ Raid)", "Xerneas (5★ Raid)", "Yveltal (5★ Raid)", "Solgaleo (5★ Raid)", "Lunala (5★ Raid)", "Ho-Oh (5★ Raid)", "Giratina (Altered Forme) (5★ Raid)", "Origin Giratina (5★ Raid)"], note: "Uxie, Mesprit, and Azelf will appear more frequently in raids in their respective regions." }, sundayRaids: { label: "Sunday, July 12 — The following Pokémon will appear in raids!", megaRaids: ["Mega Metagross (Mega)", "Mega Garchomp (Mega)", "Mega Audino (Mega)", /* "Mega Heracross (Mega)", */ "Mega Beedrill (Mega)", "Mega Pinsir (Mega)", "Mega Sceptile (Mega)", "Mega Tyranitar (Mega)", "Mega Gardevoir (Mega)", "Mega Lucario (Mega)"], fiveStarRaids: ["Regirock (5★ Raid)", "Regice (5★ Raid)", "Registeel (5★ Raid)", "Latias (5★ Raid)", "Latios (5★ Raid)", "Heatran (5★ Raid)", "Regigigas (5★ Raid)", "Cresselia (5★ Raid)", "Darkrai (5★ Raid)", "Cobalion (5★ Raid)", "Terrakion (5★ Raid)", "Virizion (5★ Raid)", "Genesect (5★ Raid)", "Nihilego (5★ Raid)", "Buzzwole (5★ Raid)", "Pheromosa (5★ Raid)", "Xurkitree (5★ Raid)", "Celesteela (5★ Raid)", "Kartana (5★ Raid)", "Guzzlord (5★ Raid)", "Necrozma (5★ Raid)", "Stakataka (5★ Raid)", "Blacephalon (5★ Raid)", "Regieleki (5★ Raid)", "Regidrago (5★ Raid)", "Dialga (Origin Forme) (5★ Raid)", "Palkia (Origin Forme) (5★ Raid)", "Tornadus (Incarnate Forme) (5★ Raid)", "Tornadus (Therian Forme) (5★ Raid)", "Thundurus (Incarnate Forme) (5★ Raid)", "Thundurus (Therian Forme) (5★ Raid)", "Landorus (Incarnate Forme) (5★ Raid)", "Landorus (Therian Forme) (5★ Raid)", "Enamorus (Incarnate Forme) (5★ Raid)", "Enamorus (Therian Forme) (5★ Raid)", "Normal Forme Deoxys (5★ Raid)", "Attack Forme Deoxys (5★ Raid)", "Defense Forme Deoxys (5★ Raid)", "Speed Forme Deoxys (5★ Raid)", "Douse Drive Genesect (5★ Raid)", "Shock Drive Genesect (5★ Raid)", "Burn Drive Genesect (5★ Raid)", "Chill Drive Genesect (5★ Raid)", "Tapu Koko ✨ (5★ Raid)", "Tapu Lele ✨ (5★ Raid)", "Tapu Bulu ✨ (5★ Raid)", "Tapu Fini ✨ (5★ Raid)", "Zacian (Hero of Many Battles) (5★ Raid)", "Zamazenta (Hero of Many Battles) (5★ Raid)"] }, tips: ["Zeraora is available globally for the first time — the Special Research is non-expiring, so no rush.", "Timed Research has a branching choice between Mega Mewtwo X or Mega Mewtwo Y — pick wisely, you can't get both from research.", "Mewtwo caught from Super Mega Raid Battles starts at Mega Level 1, with chances at Level 2 or 3.", "Saturday raids feature Mega Mewtwo X; Sunday features Mega Mewtwo Y — plan your raid days.", "Costumed Bulbasaur, Charmander, and Squirtle CAN evolve — keep your favorite IVs.", "Use Incense during off-peak hours to maximize Unown, Tropius, and Bouffalant encounters.", "All 18 types are featured across the day — there's a 9-hour spawn window for every type.", "Event runs 10:00 AM – 7:00 PM local time both Saturday July 11 and Sunday July 12, 2026."], relatedNews: [{ id: 13, label: "Mega Mewtwo X & Y — Full Breakdown", icon: "🦾", iconImg: "assets/pokemon-images/icons/mewtwo-icon.webp" }] } },
  { id: 64, title: "Spring Marathon 2026", type: "Event", url: "https://pokemongo.com/news/spring-marathon-2026", date: "2026-05-12", endDate: "2026-05-18", time: "10:00 AM – 8:00 PM", color: "#F093B0", icon: "🌸", iconImg: "assets/pokemon-images/National-Event-Costume-Dex/regular/Gen-1_Kanto/0025_f3341.webp", featured: true, summary: "Flittle and Espathra debut from Paldea! Pikachu wearing a marathon visor appears with Shiny chance. 5 km Eggs feature flower crown Pichu, Togepi, and Happiny.", details: { bosses: ["Flittle (debut)", "Espathra (evolve Flittle with 50 Candy)", "Pikachu wearing a marathon visor (debut) ✨", "Eevee with flower crown (Field Research)", "Buneary with flower crown (Field Research) ✨"], eggLabel: "5 km Eggs", eggs: ["Pichu with flower crown ✨", "Togepi with flower crown ✨", "Happiny with flower crown ✨", "Flittle"], bonuses: ["Free Timed Research rewards 21,000 XP and an encounter with Pikachu wearing a marathon visor", "Timed Research expires May 18, 2026 at 8:00 PM local time", "Event-themed Field Research with costumed encounters", "GO Pass and GO Pass Deluxe rewards available"], milestones: [{ tier: "Tier 1", bonus: "2× XP for spinning a PokéStop", deluxe: "3× XP for spinning a PokéStop" }, { tier: "Tier 2", bonus: "1/2 Egg Hatch Distance when Eggs are placed in an Incubator during the event period" }], goPass: { free: ["Tier 1: 2× XP for spinning a PokéStop", "Tier 2: 1/2 Egg Hatch Distance for Eggs incubated during the event", "Marathon-themed milestone encounters"], deluxe: { price: "$4.99", rewards: ["Tier 1: 3× XP for spinning a PokéStop (upgraded)", "Upgraded milestone rewards", "Faster progression through ranks"] }, deluxePlus: { price: "$6.99", rewards: ["Everything in GO Pass Deluxe", "Instantly skip 6 ranks"] } }, tips: ["Flittle and Espathra make their Pokémon GO debut — check every spawn.", "Evolve Flittle with 50 Candy to get Espathra.", "Pikachu wearing a marathon visor can be Shiny — take every Timed Research encounter.", "Stack the 1/2 Egg Hatch Distance milestone with Super Incubators on 5 km Eggs.", "Flower crown Pichu, Togepi, and Happiny are all Shiny eligible from 5 km Eggs.", "Timed Research expires May 18 at 8 PM local — complete it before then."] } },
  { id: 81, title: "5★ Raid: Reshiram", type: "Raid", date: "2026-06-03", endDate: "2026-06-09", published: "2026-05-27", time: "Raid Hour: Wed Jun 3, 6–7 PM", color: "#E74C3C", icon: "🔥", iconImg: "assets/pokemon-images/National-Dex/regular/Gen-5_Unova/0643.webp", featured: false, summary: "Reshiram opens June's 5-Star Raid rotation. Dragon/Fire-type Vast White Pokémon. Mega Audino in Mega Raids. Shadow Dialga in Shadow Raids all month.", details: { bosses: ["Reshiram ✨ (5★ Raid)", "Mega Audino ✨ (Mega)", "Shadow Dialga ✨ (5★ Shadow Raid)"], groupSize: [{ bossName: "Reshiram", tier: "5-Star Raid", minimum: 2, optimalMin: 3, optimalMax: 5, easyAt: 6, greenAt: 6 }, { bossName: "Mega Audino", tier: "Mega Raid", minimum: 3, optimalMin: 4, optimalMax: 7, easyAt: 8, greenAt: 8 }, { bossName: "Shadow Dialga", tier: "5★ Shadow Raid", minimum: 4, optimalMin: 5, optimalMax: 9, easyAt: 10, greenAt: 10 }], bonuses: ["Raid Hour: Wednesday June 3, 6–7 PM local", "Mega Audino in Mega Raids", "Shadow Dialga in 5★ Shadow Raids throughout June"], tips: ["Reshiram is weak to Rock, Dragon, and Ground.", "Top counters: Mega Garchomp, Mega Rayquaza, Shadow Salamence, Shadow Tyranitar, Rampardos.", "Shiny Reshiram is available — check every encounter.", "Mega Audino is Normal/Fairy — a strong defensive Mega; weak to Steel and Poison.", "Shadow Dialga (Steel/Dragon) runs all month — bring Purified Gems."] } },
  { id: 82, title: "5★ Raid: Zekrom", type: "Raid", date: "2026-06-10", endDate: "2026-06-16", published: "2026-05-27", time: "Raid Hour: Wed Jun 10, 6–7 PM", color: "#34495E", icon: "⚡", iconImg: "assets/pokemon-images/National-Dex/regular/Gen-5_Unova/0644.webp", featured: false, summary: "Zekrom takes over 5-Star Raids — Dragon/Electric Deep Black Pokémon. Mega Lopunny in Mega Raids. Shadow Dialga continues all month.", details: { bosses: ["Zekrom ✨ (5★ Raid)", "Mega Lopunny ✨ (Mega)", "Shadow Dialga ✨ (5★ Shadow Raid)"], groupSize: [{ bossName: "Zekrom", tier: "5-Star Raid", minimum: 2, optimalMin: 3, optimalMax: 5, easyAt: 6, greenAt: 6 }, { bossName: "Mega Lopunny", tier: "Mega Raid", minimum: 2, optimalMin: 4, optimalMax: 6, easyAt: 7, greenAt: 7 }, { bossName: "Shadow Dialga", tier: "5★ Shadow Raid", minimum: 4, optimalMin: 5, optimalMax: 9, easyAt: 10, greenAt: 10 }], bonuses: ["Raid Hour: Wednesday June 10, 6–7 PM local", "Mega Lopunny in Mega Raids", "Shadow Dialga continues in 5★ Shadow Raids"], tips: ["Zekrom is weak to Dragon, Ground, Fairy, and Ice.", "Top counters: Mega Rayquaza, Mega Garchomp, Shadow Salamence, Mega Gardevoir, Origin Palkia.", "Shiny Zekrom is available.", "Mega Lopunny is Normal/Fighting — a top Fighting attacker for raids; weak to Flying, Psychic, Fairy."] } },
  { id: 83, title: "5★ Raid: Necrozma", type: "Raid", date: "2026-06-17", endDate: "2026-06-23", published: "2026-05-27", time: "Raid Hour: Wed Jun 17, 6–7 PM", color: "#2C3E50", icon: "🌌", iconImg: "assets/pokemon-images/National-Dex/regular/Gen-7_Alola/0800.webp", featured: true, summary: "Necrozma debuts in 5-Star Raids — the Prism Pokémon. Catch enough now to fuse with Solgaleo (Dusk Mane) or Lunala (Dawn Wings). Mega Scizor in Mega Raids.", details: { bosses: ["Necrozma ✨ (5★ Raid)", "Mega Scizor ✨ (Mega)", "Shadow Dialga ✨ (5★ Shadow Raid)"], groupSize: [{ bossName: "Necrozma", tier: "5-Star Raid", minimum: 2, optimalMin: 3, optimalMax: 5, easyAt: 6, greenAt: 6 }, { bossName: "Mega Scizor", tier: "Mega Raid", minimum: 2, optimalMin: 3, optimalMax: 5, easyAt: 6, greenAt: 6 }, { bossName: "Shadow Dialga", tier: "5★ Shadow Raid", minimum: 4, optimalMin: 5, optimalMax: 9, easyAt: 10, greenAt: 10 }], bonuses: ["Raid Hour: Wednesday June 17, 6–7 PM local", "Mega Scizor in Mega Raids", "Shadow Dialga continues in 5★ Shadow Raids"], tips: ["Necrozma is Psychic-type — weak to Bug, Ghost, and Dark.", "Top counters: Mega Gengar, Shadow Tyranitar, Shadow Chandelure, Shadow Darkrai, Mega Houndoom.", "Shiny Necrozma is available — top priority catch this month.", "Bank Necrozma candy to fuse with Solgaleo (Dusk Mane) or Lunala (Dawn Wings) later.", "Mega Scizor (Bug/Steel) is a meta Bug attacker with Fury Cutter + X-Scissor."] } },
  { id: 84, title: "5★ Raid: Celesteela & Kartana", type: "Raid", date: "2026-06-24", endDate: "2026-06-30", published: "2026-05-27", time: "Raid Hour: Wed Jun 24, 6–7 PM", color: "#8E44AD", icon: "🌐", iconImg: "assets/pokemon-images/National-Dex/regular/Gen-7_Alola/0798.webp", featured: true, summary: "Hemisphere split! Celesteela (Steel/Flying) headlines 5-Star Raids in the Southern Hemisphere while Kartana (Grass/Steel) takes the Northern Hemisphere. Mega Pidgeot in Mega Raids. Mega Raid Day on Saturday June 27.", details: { bosses: ["Celesteela (Southern Hemisphere) ✨ (5★ Raid)", "Kartana (Northern Hemisphere) ✨ (5★ Raid)", "Mega Pidgeot ✨ (Mega)", "Shadow Dialga ✨ (5★ Shadow Raid)"], groupSize: [{ bossName: "Celesteela", tier: "5-Star Raid", minimum: 2, optimalMin: 3, optimalMax: 5, easyAt: 6, greenAt: 6 }, { bossName: "Kartana", tier: "5-Star Raid", minimum: 2, optimalMin: 2, optimalMax: 4, easyAt: 5, greenAt: 5 }, { bossName: "Mega Pidgeot", tier: "Mega Raid", minimum: 2, optimalMin: 3, optimalMax: 5, easyAt: 6, greenAt: 6 }, { bossName: "Shadow Dialga", tier: "5★ Shadow Raid", minimum: 4, optimalMin: 5, optimalMax: 9, easyAt: 10, greenAt: 10 }], bonuses: ["Raid Hour: Wednesday June 24, 6–7 PM local", "Celesteela appears in 5-Star Raids in the Southern Hemisphere", "Kartana appears in 5-Star Raids in the Northern Hemisphere", "Mega Pidgeot in Mega Raids", "Mega Raid Day: Saturday June 27, 2:00–5:00 PM local", "Shadow Dialga continues in 5★ Shadow Raids"], tips: ["Hemisphere-locked — coordinate remote raids with friends in the opposite hemisphere to grab both.", "Celesteela (Steel/Flying) is weak to Fire and Electric — top counters: Mega Charizard Y, Shadow Moltres, Shadow Magnezone.", "Kartana (Grass/Steel) is weak to Fire and Fighting — top counters: Mega Charizard Y, Shadow Moltres, Shadow Reshiram.", "Both Celesteela and Kartana have Shiny releases available.", "Mega Pidgeot is Normal/Flying — strong Flying attacker; weak to Electric, Ice, Rock.", "Mega Raid Day June 27 stacks with this week's Mega Pidgeot rotation."] } },
  { id: 85, title: "Dynamax Inkay", type: "Max Battle", date: "2026-06-01", endDate: "2026-06-07", published: "2026-05-27", time: "Max Monday: 6–7 PM", color: "#8E44AD", icon: "🦑", iconImg: "assets/pokemon-images/National-Dex/regular/Gen-6_Kalos/0686.webp", featured: false, summary: "Dynamax Inkay opens June's Max Battle rotation at Power Spots.", details: { bosses: ["Dynamax Inkay ✨"], bonuses: ["Max Monday: 6–7 PM June 1", "Power Spots all week", "Shiny Inkay available"], tips: ["Inkay is Dark/Psychic — weak to Bug and Fairy.", "Inkay evolves into Malamar by holding the phone upside down when leveling up.", "Stockpile Inkay Candy for Malamar's PvP utility."] } },
  { id: 86, title: "Dynamax Electabuzz", type: "Max Battle", date: "2026-06-08", endDate: "2026-06-14", published: "2026-05-27", time: "Max Monday: 6–7 PM", color: "#F1C40F", icon: "⚡", iconImg: "assets/pokemon-images/National-Dex/regular/Gen-1_Kanto/0125.webp", featured: false, summary: "Dynamax Electabuzz featured at Power Spots — one of Forever Forward's new Dynamax debuts.", details: { bosses: ["Dynamax Electabuzz ✨"], bonuses: ["Max Monday: 6–7 PM June 8", "Power Spots all week", "Shiny Electabuzz available", "Forever Forward season Dynamax debut"], tips: ["Electabuzz evolves to Electivire — a top-tier Electric attacker.", "Bank Magnetic Lure Modules for Electabuzz spawns and Magnezone evolutions.", "Shiny Electabuzz has been available for years — still a great catch."] } },
  { id: 87, title: "Dynamax Roggenrola", type: "Max Battle", date: "2026-06-15", endDate: "2026-06-21", published: "2026-05-27", time: "Max Monday: 6–7 PM", color: "#A1887F", icon: "🪨", iconImg: "assets/pokemon-images/National-Dex/regular/Gen-5_Unova/0524.webp", featured: false, summary: "Dynamax Roggenrola at Power Spots this week.", details: { bosses: ["Dynamax Roggenrola ✨"], bonuses: ["Max Monday: 6–7 PM June 15", "Power Spots all week", "Shiny Roggenrola available"], tips: ["Roggenrola is pure Rock-type — weak to Water, Grass, Fighting, Ground, Steel.", "Evolves to Boldore (trade) → Gigalith. Build up candy for Gigalith Rock attacker.", "Shiny Roggenrola has a sparkly aqua-blue look."] } },
  { id: 88, title: "Dynamax Hoothoot", type: "Max Battle", date: "2026-06-22", endDate: "2026-06-28", published: "2026-05-27", time: "Max Monday: 6–7 PM", color: "#8D6E63", icon: "🦉", iconImg: "assets/pokemon-images/National-Dex/regular/Gen-2_Johto/0163.webp", featured: false, summary: "Dynamax Hoothoot featured at Power Spots this week.", details: { bosses: ["Dynamax Hoothoot ✨"], bonuses: ["Max Monday: 6–7 PM June 22", "Power Spots all week", "Shiny Hoothoot available"], tips: ["Hoothoot is Normal/Flying — weak to Electric, Ice, Rock.", "Evolves into Noctowl with 50 Candy.", "Take snapshots — Hoothoot's animation is great."] } },
  { id: 89, title: "Dynamax Pidove", type: "Max Battle", date: "2026-06-29", endDate: "2026-07-05", published: "2026-05-27", time: "Max Monday: 6–7 PM", color: "#B0BEC5", icon: "🕊️", iconImg: "assets/pokemon-images/National-Dex/regular/Gen-5_Unova/0519.webp", featured: false, summary: "Dynamax Pidove closes June's Max Battle rotation and carries into early July.", details: { bosses: ["Dynamax Pidove ✨"], bonuses: ["Max Monday: 6–7 PM June 29", "Power Spots all week", "Shiny Pidove available — long-overdue spotlight"], tips: ["Pidove is Normal/Flying — weak to Electric, Ice, Rock.", "Evolves into Tranquill → Unfezant; female Unfezant has a unique look.", "Shiny Pidove is a great hatch chase."] } },
  { id: 91, title: "Flying Taxi", type: "Event", date: "2026-06-23", endDate: "2026-06-29", published: "2026-05-27", time: "10:00 AM – 8:00 PM", color: "#1F8AC0", icon: "🚕", featured: true, summary: "Galar-themed Flying Taxi event takes off June 23 – 29. Travel between Routes and hubs with new themed encounters. Details to be revealed by Niantic.", details: { bosses: ["Featured Pokémon: TBA"], bonuses: ["Flying Taxi event window: June 23 – 29, 10 AM – 8 PM local time", "Sub-event 'Flying Taxi: Taken Over' overlaps June 25 – 29", "Full lineup announced closer to event start"], tips: ["Confirmed in the June Content Update — full lineup pending Niantic announcement.", "Pairs with the Mega Pidgeot rotation that same week (June 24 – 30).", "Save Routes you want to walk during the event for bonus encounters."] } },
  { id: 92, title: "Flying Taxi: Taken Over", type: "Event", date: "2026-06-25", endDate: "2026-06-29", published: "2026-05-27", time: "12:00 AM – 8:00 PM", color: "#7B68EE", icon: "🚀", iconImg: "assets/pokemon-images/icons/RocketTakeover.png", featured: true, summary: "Team GO Rocket hijacks the Flying Taxi event! Expect Shadow encounters, Super Rocket Radar, and themed Field Research. Details TBA.", details: { bosses: ["Shadow Pokémon: TBA", "Possible Shadow Legendary via Super Rocket Radar"], bonuses: ["Sub-event window: June 25 – 29", "Overlaps with the Flying Taxi main event", "Team GO Rocket more frequent at PokéStops and in balloons (expected)", "Full lineup announced closer to event start"], tips: ["Confirmed in the June Content Update — full Shadow lineup pending Niantic announcement.", "Stock up on Mysterious Components before the event for Super Rocket Radar.", "Charged TMs typically remove Frustration during Taken Over events.", "Shadow Dialga's monthly raid run continues alongside this sub-event."] } },
  { id: 90, title: "Shadow Dialga in Shadow Raids", type: "Raid", date: "2026-06-02", endDate: "2026-06-30", published: "2026-05-27", time: "All month", color: "#7B2FBE", icon: "🌑", iconImg: "assets/pokemon-images/National-Dex/regular/Gen-4_Sinnoh/0483.webp", shadowBg: true, featured: true, summary: "Shadow Dialga appears in 5★ Shadow Raids all of June. Bring Purified Gems and Steel-busting counters.", details: { bosses: ["Shadow Dialga ✨ (5★ Shadow Raid)"], groupSize: [{ bossName: "Shadow Dialga", tier: "5★ Shadow Raid", minimum: 4, optimalMin: 5, optimalMax: 9, easyAt: 10, greenAt: 10 }], bonuses: ["Available in 5★ Shadow Raids from June 2 to June 30", "Purified Gems weaken Shadow Dialga during the raid"], tips: ["Shadow Dialga is Steel/Dragon — weak to Fighting and Ground.", "Top counters: Mega Lucario, Mega Garchomp, Shadow Excadrill, Shadow Mamoswine, Shadow Groudon, Shadow Machamp.", "Bring Purified Gems early in the raid to reduce damage taken.", "Shiny Shadow Dialga is available — top priority catch.", "Defeats Mewtwo-tier raids when paired with a Dragon-typing Dawn Wings Necrozma in the future."], counters: { label: "Shadow Dialga (Steel/Dragon)", pokemon: [{ name: "Mega Lucario", fast: "Counter", charged: "Aura Sphere" }, { name: "Mega Garchomp", fast: "Mud Shot", charged: "Earth Power", chargedNote: "CD Exclusive" }, { name: "Shadow Excadrill", fast: "Mud-Slap", charged: "Earthquake" }, { name: "Shadow Mamoswine", fast: "Mud-Slap", charged: "High Horsepower" }, { name: "Shadow Groudon", fast: "Mud Shot", charged: "Precipice Blades", chargedNote: "Signature" }, { name: "Shadow Machamp", fast: "Counter", charged: "Dynamic Punch" }] } } }
];

const ANNOUNCEMENTS = [
  { id: 22, date: "2026-05-27", published: "2026-05-27", title: "GO Pass: June — Lugia & Timed Incubator Returns", tag: "News", url: "https://pokemongo.com/news/go-pass-june-2026", body: "June's GO Pass features a Lugia encounter (Shiny possible). The Timed Incubator returns as a GO Pass Deluxe reward. Deluxe ($7.99) or Deluxe + 10 Ranks ($9.99). Runs June 2 – July 7.", fullBody: "GO Pass: June runs Tuesday, June 2 at 10:00 a.m. to Tuesday, July 7 at 10:00 a.m. local time. The Timed Incubator returns as part of GO Pass Deluxe. Trainers automatically receive the free GO Pass on June 2 — rank up to earn encounters, Max Particles, and more.", sections: [
    { heading: "Event Window", items: [
      "Starts: Tuesday, June 2 at 10:00 AM local time",
      "Ends: Tuesday, July 7 at 10:00 AM local time",
      "Rewards expire: Thursday, July 9 at 10:00 AM local time"
    ] },
    { heading: "GO Pass (Free) Rewards", items: [
      { text: "Encounter with Lugia (Shiny possible) ✨", img: "assets/pokemon-images/National-Dex/regular/Gen-2_Johto/0249.webp" },
      { text: "Stardust", img: "assets/pokemon-images/Items/stardust_painted.png" },
      { text: "XP", img: "assets/pokemon-images/Items/luckyegg.png" },
      { text: "Max Particles", img: "assets/pokemon-images/Items/max-particles.png" },
      { text: "And even more goodies as you rank up", img: "assets/pokemon-images/Items/rewardsIcon.png" }
    ] },
    { heading: "GO Pass Deluxe ($7.99)", items: [
      { text: "Everything in the free track", img: "assets/pokemon-images/Items/go_pass_deluxe.webp" },
      { text: "1 Timed Incubator (returning item — expires Tuesday, July 14, 2026 at 10:00 AM local time)", img: "assets/pokemon-images/Items/EggIncubatorTimed_Activated.png" },
      { text: "1 Super Incubator", img: "assets/pokemon-images/Items/super_incubator.webp" },
      { text: "Additional Pokémon encounters", img: "assets/pokemon-images/icons/QuestPokemonReward.png" },
      { text: "And even more goodies", img: "assets/pokemon-images/Items/rewardsIcon.png" }
    ] },
    { heading: "GO Pass Deluxe + 10 Ranks ($9.99)", items: [
      { text: "Everything in GO Pass Deluxe", img: "assets/pokemon-images/Items/go_pass_deluxe.webp" },
      { text: "Auto-rank up enough GO Points to reach Rank 11 instantly", img: "assets/pokemon-images/Items/item_pass_point_01.png" }
    ] },
    { heading: "Web Store Gift with Purchase (Deluxe or Deluxe + 10 Ranks)", items: [
      { text: "10 Ultra Balls", img: "assets/pokemon-images/Items/ultraball_sprite.png" },
      { text: "5 Max Revives", img: "assets/pokemon-images/Items/Max-revive.png" },
      { text: "1 Premium Battle Pass", img: "assets/pokemon-images/Items/premium-raid-pass.png" },
      { text: "5 Max Potions", img: "assets/pokemon-images/Items/Max-potion.png" }
    ] },
    { heading: "GO Pass Deluxe: June Ultra Box (Web Store Exclusive)", items: [
      { text: "20 Ultra Balls", img: "assets/pokemon-images/Items/ultraball_sprite.png" },
      { text: "10 Max Revives", img: "assets/pokemon-images/Items/Max-revive.png" },
      { text: "10 Max Potions", img: "assets/pokemon-images/Items/Max-potion.png" },
      { text: "2 Premium Battle Passes", img: "assets/pokemon-images/Items/premium-raid-pass.png" },
      { text: "1 Incubator", img: "assets/pokemon-images/Items/EggIncubatorIAP_Activated.png" },
      { text: "1 Super Incubator", img: "assets/pokemon-images/Items/super_incubator.webp" }
    ] },
    { heading: "Tier 1 — Rank 1 Milestone", items: [
      "1 additional Candy when trading Pokémon",
      "Trainer Level 31+: 1 guaranteed Candy XL when trading Pokémon"
    ] },
    { heading: "Tier 2 — Rank 25 Milestone (Free)", items: [
      "Open up to 40 Gifts per day",
      "Receive up to 125 Gifts per day from spinning PokéStop and Gym Photo Discs",
      "Hold 10 more Gifts in your Item Bag"
    ] },
    { heading: "Tier 2 — Rank 25 Milestone (Deluxe Upgrade)", items: [
      "Open up to 50 Gifts per day",
      "Receive up to 150 Gifts per day from spinning PokéStop and Gym Photo Discs",
      "Hold up to 20 more Gifts in your Item Bag"
    ] },
    { heading: "Tier 3 — Rank 50 Milestone", items: [
      "2× Daily Adventure Incense duration"
    ] },
    { heading: "Tier 4 — Rank 75 Milestone", items: [
      "Increased XP from hatching Eggs",
      "Increased Stardust from hatching Eggs"
    ] },
    { heading: "The Timed Incubator (Deluxe Reward)", items: [
      "Expires Tuesday, July 14, 2026 at 10:00 AM local time, regardless of when you claimed it",
      "If an Egg placed in the Timed Incubator has not hatched by expiration, it transfers to a new single-use Incubator to finish incubating",
      "The replacement single-use Incubator disappears after the Egg hatches"
    ] },
    { heading: "Tips", items: [
      "Lugia is the Diving Pokémon (Psychic/Flying) — Shiny Lugia is available, so check the encounter.",
      "The Timed Incubator returns for the first time in months — Deluxe trainers should stack 7 km and 10 km Eggs to maximize use before July 14.",
      "Web Store purchases activate the Deluxe pass as soon as GO Pass begins (June 2) — you get the gift-with-purchase bundle on top.",
      "Note: unlike May's Suicune GO Pass, the June pass does NOT include PokéCoins as a rank reward — the Timed Incubator replaces them.",
      "Claim all earned rewards before Thursday, July 9 at 10:00 AM — anything unclaimed will be lost."
    ] }
  ] },
  { id: 21, date: "2026-05-27", published: "2026-05-27", title: "June Content Update — Forever Forward", tag: "News", url: "https://pokemongo.com/news/june-2026-content-update", body: "June 2026's full content rundown — Featured Necrozma, Celesteela (Southern Hemisphere) and Kartana (Northern Hemisphere). Max Battles rotate Inkay → Electabuzz → Roggenrola → Hoothoot → Pidove. 5★ Raids run Reshiram → Zekrom → Necrozma → Celesteela/Kartana. Mega Raids feature Mega Audino, Mega Lopunny, Mega Scizor, and Mega Pidgeot. Shadow Dialga returns to Shadow Raids all month, plus Community Day, Mega Raid Day, Flying Taxi, and the Team Leader Quests.", fullBody: "Pokémon GO's June 2026 Content Update launches alongside the Forever Forward Season and the game's 10th Anniversary celebrations. Necrozma is the headline 5★ raid debut for the month, with Celesteela appearing in the Southern Hemisphere and Kartana appearing in the Northern Hemisphere for the closing week. Max Battles, Mega Raids, Raid Hours, Community Day, Mega Raid Day, the Flying Taxi event, and Shadow Dialga round out a packed schedule. All times are local unless otherwise specified.", sections: [
    { heading: "Featured Pokémon", icon: "✨", showImages: true, intro: "Part of the Pokémon GO 10th Anniversary · Forever Forward Season. If you're lucky, you might encounter a Shiny one!", items: [
      { name: "Necrozma ✨ (5★ Raid)" },
      { name: "Celesteela ✨ (5★ Raid)", subtitle: "Southern Hemisphere" },
      { name: "Kartana ✨ (5★ Raid)", subtitle: "Northern Hemisphere" }
    ] },
    { heading: "Max Battles", icon: "assets/pokemon-images/dynamax.png", showImages: true, intro: "These Dynamax Pokémon may appear in Max Battles throughout Forever Forward.", items: [
      { name: "Dynamax Inkay ✨", dates: "June 1 – June 7" },
      { name: "Dynamax Electabuzz ✨", dates: "June 8 – June 14" },
      { name: "Dynamax Roggenrola ✨", dates: "June 15 – June 21" },
      { name: "Dynamax Hoothoot ✨", dates: "June 22 – June 28" },
      { name: "Dynamax Pidove ✨", dates: "June 29 – July 5" }
    ] },
    { heading: "Five-Star Raids", icon: "assets/pokemon-images/Raid-Eggs/5-star.png", showImages: true, items: [
      { name: "Reshiram ✨ (5★ Raid)", dates: "June 3 – June 9" },
      { name: "Zekrom ✨ (5★ Raid)", dates: "June 10 – June 16" },
      { name: "Necrozma ✨ (5★ Raid)", dates: "June 17 – June 23" },
      { name: "Celesteela ✨ (5★ Raid)", subtitle: "Southern Hemisphere", dates: "June 24 – June 30" },
      { name: "Kartana ✨ (5★ Raid)", subtitle: "Northern Hemisphere", dates: "June 24 – June 30" }
    ] },
    { heading: "Mega Raids", icon: "assets/pokemon-images/Raid-Eggs/mega.png", showImages: true, items: [
      { name: "Mega Audino ✨ (Mega)", dates: "June 3 – June 9" },
      { name: "Mega Lopunny ✨ (Mega)", dates: "June 10 – June 16" },
      { name: "Mega Scizor ✨ (Mega)", dates: "June 17 – June 23" },
      { name: "Mega Pidgeot ✨ (Mega)", dates: "June 24 – June 30" }
    ] },
    { heading: "Events", icon: "📅", items: [
      "Spark's Quest for Caretaking — June 2 to June 8",
      "Candela's Quest for Victory — June 9 to June 15",
      "June Community Day — June 20",
      "Flying Taxi — June 23 to June 29",
      "Flying Taxi: Taken Over — June 25 to June 29",
      "Mega Raid Day — June 27"
    ] },
    { heading: "Raid Hours (6:00 PM – 7:00 PM local time)", icon: "assets/pokemon-images/Raid-Eggs/5-star.png", showImages: true, items: [
      { name: "Reshiram ✨ (5★ Raid)", dates: "Wed, June 3" },
      { name: "Zekrom ✨ (5★ Raid)", dates: "Wed, June 10" },
      { name: "Necrozma ✨ (5★ Raid)", dates: "Wed, June 17" },
      { name: "Celesteela ✨ (5★ Raid)", subtitle: "Southern Hemisphere", dates: "Wed, June 24" },
      { name: "Kartana ✨ (5★ Raid)", subtitle: "Northern Hemisphere", dates: "Wed, June 24" }
    ] },
    { heading: "Shadow Pokémon", icon: "assets/pokemon-images/Raid-Eggs/shadow.png", showImages: true, items: [
      { name: "Shadow Dialga ✨ (5★ Shadow Raid)", dates: "June 2 – June 30" }
    ] },
    { heading: "GO Pass", icon: "🎫", items: ["Swing by the web store or in-game shop to get June's GO Pass"] },
    { heading: "Tips", icon: "💡", items: [
      "Celesteela / Kartana are hemisphere-exclusive — coordinate remote raids with friends in the opposite hemisphere to grab both.",
      "Necrozma's mid-month 5★ debut + the matching June 17 Raid Hour is the best window to catch one — stack Premium Battle Passes ahead of time.",
      "Mega Pidgeot (June 24 – 30) overlaps with Celesteela / Kartana — plan your Mega energy farming before the hemisphere split.",
      "Shadow Dialga runs the full month — Steel/Dragon counters: Mega Lucario, Mega Garchomp, Shadow Excadrill, Shadow Mamoswine; bring Purified Gems.",
      "Max Battle rotation gives Shiny Pidove a long-overdue spotlight on June 29 – July 5.",
      "All featured Pokémon can be Shiny — check every encounter."
    ] }
  ] },
  { id: 19, date: "2026-05-26", published: "2026-05-26", title: "Forever Forward Season — June 2 to September 8", tag: "News", url: "https://pokemongo.com/en/seasons/forever-forward", body: "Pokémon GO's next season runs June 2 – September 8, 2026. Mewtwo, Zeraora, and Mega Mewtwo X & Y headline GO Fest 2026. Daily Discoveries shift to Scenic Sunday, Max Monday, and Showcase Tuesday. Three Community Days (June 20 Frigibax, July 4, August 16), refreshed eggs, Research Breakthrough rotation, Dynamax debuts, and new Adventure Sync rewards.", fullBody: "The Forever Forward Season begins Tuesday, June 2, 2026 at 10:00 AM and runs through Tuesday, September 8, 2026 at 10:00 AM local time. Building on Memories in Motion, the season pushes the meta forward with the Mega Mewtwo X & Y debuts at GO Fest 2026, the global Zeraora debut, refreshed Daily Discoveries, three Community Days, and new Dynamax Pokémon at Power Spots.", sections: [{ heading: "Season Window", items: ["Starts: Tuesday, June 2, 2026 at 10:00 AM local time", "Ends: Tuesday, September 8, 2026 at 10:00 AM local time", "Season length: ~14 weeks"] }, { heading: "Featured Pokémon", items: ["Mewtwo (5★ Raids during GO Fest 2026)", "Mega Mewtwo X (Super Mega Raid debut — Saturday, July 11)", "Mega Mewtwo Y (Super Mega Raid debut — Sunday, July 12)", "Zeraora (Mythical — Global debut via Special Research at GO Fest 2026: Global)"] }, { heading: "Major Events", items: ["Pokémon GO Fest 2026: Tokyo — May 29 – June 1 (Citywide May 25 – June 1)", "Pokémon GO Fest 2026: Chicago — June 5 – 7 (Citywide June 4 – 7)", "Pokémon GO Fest 2026: Copenhagen — June 12 – 14 (Citywide June 11 – 14)", "Pokémon GO Fest 2026: Global — July 11 – 12 (FREE for all Trainers)", "Community Day: Frigibax — Saturday, June 20 (2 PM – 5 PM local)", "Community Day: July — Saturday, July 4 (TBA)", "Community Day: August — Saturday, August 16 (TBA, fan-voted)"] }, { heading: "Research Breakthrough Encounters", items: ["Dragonite ✨", "Axew ✨", "Honedge ✨", "Jangmo-o ✨", "Indeedee ✨", "Klawf"] }, { heading: "2 km Eggs", items: ["Exeggcute ✨", "Corphish ✨", "Wynaut ✨", "And more!"] }, { heading: "5 km Eggs", items: ["Riolu ✨", "Mantyke ✨", "Flittle", "And more!"] }, { heading: "7 km Eggs", items: ["Alolan Diglett ✨", "Galarian Corsola ✨", "Galarian Darumaka ✨"] }, { heading: "7 km Eggs from Mateo's Gift Exchange", items: ["Hisuian Growlithe ✨", "Hisuian Sneasel ✨", "White-Striped Form Basculin ✨", "And more!"] }, { heading: "10 km Eggs", items: ["Mawile ✨", "Absol ✨", "Frigibax ✨", "And more!"] }, { heading: "Dynamax Debuts at Power Spots", items: ["Dynamax Electabuzz", "Dynamax Magikarp", "Dynamax Feebas", "Additional Dynamax Pokémon rotate through Max Mondays", "Max Battles available 6:00 AM – 9:00 PM local time"] }, { heading: "Daily Discoveries", items: ["Scenic Sunday (NEW — replaces Double-Time Sunday) — more Pokémon on Routes, reduced Buddy Candy distance on Routes, encounter Mateo up to 3× daily", "Max Monday — frequent Power Spot refreshes, additional active Power Spots, rotating Dynamax battles", "Showcase Tuesday — enter up to 5 PokéStop Showcases", "Raid Hour Wednesdays — 6:00 PM – 7:00 PM (featured 5★ boss)", "GO Battle Thursdays — up to 10 sets daily (50 battles), 4× Stardust from wins", "Friendship Fridays — 2 Special Trades, increased Lucky chance, −10% Stardust trade cost"] }, { heading: "Adventure Sync Rewards — 5 km", items: ["Tyrogue ✨", "Sableye ✨", "Budew ✨", "And more!"] }, { heading: "Adventure Sync Rewards — 10 km", items: ["Bagon ✨", "Druddigon ✨", "Drampa ✨", "And more!"] }, { heading: "GO Pass System", items: ["Free and Deluxe GO Pass available each event", "Milestone bonuses at Ranks 1, 25, 50, 75", "Bonuses include extra Candy, increased Gift/Disc limits, extended Incense, bonus XP/Stardust"] }, { heading: "Additional Features", items: ["Themed stickers via PokéStops, Gifts, and the in-game shop", "GO Battle League: Forever Forward (separate news post — full schedule)", "Rotating Web Store boxes throughout the season", "Routes feature with Buddy Pokémon exploration"] }, { heading: "Tips", items: ["The Mega Mewtwo X & Y debuts are the headline — stockpile Mewtwo Mega Energy now (it converts to both X and Y).", "Scenic Sunday encourages Route gameplay — load up Routes with Buddies before the season starts.", "Research Breakthrough rotates through six strong shinies — claim your weekly Breakthrough every week.", "Mateo's Gift Exchange 7 km Eggs are separate from regular 7 km Eggs — keep gifting daily.", "Adventure Sync Bagon, Drampa, and Druddigon are normally rare — stack walking distance for hatch eggs.", "All three Community Days fall in summer — plan vacation time around June 20, July 4, and August 16."] }] },
  { id: 20, date: "2026-05-26", published: "2026-05-26", title: "GO Battle League: Forever Forward — Full Schedule", tag: "Update", url: "https://pokemongo.com/news/go-battle-league-forever-forward", body: "GO Battle League returns June 2 – September 8 with North American International Championships 2026 Cup, Summer/Sunshine/Retro/Master Premier/Weather/Evolution/Scroll Cups, Master League: Mega Edition, and rank-up encounters for Gabite, Lucario, Honedge, Dreepy, and Pikachu Libre.", fullBody: "The GO Battle League: Forever Forward season runs from Tuesday, June 2, 2026 at 1:00 PM PDT through Tuesday, September 8, 2026 at 1:00 PM PDT. Your rank will be reset at the start of the season. Cynthia-inspired avatar items unlock at Ranks 10, 15, 20, Ace, and Legend.", sections: [{ heading: "Weekly Schedule", items: ["Jun 2 – 9: Great League · Pokémon NAIC 2026 (Great League)", "Jun 9 – 16: Ultra League · Pokémon NAIC 2026 (Great League)", "Jun 16 – 23: Master League: Mega Edition* · Sunshine Cup: Great League Edition*", "Jun 23 – 30: All Three Leagues* · All Three Leagues*", "Jun 30 – Jul 7: Great League · Summer Cup: Great League Edition", "Jul 7 – 14: Ultra League · Fantasy Cup: Ultra League Edition", "Jul 14 – 21: Master League* · Retro Cup: Great League Edition*", "Jul 21 – 28: All Three Leagues* · All Three Leagues*", "Jul 28 – Aug 4: Great League* · Master Premier*", "Aug 4 – 11: Ultra League · Weather Cup: Great League Edition", "Aug 11 – 18: Master League* · Evolution Cup: Great League Edition*", "Aug 18 – 25: Great League · Scroll Cup: Great League Edition", "Aug 25 – Sep 1: All Three Leagues* · All Three Leagues*", "Sep 1 – 8: All Mega Editions* · All Mega Editions*", "* = 4× Stardust from win rewards (excludes end-of-set rewards)"] }, { heading: "Cup Rules", items: ["Great League cups: Pokémon at or below 1,500 CP (type/eligibility varies)", "Ultra League / Ultra League cups: 2,500 CP cap", "Master League / Master League: Mega Edition: no CP cap", "Fantasy Cup: Ultra League CP cap (2,500)", "Master Premier: no CP cap, excludes Mythical and Legendary Pokémon"] }, { heading: "Rank-Up Encounters (Once per Season)", items: ["Gabite ✨", "Lucario ✨", "Honedge ✨", "Dreepy ✨", "Pikachu Libre ✨"] }, { heading: "Seasonal Rewards", items: ["Cynthia-inspired avatar items unlock at Rank 10, Rank 15, Rank 20, Ace, and Legend", "Free Timed Research Pass — Rare Candy XL, Elite TMs, and Stardust for completing pages (100 battles or 50 wins per page)"] }, { heading: "Daily Discoveries: GO Battle Thursday", items: ["Thursdays: 4× Stardust from win rewards", "Thursdays: up to 10 sets per day (50 battles), instead of the usual 5"] }, { heading: "Tips", items: ["Save Elite TMs for Master League: Mega Edition (June 16 – 23) and the September finale.", "The Sunshine Cup is Great League-restricted — check the type restrictions before locking in a team.", "Fantasy Cup uses Ultra League CP (2,500) — check the cup-specific eligibility list before building.", "Rank 20 unlocks the Pikachu Libre encounter — it has boosted Shiny odds once per season.", "GO Battle Thursdays compound with Star Pieces — best dust day of the week."] }] },
  { id: 18, date: "2026-05-26", published: "2026-05-26", title: "Frigibax Community Day — June 20", tag: "Alert", url: "https://pokemongo.com/news/communityday-june-2026-frigibax", body: "Frigibax stars in June! 3× Catch Stardust, 2× Candy, and exclusive Glaive Rush for Baxcalibur.", fullBody: "Frigibax, the Ice Fin Pokémon, takes the spotlight on Saturday, June 20, 2026, from 2:00–5:00 PM local time:", sections: [{ heading: "Event Details", items: ["Saturday, June 20, 2:00–5:00 PM local", "Frigibax appears more frequently in the wild", "Possible Shiny encounters & Special Background variants", "Evolve Arctibax to Baxcalibur for Glaive Rush (until 9 PM)"] }, { heading: "Bonuses (2–5 PM)", items: ["3× Catch Stardust", "2× Catch Candy", "2× Candy XL chance (Level 31+)", "3-hour Incense", "Snapshot surprise"] }, { heading: "Extended (2–9 PM)", items: ["1-hour Lure Modules (attracts Frigibax)", "1 extra Special Trade (max 2 daily)", "50% less Trade Stardust"] }, { heading: "Glaive Rush (Charged Attack)", items: ["Trainer Battles: 90 power (lowers your Defense by 1 stage)", "Gyms & Raids: 105 power", "Dragon-type STAB for Baxcalibur (Dragon/Ice)"] }, { heading: "Special Research ($1.99)", items: ["3 Special Background Frigibax encounters", "Additional Frigibax encounters", "1 Premium Battle Pass", "1 Rare Candy XL", "Tickets giftable to Great Friends+"] }] },
  { id: 17, date: "2026-05-18", published: "2026-05-18", title: "Summer Quest Events 2026 — Blanche, Spark & Candela", tag: "News", url: "https://pokemongo.com/news/global-events-gofest2026-overlays", body: "Three consecutive GO Pass events from May 26 – June 15, 2026 lead into GO Fest 2026: Global. Each Team Leader hosts their own week — Blanche (research), Spark (eggs), Candela (raids) — with themed encounters, GO Pass rewards, and an Unlimited Point Weekend.", fullBody: "The Summer Quest Events 2026 series spans three back-to-back weeks (May 26 – June 15, 2026, 10 AM – 8 PM local time), with each Team Leader hosting their own themed event. The series culminates in Pokémon GO Fest 2026: Global on July 11–12.", sections: [{ heading: "Blanche's Quest for Knowledge — May 26 to June 1", items: ["Theme: Research-focused adventure (Field Research & Incense)", "Wild: Squirtle ✨, Alolan Vulpix ✨, Krabby ✨, Staryu ✨, Galarian Zigzagoon ✨; rare: Lapras ✨, Vaporeon ✨, Larvitar ✨", "Incense: Cubone ✨, Horsea ✨, Lapras ✨, Vaporeon ✨, Larvitar ✨, Sableye ✨, Clamperl ✨, Cubchoo ✨", "Field Research: Squirtle ✨, Alolan Vulpix ✨, Krabby ✨, Cubone ✨, Horsea ✨, Staryu ✨, Lapras ✨, Larvitar ✨, Sableye ✨, Cubchoo ✨, Sinistea ✨, Tandemaus ✨", "Rank 10+: +1 evolve Candy & boosted Candy XL chance (L31+)", "Rank 20+: 2× Incense duration", "Unlimited Point Weekend: May 30 – June 1", "Featured rewards: Vaporeon, Larvitar, Lapras + Blanche-themed accessory", "Reward expiration: June 3 at 7:59 PM"] }, { heading: "Spark's Caretaking Quest — June 2 to June 8", items: ["Theme: Exploration-driven adventure (hatching Eggs)", "Wild: Bulbasaur ✨, Alolan Raichu ✨, Drowzee ✨, Jolteon ✨, Dratini ✨, Houndour ✨, Lileep ✨, Combee ✨", "7 km Eggs: Pichu ✨, Elekid ✨, Shinx ✨, Varoom ✨, Galarian Corsola ✨, Hisuian Qwilfish ✨", "Field Research: Bulbasaur ✨, Drowzee ✨, Jolteon ✨, Dratini ✨, Houndour ✨, Lileep ✨, Combee ✨, Galarian Corsola ✨, Alolan Raichu ✨", "Rank 10+: 1/2 Hatch Distance", "Rank 20+: 1.5× Hatch Candy (Deluxe also adds 1.5× Hatch Stardust)", "Unlimited Point Weekend: June 6 – 8", "Featured rewards: Jolteon, Galarian Corsola, Elekid + Spark-themed accessory", "Reward expiration: June 10 at 7:59 PM"] }, { heading: "Candela's Quest for Victory — June 9 to June 15", items: ["Theme: Raids and battling — push your limits", "Wild: Charmander ✨, Mankey ✨, Hisuian Growlithe ✨, Machop ✨, Ponyta ✨, Scyther ✨, Flareon ✨, Slugma ✨, Fletchling ✨", "Raid Bosses: Hisuian Growlithe ✨, Machamp ✨, Scizor ✨, Magcargo ✨, Scraggy ✨, Honedge ✨, Rockruff ✨", "Field Research: Charmander ✨, Mankey ✨, Hisuian Growlithe ✨, Machop ✨, Scyther ✨, Flareon ✨, Slugma ✨, Scraggy ✨, Fletchling ✨, Honedge ✨, Rockruff ✨", "Rank 10+: Increased Attack bonus from friends in raids", "Rank 20+: 1.5× Raid Stardust (Deluxe also adds up to 2 Raid Passes from Photo Discs)", "Unlimited Point Weekend: June 13 – 15", "Featured rewards: Flareon, Rockruff, Ponyta + Candela-themed accessory", "Reward expiration: June 17 at 7:59 PM"] }, { heading: "GO Pass Pricing (All Three Weeks)", items: ["GO Pass Deluxe: $4.99", "GO Pass Deluxe + 6 Ranks: $6.99", "Web Store purchases include: 10 Ultra Balls, 5 Max Revives, 1 Premium Battle Pass, 5 Max Potions", "Ultra Box upgrade: 20 Ultra Balls, 10 Max Revives, 10 Max Potions, 2 Premium Battle Passes, 1 Incubator, 1 Super Incubator", "All featured Pokémon can be Shiny"] }, { heading: "GO Fest 2026: Global — July 11–12", items: ["Legendary Raid Features: Mega Mewtwo X, Mega Mewtwo Y, Zeraora", "FREE for all Trainers — Special Research and bonuses available without cost"] }, { heading: "Real-World Event Locations", items: ["Tokyo, Japan — Event Days: May 29 – June 1 (Citywide: May 25 – June 1)", "Chicago, Illinois — Event Days: June 5 – 7 (Citywide: June 4 – 7)", "Copenhagen, Denmark — Event Days: June 12 – 14 (Citywide: June 11 – 14)", "Community Ambassadors host meetups throughout each event"] }, { heading: "Tips", items: ["Three back-to-back GO Passes — plan your stamina; each week has its own grind.", "Unlimited Point Weekends are the prime time to push to Rank 20+ each week.", "Blanche week favors Incense farmers; Spark week favors hatchers; Candela week favors raiders.", "All featured Pokémon are Shiny eligible — check every encounter.", "Each week's rewards expire ~2 days after the event ends — claim promptly.", "These weekly events lead directly into the FREE GO Fest 2026: Global on July 11–12."] }] },
  { id: 13, date: "2026-04-28", published: "2026-04-28", title: "Mega Mewtwo X & Y Debut at GO Fest 2026", tag: "News", url: "https://pokemongo.com/news/mega-mewtwo-gofest-2026", body: "Mega Mewtwo X and Mega Mewtwo Y debut at GO Fest 2026 — Mega Mewtwo X in Saturday Super Mega Raids (Counter), Mega Mewtwo Y on Sunday (Psystrike). Caught Mewtwo arrive with Mega Level 1+ already unlocked.", fullBody: "Mega Mewtwo X and Mega Mewtwo Y, the Mega Evolutions of the Genetic Pokémon Mewtwo, make their Pokémon GO debuts during GO Fest 2026:", sections: [{ heading: "Super Mega Raid Debuts (GO Fest Global)", items: ["Saturday, July 11: Mega Mewtwo X — knows Counter (Fast Attack)", "Sunday, July 12: Mega Mewtwo Y — knows Psystrike (Charged Attack)", "Caught Mewtwo arrive with at least Mega Level 1 unlocked (chance at Level 2 or 3)"] }, { heading: "Mega Energy Mechanics", items: ["Mega Mewtwo X and Y require significantly more Mega Energy than other Pokémon", "Earn Mega Energy by defeating either form in Super Mega Raids", "Earn additional Mega Energy by completing GO Fest Timed Research", "Mega Level advancement tracks independently for each form (X and Y)", "Optional fast-track Mega Level progression by spending extra Mega Energy", "Existing Mewtwo Mega Energy converts to both X and Y variants — same split mechanic applied to Charizard"] }, { heading: "Branching GO Fest Timed Research", items: ["Choose between Mega Mewtwo X or Mega Mewtwo Y — you cannot get both from research", "Pick the form that fits your raid strategy and energy stockpile"] }, { heading: "In-Person GO Fest Events (City Explorer or Full GO Fest Ticket)", items: ["Tokyo: May 25 – June 1, 2026 (citywide window)", "Chicago: June 4 – June 7, 2026 (citywide window)", "Copenhagen: June 11 – June 14, 2026 (citywide window)", "Both City Explorer and full GO Fest ticket holders get early Mega Mewtwo access", "City Experience Timed Research — four branching Trainer Challenges across city districts, available on the first day of the event", "Complete at least two challenges to encounter Mega Mewtwo X or Y (Mega Level 1 pre-unlocked)", "Earn the exclusive \"Pokémon GO Expert\" commemorative medal", "Attending multiple GO Fest cities? Earn one set of Timed Research (including the bonus Timed Research) and rewards per city — up to three sets total"] }, { heading: "Park Session Finale (In-Person)", items: ["30-minute Super Mega Raid accommodating 1,000+ Trainers", "Both Mega Mewtwo X and Y available", "Caught Mewtwo receive an event-specific Location Background", "In-person captures know Counter (Fast) and Psystrike (Charged)"] }, { heading: "Tips", items: ["Stockpile Mewtwo Mega Energy now — it converts to both X and Y after the split.", "Decide your branching research choice (X or Y) based on which form you raid more.", "Mewtwo X is a Psychic / Fighting attacker; Mewtwo Y is pure Psychic with massive Attack — plan your team.", "Saturday = X, Sunday = Y in Super Mega Raids — plan your raid weekend accordingly.", "Use Party Play during GO Fest hours to chain Super Mega Raids for maximum Mega Energy."] }] },
  { id: 14, date: "2026-04-28", published: "2026-04-28", title: "GO Fest 2026: Global — FREE for All Trainers", tag: "News", url: "https://pokemongo.com/gofest/global", body: "GO Fest 2026: Global is FREE for all Trainers logged in July 11–12. Mega Mewtwo X & Y debut, Zeraora arrives via non-expiring Special Research, all 18 types featured across hourly habitats, plus 9 free Raid Passes daily.", fullBody: "Pokémon GO Fest 2026: Global runs Saturday, July 11 and Sunday, July 12, 2026, from 10:00 AM – 7:00 PM local time. For the first time, the global event is completely free — no ticket required for any trainer logged in during the event weekend.", sections: [{ heading: "Event Window", items: ["Saturday, July 11, 2026: 10:00 AM – 7:00 PM local time", "Sunday, July 12, 2026: 10:00 AM – 7:00 PM local time", "FREE for all Trainers logged in during the event weekend", "All ticket-holder exclusives available free to all logged-in players"] }, { heading: "Hourly Habitat Schedule (Both Days)", items: ["10 AM – 1 PM: Stormfire Peaks (Ice / Electric / Fire) & Earthforged Domain (Ground / Steel / Normal)", "1 PM – 4 PM: Astral Tides (Psychic / Ghost / Water) & Verdant Anomaly (Poison / Bug / Grass)", "4 PM – 7 PM: Dragonflight Summit (Flying / Rock / Dragon) & Twilight Battlefield (Dark / Fairy / Fighting)", "All 18 types featured across the day with increased spawn rates per time block"] }, { heading: "Costumed Pokémon", items: ["Pikachu wearing a Team Instinct hat ✨", "Pikachu wearing a Team Mystic hat ✨", "Pikachu wearing a Team Valor hat ✨", "Bulbasaur wearing a Pikachu visor ✨ (evolves)", "Charmander wearing a Pikachu visor ✨ (evolves)", "Squirtle wearing a Pikachu visor ✨ (evolves)"] }, { heading: "Incense Encounters", items: ["All Unown forms", "Tropius ✨", "Bouffalant ✨"] }, { heading: "Super Mega Raids", items: ["Saturday, July 11: Mega Mewtwo X (debut)", "Sunday, July 12: Mega Mewtwo Y (debut)", "Shiny Mewtwo possible from Super Mega Raids", "Caught Mewtwo arrive with at least Mega Level 1 unlocked (chance at Level 2 or 3)"] }, { heading: "Special Research — Zeraora Debut", items: ["Trainers worldwide can complete Special Research to encounter Zeraora, the Thunderclap Pokémon — a first for Pokémon GO", "Special Research does not expire — complete at your own pace", "In-person attendees received Zeraora candy instead during their event"] }, { heading: "Event Hours Bonuses (10 AM – 7 PM)", items: ["Increased Pokémon-type spawn rates per time block", "Lure Modules last 1 hour", "Incense attracts special event Pokémon", "Party Play active for the full 9 hours each day", "Elevated Shiny encounter rates", "Hourly type-themed Field Research refreshes with the featured type", "Branching Timed Research — choose between Mega Mewtwo X or Mega Mewtwo Y", "Global Challenges unlock additional bonuses and Ultra Unlock events"] }, { heading: "All-Day Bonuses (12 AM – 11:59 PM)", items: ["Up to 9 free Raid Passes daily from spinning Gym Photo Discs", "Up to 6 Special Trades permitted", "1/2 Stardust cost for trades", "Open up to 50 Gifts daily"] }, { heading: "In-Person Pre-Event Celebrations", items: ["Tokyo, Japan: May 29 – June 1, 2026", "Chicago, USA: June 5 – June 7, 2026", "Copenhagen, Denmark: June 12 – June 14, 2026", "Tickets available; in-person attendees encountered Zeraora early and received candy during the Global event"] }] },
  { id: 16, date: "2026-05-03", published: "2026-04-27", title: "Falinks Super Mega Raid Day \u2014 May 23", tag: "Update", url: "https://pokemongo.com/en/news/falinks-super-mega-raid-day-2026", body: "Mega Falinks debuts in Super Mega Raids on May 23, 2\u20135 PM local time! Up to 6 free Raid Passes, boosted Shiny odds, and a $4.99 ticket for 14 Raid Passes plus bonus XP and Stardust.", fullBody: "Falinks Super Mega Raid Day runs Saturday, May 23, 2026, from 2:00 PM \u2013 5:00 PM local time \u2014 fall in formation and ready your Link Charges as Mega Falinks makes its Super Mega Raid debut:", sections: [{ heading: "Featured Pok\u00e9mon", items: ["Mega Falinks \u2014 Super Mega Raid debut \u2728", "Increased chance of encountering Shiny Falinks"] }, { heading: "Free Bonuses", items: ["Up to 6 free Raid Passes from spinning Gym Photo Discs", "Remote Raid Pass limit increased to 20 (Fri, May 22, 5 PM \u2013 Sat, May 23, 8 PM PDT)"] }, { heading: "Paid Ticket ($4.99)", items: ["Up to 14 Raid Passes from spinning Gym Photo Discs", "Additional 5,000 XP per Super Mega Raid Battle", "Additional 5,000 Stardust per Super Mega Raid Battle", "Increased Rare Candy XL from Raid Battles", "Bonuses active during event hours only", "Available until Saturday, May 23 at 5:00 PM local time", "Non-refundable; cannot be purchased with Pok\u00e9Coins"] }, { heading: "Web Store Bundle", items: ["Falinks Super Mega Raid Day Ultra Ticket Box ($4.99): Event ticket + 1 Premium Battle Pass"] }, { heading: "Timed Research", items: ["Available during event hours \u2014 complete tasks and claim rewards before expiration", "Rewards include a Premium Battle Pass and a Mawile encounter"] }, { heading: "New Feature", items: ["Use the new web-based map at pokemongo.com/map to locate Super Mega Raids and community meetups"] }, { heading: "Tips", items: ["Falinks is a Fighting-type \u2014 weak to Flying, Psychic, and Fairy attacks", "Top counters: Mega Mewtwo Y, Mega Gardevoir, Mega Rayquaza, Mega Pidgeot, Lugia, Hoopa (Unbound)", "Coordinate with a full team \u2014 Super Mega Raids are designed for 1,000+ Trainers", "Stack a Premium Battle Pass before the event to maximize Raid Pass usage", "Shiny Falinks odds are boosted \u2014 check every encounter"] }] },
  { id: 12, date: "2026-04-24", published: "2026-04-24", title: "GO Pass: May \u2014 Suicune Encounter", tag: "News", url: "https://pokemongo.com/news/go-pass-may-2026", body: "May's GO Pass features a Suicune encounter (potentially Shiny). Deluxe ($7.99) or Deluxe + 10 Ranks ($9.99). No daily GO Point cap May 30\u201331.", fullBody: "GO Pass: May runs Tuesday, May 5 at 10:00 AM to Tuesday, June 2 at 10:00 AM local time. Rank up to earn Pok\u00e9Coins, encounters, and more:", sections: [{ heading: "Event Window", items: ["Starts: Tuesday, May 5 at 10:00 AM local time", "Ends: Tuesday, June 2 at 10:00 AM local time", "Rewards expire: Thursday, June 4 at 10:00 AM local time"] }, { heading: "GO Pass (Free) Rewards", items: ["Suicune encounter (Shiny possible) \u2728", "400 Pok\u00e9Coins total", "Stardust", "XP", "Max Particles", "And more goodies as you rank up"] }, { heading: "GO Pass Deluxe ($7.99)", items: ["1,000 additional Pok\u00e9Coins (1,400 total)", "1 Super Incubator", "Additional Pok\u00e9mon encounters", "Web Store exclusive bonus: 10 Ultra Balls, 5 Max Revives, 1 Premium Battle Pass, 5 Max Potions"] }, { heading: "GO Pass Deluxe + 10 Ranks ($9.99)", items: ["All Deluxe rewards", "Skip ahead 10 Ranks instantly"] }, { heading: "Rank 25 Milestone (Free)", items: ["Open 40 Gifts daily", "Receive 125 daily Gifts from spinning Photo Discs", "+10 Gift bag capacity"] }, { heading: "Rank 25 Milestone (Deluxe)", items: ["Open 50 Gifts daily", "Receive 150 daily Gifts from spinning", "+20 Gift bag capacity"] }, { heading: "Rank 50 Milestone", items: ["2\u00d7 Daily Adventure Incense duration"] }, { heading: "Rank 75 Milestone", items: ["Increased Stardust from Egg hatching", "Increased XP from Egg hatching"] }, { heading: "Special Event", items: ["May 30\u201331: No daily limit on GO Points earned"] }] },
  { id: 15, date: "2026-05-03", published: "2026-05-03", title: "Shadow Cresselia in Shadow Raids \u2014 May 6\u2013Jun 2", tag: "Alert", url: "https://pokemongo.com/news/shadow-cresselia-2026", body: "Shadow Cresselia takes over 5\u2605 Shadow Raids on weekends from May 6 to June 2! Shiny possible. Bring Purified Gems.", fullBody: "Shadow Cresselia, the Lunar Pok\u00e9mon, appears in 5\u2605 Shadow Raids on weekends from May 6 to June 2:", sections: [{ heading: "Featured Pok\u00e9mon", items: ["Shadow Cresselia (5\u2605 Shadow Raid) \u2728"] }, { heading: "Schedule", items: ["Weekends only \u2014 May 6 to June 2", "Leaves all raids June 2"] }, { heading: "Tips", items: ["Weak to Bug, Ghost, and Dark", "Bring Purified Gems to weaken Shadow Cresselia during the raid", "Top counters: Dawn Wings Necrozma, Mega Gengar, Mega Tyranitar, Shadow Darkrai", "Shiny Shadow Cresselia is available \u2014 check every encounter"] }] },
  { id: 11, date: "2026-04-09", published: "2026-04-09", title: "Shadow Entei Raid Day \u2014 May 2", tag: "Alert", url: "https://pokemongo.com/news/shadow-entei-raid-day-2026", body: "Shadow Entei takes over Shadow Raids on May 2! Boosted Shiny odds, up to 6 free Raid Passes, and $4.99 ticket for 14 Raid Passes + bonus rewards.", fullBody: "Shadow Entei Raid Day runs Saturday, May 2, from 2:00 PM \u2013 5:00 PM local time:", sections: [{ heading: "Featured Pok\u00E9mon", items: ["Shadow Entei \u2014 the Volcano Pok\u00E9mon in Shadow Raids"] }, { heading: "Free Bonuses", items: ["Up to 6 free Raid Passes from spinning Gym Photo Discs", "Increased chance of encountering Shiny Entei from Shadow Raids", "Remote Raid limit increased to 20 (May 1 5 PM \u2013 May 2 8 PM PDT)"] }, { heading: "Paid Ticket ($4.99)", items: ["Up to 14 Raid Passes from spinning Gym Photo Discs", "50% more XP from Raid Battles", "2\u00D7 Stardust from Raid Battles", "Increased chance of Rare Candy XL from Raid Battles", "Tickets giftable to Great Friends or higher", "Purchases are non-refundable, cannot be bought with Pok\u00E9Coins"] }, { heading: "Web Store Bundle", items: ["Shadow Entei Raid Day Ultra Ticket Box ($4.99): Event ticket + 1 Premium Battle Pass"] }] },
  { id: 9, date: "2026-04-08", published: "2026-04-08", title: "Pokémon GO × MLB Collaboration Returns", tag: "News", url: "https://pokemongo.com/news/mlb-2026", body: "The Pokémon GO and Major League Baseball collaboration returns for the 2026 season! Exclusive avatar items, Timed Research, and themed games at ballparks.", fullBody: "The Pokémon GO × MLB collaboration is back for the 2026 season. Visit ballparks for exclusive items, research, and encounters:", sections: [{ heading: "Avatar Items", items: ["Exclusive home team caps available at ballpark PokéStops", "Available Apr 22, 2026, 1:00 PM PDT – Sep 30, 2026"] }, { heading: "Raids & Lure Encounters", items: ["Pikachu in 1-Star Raids (Shiny possible, Location Background variants)", "Lure Module attractions: Abra, Machop, Cubone", "Rare: Snorlax, Passimian (Shiny possible)"] }, { heading: "Research", items: ["Timed Research during themed games — Stardust, XP, Lure Modules, encounters", "Timed Research expires Sep 30, 2026, 8:00 PM local time", "Field Research at ballpark PokéStops — Stardust, Ultra Balls"] }, { heading: "Themed Game Dates", items: ["Jun 17: Milwaukee Brewers", "Jul 2: Cleveland Guardians", "Jul 8: Chicago White Sox", "Aug 4: Baltimore Orioles", "Aug 7: Miami Marlins", "Aug 11: Arizona Diamondbacks", "Aug 22: Texas Rangers", "Aug 30: Washington Nationals", "Sep 13: Tampa Bay Rays", "Sep 22: Seattle Mariners", "Sep 25: Boston Red Sox", "TBA: New York Mets, San Francisco Giants"] }, { heading: "Merchandise", items: ["Team-branded items featuring Instinct, Mystic, and Valor themes at select clubs"] }] },
  { id: 8, date: "2026-04-07", published: "2026-04-07", title: "Steeled Resolve \u2014 Apr 28\u2013May 4", tag: "Alert", url: "https://pokemongo.com/news/steeled-resolve-2026", body: "Orthworm debuts! Steel-type event with Shiny Meltan from Mystery Boxes, GO Pass milestones, and Taken Over sub-event starting April 30.", fullBody: "Steeled Resolve runs April 28 \u2013 May 4, 10 AM \u2013 8 PM local time:", sections: [{ heading: "Debut", items: ["Orthworm makes its Pok\u00E9mon GO debut"] }, { heading: "Wild Encounters", items: ["Magnemite \u2728", "Aron \u2728", "Ferroseed \u2728", "Pawniard \u2728"] }, { heading: "Field Research", items: ["Magnemite \u2728", "Pineco \u2728", "Nosepass \u2728", "Bronzor \u2728", "Drilbur \u2728", "Ferroseed \u2728", "Beldum \u2728 (rare)", "Shieldon \u2728 (rare)"] }, { heading: "Raids", items: ["1\u2605: Honedge \u2728, Shieldon \u2728, Beldum \u2728", "3\u2605: Orthworm \u2728"] }, { heading: "Mystery Box", items: ["Shiny Meltan available during event", "Reduced Mystery Box cooldown timer"] }, { heading: "Major Milestone Bonuses", items: ["Tier 1: 2\u00D7 Catch Candy", "Tier 2: Increased Stardust from Team GO Rocket defeats"] }, { heading: "GO Pass", items: ["Free: Beldum, Pawniard, Honedge, Meltan encounters + 1 Super Rocket Radar", "Deluxe ($4.99): Extra encounters, 2 Super Rocket Radars, upgraded milestones", "Deluxe + 6 Ranks ($6.99): Skip to Rank 7 + Web Store bundle", "No daily GO Point cap May 2\u20134"] }] },
  { id: 7, date: "2026-04-07", published: "2026-04-07", title: "Steeled Resolve: Taken Over \u2014 Apr 30\u2013May 4", tag: "Alert", url: "https://pokemongo.com/news/steeled-resolve-taken-over-2026", body: "Team GO Rocket takes over! Shadow Incarnate Forme Landorus, Shiny Varoom debut in 12 km Eggs, and Frustration removal with Charged TMs.", fullBody: "The Taken Over sub-event runs April 30 \u2013 May 4 during Steeled Resolve:", sections: [{ heading: "Shadow Pok\u00E9mon", items: ["Shadow Incarnate Forme Landorus via Super Rocket Radar", "Shadow Helioptile \u2728", "Shadow Dewpider \u2728", "Shadow Morelull \u2728", "Shadow Stufful \u2728"] }, { heading: "New & Notable", items: ["Shiny Varoom debuts in 12 km Eggs", "Charged TM removes Frustration from Shadow Pok\u00E9mon", "Shadow Raids (1\u2605 & 3\u2605) have wider variance of Attack, Defense, and HP"] }, { heading: "Event Bonuses", items: ["Team GO Rocket more frequent at Pok\u00E9Stops and in balloons", "Field Research rewards Fast TMs, Charged TMs, Mysterious Components", "No daily GO Point cap May 2\u20134"] }, { heading: "GO Pass", items: ["Free GO Pass available April 28 at 10 AM", "1 Super Rocket Radar (free) / 2 Super Rocket Radars (Deluxe $4.99)", "Deluxe Plus ($6.99): Skip to Rank 7 + Web Store bundle"] }] },
  { id: 1, date: "2026-03-28", published: "2026-03-03", title: "April Raid Schedule Confirmed", tag: "Update", url: "https://pokemongo.com/news/welcome-to-memories-in-motion", body: "5-Star Raids: Regidrago → Kyogre → Groudon → Tapu Koko → Tapu Lele. Shadow Latios weekends through May 5.", fullBody: "The full April 2026 raid rotation has been confirmed:", sections: [{ heading: "5-Star Raid Bosses", items: ["Apr 1–7: Regidrago", "Apr 8–14: Kyogre", "Apr 15–21: Groudon", "Apr 22–28: Tapu Koko", "Apr 29–May 5: Tapu Lele"] }, { heading: "Mega Raid Bosses", items: ["Apr 1–7: Mega Manectric", "Apr 8–14: Mega Aerodactyl", "Apr 15–21: Mega Alakazam", "Apr 22–28: Mega Sharpedo", "Apr 29–May 5: Mega Banette"] }, { heading: "Shadow Raids", items: ["Shadow Latios every weekend Apr 1 – May 5", "Bring Purified Gems"] }, { heading: "Raid Hours (Wed 6–7 PM)", items: ["Each Wednesday features that week's 5-Star boss"] }] },
  { id: 2, date: "2026-03-27", published: "2026-03-31", title: "GO Pass: April — Lucky Trinket Returns", tag: "News", url: "https://pokemongo.com/news/go-pass-april-2026", body: "April's GO Pass Deluxe includes the Lucky Trinket — instantly become Lucky Friends with any Great Friend or higher.", fullBody: "The April 2026 GO Pass is packed with rewards:", sections: [{ heading: "GO Pass (Free)", items: ["Available April 7 at 10 AM", "Rank up for Entei encounters", "Active until May 5", "May 2–3: No daily GO Points limit!"] }, { heading: "GO Pass Deluxe (Paid)", items: ["Lucky Trinket — instantly Lucky Friends with any Great Friend+", "Expires May 12", "Available on the Web Store"] }] },
  { id: 3, date: "2026-03-25", published: "2026-03-16", title: "Tinkatink Community Day — April 11", tag: "Alert", url: "https://pokemongo.com/news/communityday-april-2026-tinkatink", body: "3× Catch Stardust, 2× Candy, and exclusive Gigaton Hammer for Tinkaton.", fullBody: "Full breakdown:", sections: [{ heading: "Event Details", items: ["Saturday, April 11, 2:00–5:00 PM local", "Boosted Shiny Tinkatink", "Evolve for Gigaton Hammer (until 9 PM)"] }, { heading: "Bonuses (2–5 PM)", items: ["3× Catch Stardust", "2× Catch Candy", "2× Candy XL chance", "3-hour Incense"] }, { heading: "Extended (2–9 PM)", items: ["1-hour Lure Modules", "1 extra Special Trade", "50% less Trade Stardust"] }] },
  // { id: 4, date: "2026-03-23", title: "GO Bigger Replay Datamined for April 25", tag: "News", body: "Dataminers found Gigantamax Kanto Starters returning. New Gigantamax debuts possible.", fullBody: "The Pokémod Group datamined GO Bigger Replay:", sections: [{ heading: "What We Know", items: ["Scheduled for April 25", "Gigantamax Venusaur, Charizard, Blastoise expected", "Max Battle Day format: 2–5 PM"] }, { heading: "Unconfirmed", items: ["New Gigantamax debuts — 17 forms unreleased", "Shiny Gigantamax forms expected"] }] },
  { id: 5, date: "2026-03-21", published: "2026-03-03", title: "Spotlight Hours → Daily Discoveries", tag: "Update", url: "https://pokemongo.com/news/welcome-to-memories-in-motion", body: "Weekly Spotlight Hours ended. Daily Discoveries is the new recurring system.", fullBody: "The Memories in Motion season replaced Spotlight Hours:", sections: [{ heading: "What Changed", items: ["Weekly Tuesday Spotlight Hours removed", "Now only during specific events", "Daily Discoveries replaces them"] }, { heading: "Daily Discoveries", items: ["Double-Time Sundays — Incense/Lures last 2×", "Fast-Track Mondays — extra Power Spots", "Showcase Tuesdays — PokéStop Showcases", "GBL Thursdays — 10 sets, up to 4× Stardust", "Friendship Fridays — extra trades, Lucky boost"] }] },
  { id: 10, date: "2026-03-02", published: "2026-03-02", title: "GO Fest 2026 In-Person Ticket Options", tag: "News", url: "https://pokemongo.com/news/gofest-2026-ticket-options", body: "Full ticket breakdown for GO Fest 2026 in Tokyo, Chicago, and Copenhagen — Park & City Trainer, City Explorer, add-ons, and Premier Access.", fullBody: "Pokémon GO Fest 2026 in-person event ticket options. Trainers select a Morning or Afternoon park session; morning starts in park then transitions to citywide, afternoon begins citywide then moves to park. Two research stories per base ticket — Special Research (park) and Timed Research (citywide).", sections: [{ heading: "Park & City Trainer Tickets", items: ["Includes 1 park session (morning or afternoon) + full citywide gameplay day", "Tokyo: ¥3,500 (early bird) / ¥4,000 (general)", "Chicago: $28 (early bird) / $33 (general)", "Copenhagen: 165 kr. (early bird) / 200 kr. (general)", "Re-entry allowed throughout ticketed session"] }, { heading: "City Explorer Ticket (New)", items: ["Citywide gameplay for a single full event day — no park access", "Tokyo: ¥3,000 | Chicago: $20 | Copenhagen: 135 kr.", "Cannot purchase park experience or Premier Access"] }, { heading: "Egg-thusiast Add-On", items: ["Tokyo: ¥2,000 | Chicago: $15 | Copenhagen: 112 kr.", "1/4 egg hatch distance (non-stacking)", "3× hatch XP, 3× hatch Candy, 3× hatch Stardust", "Active every event day"] }, { heading: "Raid Lover Add-On", items: ["Tokyo: ¥2,000 | Chicago: $15 | Copenhagen: 112 kr.", "Up to 18 daily raid passes via Gym photo discs", "5,000 additional XP from raids", "6 extra Candy from 5-Star+ raids", "3 extra Candy XL from 5-Star+ raids (Level 31+)", "Active every event day"] }, { heading: "Citywide Gameplay Days Add-On", items: ["Tokyo: ¥3,000 | Chicago: $20 | Copenhagen: 135 kr. per day", "Tokyo dates: May 25–26 (pre-event), May 29–Jun 1 (official)", "Chicago dates: Jun 4 (pre-event), Jun 5–7 (official)", "Copenhagen dates: Jun 11 (pre-event), Jun 12–14 (official)", "Increased Shiny rates & Premier Ball catch rates", "Up to 6 special trades daily, 1/2 Stardust trade cost", "1/2 hatch distance, 1.5× hatch Candy & Stardust", "Up to 9 daily raid passes, 2-hour Lure & Incense", "2× Catch Candy, 50 gift openings daily"] }, { heading: "Premier Access Add-On (New)", items: ["Chicago: $100 | Copenhagen: 640 kr. (not available in Tokyo)", "Expedited pop-up store entry + Premier lounge (chargers, seating)", "Exclusive collectible item", "Voucher codes emailed by Jun 3, 2026 (expire Dec 31, 2026)", "Voucher: 100 Poké/Great/Ultra Balls, 50 Silver Pinap, 100 Super Incubators", "Voucher: 10 Lucky Eggs, 10 Incense, 10 Star Pieces, 100 Premium Battle Passes", "Voucher: 10 each Lure Module (Standard, Glacial, Magnetic, Mossy, Rainy)", "Voucher: 20 Max Particle Packs, 5 Max Mushrooms", "Limited daily — available until 9:00 AM local time while supplies last"] }, { heading: "Sales Timeline", items: ["Early bird tickets available until Mar 31, 2026 (limited supply)", "General admission: Mar 31 or when early bird sells out", "Tickets nonrefundable (subject to applicable law)", "First-come, first-served while supplies last"] }] },
  { id: 6, date: "2026-03-15", published: "2025-12-09", title: "GO Fest 2026 Tickets On Sale", tag: "Alert", url: "https://pokemongo.com/news/save-the-date-go-fest-2026", body: "Tickets for Tokyo, Chicago, Copenhagen live. $33/day. Global finale July 11–12.", fullBody: "GO Fest 2026 celebrates 10 years of Pokémon GO:", sections: [{ heading: "Tokyo — May 29–Jun 1", items: ["Odaiba Seaside Park", "Citywide from May 25", "City Exploration Tickets"] }, { heading: "Chicago — Jun 5–7", items: ["Grant Park", "Hosted by Spark", "Tickets $33"] }, { heading: "Copenhagen — Jun 12–14", items: ["Fælledparken", "Hosted by Candela", "Shiny Paldean Tauros exclusive"] }, { heading: "Global — Jul 11–12", items: ["All trainers worldwide", "Zeraora via Special Research", "One per trainer across all events"] }] }
];

const CURRENT_EGGS = {
  "1 km Eggs": [
    "Bulbasaur","Charmander","Squirtle","Chikorita","Cyndaquil","Totodile","Treecko","Torchic","Mudkip","Turtwig","Chimchar","Piplup","Snivy","Tepig","Oshawott","Chespin","Fennekin","Froakie","Rowlet","Litten","Popplio","Grookey","Scorbunny","Sobble","Sprigatito","Fuecoco","Quaxly"
  ],
  "2 km Eggs": [
    "Dunsparce","Wimpod","Tadbulb","Cleffa","Igglybuff","Smoochum","Larvesta"
  ],
  "5 km Eggs": [
    "Sizzlipede","Snom","Fidough","Munchlax","Indeedee (Male)","Indeedee (Female)","Larvesta"
  ],
  "7 km Eggs": [
    "Galarian Meowth","Galarian Corsola","Galarian Zigzagoon","Galarian Darumaka","Galarian Stunfisk","Alolan Geodude","Alolan Diglett"
  ],
  "7 km Route Eggs": [
    "Galarian Corsola","Galarian Slowpoke","Hisuian Sneasel","Hisuian Growlithe","Hisuian Basculin"
  ],
  "10 km Eggs": [
    "Deino","Honedge","Impidimp","Dreepy","Charcadet","Tinkatink","Larvesta"
  ],
  "12 km Eggs": [
    "Sandile","Vullaby","Shroodle","Pancham","Salandit","Varoom"
  ],
  "5 km Adventure Sync": [
    "Chingling","Happiny","Audino","Riolu","Skarmory"
  ],
  "10 km Adventure Sync": [
    "Goomy","Turtonator","Toxel","Gible","Dreepy"
  ]
};
const EGG_TIER_COLORS = {
  "1 km Eggs": "#F5C842",
  "2 km Eggs": "#78C850",
  "5 km Eggs": "#E67E22",
  "7 km Eggs": "#F1C40F",
  "7 km Route Eggs": "#27AE60",
  "10 km Eggs": "#8E44AD",
  "12 km Eggs": "#E74C3C",
  "5 km Adventure Sync": "#3498DB",
  "10 km Adventure Sync": "#2980B9"
};
const EGG_TIER_IMAGES = {
  "1 km Eggs": "assets/pokemon-images/eggs/egg-1.png",
  "2 km Eggs": "assets/pokemon-images/eggs/egg-2.png",
  "5 km Eggs": "assets/pokemon-images/eggs/egg-5.png",
  "7 km Eggs": "assets/pokemon-images/eggs/egg-7.png",
  "7 km Route Eggs": "assets/pokemon-images/eggs/egg-7.png",
  "7 km Eggs from Mateo's Gift Exchange": "assets/pokemon-images/eggs/egg-7.png",
  "10 km Eggs": "assets/pokemon-images/eggs/egg-10.png",
  "12 km Eggs": "assets/pokemon-images/eggs/egg-12.png",
  "5 km Adventure Sync": "assets/pokemon-images/eggs/egg-5.png",
  "10 km Adventure Sync": "assets/pokemon-images/eggs/egg-10.png",
  "5 km Adventure Sync Rewards": "assets/pokemon-images/eggs/egg-5.png",
  "10 km Adventure Sync Rewards": "assets/pokemon-images/eggs/egg-10.png"
};

const CURRENT_RAID_BOSSES = {
  "1-Star Raids": [
    "Machop (1\u2605 Raid) \u2728","Galarian Ponyta (1\u2605 Raid) \u2728","Doduo (1\u2605 Raid) \u2728","Rockruff (1\u2605 Raid) \u2728"
  ],
  "3-Star Raids": [
    "Rapidash (3\u2605 Raid) \u2728","Scolipede (3\u2605 Raid) \u2728","Zebstrika (3\u2605 Raid) \u2728"
  ],
  "5-Star Raids": [
    "Buzzwole (5\u2605 Raid) \u2728","Pheromosa (5\u2605 Raid) \u2728","Xurkitree (5\u2605 Raid) \u2728"
  ],
  "Mega Raids": [
    "Mega Glalie (Mega) \u2728"
  ],
  "Shadow 1-Star Raids": [
    "Shadow Larvitar (1\u2605 Shadow Raid) \u2728","Shadow Sableye (1\u2605 Shadow Raid) \u2728","Shadow Spheal (1\u2605 Shadow Raid) \u2728","Shadow Inkay (1\u2605 Shadow Raid) \u2728"
  ],
  "Shadow 3-Star Raids": [
    "Shadow Ninetales (3\u2605 Shadow Raid) \u2728","Shadow Primeape (3\u2605 Shadow Raid) \u2728","Shadow Onix (3\u2605 Shadow Raid) \u2728"
  ],
  "Shadow 5-Star Raids": [
    "Shadow Cresselia (5\u2605 Shadow Raid) \u2728"
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
    { name: "D-Max Trapinch", dex: 328 },
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
  // "5-Star Max Battles": [
  //   { name: "D-Max Regice", dex: 378 }
  // ],
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

const ROCKET_LINEUPS = {
  leaders: [
    {
      name: "Giovanni",
      role: "Boss",
      icon: "assets/pokemon-images/icons/boss-giovanni.png.webp",
      quote: "I will not tolerate your interference.",
      color: "#8B0000",
      slots: [["Persian"], ["Rhyperior", "Nidoking", "Kangaskhan"], ["Incarnate Forme Landorus"]]
    },
    {
      name: "Cliff",
      role: "Leader",
      icon: "assets/pokemon-images/icons/leader-cliff.png.webp",
      quote: "My strength comes from my loyalty to Team GO Rocket.",
      color: "#C0392B",
      slots: [["Snorlax"], ["Golurk", "Galarian Weezing", "Gardevoir"], ["Tyranitar", "Gallade", "Camerupt"]]
    },
    {
      name: "Arlo",
      role: "Leader",
      icon: "assets/pokemon-images/icons/leader-arlo.png.webp",
      quote: "It's time to learn your place in the world.",
      color: "#E67E22",
      slots: [["Pineco"], ["Slowbro", "Gigalith", "Steelix"], ["Scizor", "Alakazam", "Charizard"]]
    },
    {
      name: "Sierra",
      role: "Leader",
      icon: "assets/pokemon-images/icons/leader-sierra.png.webp",
      quote: "I envy you \u2014 you get to battle me!",
      color: "#8E44AD",
      slots: [["Duskull"], ["Flygon", "Ferrothorn", "Blastoise"], ["Steelix", "Houndoom", "Milotic"]]
    }
  ],
  grunts: [
    { type: "Normal", gender: "male", quote: "Normal doesn\u2019t mean weak.", slots: [["Teddiursa", "Meowth", "Swablu"], ["Loudred", "Starly", "Rattata"], ["Kangaskhan", "Swellow", "Ursaring"]] },
    { type: "Fire", gender: "female", quote: "Do you know how hot Pok\u00E9mon fire breath can get?", slots: [["Vulpix", "Litwick", "Fennekin"], ["Magmar", "Camerupt", "Braixen"], ["Magmortar", "Darmanitan", "Delphox"]] },
    { type: "Water", gender: "female", quote: "These waters are treacherous!", slots: [["Tentacool", "Krabby", "Froakie"], ["Tentacruel", "Sharpedo", "Frogadier"], ["Kabutops", "Walrein", "Greninja"]] },
    { type: "Water", gender: "male", quote: "These waters are treacherous!", slots: [["Magikarp", "Feebas"], ["Magikarp"], ["Magikarp", "Gyarados"]] },
    { type: "Electric", gender: "female", quote: "Get ready to be shocked!", slots: [["Magnemite", "Voltorb", "Shinx"], ["Alolan Geodude", "Voltorb", "Electabuzz"], ["Ampharos", "Luxray", "Galvantula"]] },
    { type: "Grass", gender: "male", quote: "Don\u2019t tangle with us!", slots: [["Cacnea", "Chespin", "Phantump"], ["Lileep", "Ferrothorn", "Quilladin"], ["Cradily", "Chesnaught", "Trevenant"]] },
    { type: "Ice", gender: "female", quote: "You\u2019re gonna be frozen in your tracks.", slots: [["Sneasel", "Swinub", "Spheal"], ["Alolan Ninetales", "Sealeo", "Froslass"], ["Glalie", "Froslass", "Aurorus"]] },
    { type: "Fighting", gender: "female", quote: "This buff physique isn\u2019t just for show!", slots: [["Mankey", "Machop", "Timburr"], ["Hitmonlee", "Hitmonchan", "Hitmontop"], ["Infernape", "Conkeldurr", "Annihilape"]] },
    { type: "Poison", gender: "female", quote: "Coiled and ready to strike!", slots: [["Zubat", "Oddish", "Qwilfish"], ["Nidorina", "Nidorino", "Galarian Weezing"], ["Weezing", "Toxicroak", "Amoonguss"]] },
    { type: "Ground", gender: "male", quote: "You\u2019ll be defeated into the ground!", slots: [["Sandshrew", "Gligar", "Trapinch"], ["Gligar", "Vibrava", "Claydol"], ["Flygon", "Hippowdon", "Golurk"]] },
    { type: "Flying", gender: "female", quote: "Battle against my Flying-type Pok\u00E9mon!", slots: [["Pidgey", "Taillow", "Swablu"], ["Zubat", "Scyther", "Gligar"], ["Dragonite", "Swanna", "Toucannon"]] },
    { type: "Psychic", gender: "male", quote: "Are you scared of psychics that use unseen power?", slots: [["Drowzee", "Wobbuffet", "Ralts"], ["Drowzee", "Wobbuffet", "Duosion"], ["Gallade", "Reuniclus", "Malamar"]] },
    { type: "Bug", gender: "male", quote: "Go, my super bug Pok\u00E9mon!", slots: [["Venonat", "Karrablast", "Shelmet"], ["Pinsir", "Shuckle", "Anorith"], ["Scizor", "Scolipede", "Vikavolt"]] },
    { type: "Rock", gender: "male", quote: "Let\u2019s rock and roll!", slots: [["Omanyte", "Shuckle", "Cranidos"], ["Graveler", "Cranidos", "Shieldon"], ["Golem", "Tyrantrum", "Aurorus"]] },
    { type: "Ghost", gender: "male", quote: "Ke\u2026 ke\u2026 ke\u2026 ke\u2026 ke\u2026 ke\u2026", slots: [["Gastly", "Duskull", "Yamask"], ["Sableye", "Dusclops", "Cofagrigus"], ["Gengar", "Froslass", "Alolan Marowak"]] },
    { type: "Dragon", gender: "female", quote: "ROAR! \u2026How\u2019d that sound?", slots: [["Dratini", "Bagon", "Deino"], ["Alolan Exeggutor", "Dragonair", "Gabite"], ["Dragonite", "Salamence", "Garchomp"]] },
    { type: "Dark", gender: "female", quote: "Wherever there is light, there is also shadow.", slots: [["Alolan Rattata", "Poochyena", "Carvanha"], ["Alolan Raticate", "Mightyena"], ["Liepard", "Hydreigon"]] },
    { type: "Steel", gender: "male", quote: "You\u2019re no match for my iron will!", slots: [["Alolan Sandshrew", "Aron", "Beldum"], ["Skarmory", "Lairon", "Metang"], ["Alolan Sandslash", "Aggron", "Probopass"]] },
    { type: "Fairy", gender: "female", quote: "Check out my cute Pok\u00E9mon!", slots: [["Alolan Vulpix", "Snubbull", "Ralts"], ["Galarian Weezing", "Snubbull", "Kirlia"], ["Alolan Ninetales", "Galarian Weezing", "Granbull"]] },
    { type: "Normal", gender: "male", quote: "Winning is for winners.", slots: [["Bulbasaur", "Charmander", "Squirtle"], ["Ivysaur", "Charmeleon", "Wartortle"], ["Venusaur", "Charizard", "Blastoise"]] },
    { type: "Normal", gender: "female", quote: "Winning is for winners.", slots: [["Snorlax"], ["Gardevoir", "Poliwrath", "Snorlax"], ["Gyarados", "Snorlax", "Dragonite"]] },
    { type: "Decoy", gender: "female", quote: "Fooled ya, twerp.", slots: [["Bellsprout"], ["Raticate", "Weepinbell"], ["Raticate", "Snorlax"]] }
  ]
};

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
  "Shadow Entei Raid Day Ticket": 2.99,
  "Falinks Super Mega Raid Day Ticket": 4.99,
  "Pokémon Storage Upgrade": 1.99,
  "Item Bag Upgrade": 1.99,
  "PokéCoin": 0.007
};

const ESTIMATED_VALUE_ITEMS = new Set(["Ultra Ball", "GO Pass Deluxe", "Fashion Raid Day Ticket", "Shadow Entei Raid Day Ticket", "Falinks Super Mega Raid Day Ticket", "PokéCoin"]);

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
  "+10 Ranks": "item_pass_point_01.png",
  "Fashion Raid Day Ticket": "item_1608_hd.png",
  "Shadow Entei Raid Day Ticket": "item_1608_hd.png",
  "Falinks Super Mega Raid Day Ticket": "item_1608_hd.png",
  "Pok\u00E9mon Storage Upgrade": "pokemonstorageupgrade.1.png",
  "Item Bag Upgrade": "itemstorageupgrade.1.png",
  "Pok\u00E9Coin": "pokecoin.png",
  "Reward Points": "rewardsIcon.png"
};
const ITEM_IMAGES_MULTI = {
  "Egg Incubator": { 3: "limited_incubatorx3.png" },
  "Max Particle Pack": { 3: "mp_pack_mulit.png", 6: "mp_pack_mulit.png" },
  "Star Piece": { 8: "starpiece.8.png" }
};

const WEB_STORE_BOXES = [
  {
    name: "GO Pass Deluxe: May Ultra Box",
    price: 14.99,
    category: "Event Bundle",
    limited: true,
    limitedLabel: "LIMITED-TIME ONLY",
    oneTime: true,
    availableFrom: "2026-05-03",
    expires: "2026-06-02",
    availabilityText: "Tuesday, May 5, at 10:00 a.m. to Tuesday, June 2, at 10:00 a.m. local time",
    items: [
      { name: "GO Pass Deluxe", qty: 1, note: "May" },
      { name: "+10 Ranks", qty: 1000 },
      { name: "Ultra Ball", qty: 20 },
      { name: "Max Revive", qty: 10 },
      { name: "Premium Battle Pass", qty: 2 },
      { name: "Egg Incubator", qty: 1 },
      { name: "Super Incubator", qty: 1 },
      { name: "Max Potion", qty: 10 },
      { name: "Reward Points", qty: 180 }
    ]
  },
  {
    name: "GO Pass Deluxe: May + 10 Ranks",
    price: 9.99,
    category: "Event Bundle",
    limited: true,
    limitedLabel: "LIMITED-TIME ONLY",
    oneTime: true,
    availableFrom: "2026-05-03",
    expires: "2026-06-02",
    availabilityText: "Tuesday, May 5, at 10:00 a.m. to Tuesday, June 2, at 10:00 a.m. local time",
    items: [
      { name: "GO Pass Deluxe", qty: 1, note: "May" },
      { name: "+10 Ranks", qty: 1000 },
      { name: "Ultra Ball", qty: 10 },
      { name: "Max Revive", qty: 5 },
      { name: "Premium Battle Pass", qty: 1 },
      { name: "Max Potion", qty: 5 },
      { name: "Reward Points", qty: 120 }
    ]
  },
  {
    name: "GO Pass Deluxe: May",
    price: 7.99,
    category: "Event Bundle",
    limited: true,
    limitedLabel: "LIMITED-TIME ONLY",
    oneTime: true,
    availableFrom: "2026-05-03",
    expires: "2026-06-02",
    availabilityText: "Tuesday, May 5, at 10:00 a.m. to Tuesday, June 2, at 10:00 a.m. local time",
    items: [
      { name: "GO Pass Deluxe", qty: 1, note: "May" },
      { name: "Ultra Ball", qty: 10 },
      { name: "Max Revive", qty: 5 },
      { name: "Premium Battle Pass", qty: 1 },
      { name: "Max Potion", qty: 5 },
      { name: "Reward Points", qty: 96 }
    ]
  },
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
    expires: "2026-04-30",
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
    name: "Falinks Super Mega Raid Day Ultra Ticket Box",
    price: 4.99,
    category: "Event Bundle",
    limited: true,
    availableFrom: "2026-05-16",
    expires: "2026-05-23",
    oneTime: true,
    items: [
      { name: "Falinks Super Mega Raid Day Ticket", qty: 1 },
      { name: "Premium Battle Pass", qty: 1 }
    ],
    ticketBonuses: ["Up to 14 Raid Passes from spinning Gym Photo Discs", "Increased chance to get Rare Candy XL from Raid Battles", "+5,000 XP per Super Mega Raid Battle", "+5,000 Stardust per Super Mega Raid Battle"]
  },
  {
    name: "Shadow Entei Raid Day Ultra Ticket Box",
    price: 4.99,
    category: "Event Bundle",
    limited: true,
    availableFrom: "2026-04-25",
    expires: "2026-05-02",
    oneTime: true,
    items: [
      { name: "Shadow Entei Raid Day Ticket", qty: 1 },
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
    expires: "2026-04-30",
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
    expires: "2026-04-30",
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
  openNewsMonths: {},
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
  openStoreArchiveMonths: {},
  weekDigestDay: null,
  weekDigestOffset: 0
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
    const migId = getCurrentMigrationId();
    const res = await fetch(`${SUPABASE_URL}/rest/v1/nests?select=*&order=created_at.desc&migration_id=eq.${migId}`, {
      headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` }
    });
    if (res.ok) {
      _nestsCache = await res.json();
    }
  } catch {}
  return _nestsCache;
}
function loadNests() { return _nestsCache; }

// --- SUPABASE REALTIME ---
let _nestsWS = null;
let _nestsReconnectTimer = null;
function subscribeToNests() {
  // Cancel any pending reconnect from a previous close
  if (_nestsReconnectTimer) { clearTimeout(_nestsReconnectTimer); _nestsReconnectTimer = null; }
  // Detach + close any prior socket so it can't fire reconnect
  if (_nestsWS) {
    try { _nestsWS.onclose = null; _nestsWS.onmessage = null; _nestsWS.onopen = null; _nestsWS.close(); } catch {}
  }
  _nestsWS = new WebSocket(`${SUPABASE_URL.replace("https://","wss://")}/realtime/v1/websocket?apikey=${SUPABASE_KEY}&vsn=1.0.0`);
  let heartbeat;
  _nestsWS.onopen = () => {
    _nestsWS.send(JSON.stringify({ topic: "realtime:public:nests", event: "phx_join", payload: { config: { broadcast: { self: true }, postgres_changes: [{ event: "*", schema: "public", table: "nests" }] } }, ref: "1" }));
    heartbeat = setInterval(() => _nestsWS.send(JSON.stringify({ topic: "phoenix", event: "heartbeat", payload: {}, ref: "hb" })), 30000);
  };
  _nestsWS.onmessage = (e) => {
    let msg;
    try { msg = JSON.parse(e.data); } catch { return; }
    if (msg.event === "postgres_changes") {
      loadNestsFromSupabase().then(() => { if (state.tab === "nests") render(); });
    }
  };
  _nestsWS.onclose = () => {
    clearInterval(heartbeat);
    _nestsWS.onclose = null;
    _nestsReconnectTimer = setTimeout(subscribeToNests, 3000);
  };
}
subscribeToNests();

let _bugReportsWS = null;
let _bugReportsReconnectTimer = null;
let _bugReportsPollTimer = null;

// Polling fallback: WebSocket realtime is unreliable on iOS PWA (connection gets
// suspended in background, resume events don't always fire). Poll every 15s as backup.
function startBugReportsPolling() {
  if (_bugReportsPollTimer) return;
  _bugReportsPollTimer = setInterval(() => {
    loadBugReportsFromSupabase().then(() => {
      if (state.tab === "report") render();
    });
  }, 15000);
}
function subscribeToBugReports() {
  if (_bugReportsReconnectTimer) { clearTimeout(_bugReportsReconnectTimer); _bugReportsReconnectTimer = null; }
  if (_bugReportsWS) {
    try { _bugReportsWS.onclose = null; _bugReportsWS.onmessage = null; _bugReportsWS.onopen = null; _bugReportsWS.close(); } catch {}
  }
  _bugReportsWS = new WebSocket(`${SUPABASE_URL.replace("https://","wss://")}/realtime/v1/websocket?apikey=${SUPABASE_KEY}&vsn=1.0.0`);
  let heartbeat;
  _bugReportsWS.onopen = () => {
    _bugReportsWS.send(JSON.stringify({ topic: "realtime:public:bug_reports", event: "phx_join", payload: { config: { broadcast: { self: true }, postgres_changes: [{ event: "*", schema: "public", table: "bug_reports" }] } }, ref: "1" }));
    heartbeat = setInterval(() => _bugReportsWS.send(JSON.stringify({ topic: "phoenix", event: "heartbeat", payload: {}, ref: "hb-br" })), 30000);
  };
  _bugReportsWS.onmessage = (e) => {
    let msg;
    try { msg = JSON.parse(e.data); } catch { return; }
    if (msg.event === "postgres_changes") {
      loadBugReportsFromSupabase().then(() => { if (state.tab === "report") render(); });
    }
  };
  _bugReportsWS.onclose = () => {
    clearInterval(heartbeat);
    _bugReportsWS.onclose = null;
    _bugReportsReconnectTimer = setTimeout(subscribeToBugReports, 3000);
  };
}
subscribeToBugReports();
// One-time initial cache populate so the report tab works on a fresh page load
// (setTab/sidebarNav only trigger this on explicit navigation, not on reload).
loadBugReportsFromSupabase().then(() => { if (state.tab === "report") render(); });
startBugReportsPolling();

// --- PWA / mobile resume handling ---
// iOS pauses JS and may invalidate WebSocket connections when a PWA is backgrounded.
// On resume, the socket may report OPEN state but no traffic flows (zombie connection).
// We can't trust readyState — always force-recreate sockets and refetch caches.
let _lastResumeAt = 0;
function onAppResume() {
  if (document.visibilityState !== "visible") return;
  const now = Date.now();
  // Throttle: avoid thrashing if multiple resume events fire close together
  if (now - _lastResumeAt < 1500) return;
  _lastResumeAt = now;
  // Force-recreate both sockets (subscribeTo* functions are idempotent — they clean up old sockets first)
  subscribeToBugReports();
  subscribeToNests();
  // Refresh both caches with whatever auth state we have
  loadBugReportsFromSupabase().then(() => { if (state.tab === "report") render(); });
  loadNestsFromSupabase().then(() => { if (state.tab === "nests") render(); });
}
document.addEventListener("visibilitychange", onAppResume);
window.addEventListener("pageshow", onAppResume);
window.addEventListener("focus", onAppResume);

// --- SUPABASE AUTH (admin only) ---
const ADMIN_SESSION_KEY = "trainerwire_admin_session";

function getAdminSession() {
  try {
    const raw = localStorage.getItem(ADMIN_SESSION_KEY);
    if (!raw) return null;
    const s = JSON.parse(raw);
    if (!s || !s.access_token || !s.expires_at) return null;
    return s;
  } catch { return null; }
}
function setAdminSession(s) { localStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify(s)); }
function clearAdminSession() { localStorage.removeItem(ADMIN_SESSION_KEY); }

// Decode JWT payload without verification (verification happens server-side via RLS).
function decodeJwt(token) {
  try {
    const b64 = token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
    return JSON.parse(atob(b64));
  } catch { return null; }
}

function isAdmin() {
  const s = getAdminSession();
  if (!s) return false;
  // expires_at from Supabase is unix seconds
  if (Date.now() / 1000 >= s.expires_at - 30) return false;
  const payload = decodeJwt(s.access_token);
  return !!(payload && payload.email);
}

function getAdminEmail() {
  const s = getAdminSession();
  if (!s) return null;
  const p = decodeJwt(s.access_token);
  return (p && p.email) ? p.email : null;
}

async function adminLoginRequest(email, password) {
  const res = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=password`, {
    method: "POST",
    headers: { apikey: SUPABASE_KEY, "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.error_description || data.msg || data.message || data.error || "Sign-in failed.");
  }
  setAdminSession({
    access_token: data.access_token,
    refresh_token: data.refresh_token,
    expires_at: Math.floor(Date.now() / 1000) + (data.expires_in || 3600)
  });
}

function adminLogout() {
  clearAdminSession();
  render();
}

// Refresh the access token if it's near expiry. Returns the (possibly new) session.
async function refreshAdminSessionIfNeeded() {
  const s = getAdminSession();
  if (!s) return null;
  if (Date.now() / 1000 < s.expires_at - 60) return s;
  if (!s.refresh_token) { clearAdminSession(); return null; }
  try {
    const res = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=refresh_token`, {
      method: "POST",
      headers: { apikey: SUPABASE_KEY, "Content-Type": "application/json" },
      body: JSON.stringify({ refresh_token: s.refresh_token })
    });
    if (!res.ok) { clearAdminSession(); return null; }
    const data = await res.json();
    if (!data.access_token) { clearAdminSession(); return null; }
    const next = {
      access_token: data.access_token,
      refresh_token: data.refresh_token || s.refresh_token,
      expires_at: Math.floor(Date.now() / 1000) + (data.expires_in || 3600)
    };
    setAdminSession(next);
    return next;
  } catch { clearAdminSession(); return null; }
}

// Build a headers object for an authenticated REST call. Falls back to anon.
async function supabaseAuthHeaders(extra) {
  const base = { apikey: SUPABASE_KEY, ...(extra || {}) };
  const s = await refreshAdminSessionIfNeeded();
  base.Authorization = `Bearer ${s ? s.access_token : SUPABASE_KEY}`;
  return base;
}

// --- ADMIN LOGIN UI ---
let _adminLoginVisible = false;
let _adminLoginSubmitting = false;
let _adminLoginError = ""; // "" or an error message
let _adminLoginEmailDraft = ""; // preserved across re-renders so failed login keeps the email field populated

function openAdminLogin() {
  _adminLoginVisible = true;
  _adminLoginError = "";
  render();
  // Focus after the next paint so the freshly-rendered input exists.
  requestAnimationFrame(() => {
    const el = document.getElementById("admin-login-email");
    if (el) el.focus();
  });
}
function closeAdminLogin() {
  _adminLoginVisible = false;
  _adminLoginSubmitting = false;
  _adminLoginError = "";
  _adminLoginEmailDraft = "";
  render();
}

async function submitAdminLogin() {
  if (_adminLoginSubmitting) return;
  const emailEl = document.getElementById("admin-login-email");
  const passEl = document.getElementById("admin-login-password");
  if (!emailEl || !passEl) return;
  const email = emailEl.value.trim();
  const password = passEl.value;
  _adminLoginEmailDraft = email; // preserve across re-renders
  if (!email || !password) {
    _adminLoginError = "Please enter both email and password.";
    render();
    return;
  }
  _adminLoginSubmitting = true;
  _adminLoginError = "";
  render();
  try {
    await adminLoginRequest(email, password);
    closeAdminLogin();
  } catch (e) {
    _adminLoginError = e.message || "Sign-in failed.";
    _adminLoginSubmitting = false;
    render();
  }
}

function onAdminLoginKey(e) {
  if (e.key === "Escape") { e.preventDefault(); closeAdminLogin(); return; }
  if (e.key === "Enter")  { e.preventDefault(); submitAdminLogin(); }
}

function renderAdminLoginModal() {
  if (!_adminLoginVisible) return "";
  const th = t(darkMode);
  const submitting = _adminLoginSubmitting;
  return `<div onclick="closeAdminLogin()" style="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:300;display:flex;align-items:center;justify-content:center;padding:20px">
    <div onclick="event.stopPropagation()" style="background:${th.surface};border:1.5px solid ${th.border};border-radius:18px;padding:22px;width:100%;max-width:380px;box-shadow:0 12px 40px rgba(0,0,0,0.3)">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
        <div style="font-size:16px;font-weight:800;color:${th.text}">🔐 Admin sign-in</div>
        <button onclick="closeAdminLogin()" style="background:none;border:none;color:${th.textMuted};font-size:18px;cursor:pointer;padding:4px;line-height:1">✕</button>
      </div>
      <div>
        <label style="display:block;font-size:13px;font-weight:700;color:${th.text};margin-bottom:6px">Email</label>
        <input id="admin-login-email" type="email" autocomplete="email" value="${esc(_adminLoginEmailDraft)}" onkeydown="onAdminLoginKey(event)" placeholder="you@example.com" style="width:100%;padding:11px 14px;border-radius:10px;border:1.5px solid ${th.border};background:${th.bg};color:${th.text};font-size:14px;font-family:inherit;outline:none;box-sizing:border-box" />
        <label style="display:block;font-size:13px;font-weight:700;color:${th.text};margin:12px 0 6px">Password</label>
        <input id="admin-login-password" type="password" autocomplete="current-password" onkeydown="onAdminLoginKey(event)" placeholder="••••••••" style="width:100%;padding:11px 14px;border-radius:10px;border:1.5px solid ${th.border};background:${th.bg};color:${th.text};font-size:14px;font-family:inherit;outline:none;box-sizing:border-box" />
        ${_adminLoginError ? `<div style="margin-top:8px;font-size:12px;color:#E74C3C">${esc(_adminLoginError)}</div>` : ""}
        <button onclick="submitAdminLogin()" ${submitting ? "disabled" : ""} style="margin-top:14px;width:100%;padding:12px;border-radius:10px;border:none;background:linear-gradient(135deg,#E74C3C,#F39C12);color:#fff;font-size:14px;font-weight:700;cursor:${submitting ? "wait" : "pointer"};font-family:inherit;opacity:${submitting ? 0.7 : 1}">${submitting ? "Signing in..." : "Sign in"}</button>
      </div>
    </div>
  </div>`;
}

// --- BUG REPORTS DATA LAYER ---
const BUG_SCREENSHOT_MAX_BYTES = 15 * 1024 * 1024; // 15 MB cap (matches bucket setting)
let _bugReportsCache = [];
let _bugReportFilter = "all"; // "all" | "acknowledged" | "fixing" | "fixed" | "wont_fix" | "duplicate" | "not_a_bug"
let _bugReportMoreOpen = false;
let _statusMenuOpenForId = null; // id of the report whose status dropdown is open

function toggleStatusMenu(id) {
  _statusMenuOpenForId = (_statusMenuOpenForId === id) ? null : id;
  render();
  if (_statusMenuOpenForId !== null) {
    setTimeout(() => {
      const dismiss = (e) => {
        if (!e.target.closest || !e.target.closest("[data-status-menu]")) {
          _statusMenuOpenForId = null;
          document.removeEventListener("click", dismiss, true);
          render();
        }
      };
      document.addEventListener("click", dismiss, true);
    }, 0);
  }
}

function pickStatus(id, newStatus) {
  _statusMenuOpenForId = null;
  updateBugReportStatus(id, newStatus);
}

function setBugReportFilter(filter) {
  _bugReportFilter = filter;
  _bugReportMoreOpen = false;
  render();
}
function toggleBugReportMore() {
  _bugReportMoreOpen = !_bugReportMoreOpen;
  render();
  if (_bugReportMoreOpen) {
    // Auto-close on any click outside the dropdown wrapper.
    const dismiss = (e) => {
      if (!e.target.closest || !e.target.closest("[data-bug-more]")) {
        _bugReportMoreOpen = false;
        document.removeEventListener("click", dismiss, true);
        render();
      }
    };
    // Defer attachment until after the click that opened the dropdown finishes propagating.
    setTimeout(() => document.addEventListener("click", dismiss, true), 0);
  }
}

async function loadBugReportsFromSupabase() {
  try {
    const headers = await supabaseAuthHeaders();
    const res = await fetch(`${SUPABASE_URL}/rest/v1/bug_reports?select=*&order=created_at.desc`, { headers });
    if (res.ok) _bugReportsCache = await res.json();
  } catch {}
  return _bugReportsCache;
}
function loadBugReports() { return _bugReportsCache; }

async function uploadBugScreenshot(file) {
  if (!file) return null;
  if (file.size > BUG_SCREENSHOT_MAX_BYTES) {
    throw new Error("Screenshot must be 15 MB or smaller.");
  }
  const nameParts = (file.name || "").split(".");
  const rawExt = (nameParts.length > 1 ? nameParts.pop() : "").toLowerCase();
  const ext = rawExt.replace(/[^a-z0-9]/g, "") || "png";
  const reporterId = getReporterId();
  const objName = `${reporterId}/${crypto.randomUUID()}.${ext}`;
  const res = await fetch(`${SUPABASE_URL}/storage/v1/object/bug-screenshots/${objName}`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      "Content-Type": file.type || "application/octet-stream",
      "x-upsert": "false"
    },
    body: file
  });
  if (!res.ok) {
    let detail = "";
    try { const j = await res.json(); detail = j.message || j.error || ""; } catch {}
    throw new Error(detail ? `Screenshot upload failed: ${detail}` : "Screenshot upload failed.");
  }
  return `${SUPABASE_URL}/storage/v1/object/public/bug-screenshots/${objName}`;
}

async function insertBugReport({ report_type, section, description, reporter_name, screenshot_url }) {
  const reporterId = getReporterId();
  const res = await fetch(`${SUPABASE_URL}/rest/v1/bug_reports`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal"
    },
    body: JSON.stringify({
      report_type, section, description,
      reporter_name: reporter_name || null,
      reporter_id: reporterId,
      screenshot_url: screenshot_url || null,
      status: "pending"
    })
  });
  if (!res.ok) {
    let detail = "";
    try { const j = await res.json(); detail = j.message || j.error || ""; } catch {}
    throw new Error(detail || "Failed to submit report.");
  }
}

async function updateBugReportStatus(id, newStatus) {
  const headers = await supabaseAuthHeaders({ "Content-Type": "application/json", Prefer: "return=minimal" });
  const res = await fetch(`${SUPABASE_URL}/rest/v1/bug_reports?id=eq.${id}`, {
    method: "PATCH",
    headers,
    body: JSON.stringify({ status: newStatus })
  });
  if (!res.ok) { alert("Failed to update status."); return; }
  await loadBugReportsFromSupabase();
  render();
}

async function updateBugReportAdminNote(id, note) {
  const headers = await supabaseAuthHeaders({ "Content-Type": "application/json", Prefer: "return=minimal" });
  const trimmed = (note || "").trim();
  const res = await fetch(`${SUPABASE_URL}/rest/v1/bug_reports?id=eq.${id}`, {
    method: "PATCH",
    headers,
    body: JSON.stringify({ admin_note: trimmed || null })
  });
  if (!res.ok) { alert("Failed to save note."); return; }
  await loadBugReportsFromSupabase();
  render();
}

async function deleteBugReport(id) {
  if (!confirm("Delete this report? This cannot be undone.")) return;
  const headers = await supabaseAuthHeaders();
  const res = await fetch(`${SUPABASE_URL}/rest/v1/bug_reports?id=eq.${id}`, { method: "DELETE", headers });
  if (!res.ok) { alert("Delete failed."); return; }
  await loadBugReportsFromSupabase();
  render();
}

async function approveBugReport(id) {
  await updateBugReportStatus(id, "acknowledged");
}

// Rolling-hour rate limit, enforced client-side against _bugReportsCache.
// Server doesn't enforce this — Supabase RLS only checks status='pending'.
const MAX_REPORTS_PER_HOUR = 3;
function checkBugReportRateLimit(now, recentTimestamps) {
  const cutoff = now - 3600 * 1000;
  const recent = (recentTimestamps || []).filter(t => t >= cutoff);
  return { allowed: recent.length < MAX_REPORTS_PER_HOUR, count: recent.length, max: MAX_REPORTS_PER_HOUR };
}

function getRecentBugReportTimestampsFromCache() {
  const me = getReporterId();
  return _bugReportsCache
    .filter(r => r.reporter_id === me)
    .map(r => new Date(r.created_at).getTime())
    .filter(t => Number.isFinite(t));
}

// --- BUG REPORT RENDERING ---
const BUG_STATUS_META = {
  pending:      { label: "Pending",      color: "#F1C40F" },
  acknowledged: { label: "Acknowledged", color: "#7F8C8D" },
  fixing:       { label: "Fixing",       color: "#F39C12" },
  fixed:        { label: "Fixed",        color: "#2ECC71" },
  wont_fix:     { label: "Won't Fix",    color: "#E74C3C" },
  duplicate:    { label: "Duplicate",    color: "#9B59B6" },
  not_a_bug:    { label: "Not a Bug",    color: "#3498DB" }
};
const BUG_TYPE_LABELS = {
  "bug": "Bug", "wrong-info": "Wrong Info", "missing": "Missing", "suggestion": "Suggestion", "other": "Other"
};
const BUG_SECTION_LABELS = {
  "calendar": "Calendar", "store": "Deal Check", "events": "Events", "general": "General",
  "max-battles": "Max Battles", "nests": "Nests", "news": "News", "pokedex": "PokéDex",
  "tools": "PoGO Tools", "raids": "Raids",
  "accessibility": "Accessibility", "content-data": "Content & Data", "new-feature": "New Feature",
  "notifications": "Notifications", "performance": "Performance", "ui-design": "UI / Design"
};

function relativeDate(iso) {
  const then = new Date(iso).getTime();
  if (!Number.isFinite(then)) return "";
  const diff = Date.now() - then;
  const m = Math.floor(diff / 60000);
  if (m < 1) return "just now";
  if (m < 60) return `${m} min ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h} hr${h === 1 ? "" : "s"} ago`;
  const d = Math.floor(h / 24);
  if (d < 30) return `${d} day${d === 1 ? "" : "s"} ago`;
  return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function openScreenshotLightbox(url) {
  // If a lightbox is already open, remove it first so we don't stack overlays.
  document.getElementById("screenshot-lightbox")?.remove();
  const overlay = document.createElement("div");
  overlay.id = "screenshot-lightbox";
  overlay.style.cssText = "position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:400;display:flex;align-items:center;justify-content:center;padding:20px;cursor:zoom-out";
  const img = document.createElement("img");
  img.src = url;
  img.style.cssText = "max-width:100%;max-height:100%;object-fit:contain;border-radius:8px";
  const closeBtn = document.createElement("button");
  closeBtn.textContent = "✕";
  closeBtn.setAttribute("aria-label", "Close screenshot");
  closeBtn.style.cssText = "position:absolute;top:20px;right:20px;width:40px;height:40px;border-radius:50%;background:rgba(0,0,0,0.6);border:1.5px solid #fff;color:#fff;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center";
  overlay.appendChild(img);
  overlay.appendChild(closeBtn);
  overlay.onclick = () => overlay.remove();
  // Escape key handler — listens on document so it works even before focus lands.
  const onKey = (e) => { if (e.key === "Escape") { overlay.remove(); document.removeEventListener("keydown", onKey); } };
  document.addEventListener("keydown", onKey);
  // Also clean up the keydown listener when the overlay is dismissed by click.
  const observer = new MutationObserver(() => {
    if (!document.body.contains(overlay)) {
      document.removeEventListener("keydown", onKey);
      observer.disconnect();
    }
  });
  observer.observe(document.body, { childList: true });
  document.body.appendChild(overlay);
  closeBtn.focus();
}

function renderBugReportStatusPill(status) {
  const meta = BUG_STATUS_META[status] || BUG_STATUS_META.acknowledged;
  return `<span style="display:inline-block;padding:2px 10px;border-radius:999px;background:${meta.color};color:#fff;font-size:10px;font-weight:700;letter-spacing:0.2px;text-transform:uppercase;line-height:16px;vertical-align:middle">${meta.label}</span>`;
}

function renderBugReportFilterChips() {
  const th = t(darkMode);
  const primary = [
    { key: "all", label: "All" },
    { key: "acknowledged", label: "Acknowledged" },
    { key: "fixing", label: "Fixing" },
    { key: "fixed", label: "Fixed" }
  ];
  const overflow = [
    { key: "wont_fix", label: "Won't Fix" },
    { key: "duplicate", label: "Duplicate" },
    { key: "not_a_bug", label: "Not a Bug" }
  ];
  const chip = (key, label) => {
    const active = _bugReportFilter === key;
    return `<button onclick="setBugReportFilter('${key}')" style="padding:6px 14px;border-radius:999px;border:1.5px solid ${active ? "#E74C3C" : th.border};background:${active ? th.accentBg("#E74C3C") : th.surface};color:${active ? "#E74C3C" : th.text};font-size:12px;font-weight:${active ? 700 : 600};cursor:pointer;font-family:inherit;white-space:nowrap;transition:all 0.15s ease">${label}</button>`;
  };
  const moreActive = overflow.some(o => o.key === _bugReportFilter);
  const dropdown = _bugReportMoreOpen
    ? `<div style="position:absolute;top:100%;right:0;margin-top:6px;background:${th.surface};border:1.5px solid ${th.border};border-radius:12px;box-shadow:0 8px 24px rgba(0,0,0,0.18);padding:6px;display:flex;flex-direction:column;gap:4px;z-index:20;min-width:140px">
        ${overflow.map(o => {
          const active = _bugReportFilter === o.key;
          return `<button onclick="setBugReportFilter('${o.key}')" style="padding:8px 12px;border-radius:8px;border:none;background:${active ? th.accentBg("#E74C3C") : "transparent"};color:${active ? "#E74C3C" : th.text};font-size:13px;font-weight:600;cursor:pointer;text-align:left;font-family:inherit">${o.label}</button>`;
        }).join("")}
      </div>`
    : "";
  return `<div class="bug-report-chip-row" style="display:flex;align-items:center;gap:8px;overflow-x:auto;position:relative;padding-bottom:2px;scrollbar-width:none;-ms-overflow-style:none">
    ${primary.map(p => chip(p.key, p.label)).join("")}
    <div data-bug-more style="position:relative;flex-shrink:0">
      <button onclick="toggleBugReportMore()" aria-expanded="${_bugReportMoreOpen}" aria-haspopup="menu" style="padding:6px 14px;border-radius:999px;border:1.5px solid ${moreActive ? "#E74C3C" : th.border};background:${moreActive ? th.accentBg("#E74C3C") : th.surface};color:${moreActive ? "#E74C3C" : th.text};font-size:12px;font-weight:${moreActive ? 700 : 600};cursor:pointer;font-family:inherit;transition:all 0.15s ease">More ▾</button>
      ${dropdown}
    </div>
  </div>`;
}

function renderBugReportCard(report) {
  const th = t(darkMode);
  const admin = isAdmin();
  const typeLabel = BUG_TYPE_LABELS[report.report_type] || report.report_type;
  const sectionLabel = BUG_SECTION_LABELS[report.section] || report.section;
  const meta = `${typeLabel} · ${sectionLabel}`;
  const reporter = report.reporter_name ? `— ${esc(report.reporter_name)} · ` : "";
  const date = relativeDate(report.created_at);
  const shot = report.screenshot_url
    ? `<img src="${escAttr(report.screenshot_url)}" data-url="${escAttr(report.screenshot_url)}" onclick="openScreenshotLightbox(this.getAttribute('data-url'))" style="width:80px;height:80px;object-fit:cover;border-radius:8px;cursor:zoom-in;border:1.5px solid ${th.border};margin-top:10px;display:block" alt="Screenshot" onerror="this.style.display='none'" />`
    : "";

  // Public statuses only — pending lives in the admin queue, not here.
  const publicStatusKeys = ["acknowledged","fixing","fixed","wont_fix","duplicate","not_a_bug"];
  const currentMeta = BUG_STATUS_META[report.status] || BUG_STATUS_META.acknowledged;
  const statusOpen = _statusMenuOpenForId == report.id;
  const statusControl = admin
    ? `<span data-status-menu style="position:relative;display:inline-block">
        <button onclick="toggleStatusMenu('${report.id}')" aria-haspopup="menu" aria-expanded="${statusOpen}" style="display:inline-block;padding:2px 10px;border-radius:999px;border:1.5px solid ${currentMeta.color};background:${currentMeta.color};color:#fff;font-size:10px;font-weight:700;letter-spacing:0.2px;text-transform:uppercase;line-height:16px;vertical-align:middle;cursor:pointer;font-family:inherit">${currentMeta.label}<span style="display:inline-block;margin-left:5px;font-size:8px;opacity:0.85;vertical-align:1px">▾</span></button>
        ${statusOpen ? `<div style="position:absolute;top:100%;left:0;margin-top:6px;background:${th.surface};border:1.5px solid ${th.border};border-radius:12px;box-shadow:0 8px 24px rgba(0,0,0,0.25);padding:6px;display:flex;flex-direction:column;gap:2px;z-index:50;min-width:160px">
            ${publicStatusKeys.map(s => {
              const m = BUG_STATUS_META[s];
              const active = report.status === s;
              return `<button onclick="pickStatus('${report.id}', '${s}')" style="padding:8px 12px;border-radius:8px;border:none;background:${active ? th.accentBg(m.color) : "transparent"};color:${active ? m.color : th.text};font-size:13px;font-weight:${active ? 700 : 600};cursor:pointer;text-align:left;font-family:inherit;display:flex;align-items:center;gap:8px" onmouseenter="if(this.style.background==='transparent')this.style.background='${th.surfaceHover}'" onmouseleave="if(this.style.background==='${th.surfaceHover}')this.style.background='transparent'">
                <span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:${m.color};flex-shrink:0"></span>
                ${m.label}
              </button>`;
            }).join("")}
          </div>` : ""}
      </span>`
    : renderBugReportStatusPill(report.status);

  const adminNoteEditor = admin
    ? `<div style="margin-top:10px">
        <input type="text" placeholder="Admin note (optional) — saved on blur" value="${escAttr(report.admin_note || "")}" onblur="this.onblur=null;updateBugReportAdminNote('${report.id}', this.value)" style="width:100%;padding:8px 10px;border-radius:8px;border:1.5px solid ${th.border};background:${th.bg};color:${th.text};font-size:12px;font-family:inherit;outline:none;box-sizing:border-box" />
      </div>`
    : (report.admin_note ? `<div style="margin-top:8px;padding:8px 10px;border-radius:8px;background:${th.bg};border:1px solid ${th.border};font-size:12px;color:${th.textSecondary};line-height:1.5"><span style="font-weight:700;color:${th.text}">✎ Admin note: </span>${esc(report.admin_note)}</div>` : "");

  const adminDelete = admin
    ? `<button onclick="this.disabled=true;deleteBugReport('${report.id}')" title="Delete report" aria-label="Delete report" style="background:none;border:none;color:${th.textMuted};font-size:14px;cursor:pointer;padding:8px;margin-left:auto;transition:color 0.15s ease" onmouseenter="this.style.color='#E74C3C'" onmouseleave="this.style.color='${th.textMuted}'">✕</button>`
    : "";

  return `<div style="padding:14px 16px;background:${th.surface};border:1.5px solid ${th.border};border-radius:14px">
    <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap">
      ${statusControl}
      <span style="font-size:12px;font-weight:600;color:${th.textMuted}">${esc(meta)}</span>
      ${adminDelete}
    </div>
    <div style="margin-top:10px;font-size:14px;color:${th.text};line-height:1.55;white-space:pre-wrap;word-break:break-word">${esc(report.description)}</div>
    ${shot}
    <div style="margin-top:10px;font-size:11px;color:${th.textFaint}">${reporter}${date}</div>
    ${adminNoteEditor}
  </div>`;
}

function renderPendingQueueCard(report) {
  const th = t(darkMode);
  const typeLabel = BUG_TYPE_LABELS[report.report_type] || report.report_type;
  const sectionLabel = BUG_SECTION_LABELS[report.section] || report.section;
  const date = relativeDate(report.created_at);
  const reporter = report.reporter_name ? `— ${esc(report.reporter_name)} · ` : "";
  // Reporter/date live in the header row (right-aligned) rather than the bottom row
  // used by renderBugReportCard, so the bottom is free for Approve/Delete buttons.
  const shot = report.screenshot_url
    ? `<img src="${escAttr(report.screenshot_url)}" data-url="${escAttr(report.screenshot_url)}" onclick="openScreenshotLightbox(this.getAttribute('data-url'))" style="width:80px;height:80px;object-fit:cover;border-radius:8px;cursor:zoom-in;border:1.5px solid ${th.border};margin-top:10px;display:block" alt="Screenshot" onerror="this.style.display='none'" />`
    : "";
  return `<div style="padding:14px 16px;background:${th.surface};border:1.5px solid #F1C40F;border-left-width:6px;border-radius:14px">
    <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap">
      ${renderBugReportStatusPill("pending")}
      <span style="font-size:12px;font-weight:600;color:${th.textMuted}">${esc(typeLabel)} · ${esc(sectionLabel)}</span>
      <span style="font-size:11px;color:${th.textFaint};margin-left:auto">${reporter}${date}</span>
    </div>
    <div style="margin-top:10px;font-size:14px;color:${th.text};line-height:1.55;white-space:pre-wrap;word-break:break-word">${esc(report.description)}</div>
    ${shot}
    <div style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap">
      <button onclick="this.disabled=true;approveBugReport('${report.id}')" style="padding:8px 14px;border-radius:10px;border:none;background:#2ECC71;color:#fff;font-size:13px;font-weight:700;cursor:pointer;font-family:inherit;transition:all 0.15s ease">✓ Approve</button>
      <button onclick="this.disabled=true;deleteBugReport('${report.id}')" style="padding:8px 14px;border-radius:10px;border:1.5px solid ${th.border};background:${th.surface};color:#E74C3C;font-size:13px;font-weight:700;cursor:pointer;font-family:inherit;transition:all 0.15s ease">🗑 Delete</button>
    </div>
  </div>`;
}

function renderPendingQueue() {
  if (!isAdmin()) return "";
  const th = t(darkMode);
  const pending = loadBugReports().filter(r => r.status === "pending");
  if (pending.length === 0) {
    return `<div style="padding:14px 16px;background:${th.surface};border:1.5px dashed ${th.border};border-radius:14px;font-size:13px;color:${th.textMuted};text-align:center;margin-bottom:18px">📭 Pending queue is empty.</div>`;
  }
  return `<div style="margin-bottom:18px">
    <h3 style="margin:0 0 10px 0;font-size:15px;font-weight:800;color:${th.text}">📥 Pending review (${pending.length})</h3>
    <div style="display:flex;flex-direction:column;gap:10px">${pending.map(renderPendingQueueCard).join("")}</div>
  </div>`;
}

function renderBugReportsList() {
  const th = t(darkMode);
  let reports = loadBugReports().filter(r => r.status !== "pending");
  if (_bugReportFilter !== "all") {
    reports = reports.filter(r => r.status === _bugReportFilter);
  }
  if (reports.length === 0) {
    const msg = _bugReportFilter === "all"
      ? "No reports yet — be the first to flag an issue!"
      : "No reports with this status.";
    return `<div style="padding:24px;text-align:center;color:${th.textMuted};font-size:13px;border:1.5px dashed ${th.border};border-radius:14px">${msg}</div>`;
  }
  return `<div style="display:flex;flex-direction:column;gap:12px">${reports.map(renderBugReportCard).join("")}</div>`;
}

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
    // Immediately clear stale nests from view by re-fetching (filtered by migration_id)
    await loadNestsFromSupabase();
    if (state.tab === "nests") render();
    // Background cleanup: delete old nests from Supabase
    fetch(`${SUPABASE_URL}/rest/v1/nests?migration_id=lt.${currentId}`, {
      method: "DELETE",
      headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` }
    }).catch(() => {});
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
    body: JSON.stringify({ pokemon, location, reporter_id: reporterId, lat, lng, migration_id: getCurrentMigrationId() })
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
  if (ev && ev.startsAt) {
    target = new Date(ev.startsAt);
  } else if (ev) {
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
function formatPublishedDate(d) {
  return new Date(d + "T12:00:00").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
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

// Multi-day raid-boss rotations stay in raids until the next boss takes over at
// 10am the day AFTER endDate. Single-day, time-boxed raid events (Raid Day,
// Super Mega Raid Day) instead end at the clock end-time in their `time` field.
// Other events end at the parsed end-time on endDate.
function getEventEndDate(ev) {
  const endDate = ev.endDate || ev.date;
  if (ev.type === "Raid") {
    const isMultiDay = ev.endDate && ev.endDate !== ev.date;
    const hasEndTime = ev.time && /[––]\s*\d{1,2}:\d{2}\s*(AM|PM)/i.test(ev.time);
    if (!isMultiDay && hasEndTime) {
      const { h, min } = parseEndHour(ev);
      const e = new Date(endDate + "T00:00:00");
      e.setHours(h, min, 59);
      return e;
    }
    const e = new Date(endDate + "T00:00:00");
    e.setDate(e.getDate() + 1);
    e.setHours(10, 0, 0);
    return e;
  }
  if (ev.endsAt) return new Date(ev.endsAt);
  const { h, min } = parseEndHour(ev);
  const e = new Date(endDate + "T00:00:00");
  if (typeof ev.endHour === "number") {
    e.setHours(ev.endHour, typeof ev.endMin === "number" ? ev.endMin : 0, 0);
  } else {
    e.setHours(h, min, 59);
  }
  return e;
}

function getEventStartDate(ev) {
  if (ev.startsAt) return new Date(ev.startsAt);
  const { h, min } = parseStartHour(ev);
  const s = new Date(ev.date + "T00:00:00");
  // Multi-day raid-boss rotations become available at 10am on the start day.
  // Single-day, time-boxed raid events (Raid Day) use their listed start time.
  const isMultiDayRaid = ev.type === "Raid" && ev.endDate && ev.endDate !== ev.date;
  if (isMultiDayRaid || (h === 0 && min === 0)) {
    s.setHours(10, 0, 0);
  } else {
    s.setHours(h, min, 0);
  }
  return s;
}

function isActive(ev) {
  const n = new Date();
  return n >= getEventStartDate(ev) && n <= getEventEndDate(ev);
}

function isOver(ev) {
  return new Date() > getEventEndDate(ev);
}

function getWeekBounds(now = new Date(), weekOffset = 0) {
  const day = now.getDay();
  const monOffset = (day + 6) % 7;
  const start = new Date(now);
  start.setHours(0, 0, 0, 0);
  start.setDate(start.getDate() - monOffset + (weekOffset * 7));
  const end = new Date(start);
  end.setDate(end.getDate() + 6);
  end.setHours(23, 59, 59, 999);
  return { start, end };
}

function pillIconFor(ev) {
  if (ev.type === "Community Day") return "⚡";
  if (ev.type === "Max Battle") return "🛡️";
  if (ev.type === "Raid") return "🔥";
  if (ev.type === "GO Fest") return "🌍";
  if (/spotlight hour/i.test(ev.time || "")) return "✨";
  if (/raid hour/i.test(ev.time || "")) return "💥";
  return "🎉";
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

// Safe for use inside double-quoted HTML attribute values (escapes `"` in addition to &<>).
function escAttr(str) {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// --- COUNTDOWN TIMER ---
function getEndCountdown(ev) {
  if (!ev) return null;
  const diff = getEventEndDate(ev) - new Date();
  if (diff <= 0) return null;
  return { days: Math.floor(diff / 864e5), hours: Math.floor((diff % 864e5) / 36e5), minutes: Math.floor((diff % 36e5) / 6e4), seconds: Math.floor((diff % 6e4) / 1000) };
}

function legibleColor(c, dark) {
  if (!dark || !c || c[0] !== "#" || c.length < 7) return c;
  const r = parseInt(c.slice(1, 3), 16);
  const g = parseInt(c.slice(3, 5), 16);
  const b = parseInt(c.slice(5, 7), 16);
  const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  if (lum >= 130) return c;
  const t = lum < 70 ? 0.62 : 0.42;
  const mix = (x) => Math.round(x + (255 - x) * t).toString(16).padStart(2, "0");
  return `#${mix(r)}${mix(g)}${mix(b)}`;
}

function renderCountdown(dateStr, color, over, th, ev, compact) {
  const fs = compact ? 12 : 12;
  const mw = compact ? 26 : 26;
  const pd = compact ? "3px 5px" : "3px 6px";
  const br = compact ? 6 : 6;
  const gp = compact ? 3 : 4;
  const lfs = compact ? 8 : 8;
  const cfs = compact ? 10 : 11;
  const lbfs = compact ? 13 : 12;
  const mr = compact ? "2px" : "3px";
  const digitColor = legibleColor(color, th.dark);
  const endColor = legibleColor("#2ECC71", th.dark);
  const labelColor = th.textSecondary;
  const colonColor = th.textMuted;
  // If event is active, show countdown to end time
  if (ev && isActive(ev)) {
    const endCd = getEndCountdown(ev);
    if (endCd) {
      const units = endCd.days > 0
        ? [["D", endCd.days], ["H", endCd.hours], ["M", endCd.minutes], ["S", endCd.seconds]]
        : [["H", endCd.hours], ["M", endCd.minutes], ["S", endCd.seconds]];
      return `<div style="display:flex;gap:${gp}px;align-items:center"><span style="font-size:${lbfs}px;color:${endColor};font-weight:700;margin-right:${mr}">Ends in</span>${units.map(([l, v], i) =>
        `<div style="display:flex;align-items:center;gap:1px"><div style="background:${th.countdownBg("#2ECC71")};border:1.5px solid ${th.countdownBorder("#2ECC71")};border-radius:${br}px;padding:${pd};min-width:${mw}px;text-align:center;font-weight:700;font-size:${fs}px;font-variant-numeric:tabular-nums;color:${endColor};font-family:'JetBrains Mono',monospace;${l === "S" ? "animation:countdownTick 1s ease infinite;" : ""}">${String(v).padStart(2, "0")}</div><span style="font-size:${lfs}px;color:${labelColor};font-weight:600">${l}</span>${i < units.length - 1 ? `<span style="color:${colonColor};font-weight:300;margin-left:1px;font-size:${cfs}px">:</span>` : ""}</div>`
      ).join("")}</div>`;
    }
    return `<span style="font-size:12px;color:#2ECC71;font-weight:700">LIVE NOW</span>`;
  }
  if (ev && isOver(ev)) return `<span style="font-size:12px;color:${th.textMuted};font-weight:600">Event Over</span>`;
  const cd = getCountdown(dateStr, ev);
  if (!cd && over) return `<span style="font-size:12px;color:${th.textMuted};font-weight:600">Event Over</span>`;
  if (!cd) return `<span style="font-size:12px;color:#2ECC71;font-weight:700">LIVE NOW</span>`;
  const units = [["D", cd.days], ["H", cd.hours], ["M", cd.minutes], ["S", cd.seconds]];
  return `<div style="display:flex;gap:${gp}px;align-items:center"><span style="font-size:${lbfs}px;color:${digitColor};font-weight:700;margin-right:${mr}">Starts in</span>${units.map(([l, v], i) =>
    `<div style="display:flex;align-items:center;gap:1px"><div style="background:${th.countdownBg(color)};border:1.5px solid ${th.countdownBorder(color)};border-radius:${br}px;padding:${pd};min-width:${mw}px;text-align:center;font-weight:700;font-size:${fs}px;font-variant-numeric:tabular-nums;color:${digitColor};font-family:'JetBrains Mono',monospace;${l === "S" ? "animation:countdownTick 1s ease infinite;" : ""}">${String(v).padStart(2, "0")}</div><span style="font-size:${lfs}px;color:${labelColor};font-weight:600">${l}</span>${i < 3 ? `<span style="color:${colonColor};font-weight:300;margin-left:1px;font-size:${cfs}px">:</span>` : ""}</div>`
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
  if (Array.isArray(counters)) return counters.map(c => renderCounters(c, th)).join(`<div style="height:14px"></div>`);
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
        ${pokemonImgHTML(cPkmn, 100) || ""}
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
  // Shadow raids must be checked BEFORE the regular star tiers so labels like
  // "Shadow Articuno (5\u2605 Shadow Raid)" don't get bucketed as plain 5-Star.
  if (/Shadow/i.test(name)) {
    if (/\(1\u2605/.test(name)) return "Shadow 1-Star Raids";
    if (/\(3\u2605/.test(name)) return "Shadow 3-Star Raids";
    if (/\(5\u2605/.test(name)) return "Shadow 5-Star Raids";
    if (/weekend|final week/i.test(name)) return "Shadow Raids";
  }
  if (/\(Primal Raid\)/i.test(name)) return "Primal Raids";
  if (/\(1\u2605/.test(name)) return "1-Star Raids";
  if (/\(3\u2605/.test(name)) return "3-Star Raids";
  if (/\(5\u2605/.test(name)) return "5-Star Raids";
  if (/\(6\u2605/.test(name)) return "6-Star Max Battles";
  if (/\(Mega\)/.test(name)) return "Mega Raids";
  if (/Lures/.test(name)) return "Lure Encounters";
  if (/Research Breakthrough/.test(name)) return "Research Breakthrough";
  if (/Field Research - rare/i.test(name)) return "Field Research (Rare)";
  if (/Field Research/i.test(name)) return "Field Research";
  if (/Mystery Box/i.test(name)) return "Mystery Box";
  return null;
}
const TIER_COLORS = { "1-Star Raids": "#FFB6C1", "3-Star Raids": "#F1C40F", "5-Star Raids": "#8E44AD", "6-Star Max Battles": "#E74C3C", "Mega Raids": "#E67E22", "Primal Raids": "#D35400", "Shadow Raids": "#7B2FBE", "Lure Encounters": "#3498DB", "Shadow 1-Star Raids": "#7B2FBE", "Shadow 3-Star Raids": "#7B2FBE", "Shadow 5-Star Raids": "#7B2FBE", "Research Breakthrough": "#E67E22", "Field Research": "#3498DB", "Field Research (Rare)": "#9B59B6", "Mystery Box": "#95A5A6" };
const TIER_BOTTOM = ["3-Star Raids","Shadow 3-Star Raids"];
const TIER_HEADS = { "1-Star Raids": 1, "3-Star Raids": 3, "5-Star Raids": 5, "6-Star Max Battles": 6, "Mega Raids": 4, "Primal Raids": 5, "Shadow Raids": 5, "Shadow 1-Star Raids": 1, "Shadow 3-Star Raids": 3, "Shadow 5-Star Raids": 5 };
function raidHeadIcon(size, color) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 250 250" fill="${color}" xmlns="http://www.w3.org/2000/svg"><path d="M196.15 92.13c6.34-4.09 8.67-10 10.87-15.95 3-8 5.36-7.4 11.38-2.15 3.6 3.17 5.6 6.62 1.15 12.87 5.86-.57 9.64-.88 13.42-1.33s5.28 1 5.68 4.91c.78 7.6-2.75 11.91-11.25 14.29 7.39 2.65 8.43 6.89 7.43 12.91-.91 5.5-4.15 6.86-8.86 7 3.88 9 1.57 12.78-7.48 13.2-9.37.43-12.26 3.26-10.07 12.32 2.63 10.84-.63 19.28-7.24 27.59-10.85 13.64-22.52 26.37-36.41 36.94-26.77 20.27-53.18 20.37-79.86.21-14.74-11.14-27-24.66-38.31-39.24-5.73-7.41-8-15.1-5.8-24.21.59-2.52 1.27-5.43.58-7.78-1.6-5.42-6.08-6-11.21-6q-12.18.09-6.83-13c-5-.26-8.33-2.11-9-7.82s0-9.83 8-12c-9.59-2.54-12.78-7.54-11.77-15.3.37-2.79 1.59-4.34 4.46-4.13 3.94.3 7.87.74 12.4 1.18 0-3.21-.82-6.33.22-8.61 1.16-2.54 3.81-4.58 6.17-6.35 3.89-2.81 5.18-2.24 7.56 2.32 2.57 5 5.12 10 7.93 14.9.77 1.33 2.41 2.16 3.69 3.25 6.68-5.28 9.32-11.5 6.58-19.47-2.8-8.16-5.66-16.29-8.48-24.44-1-2.81-2.48-5.59-2.73-8.47-.72-8 5.83-13.28 13.27-10.63C76 34.25 88.92 41.61 97.36 55a34 34 0 0 0 3.42 5 7.16 7.16 0 0 0 12-2.25c2.76-6.78 5.16-13.71 8.07-20.42a6.87 6.87 0 0 1 4.23-3.33c.82-.19 2.68 1.83 3.25 3.2 2.57 6.13 4.94 12.36 7.19 18.62 1.17 3.24 2.15 6 6.48 6.3 4 .31 6.23-1.13 8.09-4.32C157.64 44.83 169 36.42 182.7 31c4.68-1.85 9.62-5.8 14.67-.54s4 10.52 1.46 16.59c-3.36 7.92-5.77 16.24-8.71 24.34s-1.12 14.96 6.03 20.74ZM71 142c-2.06 5.58-4.44 11-6 16.65a11 11 0 0 0 1.15 7.51c8.57 15.27 19.26 28.78 34.28 38.25 16.63 10.49 33.37 10.1 49.7-.69 14.18-9.37 24.65-22.21 32.8-37 1.2-2.17 2.17-5.23 1.61-7.45-1.5-5.88-3.9-11.54-5.94-17.28l-2.54.14c-.68 2.58-1.82 5.14-1.92 7.75-.17 4.3.64 8.65.41 12.95-.12 2.4-1.33 6.61-2.39 6.72-2.51.26-5.55-1-7.8-2.46-2.94-2-5.32-4.75-7.74-7-25.39 13.75-35.73 13.77-64 .35-3.09 2.76-6.11 5.86-9.54 8.43-4.32 3.24-8 1.75-8.21-3.54a83.55 83.55 0 0 1 .84-14.9c.53-3.83-.49-6.43-4.71-8.43Zm27.17.67C103 126 94.86 103.92 82.32 96.5c-2.57-1.53-4.39-.59-6.17 1.09-6.26 5.87-9.69 13.24-11.27 21.58-.68 3.58 1.23 5.52 4.06 7.09 9.49 5.29 18.94 10.64 29.19 16.4Zm52.13.14c9.2-5 17.07-9.15 24.83-13.52 10.61-6 11.12-7.56 6.54-18.72a43.61 43.61 0 0 0-2.14-4.47c-7.2-12.92-11.35-13.32-20.43-1.64-8.5 10.86-12.63 22.89-8.84 38.34Zm-25 4.8c6.22-.41 13-2.14 16.64-9 3.53-6.62 1.66-12.76-2.78-18.42-3.26-4.17-6.16-8.62-9.46-12.75-4.48-5.62-5.74-5.58-10.4.31-3.28 4.15-6.08 8.68-9.44 12.76-4.71 5.74-5.86 12-2.35 18.41s9.72 8.49 17.76 8.68Z"/><path d="M109.32 128.36c9 10.28 21.31 10.41 30.1 1.19-.12 9.77-4.21 13.84-14.25 14.18-10.43.35-14.79-3.57-15.85-15.37Z"/><path d="M114.67 120.53c6.64 4.72 13.16 6 19.53-.25 3.52 4.38 1.57 7.35-1.09 9.87-3.45 3.26-11.82 3.59-15.8.65-3.37-2.49-5.31-5.62-2.64-10.27Z"/><path d="M124.38 107.52c6.53 7 7.53 9.48 5 11.88-2.23 2.15-6.69 2.24-9.2.18-2.84-2.37-2.18-4.51 4.2-12.06Z"/></svg>`;
}
function renderRaidHeads(tier) {
  const count = TIER_HEADS[tier];
  if (!count) return "";
  const color = darkMode ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.85)";
  return `<div style="display:flex;gap:2px;align-items:center;margin-left:auto">${Array(count).fill(raidHeadIcon(20, color)).join("")}</div>`;
}
const TIER_EGGS = { "1-Star Raids": "assets/pokemon-images/Raid-Eggs/1-star.png", "3-Star Raids": "assets/pokemon-images/Raid-Eggs/3-star.png", "5-Star Raids": "assets/pokemon-images/Raid-Eggs/5-star.png", "Mega Raids": "assets/pokemon-images/Raid-Eggs/mega.png", "Primal Raids": "assets/pokemon-images/Raid-Eggs/5-star.png", "Shadow Raids": "assets/pokemon-images/Raid-Eggs/shadow.png", "Shadow 1-Star Raids": "assets/pokemon-images/Raid-Eggs/1-star.png", "Shadow 3-Star Raids": "assets/pokemon-images/Raid-Eggs/3-star.png", "Shadow 5-Star Raids": "assets/pokemon-images/Raid-Eggs/shadow.png", "Field Research": "assets/pokemon-images/icons/green-research.png", "Field Research (Rare)": "assets/pokemon-images/icons/green-research.png", "Research Breakthrough": "assets/pokemon-images/icons/QuestReward.png" };
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

function toggleAccordion(el) {
  const isOpen = el.dataset.open === "true";
  const newState = isOpen ? "false" : "true";
  el.dataset.open = newState;
  el.setAttribute('aria-expanded', newState);
  const content = el.nextElementSibling;
  if (!content || !content.classList.contains('acc-content')) return;
  content.dataset.open = newState;

  // Find ancestor accordions that are open (their max-height needs to grow/shrink)
  const openAncestors = [];
  let p = content.parentElement;
  while (p) {
    if (p.classList && p.classList.contains('acc-content') && p.dataset.open === "true") {
      openAncestors.push(p);
    }
    p = p.parentElement;
  }

  // Lock ancestors to explicit pixel max-height (transition needs px → px, not none → px)
  openAncestors.forEach(a => {
    a.style.maxHeight = a.scrollHeight + "px";
  });

  if (newState === "false") {
    // Closing: lock this content to its current pixel height first
    if (!content.style.maxHeight || content.style.maxHeight === "none") {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }

  // Force reflow so the explicit pixel values commit before we start the new transition
  void content.offsetHeight;

  // Now set the new target values — transition will fire
  if (newState === "true") {
    const tierTarget = content.scrollHeight;
    content.style.maxHeight = tierTarget + "px";
    openAncestors.forEach(a => {
      a.style.maxHeight = (parseFloat(a.style.maxHeight) + tierTarget) + "px";
    });
  } else {
    const tierCurrent = parseFloat(content.style.maxHeight) || 0;
    requestAnimationFrame(() => {
      content.style.maxHeight = "0px";
      openAncestors.forEach(a => {
        a.style.maxHeight = Math.max(0, parseFloat(a.style.maxHeight) - tierCurrent) + "px";
      });
    });
  }
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
  return name.replace(/^★/, "").replace(/\s*\(\d★\s*(?:Raid|Shadow Raid)?\)|\s*\(Mega\)|\s*\(\d★\s*Max Battle.*?\)|\s*\(Research Breakthrough\)|\s*\(Field Research(?:\s*-\s*rare)?\)|\s*\(Mystery Box\)|\s*\(weekends?\)|\s*\(final week.*?\)/gi, "").replace(/\s*✨/g, "").trim();
}
function renderBossItem(item, color, th, cardLayout, noSparkles, groupSize) {
  const pkmn = getPokemonImg(item);
  const imgSize = cardLayout ? 120 : 150;
  let imgEl = pokemonImgHTML(pkmn, imgSize);
  if (imgEl && !noSparkles) imgEl = wrapShinySparkles(imgEl, item, imgSize);
  const raidData = getRaidBossData(item);
  const typesHTML = raidData ? `<div style="display:flex;gap:4px;margin-top:4px;flex-wrap:wrap;${cardLayout ? "justify-content:center" : ""}">${raidData.types.map(t =>
    `<span style="font-size:${cardLayout ? 11 : 13}px;font-weight:700;color:#fff;background:${TYPE_COLORS[t] || "#888"};padding:2px 8px;border-radius:10px">${t}</span>`
  ).join("")}</div>` : "";
  const isRaidTier = /\(\d★\s*(?:Raid|Shadow Raid)?\)|\(Mega\)|\(Primal Raid\)|\(\d★\s*Max Battle|\(Shadow Raid\)|\(weekends?\)|\(final week.*?\)/i.test(item);
  const cpHTML = raidData && raidData.cp && isRaidTier ? `<div style="margin-top:5px;font-size:${cardLayout ? 13 : 14}px;color:${th.text};line-height:1.6;${cardLayout ? "text-align:center" : ""}">
    <div>CP <span style="font-weight:800;font-size:${cardLayout ? 15 : 16}px">${raidData.cp}</span></div>
    ${raidData.weather ? `<div style="font-size:${cardLayout ? 11 : 13}px;color:${th.textSecondary}">\u2601\uFE0F ${raidData.weather}: <span style="font-weight:700">${raidData.cpBoost}</span></div>` : ""}
  </div>` : "";
  const rawCleaned = cleanRaidLabel(item);
  const hemiMatch = rawCleaned.match(/\s*\((Southern|Northern)\s+Hemisphere\)\s*$/i);
  const cleanedItemName = hemiMatch ? rawCleaned.slice(0, hemiMatch.index).trim() : rawCleaned;
  const subtitleText = hemiMatch ? hemiMatch[1].charAt(0).toUpperCase() + hemiMatch[1].slice(1).toLowerCase() + " Hemisphere" : "";
  const subtitleHTML = subtitleText ? `<div style="margin-top:2px;font-size:${cardLayout ? 11 : 12}px;font-weight:600;color:${th.textSecondary};font-style:italic;${cardLayout ? "text-align:center" : ""}">${esc(subtitleText)}</div>` : "";
  const groupSizeList = Array.isArray(groupSize) ? groupSize : (groupSize ? [groupSize] : []);
  const matchedGroupSize = isRaidTier ? groupSizeList.find(gs => gs && gs.bossName === cleanedItemName) : null;
  const groupSizeHTML = matchedGroupSize ? renderGroupSizeCompact(matchedGroupSize, th, cardLayout) : "";
  const weaknesses = raidData ? getWeaknesses(raidData.types) : [];
  const resistances = raidData ? getResistances(raidData.types) : [];
  const hasBack = weaknesses.length > 0 || resistances.length > 0;
  const backContent = hasBack ? `
    <div style="font-size:11px;font-weight:700;color:${th.textMuted};margin-bottom:16px;text-transform:uppercase;letter-spacing:0.5px">${esc(cleanRaidLabel(item).replace(/\s*\(.*/,"").replace(/\s+(with|wearing)\s+.*/i,"").trim())}</div>
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
      <div style="margin-top:6px;font-weight:700;color:${th.text};font-size:13px">${esc(cleanedItemName)}</div>
      ${subtitleHTML}${typesHTML}${cpHTML}${groupSizeHTML}
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
    || `<div style="width:5px;height:5px;border-radius:50%;background:${color};flex-shrink:0"></div>`}<div style="flex:1;min-width:0"><div>${esc(cleanedItemName)}</div>${subtitleHTML}${typesHTML}${cpHTML}${groupSizeHTML}</div></div>`;
  if (!hasBack) {
    return `<div style="border-radius:9px;background:${th.accentBgSubtle(color)};width:100%">${frontRowHTML}</div>`;
  }
  return `<div class="flip-card" onclick="flipCard(this)" style="width:100%">
    <div class="flip-card-front" style="background:${th.accentBgSubtle(color)};border-radius:9px">${frontRowHTML}</div>
    <div class="flip-card-back" style="background:${th.accentBgSubtle(color)};border-radius:9px;padding:12px 14px;display:flex;flex-direction:column;${pkmn ? "" : "justify-content:center"}">${backContent}</div>
  </div>`;
}

function renderRoutes(routes, th) {
  const phaseCards = routes.phases.map(p => {
    const pokemonRows = p.pokemon.map(pk => {
      const pkmn = getPokemonImg(pk);
      let imgEl = pokemonImgHTML(pkmn, 100);
      if (imgEl) imgEl = wrapShinySparkles(imgEl, pk, 100);
      return `<div style="display:flex;flex-direction:column;align-items:center;gap:4px">${imgEl || ""}<span style="font-size:13px;font-weight:600;color:${th.text}">${esc(cleanRaidLabel(pk))}</span></div>`;
    }).join("");
    return `<div style="flex:1;min-width:200px;border:1.5px solid ${th.border};border-radius:14px;overflow:hidden">
      <div style="padding:8px 14px;background:${th.accentBgSubtle("#27AE60")};border-bottom:1.5px solid ${th.border};display:flex;align-items:center;justify-content:space-between;gap:8px">
        <div style="font-size:12px;font-weight:700;color:${th.text};letter-spacing:0.5px">${esc(p.dates)}</div>
        <span style="font-size:10px;font-weight:700;color:#FFD700;background:#FFD70020;padding:2px 8px;border-radius:8px;white-space:nowrap">\u2605 Boosted Shiny</span>
      </div>
      <div style="padding:10px 14px;display:flex;flex-wrap:wrap;gap:10px;justify-content:center">${pokemonRows}</div>
    </div>`;
  }).join("");
  const notesHTML = routes.notes ? `<div style="display:flex;flex-direction:column;gap:6px;margin-top:8px">${routes.notes.map(n =>
    `<div style="padding:10px 14px;border-radius:10px;background:${th.accentBgSubtle("#27AE60")};border:1px solid ${th.countdownBorder("#27AE60")};font-size:13px;color:${th.textSecondary};line-height:1.5;display:flex;align-items:center;gap:8px"><span style="color:#27AE60;font-weight:700">\u2022</span> ${esc(n)}</div>`
  ).join("")}</div>` : "";
  return `<div><h4 style="margin:0 0 10px 0;font-size:13px;font-weight:700;color:${th.text};display:flex;align-items:center;gap:8px"><span>\uD83D\uDEE4\uFE0F</span> Route Spawns</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px">${phaseCards}</div>${notesHTML}</div>`;
}

function renderDetailSection(title, emoji, items, color, th, showImages, noSparkles, groupSize) {
  if (!showImages) {
    const renderItem = item => {
      if (item && typeof item === "object" && item.img) {
        const imgEl = `<img src="${item.img}" style="width:28px;height:28px;object-fit:contain;flex-shrink:0" onerror="this.style.display='none'" />`;
        return `<div style="display:flex;align-items:center;gap:10px;padding:5px 12px;border-radius:9px;background:${th.accentBgSubtle(color)};font-size:13.5px;color:${th.textSecondary};line-height:1.45">${imgEl}<span>${esc(item.text)}</span></div>`;
      }
      return `<div style="display:flex;align-items:center;gap:10px;padding:7px 12px;border-radius:9px;background:${th.accentBgSubtle(color)};font-size:13.5px;color:${th.textSecondary};line-height:1.45"><div style="width:5px;height:5px;border-radius:50%;background:${color};flex-shrink:0"></div>${esc(item)}</div>`;
    };
    return `<div><h4 style="margin:0 0 8px 0;font-size:13px;font-weight:700;color:${th.text};display:flex;align-items:center;gap:8px"><span>${emoji}</span> ${esc(title)}</h4>
      <div style="display:flex;flex-direction:column;gap:5px">${items.map(renderItem).join("")}</div></div>`;
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
  const tierKeys = (() => { const keys = Object.keys(tiered); const idx = k => keys.indexOf(k); return keys.slice().sort((a,b)=>{const ba=TIER_BOTTOM.indexOf(a),bb=TIER_BOTTOM.indexOf(b); if(ba<0 && bb<0) return idx(a)-idx(b); if(ba>=0 && bb>=0) return ba-bb; return ba<0?-1:1;}); })();
  // If no tiers found, render flat with card layout on tablet+
  if (tierKeys.length === 0) {
    return `<div style="display:flex;flex-direction:column"><h4 style="margin:0 0 8px 0;font-size:13px;font-weight:700;color:${th.text};display:flex;align-items:center;gap:8px"><span>${emoji}</span> ${esc(title)}</h4>
      ${legendHTML}
      <div style="display:flex;${breakpoint !== "mobile" ? "flex-wrap:wrap;gap:8px" : "flex-direction:column;gap:5px"}">${items.map(item => renderBossItem(item, color, th, breakpoint !== "mobile", noSparkles, groupSize)).join("")}</div></div>`;
  }
  // Render with tier groupings
  let html = `<div style="display:flex;flex-direction:column"><h4 style="margin:0 0 12px 0;font-size:13px;font-weight:700;color:${th.text};display:flex;align-items:center;gap:8px"><span>${emoji}</span> ${esc(title)}</h4>${legendHTML}`;
  // Untiered items first (wild spawns etc)
  if (untiered.length > 0) {
    html += `<div style="margin-bottom:12px">${tierKeys.length > 0 ? "" : ""}
      <div style="display:flex;${breakpoint !== "mobile" ? "flex-wrap:wrap;gap:8px" : "flex-direction:column;gap:5px"}">${untiered.map(item => renderBossItem(item, color, th, breakpoint !== "mobile", noSparkles, groupSize)).join("")}</div></div>`;
  }
  // Tiered groups
  tierKeys.forEach(tier => {
    const tierColor = TIER_COLORS[tier] || color;
    const eggUrl = TIER_EGGS[tier];
    const usesShadowEgg = eggUrl && eggUrl.endsWith("shadow.png");
    const eggImg = eggUrl ? `<img src="${eggUrl}" style="width:${usesShadowEgg ? 44 : 28}px;height:${usesShadowEgg ? 44 : 28}px;object-fit:contain;flex-shrink:0" onerror="this.style.display='none'" />` : "";
    html += `<div style="margin-bottom:12px;border:1.5px solid ${th.border};border-radius:14px;overflow:hidden">
      <div style="padding:10px 14px;background:${th.accentBgSubtle(tierColor)};border-bottom:1.5px solid ${th.border};display:flex;align-items:center;gap:8px">
        ${eggImg}
        <span style="font-size:12px;font-weight:700;color:${th.text};letter-spacing:0.5px;text-transform:uppercase">${tier}</span>
        ${renderRaidHeads(tier)}
      </div>
      <div style="padding:8px;display:flex;${breakpoint !== "mobile" ? "flex-wrap:wrap;gap:8px" : "flex-direction:column;gap:5px"}">${tiered[tier].map(item => renderBossItem(item, tierColor, th, breakpoint !== "mobile", noSparkles, groupSize)).join("")}</div>
    </div>`;
  });
  html += `</div>`;
  return html;
}

// Compact group-size pill row embedded inside a raid-boss tile (below CP).
// Shows individual cells for 1..(greenAt-1) then a final "greenAt+" cell
// representing the comfortable range. Colors: grey below minimum (can't
// attempt), red from minimum through optimalMin (barely viable), orange
// above optimalMin but below greenAt (workable), green at greenAt+.
function renderGroupSizeCompact(gs, th, centered) {
  if (!gs) return "";
  const GREY_BG = "#3A4149", GREY_FG = "#95A5A6", RED = "#C0392B", ORANGE = "#E67E22", GREEN = "#27AE60";
  const greenAt = gs.greenAt != null ? gs.greenAt : gs.optimalMin;
  const styleFor = n => n < gs.minimum ? `background:${GREY_BG};color:${GREY_FG}` : `background:${n <= gs.optimalMin ? RED : (n < greenAt ? ORANGE : GREEN)};color:#fff`;
  const cells = [];
  for (let n = 1; n < greenAt; n++) {
    cells.push(`<div style="display:flex;align-items:center;justify-content:center;min-width:26px;height:24px;padding:0 8px;border-radius:7px;${styleFor(n)};font-weight:800;font-size:12px">${n}</div>`);
  }
  cells.push(`<div style="display:flex;align-items:center;justify-content:center;min-width:30px;height:24px;padding:0 8px;border-radius:7px;background:${GREEN};color:#fff;font-weight:800;font-size:12px">${greenAt}+</div>`);
  const optimalText = gs.optimalMin === gs.optimalMax ? `${gs.optimalMin}` : `${gs.optimalMin}–${gs.optimalMax}`;
  const align = centered ? "center" : "flex-start";
  return `<div style="margin-top:8px;display:flex;flex-direction:column;align-items:${align};gap:5px">
    <div style="font-size:10px;font-weight:700;color:${th.textMuted};letter-spacing:0.5px;text-transform:uppercase">Group Size</div>
    <div style="display:flex;gap:5px;flex-wrap:wrap;justify-content:${align}">${cells.join("")}</div>
    <div style="font-size:11px;color:${th.textSecondary};line-height:1.4;text-align:${centered ? "center" : "left"}">Min <strong style="color:${th.text}">${gs.minimum}</strong> · Optimal <strong style="color:${th.text}">${optimalText}</strong> · Easy <strong style="color:${th.text}">${gs.easyAt}+</strong></div>
  </div>`;
}

// Looks up Raid Boss Info for a given dex number by scanning EVENTS for any
// groupSize entry whose bossName resolves (via DEX, with Mega/Shadow/regional
// prefixes stripped) to this dexNum. Returns an array of matches so a Pokemon
// with multiple raid forms (e.g. regular + Mega) can show all of them.
function dexForBossName(bossName) {
  if (DEX[bossName] != null) return DEX[bossName];
  const stripped = bossName.replace(/^(Mega |Shadow |Alolan |Galarian |Hisuian |Paldean )/, "").trim();
  return DEX[stripped];
}
function findRaidBossInfosForDex(dexNum) {
  const matches = [];
  if (!Array.isArray(EVENTS)) return matches;
  for (const ev of EVENTS) {
    const gsList = ev && ev.details && ev.details.groupSize;
    if (!gsList) continue;
    const list = Array.isArray(gsList) ? gsList : [gsList];
    for (const gs of list) {
      if (!gs || !gs.bossName) continue;
      if (dexForBossName(gs.bossName) === dexNum) {
        const bossEntry = (ev.details.bosses || []).find(b => cleanRaidLabel(b) === gs.bossName);
        const tier = bossEntry ? getRaidTier(bossEntry) : null;
        matches.push({ event: ev, groupSize: gs, tier });
      }
    }
  }
  return matches;
}

// Renders the "Raid Boss Info" section on the Pokemon Dex detail page. Shows
// one card per matching raid form: the tier, CP ranges (from pokemon-data.json
// via getRaidBossData), the compact group-size widget, and a link to the event.
function renderDexRaidBossInfo(data, th, isMobile) {
  const infos = findRaidBossInfosForDex(data.dexNum);
  if (!infos || infos.length === 0) return "";
  const cards = infos.map(({ event: ev, groupSize: gs, tier }) => {
    const tierColor = TIER_COLORS[tier] || "#8E44AD";
    const raidData = getRaidBossData(gs.bossName);
    const tierLabel = tier ? tier.replace("Raids", "Raid").replace("Star", "★") : (gs.tier || "Raid Boss");
    const cpHTML = raidData && raidData.cp ? `<div style="padding:12px 14px;background:${th.surface};border-radius:10px;border:1px solid ${th.border};display:flex;flex-direction:column;gap:6px">
      <div style="font-size:11px;font-weight:700;color:${th.textMuted};letter-spacing:0.5px;text-transform:uppercase">Catchable CP</div>
      <div style="font-size:13.5px;color:${th.text};line-height:1.5">CP <strong>${raidData.cp}</strong></div>
      ${raidData.cpBoost && raidData.weather ? `<div style="font-size:13.5px;color:${th.text};line-height:1.5">☁️ ${esc(raidData.weather)}: <strong>${raidData.cpBoost}</strong></div>` : ""}
    </div>` : "";
    const gsHTML = renderGroupSizeCompact(gs, th, false);
    const linkHTML = `<button onclick="selectEvent(${ev.id})" style="display:inline-flex;align-items:center;gap:8px;font-size:13.5px;font-weight:700;color:${tierColor};background:${th.accentBgSubtle(tierColor)};border:1.5px solid ${th.countdownBorder(tierColor)};border-radius:10px;padding:10px 14px;cursor:pointer;font-family:inherit;align-self:flex-start;transition:all 0.15s ease" onmouseenter="this.style.background='${tierColor}';this.style.color='#fff'" onmouseleave="this.style.background='${th.accentBgSubtle(tierColor)}';this.style.color='${tierColor}'">View ${esc(ev.title)} →</button>`;
    return `<div style="padding:${isMobile ? "12px" : "14px"};background:${th.accentBgSubtle(tierColor)};border:1.5px solid ${th.countdownBorder(tierColor)};border-radius:12px;display:flex;flex-direction:column;gap:12px">
      <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
        <div style="font-size:14px;font-weight:700;color:${th.text}">${esc(gs.bossName)}</div>
        <span style="font-size:10px;font-weight:700;color:#fff;background:${tierColor};padding:3px 9px;border-radius:8px;letter-spacing:0.4px;text-transform:uppercase">${esc(tierLabel)}</span>
      </div>
      ${cpHTML}
      ${gsHTML}
      ${linkHTML}
    </div>`;
  }).join("");
  return `<div style="margin-top:20px">
    <div style="font-size:14px;font-weight:700;color:${th.text};margin-bottom:10px">⚔️ Raid Boss Info</div>
    <div style="display:flex;flex-direction:column;gap:12px">${cards}</div>
  </div>`;
}

// Renders a structured Active Bonuses section with optional hero banner,
// habitat-schedule timeline, and labeled bullet sub-cards. Used when an
// event provides `details.bonusGroups` instead of a flat `details.bonuses` array.
function renderBonusGroups(groups, th) {
  const isMobile = breakpoint === "mobile";
  const accent = "#27AE60";
  let html = `<div style="display:flex;flex-direction:column;gap:12px">
    <h4 style="margin:0;font-size:13px;font-weight:700;color:${th.text};display:flex;align-items:center;gap:8px"><span>✨</span> Active Bonuses</h4>`;

  // Hero banner
  if (groups.hero) {
    html += `<div style="padding:14px 16px;border-radius:12px;background:${th.accentBgSubtle(accent)};border:1.5px solid ${th.countdownBorder(accent)};display:flex;align-items:center;gap:10px">
      <span style="font-size:20px">🎉</span>
      <span style="font-size:14.5px;font-weight:700;color:${accent};line-height:1.4">${esc(groups.hero)}</span>
    </div>`;
  }

  // Habitat Schedule
  if (groups.habitatSchedule && groups.habitatSchedule.length > 0) {
    html += `<div style="border:1.5px solid ${th.border};border-radius:14px;overflow:hidden">
      <div style="padding:10px 14px;background:${th.accentBgSubtle("#6C5CE7")};border-bottom:1.5px solid ${th.border};display:flex;align-items:center;gap:8px">
        <span style="font-size:16px">🌍</span>
        <span style="font-size:12px;font-weight:700;color:${th.text};letter-spacing:0.5px;text-transform:uppercase">Habitat Schedule</span>
      </div>
      <div style="padding:10px;display:${isMobile ? "flex" : "grid"};${isMobile ? "flex-direction:column;" : "grid-template-columns:repeat(3,1fr);"}gap:10px">
        ${groups.habitatSchedule.map(slot => `
          <div style="border:1px solid ${th.border};border-radius:10px;padding:10px;background:${th.surface};display:flex;flex-direction:column;gap:8px">
            <div style="align-self:flex-start;font-size:11px;font-weight:700;color:#fff;background:#6C5CE7;padding:3px 10px;border-radius:12px;letter-spacing:0.3px">${esc(slot.time)}</div>
            ${(slot.biomes || []).map((b, i) => `
              <div style="display:flex;flex-direction:column;gap:5px">
                <div style="font-size:12.5px;font-weight:700;color:${th.text}">${esc(b.name)}<span style="font-weight:600;color:${th.textSecondary};font-size:11.5px;margin-left:8px">(${i === 0 ? "Saturday" : "Sunday"})</span></div>
                <div style="display:flex;flex-wrap:wrap;gap:4px">
                  ${(b.types || []).map(t => `<span style="font-size:11px;font-weight:700;color:#fff;background:${TYPE_COLORS[t] || "#888"};padding:2px 8px;border-radius:10px">${esc(t)}</span>`).join("")}
                </div>
              </div>
            `).join("")}
          </div>
        `).join("")}
      </div>
    </div>`;
  }

  // Helper to render a labeled bullet sub-card (Event Hours, Full Day)
  const renderBulletGroup = (icon, label, items) => `
    <div style="border:1.5px solid ${th.border};border-radius:14px;overflow:hidden">
      <div style="padding:10px 14px;background:${th.accentBgSubtle(accent)};border-bottom:1.5px solid ${th.border};display:flex;align-items:center;gap:8px">
        <span style="font-size:14px">${icon}</span>
        <span style="font-size:12px;font-weight:700;color:${th.text};letter-spacing:0.5px;text-transform:uppercase">${esc(label)}</span>
      </div>
      <div style="padding:10px;display:flex;flex-direction:column;gap:5px">
        ${items.map(item => `<div style="display:flex;align-items:center;gap:10px;padding:7px 12px;border-radius:9px;background:${th.accentBgSubtle(accent)};font-size:13.5px;color:${th.textSecondary};line-height:1.45"><div style="width:5px;height:5px;border-radius:50%;background:${accent};flex-shrink:0"></div>${esc(item)}</div>`).join("")}
      </div>
    </div>`;

  if (groups.eventHours && groups.eventHours.items && groups.eventHours.items.length > 0) {
    html += renderBulletGroup("🕐", groups.eventHours.label || "Event Hours", groups.eventHours.items);
  }
  if (groups.fullDay && groups.fullDay.items && groups.fullDay.items.length > 0) {
    html += renderBulletGroup("📅", groups.fullDay.label || "Full Day", groups.fullDay.items);
  }

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
        : (() => {
            const dayName = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date(dateStr + "T12:00:00").getDay()];
            const seasonEv = dayEvents.find(ev => ev.details && ev.details.dailyDiscoveries);
            const dd = seasonEv ? seasonEv.details.dailyDiscoveries.find(d => d.day === dayName) : null;
            const ddBar = dd ? `<div style="display:flex;align-items:center;gap:3px;font-size:11px;font-weight:600;color:#fff;background:${dd.color};border-radius:4px;padding:1px 4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:1.5">${dd.icon} ${esc(dd.name)}</div>` : "";
            const maxItems = dd ? 2 : 3;
            // Insert dd bar right after the Season event bar
            let bars = "";
            let ddInserted = false;
            dayEvents.slice(0, maxItems).forEach(ev => {
              const calIcon = ev.iconImg ? `<img src="${ev.iconImg}" style="width:14px;height:14px;object-fit:contain" />` : (() => { const p = (ev.type === "Raid" || ev.type === "Max Battle") && ev.details && ev.details.bosses && ev.details.bosses[0] ? getPokemonImg(ev.details.bosses[0]) : null; return p ? `<img src="${p.url}" style="width:14px;height:14px;object-fit:contain" />` : ev.icon; })();
              bars += `<div style="display:flex;align-items:center;gap:3px;font-size:11px;font-weight:600;color:#fff;background:${ev.color};border-radius:4px;padding:1px 4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:1.5">${calIcon} ${esc(ev.title)}</div>`;
              if (ev.details && ev.details.dailyDiscoveries && dd && !ddInserted) { bars += ddBar; ddInserted = true; }
            });
            const moreCount = dayEvents.length > maxItems ? dayEvents.length - maxItems : 0;
            return `<div style="display:flex;flex-direction:column;gap:1px;width:100%;padding:0 3px;overflow:hidden">${bars}${moreCount > 0 ? `<div style="font-size:9px;color:${th.textMuted};text-align:center">+${moreCount} more</div>` : ""}</div>`;
          })()
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
            const card = `<button onclick="selectEvent(${ev.id})" style="display:flex;align-items:center;gap:10px;padding:10px 14px;background:${th.accentBgSubtle(ev.color)};border:1.5px solid ${th.border};border-radius:10px;cursor:pointer;text-align:left;width:100%;font-family:inherit;border-left:4px solid ${ev.color}">
              ${(() => {
                if (ev.iconImg) {
                  if (ev.shadowBg) {
                    return `<div style="position:relative;width:32px;height:32px;flex-shrink:0;overflow:visible">
                      <img src="assets/pokemon-images/icons/shadow_icon.png" style="position:absolute;top:-15%;left:-15%;width:130%;height:130%;object-fit:contain;opacity:${darkMode ? 0.85 : 0.65};z-index:0" />
                      <img src="${ev.iconImg}" style="position:relative;width:100%;height:100%;object-fit:contain;border-radius:8px;z-index:1" />
                    </div>`;
                  }
                  if (ev.type === "Max Battle") {
                    return `<div style="position:relative;width:32px;height:32px;flex-shrink:0">
                      <img src="assets/pokemon-images/dynamax.png" style="position:absolute;top:0;left:50%;transform:translateX(-50%);width:80%;object-fit:contain;opacity:0.85;z-index:0" />
                      <img src="${ev.iconImg}" style="position:relative;width:100%;height:100%;object-fit:contain;border-radius:8px;z-index:1" />
                    </div>`;
                  }
                  return `<img src="${ev.iconImg}" style="width:32px;height:32px;object-fit:contain;border-radius:8px" />`;
                }
                const calPkmn = (ev.type === "Raid" || ev.type === "Max Battle") && ev.details && ev.details.bosses && ev.details.bosses[0] ? getPokemonImg(ev.details.bosses[0]) : null;
                if (calPkmn) return `<img src="${calPkmn.url}" style="width:32px;height:32px;object-fit:contain;border-radius:8px" />`;
                return `<div style="font-size:18px">${ev.icon}</div>`;
              })()}
              <div style="flex:1;min-width:0">
                <div style="font-size:13px;font-weight:700;color:${th.text};display:flex;align-items:center;gap:6px">${esc(ev.title)}${active ? `<span style="font-size:9px;font-weight:700;color:#fff;background:#2ECC71;padding:1px 6px;border-radius:10px">LIVE</span>` : ""}</div>
                <div style="font-size:11px;color:${th.textMuted};margin-top:2px">${esc(ev.type)}${ev.time ? ` \u00B7 ${esc(ev.time)}` : ""}</div>
              </div>
            </button>`;
            // Insert daily discovery after the Season event
            if (ev.details && ev.details.dailyDiscoveries) {
              const selDayName = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date(state.calSelectedDay + "T12:00:00").getDay()];
              const dd = ev.details.dailyDiscoveries.find(d => d.day === selDayName);
              if (dd) {
                return card + `<div style="padding:10px 14px;background:${th.accentBg(dd.color)};border:1.5px solid ${dd.color}40;border-radius:10px;border-left:4px solid ${dd.color}">
                  <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
                    <span style="font-size:16px">${dd.icon}</span>
                    <span style="font-size:13px;font-weight:700;color:${dd.color}">${esc(dd.name)}</span>
                  </div>
                  <div style="font-size:12px;color:${th.textSecondary};line-height:1.5">${esc(dd.desc)}</div>
                  ${dd.time ? `<div style="margin-top:4px;font-size:11px;font-weight:600;color:${th.textMuted}">\uD83D\uDD52 ${esc(dd.time)}</div>` : ""}
                </div>`;
              }
              return card;
            }
            return card;
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
      <div style="background:${th.detailHeaderBg(event.color)};padding:24px 20px;border-bottom:2px solid ${th.detailHeaderBorder(event.color)};position:relative">
        ${event.published || event.updated ? `<div style="position:absolute;top:14px;right:16px;display:flex;flex-direction:column;align-items:flex-end;gap:2px;font-size:12px;color:${th.textSecondary};font-weight:600">${event.published ? `<span>Published ${formatPublishedDate(event.published)}</span>` : ""}${event.updated ? `<span style="font-style:italic">Last updated on ${event.lastUpdated ? esc(event.lastUpdated) : formatPublishedDate(event.updated)}</span>` : ""}</div>` : ""}
        <div style="display:flex;align-items:center;gap:14px;margin-bottom:12px;flex-wrap:wrap">
          ${(() => {
            const shinySparkleDetail = event.shinyEligible ? `<div style="position:absolute;top:6%;right:18%;z-index:2">
              <div style="position:absolute;top:0;left:0;animation:boostedShiny 1.8s ease-in-out infinite">${fourPointStar(10, "#FFD700")}</div>
              <div style="position:absolute;top:10px;left:12px;animation:boostedShiny 1.8s ease-in-out 0.4s infinite">${fourPointStar(16, "#FFD700")}</div>
              <div style="position:absolute;top:18px;left:4px;animation:boostedShiny 1.8s ease-in-out 0.8s infinite">${fourPointStar(8, "#FFD700")}</div>
            </div>` : "";
            if (event.wideIcon && event.iconImg) {
              const tile = breakpoint === "mobile" ? 90 : 110;
              return `<div style="width:${tile}px;height:${tile}px;border-radius:16px;background:${th.accentBg(event.color)};border:2px solid ${th.countdownBorder(event.color)};display:flex;align-items:center;justify-content:center;flex-shrink:0;position:relative;overflow:hidden"><img src="${event.iconImg}" style="width:100%;height:100%;object-fit:contain" alt="${esc(event.title)}" onerror="this.parentElement.innerHTML='${event.icon}'" />${shinySparkleDetail}</div>`;
            }
            if (event.iconImg) {
              const shadowLayer = event.shadowBg ? `<img src="assets/pokemon-images/icons/shadow_icon.png" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;opacity:${darkMode ? 0.9 : 0.75};z-index:0" />` : "";
              const dynamaxLayer = event.type === "Max Battle" ? `<img src="assets/pokemon-images/dynamax.png" style="position:absolute;top:0;left:50%;transform:translateX(-50%);width:80%;object-fit:contain;opacity:0.85;z-index:0" />` : "";
              const zoomable = event.type === "GO Fest";
              const zoomAttrs = zoomable ? ` onclick="showFormModal('${event.iconImg}','${esc(event.title)}')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();showFormModal('${event.iconImg}','${esc(event.title)}')}" role="button" tabindex="0" title="Tap to view full size" aria-label="View ${esc(event.title)} badge full size"` : "";
              const zoomHint = zoomable ? `<div style="position:absolute;bottom:2px;right:2px;width:20px;height:20px;border-radius:50%;background:rgba(0,0,0,0.55);display:flex;align-items:center;justify-content:center;z-index:3;pointer-events:none"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg></div>` : "";
              return `<div${zoomAttrs} style="${zoomable ? "cursor:zoom-in;" : ""}width:70px;height:70px;border-radius:16px;background:${th.accentBg(event.color)};border:2px solid ${th.countdownBorder(event.color)};display:flex;align-items:center;justify-content:center;flex-shrink:0;position:relative;overflow:hidden">${shadowLayer}${dynamaxLayer}<img src="${event.iconImg}" style="width:62px;height:62px;object-fit:contain;position:relative;z-index:1" onerror="this.parentElement.innerHTML='${event.icon}'" />${shinySparkleDetail}${zoomHint}</div>`;
            }
            const detailPkmn = (event.type === "Raid" || event.type === "Max Battle") && event.details && event.details.bosses && event.details.bosses[0] ? getPokemonImg(event.details.bosses[0]) : null;
            return detailPkmn
              ? `<div style="width:70px;height:70px;border-radius:16px;background:${th.accentBg(event.color)};border:2px solid ${th.countdownBorder(event.color)};display:flex;align-items:center;justify-content:center;flex-shrink:0;position:relative"><img src="${detailPkmn.url}" style="width:62px;height:62px;object-fit:contain" onerror="this.parentElement.innerHTML='${event.icon}'" />${shinySparkleDetail}</div>`
              : `<div style="width:70px;height:70px;border-radius:16px;background:${th.accentBg(event.color)};border:2px solid ${th.countdownBorder(event.color)};display:flex;align-items:center;justify-content:center;font-size:32px">${event.icon}</div>`;
          })()}
          <div>
            <div style="font-size:10px;font-weight:700;color:${event.color};letter-spacing:1.2px;text-transform:uppercase;margin-bottom:3px;display:flex;gap:6px;align-items:center">${esc(event.type)}${active ? `<span style="background:#2ECC71;color:#fff;padding:1px 7px;border-radius:20px;font-size:9px">LIVE NOW</span>` : ""}</div>
            <h2 style="margin:0;font-size:20px;font-weight:800;color:${th.text}">${esc(event.title)}</h2>
          </div>
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:14px;align-items:center">
          <div style="font-size:13px;color:${th.textSecondary};font-weight:500">\uD83D\uDCC5 ${formatDateRange(event.date, event.endDate)}</div>
          ${event.time ? `<div style="font-size:13px;color:${th.textSecondary};font-weight:500">\uD83D\uDD50 ${esc(event.time)}</div>` : ""}
        </div>
        <div style="margin-top:10px">
          <span class="countdown" data-date="${event.date}" data-color="${event.color}" data-over="${over}" data-event-id="${event.id}">${renderCountdown(event.date, event.color, over, th, event)}</span>
        </div>
      </div>
      <div style="padding:20px 20px 24px;display:flex;flex-direction:column;gap:42px">
        <p style="margin:0;font-size:14.5px;color:${th.textSecondary};line-height:1.65">${esc(event.summary)}</p>
        ${event.shinyEligible ? `<div style="display:flex;align-items:center;gap:8px;padding:10px 14px;border-radius:8px;background:${th.accentBgSubtle("#FFD700")};border:1px solid ${th.countdownBorder("#FFD700")};align-self:flex-start">
          <div style="position:relative;width:28px;height:26px;flex-shrink:0;top:-4px">
            <div style="position:absolute;top:0;left:0;animation:boostedShiny 1.8s ease-in-out infinite">${fourPointStar(10, "#FFD700")}</div>
            <div style="position:absolute;top:10px;left:12px;animation:boostedShiny 1.8s ease-in-out 0.4s infinite">${fourPointStar(16, "#FFD700")}</div>
            <div style="position:absolute;top:18px;left:4px;animation:boostedShiny 1.8s ease-in-out 0.8s infinite">${fourPointStar(8, "#FFD700")}</div>
          </div>
          <span style="font-size:11px;font-weight:600;color:${th.textMuted}">= Boosted Shiny Rate</span>
        </div>` : ""}
        ${event.url ? (event.urlDisabled
          ? `<div style="display:inline-flex;align-self:flex-start;align-items:center;gap:6px;font-size:13px;font-weight:600;color:${th.textMuted};padding:8px 14px;border:1.5px solid ${th.border};border-radius:10px;background:${th.surface};opacity:0.6;cursor:default">\uD83D\uDD17 More information coming soon</div>`
          : `<a href="${event.url}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:8px;font-size:14px;font-weight:700;color:#fff;text-decoration:none;padding:12px 20px;border:none;border-radius:12px;background:${event.color};transition:all 0.2s ease;box-shadow:0 2px 8px ${event.color}40;align-self:flex-start" onmouseenter="this.style.opacity='0.85';this.style.transform='translateY(-1px)';this.style.boxShadow='0 4px 12px ${event.color}60'" onmouseleave="this.style.opacity='1';this.style.transform='translateY(0)';this.style.boxShadow='0 2px 8px ${event.color}40'">\uD83D\uDD17 Official Event Page</a>`) : ""}
        ${event.details.relatedNews ? event.details.relatedNews.map(rn => `<button onclick="selectNews(${rn.id})" style="display:inline-flex;align-items:center;gap:8px;font-size:14px;font-weight:700;color:${event.color};background:${th.accentBgSubtle(event.color)};border:1.5px solid ${th.countdownBorder(event.color)};border-radius:12px;padding:11px 18px;cursor:pointer;font-family:inherit;transition:all 0.2s ease;align-self:flex-start" onmouseenter="this.style.background='${event.color}';this.style.color='#fff';this.style.transform='translateY(-1px)'" onmouseleave="this.style.background='${th.accentBgSubtle(event.color)}';this.style.color='${event.color}';this.style.transform='translateY(0)'">${rn.iconImg ? `<img src="${rn.iconImg}" style="width:22px;height:22px;object-fit:contain;flex-shrink:0" />` : `<span style="font-size:16px">${rn.icon || "📰"}</span>`} ${esc(rn.label)} →</button>`).join("") : ""}
        <div class="move-deadline" data-event-id="${event.id}">${renderMoveDeadlineBanner(event, th)}</div>
        ${event.details.bosses ? renderDetailSection(event.details.bossesTitle || (event.type === "Community Day" ? "Featured Move(s)" : "Featured Encounters"), "\uD83C\uDFAF", event.details.bosses, event.color, th, true, event.type === "Community Day", event.details.groupSize) : ""}
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
        ${/* event.details.seasonBonuses ? renderDetailSection("Season Bonuses", "\uD83D\uDCC6", event.details.seasonBonuses, "#9B59B6", th) : "" */ ""}

        ${event.details.dailyDiscoveries ? `<div><h4 style="margin:0 0 10px 0;font-size:13px;font-weight:700;color:${th.text};display:flex;align-items:center;gap:8px"><span>\uD83D\uDDD3\uFE0F</span> Daily Discoveries</h4>
          <div style="display:flex;flex-direction:column;gap:8px">${event.details.dailyDiscoveries.map(d => {
            const today = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date().getDay()];
            const isToday = d.day === today;
            return `<div style="padding:14px 16px;border-radius:12px;background:${isToday ? th.accentBg(d.color) : th.accentBgSubtle(d.color)};border:1.5px solid ${isToday ? d.color + "60" : th.countdownBorder(d.color)};transition:all 0.2s ease">
              <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:6px">
                <div style="display:flex;align-items:center;gap:8px">
                  <span style="font-size:18px">${d.icon}</span>
                  <span style="font-size:14px;font-weight:700;color:${d.color}">${esc(d.name)}</span>
                </div>
                ${isToday ? `<span style="font-size:10px;font-weight:700;color:#fff;background:${d.color};padding:2px 8px;border-radius:20px">TODAY</span>` : `<span style="font-size:11px;font-weight:600;color:${th.textMuted}">${d.day}</span>`}
              </div>
              <div style="font-size:13px;color:${th.textSecondary};line-height:1.5">${esc(d.desc)}</div>
              ${d.time ? `<div style="margin-top:6px;font-size:11px;font-weight:600;color:${th.textMuted};display:flex;align-items:center;gap:4px"><span>\uD83D\uDD52</span> ${esc(d.time)}</div>` : ""}
            </div>`;
          }).join("")}</div>
          <div style="margin-top:8px;padding:10px 14px;border-radius:10px;background:${th.accentBgSubtle("#E74C3C")};border:1px solid ${th.countdownBorder("#E74C3C")};font-size:11px;color:#E74C3C;font-weight:600;line-height:1.5;display:flex;align-items:center;gap:8px"><span style="font-size:14px">\u26A0\uFE0F</span> Daily Discoveries run 12:00 AM \u2013 11:59 PM local time and may pause during major events like GO Fest.</div>
        </div>` : ""}
        ${event.details.bonusGroups
          ? renderBonusGroups(event.details.bonusGroups, th)
          : event.details.bonuses
            ? renderDetailSection("Active Bonuses", "\u2728", event.details.bonuses, "#27AE60", th)
            : ""}
        ${(event.details.saturdayRaids || event.details.sundayRaids) ? (() => {
          const isMob = breakpoint === "mobile";
          const chevronSVG = `<svg class="acc-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`;
          const renderTierAcc = (tierLabel, items, tierColor, tierKey) => {
            const eggUrl = TIER_EGGS[tierKey];
            const eggImg = eggUrl ? `<img src="${eggUrl}" style="width:26px;height:26px;object-fit:contain;flex-shrink:0" />` : "";
            const stars = renderRaidHeads(tierKey);
            const bossesHTML = items.map(item => renderBossItem(item, tierColor, th, !isMob)).join("");
            return `<div style="border:1.5px solid ${th.border};border-radius:14px;overflow:hidden;background:${th.surface}">
              <button class="acc-trigger" data-open="false" onclick="toggleAccordion(this)" aria-expanded="false" style="display:flex;align-items:center;gap:10px;padding:12px 14px;background:${th.accentBgSubtle(tierColor)};border:none;border-bottom:1.5px solid ${th.border};color:${th.text}">
                ${eggImg}
                <span style="font-size:12px;font-weight:700;letter-spacing:0.5px;text-transform:uppercase">${esc(tierLabel)}</span>
                <span style="font-size:11px;font-weight:600;color:${th.textMuted};margin-left:4px">${items.length}</span>
                <span style="margin-left:auto;display:flex;align-items:center;gap:8px">${stars}${chevronSVG}</span>
              </button>
              <div class="acc-content" data-open="false">
                <div style="padding:10px;${isMob ? "display:flex;flex-direction:column;gap:6px" : "display:flex;flex-wrap:wrap;gap:8px"}">${bossesHTML}</div>
              </div>
            </div>`;
          };
          const renderDayAcc = (sr, dayLabel, accent) => {
            if (!sr) return "";
            const dayName = dayLabel.split(" \u00b7 ")[0];
            const totalCount = (sr.megaRaids ? sr.megaRaids.length : 0) + (sr.fiveStarRaids ? sr.fiveStarRaids.length : 0);
            return `<div style="border:1.5px solid ${th.countdownBorder(accent)};border-radius:14px;overflow:hidden;background:${th.accentBgSubtle(accent)}">
              <button class="acc-trigger" data-open="false" onclick="toggleAccordion(this)" aria-expanded="false" style="display:flex;align-items:center;gap:12px;padding:14px 16px;background:transparent;border:none;color:${th.text}">
                <span style="font-size:22px;flex-shrink:0">\u2694\ufe0f</span>
                <div style="display:flex;flex-direction:column;gap:2px;flex:1;min-width:0">
                  <div style="font-size:10px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:${accent}">${esc(dayLabel)}</div>
                  <div style="font-size:14.5px;font-weight:700;color:${th.text};line-height:1.4">${totalCount} raid bosses</div>
                </div>
                <span style="display:flex;align-items:center;color:${accent};flex-shrink:0">${chevronSVG}</span>
              </button>
              <div class="acc-content" data-open="false">
                <div style="padding:0 12px 12px;display:flex;flex-direction:column;gap:10px">
                  ${sr.megaRaids ? renderTierAcc(`${dayName} Mega Raids`, sr.megaRaids, "#E67E22", "Mega Raids") : ""}
                  ${sr.fiveStarRaids ? renderTierAcc(`${dayName} Five-Star Raids`, sr.fiveStarRaids, "#8E44AD", "5-Star Raids") : ""}
                  ${sr.note ? `<div style="padding:10px 14px;border-radius:10px;background:${th.tipBg};border:1px solid ${th.tipBorder};font-size:13px;color:${th.tipText};line-height:1.5;display:flex;align-items:center;gap:8px"><span style="font-size:14px">\ud83d\udca1</span>${esc(sr.note)}</div>` : ""}
                  <div style="padding:8px 14px;border-radius:10px;background:${th.accentBgSubtle("#FFD700")};border:1px solid ${th.countdownBorder("#FFD700")};font-size:12px;font-weight:600;color:${th.textSecondary};line-height:1.5;display:flex;align-items:center;gap:8px"><span style="font-size:14px">\u2728</span>If you're lucky, you may encounter a Shiny one!</div>
                </div>
              </div>
            </div>`;
          };
          return `<div style="display:flex;flex-direction:column;gap:14px">
            <h4 style="margin:0;font-size:13px;font-weight:700;color:${th.text};display:flex;align-items:center;gap:8px"><span>\ud83c\udfaf</span> GO Fest Raid Bosses <span style="font-size:11px;font-weight:500;color:${th.textMuted}">(tap to expand)</span></h4>
            ${renderDayAcc(event.details.saturdayRaids, "Saturday \u00b7 July 11", "#6C5CE7")}
            ${renderDayAcc(event.details.sundayRaids, "Sunday \u00b7 July 12", "#E84393")}
          </div>`;
        })() : ""}
        ${event.details.eggs || event.details.seasonEggPools ? (() => {
          const isMob = breakpoint === "mobile";
          const chevronSVG = `<svg class="acc-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`;
          const pools = [];
          if (event.details.eggs) {
            pools.push({ label: event.details.eggLabel || "7 km Eggs", items: event.details.eggs });
          }
          if (event.details.seasonEggPools) {
            event.details.seasonEggPools.forEach(p => pools.push(p));
          }
          const anyBoosted = pools.some(p => p.items.some(e => e.startsWith("★")));
          const legend = anyBoosted ? `<div style="display:flex;align-items:center;gap:10px;margin-top:8px;padding:8px 14px;border-radius:10px;background:${th.accentBgSubtle("#FFD700")};border:1px solid ${th.countdownBorder("#FFD700")}"><span style="display:inline-flex;align-items:center;gap:4px">${fourPointStar(12, "#FFD700")}${fourPointStar(8, "#FFD700")}</span><span style="font-size:12px;font-weight:600;color:${th.textSecondary}">Animated gold sparkles = <span style="color:#FFD700;font-weight:700">Boosted Shiny Rates</span></span></div>` : "";
          const renderEggAcc = (pool) => {
            const imgSrc = EGG_TIER_IMAGES[pool.label];
            const eggImg = imgSrc ? `<img src="${imgSrc}" style="width:28px;height:28px;object-fit:contain;flex-shrink:0" />` : `<span style="font-size:22px;flex-shrink:0">🥚</span>`;
            const itemsHTML = pool.items.map(item => renderBossItem(item, "#E67E22", th, !isMob)).join("");
            const andMoreChip = `<div style="display:flex;align-items:center;justify-content:center;padding:${isMob ? "10px 14px" : "0 18px"};border-radius:12px;background:${th.accentBgSubtle("#E67E22")};border:1.5px dashed ${th.countdownBorder("#E67E22")};font-size:13px;font-weight:700;color:#E67E22;font-style:italic;${isMob ? "" : "min-width:120px;min-height:120px"};text-align:center">And more!</div>`;
            return `<div style="border:1.5px solid ${th.border};border-radius:14px;overflow:hidden;background:${th.surface}">
              <button class="acc-trigger" data-open="false" onclick="toggleAccordion(this)" aria-expanded="false" style="display:flex;align-items:center;gap:10px;padding:12px 14px;background:${th.accentBgSubtle("#E67E22")};border:none;border-bottom:1.5px solid ${th.border};color:${th.text};width:100%;text-align:left;cursor:pointer">
                ${eggImg}
                <span style="font-size:12px;font-weight:700;letter-spacing:0.5px;text-transform:uppercase">${esc(pool.label)}</span>
                <span style="font-size:11px;font-weight:600;color:${th.textMuted};margin-left:4px">${pool.items.length}+</span>
                <span style="margin-left:auto;display:flex;align-items:center;color:${th.textMuted}">${chevronSVG}</span>
              </button>
              <div class="acc-content" data-open="false">
                <div style="padding:10px;${isMob ? "display:flex;flex-direction:column;gap:6px" : "display:flex;flex-wrap:wrap;gap:8px;align-items:stretch"}">${itemsHTML}${andMoreChip}</div>
              </div>
            </div>`;
          };
          return `<div style="display:flex;flex-direction:column;gap:10px">
            <h4 style="margin:0;font-size:13px;font-weight:700;color:${th.text};display:flex;align-items:center;gap:8px"><span>🥚</span> Egg Hatches <span style="font-size:11px;font-weight:500;color:${th.textMuted}">(tap to expand)</span></h4>
            ${pools.map(renderEggAcc).join("")}
            ${legend}
          </div>`;
        })() : ""}
        ${event.details.routes ? renderRoutes(event.details.routes, th) : ""}
        ${event.details.ticketBonuses ? renderDetailSection(`Ticket Bonuses${event.details.ticketPrice ? " — " + event.details.ticketPrice : ""}`, "\uD83C\uDFAB", event.details.ticketBonuses, "#E67E22", th) : ""}
        ${event.details.ticketNote ? `<div style="display:flex;align-items:center;gap:8px;padding:10px 14px;border-radius:10px;background:${th.accentBgSubtle("#E74C3C")};border:1px solid ${th.countdownBorder("#E74C3C")}"><span style="font-size:14px">\u26A0\uFE0F</span><span style="font-size:12px;font-weight:600;color:#E74C3C">${esc(event.details.ticketNote)}</span></div>` : ""}
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
            <div style="padding:12px 14px;font-size:14px;font-weight:500;color:${th.textSecondary};line-height:1.5;display:flex;flex-direction:column;gap:4px"><div>• ${esc(m.bonus)}</div>${m.deluxe ? `<div>• GO Pass Deluxe: ${esc(m.deluxe)}</div>` : ""}</div>
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
        ${event.details.alert ? `<div style="display:flex;align-items:center;gap:10px;padding:12px 16px;border-radius:12px;background:${th.accentBgSubtle("#E74C3C")};border:2px solid #E74C3C;animation:alertPulse 2s ease-in-out infinite"><span style="font-size:18px">\u26A0\uFE0F</span><span style="font-size:13px;font-weight:700;color:#E74C3C;line-height:1.4">${esc(event.details.alert)}</span></div>` : ""}
        ${event.lastUpdated ? `<div style="font-size:${breakpoint === "mobile" ? 10 : 11}px;color:${th.textMuted};font-weight:500;font-style:italic;text-align:right">Last updated on ${esc(event.lastUpdated)}</div>` : ""}
      </div>
    </div>
  </div>`;
}

// --- NEWS DETAIL ---
function renderNewsDetail(announcement, th) {
  const returnEvent = state.newsReturnEventId != null ? EVENTS.find(e => e.id === state.newsReturnEventId) : null;
  const backLabel = returnEvent ? ` Back to ${esc(returnEvent.title)}` : " Back to News";
  return `<div style="animation:fadeSlideIn 0.3s ease">
    <button onclick="goBackNews()" style="display:inline-flex;align-items:center;gap:6px;background:none;border:none;cursor:pointer;font-size:14px;color:${th.textMuted};font-weight:500;padding:4px 0;margin-bottom:16px;font-family:inherit">\u2190${backLabel}</button>
    <div style="background:${th.surface};border-radius:20px;border:1.5px solid ${th.border};overflow:hidden;box-shadow:${th.shadowLg}">
      <div style="padding:24px 20px;border-bottom:1.5px solid ${th.border}">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
          <span style="font-size:11px;font-weight:700;background:${th.tagBg(announcement.tag)};color:${th.tagText(announcement.tag)};padding:4px 12px;border-radius:20px;letter-spacing:0.3px">${esc(announcement.tag)}</span>
          <span style="font-size:12px;color:${th.textSecondary};font-weight:600">${announcement.published ? "Published " + formatPublishedDate(announcement.published) : formatDate(announcement.date)}</span>
        </div>
        <h2 style="margin:0;font-size:20px;font-weight:800;color:${th.text};line-height:1.3">${esc(announcement.title)}</h2>
      </div>
      <div style="padding:20px 20px 24px;display:flex;flex-direction:column;gap:20px">
        <p style="margin:0;font-size:14.5px;color:${th.textSecondary};line-height:1.65">${esc(announcement.fullBody)}</p>
        ${announcement.url ? `<a href="${announcement.url}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-self:flex-start;align-items:center;gap:6px;font-size:13px;font-weight:600;color:${th.tagText(announcement.tag)};text-decoration:none;padding:8px 14px;border:1.5px solid ${th.tagText(announcement.tag)}40;border-radius:10px;background:${th.tagBg(announcement.tag)};transition:all 0.2s ease" onmouseenter="this.style.borderColor='${th.tagText(announcement.tag)}'" onmouseleave="this.style.borderColor='${th.tagText(announcement.tag)}40'">\uD83D\uDD17 For more information, click here</a>` : ""}
        ${announcement.sections ? announcement.sections.map(s => {
          const iconHTML = s.icon
            ? (s.icon.includes("/") || s.icon.endsWith(".png") || s.icon.endsWith(".webp")
                ? `<img src="${s.icon}" style="width:22px;height:22px;object-fit:contain;flex-shrink:0" onerror="this.style.display='none'" />`
                : `<span style="font-size:18px;line-height:1">${s.icon}</span>`)
            : "";
          const headingHTML = s.icon
            ? `<h4 style="margin:0 0 10px 0;font-size:14px;font-weight:700;color:${th.text};display:flex;align-items:center;gap:8px">${iconHTML}${esc(s.heading)}</h4>`
            : `<h4 style="margin:0 0 10px 0;font-size:14px;font-weight:700;color:${th.text}">${esc(s.heading)}</h4>`;
          if (s.showImages) {
            const tagColor = th.tagText(announcement.tag);
            const isMobile = breakpoint === "mobile";
            const cardLayout = !isMobile;
            const cardsHTML = s.items.map(it => {
              const itemName = typeof it === "string" ? it : it.name;
              const dates = typeof it === "object" && it.dates ? it.dates : null;
              const subtitle = typeof it === "object" && it.subtitle ? it.subtitle : null;
              const pkmn = getPokemonImg(itemName);
              if (pkmn) {
                if (/^Shadow\s+/i.test(itemName)) pkmn.shadow = true;
                if (/Dynamax/i.test(itemName)) pkmn.dynamax = true;
              }
              const imgSize = cardLayout ? 120 : 90;
              let imgEl = pokemonImgHTML(pkmn, imgSize);
              if (imgEl) imgEl = wrapShinySparkles(imgEl, itemName, imgSize);
              const raidData = getRaidBossData(itemName);
              const typesHTML = raidData ? `<div style="display:flex;gap:4px;margin-top:4px;flex-wrap:wrap;${cardLayout ? "justify-content:center" : ""}">${raidData.types.map(t =>
                `<span style="font-size:${cardLayout ? 11 : 12}px;font-weight:700;color:#fff;background:${TYPE_COLORS[t] || "#888"};padding:2px 8px;border-radius:10px">${t}</span>`
              ).join("")}</div>` : "";
              const isRaidTier = /\(\d★\s*(?:Raid|Shadow Raid)?\)|\(Mega\)|\(Primal Raid\)|\(\d★\s*Max Battle|\(Shadow Raid\)/i.test(itemName);
              const cpHTML = raidData && raidData.cp && isRaidTier ? `<div style="margin-top:5px;font-size:${cardLayout ? 13 : 13}px;color:${th.text};line-height:1.5;${cardLayout ? "text-align:center" : ""}">
                <div>CP <span style="font-weight:800;font-size:${cardLayout ? 15 : 14}px">${raidData.cp}</span></div>
                ${raidData.weather ? `<div style="font-size:${cardLayout ? 11 : 12}px;color:${th.textSecondary}">☁️ ${raidData.weather}: <span style="font-weight:700">${raidData.cpBoost}</span></div>` : ""}
              </div>` : "";
              const subtitleHTML = subtitle ? `<div style="margin-top:4px;font-size:${cardLayout ? 11 : 12}px;font-weight:600;color:${th.textSecondary};${cardLayout ? "text-align:center" : ""};font-style:italic">${esc(subtitle)}</div>` : "";
              const dateHTML = dates ? `<div style="margin-top:8px;font-size:${cardLayout ? 11 : 12}px;font-weight:700;color:${tagColor};${cardLayout ? "text-align:center" : ""};padding:4px 8px;background:${th.tagBg(announcement.tag)};border-radius:8px;align-self:stretch">${esc(dates)}</div>` : "";
              const cleanedName = cleanRaidLabel(itemName);
              if (cardLayout) {
                return `<div style="border-radius:12px;background:${th.accentBgSubtle(tagColor)};border:1.5px solid ${th.border};flex:1 1 140px;min-width:140px;max-width:200px;display:flex;flex-direction:column">
                  <div style="display:flex;flex-direction:column;align-items:center;padding:12px 8px;font-size:13px;color:${th.textSecondary};line-height:1.45;text-align:center;flex:1">
                    ${imgEl}
                    <div style="margin-top:6px;font-weight:700;color:${th.text};font-size:13px">${esc(cleanedName)}</div>
                    ${subtitleHTML}${typesHTML}${cpHTML}
                  </div>
                  ${dateHTML ? `<div style="padding:0 8px 10px 8px">${dateHTML}</div>` : ""}
                </div>`;
              }
              return `<div style="border-radius:9px;background:${th.accentBgSubtle(tagColor)};width:100%">
                <div style="display:flex;align-items:center;gap:10px;padding:6px 12px;font-size:13.5px;color:${th.textSecondary};line-height:1.45">
                  ${imgEl || ""}
                  <div style="flex:1;min-width:0">
                    <div style="font-weight:700;color:${th.text}">${esc(cleanedName)}</div>
                    ${subtitleHTML}${typesHTML}${cpHTML}
                    ${dates ? `<div style="margin-top:6px;font-size:11px;font-weight:700;color:${tagColor};padding:3px 8px;background:${th.tagBg(announcement.tag)};border-radius:8px;display:inline-block">${esc(dates)}</div>` : ""}
                  </div>
                </div>
              </div>`;
            }).join("");
            const introHTML = s.intro ? `<div style="font-size:13px;color:${th.textSecondary};margin-bottom:10px;padding:10px 14px;border-radius:10px;background:${th.tagBg(announcement.tag)};line-height:1.5">${esc(s.intro)}</div>` : "";
            return `<div>${headingHTML}
              ${introHTML}
              <div style="display:flex;${cardLayout ? "flex-wrap:wrap;gap:8px" : "flex-direction:column;gap:8px"}">${cardsHTML}</div>
            </div>`;
          }
          return `<div>${headingHTML}
          <div style="display:flex;flex-direction:column;gap:5px">${s.items.map(item => {
            if (item && typeof item === "object" && item.img) {
              const imgEl = `<img src="${item.img}" style="width:30px;height:30px;object-fit:contain;flex-shrink:0" onerror="this.style.display='none'" />`;
              return `<div style="display:flex;align-items:center;gap:10px;padding:6px 14px;border-radius:10px;background:${th.tagBg(announcement.tag)};font-size:13.5px;color:${th.textSecondary};line-height:1.5">${imgEl}<span>${esc(item.text)}</span></div>`;
            }
            return `<div style="display:flex;align-items:baseline;gap:10px;padding:8px 14px;border-radius:10px;background:${th.tagBg(announcement.tag)};font-size:13.5px;color:${th.textSecondary};line-height:1.5"><div style="width:5px;height:5px;border-radius:50%;background:${th.tagText(announcement.tag)};flex-shrink:0;margin-top:6px"></div>${esc(item)}</div>`;
          }).join("")}</div></div>`;
        }).join("") : ""}
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
          const shinySparkleCard = event.shinyEligible ? `<div style="position:absolute;top:6%;right:18%;z-index:2">
            <div style="position:absolute;top:0;left:0;animation:boostedShiny 1.8s ease-in-out infinite">${fourPointStar(10, "#FFD700")}</div>
            <div style="position:absolute;top:10px;left:12px;animation:boostedShiny 1.8s ease-in-out 0.4s infinite">${fourPointStar(16, "#FFD700")}</div>
            <div style="position:absolute;top:18px;left:4px;animation:boostedShiny 1.8s ease-in-out 0.8s infinite">${fourPointStar(8, "#FFD700")}</div>
          </div>` : "";
          if (event.iconImg) {
            const shadowLayer = event.shadowBg ? `<img src="assets/pokemon-images/icons/shadow_icon.png" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;opacity:${darkMode ? 0.9 : 0.75};z-index:0" />` : "";
            const dynamaxLayer = event.type === "Max Battle" ? `<img src="assets/pokemon-images/dynamax.png" style="position:absolute;top:0;left:50%;transform:translateX(-50%);width:80%;object-fit:contain;opacity:0.85;z-index:0" />` : "";
            const imgStyle = event.wideIcon
              ? `width:100%;height:100%;object-fit:contain;position:relative;z-index:1`
              : `width:44px;height:44px;object-fit:contain;position:relative;z-index:1`;
            return `<div style="width:48px;height:48px;border-radius:12px;background:${th.accentBg(event.color)};display:flex;align-items:center;justify-content:center;flex-shrink:0;position:relative;overflow:hidden">${shadowLayer}${dynamaxLayer}<img src="${event.iconImg}" style="${imgStyle}" onerror="this.parentElement.innerHTML='${event.icon}'" />${shinySparkleCard}</div>`;
          }
          const raidPkmn = (event.type === "Raid" || event.type === "Max Battle") && event.details && event.details.bosses && event.details.bosses[0] ? getPokemonImg(event.details.bosses[0]) : null;
          return raidPkmn
            ? `<div style="width:48px;height:48px;border-radius:12px;background:${th.accentBg(event.color)};display:flex;align-items:center;justify-content:center;flex-shrink:0;position:relative"><img src="${raidPkmn.url}" style="width:44px;height:44px;object-fit:contain" onerror="this.parentElement.innerHTML='${event.icon}'" />${shinySparkleCard}</div>`
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
      <div style="font-size:12px;color:${th.textMuted};font-weight:500">\uD83D\uDCC5 ${formatDateRange(event.date, event.endDate)}${event.time ? ` \u00B7 ${esc(event.time)}` : ""}</div>
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
      <span style="font-size:11px;color:${th.textSecondary};font-weight:600">${announcement.published ? "Published " + formatPublishedDate(announcement.published) : formatDate(announcement.date)}</span>
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
  state.newsReturnEventId = state.selectedEvent ? state.selectedEvent.id : null;
  state.selectedEvent = null;
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
  if (state.newsReturnEventId != null) {
    const ev = EVENTS.find(e => e.id === state.newsReturnEventId);
    state.newsReturnEventId = null;
    if (ev) {
      state.selectedEvent = ev;
      render();
      window.scrollTo(0, 0);
      return;
    }
  }
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
  if (file.size > 15 * 1024 * 1024) { alert("Image must be under 15 MB."); input.value = ""; return; }
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

let _reportSubmitting = false;
let _reportSubmitMessage = { type: "", text: "" }; // type: "" | "success" | "error"

async function submitReport() {
  if (_reportSubmitting) return;
  const type = document.getElementById("report-type").value;
  const section = document.getElementById("report-section").value;
  const description = document.getElementById("report-description").value.trim();
  const name = document.getElementById("report-name").value.trim();

  if (description.length < 10) {
    _reportSubmitMessage = { type: "error", text: "Description must be at least 10 characters." };
    render();
    return;
  }

  // Rate limit using the cache (already populated on tab open).
  const rate = checkBugReportRateLimit(Date.now(), getRecentBugReportTimestampsFromCache());
  if (!rate.allowed) {
    _reportSubmitMessage = { type: "error", text: `You've submitted ${rate.count} reports in the last hour (max ${rate.max}). Please try again later.` };
    render();
    return;
  }

  _reportSubmitting = true;
  _reportSubmitMessage = { type: "", text: "" };
  render();

  try {
    let screenshot_url = null;
    if (reportPhotoFile) screenshot_url = await uploadBugScreenshot(reportPhotoFile);
    await insertBugReport({ report_type: type, section, description, reporter_name: name, screenshot_url });
    _reportSubmitMessage = { type: "success", text: "Thanks! Your report is in the queue and will appear here once reviewed." };
    // Form fields clear themselves on the next render (they have no state-bound value).
    // The screenshot needs explicit cleanup because reportPhotoFile is module state.
    removeReportPhoto();
    // Refresh cache so the rate limiter sees the new entry next time.
    await loadBugReportsFromSupabase();
  } catch (e) {
    _reportSubmitMessage = { type: "error", text: e.message || "Submission failed. Please try again." };
  } finally {
    _reportSubmitting = false;
    render();
  }
}

function setTab(tab) {
  state.tab = tab;
  state.selectedEvent = null;
  state.selectedNews = null;
  state.pokedexDetail = null;
  sessionStorage.setItem("trainerwire_tab", tab);
  if (tab === "nests") { loadNestsFromSupabase().then(() => render()); }
  if (tab === "report") {
    _reportSubmitMessage = { type: "", text: "" }; // clear stale banner from prior visit
    _bugReportFilter = "all";
    _bugReportMoreOpen = false;
    loadBugReportsFromSupabase().then(() => render());
  }
  render();
  window.scrollTo(0, 0);
}

function toggleCompactCard(headerEl) {
  const card = headerEl.parentElement;
  const body = card.querySelector(".compact-card-body");
  const chevron = headerEl.querySelector(".compact-chevron");
  if (!body) return;
  const isOpen = body.style.maxHeight && body.style.maxHeight !== "0px";
  if (isOpen) {
    body.style.maxHeight = "0px";
    body.style.padding = "0 14px";
    if (chevron) chevron.style.transform = "rotate(0deg)";
  } else {
    body.style.maxHeight = body.scrollHeight + "px";
    body.style.padding = "0 14px";
    if (chevron) chevron.style.transform = "rotate(180deg)";
  }
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

function showRocketPopup(name) {
  const th = t(darkMode);
  const rd = getRaidBossData(name);
  const pkmn = getPokemonImg("Shadow " + name);
  const imgSrc = pkmn ? pkmn.url : "";
  const weaknesses = rd ? getWeaknesses(rd.types) : [];
  const resistances = rd ? getResistances(rd.types) : [];
  const typesHTML = rd ? rd.types.map(t =>
    `<span style="font-size:14px;font-weight:700;color:#fff;background:${TYPE_COLORS[t] || "#888"};padding:4px 14px;border-radius:12px">${t}</span>`
  ).join(" ") : "";
  const weakHTML = weaknesses.length > 0 ? `<div style="margin-top:16px">
    <div style="font-size:11px;font-weight:700;color:#E74C3C;letter-spacing:0.5px;margin-bottom:6px">WEAK TO</div>
    <div style="display:flex;gap:4px;flex-wrap:wrap;justify-content:center">${weaknesses.map(w =>
      `<span style="font-size:12px;font-weight:700;color:#fff;background:${TYPE_COLORS[w.type] || "#888"};padding:3px 10px;border-radius:10px">${w.type}${w.multiplier > 2 ? " 2\u00D7" : ""}</span>`
    ).join("")}</div>
  </div>` : "";
  const resistHTML = resistances.length > 0 ? `<div style="margin-top:12px">
    <div style="font-size:11px;font-weight:700;color:#27AE60;letter-spacing:0.5px;margin-bottom:6px">RESISTS</div>
    <div style="display:flex;gap:4px;flex-wrap:wrap;justify-content:center">${resistances.map(r =>
      `<span style="font-size:12px;font-weight:700;color:#fff;background:${TYPE_COLORS[r.type] || "#888"};padding:3px 10px;border-radius:10px;opacity:${r.double ? "1" : "0.7"}">${r.type}${r.double ? " 2\u00D7" : ""}</span>`
    ).join("")}</div>
  </div>` : "";
  const overlay = document.createElement("div");
  overlay.id = "rocket-popup";
  overlay.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.75);z-index:9999;display:flex;align-items:center;justify-content:center;cursor:pointer;animation:fadeIn 0.2s ease";
  overlay.onclick = () => overlay.remove();
  overlay.innerHTML = `<div onclick="event.stopPropagation()" style="background:${th.bg};border:1.5px solid ${th.border};border-radius:20px;padding:24px;max-width:340px;width:90vw;text-align:center;cursor:default;animation:scaleIn 0.25s ease;position:relative">
    <div onclick="this.parentElement.parentElement.remove()" style="position:absolute;top:12px;right:16px;font-size:20px;color:${th.textMuted};cursor:pointer;font-weight:700">\u00D7</div>
    ${imgSrc ? `<div style="position:relative;width:140px;height:140px;margin:0 auto">
      <img src="assets/pokemon-images/icons/shadow_icon.png" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;opacity:${darkMode ? "0.85" : "0.6"};z-index:0" />
      <img src="${imgSrc}" style="position:relative;width:100%;height:100%;object-fit:contain;z-index:1" onerror="this.parentElement.style.display='none'" />
    </div>` : ""}
    <div style="font-size:18px;font-weight:800;color:${th.text};margin-top:8px">Shadow ${esc(name)}</div>
    <div style="margin-top:10px;display:flex;gap:6px;justify-content:center;flex-wrap:wrap">${typesHTML}</div>
    ${weakHTML}
    ${resistHTML}
  </div>`;
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
  const SHOWN_STATS = ["hp", "attack", "defense"];
  // const SHOWN_STATS = ["hp", "attack", "defense", "special-attack", "special-defense", "speed"];
  const statBars = data.stats.filter(s => SHOWN_STATS.includes(s.name)).map(s => {
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
  const totalStats = data.stats.filter(s => SHOWN_STATS.includes(s.name)).reduce((sum, s) => sum + s.value, 0);
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
        const shinyMegaSrc = `${IMG_BASE}/Mega/shiny/${getGenFolder(evo.dexNum)}/${evo.imgFile}.webp`;
        return `<div style="display:flex;align-items:center;gap:${isMobile ? 8 : 12}px;padding:${isMobile ? 10 : 12}px;background:${th.accentBgSubtle("#8E44AD")};border:1px solid ${th.countdownBorder("#8E44AD")};border-radius:12px">
        <img onclick="showFormModal('${megaSrc}','${esc(evo.name)}')" src="${megaSrc}" style="width:${isMobile ? 52 : 60}px;height:${isMobile ? 52 : 60}px;object-fit:contain;flex-shrink:0;cursor:pointer;transition:transform 0.15s ease" onmouseenter="this.style.transform='scale(1.05)'" onmouseleave="this.style.transform='scale(1)'" onerror="this.style.opacity='0.3'" />
        <div style="flex:1;min-width:0">
          <div style="font-size:${isMobile ? 13 : 14}px;font-weight:700;color:${th.text}">${esc(evo.name)}</div>
          <div style="font-size:${isMobile ? 10 : 11}px;color:${th.textSecondary};margin-top:2px">${esc(evo.trigger)}</div>
        </div>
        <div onclick="showFormModal('${shinyMegaSrc}','Shiny ${esc(evo.name)}')" style="display:flex;flex-direction:column;align-items:center;cursor:pointer;flex-shrink:0;transition:transform 0.15s ease" onmouseenter="this.style.transform='scale(1.05)'" onmouseleave="this.style.transform='scale(1)'">
          <img src="${shinyMegaSrc}" style="width:${isMobile ? 44 : 52}px;height:${isMobile ? 44 : 52}px;object-fit:contain;filter:drop-shadow(0 1px 4px rgba(255,215,0,0.4))" onerror="this.parentElement.style.display='none'" />
          <div style="font-size:${isMobile ? 9 : 10}px;font-weight:600;color:#F39C12;margin-top:2px">✨ Shiny</div>
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
    ${renderDexRaidBossInfo(data, th, isMobile)}
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
  }).sort((a, b) => b.title.startsWith("Season:") - a.title.startsWith("Season:"));
}

function scrollToEggTier(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
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
  state.openNewsMonths = {};
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
  const matches = EVENTS.filter(e => (state.filter === "All" || e.type === state.filter) && isOver(e) && e.title.toLowerCase().includes(query)).slice(0, 10);
  if (matches.length === 0) { resultsEl.innerHTML = `<div style="padding:12px;text-align:center;color:${th.textMuted};font-size:13px">No events found</div>`; resultsEl.style.display = "block"; return; }
  resultsEl.innerHTML = matches.map(ev => {
    const dateStr = formatDate(ev.date);
    return `<div onclick="selectEvent(${ev.id});document.getElementById('cd-archive-search').value='';document.getElementById('cd-archive-results').style.display='none'" style="display:flex;align-items:center;gap:10px;padding:10px 14px;cursor:pointer;transition:background 0.1s ease" onmouseenter="this.style.background='${th.surfaceHover}'" onmouseleave="this.style.background='transparent'">
      ${ev.iconImg ? `<img src="${ev.iconImg}" style="width:36px;height:36px;object-fit:contain;border-radius:8px" onerror="this.style.display='none'" />` : `<span style="font-size:20px">${ev.icon}</span>`}
      <div><div style="font-size:13px;font-weight:600;color:${th.text}">${esc(ev.title)}</div><div style="font-size:11px;color:${th.textMuted}">${dateStr}</div></div>
    </div>`;
  }).join("");
  resultsEl.style.display = "block";
}

function toggleYear(y, e) {
  state.openYears[y] = !state.openYears[y];
  const btn = e.currentTarget;
  const wrapper = btn.parentElement;
  const isOpen = state.openYears[y];
  const th = t(darkMode);
  btn.style.borderRadius = isOpen ? "16px 16px 0 0" : "16px";
  const arrow = btn.querySelector("[data-year-arrow]");
  if (arrow) arrow.style.transform = isOpen ? "rotate(180deg)" : "rotate(0deg)";
  const existing = wrapper.querySelector("[data-year-content]");
  if (existing) existing.remove();
  if (isOpen) {
    const filtered = [...EVENTS].sort((a, b) => new Date(a.date) - new Date(b.date));
    const items = (state.filter !== "All" ? filtered.filter(e => e.type === state.filter) : filtered)
      .filter(e => isOver(e) && new Date(e.date + "T12:00:00").getFullYear() === Number(y))
      .sort((a, b) => new Date(b.date) - new Date(a.date));
    const content = document.createElement("div");
    content.setAttribute("data-year-content", "true");
    content.style.cssText = `background:${th.surface};border:1.5px solid ${th.border};border-top:none;border-radius:0 0 16px 16px;overflow:hidden;animation:fadeSlideIn 0.25s ease`;
    content.innerHTML = items.map((ev, i) =>
      `<button onclick="selectEvent(${ev.id})" style="display:flex;align-items:center;gap:12px;padding:14px 18px;background:${th.surface};border:none;border-top:${i > 0 ? `1px solid ${th.border}` : "none"};cursor:pointer;text-align:left;width:100%;font-family:inherit;transition:background 0.15s ease;-webkit-tap-highlight-color:transparent;outline:none"
        onmouseenter="this.style.background='${th.surfaceHover}'"
        onmouseleave="this.style.background='${th.surface}'">
        ${(() => {
          if (ev.iconImg) {
            const innerStyle = ev.wideIcon ? `width:100%;height:100%;object-fit:contain` : `width:48px;height:48px;object-fit:contain`;
            return `<div style="width:55px;height:55px;border-radius:14px;background:${th.accentBg(ev.color)};display:flex;align-items:center;justify-content:center;flex-shrink:0;overflow:hidden"><img src="${ev.iconImg}" style="${innerStyle}" onerror="this.parentElement.innerHTML='${ev.icon}'" /></div>`;
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
    ).join("");
    wrapper.appendChild(content);
  }
}

function toggleNewsYear(y) {
  state.openNewsYears[y] = !state.openNewsYears[y];
  render();
}

function toggleNewsMonth(key) {
  state.openNewsMonths[key] = !state.openNewsMonths[key];
  render();
}

function rerenderWeekDigestOnly() {
  const root = document.getElementById("week-digest-root");
  if (!root) { render(); return; }
  const th = t(darkMode);
  const isMobile = breakpoint === "mobile";
  root.outerHTML = renderWeekDigest(th, isMobile);
}

function toggleWeekDay(idx) {
  const row = document.querySelector('[data-week-pills-row]');
  const savedScroll = row ? row.scrollLeft : 0;
  state.weekDigestDay = (state.weekDigestDay === idx) ? null : idx;
  state._weekDigestAnimate = true;
  rerenderWeekDigestOnly();
  requestAnimationFrame(() => {
    const newRow = document.querySelector('[data-week-pills-row]');
    if (newRow) newRow.scrollLeft = savedScroll;
  });
}

function shiftWeekDigest(delta) {
  state.weekDigestOffset += delta;
  state.weekDigestDay = null;
  state._weekDigestAnimate = true;
  rerenderWeekDigestOnly();
}

function resetWeekDigest() {
  state.weekDigestOffset = 0;
  state.weekDigestDay = null;
  state._weekDigestAnimate = true;
  rerenderWeekDigestOnly();
}

function renderWeekDigest(th, isMobile) {
  const ACCENT = "#5B8DEF";
  const weekOffset = state.weekDigestOffset || 0;
  const { start: weekStart, end: weekEnd } = getWeekBounds(new Date(), weekOffset);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayIdx = Math.round((today - weekStart) / 86400000);
  const isCurrentWeek = weekOffset === 0;
  const animatePanel = state._weekDigestAnimate === true;
  state._weekDigestAnimate = false;

  const weekEvents = EVENTS.filter(ev => {
    const s = getEventStartDate(ev);
    const e = getEventEndDate(ev);
    return s <= weekEnd && e >= weekStart;
  });

  const byDay = [[], [], [], [], [], [], []];
  weekEvents.forEach(ev => {
    const evStartDay = new Date(ev.date + "T00:00:00");
    evStartDay.setHours(0, 0, 0, 0);
    const evEndDay = new Date((ev.endDate || ev.date) + "T00:00:00");
    evEndDay.setHours(0, 0, 0, 0);
    const days = new Set();
    if (evStartDay >= weekStart && evStartDay <= weekEnd) {
      days.add(Math.round((evStartDay - weekStart) / 86400000));
    }
    if (evEndDay >= weekStart && evEndDay <= weekEnd) {
      days.add(Math.round((evEndDay - weekStart) / 86400000));
    }
    days.forEach(idx => byDay[idx].push(ev));
  });
  byDay.forEach(arr => arr.sort((a, b) => {
    const aTimed = /hour/i.test(a.time || "") || a.type === "Community Day";
    const bTimed = /hour/i.test(b.time || "") || b.type === "Community Day";
    if (aTimed !== bTimed) return bTimed - aTimed;
    return getEventStartDate(a) - getEventStartDate(b);
  }));

  const fmtMonDay = d => d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  const weekRangeText = `${fmtMonDay(weekStart)} – ${fmtMonDay(weekEnd)}`;
  const dayNames = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const fullDayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  const seasonEvent = weekEvents.find(ev => ev.title && ev.title.startsWith("Season:") && ev.details && Array.isArray(ev.details.dailyDiscoveries));
  const dailyByName = {};
  if (seasonEvent) {
    seasonEvent.details.dailyDiscoveries.forEach(d => { dailyByName[d.day] = d; });
  }

  const selectedDay = state.weekDigestDay !== null ? state.weekDigestDay : (todayIdx >= 0 && todayIdx <= 6 ? todayIdx : 0);

  const pillsHTML = dayNames.map((name, idx) => {
    const dayDate = new Date(weekStart);
    dayDate.setDate(dayDate.getDate() + idx);
    const events = byDay[idx];
    const dailyForDay = dailyByName[fullDayNames[idx]];
    const iconList = events.map(pillIconFor);
    if (dailyForDay) iconList.push(dailyForDay.icon || "⭐");
    const icons = [...new Set(iconList)].slice(0, 2).join(" ");
    const count = events.length;
    const isToday = idx === todayIdx;
    const isPast = idx < todayIdx;
    const isSelected = idx === selectedDay;
    const bg = isToday ? ACCENT : (isSelected ? th.heroBg(ACCENT) : "transparent");
    const border = isSelected && !isToday ? `1.5px solid ${ACCENT}` : `1.5px solid ${th.border}`;
    const textColor = isToday ? "#fff" : th.text;
    const labelColor = isToday ? "rgba(255,255,255,0.85)" : ACCENT;
    const countColor = isToday ? "rgba(255,255,255,0.95)" : (count > 0 ? th.text : th.textFaint);
    const opacity = isPast && !isSelected ? 0.55 : 1;
    const countDisplay = count > 0 ? count : (dailyForDay ? "·" : "—");
    return `<button onclick="toggleWeekDay(${idx})" style="flex:0 0 auto;${isMobile ? "scroll-snap-align:start;min-width:64px" : ""};display:flex;flex-direction:column;align-items:center;justify-content:flex-start;gap:3px;padding:10px 6px;border-radius:14px;background:${bg};border:${border};cursor:pointer;font-family:inherit;transition:transform 0.15s ease,background 0.2s ease;opacity:${opacity};-webkit-tap-highlight-color:transparent;outline:none"
      onmouseenter="this.style.transform='translateY(-2px)'"
      onmouseleave="this.style.transform='translateY(0)'">
      <div style="font-size:10px;font-weight:800;letter-spacing:1px;color:${labelColor}">${name}</div>
      <div style="font-size:18px;font-weight:800;color:${textColor};line-height:1;font-variant-numeric:tabular-nums">${dayDate.getDate()}</div>
      <div style="font-size:13px;line-height:1.1;min-height:16px">${icons || `<span style="color:${isToday ? "rgba(255,255,255,0.6)" : th.textFaint}">·</span>`}</div>
      <div style="font-size:10px;font-weight:700;color:${countColor};line-height:1">${countDisplay}</div>
    </button>`;
  }).join("");

  const dayEvents = byDay[selectedDay];
  const selectedDayDate = new Date(weekStart);
  selectedDayDate.setDate(selectedDayDate.getDate() + selectedDay);
  const fullDayName = selectedDayDate.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });

  const dailyTask = dailyByName[fullDayNames[selectedDay]];
  let dailyBannerHTML = "";
  if (dailyTask && seasonEvent) {
    const dColor = dailyTask.color || ACCENT;
    dailyBannerHTML = `<button onclick="selectEvent(${seasonEvent.id})" style="display:flex;align-items:center;gap:12px;padding:${isMobile ? "10px 12px" : "12px 14px"};margin-bottom:10px;background:${th.heroBg(dColor)};border:1.5px solid ${th.heroBorder(dColor)};border-radius:12px;cursor:pointer;width:100%;text-align:left;font-family:inherit;transition:transform 0.15s ease,box-shadow 0.2s ease;-webkit-tap-highlight-color:transparent;outline:none"
      onmouseenter="this.style.transform='translateY(-1px)';this.style.boxShadow='0 6px 16px ${dColor}25'"
      onmouseleave="this.style.transform='translateY(0)';this.style.boxShadow='none'">
      <span style="font-size:${isMobile ? 22 : 26}px;flex-shrink:0;line-height:1">${dailyTask.icon || "⭐"}</span>
      <div style="flex:1;min-width:0">
        <div style="font-size:9.5px;font-weight:800;letter-spacing:1px;color:${dColor};text-transform:uppercase;margin-bottom:2px">Daily Discovery</div>
        <div style="font-size:${isMobile ? 13.5 : 14.5}px;font-weight:800;color:${th.text};line-height:1.25">${esc(dailyTask.name)}</div>
        ${dailyTask.time ? `<div style="font-size:11.5px;color:${th.textMuted};font-weight:600;margin-top:2px">${esc(dailyTask.time)}</div>` : ""}
      </div>
      <div style="font-size:16px;color:${dColor};flex-shrink:0;font-weight:700">›</div>
    </button>`;
  }

  let panelHTML;
  if (dayEvents.length === 0) {
    panelHTML = dailyTask ? "" : `<div style="padding:14px 4px;text-align:center;font-size:13px;color:${th.textMuted};font-style:italic">Nothing scheduled.</div>`;
  } else {
    panelHTML = dayEvents.map(ev => {
      const evStartDay = new Date(ev.date + "T00:00:00");
      evStartDay.setHours(0, 0, 0, 0);
      const evEndDay = new Date((ev.endDate || ev.date) + "T00:00:00");
      evEndDay.setHours(0, 0, 0, 0);
      const isMultiDay = evStartDay.getTime() !== evEndDay.getTime();
      const isStartDay = evStartDay.getTime() === selectedDayDate.getTime();
      const isEndDay = evEndDay.getTime() === selectedDayDate.getTime();

      let badge = "";
      if (isMultiDay && isStartDay) badge = `<span style="font-size:9.5px;font-weight:700;color:#fff;background:${ev.color || ACCENT};padding:2px 7px;border-radius:10px;letter-spacing:0.5px">STARTS</span>`;
      else if (isMultiDay && isEndDay) badge = `<span style="font-size:9.5px;font-weight:700;color:#fff;background:${ev.color || ACCENT};padding:2px 7px;border-radius:10px;letter-spacing:0.5px">ENDS</span>`;

      const timeText = ev.time && /hour/i.test(ev.time) ? ev.time : "";

      let iconHTML;
      if (ev.iconImg) {
        iconHTML = `<img src="${ev.iconImg}" style="width:32px;height:32px;object-fit:contain;flex-shrink:0" onerror="this.outerHTML='<span style=\\'font-size:22px\\'>${ev.icon || pillIconFor(ev)}</span>'" />`;
      } else {
        const pkmn = (ev.type === "Raid" || ev.type === "Max Battle") && ev.details && ev.details.bosses && ev.details.bosses[0] ? getPokemonImg(ev.details.bosses[0]) : null;
        iconHTML = pkmn
          ? `<img src="${pkmn.url}" style="width:32px;height:32px;object-fit:contain;flex-shrink:0" onerror="this.outerHTML='<span style=\\'font-size:22px\\'>${ev.icon || pillIconFor(ev)}</span>'" />`
          : `<span style="font-size:22px;width:32px;text-align:center;flex-shrink:0">${ev.icon || pillIconFor(ev)}</span>`;
      }

      return `<button onclick="selectEvent(${ev.id})" style="display:flex;align-items:center;gap:12px;padding:10px 12px;background:transparent;border:none;border-radius:10px;cursor:pointer;text-align:left;width:100%;font-family:inherit;transition:background 0.15s ease;-webkit-tap-highlight-color:transparent;outline:none"
        onmouseenter="this.style.background='${th.heroBg(ACCENT)}'"
        onmouseleave="this.style.background='transparent'">
        ${iconHTML}
        <div style="flex:1;min-width:0">
          <div style="font-size:13.5px;font-weight:700;color:${th.text};display:flex;align-items:center;gap:6px;flex-wrap:wrap">${esc(ev.title)}${badge}</div>
          ${timeText ? `<div style="font-size:11.5px;color:${th.textMuted};margin-top:2px">${esc(timeText)}</div>` : ""}
        </div>
        <div style="font-size:16px;color:${th.textFaint};flex-shrink:0">›</div>
      </button>`;
    }).join("");
  }

  const totalCount = weekEvents.length;
  const emptyWeek = totalCount === 0;

  const headerTitle = weekOffset === 0 ? "THIS WEEK IN POGO" : weekOffset === 1 ? "NEXT WEEK IN POGO" : weekOffset === -1 ? "LAST WEEK IN POGO" : (weekOffset > 0 ? `IN ${weekOffset} WEEKS` : `${Math.abs(weekOffset)} WEEKS AGO`);
  const chevron = (dir) => `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:block"><polyline points="${dir === "left" ? "15 18 9 12 15 6" : "9 18 15 12 9 6"}"></polyline></svg>`;
  const arrowBtn = (dir, onClick, ariaLabel) => `<button onclick="${onClick}" aria-label="${ariaLabel}" style="display:inline-flex;align-items:center;justify-content:center;width:30px;height:30px;border-radius:50%;background:transparent;border:1.5px solid ${th.heroBorder(ACCENT)};color:${ACCENT};cursor:pointer;font-family:inherit;padding:0;transition:background 0.15s ease,transform 0.15s ease;-webkit-tap-highlight-color:transparent;outline:none"
    onmouseenter="this.style.background='${th.heroBg(ACCENT)}';this.style.transform='scale(1.08)'"
    onmouseleave="this.style.background='transparent';this.style.transform='scale(1)'">${chevron(dir)}</button>`;
  const rangePill = `<span style="font-size:${isMobile ? 11 : 12}px;font-weight:700;color:${ACCENT};background:${th.heroBg(ACCENT)};border:1px solid ${th.heroBorder(ACCENT)};padding:4px 10px;border-radius:12px;white-space:nowrap">${weekRangeText}</span>`;
  const todayBtn = !isCurrentWeek ? `<button onclick="resetWeekDigest()" aria-label="Jump to current week" style="font-size:${isMobile ? 10 : 11}px;font-weight:800;letter-spacing:0.8px;color:#fff;background:${ACCENT};border:1px solid ${ACCENT};padding:5px 10px;border-radius:12px;white-space:nowrap;cursor:pointer;font-family:inherit;transition:transform 0.15s ease,box-shadow 0.2s ease;-webkit-tap-highlight-color:transparent;outline:none"
    onmouseenter="this.style.transform='scale(1.05)';this.style.boxShadow='0 4px 12px ${ACCENT}40'"
    onmouseleave="this.style.transform='scale(1)';this.style.boxShadow='none'">TODAY</button>` : "";

  return `<div id="week-digest-root" style="background:${th.heroBg(ACCENT)};border:1.5px solid ${th.heroBorder(ACCENT)};border-radius:${isMobile ? 18 : 24}px;padding:${isMobile ? "18px 16px 14px" : "24px 24px 18px"};overflow:hidden">
    <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:${isMobile ? 12 : 14}px;flex-wrap:wrap">
      <div style="display:flex;align-items:center;gap:8px;min-width:0;flex-wrap:wrap">
        <span style="font-size:${isMobile ? 18 : 20}px">📆</span>
        <h2 style="margin:0;font-size:${isMobile ? 15 : 17}px;font-weight:800;color:${th.text};letter-spacing:0.5px">${headerTitle}</h2>
        ${todayBtn}
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        ${arrowBtn("left", "shiftWeekDigest(-1)", "Previous week")}
        ${rangePill}
        ${arrowBtn("right", "shiftWeekDigest(1)", "Next week")}
      </div>
    </div>
    <div data-week-pills-row style="display:${isMobile ? "flex" : "grid"};${isMobile ? "overflow-x:auto;scroll-snap-type:x mandatory;gap:8px;padding-bottom:6px;-webkit-overflow-scrolling:touch;scrollbar-width:none" : "grid-template-columns:repeat(7,1fr);gap:8px"};margin-bottom:${isMobile ? 12 : 14}px">${pillsHTML}</div>
    ${emptyWeek ? `<div style="padding:18px 4px;text-align:center;font-size:13px;color:${th.textMuted};font-style:italic">${isCurrentWeek ? "Quiet week — check back Monday." : "Nothing scheduled this week yet."}</div>` : `<div style="border-top:1px solid ${th.border};padding-top:12px">
      <div key="${selectedDay}-${weekOffset}" style="${animatePanel ? "animation:fadeSlideIn 0.28s cubic-bezier(0.25,0.46,0.45,0.94);" : ""}">
        <div style="font-size:11px;font-weight:800;letter-spacing:1px;color:${ACCENT};margin-bottom:8px;text-transform:uppercase">${esc(fullDayName)}</div>
        ${dailyBannerHTML}
        <div style="display:flex;flex-direction:column;gap:2px">${panelHTML}</div>
      </div>
    </div>`}
  </div>`;
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
  const NEWS_MONTH_NAMES = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const getPubDate = a => new Date((a.published || a.date) + "T12:00:00");
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
  const recentNews = filteredAnnouncements.filter(a => getPubDate(a) >= sixMonthsAgo);
  const archivedNews = filteredAnnouncements.filter(a => getPubDate(a) < sixMonthsAgo);
  const archivedNewsByYearMonth = {};
  archivedNews.forEach(a => {
    const d = getPubDate(a);
    const year = d.getFullYear();
    const month = d.getMonth();
    if (!archivedNewsByYearMonth[year]) archivedNewsByYearMonth[year] = {};
    if (!archivedNewsByYearMonth[year][month]) archivedNewsByYearMonth[year][month] = [];
    archivedNewsByYearMonth[year][month].push(a);
  });
  Object.keys(archivedNewsByYearMonth).forEach(y => {
    Object.keys(archivedNewsByYearMonth[y]).forEach(m => {
      archivedNewsByYearMonth[y][m].sort((a, b) => getPubDate(b) - getPubDate(a));
    });
  });
  const newsArchiveYears = Object.keys(archivedNewsByYearMonth).sort((a, b) => b - a);

  const activeEvents = EVENTS.filter(isActive).sort((a, b) => b.title.startsWith("Season:") - a.title.startsWith("Season:"));
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
      liveHTML += `<div onclick="selectEvent(${ev.id})" style="background:${th.heroBg("#2ECC71")};border:1.5px solid ${th.heroBorder("#2ECC71")};border-radius:${isMobile ? 18 : 20}px;padding:${isMobile ? "20px 18px 16px" : "18px 22px 16px"};cursor:pointer;transition:all 0.3s cubic-bezier(0.25,0.46,0.45,0.94);overflow:hidden;${state.heroRendered ? "" : "animation:scaleIn 0.5s cubic-bezier(0.25,0.46,0.45,0.94)"}"
        onmouseenter="this.style.transform='translateY(-2px)';this.style.boxShadow='0 12px 30px #2ECC7120';"
        onmouseleave="this.style.transform='translateY(0)';this.style.boxShadow='none';">
        <div style="font-size:${isMobile ? 10 : 10}px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:${isMobile ? 6 : 6}px;color:#2ECC71;display:flex;align-items:center;gap:6px">
          <span style="position:relative;width:7px;height:7px;display:inline-block"><span style="position:absolute;top:0;left:0;width:100%;height:100%;border-radius:50%;background:#2ECC71"></span><span style="position:absolute;top:0;left:0;width:100%;height:100%;border-radius:50%;background:#2ECC71;animation:sonarPulse 1.5s ease-out infinite"></span></span> LIVE
        </div>
        <div style="display:flex;${isMobile ? "flex-direction:column;gap:10px" : "justify-content:space-between;align-items:center;gap:14px"}">
          <div style="min-width:0;${isMobile ? "" : "flex:1"}"><h2 style="margin:0 0 2px 0;font-size:${isMobile ? 18 : 18}px;font-weight:800;color:${th.text};display:flex;align-items:center;gap:8px${isMobile ? "" : (ev.shadowBg ? ";overflow:visible" : ";white-space:nowrap;overflow:hidden;text-overflow:ellipsis")}">${(() => {
            if (ev.shadowBg && ev.iconImg) {
              const size = isMobile ? 56 : 56;
              return `<div style="position:relative;width:${size}px;height:${size}px;flex-shrink:0;overflow:visible;margin:${isMobile ? "-12px" : "-12px"} 0 ${isMobile ? "-8px" : "-8px"} 0">
                <img src="assets/pokemon-images/icons/shadow_icon.png" style="position:absolute;top:-18%;left:-18%;width:136%;height:136%;object-fit:contain;opacity:${darkMode ? 0.9 : 0.7};z-index:0" />
                <img src="${ev.iconImg}" style="position:relative;width:100%;height:100%;object-fit:contain;z-index:1" onerror="this.parentElement.style.display='none'" />
              </div>`;
            }
            if (ev.type === "Max Battle" && ev.iconImg) {
              const size = isMobile ? 36 : 34;
              return `<div style="position:relative;width:${size}px;height:${size}px;flex-shrink:0">
                <img src="assets/pokemon-images/dynamax.png" style="position:absolute;top:0;left:50%;transform:translateX(-50%);width:80%;object-fit:contain;opacity:0.85;z-index:0" />
                <img src="${ev.iconImg}" style="position:relative;width:100%;height:100%;object-fit:contain;z-index:1" onerror="this.parentElement.style.display='none'" />
              </div>`;
            }
            if (ev.iconImg) return `<img src="${ev.iconImg}" style="width:${isMobile ? 36 : 34}px;height:${isMobile ? 36 : 34}px;object-fit:contain;flex-shrink:0" onerror="this.outerHTML='${ev.icon}'" />`;
            const livePkmn = (ev.type === "Raid" || ev.type === "Max Battle") && ev.details && ev.details.bosses && ev.details.bosses[0] ? getPokemonImg(ev.details.bosses[0]) : null;
            return livePkmn ? `<img src="${livePkmn.url}" style="width:${isMobile ? 36 : 34}px;height:${isMobile ? 36 : 34}px;object-fit:contain;flex-shrink:0" onerror="this.outerHTML='${ev.icon}'" />` : ev.icon;
          })()} ${esc(ev.title)}</h2>
          <div style="font-size:${isMobile ? 12 : 12}px;color:${th.textMuted};font-weight:500${isMobile ? "" : ";white-space:nowrap;overflow:hidden;text-overflow:ellipsis"}">${formatDateRange(ev.date, ev.endDate)}${ev.time ? ` \u00B7 ${esc(ev.time)}` : ""}</div></div>
          <span class="countdown" data-date="${ev.endDate || ev.date}" data-color="#2ECC71" data-over="false" data-event-id="${ev.id}" style="flex-shrink:0">${renderCountdown(ev.endDate || ev.date, "#2ECC71", false, th, ev)}</span>
        </div>
      </div>`;
    });

    // Compact live events (mobile, non-home tabs)
    let liveCompactHTML = "";
    activeEvents.forEach(ev => {
      const shadowWrap = (src, size) => `<div style="position:relative;width:${size}px;height:${size}px;flex-shrink:0;overflow:visible">
          <img src="assets/pokemon-images/icons/shadow_icon.png" style="position:absolute;top:-18%;left:-18%;width:136%;height:136%;object-fit:contain;opacity:${darkMode ? 0.9 : 0.7};z-index:0" />
          <img src="${src}" style="position:relative;width:100%;height:100%;object-fit:contain;z-index:1" onerror="this.parentElement.style.display='none'" />
        </div>`;
      const dynamaxWrap = (src, size, imgSize) => `<div style="position:relative;width:${size}px;height:${size}px;flex-shrink:0">
          <img src="assets/pokemon-images/dynamax.png" style="position:absolute;top:0;left:50%;transform:translateX(-50%);width:80%;object-fit:contain;opacity:0.85;z-index:0" />
          <img src="${src}" style="position:relative;width:${imgSize}px;height:${imgSize}px;object-fit:contain;z-index:1;display:block;margin:0 auto" onerror="this.parentElement.style.display='none'" />
        </div>`;
      const compactIcon = (() => {
        if (ev.shadowBg && ev.iconImg) return shadowWrap(ev.iconImg, 32);
        if (ev.type === "Max Battle" && ev.iconImg) return dynamaxWrap(ev.iconImg, 32, 28);
        if (ev.iconImg) return `<img src="${ev.iconImg}" style="width:28px;height:28px;object-fit:contain" onerror="this.outerHTML='${ev.icon}'" />`;
        const pkmn = (ev.type === "Raid" || ev.type === "Max Battle") && ev.details && ev.details.bosses && ev.details.bosses[0] ? getPokemonImg(ev.details.bosses[0]) : null;
        return pkmn ? `<img src="${pkmn.url}" style="width:28px;height:28px;object-fit:contain" onerror="this.outerHTML='${ev.icon}'" />` : ev.icon;
      })();
      const fullIcon = (() => {
        if (ev.shadowBg && ev.iconImg) return shadowWrap(ev.iconImg, 44);
        if (ev.type === "Max Battle" && ev.iconImg) return dynamaxWrap(ev.iconImg, 44, 36);
        if (ev.iconImg) return `<img src="${ev.iconImg}" style="width:36px;height:36px;object-fit:contain" onerror="this.outerHTML='${ev.icon}'" />`;
        const pkmn = (ev.type === "Raid" || ev.type === "Max Battle") && ev.details && ev.details.bosses && ev.details.bosses[0] ? getPokemonImg(ev.details.bosses[0]) : null;
        return pkmn ? `<img src="${pkmn.url}" style="width:36px;height:36px;object-fit:contain" onerror="this.outerHTML='${ev.icon}'" />` : ev.icon;
      })();
      liveCompactHTML += `<div style="background:${th.heroBg("#2ECC71")};border:1.5px solid ${th.heroBorder("#2ECC71")};border-radius:12px;overflow:hidden">
        <div onclick="toggleCompactCard(this)" style="padding:10px 14px;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:10px">
          <div style="display:flex;align-items:center;gap:8px;min-width:0;flex:1">
            <span style="position:relative;width:7px;height:7px;display:inline-block;flex-shrink:0"><span style="position:absolute;top:0;left:0;width:100%;height:100%;border-radius:50%;background:#2ECC71"></span><span style="position:absolute;top:0;left:0;width:100%;height:100%;border-radius:50%;background:#2ECC71;animation:sonarPulse 1.5s ease-out infinite"></span></span>
            ${compactIcon}
            <span style="font-size:13px;font-weight:700;color:${th.text};white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(ev.title)}</span>
          </div>
          <div style="display:flex;align-items:center;gap:8px;flex-shrink:0">
            <span class="countdown" data-date="${ev.endDate || ev.date}" data-color="#2ECC71" data-over="false" data-event-id="${ev.id}" data-compact="true">${renderCountdown(ev.endDate || ev.date, "#2ECC71", false, th, ev, true)}</span>
            <span class="compact-chevron" style="font-size:14px;color:${th.textMuted};transition:transform 0.3s ease;display:inline-block">\u25BE</span>
          </div>
        </div>
        <div class="compact-card-body" style="max-height:0;overflow:hidden;transition:max-height 0.35s cubic-bezier(0.25,0.46,0.45,0.94),padding 0.35s ease;padding:0 14px">
          <div onclick="selectEvent(${ev.id})" style="cursor:pointer;padding:6px 0 14px;display:flex;align-items:center;gap:12px">
            <div style="flex-shrink:0">${fullIcon}</div>
            <div style="flex:1;min-width:0">
              <div style="font-size:16px;font-weight:800;color:${th.text};margin-bottom:4px">${esc(ev.title)}</div>
              <div style="font-size:12px;color:${th.textMuted};font-weight:500">${formatDateRange(ev.date, ev.endDate)}${ev.time ? ` \u00B7 ${esc(ev.time)}` : ""}</div>
              <div style="margin-top:6px"><span style="font-size:10px;font-weight:700;color:#fff;background:#2ECC71;padding:2px 8px;border-radius:20px">LIVE</span></div>
            </div>
          </div>
        </div>
      </div>`;
    });

    // Hero (upcoming)
    let heroHTML = "";
    let heroCompactHTML = "";
    if (hero) {
      heroHTML = `<div onclick="selectEvent(${hero.id})" style="background:${th.heroBg(hero.color)};border:1.5px solid ${th.heroBorder(hero.color)};border-radius:${isMobile ? 18 : 20}px;padding:${isMobile ? "20px 18px 16px" : "18px 22px 16px"};cursor:pointer;transition:all 0.3s cubic-bezier(0.25,0.46,0.45,0.94);overflow:hidden;${state.heroRendered ? "" : "animation:scaleIn 0.5s cubic-bezier(0.25,0.46,0.45,0.94)"}"
        onmouseenter="this.style.transform='translateY(-2px)';this.style.boxShadow='0 12px 30px ${hero.color}20';"
        onmouseleave="this.style.transform='translateY(0)';this.style.boxShadow='none';">
        <div style="font-size:${isMobile ? 10 : 10}px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:${isMobile ? 6 : 6}px;color:${hero.color};display:flex;align-items:center;gap:6px">
          \u23F1 Coming Up Next
        </div>
        <div style="display:flex;${isMobile ? "flex-direction:column;gap:10px" : "justify-content:space-between;align-items:center;gap:14px"}">
          <div style="min-width:0;${isMobile ? "" : "flex:1"}"><h2 style="margin:0 0 2px 0;font-size:${isMobile ? 18 : 18}px;font-weight:800;color:${th.text};display:flex;align-items:center;gap:8px${isMobile ? "" : (hero.shadowBg ? ";overflow:visible" : ";white-space:nowrap;overflow:hidden;text-overflow:ellipsis")}">${(() => {
            if (hero.shadowBg && hero.iconImg) {
              const size = isMobile ? 44 : 46;
              return `<div style="position:relative;width:${size}px;height:${size}px;flex-shrink:0;overflow:visible;margin:${isMobile ? "-8px" : "-8px"} 0 2px 0">
                <img src="assets/pokemon-images/icons/shadow_icon.png" style="position:absolute;top:-18%;left:-18%;width:136%;height:136%;object-fit:contain;opacity:${darkMode ? 0.9 : 0.7};z-index:0" />
                <img src="${hero.iconImg}" style="position:relative;width:100%;height:100%;object-fit:contain;z-index:1" onerror="this.parentElement.style.display='none'" />
              </div>`;
            }
            if (hero.iconImg) return `<img src="${hero.iconImg}" style="width:${isMobile ? 36 : 34}px;height:${isMobile ? 36 : 34}px;object-fit:contain;margin-left:-4px;flex-shrink:0" onerror="this.outerHTML='${hero.icon}'" />`;
            const heroPkmn = (hero.type === "Raid" || hero.type === "Max Battle") && hero.details && hero.details.bosses && hero.details.bosses[0] ? getPokemonImg(hero.details.bosses[0]) : null;
            return heroPkmn ? `<img src="${heroPkmn.url}" style="width:${isMobile ? 36 : 34}px;height:${isMobile ? 36 : 34}px;object-fit:contain;flex-shrink:0" onerror="this.outerHTML='${hero.icon}'" />` : hero.icon;
          })()} ${esc(hero.title)}</h2>
          <div style="font-size:${isMobile ? 12 : 12}px;color:${th.textMuted};font-weight:500${isMobile ? "" : ";white-space:nowrap;overflow:hidden;text-overflow:ellipsis"}">${formatDateRange(hero.date, hero.endDate)} \u00B7 ${esc(hero.time)}</div></div>
          <span class="countdown" data-date="${hero.date}" data-color="${hero.color}" data-over="false" data-event-id="${hero.id}" style="flex-shrink:0">${renderCountdown(hero.date, hero.color, false, th, hero)}</span>
        </div>
      </div>`;
      const heroShadowWrap = (src, size) => `<div style="position:relative;width:${size}px;height:${size}px;flex-shrink:0;overflow:visible">
          <img src="assets/pokemon-images/icons/shadow_icon.png" style="position:absolute;top:-18%;left:-18%;width:136%;height:136%;object-fit:contain;opacity:${darkMode ? 0.9 : 0.7};z-index:0" />
          <img src="${src}" style="position:relative;width:100%;height:100%;object-fit:contain;z-index:1" onerror="this.parentElement.style.display='none'" />
        </div>`;
      const compactHeroIcon = (() => {
        if (hero.shadowBg && hero.iconImg) return heroShadowWrap(hero.iconImg, 32);
        if (hero.iconImg) return `<img src="${hero.iconImg}" style="width:28px;height:28px;object-fit:contain" onerror="this.outerHTML='${hero.icon}'" />`;
        const heroPkmn = (hero.type === "Raid" || hero.type === "Max Battle") && hero.details && hero.details.bosses && hero.details.bosses[0] ? getPokemonImg(hero.details.bosses[0]) : null;
        return heroPkmn ? `<img src="${heroPkmn.url}" style="width:28px;height:28px;object-fit:contain" onerror="this.outerHTML='${hero.icon}'" />` : hero.icon;
      })();
      const fullHeroIcon = (() => {
        if (hero.shadowBg && hero.iconImg) return heroShadowWrap(hero.iconImg, 60);
        if (hero.iconImg) return `<img src="${hero.iconImg}" style="width:60px;height:60px;object-fit:contain" onerror="this.outerHTML='${hero.icon}'" />`;
        const heroPkmn = (hero.type === "Raid" || hero.type === "Max Battle") && hero.details && hero.details.bosses && hero.details.bosses[0] ? getPokemonImg(hero.details.bosses[0]) : null;
        return heroPkmn ? `<img src="${heroPkmn.url}" style="width:36px;height:36px;object-fit:contain" onerror="this.outerHTML='${hero.icon}'" />` : hero.icon;
      })();
      heroCompactHTML = `<div style="background:${th.heroBg(hero.color)};border:1.5px solid ${th.heroBorder(hero.color)};border-radius:12px;overflow:hidden">
        <div onclick="toggleCompactCard(this)" style="padding:10px 14px;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:10px">
          <div style="display:flex;align-items:center;gap:8px;min-width:0;flex:1">
            <span style="font-size:9px;font-weight:700;color:${hero.color};letter-spacing:0.5px">\u23F1</span>
            ${compactHeroIcon}
            <span style="font-size:13px;font-weight:700;color:${th.text};white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(hero.title)}</span>
          </div>
          <div style="display:flex;align-items:center;gap:8px;flex-shrink:0">
            <span class="countdown" data-date="${hero.date}" data-color="${hero.color}" data-over="false" data-event-id="${hero.id}" data-compact="true">${renderCountdown(hero.date, hero.color, false, th, hero, true)}</span>
            <span class="compact-chevron" style="font-size:14px;color:${th.textMuted};transition:transform 0.3s ease;display:inline-block">\u25BE</span>
          </div>
        </div>
        <div class="compact-card-body" style="max-height:0;overflow:hidden;transition:max-height 0.35s cubic-bezier(0.25,0.46,0.45,0.94),padding 0.35s ease;padding:0 14px">
          <div onclick="selectEvent(${hero.id})" style="cursor:pointer;padding:6px 0 14px;display:flex;align-items:center;gap:12px">
            <div style="flex-shrink:0">${fullHeroIcon}</div>
            <div style="flex:1;min-width:0">
              <div style="font-size:16px;font-weight:800;color:${th.text};margin-bottom:4px">${esc(hero.title)}</div>
              <div style="font-size:12px;color:${th.textMuted};font-weight:500">${formatDateRange(hero.date, hero.endDate)} \u00B7 ${esc(hero.time)}</div>
              <div style="margin-top:6px"><span style="font-size:10px;font-weight:700;color:${hero.color};background:${th.accentBg(hero.color)};padding:2px 8px;border-radius:20px">COMING UP NEXT</span></div>
            </div>
          </div>
        </div>
      </div>`;
    }

    // Tabs
    const tabsHTML = `<div style="display:flex;border-bottom:2px solid ${th.tabBorder};margin-top:4px">
      ${["events", "calendar", "raids", "max", "rocket", "eggs", "news"].map(tb => {
        const rocketIcon = `<img src="assets/pokemon-images/icons/teamrocket_r_full.png" style="width:${isMobile ? 22 : 20}px;height:${isMobile ? 22 : 20}px;object-fit:contain;vertical-align:middle" />`;
        const eggIcon = `<img src="assets/pokemon-images/eggs/egg-2.png" style="width:${isMobile ? 28 : 24}px;height:${isMobile ? 28 : 24}px;object-fit:contain;vertical-align:middle;position:relative;top:-4px" />`;
        const iconWrap = (inner) => `<span style="display:flex;align-items:center;justify-content:center;width:24px;height:24px">${inner}</span>`;
        const mobileIcon = tb === "events" ? iconWrap(`<span style="font-size:20px">\uD83D\uDCC5</span>`) : tb === "calendar" ? iconWrap(`<span style="font-size:20px">\uD83D\uDDD3\uFE0F</span>`) : tb === "raids" ? iconWrap(`<span style="font-size:20px">\u2694\uFE0F</span>`) : tb === "max" ? iconWrap(`<span style="font-size:20px">\uD83D\uDCA5</span>`) : tb === "rocket" ? iconWrap(rocketIcon) : tb === "eggs" ? iconWrap(eggIcon) : iconWrap(`<span style="font-size:20px">\uD83D\uDCE2</span>`);
        const mobileText = tb === "events" ? "Events" : tb === "calendar" ? "Cal" : tb === "raids" ? "Raids" : tb === "max" ? "Max" : tb === "rocket" ? "Rocket" : tb === "eggs" ? "Eggs" : "News";
        const mobileLabel = `<span style="display:flex;flex-direction:column;align-items:center;gap:3px">${mobileIcon}<span>${mobileText}</span></span>`;
        const desktopLabel = tb === "events" ? `\uD83D\uDCC5 Events (${upcomingEvents.length})` : tb === "calendar" ? `\uD83D\uDDD3\uFE0F Calendar` : tb === "raids" ? `\u2694\uFE0F Raids` : tb === "max" ? `\uD83D\uDCA5 Max Battles` : tb === "rocket" ? `${rocketIcon} Rocket` : tb === "eggs" ? `${eggIcon} Eggs` : `\uD83D\uDCE2 News (${filteredAnnouncements.length})`;
        const label = isMobile ? mobileLabel : desktopLabel;
        return `<button onclick="setTab('${tb}')" style="${isMobile ? "flex:1;padding:8px 4px" : "flex:1;padding:11px 0"};background:none;border:none;border-bottom:${state.tab === tb ? `2.5px solid ${th.tabActive}` : "2.5px solid transparent"};color:${state.tab === tb ? th.tabActive : th.tabInactive};font-size:${isMobile ? 9 : 13}px;font-weight:700;cursor:pointer;text-transform:uppercase;letter-spacing:${isMobile ? "0.3px" : "1px"};transition:all 0.15s ease;font-family:inherit;white-space:nowrap">${label}</button>`;
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
              <span style="font-size:11px;font-weight:700;color:${th.textMuted};letter-spacing:1px;text-transform:uppercase;white-space:nowrap">Archived ${state.filter === "All" ? "Events" : state.filter + "s"}</span>
              <div style="flex:1;height:1px;background:${th.border}"></div>
            </div>
            <div style="position:relative;max-width:400px;margin:0 auto;width:100%">
              <input id="cd-archive-search" placeholder="Search past ${state.filter === "All" ? "events" : state.filter + "s"}..." oninput="searchArchivedCDs(this.value)" autocomplete="off" style="width:100%;padding:${isMobile ? "10px 14px 10px 38px" : "12px 16px 12px 42px"};border-radius:12px;border:1.5px solid ${th.border};background:${th.surface};color:${th.text};font-size:${isMobile ? 13 : 14}px;font-family:inherit;outline:none;box-sizing:border-box" />
              <span style="position:absolute;left:12px;top:50%;transform:translateY(-50%);font-size:16px;pointer-events:none">\uD83D\uDD0D</span>
              <div id="cd-archive-results" style="display:none;position:absolute;top:100%;left:0;right:0;max-height:300px;overflow-y:auto;background:${th.surface};border:1.5px solid ${th.border};border-radius:12px;margin-top:4px;z-index:100;box-shadow:0 8px 24px rgba(0,0,0,0.2)"></div>
            </div>
            ${archiveYears.map(year => {
              const items = pastByYear[year];
              const isOpen = !!state.openYears[year];
              const label = state.filter === "All" ? `${items.length} past event${items.length === 1 ? "" : "s"}` : `${items.length} past ${state.filter} event${items.length === 1 ? "" : "s"}`;
              return `<div style="margin-top:${upcomingEvents.length > 0 ? 6 : 0}px">
                <button onclick="toggleYear('${year}', event)" style="display:flex;align-items:center;justify-content:space-between;width:100%;padding:14px 18px;background:${th.surface};border:1.5px solid ${th.border};border-radius:${isOpen ? "16px 16px 0 0" : "16px"};cursor:pointer;font-family:inherit;transition:all 0.2s ease;box-shadow:${th.shadow}">
                  <div style="display:flex;align-items:center;gap:10px">
                    <div style="width:36px;height:36px;border-radius:10px;background:${th.accentBg("#636E72")};display:flex;align-items:center;justify-content:center;font-size:16px">\uD83D\uDCCB</div>
                    <div style="text-align:left"><div style="font-size:15px;font-weight:700;color:${th.text}">${year}</div>
                    <div style="font-size:12px;color:${th.textMuted};font-weight:500">${label}</div></div>
                  </div>
                  <div data-year-arrow style="font-size:18px;color:${th.textMuted};transition:transform 0.2s ease;transform:${isOpen ? "rotate(180deg)" : "rotate(0deg)"}">\u25BE</div>
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
            const monthsObj = archivedNewsByYearMonth[year];
            const monthKeys = Object.keys(monthsObj).map(Number).sort((a, b) => b - a);
            const yearTotal = monthKeys.reduce((sum, m) => sum + monthsObj[m].length, 0);
            const isYearOpen = !!state.openNewsYears[year];
            const yearLabel = state.newsFilter === "All" ? `${yearTotal} older post${yearTotal === 1 ? "" : "s"}` : `${yearTotal} older ${state.newsFilter} post${yearTotal === 1 ? "" : "s"}`;
            return `<div style="margin-top:${recentNews.length > 0 ? 6 : 0}px">
              <button onclick="toggleNewsYear('${year}')" style="display:flex;align-items:center;justify-content:space-between;width:100%;padding:14px 18px;background:${th.surface};border:1.5px solid ${th.border};border-radius:${isYearOpen ? "16px 16px 0 0" : "16px"};cursor:pointer;font-family:inherit;transition:all 0.2s ease;box-shadow:${th.shadow}">
                <div style="display:flex;align-items:center;gap:10px">
                  <div style="width:36px;height:36px;border-radius:10px;background:${th.accentBg("#636E72")};display:flex;align-items:center;justify-content:center;font-size:16px">\uD83D\uDCF0</div>
                  <div style="text-align:left"><div style="font-size:15px;font-weight:700;color:${th.text}">${year}</div>
                  <div style="font-size:12px;color:${th.textMuted};font-weight:500">${yearLabel}</div></div>
                </div>
                <div style="font-size:18px;color:${th.textMuted};transition:transform 0.2s ease;transform:${isYearOpen ? "rotate(180deg)" : "rotate(0deg)"}">\u25BE</div>
              </button>
              ${isYearOpen ? `<div style="background:${th.surface};border:1.5px solid ${th.border};border-top:none;border-radius:0 0 16px 16px;overflow:hidden;animation:fadeSlideIn 0.25s ease">
                ${monthKeys.map((m, mi) => {
                  const monthKey = `${year}-${m}`;
                  const items = monthsObj[m];
                  const isMonthOpen = !!state.openNewsMonths[monthKey];
                  const monthLabel = state.newsFilter === "All" ? `${items.length} post${items.length === 1 ? "" : "s"}` : `${items.length} ${state.newsFilter} post${items.length === 1 ? "" : "s"}`;
                  return `<div style="border-top:${mi > 0 ? `1px solid ${th.border}` : "none"}">
                    <button onclick="toggleNewsMonth('${monthKey}')" style="display:flex;align-items:center;justify-content:space-between;width:100%;padding:12px 18px 12px 24px;background:${th.surface};border:none;cursor:pointer;font-family:inherit;transition:background 0.15s ease;-webkit-tap-highlight-color:transparent;outline:none"
                      onmouseenter="this.style.background='${th.surfaceHover}'"
                      onmouseleave="this.style.background='${th.surface}'">
                      <div style="text-align:left"><div style="font-size:14px;font-weight:600;color:${th.text}">${NEWS_MONTH_NAMES[m]}</div>
                      <div style="font-size:11px;color:${th.textMuted};font-weight:500;margin-top:1px">${monthLabel}</div></div>
                      <div style="font-size:14px;color:${th.textMuted};transition:transform 0.2s ease;transform:${isMonthOpen ? "rotate(180deg)" : "rotate(0deg)"}">\u25BE</div>
                    </button>
                    ${isMonthOpen ? `<div style="animation:fadeSlideIn 0.2s ease">
                      ${items.map((a) =>
                        `<button onclick="selectNews(${a.id})" style="display:flex;align-items:center;gap:12px;padding:12px 18px 12px 32px;background:${th.surface};border:none;border-top:1px solid ${th.border};cursor:pointer;text-align:left;width:100%;font-family:inherit;transition:background 0.15s ease;-webkit-tap-highlight-color:transparent;outline:none"
                          onmouseenter="this.style.background='${th.surfaceHover}'"
                          onmouseleave="this.style.background='${th.surface}'">
                          <span style="font-size:10px;font-weight:700;background:${th.tagBg(a.tag)};color:${th.tagText(a.tag)};padding:3px 8px;border-radius:20px;flex-shrink:0">${esc(a.tag)}</span>
                          <div style="flex:1;min-width:0"><div style="font-size:14px;font-weight:600;color:${th.text};line-height:1.3">${esc(a.title)}</div>
                          <div style="font-size:12px;color:${th.textMuted};margin-top:2px">${formatDate(a.published || a.date)}</div></div>
                          <div style="font-size:13px;color:${th.textFaint}">\u2192</div>
                        </button>`
                      ).join("")}
                    </div>` : ""}
                  </div>`;
                }).join("")}
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
        const usesShadowEgg = eggUrl && eggUrl.endsWith("shadow.png");
        const isShadowTier = tier.startsWith("Shadow");
        const eggImg = eggUrl ? (usesShadowEgg
          ? `<img src="${eggUrl}" style="width:44px;height:44px;object-fit:contain;flex-shrink:0" onerror="this.style.display='none'" />`
          : isShadowTier
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
        <div style="font-size:${isMobile ? 10 : 11}px;color:${th.textMuted};font-weight:500;font-style:italic;text-align:right">Last updated on May 23, 2026 at 7:24 pm</div>
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

    // Rocket tab
    let rocketTabHTML = "";
    if (state.tab === "rocket") {
      const cardLayout = breakpoint !== "mobile";
      // Shared slot row renderer for leaders and grunts
      const rocketSlotImgSize = cardLayout ? 80 : 56;
      const rocketShadowImg = (pkmn, size) => {
        if (!pkmn) return "";
        return `<div style="position:relative;width:${size}px;height:${size}px;flex-shrink:0;overflow:visible">
          <img src="assets/pokemon-images/icons/shadow_icon.png" style="position:absolute;top:-15%;left:-15%;width:130%;height:130%;object-fit:contain;opacity:${darkMode ? "0.85" : "0.6"};z-index:0" />
          <img src="${pkmn.url}" style="position:relative;width:100%;height:100%;object-fit:contain;z-index:1" onerror="this.parentElement.style.display='none'" />
        </div>`;
      };
      const renderRocketSlotRow = (slotPokemon, slotIdx, shinySlot = 0) => {
        const pkmnCards = slotPokemon.map(p => {
          const pkmn = getPokemonImg("Shadow " + p);
          let imgEl = pkmn ? rocketShadowImg(pkmn, rocketSlotImgSize) : "";
          if (imgEl && slotIdx === shinySlot) {
            const sparkle = `<div style="position:absolute;top:2%;right:-2%;z-index:2;font-size:20px">\u2728</div>`;
            if (imgEl.includes("position:relative;width:")) {
              imgEl = imgEl.replace(/<\/div>$/, `${sparkle}</div>`);
            } else {
              const srcMatch = imgEl.match(/src="([^"]+)"/);
              imgEl = `<div style="position:relative;width:${rocketSlotImgSize}px;height:${rocketSlotImgSize}px;flex-shrink:0">
                <img src="${srcMatch[1]}" style="width:100%;height:100%;object-fit:contain" onerror="this.style.display='none'" />
                ${sparkle}
              </div>`;
            }
          }
          const displayName = p.replace(/\s*\(Male\)/," \u2642").replace(/\s*\(Female\)/," \u2640");
          const safeAttr = p.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;");
          return `<div onclick="showRocketPopup(this.dataset.pkmn)" data-pkmn="${safeAttr}" style="display:flex;flex-direction:column;align-items:center;gap:3px;cursor:pointer;transition:transform 0.15s ease" onmouseenter="this.style.transform='scale(1.08)'" onmouseleave="this.style.transform='scale(1)'">
            ${imgEl}
            <div style="font-size:${isMobile ? 10 : 11}px;font-weight:600;color:${th.text};text-align:center">${esc(displayName)}</div>
          </div>`;
        }).join("");
        const premierBall = slotIdx === shinySlot ? `<img src="assets/pokemon-images/Items/premierball_sprite.png" style="width:${isMobile ? 20 : 24}px;height:${isMobile ? 20 : 24}px;object-fit:contain" />` : "";
        return `<div style="background:${th.surface};border-radius:10px;padding:${isMobile ? "8px" : "10px 14px"};display:flex;align-items:center;gap:${isMobile ? 8 : 14}px">
          <div style="display:flex;flex-direction:column;align-items:center;gap:2px;min-width:${isMobile ? 20 : 24}px;align-self:stretch;justify-content:space-between">${premierBall}<div style="font-size:${isMobile ? 16 : 20}px;font-weight:800;color:${th.textMuted};margin-top:auto">${slotIdx + 1}</div></div>
          <div style="display:flex;flex-wrap:wrap;flex:1;justify-content:space-evenly">
            ${pkmnCards}
          </div>
        </div>`;
      };
      // Render a leader/boss card
      const renderRocketCard = (entry, roleLabel, icon, maxW, shinySlot = 0, shinyRate = "") => {
        const slotsHTML = entry.slots.map((s, i) => renderRocketSlotRow(s, i, shinySlot)).join("");
        const shinyBadge = shinyRate ? `<div style="display:flex;align-items:center;gap:3px;font-size:${isMobile ? 11 : 12}px;font-weight:700;color:${th.textMuted};white-space:nowrap">\u2728 ${shinyRate}</div>` : "";
        return `<div style="border:1.5px solid ${th.border};border-radius:14px;overflow:hidden;${maxW}">
          <div style="padding:${isMobile ? "10px 12px" : "12px 16px"};display:flex;align-items:center;gap:${isMobile ? 8 : 12}px">
            ${icon}
            <div style="flex:1;min-width:0">
              <div style="font-size:${isMobile ? 15 : 17}px;font-weight:800;color:${th.text}">${esc(entry.name)}</div>
              <div style="font-size:${isMobile ? 10 : 11}px;color:${th.textMuted};font-weight:600">${roleLabel}</div>
              <div style="font-size:${isMobile ? 10 : 11}px;color:${th.textMuted};font-style:italic;margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">"${esc(entry.quote)}"</div>
            </div>
            ${shinyBadge}
          </div>
          <div style="padding:${isMobile ? "6px 8px 10px" : "6px 12px 14px"};display:flex;flex-direction:column;gap:${isMobile ? 5 : 6}px">
            ${slotsHTML}
          </div>
        </div>`;
      };
      // Giovanni section (standalone)
      const giovanni = ROCKET_LINEUPS.leaders[0];
      const giovanniIcon = `<img src="${giovanni.icon}" style="width:${isMobile ? 36 : 44}px;height:${isMobile ? 36 : 44}px;object-fit:contain;border-radius:50%" onerror="this.style.display='none'" />`;
      const giovanniHTML = renderRocketCard(giovanni, "Rocket Boss", giovanniIcon, `max-width:${isMobile ? "100%" : "420px"}`, 2, "1/64");
      // Leaders section (Cliff, Arlo, Sierra)
      const leadersOnly = ROCKET_LINEUPS.leaders.slice(1);
      let leadersHTML = leadersOnly.map(leader => {
        const icon = `<img src="${leader.icon}" style="width:${isMobile ? 36 : 44}px;height:${isMobile ? 36 : 44}px;object-fit:contain;border-radius:50%" onerror="this.style.display='none'" />`;
        return renderRocketCard(leader, "Rocket Leader", icon, "", 0, "1/64");
      }).join("");
      // Grunts section (~3 per row on desktop)
      const typeIconPath = (t) => {
        const mapped = {"Normal":"NORMAL","Fire":"FIRE","Water":"WATER","Electric":"ELECTRIC","Grass":"GRASS","Ice":"ICE","Fighting":"FIGHTING","Poison":"POISON","Ground":"GROUND","Flying":"FLYING","Psychic":"PSYCHIC","Bug":"BUG","Rock":"ROCK","Ghost":"GHOST","Dragon":"DRAGON","Dark":"DARK","Steel":"STEEL","Fairy":"FAIRY"};
        return mapped[t] ? `assets/pokemon-images/pokemon-types/POKEMON_TYPE_${mapped[t]}.png` : null;
      };
      let gruntsHTML = ROCKET_LINEUPS.grunts.map(grunt => {
        const genderLabel = grunt.gender === "male" ? "Male Grunt" : "Female Grunt";
        const genderIcon = `<img src="assets/pokemon-images/icons/${grunt.gender}.png" style="width:${isMobile ? 32 : 40}px;height:${isMobile ? 32 : 40}px;object-fit:contain;border-radius:50%;opacity:0.85" onerror="this.style.display='none'" />`;
        const tIcon = typeIconPath(grunt.type);
        const typeImg = tIcon ? `<img src="${tIcon}" style="width:${isMobile ? 18 : 22}px;height:${isMobile ? 18 : 22}px;object-fit:contain" onerror="this.style.display='none'" />` : "";
        const gColor = TYPE_COLORS[grunt.type] || null;
        const cardBorder = gColor ? `${gColor}60` : th.border;
        const cardBg = gColor ? `${gColor}${darkMode ? "18" : "10"}` : "transparent";
        const headerBg = gColor ? `${gColor}${darkMode ? "30" : "20"}` : th.surface;
        const slotsHTML = grunt.slots.map((s, i) => renderRocketSlotRow(s, i)).join("");
        return `<div style="border:1.5px solid ${cardBorder};border-radius:14px;overflow:hidden;background:${cardBg}">
          <div style="padding:${isMobile ? "10px 12px" : "12px 16px"};background:${headerBg};display:flex;align-items:center;gap:${isMobile ? 8 : 12}px">
            ${genderIcon}
            <div style="flex:1;min-width:0">
              <div style="display:flex;align-items:center;gap:6px;font-size:${isMobile ? 15 : 17}px;font-weight:800;color:${th.text}">${typeImg}${esc(grunt.type)}</div>
              <div style="font-size:${isMobile ? 10 : 11}px;color:${th.textMuted};font-weight:600">${genderLabel}</div>
              <div style="font-size:${isMobile ? 10 : 11}px;color:${th.textMuted};font-style:italic;margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">"${esc(grunt.quote)}"</div>
            </div>
            <div style="display:flex;align-items:center;gap:3px;font-size:${isMobile ? 11 : 12}px;font-weight:700;color:${th.textMuted};white-space:nowrap">\u2728 1/256</div>
          </div>
          <div style="padding:${isMobile ? "6px 8px 10px" : "6px 12px 14px"};display:flex;flex-direction:column;gap:${isMobile ? 5 : 6}px">
            ${slotsHTML}
          </div>
        </div>`;
      }).join("");
      rocketTabHTML = `<div style="display:flex;flex-direction:column;gap:14px">
        <div style="font-size:${isMobile ? 10 : 11}px;color:${th.textMuted};font-weight:500;font-style:italic;text-align:right">Last updated on May 18, 2026 at 9:30 am</div>
        <div style="text-align:center;padding:10px">
          <h2 style="margin:0;font-size:${isMobile ? 20 : 26}px;font-weight:800;color:${th.text};display:flex;align-items:center;justify-content:center;gap:8px"><img src="assets/pokemon-images/icons/teamrocket_r_full.png" style="width:${isMobile ? 24 : 30}px;height:${isMobile ? 24 : 30}px;object-fit:contain" /> Team GO Rocket</h2>
          <p style="margin:6px 0 0 0;font-size:${isMobile ? 12 : 14}px;color:${th.textMuted};font-weight:500">Current Team GO Rocket lineups</p>
        </div>
        <div style="text-align:center;font-size:11px;color:${th.textMuted};font-weight:500;margin-top:-10px">Data sourced from LeekDuck.com, Pok\u00E9monGOHUB.net & DittoBase.com</div>
        <div style="text-align:center;font-size:12px;color:${th.textMuted};font-weight:600;margin-top:2px">Tap a Pok\u00E9mon to see its type, weaknesses & resistances</div>
        <div style="font-size:${isMobile ? 15 : 18}px;font-weight:800;color:${th.text};padding:0 4px;display:flex;align-items:center;gap:8px"><img src="assets/pokemon-images/icons/boss-giovanni.png.webp" style="width:22px;height:22px;object-fit:contain;border-radius:50%" /> Boss</div>
        ${giovanniHTML}
        <div style="margin-top:${isMobile ? 20 : 28}px;font-size:${isMobile ? 15 : 18}px;font-weight:800;color:${th.text};padding:0 4px;display:flex;align-items:center;gap:8px"><img src="assets/pokemon-images/icons/teamrocket_r.png" style="width:20px;height:20px;object-fit:contain" /> Leaders</div>
        <div style="display:grid;grid-template-columns:${isMobile ? "1fr" : "repeat(3, 1fr)"};gap:${isMobile ? 10 : 14}px">
          ${leadersHTML}
        </div>
        <div style="margin-top:${isMobile ? 20 : 28}px;font-size:${isMobile ? 15 : 18}px;font-weight:800;color:${th.text};padding:0 4px;display:flex;align-items:center;gap:8px"><img src="assets/pokemon-images/icons/teamrocket_r.png" style="width:20px;height:20px;object-fit:contain" /> Grunt Lineups</div>
        <div style="display:grid;grid-template-columns:${isMobile ? "1fr" : "repeat(3, 1fr)"};gap:${isMobile ? 10 : 14}px">
          ${gruntsHTML}
        </div>
      </div>`;
    }

    // Eggs tab
    let eggsTabHTML = "";
    if (state.tab === "eggs") {
      let eggSectionsHTML = "";
      Object.entries(CURRENT_EGGS).forEach(([tier, pokemon]) => {
        const tierColor = EGG_TIER_COLORS[tier] || "#78C850";
        const eggUrl = EGG_TIER_IMAGES[tier];
        const isAdventureSync = tier.includes("Adventure Sync");
        const isRoute = tier.includes("Route");
        const tierLabel = tier;
        const eggImg = eggUrl ? `<img src="${eggUrl}" style="width:${isMobile ? 28 : 32}px;height:${isMobile ? 28 : 32}px;object-fit:contain;flex-shrink:0;position:relative;top:-2px" onerror="this.style.display='none'" />` : "";
        const badgeHTML = isAdventureSync ? `<span style="font-size:${isMobile ? 11 : 12}px;font-weight:700;color:${tierColor};background:${th.accentBg(tierColor)};padding:3px 10px;border-radius:10px;margin-left:auto;white-space:nowrap">Adventure Sync</span>` : isRoute ? `<span style="font-size:${isMobile ? 11 : 12}px;font-weight:700;color:${tierColor};background:${th.accentBg(tierColor)};padding:3px 10px;border-radius:10px;margin-left:auto;white-space:nowrap">Route Gift from Mateo</span>` : "";
        const tierId = "egg-" + tier.replace(/\s+/g, "-").toLowerCase();
        eggSectionsHTML += `<div id="${tierId}" style="border:1.5px solid ${th.border};border-radius:14px;overflow:hidden;scroll-margin-top:calc(${isMobile ? 80 : 100}px + env(safe-area-inset-top, 0px))">
          <div style="padding:10px 14px;background:${th.accentBgSubtle(tierColor)};border-bottom:1.5px solid ${th.border};display:flex;align-items:center;gap:10px">
            ${eggImg}
            <span style="font-size:${isMobile ? 13 : 14}px;font-weight:700;color:${th.text};letter-spacing:0.5px;text-transform:uppercase">${tierLabel}</span>
            ${badgeHTML}
          </div>
          <div style="padding:${isMobile ? "10px" : "8px"};display:flex;${breakpoint !== "mobile" ? "flex-wrap:wrap;gap:8px" : "flex-wrap:wrap;gap:6px"}">${pokemon.map(name => {
            const pkmn = getPokemonImg(name);
            const imgSize = breakpoint !== "mobile" ? 120 : 100;
            let imgEl = pokemonImgHTML(pkmn, imgSize);
            if (imgEl) imgEl = wrapShinySparkles(imgEl, name, imgSize);
            const displayName = name.replace(/\s*\(Male\)/," \u2642").replace(/\s*\(Female\)/," \u2640");
            const eggData = getRaidBossData(name);
            const eggTypesHTML = eggData ? `<div style="display:flex;gap:3px;margin-top:2px;flex-wrap:wrap;justify-content:center">${eggData.types.map(t =>
              `<span style="font-size:${breakpoint !== "mobile" ? 10 : 9}px;font-weight:700;color:#fff;background:${TYPE_COLORS[t] || "#888"};padding:1px 5px;border-radius:6px">${t}</span>`
            ).join("")}</div>` : "";
            if (breakpoint !== "mobile" && pkmn) {
              return `<div style="border-radius:12px;background:${th.accentBgSubtle(tierColor)};border:1.5px solid ${th.border};flex:1;min-width:140px;max-width:200px;display:flex;flex-direction:column;align-items:center;padding:12px 8px;text-align:center">
                ${imgEl}
                <div style="margin-top:6px;font-weight:700;color:${th.text};font-size:13px">${esc(displayName)}</div>
                ${eggTypesHTML}
              </div>`;
            }
            return `<div style="border-radius:10px;background:${th.accentBgSubtle(tierColor)};border:1px solid ${th.border};width:calc(33.33% - 4px);display:flex;flex-direction:column;align-items:center;padding:8px 4px 6px;text-align:center;box-sizing:border-box">
              ${imgEl || `<div style="width:100px;height:100px;display:flex;align-items:center;justify-content:center"><div style="width:8px;height:8px;border-radius:50%;background:${tierColor}"></div></div>`}
              <div style="font-weight:700;color:${th.text};font-size:11px;margin-top:2px;line-height:1.2;word-break:break-word">${esc(displayName)}</div>
              ${eggTypesHTML}
            </div>`;
          }).join("")}</div>
        </div>`;
      });
      const eggNavHTML = Object.keys(CURRENT_EGGS).map(tier => {
        const tierId = "egg-" + tier.replace(/\s+/g, "-").toLowerCase();
        const tierColor = EGG_TIER_COLORS[tier] || "#78C850";
        const eggUrl = EGG_TIER_IMAGES[tier] || "";
        const shortLabel = tier.replace(" Eggs", "").replace(" Adventure Sync", " AS").replace(" Route Eggs", " Route");
        return `<div onclick="scrollToEggTier('${tierId}')" style="display:flex;flex-direction:column;align-items:center;gap:4px;cursor:pointer;padding:${isMobile ? "6px 8px" : "8px 12px"};border-radius:12px;background:${th.accentBgSubtle(tierColor)};border:1.5px solid ${th.border};min-width:${isMobile ? "60px" : "70px"};transition:all 0.15s ease" onmouseenter="this.style.borderColor='${tierColor}';this.style.transform='translateY(-1px)'" onmouseleave="this.style.borderColor='${th.border}';this.style.transform='none'">
          ${eggUrl ? `<img src="${eggUrl}" style="width:${isMobile ? 28 : 34}px;height:${isMobile ? 28 : 34}px;object-fit:contain" onerror="this.style.display='none'" />` : ""}
          <span style="font-size:${isMobile ? 10 : 11}px;font-weight:700;color:${th.text};text-align:center;line-height:1.2">${shortLabel}</span>
        </div>`;
      }).join("");
      eggsTabHTML = `<div style="display:flex;flex-direction:column;gap:14px">
        <div style="font-size:${isMobile ? 10 : 11}px;color:${th.textMuted};font-weight:500;font-style:italic;text-align:right">Last updated on May 19, 2026 at 1:00 pm</div>
        <div style="text-align:center;padding:10px">
          <h2 style="margin:0;font-size:${isMobile ? 20 : 26}px;font-weight:800;color:${th.text};display:flex;align-items:center;justify-content:center;gap:8px"><img src="assets/pokemon-images/eggs/egg-2.png" style="width:${isMobile ? 34 : 38}px;height:${isMobile ? 34 : 38}px;object-fit:contain" /> Egg Hatches</h2>
          <p style="margin:6px 0 0 0;font-size:${isMobile ? 12 : 14}px;color:${th.textMuted};font-weight:500">Current egg pool by distance tier</p>
        </div>
        <div style="display:flex;gap:${isMobile ? 6 : 8}px;overflow-x:auto;padding:0 4px 6px;-webkit-overflow-scrolling:touch;scrollbar-width:none;justify-content:center;flex-wrap:wrap">${eggNavHTML}</div>
        <div style="text-align:center;font-size:11px;color:${th.textMuted};font-weight:500;margin-top:-10px">Data sourced from LeekDuck.com</div>
        ${eggSectionsHTML}
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
              <span style="font-size:${isMobile ? 12 : 13}px;font-weight:600;color:${th.text}">${item.qty}x ${item.name.startsWith("+") ? "&nbsp;" : ""}${item.name}</span>
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
                ${box.availabilityText ? `<div style="margin-top:8px;font-size:${isMobile ? 11 : 12}px;font-weight:600;color:${th.textMuted};display:flex;align-items:center;gap:6px"><span style="font-size:14px">&#128197;</span> ${box.availabilityText}</div>` : ""}
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
            '<span style="font-size:' + (isMobile ? 12 : 13) + 'px;font-weight:600;color:' + th.text + '">' + item.qty + 'x ' + (item.name.charAt(0) === '+' ? '&nbsp;' : '') + item.name + '</span>' + noteTag +
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
        <div style="font-size:${isMobile ? 10 : 11}px;color:${th.textMuted};font-weight:500;font-style:italic;text-align:right">Last updated on May 22, 2026 at 3:48 pm</div>
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
      const isWide = !isMobile && breakpoint === "desktop";
      reportTabHTML = `<div style="display:flex;flex-direction:column;gap:${isMobile ? 16 : 20}px;max-width:${isWide ? "1180px" : "640px"};margin:0 auto;width:100%">
        <div style="text-align:center;padding:10px">
          <h2 style="margin:0;font-size:${isMobile ? 20 : 26}px;font-weight:800;color:${th.text}">\uD83D\uDCDD Report an Issue</h2>
          <p style="margin:6px 0 0 0;font-size:${isMobile ? 12 : 14}px;color:${th.textMuted};font-weight:500">Found a bug or incorrect info? Let us know and we'll fix it!</p>
        </div>
        <div style="display:${isWide ? "grid" : "flex"};${isWide ? "grid-template-columns:460px 1fr;gap:24px;align-items:start" : "flex-direction:column;gap:20px"}">
          <div${isWide ? ` style="position:sticky;top:96px"` : ""}>
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
                    <span style="font-size:${isMobile ? 10 : 11}px;color:${th.textFaint}">PNG, JPG, or GIF \u00B7 Max 15 MB</span>
                  </div>
                </div>
                <input id="report-photo" type="file" accept="image/*" style="display:none" onchange="previewReportPhoto(this)" />
              </div>
              <div>
                <label style="display:block;font-size:${isMobile ? 12 : 13}px;font-weight:700;color:${th.text};margin-bottom:6px">Your Name <span style="color:${th.textMuted};font-weight:500">(optional)</span></label>
                <input id="report-name" type="text" placeholder="Trainer name or nickname" style="width:100%;padding:${isMobile ? "11px 14px" : "12px 16px"};border-radius:12px;border:1.5px solid ${th.border};background:${th.bg};color:${th.text};font-size:${isMobile ? 14 : 15}px;font-family:inherit;outline:none;box-sizing:border-box" />
              </div>
              <button onclick="submitReport()" ${_reportSubmitting ? "disabled" : ""} style="width:100%;padding:${isMobile ? "13px" : "14px"};border-radius:12px;border:none;background:linear-gradient(135deg,#E74C3C,#F39C12);color:#fff;font-size:${isMobile ? 15 : 16}px;font-weight:700;cursor:${_reportSubmitting ? "wait" : "pointer"};font-family:inherit;transition:all 0.2s ease;letter-spacing:0.3px;opacity:${_reportSubmitting ? 0.7 : 1}" ${_reportSubmitting ? "" : `onmouseenter="this.style.transform='translateY(-2px)';this.style.boxShadow='0 6px 20px rgba(231,76,60,0.3)'" onmouseleave="this.style.transform='translateY(0)';this.style.boxShadow='none'"`}>${_reportSubmitting ? "Submitting..." : "Submit Report"}</button>
              ${_reportSubmitMessage.text ? `<div style="padding:10px 14px;border-radius:10px;font-size:13px;line-height:1.5;background:${_reportSubmitMessage.type === "success" ? "rgba(46,204,113,0.12)" : "rgba(231,76,60,0.12)"};color:${_reportSubmitMessage.type === "success" ? "#2ECC71" : "#E74C3C"};border:1px solid ${_reportSubmitMessage.type === "success" ? "rgba(46,204,113,0.3)" : "rgba(231,76,60,0.3)"}">${esc(_reportSubmitMessage.text)}</div>` : ""}
            </div>
            <div style="text-align:center;font-size:${isMobile ? 11 : 12}px;color:${th.textFaint};line-height:1.6;padding:14px 8px 0">
              Thank you for helping us keep TrainerWire accurate!<br>Prefer email? Send it to <a href="mailto:${REPORT_EMAIL}" style="color:${th.textMuted}">${REPORT_EMAIL}</a>.
            </div>
          </div>
          <div>
            ${renderPendingQueue()}
            <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;margin-bottom:12px">
              <h3 style="margin:0;font-size:${isMobile ? 16 : 18}px;font-weight:800;color:${th.text}">Recent Reports</h3>
              ${renderBugReportFilterChips()}
            </div>
            ${renderBugReportsList()}
          </div>
        </div>
      </div>`;
    }

    const welcomeHTML = state.tab === "home" ? `<div style="border-radius:${isMobile ? 18 : 24}px;padding:${isMobile ? "24px 18px" : "32px 28px"};background:linear-gradient(135deg,${th.heroBg("#E74C3C")},${th.heroBg("#F39C12")});border:1.5px solid ${th.border};overflow:hidden;position:relative;animation:fadeSlideUp 0.5s cubic-bezier(0.25,0.46,0.45,0.94)">
        <div style="display:flex;flex-direction:column;align-items:center;text-align:center;margin-bottom:${isMobile ? 14 : 18}px">
          <img src="assets/trainerwire-logo2.webp" style="width:${isMobile ? 278 : 327}px;height:${isMobile ? 278 : 327}px;object-fit:contain;margin-top:${isMobile ? -40 : -50}px" alt="TrainerWire" />
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
      ${welcomeHTML}${!["home","tools","nests","pokedex","store","report"].includes(state.tab) ? `${isMobile ? liveCompactHTML + heroCompactHTML : `<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:${isDesktop ? 16 : 14}px">${liveHTML}${heroHTML}</div>`}${tabsHTML}` : ""}${state.tab === "home" ? `<div style="display:grid;grid-template-columns:${isMobile ? "1fr" : "repeat(2,1fr)"};gap:${isMobile ? 12 : isDesktop ? 16 : 14}px">${liveHTML}${heroHTML}</div>${renderWeekDigest(th, isMobile)}${tabsHTML}` : ""}${eventsTabHTML}${calendarTabHTML}${raidsTabHTML}${maxTabHTML}${rocketTabHTML}${eggsTabHTML}${newsTabHTML}${storeTabHTML}${pokedexTabHTML}${toolsTabHTML}${nestsTabHTML}${reportTabHTML}
    </main>`;
    if (hero || activeEvents.length > 0) state.heroRendered = true;
  }

  // Header
  const headerHTML = `<header style="padding:${isMobile ? "14px 18px" : "16px 32px"};border-bottom:1.5px solid ${th.border};background:${th.headerBg};backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);position:sticky;top:0;z-index:100;width:100%;display:flex;align-items:center;justify-content:space-between;padding-top:calc(${isMobile ? "14px" : "16px"} + env(safe-area-inset-top, 0px))">
    <div style="display:flex;align-items:center;gap:${isMobile ? 6 : 14}px">
    ${breakpoint !== "desktop" ? `<button onclick="toggleSidebar()" style="background:none;border:none;cursor:pointer;padding:6px;display:flex;align-items:center;justify-content:center"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="${th.text}" stroke-width="2.5" stroke-linecap="round"><path d="M3 6h18"/><path d="M3 12h18"/><path d="M3 18h18"/></svg></button>` : ""}
    <div onclick="goHome()" style="cursor:pointer;display:flex;align-items:center;gap:${isMobile ? 10 : 14}px">
      <img src="assets/trainerwire-logo2.webp" style="width:${isMobile ? 80 : 95}px;height:${isMobile ? 80 : 95}px;object-fit:contain;margin:-20px 0" alt="TrainerWire" />
      <div><div style="font-size:${isMobile ? 16 : 20}px;font-weight:800;color:${th.text};letter-spacing:-0.3px;line-height:1.2">${COMMUNITY_NAME}</div>
      <div style="font-size:${isMobile ? 10 : 12}px;color:${th.textMuted};font-weight:500;letter-spacing:0.2px">${COMMUNITY_TAGLINE}</div></div>
    </div></div>
    ${isDesktop ? (() => {
      const currentTabs = ["raids","max","rocket","eggs"];
      const isCurrentActive = currentTabs.includes(state.tab);
      const navBtn = (fn, label, tabId) => {
        const isActive = state.tab === tabId;
        return `<button onclick="${fn}" style="padding:7px 14px;border-radius:10px;border:${isActive ? "1.5px solid #E74C3C" : "1.5px solid transparent"};background:${isActive ? th.accentBg("#E74C3C") : "transparent"};color:${isActive ? "#E74C3C" : th.text};font-size:13px;font-weight:${isActive ? "700" : "600"};cursor:pointer;font-family:inherit;transition:all 0.15s ease;white-space:nowrap" onmouseenter="this.style.background='${isActive ? th.accentBg("#E74C3C") : th.surfaceHover}'" onmouseleave="this.style.background='${isActive ? th.accentBg("#E74C3C") : "transparent"}'">${label}</button>`;
      };
      const dropdownItems = [
        {fn:"setTab('raids')",label:"Raids",icon:"\u2694\uFE0F",id:"raids"},
        {fn:"setTab('max')",label:"Max Battles",icon:"\uD83D\uDCA5",id:"max"},
        {fn:"setTab('rocket')",label:"Rocket",iconImg:"assets/pokemon-images/icons/teamrocket_r_full.png",id:"rocket"},
        {fn:"setTab('eggs')",label:"Eggs",iconImg:"assets/pokemon-images/eggs/egg-2.png",iconSize:24,id:"eggs"}
      ];
      return `<nav style="display:flex;align-items:center;gap:4px">
        ${navBtn("goHome()","Home","home")}
        ${navBtn("setTab('events')","Events","events")}
        ${navBtn("setTab('calendar')","Calendar","calendar")}
        <div class="nav-dropdown" onmouseenter="this.classList.add('open')" onmouseleave="this.classList.remove('open')" onclick="this.classList.toggle('open')">
          <button class="nav-dropdown-btn" style="border:${isCurrentActive ? "1.5px solid #E74C3C" : "1.5px solid transparent"};background:${isCurrentActive ? th.accentBg("#E74C3C") : "transparent"};color:${isCurrentActive ? "#E74C3C" : th.text};font-weight:${isCurrentActive ? "700" : "600"}" onmouseenter="if(!${isCurrentActive})this.style.background='${th.surfaceHover}'" onmouseleave="if(!${isCurrentActive})this.style.background='transparent'">Current <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M2 4l3 3 3-3"/></svg></button>
          <div class="nav-dropdown-menu">
            <div class="nav-dropdown-menu-inner" style="background:${th.surface};border:1.5px solid ${th.border};box-shadow:0 8px 30px rgba(0,0,0,0.12)">
            ${dropdownItems.map(d => {
              const active = state.tab === d.id;
              return `<button class="nav-dropdown-item" onclick="event.stopPropagation();setTab('${d.id}')" style="color:${active ? "#E74C3C" : th.text};font-weight:${active ? "700" : "600"};background:${active ? th.accentBg("#E74C3C") : "transparent"}" onmouseenter="if(!${active})this.style.background='${th.surfaceHover}'" onmouseleave="if(!${active})this.style.background='${active ? th.accentBg("#E74C3C") : "transparent"}'">${d.iconImg ? `<span style="width:20px;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0"><img src="${d.iconImg}" style="width:${d.iconSize||16}px;height:${d.iconSize||16}px;object-fit:contain" /></span>` : d.icon} ${d.label}</button>`;
            }).join("")}
            </div>
          </div>
        </div>
        ${navBtn("setTab('news')","News","news")}
        ${navBtn("setTab('pokedex')","Pok\u00E9Dex","pokedex")}
        ${navBtn("setTab('store')","Deal Check","store")}
        ${navBtn("setTab('nests')","Nests","nests")}
        ${navBtn("setTab('tools')","PoGO Tools","tools")}
      </nav>`;
    })() : ""}
    <button id="theme-toggle" onclick="toggleDarkMode()" style="background:${darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.06)"};border:1.5px solid ${th.border};border-radius:50%;width:${isMobile ? 36 : 40}px;height:${isMobile ? 36 : 40}px;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:${isMobile ? 18 : 20}px;transition:all 0.4s cubic-bezier(0.25,0.46,0.45,0.94);flex-shrink:0"
      onmouseenter="this.style.transform='scale(1.12)';this.style.boxShadow='0 4px 15px ${darkMode ? "rgba(255,200,50,0.2)" : "rgba(0,0,0,0.15)"}';"
      onmouseleave="this.style.transform='scale(1)';this.style.boxShadow='none';">${darkMode ? "\u2600\uFE0F" : "\uD83C\uDF19"}</button>
  </header>`;

  const tickerText = "\u26A1 GO Fest 2026: Global \u2014 Newton, NC \u00B7 Southside Park \u00B7 July 11\u201312, 2026 \u00B7 10 AM\u20137 PM \u00B7 Join your local trainers for a weekend full of raids, shiny hunting & community fun! Stay tuned for more details!";
  const tickerContent = `${tickerText} \u00A0\u00A0\u00A0\u2728\u00A0\u00A0\u00A0 ${tickerText} \u00A0\u00A0\u00A0\u2728\u00A0\u00A0\u00A0 `;
  const tickerHTML = `<div role="button" tabindex="0" aria-label="View GO Fest 2026: Global event details" onclick="selectEvent(43)" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();selectEvent(43);}" onmouseenter="this.firstElementChild.style.animationPlayState='paused'" onmouseleave="this.firstElementChild.style.animationPlayState='running'" onfocus="this.style.boxShadow='inset 0 0 0 2px #fff'" onblur="this.style.boxShadow='none'" style="overflow:hidden;white-space:nowrap;background:linear-gradient(90deg,#E74C3C,#F39C12);width:100%;position:relative;display:flex;align-items:center;min-height:${isMobile ? 28 : 32}px;cursor:pointer;outline:none;transition:box-shadow 0.2s ease">
    <div style="display:inline-block;animation:tickerScroll 60s linear infinite;font-size:${isMobile ? 11 : 13}px;font-weight:600;color:#fff;letter-spacing:0.3px;line-height:1">${tickerContent}${tickerContent}</div>
  </div>`;

  const adminLinkHTML = isAdmin()
    ? `<a onclick="adminLogout()" style="color:${th.textMuted};cursor:pointer;text-decoration:underline;font-size:${isMobile ? 11 : 12}px;margin-left:14px" title="Signed in as ${escAttr(getAdminEmail() || "")}">Sign out</a>`
    : `<a onclick="openAdminLogin()" style="color:${th.textFaint};cursor:pointer;text-decoration:underline;font-size:${isMobile ? 11 : 12}px;margin-left:14px">Admin</a>`;
  const footerHTML = `<footer style="text-align:center;padding:${isMobile ? "20px 16px" : "28px 24px"};font-size:${isMobile ? 11 : 12}px;color:${th.textFaint};font-weight:500;border-top:1px solid ${th.footerBorder}">
    ${COMMUNITY_NAME} \u00B7 v${APP_VERSION} \u00B7 Not affiliated with Niantic, The Pok\u00E9mon Company, or Nintendo
    <div style="margin-top:8px"><a onclick="setTab('report')" style="color:${th.textMuted};cursor:pointer;text-decoration:underline;font-size:${isMobile ? 11 : 12}px">Report a Bug or Issue</a>${adminLinkHTML}</div>
  </footer>`;

  const scrollTopBtn = `<button id="scroll-top-btn" onclick="window.scrollTo({top:0,behavior:'smooth'})" style="position:fixed;bottom:${isMobile ? 20 : 28}px;right:${isMobile ? 16 : 28}px;width:${isMobile ? 44 : 48}px;height:${isMobile ? 44 : 48}px;border-radius:50%;background:linear-gradient(135deg,#E74C3C,#F39C12);border:none;box-shadow:0 4px 18px rgba(231,76,60,0.35);cursor:pointer;display:none;align-items:center;justify-content:center;z-index:200;transition:opacity 0.4s cubic-bezier(0.25,0.46,0.45,0.94),transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94);font-family:inherit;opacity:0;transform:translateY(20px) scale(0.8)" onmouseenter="this.style.transform='scale(1.1)';this.style.boxShadow='0 6px 24px rgba(231,76,60,0.5)'" onmouseleave="this.style.transform='scale(1)';this.style.boxShadow='0 4px 18px rgba(231,76,60,0.35)'"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5"/><path d="M5 12l7-7 7 7"/></svg></button>`;

  const sidebarHTML = renderSidebar(th);

  const appEl = document.getElementById("app");
  // Save all existing logo images before DOM replacement to prevent flash
  const existingLogos = Array.from(appEl.querySelectorAll("img[alt='TrainerWire']"));

  appEl.innerHTML = `${sidebarHTML}<div style="min-height:100vh;display:flex;flex-direction:column;background:${th.bg};font-family:'Outfit','DM Sans',-apple-system,BlinkMacSystemFont,sans-serif;color:${th.text};width:100%">
    ${headerHTML}${tickerHTML}<div style="flex:1">${content}</div>${footerHTML}
  </div>${scrollTopBtn}${renderAdminLoginModal()}`;

  // Swap new logo img elements with the preserved originals to avoid image flash
  if (existingLogos.length) {
    const newLogos = appEl.querySelectorAll("img[alt='TrainerWire']");
    newLogos.forEach(newLogo => {
      const match = existingLogos.find(old => old.src === newLogo.src && old.style.width === newLogo.style.width);
      if (match) newLogo.replaceWith(match);
    });
  }
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
    const compact = el.dataset.compact === "true";
    el.innerHTML = renderCountdown(dateStr, color, over, th, ev, compact);
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
  if (tab === "report") {
    _reportSubmitMessage = { type: "", text: "" }; // clear stale banner from prior visit
    _bugReportFilter = "all";
    _bugReportMoreOpen = false;
    loadBugReportsFromSupabase().then(() => render());
  }
  render();
  window.scrollTo(0, 0);
}

function renderSidebar(th) {
  if (breakpoint === "desktop") return "";
  const currentSubTabs = [
    { id: "raids", icon: "\u2694\uFE0F", label: "Raids" },
    { id: "max", icon: "\uD83D\uDCA5", label: "Max Battles" },
    { id: "rocket", icon: "", iconImg: "assets/pokemon-images/icons/teamrocket_r_full.png", label: "Rocket" },
    { id: "eggs", icon: "", iconImg: "assets/pokemon-images/eggs/egg-2.png", iconSize: 34, label: "Eggs" }
  ];
  const tabs = [
    { id: "home", icon: "\uD83C\uDFE0", label: "Home" },
    { id: "events", icon: "\uD83D\uDCC5", label: "Events" },
    { id: "calendar", icon: "\uD83D\uDDD3\uFE0F", label: "Calendar" },
    { id: "current", icon: "\uD83D\uDD25", label: "Current", subTabs: currentSubTabs },
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
      <img src="assets/trainerwire-logo2.webp" style="width:80px;height:80px;object-fit:contain" alt="TrainerWire" />
      <div>
        <div style="font-size:16px;font-weight:800;color:${th.text}">TrainerWire</div>
        <div style="font-size:10px;color:${th.textMuted};font-weight:500">Pok\u00E9mon GO Hub</div>
      </div>
    </div>
    <div style="padding:12px 8px;display:flex;flex-direction:column;gap:2px">
      ${tabs.map(t => {
        if (t.subTabs) {
          const isCurrentOpen = false;
          const isGroupActive = isCurrentOpen;
          return `<div>
            <button onclick="const sub=this.nextElementSibling;const open=sub.style.maxHeight!=='0px'&&sub.style.maxHeight!=='';const h=sub.scrollHeight;if(open){sub.style.maxHeight=sub.scrollHeight+'px';sub.offsetHeight;sub.style.maxHeight='0px';sub.style.opacity='0'}else{sub.style.maxHeight=h+'px';sub.style.opacity='1';setTimeout(()=>{sub.style.maxHeight='none'},300)};this.querySelector('.sb-arrow').style.transform=open?'rotate(-90deg)':'rotate(0deg)'" style="display:flex;align-items:center;gap:12px;padding:14px 16px;border-radius:12px;border:none;background:${isGroupActive ? th.accentBgSubtle("#E74C3C") : "transparent"};cursor:pointer;font-family:inherit;transition:background 0.15s ease;width:100%;text-align:left">
              <span style="font-size:20px">${t.icon}</span>
              <span style="font-size:16px;font-weight:${isGroupActive ? "700" : "600"};color:${isGroupActive ? th.text : th.textSecondary};flex:1">${t.label}</span>
              <svg class="sb-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="${th.textMuted}" stroke-width="2" stroke-linecap="round" style="transition:transform 0.2s ease;transform:${isCurrentOpen ? "rotate(0deg)" : "rotate(-90deg)"}"><path d="M3 4.5l3 3 3-3"/></svg>
            </button>
            <div style="display:flex;flex-direction:column;gap:2px;padding-left:20px;overflow:hidden;transition:max-height 0.3s cubic-bezier(0.25,0.46,0.45,0.94),opacity 0.25s ease;max-height:${isCurrentOpen ? "none" : "0px"};opacity:${isCurrentOpen ? "1" : "0"}">
              ${t.subTabs.map(st => `<button onclick="sidebarNav('${st.id}')" style="display:flex;align-items:center;gap:12px;padding:12px 16px;border-radius:12px;border:none;background:${state.tab === st.id ? th.accentBgSubtle("#E74C3C") : "transparent"};cursor:pointer;font-family:inherit;transition:background 0.15s ease;width:100%;text-align:left"
                onmouseenter="this.style.background='${th.surfaceHover}'"
                onmouseleave="this.style.background='${state.tab === st.id ? th.accentBgSubtle("#E74C3C") : "transparent"}'">
                ${st.iconImg ? `<span style="display:flex;align-items:center;justify-content:center;width:22px"><img src="${st.iconImg}" style="width:${st.iconSize||22}px;height:${st.iconSize||22}px;object-fit:contain;position:relative;top:-4px" alt="${st.label}" /></span>` : `<span style="font-size:18px">${st.icon}</span>`}
                <span style="font-size:15px;font-weight:${state.tab === st.id ? "700" : "600"};color:${state.tab === st.id ? th.text : th.textSecondary}">${st.label}</span>
              </button>`).join("")}
            </div>
          </div>`;
        }
        return `<button onclick="sidebarNav('${t.id}')" style="display:flex;align-items:center;gap:12px;padding:14px 16px;border-radius:12px;border:none;background:${state.tab === t.id ? th.accentBgSubtle("#E74C3C") : "transparent"};cursor:pointer;font-family:inherit;transition:background 0.15s ease;width:100%;text-align:left"
        onmouseenter="this.style.background='${th.surfaceHover}'"
        onmouseleave="this.style.background='${state.tab === t.id ? th.accentBgSubtle("#E74C3C") : "transparent"}'">
        ${t.iconImg ? `<img src="${t.iconImg}" style="width:28px;height:28px;object-fit:contain" alt="${t.label}" />` : `<span style="font-size:20px">${t.icon}</span>`}
        <span style="font-size:16px;font-weight:${state.tab === t.id ? "700" : "600"};color:${state.tab === t.id ? th.text : th.textSecondary}">${t.label}</span>
      </button>`;
      }).join("")}
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
