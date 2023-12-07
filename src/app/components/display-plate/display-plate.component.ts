import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-plate',
  templateUrl: './display-plate.component.html',
  styleUrls: ['./display-plate.component.scss']
})
export class DisplayPlateComponent {
  @Input() public headerText = 'VanityPlate';
  @Input() public displayText = 'Testing';
  public imgSrc = 'assets/blank-plate.png';
  public plateLeft = 'assets/blank-plate-left-small.png';
  public plateMiddle = 'assets/blank-plate-middle-small.png';
  public plateRight = 'assets/blank-plate-right-small.png';
}
