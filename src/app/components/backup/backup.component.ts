import {Component, OnInit} from '@angular/core';
import {AdminService} from '../../service/admin.service';

@Component({
  selector: 'app-backup',
  templateUrl: './backup.component.html',
  styleUrls: ['./backup.component.css']
})
export class BackupComponent implements OnInit {
  backups: string[];
  isAvailable = true;

  constructor(private adminService: AdminService) {
  }

  ngOnInit(): void {
    this.adminService.loadBackups().subscribe(data => {
      this.backups = data;
    }, error => {
      this.isAvailable = false;
    });
  }

  onSubmit(): void {
    this.adminService.restore(this.backups[0]); // TODO
  }
}
