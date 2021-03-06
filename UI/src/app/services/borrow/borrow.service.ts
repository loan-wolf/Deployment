import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BorrowService {

  baseUrl = 'http://40.121.211.35:5000/api/';
  constructor(private http: HttpClient) {

  }

  createLoan(_data: any) {
    return this.http.post(this.baseUrl + 'applyloan', _data).toPromise().then((contract) => {
      console.log("This is", contract);
    });
  }

  async getAllLoans(erc20address: any) {
    return await this.http.get(this.baseUrl + 'getloans/' + erc20address).toPromise().then((contract) => {
      console.log("Getting all the loans", contract);
      return contract;
    });

  }

  async getLoan(loanid: any) {
    return await this.http.get(this.baseUrl + 'getloansdetails/' + loanid).toPromise().then((contract) => {
      return contract;
    });
  }

  async getUnApprovedLoans() {
    return await this.http.get(this.baseUrl + 'getloanunapproved').toPromise().then((contract) => {
      return contract;
    });
  }

  async updateLoanStatus(loanId: any) {
    return await this.http.put(this.baseUrl + 'updateloan', {
      loanid: loanId,
      isapproved: "processed"
    }).toPromise().then((contract) => {
      console.log("The contract", contract);
    });
  }


}
