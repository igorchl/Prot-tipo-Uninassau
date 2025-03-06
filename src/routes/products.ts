import { Router, Request, Response } from 'express';
import Product from '../models/product';

const router = Router();

router.post('/products', async (req: Request, res: Response) => {
  const { name, quantity, minQuantity } = req.body;

  try {
    const product = await Product.create({ name, quantity, minQuantity });
    res.status(201).json(product);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'Erro ao criar produto', error: error.message });
    } else {
      res.status(500).json({ message: 'Erro ao criar produto', error: 'Erro desconhecido' });
    }
  }
});

router.get('/products', async (req: Request, res: Response) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'Erro ao buscar produtos', error: error.message });
    } else {
      res.status(500).json({ message: 'Erro ao buscar produtos', error: 'Erro desconhecido' });
    }
  }
});

router.put('/products/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, quantity, minQuantity } = req.body;

  try {
    const product = await Product.findByPk(id);
    if (product) {
      product.name = name;
      product.quantity = quantity;
      product.minQuantity = minQuantity;
      await product.save();
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: 'Produto não encontrado' });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'Erro ao atualizar produto', error: error.message });
    } else {
      res.status(500).json({ message: 'Erro ao atualizar produto', error: 'Erro desconhecido' });
    }
  }
});

router.delete('/products/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const product = await Product.findByPk(id);
    if (product) {
      await product.destroy();
      res.status(200).json({ message: 'Produto deletado com sucesso' });
    } else {
      res.status(404).json({ message: 'Produto não encontrado' });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'Erro ao deletar produto', error: error.message });
    } else {
      res.status(500).json({ message: 'Erro ao deletar produto', error: 'Erro desconhecido' });
    }
  }
});

export default router;
