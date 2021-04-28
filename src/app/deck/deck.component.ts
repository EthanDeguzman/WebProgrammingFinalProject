import { Component, OnInit } from '@angular/core';
import {ICard, IDeck, Card} from 'src/interfaces/card';
import {CardApiService} from 'src/services/card-api.service';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit {

  cardData:IDeck;

  constructor(private  _cardApiService: CardApiService) { }

  //On Initialise get the DeckID and draw the 4 Cards
  ngOnInit(){
    this._cardApiService.getDeckId().subscribe(
      data => {
        this._cardApiService.getCard(data.deck_id).subscribe(
          data => {
            this.cardData = JSON.parse(JSON.stringify(data))
            console.log("Image " + this.cardData.cards[0].image)
            console.log("suit " + this.cardData.cards[0].suit)
          }
       )
      }
      )
  }

  addTheCard(image:string, value:string, suit:string) :boolean{
  //  let tempCard:ICard;
  // tempCard = new Card(image, value, suit);
   // this._cardApiService.addCardData(tempCard);
    return false;
  }

}
