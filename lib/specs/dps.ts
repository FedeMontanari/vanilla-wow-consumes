import {
  basicDmg,
  basicMisc,
  basicProt,
  consumes,
  sortLists,
} from "../consumesList";
import NameSlug from "../types/NameSlug";
import Spec from "../types/Spec";

function addBasicList(
  spec: Spec,
  specType: "dmg" | "prot" | "misc",
  list: NameSlug[]
) {
  list.map((el) => {
    spec[specType].push(el);
  });
}

const warrior = {
  dmg: [
    consumes.dmg.mongoose,
    consumes.dmg.bruteForce,
    consumes.dmg.food.desertDumpling,
    consumes.dmg.eleSharpies,
    consumes.dmg.blands.groundAssay,
    consumes.dmg.juju.jujuMight,
    consumes.dmg.juju.jujuPower,
    consumes.dmg.mightyRage,
    consumes.dmg.blands.roids,
    consumes.dmg.food.sunfruit,
  ],
  prot: [
    consumes.prot.armor,
    consumes.prot.blackLabel,
    consumes.prot.fortitude,
    consumes.prot.greenGrog,
    consumes.prot.hp5,
    consumes.prot.titansFlask,
  ],
  misc: [],
};

const rogue = {
  dmg: [
    consumes.dmg.mongoose,
    consumes.dmg.blands.groundAssay,
    consumes.dmg.juju.jujuMight,
    consumes.dmg.juju.jujuPower,
    consumes.dmg.blands.roids,
    consumes.dmg.food.sunfruit,
    consumes.dmg.instaPoison,
    consumes.dmg.thistleTea,
    consumes.dmg.food.grilledSquid,
  ],
  prot: [
    consumes.prot.armor,
    consumes.prot.blackLabel,
    consumes.prot.fortitude,
    consumes.prot.greenGrog,
    consumes.prot.hp5,
    consumes.prot.titansFlask,
  ],
  misc: [
    consumes.misc.reagents.rogue.blind,
    consumes.misc.reagents.rogue.vanish,
  ],
};

const hunter = {
  dmg: [
    consumes.dmg.mongoose,
    consumes.dmg.blands.groundAssay,
    consumes.dmg.juju.jujuMight,
    consumes.dmg.food.grilledSquid,
  ],
  prot: [consumes.prot.titansFlask, consumes.prot.greenGrog],
  misc: [
    consumes.misc.ammo.arrow,
    consumes.misc.ammo.bullet,
    consumes.misc.mana.potion,
    consumes.misc.mana.darkRune,
    consumes.misc.mana.demonicRune,
  ],
};

const priest = {
  dmg: [
    consumes.dmg.supremePowerFlask,
    consumes.dmg.shadowPower,
    consumes.dmg.arcane,
    consumes.dmg.greaterArcane,
    consumes.dmg.oil.lesserWizard,
    consumes.dmg.food.nightfinSoup,
    consumes.dmg.food.runnTumTuber,
    consumes.dmg.juju.jujuGuile,
    consumes.dmg.blands.cerebralCortex,
  ],
  prot: [consumes.prot.greenGrog],
  misc: [
    consumes.misc.reagents.priest.prayer,
    consumes.misc.reagents.feather,
    consumes.misc.mana.potion,
    consumes.misc.mana.darkRune,
    consumes.misc.mana.demonicRune,
  ],
};

const mage = {
  dmg: [
    consumes.dmg.supremePowerFlask,
    consumes.dmg.firePower,
    consumes.dmg.frostPower,
    consumes.dmg.arcane,
    consumes.dmg.greaterArcane,
    consumes.dmg.oil.lesserWizard,
    consumes.dmg.food.nightfinSoup,
    consumes.dmg.food.runnTumTuber,
    consumes.dmg.juju.jujuGuile,
    consumes.dmg.blands.cerebralCortex,
  ],
  prot: [consumes.prot.greenGrog],
  misc: [
    consumes.misc.reagents.mage.ai,
    consumes.misc.reagents.mage.portal,
    consumes.misc.reagents.mage.teleport,
    consumes.misc.reagents.feather,
    consumes.misc.mana.potion,
    consumes.misc.mana.darkRune,
    consumes.misc.mana.demonicRune,
  ],
};

