import { Component} from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
    score: string
    sets: string[]

    constructor(private http: Http) {
        this.http.get('http://localhost:8080/tennis/').subscribe(result => {
            this.score = result.text();
        })
        this.matchScore();
    }

    onClickP1() {
        this.http.get('http://localhost:8080/tennis/playerOne/').subscribe(result => {
            this.score = result.text();
        })
        this.matchScore();
    }

    onClickP2() {
        this.http.get('http://localhost:8080/tennis/playerTwo/').subscribe(result => {
            this.score = result.text();
        })
        this.matchScore();
    }

    onClickNewMatch() {
        this.http.get('http://localhost:8080/tennis/newMatch/').subscribe(result => {
            this.score = result.text();
            this.sets = [];
        })
    }

    matchScore() {
      this.http.get('http://localhost:8080/tennis/matchScore/').subscribe(result => {
          this.sets = result.json();
      })
    }

    isGameOver() {
        if(this.score === "Game over") {
            return true;
        }
        return false;
    }

}
