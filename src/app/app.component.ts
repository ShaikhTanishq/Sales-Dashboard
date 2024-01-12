import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  //  animations: [
  //  trigger('flipState', [
  //      state('front', style({
  //      transform: 'rotateY(0deg)',
  //  })),
  //state('back', style({
  //  transform: 'rotateY(180deg)',
  //})),
  //transition('front <=> back', animate('0.6s ease-out')),
  //]),
  //],
})
export class AppComponent {
  title = 'task6';
  //progressValue =  50; // Initial progress value
  isFlipped: boolean = false;

  inputValues = {
    progressValue: 20,
    card: 'My Card',
    debitCard: 'Debit Card',
    industry: 'Trimmerman Industries',
    cardNo: '123-456-7890',
    amount: '$6,750.00',
    cardName: 'Jamie Chastain',
    cardType: 'Master Card',
    profileName: 'Jamie Chastain',
    profilePost: 'Priority Member',
    estmtAmtTxt: 'Estimate amount for this month:',
    estmtAmt: '$7,500.00',
    spendingStats: 'Spending Statistics',
    dailyTrans: 'Daily Transaction Limits',
    percent: '50%',
    limitVal: 'Limits',
    spendings: '$3,375.00 spent of $6,750.00',
    latestActivityTop: 'Latest Activity',
    receivedName: 'Noah Schumacher',
    receivedTimestamp: '20 December 2023-11.45',
    statusReceived: 'Received',
    receivedAmt: '$125.00',
    paymentName: 'Football',
    paymentTimestamp: '23 December 2023-10.30',
    paymentReceived: 'Payment',
    paymentAmt: '-$70.00',
    sendAgain: 'Send Again',
    sendAgainProf1: 'Aaron Loeb',
    sendAgainProf2: 'Benjamin Shah',
  };

  dashboardBtn() {
    console.log('Dashboard Button Was clicked');
  }

  statisticsBtn() {
    console.log('Statistics Button Was clicked');
  }

  reportBtn() {
    console.log('Report Button Was clicked');
  }

  accountBtn() {
    console.log('Account Button Was clicked');
  }

  notificationBtn() {
    console.log('Notification Button Was clicked');
  }

  settingBtn() {
    console.log('Setting Button Was clicked');
  }

  languageBtn() {
    console.log('Language Button Was clicked');
  }

  logoutBtn() {
    console.log('Logout Button Was clicked');
  }

  searchBtn() {
    console.log('Search Button Was clicked');
  }

  addCartBtn() {
    console.log('Add Cart Button Was clicked');
  }

  copyBtn() {
    console.log('Copy Button Was clicked');
  }

  latestActivityviewMoreBtn() {
    console.log('View More Button Was clicked');
  }

  profNotiBtn() {
    console.log('Notification Button Was clicked');
  }

  msgBtn() {
    console.log('Message Button Was clicked');
  }

  downloadReportBtn() {
    console.log('Download Report Button Was clicked');
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'abc.net/files/test.ino');
    link.setAttribute('download', `products.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  etmtAmtViewMoreBTn() {
    console.log('View More Button Was clicked');
    this.isFlipped = !this.isFlipped;
  }

  sndAgainViewMoreBTn() {
    console.log('View More Button Was clicked');
  }
}
