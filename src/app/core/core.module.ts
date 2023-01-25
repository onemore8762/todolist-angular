import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AuthService } from './services/auth.service'
import { BeatyLoggerService } from './services/beaty-logger.service'

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [AuthService, BeatyLoggerService],
})
export class CoreModule {}
