//Primul pas este sa imi tin intr-o constanta api key ul

const API_KEY = '7cad0b5a-4a51-41c8-9d8d-1f1bc0daab37';

//Definesc functia care returneaza endpointul folosit pt o anumita categorie de stiri
export function getNewsCategoriesEndpoit(
    category, 
    pageNumber = 1, 
    pageSize = 20

     
) {
    //Imi construiesc query stringul pe care am sa il trm catre API
    const queryParams = `?api-key=${API_KEY}&section=${category}&show-fields=all&page-size=${pageSize}&page=${pageNumber}`;

    //Returnez linkul complet catre API ul care imi returneaza stirile pe categorie
    return `https://content.guardianapis.com/search${queryParams}`;
}

export function getNewsDetailsEndpoint(newsId) {
    const queryParams = `?api-key=${API_KEY}&show-fields=all`;

    return `https://content.guardianapis.com/${newsId}${queryParams}`;
  }

