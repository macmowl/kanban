import { Component, OnInit } from '@angular/core';
import { SeoService} from '../../services/seo.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {
  customers;

  constructor(private seo: SeoService, private db: AngularFirestore) { }

  ngOnInit() {
    this.seo.generateTags({
      title: 'Customer List',
      description: 'A liste filled with customers'
    })

    this.customers = this.db.collection('customers').valueChanges({idField: 'id'});
  }

}
