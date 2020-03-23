import {EventEmitter, Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Constants} from '../constants/constants';
import {Data} from '../models/data';
import {Home} from '../models/home';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  navigationEventEmitter = new EventEmitter();
  subVar: Subscription;
  private data: Data;

  constructor(private httpClient: HttpClient) {
    this.getJSON().subscribe( res => {
      console.log(res);
      this.data = res;
    });
  }

  public getJSON(): Observable<any> {
    return this.httpClient.get('https://raw.githubusercontent.com/knp069/portfolio/master/src/assets/data.json');
  }

  private getBanner = () => this.data.home;

  private getExperienceData = () => this.data.experience;

  private getEducationData = () => this.data.education;

  private getSkillsData = () => this.data.skills;

  private getProjectsData = () => this.data.projects;

  private getContactMeData = () => this.data.home;

  public emitNavigationEvent(param) {
    this.navigationEventEmitter.emit(param);
  }

  getCommandOutput(command: string) {
    switch (command) {
      case Constants.HOME :
        return this.getBanner();
      case Constants.EXPERIENCE :
        return this.getExperienceData();
      case Constants.EDUCATION :
        return this.getEducationData();
      case Constants.SKILLS :
        return this.getSkillsData();
      case Constants.PROJECTS :
        return this.getProjectsData();
      case Constants.TIME :
        return new Date();
      default :
        return command;
    }
  }
}
