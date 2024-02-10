import Spec from "./types/Spec";

const dmg = {
  mongoose: {
    slug: "elixirmongoose",
    name: "Elixir of the Mongoose",
  },
  mightyRage: {
    slug: "mightyrage",
    name: "Mighty Rage Potion",
  },
  jujuPower: {
    slug: "jujupower",
    name: "Juju Power",
  },
  jujuMight: {
    slug: "jujumight",
    name: "Juju Might",
  },
  desertDumpling: {
    slug: "food",
    name: "Smoked Desert Dumplings",
  },
  sunfruit: {
    slug: "food2",
    name: "Blessed Sunfruit",
  },
  eleSharpies: {
    slug: "sharpies",
    name: "Elemental Sharpening Stone",
  },
  roids: {
    slug: "blands1",
    name: "R.O.I.D.S.",
  },
  groundAssay: {
    slug: "blands2",
    name: "Ground Scorpok Assay",
  },
  dynamite: {
    slug: "dynamite",
    name: "Dense Dynamite",
  },
  sapper: {
    slug: "sapper",
    name: "Goblin Sapper Charge",
  },
  bruteForce: {
    slug: "elixirbforce",
    name: "Elixir of Brute Force",
  },
  holyWater: {
    slug: "holywater",
    name: "Stratholme Holy Water",
  },
};

const basicDmg = [
  {
    slug: "dynamite",
    name: "Dense Dynamite",
  },
  {
    slug: "sapper",
    name: "Goblin Sapper Charge",
  },
  {
    slug: "holywater",
    name: "Stratholme Holy Water",
  },
];

const misc = {
  fap: {
    slug: "fap",
    name: "Free Action Potion",
  },
  lap: {
    slug: "lap",
    name: "Living Action Potion",
  },
  lip: {
    slug: "lip",
    name: "Limited Invulnerability Potion",
  },
  invis: {
    slug: "invis",
    name: "Lesser Invisibility Potion",
  },
  resto: {
    slug: "resto",
    name: "Restorative Potion",
  },
  zanzaSpirit: {
    slug: "zanza1",
    name: "Spirit of Zanza",
  },
  zanzaSwiftness: {
    slug: "zanza2",
    name: "Swiftness of Zanza",
  },
  sand: {
    slug: "sand",
    name: "Hourglass Sand",
  },
  onyCloak: {
    slug: "onycloak",
    name: "Onyxia Scale Cloak",
  },
  onyNeck: {
    slug: "onyneck",
    name: "Drakefire Amulet",
  },
  douse: {
    slug: "douse",
    name: "Aqual Quintessence",
  },
  reagents: {
    mage: {
      teleport: {
        slug: "runetp",
        name: "Rune of Teleportation",
      },
      portal: {
        slug: "runeportal",
        name: "Rune of Portals",
      },
      ai: {
        slug: "intbuff",
        name: "Arcane Powder",
      },
    },
    rogue: {
      vanish: {
        slug: "powderflash",
        name: "Flash Powder",
      },
      blind: {
        slug: "powderblind",
        name: "Blinding Powder",
      },
    },
    druid: {
      bres: {
        slug: "bres",
        name: "Ironwood Seed",
      },
      gotw: {
        slug: "gotw",
        name: "Wild Thornroot",
      },
    },
    priest: {
      prayer: {
        slug: "candle",
        name: "Sacred Candle",
      },
    },
    shaman: {
      ankh: {
        slug: "ankh",
        name: "Ankh",
      },
      oil: {
        slug: "fishoil",
        name: "Fish Oil",
      },
    },
    warlock: {
      shard: {
        slug: "shard",
        name: "Soul Shard",
      },
      infernal: {
        slug: "infernal",
        name: "Infernal Stone",
      },
      doom: {
        slug: "demonicfigurine",
        name: "Demonic Figurine",
      },
    },
    feather: {
      slug: "lightfeather",
      name: "Light Feather",
    },
  },
};

const basicMisc = [
  {
    slug: "fap",
    name: "Free Action Potion",
  },
  {
    slug: "lap",
    name: "Living Action Potion",
  },
  {
    slug: "lip",
    name: "Limited Invulnerability Potion",
  },
  {
    slug: "invis",
    name: "Lesser Invisibility Potion",
  },
  {
    slug: "resto",
    name: "Restorative Potion",
  },
  {
    slug: "zanza1",
    name: "Spirit of Zanza",
  },
  {
    slug: "zanza2",
    name: "Swiftness of Zanza",
  },
  {
    slug: "sand",
    name: "Hourglass Sand",
  },
  {
    slug: "onycloak",
    name: "Onyxia Scale Cloak",
  },
  {
    slug: "onyneck",
    name: "Drakefire Amulet",
  },
  {
    slug: "douse",
    name: "Aqual Quintessence",
  },
];

const prot = {
  gfpp: {
    slug: "gfpp",
    name: "Greater Fire Protection Potion",
  },
  gnpp: {
    slug: "gnpp",
    name: "Greater Nature Protection Potion",
  },
  gfrostpp: {
    slug: "gfrostpp",
    name: "Greater Frost Protection Potion",
  },
  gapp: {
    slug: "gapp",
    name: "Greater Arcane Protection Potion",
  },
  gshadowpp: {
    slug: "gshadowpp",
    name: "Greater Shadow Protection Potion",
  },
  titansFlask: {
    slug: "flask",
    name: "Flask of the Titans",
  },
  greenGrog: {
    slug: "alcohol1",
    name: "Gordok Green Grog",
  },
  blackLabel: {
    slug: "alcohol2",
    name: "Rumsey Rum Black Label",
  },
  fortitude: {
    slug: "fort",
    name: "Elixir of Fortitude",
  },
  armor: {
    slug: "armor",
    name: "Elixir of Superior Defense",
  },
  hp5: {
    slug: "hp5",
    name: "Mighty Troll's Blood Elixir",
  },
};

const basicProt = [
  {
    slug: "gfpp",
    name: "Greater Fire Protection Potion",
  },
  {
    slug: "gnpp",
    name: "Greater Nature Protection Potion",
  },
  {
    slug: "gfrostpp",
    name: "Greater Frost Protection Potion",
  },
  {
    slug: "gapp",
    name: "Greater Arcane Protection Potion",
  },
  {
    slug: "gshadowpp",
    name: "Greater Shadow Protection Potion",
  },
];

const consumes = {
  dmg,
  misc,
  prot,
};

function sortLists(spec: Spec) {
  const sortedSpec = spec;
  sortedSpec.dmg = spec.dmg.sort((a, b) => {
    if (a.slug < b.slug) return -1;
    if (a.slug > b.slug) return 1;
    return 0;
  });
  sortedSpec.prot = spec.prot.sort((a, b) => {
    if (a.slug < b.slug) return -1;
    if (a.slug > b.slug) return 1;
    return 0;
  });
  sortedSpec.misc = spec.misc.sort((a, b) => {
    if (a.slug < b.slug) return -1;
    if (a.slug > b.slug) return 1;
    return 0;
  });
  return sortedSpec;
}

export { consumes, dmg, basicDmg, misc, basicMisc, prot, basicProt, sortLists };
