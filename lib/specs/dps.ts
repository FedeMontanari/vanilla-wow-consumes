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
    consumes.dmg.desertDumpling,
    consumes.dmg.eleSharpies,
    consumes.dmg.groundAssay,
    consumes.dmg.jujuMight,
    consumes.dmg.jujuPower,
    consumes.dmg.mightyRage,
    consumes.dmg.roids,
    consumes.dmg.sunfruit,
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
    consumes.dmg.groundAssay,
    consumes.dmg.jujuMight,
    consumes.dmg.jujuPower,
    consumes.dmg.roids,
    consumes.dmg.sunfruit,
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
  dmg: [],
  prot: [],
  misc: [],
};

const priest = {
  dmg: [consumes.dmg.supremePowerFlask, consumes.dmg.shadowPower],
  prot: [],
  misc: [consumes.misc.reagents.priest.prayer, consumes.misc.reagents.feather],
};

const mage = {
  dmg: [],
  prot: [],
  misc: [
    consumes.misc.reagents.mage.ai,
    consumes.misc.reagents.mage.portal,
    consumes.misc.reagents.mage.teleport,
    consumes.misc.reagents.feather,
  ],
};

const warlock = {
  dmg: [consumes.dmg.supremePowerFlask, consumes.dmg.shadowPower],
  prot: [],
  misc: [
    consumes.misc.reagents.warlock.doom,
    consumes.misc.reagents.warlock.infernal,
    consumes.misc.reagents.warlock.shard,
  ],
};

const kitty = {
  dmg: [],
  prot: [],
  misc: [consumes.misc.reagents.druid.bres, consumes.misc.reagents.druid.gotw],
};

const boomie = {
  dmg: [],
  prot: [],
  misc: [consumes.misc.reagents.druid.bres, consumes.misc.reagents.druid.gotw],
};

const enhance = {
  dmg: [],
  prot: [],
  misc: [consumes.misc.reagents.shaman.ankh, consumes.misc.reagents.shaman.oil],
};

const elemental = {
  dmg: [],
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
