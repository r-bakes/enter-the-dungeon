-- CreateTable
CREATE TABLE "characters" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "prospectingLevel" INTEGER NOT NULL,
    "magicLevel" INTEGER NOT NULL,
    "martialLevel" INTEGER NOT NULL,
    "inventoryHash" TEXT NOT NULL
);
