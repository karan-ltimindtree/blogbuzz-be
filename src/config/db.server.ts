import { PrismaClient } from '@prisma/client';

declare global {
  var __db: PrismaClient | undefined;
}

if (!global.__db) global.__db = new PrismaClient();
const db: PrismaClient = global.__db;

export { db };
