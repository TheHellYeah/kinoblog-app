import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../service/admin.service';
import {User} from '../../model/user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users: User[];

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getAdminPage().subscribe(response => this.users = response);
  }

  appointToMod(id: bigint): void {
    this.adminService.appointToMod(id).subscribe();
  }

  appointToAdmin(id: bigint): void {
    this.adminService.appointToAdmin(id).subscribe();
  }

  dismiss(id: bigint): void {
    this.adminService.dismiss(id).subscribe();
  }
}
