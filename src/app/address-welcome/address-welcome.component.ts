import { Component } from '@angular/core';
import { Address } from '../model/address';

@Component({
  selector: 'app-address-welcome',
  templateUrl: './address-welcome.component.html',
  styleUrls: ['./address-welcome.component.css']
})
export class AddressWelcomeComponent {
  
  title: string = "Address Welcome";
  addresses: Address[] = [];
  city: string = "Cincinnati";
  street: string = "1111 Test Rd.";
  state: string = "OH"
  zip: string = "45777";

  newAddress: Address = new Address();

  constructor() {}

  ngOnInit() {
    let address1: Address = new Address(this.street, this.city, this.state, this.zip);
    let address2: Address = new Address("1212 Welcome Way", "Columbus", "OH", "48777");
    this.addresses = [address1, address2];
  }

  save() {
    let address: Address = new Address(this.newAddress.street, this.newAddress.city,
                                        this.newAddress.state, this.newAddress.zip);
    this.addresses.push(address);
    this.newAddress = new Address();
  }


}
