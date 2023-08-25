import 'reflect-metadata';
import express from 'express';
import { json } from 'body-parser';
import { responseEnhancer } from './middleware/response';
import cors from 'cors';
import initRoute from './routes';
import connectMongoDB from './utils/db/mongo.db';
import { useContainer } from 'typeorm';
import { Container } from 'typeorm-typedi-extensions';
import swaggerRoutes from './swagger/swagger-handler'
import passport from 'passport';

class Server {

    public app: express.Application = express();

    constructor() {
        this.app.use(json())
        this.app.use(responseEnhancer());
        this.app.use(cors());
        this.app.use('/api-docs', swaggerRoutes);
        this.app.use(passport.initialize());
        this.app.use(passport.session());
        initRoute(this.app)
        useContainer(Container);
        connectMongoDB();
    }
}

export default new Server().app;