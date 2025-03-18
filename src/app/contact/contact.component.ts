import {Component, OnInit, ViewChild} from '@angular/core';
import {ContactsService} from '../service/contacts.service';
import {Contact} from '../model/contact.model';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{

  contacts! : Array<Contact>;
  contactsDataSource! : MatTableDataSource<Contact>;
  displayedColumns : string[] = ['firstName','lastName', 'photo', 'profile'];
  contactId! : number;
  lotsOfTabs2: string[] = new Array(9).fill(0).map((_, index) => `Tab ${index}`);
  lotsOfTabs = new Array(9).fill(0).map((_, index) => ({ lastName: `${index}`, photo: '' }));

  @ViewChild(MatPaginator) paginator! : MatPaginator;
  @ViewChild(MatSort) sort! : MatSort;


  constructor(private contactService : ContactsService,
              private route : ActivatedRoute,
              private router : Router) {
  }

  ngOnInit() {
    this.getAllContacts();
    this.getTabs();
  }


  //lotsOfTabs = new Array(9).fill(0).map((_, index) => `Tab ${index}`);



  getAllContacts() {
    this.contactService.getAllContacts().subscribe({
      next : value => {
        this.contacts = value;
        this.contactsDataSource = new MatTableDataSource(this.contacts);
        this.contactsDataSource.paginator = this.paginator;
        console.log(value)
      },
      error : err => {
        console.log(err)
      }
    })
  }

  /*getTabs() {
    this.contactService.getAllContacts().subscribe(
      (data: any[]) => {
        this.lotsOfTabs = data.map(item => ({
          lastName: item.lastName,
          photo: item.photo
        }));
      },
      (error) => {
        console.log(error);
      }
    )
  }*/

  getTabs() {
    this.contactService.getAllContacts().subscribe({
      next: (data: Contact[]) => {
        // Mettre à jour "lotsOfTabs" avec les données de l'API
        this.lotsOfTabs = data.map(item => ({
          lastName: item.lastName, // Remplacez par le champ correct dans votre API
          photo: item.photo // Assurez-vous que "photo" est le bon champ pour les URLs d'images
        }));
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des données :', error);
      }
    });
  }


  toProfile(contact : Contact) {
    this.router.navigateByUrl(`/profile/${contact.id}`);
  }
}


