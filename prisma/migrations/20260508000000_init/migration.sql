-- CreateTable
CREATE TABLE "Frete" (
    "id" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "cliente" TEXT NOT NULL,
    "motorista" TEXT NOT NULL,
    "origem" TEXT NOT NULL,
    "destino" TEXT NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "combustivel" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "pedagio" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "comissao" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "alimentacao" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "outros" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "kmInicio" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "kmFim" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Frete_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Conta" (
    "id" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Conta_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Frete_data_idx" ON "Frete"("data");

-- CreateIndex
CREATE INDEX "Frete_cliente_idx" ON "Frete"("cliente");

-- CreateIndex
CREATE INDEX "Conta_data_idx" ON "Conta"("data");

-- CreateIndex
CREATE INDEX "Conta_categoria_idx" ON "Conta"("categoria");
