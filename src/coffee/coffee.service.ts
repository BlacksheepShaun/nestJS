import { Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeeService {
    private coffees: Coffee[] = [{
        id: 1,
        name: 'Shipwreck Roast',
        brand: 'Buddy Brew',
        flavors: ['chocolate', 'vanilla'],
    },
    ];

    findAll() {
        return this.coffees;
    }

    findOne(id: string) {
        return this.coffees.find(item=> item.id === +id);
    }

    create(createCoffee: any) {
        this.coffees.push(createCoffee);
    }

    update(id: string, updateCoffee: any) {
        
    }
}