const warlock = {
  dmg: [
    consumes.dmg.supremePowerFlask,
    consumes.dmg.shadowPower,
    consumes.dmg.firePower,
    consumes.dmg.arcane,
    consumes.dmg.greaterArcane,
    consumes.dmg.juju.jujuGuile,
    consumes.dmg.food.nightfinSoup,
    consumes.dmg.food.runnTumTuber,
    consumes.dmg.oil.lesserWizard,
    consumes.dmg.blands.cerebralCortex,
  ],
  prot: [consumes.prot.greenGrog],
  misc: [
    consumes.misc.reagents.warlock.doom,
    consumes.misc.reagents.warlock.infernal,
    consumes.misc.reagents.warlock.shard,
    consumes.misc.mana.potion,
    consumes.misc.mana.darkRune,
    consumes.misc.mana.demonicRune,
  ],
};

const kitty = {
  dmg: [
    consumes.dmg.mongoose,
    consumes.dmg.blands.groundAssay,
    consumes.dmg.juju.jujuMight,
    consumes.dmg.juju.jujuPower,
    consumes.dmg.blands.roids,
    consumes.dmg.food.sunfruit,
    consumes.dmg.food.grilledSquid,
  ],
  prot: [
    consumes.prot.armor,
    consumes.prot.blackLabel,
    consumes.prot.fortitude,
    consumes.prot.greenGrog,
    consumes.prot.hp5,
    consumes.prot.titansFlask,
  ],
  misc: [consumes.misc.reagents.druid.bres, consumes.misc.reagents.druid.gotw],
};

const boomie = {
  dmg: [
    consumes.dmg.supremePowerFlask,
    consumes.dmg.arcane,
    consumes.dmg.greaterArcane,
    consumes.dmg.oil.lesserWizard,
    consumes.dmg.food.nightfinSoup,
    consumes.dmg.food.runnTumTuber,
    consumes.dmg.juju.jujuGuile,
    consumes.dmg.blands.cerebralCortex,
  ],
  prot: [],
  misc: [
    consumes.misc.reagents.druid.bres,
    consumes.misc.reagents.druid.gotw,
    consumes.misc.mana.potion,
    consumes.misc.mana.darkRune,
    consumes.misc.mana.demonicRune,
  ],
};

const enhance = {
  dmg: [
    consumes.dmg.mongoose,
    consumes.dmg.blands.groundAssay,
    consumes.dmg.juju.jujuMight,
    consumes.dmg.juju.jujuPower,
    consumes.dmg.blands.roids,
    consumes.dmg.food.sunfruit,
    consumes.dmg.food.grilledSquid,
  ],
  prot: [
    consumes.prot.armor,
    consumes.prot.blackLabel,
    consumes.prot.fortitude,
    consumes.prot.greenGrog,
    consumes.prot.hp5,
    consumes.prot.titansFlask,
  ],
  misc: [consumes.misc.reagents.shaman.ankh, consumes.misc.reagents.shaman.oil],
};

const elemental = {
  dmg: [
    consumes.dmg.supremePowerFlask,
    consumes.dmg.arcane,
    consumes.dmg.greaterArcane,
    consumes.dmg.oil.lesserWizard,
    consumes.dmg.food.nightfinSoup,
    consumes.dmg.food.runnTumTuber,
    consumes.dmg.juju.jujuGuile,
    consumes.dmg.blands.cerebralCortex,
  ],
  prot: [],
  misc: [consumes.misc.reagents.shaman.ankh, consumes.misc.reagents.shaman.oil],
};

const classes = [
  warrior,
  rogue,
  hunter,
  priest,
  mage,
  warlock,
  kitty,
  boomie,
  enhance,
  elemental,
];

classes.map((cl) => {
  addBasicList(cl, "dmg", basicDmg);
  addBasicList(cl, "prot", basicProt);
  addBasicList(cl, "misc", basicMisc);
});

const dps = {
  warrior: sortLists(warrior),
  rogue: sortLists(rogue),
  hunter: sortLists(hunter),
  priest: sortLists(priest),
  mage: sortLists(mage),
  warlock: sortLists(warlock),
  kitty: sortLists(kitty),
  boomie: sortLists(boomie),
  enhance: sortLists(enhance),
  elemental: sortLists(elemental),
};

export default dps;
