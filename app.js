import express from 'express';
import morgan from 'morgan';
import methodOverride from 'method-override';
import computadorasRouter from './src/routes/computadoras.routes.js'; 
import ejs from 'ejs';

const app = express();

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs'); 

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method')); 

app.use('/exam_db/computadoras', computadorasRouter);

export default app;
