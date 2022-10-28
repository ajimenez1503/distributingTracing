import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
@Injectable()
export class HelloWorldComponent implements OnInit {

  title = 'Hello, World! Application';
  url = 'http://127.0.0.1:8081';
  result: String;
  
  constructor(private http: HttpClient) {
    this.result = "";
  }

  ngOnInit(): void {

  }

  onClickMe() {
    this.requestHello1().subscribe(data => {
      console.log(data);
      this.result = data;
    })
  }

  requestHello1() {
    console.log("run request");
    return this.http.get(`${this.url}/hello1`, {responseType: 'text'});
  }

}
