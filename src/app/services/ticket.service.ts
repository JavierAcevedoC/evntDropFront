import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ticket } from '../ticket/ticket';
import { createApi } from 'unsplash-js';
import { environment } from 'src/environments/environment';


const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Accept': '*/*',
  'Authorization': 'Basic dXNlcjplMDU4YjA3Zi1lMTlmLTRiMDktYjVkZC1hOTg0ZGE0MjBiMDc='
};

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(
    private http: HttpClient,
  ) { }

  // Test method only to get the ticket list
  public getTickets() {
    return this.http.get('http://localhost:8080/api/v1/tickets', { headers });
  }

  public getTicket(id: number) {
    return this.http.get<Ticket>(`http://localhost:8080/api/v1/tickets/${id}`, { headers });
  }

  public getMonth(month: number) {
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', ' Diciembre'];
    return months[month - 1];
  }

  public getImage(search: string) {
    // create a search API instance
    const api = createApi({
      accessKey: environment.apiUnsplash,
    });
    return api.search.getPhotos(
      {
        query: search,
        orientation: 'landscape'
      }).then(data => {
        return data;
      });
  }
}
