import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TransformService {

    get_columns_from_json(json) {
        const list = [];
        for (const key in json[0]) {
            list.push(key);
        }
        return list
    }
}
