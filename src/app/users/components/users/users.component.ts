import { Component, OnInit } from '@angular/core'
import { UsersService } from '../../services/users.service'
import { Observable } from 'rxjs'
import { ActivatedRoute, Params, Router } from '@angular/router'
import { User } from '../../models/user.model'

@Component({
  selector: 'todolist-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users$!: Observable<User[]>

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.getUsers(params['page'] ? params['page'] : 1)
    })
  }
  getUsers(page: number) {
    this.users$ = this.usersService.getUsers(page)
  }
  nextUsersHandler() {
    const page = Number(this.route.snapshot.queryParamMap.get('page'))
    const nextPage = page ? page + 1 : 2
    // 1 variant
    // this.router.navigateByUrl(`/users?page=${nextPage}`).then(() => this.getUsers(nextPage))

    this.router.navigate(['/users'], {
      queryParams: {
        page: nextPage,
      },
    })
  }
}
