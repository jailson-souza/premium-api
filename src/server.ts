import appHttp from "@app/app-http";
import appConfig from "@app-config";
import container from "@container";
import { Logger } from "@util/logger";
import connectionDatabase from "@connection-database";

const logger: Logger = container.resolve("logger");

const port = appConfig.port || 3001;
async function appHttpStart() {
    await connectionDatabase();
    const app = await appHttp();
    app.listen(port, () => logger.info(`server running at ${port}`));
}
appHttpStart();
