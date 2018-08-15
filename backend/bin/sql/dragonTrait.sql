CREATE TABLE dragonTrait(
  "traitId"  INTEGER,
  "dragonId" INTEGER,
  FOREIGN KEY ("traitId")  REFERENCES trait(id),
  FOREIGN KEY ("dragonId") REFERENCES dragon(id)
);