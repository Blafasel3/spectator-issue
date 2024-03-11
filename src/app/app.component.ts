
import { ChangeDetectionStrategy, Component, EventEmitter, Input, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatMenuModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  
  @Input()
  disableButton: boolean = false;

  btnDisabled: boolean = true;
  btnText = 'Button disabled';

  emitter = new EventEmitter<void>;


  ngOnChanges(changes: SimpleChanges) {
    console.log(this.disableButton);
    this.btnDisabled = this.disableButton;
    this.btnText = this.disableButton ? 'Button disabled' : 'Button enabled';
  }

  onClick() {
    this.emitter.emit();
  }
}
