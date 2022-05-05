import { Component, OnInit } from '@angular/core';
import { TicketService } from '../services/ticket.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Ticket } from './ticket';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.sass']
})
export class TicketComponent implements OnInit {
  public paramCode: number = 0;
  public ticket: Ticket | undefined;
  public image: string | void;

  constructor(
    private ticketService: TicketService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this.paramCode = params['code'];
    });
    this.image = "";
  }

  ngOnInit(): void {
    this.ticketService.getTicket(this.paramCode).subscribe(
      (data) => {
        console.log(data);
        this.ticket = new Ticket(data);
        this.getImage().then(data => this.image = data);

      }
    );
  }

  private getDate() {
    return this.ticket?.eventDate.split('-');
  }

  public getMonth(): string {
    const currentDate = this.getDate();
    const month = currentDate ? currentDate[1] : 10;
    return this.ticketService.getMonth(Number(month));
  }

  public getDay(): string {
    const currentDate = this.getDate();
    const day = currentDate ? currentDate[2] : "25";
    return day;
  }

  public getYear(): string {
    const currentDate = this.getDate();
    const year = currentDate ? currentDate[0] : "1997";
    return year;
  }

  public getImage() {
    const search = this.ticket ? this.ticket.eventName : 'event';
    return this.ticketService.getImage(search).then(data => {
      console.log(data);
      const resp = data.response?.results[0].urls ? data.response?.results[0].urls.regular : "";
      console.log(resp);
      return resp;
    }).catch(err => {
      console.log(err);
    });
  }
}
