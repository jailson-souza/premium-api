import httpApp from "@app/http-app";
import appConfig from "@app-config";
import container from "@container";
import { Logger } from "@util/logger";
import connectionDatabase from "@connection-database";
import consumerApp from "@app/consumer-app";
import { EmailExternalServiceInterface } from "@external/email/interface/email-external-service-interface";

const logger: Logger = container.resolve("logger");

const port = appConfig.port || 3001;
async function appHttpStart() {
    await connectionDatabase();
    await consumerApp();
    const app = await httpApp();
    app.listen(port, () => logger.info(`server running at ${port}`));
    container.resolve<EmailExternalServiceInterface>("emailExternalService").send({
        to: "jailson.gcloud@gmail.com",
        subject: "Servidor Premium Iniciado",
        copy: "jailson.gcloud@gmail.com",
        from: "suporte@premium.com.br",
        html: `<html>
            <h1>Fala Andrezão</h1>
            <p>O Servidor foi iniciado!</p>
        </html>`,
    });
}
appHttpStart();
