import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BorrowService } from 'src/app/services/borrow/borrow.service';
import { LenderService } from 'src/app/services/lender/lender.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-borrow-detail',
  templateUrl: './borrow-detail.component.html',
  styleUrls: ['./borrow-detail.component.css']
})
export class BorrowDetailComponent implements OnInit {
  loanid: any;
  loanamount: any;
  duration: any;
  collateral: any;
  installmentinterval: any;
  installments: any;
  apr: any;
  score: any;
  repaidprincipal: any;
  outstandingprincipal: any;
  role: string | null;
  approvalStatus: any;
  lendererc20address:any;


  constructor(private borrowService: BorrowService, private route: ActivatedRoute, private router: Router, private lenderService: LenderService,private sharedService:SharedService) {
    this.sharedService.currentMessage.subscribe(address => (this.lendererc20address = address));
    this.loanid = this.route.snapshot.paramMap.get('loanid');
    this.role = this.route.snapshot.paramMap.get('role');
    this.borrowService.getLoan(this.loanid).then((val: any) => {
      this.loanamount = val.loanamount;
      this.duration = val.duration;
      this.collateral = val.collateraltoken;
      this.installmentinterval = val.installmentinterval;
      this.installments = val.installments;
      this.approvalStatus = val.isapproved;
    });
    this.apr = '10%';
    this.score = 10;
  }

  ngOnInit(): void {
  }

  updateApprovalStatus(loanId: any) {
    this.lenderService.updateLoanStatus(loanId).then((val: any) => {
      console.log("Status Update", val);
    });
    this.lenderService.saveLenderInfo(loanId,this.lendererc20address).then((val: any) => {
      console.log("Status Update", val);
    });
    this.router.navigate(['/ldashboard', this.lendererc20address]);
  }

}
