import { Injectable, signal } from '@angular/core'

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  loading = signal<boolean>(false)
  showAvatarUploadDialog = signal<boolean>(false)
}
