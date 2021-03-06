import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Utilities as FavoriteUtilities} from '../common/utilities';

@Injectable({
  providedIn: 'root'
})
export class RegistryService {


  constructor(private http: HttpClient, private fU: FavoriteUtilities) { }

 
  entityUrl = this.fU.backendUrl +'/registries';

  one(id): Observable<any>{
    return this.http.get(this.entityUrl+'/'+id)
  }

  topFavorite(media): Observable<any> {
    return this.http.get(this.entityUrl + "/topFavorite/"+ media);
  }

  topRecommend(media): Observable<any> {
    return this.http.get(this.entityUrl + "/topRecommend/"+ media);
  }
  
}
