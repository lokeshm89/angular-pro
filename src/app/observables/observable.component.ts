import {Component, OnInit} from '@angular/core';
import {from, Observable, observeOn, of, Subscription} from "rxjs";

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html'
})
export class ObservableComponent implements OnInit{
  title = 'MyObservables';
  myObservable = new Observable((observer)=>{
console.log('Start')
    setTimeout(()=>{observer.next('1')},1000)
    setTimeout(()=>{observer.next('2')},2000)
    setTimeout(()=>{observer.next('3')},3000)
    setTimeout(()=>{observer.complete()},4000)
    setTimeout(()=>{observer.next('1')},5000)
    setTimeout(()=>{observer.error(new Error('Try Again'))},6000)
    setTimeout(()=>{observer.next('4')},7000)
    setTimeout(()=>{observer.next('5')},8000)
})
  a1=['1','2','3','4'];
  a2=['A','B','C','D']
  //create using of operator
  //myObservable = of(this.a1,this.a2,this.title);
  //create using from operator
  //myObservable = from(this.a1)

  ngOnInit() {
    this.myObservable.subscribe(data=>{
      console.log(data);
    },error => {
      console.log(error.message);
    },()=>{
      console.log('Completed');
    });
  }
}
