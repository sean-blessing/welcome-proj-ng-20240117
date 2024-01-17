import { Component } from '@angular/core';
import { SystemService } from '../service/system.service';
import { Address } from '../model/address';

@Component({
  selector: 'app-name-welcome',
  templateUrl: './name-welcome.component.html',
  styleUrls: ['./name-welcome.component.css']
})
export class NameWelcomeComponent {
  firstName: string = "Bob";
  lastName: string = "Marley";
  title: string = "Name Welcome Component";
  addresses: Address[] = [];

  constructor(private sysSvc: SystemService){}

  ngOnInit() {
    this.addresses = this.sysSvc.addresses;
    console.log('name-welcome component - # of addresses: '+this.addresses.length);
  }
}
