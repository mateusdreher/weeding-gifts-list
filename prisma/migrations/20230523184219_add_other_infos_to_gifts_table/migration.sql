/*
  Warnings:

  - Made the column `image` on table `gifts` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "gifts" ADD COLUMN     "otherInfos" JSONB,
ALTER COLUMN "image" SET NOT NULL,
ALTER COLUMN "image" SET DEFAULT '';
