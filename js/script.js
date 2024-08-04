document.getElementById('generateNameButton').addEventListener('click', generateName);

const classOptions = document.querySelectorAll('.class-option');
let selectedClass = 'fighter';

classOptions.forEach(option => {
    option.addEventListener('click', () => {
        classOptions.forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
        selectedClass = option.getAttribute('data-class');
    });
});

const genderOptions = document.querySelectorAll('.gender-option');
let selectedGender = 'male';

genderOptions.forEach(option => {
    option.addEventListener('click', () => {
        genderOptions.forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
        selectedGender = option.getAttribute('data-gender');
    });
});

const sizeOptions = document.querySelectorAll('.size-option');
let selectedSize = 'medium';

sizeOptions.forEach(option => {
    option.addEventListener('click', () => {
        sizeOptions.forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
        selectedSize = option.getAttribute('data-size');
    });
});

// Define names for each size category
const names = {
    male: {
        fighter: {
            small: ["Thorin", "Gimli", "Finn", "Goran", "Rurik", "Helm", "Borin", "Doran"],
            medium: ["Aragorn", "Boromir", "Eomer", "Alistair", "Caden", "Gareth", "Eldric", "Haldor"],
            large: ["ThorinOakenshield", "BoromirGondor", "EomerRohan", "AlistairBrave", "GarethValiant", "EldricStorm"]
        },
        barbarian: {
            small: ["Korg", "Thok", "Gorr", "Ragnar", "Bram", "Hark", "Gron", "Drax"],
            medium: ["Conan", "Drog", "Hrok", "Vik", "Klaus", "Orin", "Korr", "Rolf"],
            large: ["ConanBarbarian", "RagnarFearless", "KorgMighty", "DrogDestroyer", "OrinFierce", "KorrUnyielding"]
        },
        rogue: {
            small: ["Locke", "Bane", "Raven", "Drake", "Finn", "Jax", "Reed", "Kai"],
            medium: ["Shadow", "Zephyr", "Elias", "Jax", "Roderick", "Dorian", "Kane", "Rourke"],
            large: ["LockeShadow", "BaneSilent", "RavenDarkblade", "DrakeNightshade", "DorianBlack", "RourkeStealth"]
        },
        ranger: {
            small: ["Legolas", "Archer", "Rowan", "Sylas", "Eldar", "Finn", "Kieran", "Thorn"],
            medium: ["Archer", "Hawkeye", "Robin", "Elven", "Thorne", "Galen", "Aiden", "Rowan"],
            large: ["LegolasGreen", "ArcherWoods", "HawkeyeSharp", "RobinHood", "GalenTracker", "AidenSwift"]
        },
        wizard: {
            small: ["Gandalf", "Merlin", "Orin", "Alder", "Peregrin", "Balthazar", "Elric", "Dorian"],
            medium: ["Radagast", "Saruman", "Elminster", "Albus", "Magnus", "Oswin", "Thaddeus", "Lorian"],
            large: ["GandalfGrey", "MerlinEnchant", "SarumanWhite", "ElminsterAumar", "MagnusWise", "LorianMystic"]
        },
        cleric: {
            small: ["Luther", "Jorah", "Tyr", "Gideon", "Eamon", "Rurik", "Doran", "Lucian"],
            medium: ["Mordecai", "Elara", "Helios", "Ronan", "Silas", "Aldric", "Rafael", "Gareth"],
            large: ["MordecaiWise", "ElaraLight", "HeliosJust", "RonanSaint", "AldricPure", "GarethHoly"]
        },
        bard: {
            small: ["Lute", "Harper", "Lyric", "Merrin", "Fiddler", "Gale", "Talon", "Joran"],
            medium: ["Minstrel", "Fiddler", "Cadence", "Sage", "Reed", "Lorien", "Talon", "Merrin"],
            large: ["LuteMelodic", "HarperLegends", "LyricBard", "CadenceEnchant", "ReedHarmonious", "LorienLyric"]
        },
        warlock: {
            small: ["Ravenloft", "Hexen", "Malthus", "Draven", "Nyx", "Orion", "Zephyr", "Kieran"],
            medium: ["Darkwood", "Shadow", "Void", "Asmodeus", "Thorne", "Gideon", "Malachai", "Raven"],
            large: ["RavenloftCurse", "HexenDark", "MalthusMalev", "ShadowVoid", "MalachaiWicked", "RavenEnigmatic"]
        },
        druid: {
            small: ["Oak", "Fern", "Briar", "Holly", "Elm", "Thorne", "Sage", "Reed"],
            medium: ["Willow", "Thorn", "Ash", "Bran", "Linden", "Rowan", "Bran", "Sorrel"],
            large: ["OakAncient", "WillowWise", "ThornForest", "AshProtector", "LindenGreen", "RowanGuardian"]
        }
    },
    female: {
        fighter: {
            small: ["Arwen", "Asha", "Freya", "Niamh", "Lyria", "Isla", "Eira", "Mara"],
            medium: ["Brienne", "Éowyn", "Yara", "Sigrid", "Elara", "Fiona", "Seraphine", "Kara"],
            large: ["BrienneTarth", "ÉowynShield", "ArwenEvenstar", "FreyaFierce", "SeraphineBrave", "KaraValiant"]
        },
        barbarian: {
            small: ["Sable", "Kara", "Brynhildr", "Runa", "Astrid", "Eira", "Lena", "Siri"],
            medium: ["RedSonja", "Valeria", "Zula", "Atalanta", "Brunhild", "Gretchen", "Hilda", "Ursula"],
            large: ["RedSonjaBrave", "ValeriaFierce", "ZulaUntamed", "AtalantaWild", "BrunhildBold", "GretchenFearless"]
        },
        rogue: {
            small: ["Cat", "Nadia", "Sylvia", "Lyra", "Jade", "Tess", "Vera", "Faye"],
            medium: ["Arya", "Lilith", "Shade", "Inara", "Elara", "Nina", "Riven", "Maeve"],
            large: ["AryaStark", "LilithShadow", "ShadeSilent", "NadiaNight", "ElaraCunning", "MaeveStealthy"]
        },
        ranger: {
            small: ["Marian", "Hera", "Lyra", "Diana", "Nyssa", "Eira", "Fiona", "Juna"],
            medium: ["Elaria", "Talia", "Shana", "Elowen", "Kaela", "Iris", "Thalira", "Niamh"],
            large: ["MarianBrave", "TaliaForest", "ShanaSwift", "ElowenWild", "IrisFearless", "ThaliraTracker"]
        },
        wizard: {
            small: ["Morgana", "Eira", "Vivienne", "Luna", "Nyx", "Iris", "Zara", "Kiera"],
            medium: ["Circe", "Yennefer", "Melisandre", "Zatanna", "Nerida", "Sylvia", "Thalia", "Juno"],
            large: ["MorganaLeFay", "YenneferVenger", "MelisandreRed", "CirceEnchant", "NeridaWise", "JunoMystic"]
        },
        cleric: {
            small: ["Amara", "Iona", "Diana", "Rhiannon", "Cleo", "Nadia", "Eira", "Seren"],
            medium: ["Seraphina", "Elune", "Thalia", "Celeste", "Althea", "Liora", "Mara", "Elysia"],
            large: ["SeraphinaDiv", "EluneRadiant", "ThaliaHoly", "CelestePure", "AltheaJust", "ElysiaBlessed"]
        },
        bard: {
            small: ["Elira", "Mira", "Nadia", "Lena", "Zara", "Tara", "Sela", "Mara"],
            medium: ["Lyra", "Selene", "Calypso", "Juno", "Arielle", "Eira", "Elysia", "Thalia"],
            large: ["EliraEnchant", "MiraMelodies", "NadiaSweet", "CalypsoBard", "ArielleHarmon", "ElysiaMelodious"]
        },
        warlock: {
            small: ["Nyx", "Erelda", "Kiera", "Luna", "Mara", "Selene", "Vera", "Hera"],
            medium: ["Belladonna", "Morgause", "Lilith", "Hecate", "Diana", "Eira", "Cassandra", "Morgana"],
            large: ["BelladonnaBewitch", "MorgauseSorceress", "LilithShadows", "HecateDark", "CassandraEnigma", "MorganaWicked"]
        },
        druid: {
            small: ["Fiona", "Sorrel", "Eira", "Lia", "Nessa", "Branwen", "Luna", "Tara"],
            medium: ["Luna", "Gaia", "Aria", "Thalia", "Sage", "Fae", "Nia", "Dara"],
            large: ["LunaMystic", "GaiaGreen", "AriaWoods", "ThaliaWise", "FaeEnchanted", "NiaVerdant"]
        }
    }
};

const lastNames = [
    "Oakenshield", "Stormcrow", "Nightwalker", "Shadowbane", "Doombringer", 
    "Lightbringer", "Darkweaver", "Fireheart", "Moonblade", "Dragonborn", 
    "Silvermoon", "Ironclad", "Thunderstrike", "Steelheart", "Ravenshadow", 
    "Wolfsbane", "Dawnblade", "Starfire", "Windrider", "Dragonflame"
];


function generateName() {
    const firstName = names[selectedGender][selectedClass][selectedSize][Math.floor(Math.random() * names[selectedGender][selectedClass][selectedSize].length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

    let fullName = `${firstName}${lastName}`; // Concatenate without space
    
    // Truncate the full name if it exceeds 20 characters
    if (fullName.length > 20) {
        fullName = fullName.substring(0, 20);
    }

    document.getElementById('generatedName').innerText = fullName;
}

