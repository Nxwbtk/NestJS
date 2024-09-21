import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Cat } from "./cat.entity";
import { Repository } from "typeorm";

@Injectable()
export class CatService {
    constructor(
        // @InjectRepository(Cat)
        @Inject('CAT_REPOSITORY')
        private catRepository: Repository<Cat>
    ) {}

    findAll(): Promise<Cat[]> {
        return this.catRepository.find();
    }

    findOne(id: number): Promise<Cat> {
        return this.catRepository.findOneBy({ id });
    }
}