import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { ProfileResponse, ProfileService } from '../../services/profile.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'todolist-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService,
    private router: Router
  ) {}
  profile$!: Observable<ProfileResponse>

  ngOnInit() {
    const userId = Number(this.route.snapshot.paramMap.get('userId'))
    if (userId) {
      this.profile$ = this.profileService.getProfile(userId)
    }
  }

  backToUsersHandler() {
    this.router.navigate(['/users'])
  }
}
