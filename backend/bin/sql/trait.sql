CREATE TABLE trait(
  id           SERIAL PRIMARY KEY,
  "traitType"  VARCHAR NOT NULL,
  "traitValue" VARCHAR NOT NULL
);

INSERT INTO trait ("traitType","traitValue") values ('backgroundColor','black');
INSERT INTO trait ("traitType","traitValue") values ('backgroundColor','white');
INSERT INTO trait ("traitType","traitValue") values ('backgroundColor','green');
INSERT INTO trait ("traitType","traitValue") values ('backgroundColor','blue');

INSERT INTO trait ("traitType","traitValue") values ('pattern','plain');
INSERT INTO trait ("traitType","traitValue") values ('pattern','striped');
INSERT INTO trait ("traitType","traitValue") values ('pattern','spotted');
INSERT INTO trait ("traitType","traitValue") values ('pattern','patchy');

INSERT INTO trait ("traitType","traitValue") values ('build','slender');
INSERT INTO trait ("traitType","traitValue") values ('build','stocky');
INSERT INTO trait ("traitType","traitValue") values ('build','sporty');
INSERT INTO trait ("traitType","traitValue") values ('build','skinny');

INSERT INTO trait ("traitType","traitValue") values ('size','small');
INSERT INTO trait ("traitType","traitValue") values ('size','medium');
INSERT INTO trait ("traitType","traitValue") values ('size','large');
INSERT INTO trait ("traitType","traitValue") values ('size','enormous');
