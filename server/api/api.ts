import * as express from 'express';
import { Application } from 'express';
import * as morgan from 'morgan';
import * as bodyParse from 'body-parser';

class Api {
  public express: Application;

  constructor(){
    this.express = express();
  }

  middleware(): void{
    this.express.use(morgan('dev'));
    this.express.use(bodyParse.urlencoded( { extended: true}));
    this.express.use(bodyParse.json());
  }

}

export default new Api().express;
