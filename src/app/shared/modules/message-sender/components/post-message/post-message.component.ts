import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../../../../../core/sevices/auth.service';
import { HomeService } from '../../../../../pages/home/home.service';
import { ProfileService } from '../../../../../pages/profile/profile.service';
import { PublicationService } from '../../../../../pages/shared/services/publication.service';

@Component({
  selector: 'app-register',
  templateUrl: './post-message.component.html',
  styleUrls: ['./post-message.component.css']
})
export class PostMessageComponent implements OnInit {

  constructor(private authService: AuthService,
              private publicationService: PublicationService,
              private homeService: HomeService,
              public dialogRef: MatDialogRef<PostMessageComponent>,
              private profileService:ProfileService) { }

  ngOnInit(): void {
  }

  onRegister(form:any){

    this.publicationService.create({
      ...form.value,
      idUser: this.authService.getUserId()
    }).subscribe( res => {
      this.homeService.setLoad(true);
      this.profileService.setLoad(true);
      this.dialogRef.close();
    })

  }

}