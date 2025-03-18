import {Component, OnInit} from '@angular/core';
import {ContactsService} from '../service/contacts.service';
import {ActivatedRoute} from '@angular/router';
import {Contact} from '../model/contact.model';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  id! : number;
  contact! : any;
  firstName! : string;
  lastName! : string;
  photo! : string;

  constructor(private contactService : ContactsService,
              private route : ActivatedRoute) {
  }

  ngOnInit() {
    this.getContactById();
  }

  getContactById(){
    this.id = this.route.snapshot.params['id'];
    this.contactService.getContactById(this.id).subscribe({
      next : value => {
        this.contact = value;
        console.log(value);
      },
      error : err => {
        console.log(err);
      }
    })
    /*this.contactService.getContactById(this.id).subscribe((cont : Contact)=> {
      this.firstName = cont.firstName;
      this.lastName = cont.lastName;
      this.photo = cont.photo;
    })*/
  }

}
