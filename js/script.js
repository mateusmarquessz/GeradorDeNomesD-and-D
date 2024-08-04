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
            small: ["Thorin", "Gimli", "Finn", "Goran"],
            medium: ["Aragorn", "Boromir", "Eomer", "Alistair", "Caden"],
            large: ["Thorin Oakenshield", "Boromir of Gondor", "Eomer of Rohan", "Alistair the Brave"]
        },
        barbarian: {
            small: ["Korg", "Thok", "Gorr", "Ragnar"],
            medium: ["Conan", "Drog", "Hrok", "Vik", "Klaus"],
            large: ["Conan the Barbarian", "Ragnar the Fearless", "Korg the Mighty", "Drog the Destroyer"]
        },
        rogue: {
            small: ["Locke", "Bane", "Raven", "Drake"],
            medium: ["Shadow", "Zephyr", "Elias", "Jax", "Roderick"],
            large: ["Locke Shadowfoot", "Bane the Silent", "Raven Darkblade", "Drake Nightshade"]
        },
        ranger: {
            small: ["Legolas", "Archer", "Rowan", "Sylas"],
            medium: ["Archer", "Hawkeye", "Robin", "Elven", "Thorne"],
            large: ["Legolas Greenleaf", "Archer of the Woods", "Hawkeye the Sharpshooter", "Robin Hood"]
        },
        wizard: {
            small: ["Gandalf", "Merlin", "Orin"],
            medium: ["Radagast", "Saruman", "Elminster", "Albus"],
            large: ["Gandalf the Grey", "Merlin the Enchanter", "Saruman the White", "Elminster Aumar"]
        },
        cleric: {
            small: ["Luther", "Jorah", "Tyr"],
            medium: ["Mordecai", "Elara", "Helios", "Ronan"],
            large: ["Mordecai the Wise", "Elara Lightbringer", "Helios the Just", "Ronan the Saint"]
        },
        bard: {
            small: ["Lute", "Harper", "Lyric"],
            medium: ["Minstrel", "Fiddler", "Cadence", "Sage"],
            large: ["Lute the Melodic", "Harper of Legends", "Lyric the Bard", "Cadence the Enchanter"]
        },
        warlock: {
            small: ["Ravenloft", "Hexen", "Malthus"],
            medium: ["Darkwood", "Shadowmancer", "Void", "Asmodeus"],
            large: ["Ravenloft the Cursed", "Hexen Darkbinder", "Malthus the Malevolent", "Shadowmancer of the Void"]
        },
        druid: {
            small: ["Oak", "Fern", "Briar"],
            medium: ["Willow", "Thorn", "Ash", "Bran"],
            large: ["Oak the Ancient", "Willow the Wise", "Thorn of the Forest", "Ash the Protector"]
        }
    },
    female: {
        fighter: {
            small: ["Arwen", "Asha", "Freya", "Niamh"],
            medium: ["Brienne", "Éowyn", "Yara", "Sigrid", "Elara"],
            large: ["Brienne of Tarth", "Éowyn Shieldmaiden", "Arwen Evenstar", "Freya the Fierce"]
        },
        barbarian: {
            small: ["Sable", "Kara", "Brynhildr"],
            medium: ["Red Sonja", "Valeria", "Zula", "Atalanta"],
            large: ["Red Sonja the Brave", "Valeria the Fierce", "Zula the Untamed", "Atalanta of the Wild"]
        },
        rogue: {
            small: ["Cat", "Nadia", "Sylvia"],
            medium: ["Arya", "Lilith", "Shade", "Inara"],
            large: ["Arya Stark", "Lilith the Shadow", "Shade the Silent", "Nadia of the Night"]
        },
        ranger: {
            small: ["Marian", "Hera", "Lyra"],
            medium: ["Elaria", "Talia", "Shana", "Elowen"],
            large: ["Marian the Brave", "Talia of the Forest", "Shana Swiftfoot", "Elowen the Wild"]
        },
        wizard: {
            small: ["Morgana", "Eira", "Vivienne"],
            medium: ["Circe", "Yennefer", "Melisandre", "Zatanna"],
            large: ["Morgana Le Fay", "Yennefer of Vengerberg", "Melisandre the Red", "Circe the Enchantress"]
        },
        cleric: {
            small: ["Amara", "Iona", "Diana"],
            medium: ["Seraphina", "Elune", "Thalia", "Celeste"],
            large: ["Seraphina the Divine", "Elune the Radiant", "Thalia the Holy", "Celeste the Pure"]
        },
        bard: {
            small: ["Elira", "Mira", "Nadia"],
            medium: ["Lyra", "Selene", "Calypso", "Juno"],
            large: ["Elira the Enchanting", "Mira of the Melodies", "Nadia the Sweet", "Calypso the Bard"]
        },
        warlock: {
            small: ["Nyx", "Erelda", "Kiera"],
            medium: ["Belladonna", "Morgause", "Lilith", "Hecate"],
            large: ["Belladonna the Bewitched", "Morgause the Sorceress", "Lilith of the Shadows", "Hecate the Dark"]
        },
        druid: {
            small: ["Fiona", "Sorrel", "Eira"],
            medium: ["Luna", "Gaia", "Aria", "Thalia"],
            large: ["Luna the Mystic", "Gaia the Green", "Aria of the Woods", "Thalia the Wise"]
        }
    }
};

const lastNames = ["Oakenshield", "Stormcrow", "Nightwalker", "Shadowbane", "Doombringer", "Lightbringer", "Darkweaver", "Fireheart", "Moonblade", "Dragonborn"];

function generateName() {
    const firstName = names[selectedGender][selectedClass][selectedSize][Math.floor(Math.random() * names[selectedGender][selectedClass][selectedSize].length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

    const fullName = `${firstName} ${lastName}`;
    document.getElementById('generatedName').innerText = fullName;
}
