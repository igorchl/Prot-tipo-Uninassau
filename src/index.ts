import express from 'express';
import path from 'path';
import authRoute from './routes/auth';
import productRoute from './routes/products';
import sequelize from './database/config';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurar EJS como motor de templates
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

app.use('/', authRoute);
app.use('/api', productRoute);

// Sincronizar o banco de dados
sequelize.sync().then(() => {
  console.log('Banco de dados sincronizado');
}).catch((error) => {
  console.error('Erro ao sincronizar o banco de dados:', error);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
