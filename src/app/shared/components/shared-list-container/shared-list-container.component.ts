import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fin-ex-shared-list-container',
  templateUrl: './shared-list-container.component.html',
  styleUrls: ['./shared-list-container.component.css']
})

export class SharedListContainerComponent implements OnInit {

  @Input()
  title: string = ""

  @Input()
  listHeader: string[] = []

  @Input()
  listItems: any[] = []

  @Input()
  listKeys: string[] = []

  @Output()
  deleteEvent: EventEmitter<number> = new EventEmitter()


  constructor() { }

  deleteItem(item: any) {
    this.deleteEvent.emit(item.id)
  }

  ngOnInit(): void {
  }

}
