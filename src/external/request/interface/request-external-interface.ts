import { ResponseData } from "../request-entity";

export interface RequestExternalInterface {
    post(url: string, headers?: Object, body?: any): Promise<ResponseData>;
}
