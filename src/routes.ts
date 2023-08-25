import { Application } from "express";
import { useExpressServer } from "routing-controllers";
import RegisterController from "./api/register/register.controller";


const basePath = `/api/v1`;

function initRoute(app: Application) {
    useExpressServer(app, {
        controllers: [
            RegisterController
        ],
        defaultErrorHandler: true,
        routePrefix: basePath
    })
}

export default initRoute