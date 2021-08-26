import { RepositoryBaseInterface } from "./interface/repository-base-interface";
import { ServiceBaseInterface } from "./interface/service-base-interface";

export class ServiceBase<T> implements ServiceBaseInterface<T> {
    protected repository: RepositoryBaseInterface<T>;

    constructor(repository) {
        this.repository = repository;
    }

    async create(data: T): Promise<T> {
        return this.repository.create(data);
    }

    async getAll(): Promise<T[]> {
        return this.repository.getAll();
    }

    async getById(id: number): Promise<T> {
        return this.repository.getById(id);
    }

    async update(id: number, data: T): Promise<T> {
        return this.repository.update(id, data);
    }

    async delete(id: number): Promise<boolean> {
        return this.repository.delete(id);
    }
}
