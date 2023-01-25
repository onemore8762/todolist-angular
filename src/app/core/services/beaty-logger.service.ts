import { Injectable } from '@angular/core'
import { logType } from '../models/core.model'

@Injectable()
export class BeatyLoggerService {
  log(message: string, type: logType) {
    console.log(`%c${message}`, this.getType(type))
  }
  getType(type: logType) {
    switch (type) {
      case 'success':
        return 'background: green; color: white;'
      case 'info':
        return 'background: blue; color: white;'
      case 'error':
        return 'background: red; color: white;'
      case 'warning':
        return 'background: orange; color: black;'

      default:
        return ''
    }
  }
}
