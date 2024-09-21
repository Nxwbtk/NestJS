import { DataSource } from "typeorm";
import { Cat } from "./cat.entity";

export const catProviders = [
    {
        provide: 'CAT_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Cat),
        inject: ['DATA_SOURCE'],
    }
]