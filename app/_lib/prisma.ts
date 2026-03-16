// lib/prisma.ts

// Importa o Prisma Client gerado localmente (em app/generated/prisma).
import { PrismaClient } from "@/app/generated/prisma/client";
// Importa o adapter para conectar o Prisma ao PostgreSQL via driver `pg`.
import { PrismaPg } from "@prisma/adapter-pg";

// Lê a URL de conexão do banco definida no arquivo .env.
const connectionString = `${process.env.DATABASE_URL}`;

// Cria o adapter do Prisma usando a string de conexão.
const adapter = new PrismaPg({ connectionString });

// Tipa o objeto global para armazenar uma instância única do Prisma em desenvolvimento.
const globalForPrisma = global as unknown as { prisma: PrismaClient };

// Reutiliza a instância já existente (se houver) para evitar múltiplas conexões no hot reload.
export const prisma = globalForPrisma.prisma || new PrismaClient({ adapter });

// Alias opcional para manter compatibilidade com imports que usam `db`.
export const db = prisma;

// Em desenvolvimento, salva a instância no escopo global para reaproveitar entre recarregamentos.
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
