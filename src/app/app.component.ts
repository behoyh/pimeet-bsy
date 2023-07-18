import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';

import { ZoomMtg } from '@zoomus/websdk';
import { MeetingInfo } from '@zoomus/websdk/embedded';
import { CalendarEvent, CalendarView } from 'angular-calendar';

ZoomMtg.setZoomJSLib('https://source.zoom.us/2.13.0/lib', '/av');

ZoomMtg.preLoadWasm();
ZoomMtg.prepareWebSDK();
// loads language files, also passes any error messages to the ui
ZoomMtg.i18n.load('en-US');
ZoomMtg.i18n.reload('en-US');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  meetings = [];

  authEndpoint = 'https://pizoom-hicsxm6moa-uc.a.run.app/'
  sdkKey = 'Uaty1iKCQAyoJElAMLZhRQ'
  meetingNumber = '76436206665'
  passWord = 'tcnJ3hCwiMaLZv9PXWvAbKguLw97OD.1'
  role = 0
  userName = 'beshoy'
  userEmail = ''
  registrantToken = ''
  zakToken = ''
  leaveUrl = 'http://localhost:4200/'
  view: CalendarView = CalendarView.Day;

  viewDate: Date = new Date();

  events: CalendarEvent[] = [];

  constructor(public httpClient: HttpClient, @Inject(DOCUMENT) document) {

  }

  ngOnInit() {
    this.getCalendar();
  }

  getCalendar() {
    this.httpClient.get("https://pizoom-hicsxm6moa-uc.a.run.app/token", { responseType: 'text' }).toPromise().then((token: any) => {
      debugger;
      this.httpClient.get("https://api.zoom.us/v2/users/me/meetings", { headers: { "Authorization": "Bearer" + token } }).toPromise().then((data: any) => {
        debugger;
        for (var i in data.meetings) {
          debugger;
          this.meetings.push(data.meetings[i]);
          //this.getSignature()
          //if meeting.
        }
      }, () => alert("please visit https://pizoom-hicsxm6moa-uc.a.run.app/ to authenticate."));
    });
  }

  getSignature() {
    this.httpClient.post(this.authEndpoint, {
      meetingNumber: this.meetingNumber,
      role: this.role
    }).toPromise().then((data: any) => {
      if (data.signature) {
        console.log(data.signature)
        this.startMeeting(data.signature)
      } else {
        console.log(data)
      }
    }).catch((error) => {
      console.log(error)
    })
  }

  startMeeting(signature) {

    document.getElementById('zmmtg-root').style.display = 'block'

    ZoomMtg.init({
      leaveUrl: this.leaveUrl,
      success: (success) => {
        console.log(success)
        ZoomMtg.join({
          signature: signature,
          sdkKey: this.sdkKey,
          meetingNumber: this.meetingNumber,
          passWord: this.passWord,
          userName: this.userName,
          userEmail: this.userEmail,
          tk: this.registrantToken,
          zak: this.zakToken,
          success: (success) => {
            console.log(success)
          },
          error: (error) => {
            console.log(error)
          }
        })
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  date: any;
  now: any;
  targetDate: any = new Date();
  targetTime: any = this.targetDate.getTime();
  difference: number;

  @ViewChild('minutes', { static: true }) minutes: ElementRef;
  @ViewChild('seconds', { static: true }) seconds: ElementRef;

  ngAfterViewInit() {
    setInterval(() => {
      this.tickTock();
      this.difference = this.targetTime - this.now;
      this.difference = this.difference / (1000 * 60 * 60 * 24);
    }, 1000);
  }

  tickTock() {
    this.date = new Date();
    this.now = this.date.getTime();
    this.minutes.nativeElement.innerText = this.date.getMinutes() - 9;
    this.seconds.nativeElement.innerText = 60 - this.date.getSeconds();
  }
}
