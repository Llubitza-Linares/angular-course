import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { TransactionsService } from './services/transactions.service';
import { WalletsService } from './services/wallets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'test';

  wallets:any[]= [];
  transactions:any[] = [];
  walletSubscription: Subscription;
  transactionsSubscription: Subscription;

  constructor(
    private walletsService: WalletsService,
    private transactionsService: TransactionsService
  ) {}

  ngOnInit() {
    this.getTransaction();
    this.getWallet();
  }

  getTransaction() {
    this.transactions = [];
    this.transactionsSubscription = this.transactionsService
      .getTransactions()
      .subscribe(res => {
        Object.entries(res).map((p: any) =>
          this.transactions.push({ id: p[0], ...p[1] })
        );
      });
  }

  getWallet() {
    this.wallets = [];
    this.walletSubscription = this.walletsService.getWallets().subscribe(res => {
      Object.entries(res).map((p: any) =>
        this.wallets.push({ id: p[0], ...p[1] })
      );
    });
  }

  mine() {}
}