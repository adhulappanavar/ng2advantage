import { Component, Input } from '@angular/core'

@Component({
  selector: 'patient-thumbnail',
  template: `
    <div class="well hoverwell thumbnail">
      <h2>{{patient?.name}}</h2>
      <div>DOB: {{patient?.dob}}</div>
      <div>
        Gender: {{event?.gender}}
      </div>
      <div *ngIf="event?.photoUrl">
        Online URL: {{event?.photoUrl}}
      </div>
    </div>
  `,
  styles: [`
    .thumbnail { min-height: 210px; }
    .pad-left { margin-left: 10px; }
    .well div { color: #bbb; }
  `]
})
export class PatientThumbnailComponent {
  @Input() patient:any

}