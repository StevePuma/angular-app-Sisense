import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  server: string = 'https://figbytes.sisensepoc.com';
  dashboard: string = 'app/main/dashboards/6499d0565e2fcc002a9cdd69';

  constructor() { }
}
