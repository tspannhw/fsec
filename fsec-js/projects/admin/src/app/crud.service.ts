import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchSpec } from './search-spec';

@Injectable({
  providedIn: 'root'
})
export abstract class CrudService<ItemType, CreateRequestType> {
  abstract base: string;

  constructor(private http: HttpClient) { }

  get(searchSpec: SearchSpec) {
    if (searchSpec != null) {
      return this.http.get<ItemType[]>(this.base, {
        params: searchSpec.params()
      });
    } else {
      return this.http.get<ItemType[]>(this.base);
    }
  }

  add(item: CreateRequestType) {
    return this.http.post<ItemType>(this.base, item);
  }
}
