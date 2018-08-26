CREATE TABLE accountDragon(
  "accountId" INTEGER REFERENCES account(id),
  "dragonId"  INTEGER REFERENCES dragon(id),
  PRIMARY KEY ("accountId", "dragonId")
);