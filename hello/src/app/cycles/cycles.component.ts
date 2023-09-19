import { Component } from '@angular/core';
import { CycleService } from '../app.service';



@Component({
  selector: 'app-cycles',
  templateUrl: './cycles.component.html',
  styleUrls: ['./cycles.component.scss']
})
export class CyclesComponent {
  // cycleService: any;
  cycles: any;
  showCycles: boolean = false;
  constructor( private cycleService :CycleService){}

  ngOnInit() {
    this.cycleService.getCycles().subscribe((res: any) => {
      this.cycles = res;
    });
  }

  
  toggleDataVisibility() {
    this.showCycles = !this.showCycles;
  }

  borrowCycle(id: number) {


    this.cycleService.borrowCycles(id).subscribe(

      (response: any) => {

        console.log('PUT request successful:', response);
        this.ngOnInit();
      },

         );
  
  }
}
