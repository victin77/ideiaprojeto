const express = require('express');
const cors = require('cors');
const path = require('path');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Serve apenas o index.html — não expõe server.js, package.json, node_modules etc
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

/* ============== HEALTH ============== */
app.get('/api/health', (req, res) => {
  res.json({ ok: true, ts: new Date().toISOString() });
});

/* ============== FRETES ============== */
app.get('/api/fretes', async (req, res) => {
  try {
    const fretes = await prisma.frete.findMany({ orderBy: { data: 'desc' } });
    res.json(fretes);
  } catch (err) {
    console.error('GET /api/fretes', err);
    res.status(500).json({ error: 'Erro ao listar fretes' });
  }
});

app.post('/api/fretes', async (req, res) => {
  try {
    const f = await prisma.frete.create({ data: sanitizeFrete(req.body) });
    res.status(201).json(f);
  } catch (err) {
    console.error('POST /api/fretes', err);
    res.status(500).json({ error: 'Erro ao criar frete' });
  }
});

app.put('/api/fretes/:id', async (req, res) => {
  try {
    const f = await prisma.frete.update({
      where: { id: req.params.id },
      data: sanitizeFrete(req.body),
    });
    res.json(f);
  } catch (err) {
    console.error('PUT /api/fretes/:id', err);
    res.status(500).json({ error: 'Erro ao atualizar frete' });
  }
});

app.delete('/api/fretes/:id', async (req, res) => {
  try {
    await prisma.frete.delete({ where: { id: req.params.id } });
    res.status(204).end();
  } catch (err) {
    console.error('DELETE /api/fretes/:id', err);
    res.status(500).json({ error: 'Erro ao excluir frete' });
  }
});

/* ============== CONTAS ============== */
app.get('/api/contas', async (req, res) => {
  try {
    const contas = await prisma.conta.findMany({ orderBy: { data: 'desc' } });
    res.json(contas);
  } catch (err) {
    console.error('GET /api/contas', err);
    res.status(500).json({ error: 'Erro ao listar contas' });
  }
});

app.post('/api/contas', async (req, res) => {
  try {
    const c = await prisma.conta.create({ data: sanitizeConta(req.body) });
    res.status(201).json(c);
  } catch (err) {
    console.error('POST /api/contas', err);
    res.status(500).json({ error: 'Erro ao criar conta' });
  }
});

app.put('/api/contas/:id', async (req, res) => {
  try {
    const c = await prisma.conta.update({
      where: { id: req.params.id },
      data: sanitizeConta(req.body),
    });
    res.json(c);
  } catch (err) {
    console.error('PUT /api/contas/:id', err);
    res.status(500).json({ error: 'Erro ao atualizar conta' });
  }
});

app.delete('/api/contas/:id', async (req, res) => {
  try {
    await prisma.conta.delete({ where: { id: req.params.id } });
    res.status(204).end();
  } catch (err) {
    console.error('DELETE /api/contas/:id', err);
    res.status(500).json({ error: 'Erro ao excluir conta' });
  }
});

/* ============== BULK IMPORT (migração / Excel) ============== */
app.post('/api/bulk', async (req, res) => {
  try {
    const fretes = Array.isArray(req.body.fretes) ? req.body.fretes.map(sanitizeFrete) : [];
    const contas = Array.isArray(req.body.contas) ? req.body.contas.map(sanitizeConta) : [];
    const mode = req.body.mode === 'replace' ? 'replace' : 'add';

    await prisma.$transaction(async (tx) => {
      if (mode === 'replace') {
        await tx.frete.deleteMany();
        await tx.conta.deleteMany();
      }
      if (fretes.length) await tx.frete.createMany({ data: fretes });
      if (contas.length) await tx.conta.createMany({ data: contas });
    });

    res.json({ ok: true, fretes: fretes.length, contas: contas.length, mode });
  } catch (err) {
    console.error('POST /api/bulk', err);
    res.status(500).json({ error: 'Erro ao importar em massa' });
  }
});

/* ============== HELPERS ============== */
function num(v) {
  if (v === undefined || v === null || v === '') return 0;
  const n = Number(v);
  return Number.isFinite(n) ? n : 0;
}
function str(v) { return v == null ? '' : String(v).trim(); }

function sanitizeFrete(b) {
  return {
    data: str(b.data),
    cliente: str(b.cliente),
    motorista: str(b.motorista),
    origem: str(b.origem),
    destino: str(b.destino),
    valor: num(b.valor),
    combustivel: num(b.combustivel),
    pedagio: num(b.pedagio),
    comissao: num(b.comissao),
    alimentacao: num(b.alimentacao),
    outros: num(b.outros),
    kmInicio: num(b.kmInicio),
    kmFim: num(b.kmFim),
  };
}
function sanitizeConta(b) {
  return {
    data: str(b.data),
    descricao: str(b.descricao),
    categoria: str(b.categoria),
    valor: num(b.valor),
  };
}

/* ============== START ============== */
app.listen(PORT, () => {
  console.log(`FleetFlow rodando em http://localhost:${PORT}`);
});
