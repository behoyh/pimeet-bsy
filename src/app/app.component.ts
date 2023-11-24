import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TimeDate } from "./common/timedate"
import { ZoomMtg } from '@zoomus/websdk';
import { ZoomService } from './zoom.service';
import { ModalService } from './modal';
import { HotToastService } from '@ngneat/hot-toast';
import { CalendarEvent, CalendarView, CalendarEventTimesChangedEvent } from 'angular-calendar';

ZoomMtg.setZoomJSLib('https://source.zoom.us/2.13.0/lib', '/av');

ZoomMtg.preLoadWasm();
ZoomMtg.prepareWebSDK();
// loads language files, also passes any error messages to the ui
ZoomMtg.i18n.load('en-US');
ZoomMtg.i18n.reload('en-US');

import { HostListener } from '@angular/core';
import { zoommeeting } from './zoom.meeting';
import { Subscription, interval } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  isonline = navigator.onLine;
  isconnected = false;
  @HostListener('window:online', ['$event'])
  online(e: any) {
    this.isonline = true;
  }
  @HostListener('window:offline', ['$event'])
  offline(e: any) {
    this.isonline = false;
  }

  date = new Date();
  now: any;
  targetDate: any = new Date();
  targetTime: any = this.targetDate.getTime();
  difference: number;

  joined: boolean;

  authEndpoint = 'https://pizoom-hicsxm6moa-uc.a.run.app/'
  sdkKey = 'Uaty1iKCQAyoJElAMLZhRQ'
  meetingNumber = ''
  passWord = ''
  role = 1
  userName = ''
  userEmail = ''
  registrantToken = ''
  zakToken = ''
  leaveUrl = './'
  view: CalendarView = CalendarView.Day;

  viewDate: Date = new Date();

  events: CalendarEvent[] = [];

  countdown: any;

  @ViewChild('minutes', { static: true }) minutes: ElementRef;
  @ViewChild('seconds', { static: true }) seconds: ElementRef;

  async ngAfterViewInit() {
    this.date = new Date();
    this.isconnected = await this.checkOnlineStatus();
  }

  constructor(public httpClient: HttpClient, public zoomService: ZoomService, protected modalService: ModalService, private toastService: HotToastService) {

  }

  private updateSubscription: Subscription;
  ngOnInit() {
    const api = (<any>window).electronAPI;
    let meetings = [];
    if (localStorage.getItem('meetings')) {
      meetings = JSON.parse(localStorage.getItem('meetings'));
    }
    var i = meetings.length;
    while ((i--) > 0) {
      api.setMeeting(meetings[i]);
      meetings.splice(i, 1);
    }
    localStorage.setItem("meetings", JSON.stringify(meetings));

    this.updateSubscription = interval(5000).subscribe(
      async (val) => {
        this.isconnected = await this.checkOnlineStatus();
        this.getCalendar();
      }
    );
  }

  getCalendar() {
    this.httpClient.get("https://pizoom-hicsxm6moa-uc.a.run.app/token", { responseType: 'text' }).toPromise().then((token: any) => {
      this.modalService.close();
      this.httpClient.get("https://api.zoom.us/v2/users/me/meetings", { headers: { "Authorization": "Bearer " + token } }).toPromise().then((data: any) => {
        this.events = [];
        for (var i in data.meetings as zoommeeting[]) {
          let meetingInfo = data.meetings[i] as zoommeeting;
          let calEvent: CalendarEvent = {
            title: meetingInfo.topic + " " + meetingInfo.join_url,
            //color: new EventColor("blue"),
            start: new Date(meetingInfo.start_time),
            meta: {
              joinlink: meetingInfo.join_url,
            },
            color: {
              primary: '#1e90ff',
              secondary: '#D1E8FF',
            },
            resizable: {
              beforeStart: false,
              afterEnd: false,
            },
            draggable: false,
          };
          this.events = [...this.events, calEvent];
          if (TimeDate.withinHour(new Date(meetingInfo.start_time))) {
            this.zoomService.getMeeting(token, meetingInfo.id).subscribe((resp: any) => {
              if (resp != null) {
                this.passWord = resp.encrypted_password
                this.meetingNumber = resp.id
                this.userName = resp.host_email
              }

              const scope = this;
              //start countdown
              if (!scope.countdown) {
                scope.countdown = interval(1000).pipe(
                  scope.toastService.observe({
                    loading: 'Joining meeting...',
                    success: (val) => {
                      if (val >= 9) {
                        localStorage.setItem("meetings", JSON.stringify([meetingInfo.id]));
                        scope.countdown.unsubscribe();
                        return "Joined meeting";
                      }
                      return 'Ready to Start? Joining meeting... In ' + Math.abs(val - 9) + " seconds";
                    }
                  })
                ).subscribe();
              }
              interval(10000).subscribe(
                async (val) => {
                  if (!this.joined && this.meetingNumber) {
                    this.zoomService.getZAK(token).subscribe((resp: any) => {
                      this.zakToken = data.token;
                      this.getSignature();
                    });
                    this.joined = true;
                  }
                });
            });
          }
        }
      }, () => this.modalService.open('modal-2'));
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
    let subAudio = interval(2000).subscribe(
      async (val) => {
        let audiosearch = document.getElementsByClassName("join-audio-by-voip__join-btn");
        if (audiosearch.length > 0) {
          let ele = audiosearch[0] as HTMLElement;
          ele.click();
          await this.delay(1000);
          ele.click();
          await this.delay(1000);
          ele.click();
          subAudio.unsubscribe();
        }
      });
    let subVideo = interval(4000).subscribe(
      async (val) => {
        let videosearch = document.getElementsByClassName("send-video-container__btn");
        if (videosearch.length > 0) {
          let ele = videosearch[0] as HTMLElement;
          ele.click();
          await this.delay(1000);
          ele.click();
          await this.delay(1000);
          ele.click();
          subVideo.unsubscribe();
        }
      }
    )
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
          customerKey: '',
          tk: this.registrantToken,
          zak: this.zakToken,
          success: (success) => {
            console.log(success)
          },
          error: (error) => {
            console.log(error)
          }
        });
        let subJoin = interval(1000).subscribe(
          (val) => {
            let joinbtn = document.getElementById("join-btn");
            if (joinbtn) {
              let ele = joinbtn;
              ele.click();
              ele.click();
              document.getElementById("join-btn").click();
              document.getElementById("join-btn").click();
              subJoin.unsubscribe();
            }
          });
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.events = [...this.events];
  }

  async checkOnlineStatus() {
    try {
      const online = await fetch("https://google.com");
      return online.status >= 200 && online.status < 300; // either true or false
    } catch (err) {
      return false; // definitely offline
    }
  };
  async delay(ms) {
    // return await for better async stack trace support in case of errors.
    return await new Promise(resolve => setTimeout(resolve, ms));
  }

}

