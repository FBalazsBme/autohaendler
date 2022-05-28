import { firstValueFrom, Observable, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { SettingsService } from './../../api/api/settings.service';
import { SingleSettingResponse } from './../../api/model/singleSettingResponse';

@Injectable({
  providedIn: 'root'
})
export class MerlinApiService {
  settings: SingleSettingResponse | undefined;

  constructor(private settingsService: SettingsService) { }

  getSettings(KEY: string): Observable<SingleSettingResponse>{
    console.log("Searching for settings with key: " + KEY)
      return this.settingsService.query(KEY,"body",true, {httpHeaderAccept:"application/json"})
    }
    
  async keyCloakInit() {
    const AUTHKEY = "merlin_global_network_keycloak_url_external"
    const REALMKEY = "merlin_global_keycloak_base_realm"
    let authurl: string | undefined
    let realm: string | undefined
    console.log("Loading settings...")
    await firstValueFrom(this.getSettings(AUTHKEY).pipe(
      tap(settings => realm = settings.value)
    ));
    await firstValueFrom(this.getSettings(REALMKEY).pipe(
      tap(settings => authurl = settings.value)
    ));
    console.log("Waited for response....")
    console.log(realm)
    console.log(authurl)
  }
}