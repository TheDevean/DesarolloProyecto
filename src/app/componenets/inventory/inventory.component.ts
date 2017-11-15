import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../services/inventory/inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  items: Array<any>;

  item: { name: "", brand: "", provider: "", quantity: "", price: "" };
  action: string = "default";

  constructor(private inventoryService: InventoryService) { }


  ngOnInit() {
    this.onFind();
  }

  onSelect(item) {
    this.item = item;
  }

  onCreate() {
    this.item = { name: "", brand: "", provider: "", quantity: "", price: ""};
    this.action = "create";
  }

  onEdit(item) {
    this.item = item;
    this.action = "edit";
  }

  onFind() {
    this.inventoryService.find().subscribe((res: any) => {
      this.items = res.body;
    });
  }

  onSave(user) {
    if (this.action == "edit") {
      this.inventoryService.updateOne(user).subscribe((res: any) => {
        this.onFind();
      });
    }
    if (this.action == "create") {
      this.inventoryService.insertOne(user).subscribe((res: any) => {
        this.onFind();
      });
    }
  }

  onDelete(id) {
    this.inventoryService.deleteOne(id).subscribe((res: any) => {
      this.onFind();
    });
  }
}
