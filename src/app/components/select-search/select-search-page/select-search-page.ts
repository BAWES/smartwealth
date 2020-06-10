import { Component } from '@angular/core';
import { NavParams, ModalController, PopoverController } from '@ionic/angular';


@Component({
  selector: 'select-search-page',
  templateUrl: 'select-search-page.html',
  styleUrls: ['./select-search-page.scss'],
})
export class SelectSearchPage {
  public searchInput: string = "";

  public collection: any[];
  public labelAttr: string;

  // The collection data being presented to user
  public displayedCollection: any[]; 

  constructor(
    params: NavParams,
    public popoverCtrl: PopoverController,
    public modalCtrl: ModalController
  ) {
    this.collection = params.get("collection");
    this.labelAttr = params.get("labelAttr");

    this.displayedCollection = this.collection.slice();
  }

  ionViewDidLoad() {
    
  }

  /**
   * When an item is selected from list
   */
  onSelect(selectedItem){
    this.modalCtrl.getTop().then(overlay => {
      if(overlay) {
        this.modalCtrl.dismiss(selectedItem);
      }
    }); 
    
    this.popoverCtrl.getTop().then(overlay => {
      if(overlay) {
        this.popoverCtrl.dismiss(selectedItem);
      }
    });
  }

  /**
   * Display search results based on user input
   */
  searchFilter(event){

    this.searchInput = event.target.value;

    let searchInput = this.searchInput.toLowerCase();

    if(searchInput){
      this.displayedCollection = this.collection.filter((collectionItem) => {
        return collectionItem[this.labelAttr].toLowerCase().indexOf(searchInput) >= 0;
      });
    }else{
      this.displayedCollection = this.collection.slice();
    }
  }
}
