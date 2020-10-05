import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostList } from '../models/post-list.interface';
import { Observable } from 'rxjs';
import { Country } from 'src/app/models/country.interface';
import { Category } from 'src/app/models/category.interface';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private apiKey = "bc03b26063ac412798185a0a6d04f7af";
  private countries: Country[] = [
    {
      value: "ae",
      field: "Emiratos Árabes Unidos"
    },
    {
      value: "ar",
      field: "Argentina"
    },
    {
      value: "at",
      field: "Austria"
    },
    {
      value: "au",
      field: "Australia"
    },
    {
      value: "be",
      field: "Bélgica"
    },
    {
      value: "bg",
      field: "Bulgaria"
    },
    {
      value: "br",
      field: "Brasil"
    },
    {
      value: "ca",
      field: "Canada"
    },
    {
      value: "ch",
      field: "Suiza"
    },
    {
      value: "cn",
      field: "China"
    },
    {
      value: "co",
      field: "Colombia"
    },
    {
      value: "cu",
      field: "Cuba"
    },
    {
      value: "cz",
      field: "República Checa"
    },
    {
      value: "de",
      field: "Alemania"
    },
    {
      value: "eg",
      field: "Egipto"
    },
    {
      value: "fr",
      field: "Francia"
    },
    {
      value: "gb",
      field: "Reino Unido"
    },
    {
      value: "gr",
      field: "Grecia"
    },
    {
      value: "hk",
      field: "Hong Kong"
    },
    {
      value: "hu",
      field: "Hungría"
    },
    {
      value: "id",
      field: "Indonesia"
    },
    {
      value: "ie",
      field: "Irlanda"
    },
    {
      value: "il",
      field: "Israel"
    },
    {
      value: "in",
      field: "India"
    },
    {
      value: "it",
      field: "Italia"
    },
    {
      value: "jp",
      field: "Japón"
    },
    {
      value: "kr",
      field: "Corea del Sur"
    },
    {
      value: "lt",
      field: "Lituania"
    },
    {
      value: "lv",
      field: "Letonia"
    },
    {
      value: "ma",
      field: "Marruecos"
    },
    {
      value: "mx",
      field: "México"
    },
    {
      value: "my",
      field: "Malasia"
    },
    {
      value: "ng",
      field: "Nigeria"
    },
    {
      value: "nl",
      field: "Países Bajos"
    },
    {
      value: "no",
      field: "Noruega"
    },
    {
      value: "nz",
      field: "Nueva Zelanda"
    },
    {
      value: "ph",
      field: "Filipinas"
    },
    {
      value: "pl",
      field: "Polonia"
    },
    {
      value: "pt",
      field: "Portugal"
    },
    {
      value: "ro",
      field: "Rumania"
    },
    {
      value: "rs",
      field: "Serbia"
    },
    {
      value: "ru",
      field: "Rusia"
    },
    {
      value: "sa",
      field: "Arabia Saudita"
    },
    {
      value: "se",
      field: "Suecia"
    },
    {
      value: "sg",
      field: "Singapur"
    },
    {
      value: "si",
      field: "Slovenia"
    },
    {
      value: "sk",
      field: "Slovakia"
    },
    {
      value: "th",
      field: "Tailandia"
    },
    {
      value: "tr",
      field: "Turquía"
    },
    {
      value: "tw",
      field: "Taiwan"
    },
    {
      value: "ua",
      field: "Ucrania"
    },
    {
      value: "us",
      field: "Estados Unidos"
    },
    {
      value: "ve",
      field: "Venezuela"
    },
    {
      value: "za",
      field: "Sudáfrica"
    }
  ];
  private categories: Category[] = [
    {
      value: "business",
      field: "Negocios"
    },
    {
      value: "entertainment",
      field: "Entretenimiento"
    },
    {
      value: "general",
      field: "General"
    },
    {
      value: "health",
      field: "Salud"
    },
    {
      value: "science",
      field: "Ciencia"
    },
    {
      value: "sports",
      field: "Deportes"
    },
    {
      value: "technology",
      field: "Tecnología"
    }
  ];

  //Quedó pendiente el paginado.
  private page: number;

  public getPage() {
    return this.page;
  }

  constructor(private httpClient: HttpClient) { }

  retrieveNews(country: string, category: string):Observable<PostList[]> {
    var url = 'http://newsapi.org/v2/top-headlines?pageSize=12&country=' + country + '&category=' + category + '&apiKey=' + this.apiKey;
    return this.httpClient.get<PostList[]>(url);
  }

  getCountries() {
    return this.countries;
  }
  getCategories() {
    return this.categories;
  }
}
