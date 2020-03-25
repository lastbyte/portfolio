import {Component, HostListener, OnInit} from '@angular/core';
import {faAddressCard, faArchive, faBars, faBriefcase, faBullseye, faGraduationCap, faHome} from '@fortawesome/free-solid-svg-icons';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  homeIcon = faHome;
  educationIcon = faGraduationCap;
  experienceIcon = faBriefcase;
  projectsIcon = faArchive;
  skillsIcon = faBullseye;
  contactsIcon = faAddressCard;
  hamburgerIcon = faBars;
  isMenuCollapsed = true;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  updateTerminalMessage(param: string) {
    this.dataService.emitNavigationEvent(param);
  }

  toggleCollpsed() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    console.log(this.isMenuCollapsed);
  }
}
