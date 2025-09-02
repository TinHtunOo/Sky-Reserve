const { PrismaClient } = require("@/src/generated/prisma");
let prisma;

if (!global.prisma) {
  global.prisma = new PrismaClient();
}
prisma = global.prisma;

export default prisma;
