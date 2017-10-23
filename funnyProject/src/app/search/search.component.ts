import { Component, OnInit } from '@angular/core';
import {GithubServiceService} from '../github-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [GithubServiceService]
})
export class SearchComponent implements OnInit {
  public searchTxt;
  public userCount;
  public user;
  constructor(private router: Router, private gitS: GithubServiceService) { }

  ngOnInit() {
  }
  handleSubmit(e){
    e.preventDefault();
    this.gitS.getUser(this.searchTxt).subscribe(res => {
      this.user = res.items;
      this.userCount = res.total_count;
      console.log(this.user);
    });
  }
  getText(e){
    this.searchTxt = e.target.value;
  }
  getUserDetial(uId){
    this.router.navigate(['user/', uId]);
  }

}
