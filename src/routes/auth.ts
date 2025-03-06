import { Router, Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const router = Router();

// Rota para exibir a tela de login
router.get('/login', (req: Request, res: Response) => {
  res.render('login');
});

// Rota para processar o login
router.post('/login', async (req: Request, res: Response) => {
  const { username, password } = req.body;

  // Aqui você pode adicionar a lógica de autenticação
  // Exemplo básico:
  if (username === 'admin' && bcrypt.compareSync(password, bcrypt.hashSync('password', 10))) {
    const token = jwt.sign({ username }, 'seu_segredo_aqui', { expiresIn: '1h' });
    res.json({ message: 'Login bem-sucedido!', token });
  } else {
    res.status(401).json({ message: 'Credenciais inválidas!' });
  }
});

export default router;
