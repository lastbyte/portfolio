import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {DataService} from '../services/data.service';
import {Output} from '../models/output';
import {FormatOutput} from '../util/formatOutput';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit, AfterViewInit{

  private event;

  private activeElement;

  @ViewChild('command')
  private commandElement: ElementRef;

  outputContainer: Output;

  show = true;

  constructor(private dataService: DataService, private sanitizer: DomSanitizer) {
    this.activeElement = document.activeElement;
    this.outputContainer = new Output();
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.event = event;
    console.log( 'pressed key was ', this.event.key, this.event.code );
    if (this.event.code === 'Enter' && this.commandElement.nativeElement.value !== '') {
      this.runCommandAndDisplayOutput();
    }
    this.shiftFocusToInputBox(this.activeElement);
  }

  ngOnInit(): void {
    if (this.dataService.subVar === undefined) {
      this.dataService.subVar = this.dataService.navigationEventEmitter.subscribe( value => {
        this.commandElement.nativeElement.value = value.toLowerCase();
        this.outputContainer = this.getCommandOutput(value);
        this.clearCommandValue();
        this.shiftFocusToInputBox(this.activeElement);
        this.show = value === 'banner';
      });
    }
  }

  ngAfterViewInit(): void {
    this.shiftFocusToInputBox(this.activeElement);
  }

  public getCommandOutput(command) {
    const output: Output = new Output();
    output.prompt = 'root@nishant ~ ';
    output.command = command;
    output.result = this.sanitizer.bypassSecurityTrustHtml(this.dataService.getCommandOutput(command));
    return output;
  }

  private shiftFocusToInputBox(activeElement) {
    console.log('Current Active element is ', activeElement);
    if (this.commandElement !== undefined ) {
      console.log('command input box found');
      this.commandElement.nativeElement.focus();
      this.activeElement = this.commandElement;
    } else {
      console.log('command input box not found');
    }
    console.log('updated Active element to ', this.activeElement);
  }

  private clearCommandValue() {
    this.commandElement.nativeElement.value = '';
  }

  private runCommandAndDisplayOutput() {
    const value = this.commandElement.nativeElement.value.toLowerCase();
    console.log(value);
    if (value === 'banner') {
      this.outputContainer = new Output();
      this.show = true;
      this.clearCommandValue();
    } else {
      this.show = false;
      this.outputContainer = this.getCommandOutput(value);
      this.clearCommandValue();
    }
  }
}
