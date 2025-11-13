const jwt = require('jsonwebtoken');

function verificarToken(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ msg: 'Não autorizado' });
    }

    const parts = authHeader.split(' ');
    if (parts.length !== 2 || parts[0] !== 'Bearer') {
      return res.status(401).json({ msg: 'Não autorizado' });
    }

    const token = parts[1];

    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET);
      req.usuario = payload;
      return next();
    } catch (err) {
      return res.status(401).json({ msg: 'Token inválido' });
    }
  } catch (err) {
    return res.status(401).json({ msg: 'Token inválido' });
  }
}

function gerarToken(payload) {
  try {
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 120 });
    return token;
  } catch (err) {
    throw new Error('Erro ao gerar o token');
  }
}

module.exports = {
  verificarToken,
  gerarToken
};