import {Component, OnInit} from '@angular/core';
import {MovieModel} from "../model/movie.model";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements  OnInit{

    movies: MovieModel[];

    //서비스 주입을 받아본다
    constructor(private http: HttpClient) {}

    //네이버에 접속해서 데이터를 가져온다.
    //비동기 식으로 진행된다.
    ngOnInit(): void {
        this.http.get<MovieModel[]>('assets/movie.json')
            .subscribe((res) => {
                this.movies = res;
                console.log(this.movies);
            }); //요청이 완료되면 콜백함수가 실행된다.
        console.log('code.......................');
    }
}
