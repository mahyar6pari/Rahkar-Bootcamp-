import { Component, inject } from '@angular/core';
import { ServiceData } from '../auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  data:any
  serviceData=inject(ServiceData)
  router=inject(Router)
  ngOnInit(): void {
    this.serviceData.gettxt().subscribe((data)=>{
      this.data=data
    })
  }
  onDlelet(even: any){
    console.log(this.data[even]);
    this.serviceData.postdelet(this.data[even]).subscribe(()=>{
      this.serviceData.gettxt().subscribe((data)=>{
        this.data=data
      })
    })
  }
  onupdate(even: any){
   this.serviceData.postset(this.data[even]).subscribe((data)=>{
    this.serviceData.update=data
    this.serviceData.display=true
    this.router.navigateByUrl('Sabt')
  })
}
}