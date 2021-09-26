import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowServer=false;
  serverCreationStatus='server is not created';
  serverName="Test Server";
  serverCreation=false;
  serverID:number=2;
  serverStaus:string='offline';

  constructor() {
    setTimeout(()=>{
      this.allowServer=true;
    },3000);
    this.serverStaus=Math.random()>0.5?'online':'offline';
  }
    
    getserverStatus(){
      return this.serverStaus;
    }

    ngOnInit(){

    }

    onClickButton(){
      this.serverCreation=true;
       this.serverCreationStatus='server is  created';
     //alert("Server is created and the server name is "+this.serverName )
    }

    onUpdateServerName(event:Event)
    {
      this.serverName=(<HTMLInputElement>event.target).value;
      console.log(event);
    }

    getColor(){
     return this.serverStaus ==='online'?'green':'red';
    }

}
