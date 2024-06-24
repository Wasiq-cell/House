import { Model } from 'mongoose';
import { Item } from './interfaces/item.interface';
import { CreateItemDto } from './dto/create-item.dto';
export declare class ItemsService {
    private readonly itemModel;
    constructor(itemModel: Model<Item>);
    findAll(): Promise<Item[]>;
    findOne(id: string): Promise<Item>;
    create(createItemDto: CreateItemDto): Promise<Item>;
    update(id: string, createItemDto: CreateItemDto): Promise<Item>;
    delete(id: string): Promise<Item>;
}
