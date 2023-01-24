import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment.development'

export interface ProfileResponse {
  aboutMe?: string
  contacts: Contacts
  lookingForAJob: boolean
  lookingForAJobDescription?: string
  fullName: string
  userId: number
  photos: {
    small?: string
    large?: string
  }
}

interface Contacts {
  facebook?: any
  website?: any
  vk?: any
  twitter?: any
  instagram?: any
  youtube?: any
  github?: any
  mainLink?: any
}

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}
  getProfile(userId: number) {
    return this.http.get<ProfileResponse>(`${environment.baseNetworkUrl}/profile/${userId}`)
  }
}
