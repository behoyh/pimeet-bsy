import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ZoomService {

  constructor(public httpClient: HttpClient) { }

  getMeeting(token, meeting) {
    return this.httpClient.get("https://api.zoom.us/v2/meetings/"+meeting, { headers: { "Authorization": "Bearer " + token } });
  }
}
