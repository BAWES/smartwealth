import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { SelectSearchPage } from '../select-search-page/select-search-page';
import { PopoverController, Platform } from '@ionic/angular';

/*
  Select search component, renders a select form input with search filter functionality.
*/
@Component({
  selector: 'select-search-input',
  templateUrl: 'select-search-input.html',
  styleUrls: ['./select-search-input.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectSearchInputComponent),
      multi: true
    }
  ]
})
export class SelectSearchInputComponent implements ControlValueAccessor {

  // Default value the form element should have 
  private _value: string;
  // The selected item
  public selectedItem: any;

  // Input placeholder
  @Input() placeholder: string = "Select a value";
  // Attribute for "Value" within collection array objects
  @Input() valueAttr: string;
  // Attribute for "Label" within collection array objects
  @Input() labelAttr: string;

  // Array of objects that will be selected from
  _collection: any[];
  get collection(): any[] {
    return this._collection;
  }
  @Input('collection')
  set collection(value: any[]) {
    this._collection = value;
    this.putSelectedValueAsFirst();
  }

  // the method set in registerOnChange, it is just 
  // a placeholder for a method that takes one parameter, 
  // we use it to emit changes back to the form
  private _propagateChange = (_: any) => { };

  constructor(
    public platform: Platform,
    private _popoverCtrl: PopoverController
  ) { }

  /**
   * When component clicked
   */
  async onClick(event) {
    let selectPage = await this._popoverCtrl.create({
      component: SelectSearchPage,
      event: this.platform.is('mobile')? null: event,//open as full screen on mobile 
      componentProps: {
        collection: this.collection,
        valueAttr: this.valueAttr,
        labelAttr: this.labelAttr
      }
    });
    selectPage.present();

    const { data } = await selectPage.onDidDismiss();

    if (data) {
      this.value = data[this.valueAttr];
      this.selectedItem = data;
    }
  }

  /**
   * Update the collection and place the selected "value" as first item
   */
  putSelectedValueAsFirst() {
    if (!this.collection || !this.value) return;

    for (var i = 0; i < this.collection.length; i++) {
      if (this.collection[i][this.valueAttr] === this.value) {
        this.selectedItem = this.collection[i]; // sets as the selected item
        var removedItem = this.collection.splice(i, 1);   // removes the item
        this.collection.unshift(removedItem[0]);         // adds it back to the beginning
        break;
      }
    }
    // Matching item wasn't found. Array is unchanged, but you could do something
    // else here if you wish (like an error message).
  }


  /**
   * Getter for Value
   */
  get value() {
    return this._value;
  }
  /**
   * Setter for Value
   */
  set value(val) {
    this._value = val;
    this.putSelectedValueAsFirst();
    // Notify of changes
    this._propagateChange(this._value);
  }

  /**
   * ControlValueAccessor interface methods
   * - They allow this component to be used as a form element (with validation and ngModel)
   */

  /**
   * Called on form Init / Update
   * @param {*} obj
   */
  writeValue(obj: any) {
    if (obj) {
      this.value = obj;
    }
  }

  /**
   * Propogate change on change, notify outside world of changes
   * @param {any} fn
   */
  registerOnChange(fn) {
    this._propagateChange = fn;
  }

  /**
   * Called on touch/ element blur
   */
  registerOnTouched() { }


}
