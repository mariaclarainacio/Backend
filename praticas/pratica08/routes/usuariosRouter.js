const express = require('express');
const { verificarToken, gerarToken } = require('../middlewares/authMiddleware');

const router = express.Router();
router.post('/login', (req, res) => {
  const { usuario } = req.body;
  const token = gerarToken({ email: usuario });

  return res.status(200).json({ token });
});

router.post('/renovar', verificarToken, (req, res) => {
  const email = req.usuario && req.usuario.email ? req.usuario.email : undefined;
  const novoToken = gerarToken({ email });
  return res.status(200).json({ token: novoToken });
});

module.exports = router;