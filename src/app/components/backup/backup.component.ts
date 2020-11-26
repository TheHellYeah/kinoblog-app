import {Component, OnInit} from '@angular/core';
import {AdminService} from '../../service/admin.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-backup',
  templateUrl: './backup.component.html',
  styleUrls: ['./backup.component.css']
})
export class BackupComponent implements OnInit {
  backups: string[];
  isAvailable = true;
  backupForm = new FormGroup({
    backup: new FormControl()
  });

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
    console.log(this.backupForm.value);
    this.adminService.restore(this.backupForm).subscribe();
  }
}
