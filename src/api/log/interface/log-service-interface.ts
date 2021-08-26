import { Log } from "../log-entity";

export interface LogServiceInterface {
    /**
     * @param {string} date YYYYMMDD
     */
    getLogByDate(date: string): Promise<Log[]>;
}
