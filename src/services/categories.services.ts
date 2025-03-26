import { Category } from "../entities/categorye.entity";

export class CategoriesService {
    async create(): Promise<Category>{
        const category = new Category({
            title:'Example Category',
            color: '#000',
        });

        return category;
    }
}