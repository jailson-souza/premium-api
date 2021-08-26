import "reflect-metadata";
import express from "express";
import { loadControllers, scopePerRequest } from "awilix-express";
import helmet from "helmet";
import cors from "cors";
import container from "@container";
import { errorHandler } from "@util/middleware/error-middleware";
import { errorHandlerApiRouteNotFound } from "@util/middleware/error-middleware";
import { logMiddleware } from "@util/middleware/log-middleware";
import { checkAuth, checkRule } from "@util/middleware/auth-middleware";

process.env.TZ = "America/Sao_Paulo";

const app = express();

const appHttp = async function () {
    app.use(helmet());
    app.use(cors());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(scopePerRequest(container));
    app.use(logMiddleware);
    app.use(checkAuth);
    app.use(checkRule);
    app.use("/api", loadControllers("./../api/**/*-controller.js", { cwd: __dirname }));
    app.use("/api", errorHandler);
    app.use(errorHandlerApiRouteNotFound);

    return app;
};

export default appHttp;
