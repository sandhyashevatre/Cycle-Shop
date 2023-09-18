import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class CycleService {

  constructor(private _http:HttpClient)
{}

getCycles()
{
  return this._http.get('http://localhost:8080/api/cycles');
}

getBorrowedCycles()
{
  return this._http.get('http://localhost:8080/api/cycles/borrowed')
}

borrowCycles(cycleId: number) {

  const apiUrl = `http://localhost:8080/api/cycles/borrow/${cycleId}`;

  return this._http.post(apiUrl, {});

}

returnCycles(cycleId: number)
{
  const apiUrl = `http://localhost:8080/api/cycles/return/${cycleId}`;
  return this._http.post(apiUrl, {});
}

addCycle(newCycle: any): Observable<any> {
  const apiUrl = 'http://localhost:8080/api/cycles/add'; // Define the API URL for adding a cycle

  // Send a POST request to the API with the newCycle data
  return this._http.put(apiUrl, newCycle);
}


}
