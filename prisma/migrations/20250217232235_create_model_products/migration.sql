-- CreateTable
CREATE TABLE "Products" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "codigo_barras" TEXT NOT NULL,
    "unidade" TEXT NOT NULL,
    "fornecedor" TEXT NOT NULL,
    "validade" TIMESTAMP(3),
    "estoque_minimo" INTEGER NOT NULL,
    "created_At" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);
