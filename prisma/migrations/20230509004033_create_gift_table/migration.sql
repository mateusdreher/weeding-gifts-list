-- CreateTable
CREATE TABLE "gifts" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'AVAILABLE',
    "personWhoBoughtIt" TEXT NOT NULL DEFAULT '',
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "gifts_pkey" PRIMARY KEY ("id")
);
