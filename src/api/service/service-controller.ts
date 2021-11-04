import { ControllerBase } from "@api/base/controller-base";
import { route } from "awilix-express";
import { Service } from "./service-entity";

@route("/service")
export class ServiceController extends ControllerBase<Service> {
    constructor({ serviceService }) {
        super(serviceService);
    }
}
