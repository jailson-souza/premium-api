import { NextFunction, Request, Response } from "express";
import container from "@container";
import { Logger } from "@util/logger";

const logger: Logger = container.resolve("logger");
const whiteRoutes = ["/api/log"];

export function logMiddleware(request: Request, _: Response, next: NextFunction) {
    try {
        if (whiteRoutes.indexOf(request.path) > -1) {
            return next();
        }

        const params = request.params;
        const query = request.query;
        const headers = request.headers;
        const body = request.body;
        const path = request.path;
        const host = request.hostname;
        const method = request.method;

        logger.info("api request log", {
            method,
            host,
            path,
            body,
            headers,
            params,
            query,
        });
    } catch {}
    next();
}
