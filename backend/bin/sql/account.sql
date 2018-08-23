CREATE TABLE account(
  id             SERIAL PRIMARY KEY,
  "usernameHash" CHARACTER(64),
  "passwordHash" CHARACTER(64),
  "sessionId"    CHARACTER(36)
);