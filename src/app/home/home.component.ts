import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

import { Member } from '../member';
import { MembersService } from '../members.service';

@Component({
  selector: 'app-home',
  providers: [ 
    MembersService
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  members: Member[];

  constructor(private auth: AuthService, private membersService:MembersService ) { }

  getMembers(): void {
    this.membersService.getMembers().then(members => this.members = members);
  }

  ngOnInit(): void {
    this.getMembers();
  }

}
