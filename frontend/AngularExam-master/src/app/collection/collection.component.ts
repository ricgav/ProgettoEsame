import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})

export class CollectionComponent {
  @Input() navbutton!: string;
  @Output() nav: EventEmitter<string> = new EventEmitter<string>();
}
