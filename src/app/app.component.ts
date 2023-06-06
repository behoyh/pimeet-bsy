import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';

import { ZoomMtg } from '@zoomus/websdk';
import { MeetingInfo } from '@zoomus/websdk/embedded';

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

  authEndpoint = 'https://pizookie.herokuapp.com/'
  sdkKey = 'Uaty1iKCQAyoJElAMLZhRQ'
  meetingNumber = '9710749598'
  passWord = 'aw4cjK'
  role = 0
  userName = 'beshoy'
  userEmail = ''
  registrantToken = ''
  zakToken = ''
  leaveUrl = 'http://localhost:4200'

  meetings = []

  constructor(public httpClient: HttpClient, @Inject(DOCUMENT) document) {

  }

  ngOnInit() {
    this.getCalendar()
  }

  getCalendar() {
    debugger;
    this.httpClient.get("http://localhost:4000/meetings").toPromise().then((data: any) => { 
      debugger;
      for (var meeting in data.meetings) {
        debugger;
        this.meetings.push(meeting)
        this.getSignature()
        //if meeting.
      }
    },() => alert("please visit localhost:4000 to authenticate."));
  }

  getSignature() {
    this.httpClient.post(this.authEndpoint, {
	    meetingNumber: this.meetingNumber,
	    role: this.role
    }).toPromise().then((data: any) => {
      if(data.signature) {
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
}
