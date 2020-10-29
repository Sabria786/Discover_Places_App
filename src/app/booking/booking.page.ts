import { Component, OnInit } from '@angular/core';
import { Booking } from './booking.model';
import { BookingService } from './booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {
  loadedBookings: Booking[];

  constructor(private bookingService: BookingService) { }

  ionViewWillEnter() {
    this.loadedBookings = this.bookingService.booking;
  }
  onRemoveBooking(bookingId: string) {
    this.bookingService.removeBooking(bookingId);
    this.loadedBookings = this.bookingService.booking;
  }
  ngOnInit() {
  }

}
