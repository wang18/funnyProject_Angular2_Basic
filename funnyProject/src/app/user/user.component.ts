import { Component, OnInit } from '@angular/core';
import {GithubServiceService} from '../github-service.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [GithubServiceService]
})
export class UserComponent implements OnInit {
  public userDetails;
  constructor(private actR: ActivatedRoute, private gitS: GithubServiceService) { }

  ngOnInit() {
    this.gitS.getUserDetails(this.actR.snapshot.params['userId']).subscribe( res => {
      this.userDetails = res;
    });

  }

}
