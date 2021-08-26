import { route } from "awilix-express";
import { ControllerBase } from "@api/base/controller-base";
import { User } from "./user-entity";

@route("/user")
export class UserController extends ControllerBase<User> {
    constructor({ userService }) {
        super(userService);
    }
}
