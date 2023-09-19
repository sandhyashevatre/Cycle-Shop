import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CycleService } from '../app.service';


@Component({
  selector: 'app-borrowed-cycles',
  templateUrl: './borrowed-cycles.component.html',
  styleUrls: ['./borrowed-cycles.component.scss']
})
export class BorrowedCyclesComponent {
  cycles: any;
  showBorrowedCycles: boolean = false;
  constructor(private cycleService: CycleService){}

  ngOnInit() {
    this.cycleService.getBorrowedCycles().subscribe((res: any) => {
      this.cycles = res;
    });

    
}

toggleBorrowedCyclesVisibility() {
  this.showBorrowedCycles = !this.showBorrowedCycles;
}

returnCycle(id:number)
  {
    // console.log(id);
    this.cycleService.returnCycles(id).subscribe
    (
      (Response:any) =>
      {
        console.log('push',Response);
        this.ngOnInit();
      },
    );


  }

}
