import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { FaketestService } from '../faketest.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  usersObj;

  constructor(private ar:ActivatedRoute,private fs:FaketestService) { }

  ngOnInit(): void {
    //to get id from url
    let id=this.ar.snapshot.params.id;
    //get data of users with respective id
    this.fs.getDetailsById(id).subscribe(
      obj=>{
        this.usersObj=obj;
      },
      err=>
      {
        console.log("err is",err);
      }
    )
  }

}
