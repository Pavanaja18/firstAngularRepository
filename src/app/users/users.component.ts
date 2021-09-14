import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FaketestService } from '../faketest.service';
import { Subscription} from 'rxjs';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  myDetails;
  mySubscription:Subscription;
  //injecting faketest service object
  constructor(private fsObj:FaketestService,private router:Router) { }


  ngOnInit(): void {
    this.mySubscription= this.fsObj.getDetails().subscribe(
      usersData=>{
        this.myDetails=usersData;
        //console.log(this.myPage);
      },
      err=>{
        console.log("err is",err)
      }
    )

  }
  onSelectId(id){
    this.router.navigateByUrl('users/'+id);
  }
  //unsubscription
  ngOnDestroy(){
    this.mySubscription.unsubscribe();
  }


}
