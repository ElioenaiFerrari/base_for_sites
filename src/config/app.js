import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import ejs from 'ejs';
import path from 'path';
import Router from '@/router';

const App = express();

App.use(cors({ origin: true }));
App.use(express.json());
App.use(morgan('dev'));

App.use(express.static(path.join(__dirname, '../../public')));
App.set('views', path.join(__dirname, '../../public'));
App.set('view engine', 'html');
App.engine('html', ejs.renderFile);

App.use(Router);

export default App;
