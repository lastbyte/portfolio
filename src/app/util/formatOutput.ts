import {Constants} from '../constants/constants';
import {Home} from '../models/home';
import {Education} from '../models/education';
import {Experience} from '../models/experience';
import {Skills} from '../models/skills';
import {Projects} from '../models/projects';

export class FormatOutput {

  public static formatOutput(command: string, output: any) {
    switch (command) {
      case Constants.HOME :
        return this.formatHomeOutput(output);
      case Constants.EDUCATION :
        return this.formatEducationOutput(output);
      case Constants.EXPERIENCE :
        return this.formatExperienceOutput(output);
      case Constants.SKILLS :
        return this.formatSkillsOutput(output);
      case Constants.PROJECTS :
        return this.formatProjectsOutput(output);
      case Constants.CONTACTS :
        return this.formatContactsOutput(output);
      case Constants.HELP :
        return this.formatHelpOutput();
      case Constants.TIME :
        return this.formatTimeOutput(output);
      default :
        return command;

    }
  }

  private static formatHomeOutput(output: Home) {
    let response = '';
    if (output.about.name !== '')
      response = response.concat('<div class="prompt"> Name  :  <span>' +  output.about.name + '</span></div>');
    if (output.about.email !== '') {
      response = response.concat('<div class="prompt"> Email : ' +
        '<a  target="_blank"   href=mailto:' + output.about.email + '> ' + output.about.email + '</a></div>');
    }
    if (output.about.github !== '') {
      response = response.concat('<div class="prompt"> Github : ' +
        '<a  target="_blank" href=' + output.about.github + '> ' + output.about.github  + '</a></div>');
    }
    if (output.about.linkedin !== '') {
      response = response.concat('<div class="prompt"> LinkedIn : ' +
        '<a  target="_blank" href=' + output.about.linkedin + '> ' + output.about.linkedin  + '</a></div>');
    }
    if (output.about.facebook !== '') {
      response = response.concat('<div class="prompt"> Facebook : ' +
        '<a  target="_blank" href=' + output.about.facebook + '> ' + output.about.facebook  + '</a></div>');
    }
    if (output.about.description !== '') {
      response = response.concat('<div class="prompt"> Description : <span>' +  output.about.description + '</span></div>');
    }
    console.log(response);
    return response;
  }

  private static formatEducationOutput(output: Education[]) {
    let response = '';
    output.forEach( education => {
      if (education.institute !== '') {
        response = response.concat('<div class="prompt">  Name : <span> ' + education.institute + '</span></div>');
      }
      if (education.degree !== '') {
      response = response.concat('<div class="prompt">  Degree : <span> ' + education.degree + '</span></div>');
      }
      if (education.major !== '') {
        response = response.concat('<div class="prompt">  Major : <span> ' + education.major + '</span></div>');
      }
      if (education.minor !== '') {
        response = response.concat('<div class="prompt">  Minor : <span> ' + education.minor + '</span></div>');
      }
      response = response.concat('<div class="prompt">  Duration : <span> ' + education.start + ' - ' + education.end + '</span></div>');
      if (education.score !== '') {
      response = response.concat('<div class="prompt">  Score : <span> ' + education.score + '</span></div>');
      }
      response = response.concat('<div class="prompt"><hr></div>');
    });
    console.log(response);
    return response;
  }

  private static formatExperienceOutput(output: Experience[]) {
    let response = '';
    output.forEach( experience => {
      if (experience.company !== '') {
        response = response.concat('<div class="prompt">  Name : <span> ' + experience.company + '</span></div>');
      }
      if (experience.role !== '') {
        response = response.concat('<div class="prompt">  Role : <span> ' + experience.role + '</span></div>');
      }
      response = response.concat('<div class="prompt">  Duration : <span> ' + experience.start + ' - ' + experience.end + '</span></div>');
      if (experience.description.length > 0 ) {
        response = response.concat('<div class="prompt">  Description : <ul>');
        experience.description.forEach( exp => {
          response = response.concat('<li> ' + exp + '</li>');
        });
        response = response.concat('</ul></div>');
      }
      response = response.concat('<div class="prompt"><hr></div>');
    });
    console.log(response);
    return response;
  }

  private static formatSkillsOutput(output: Skills) {
    let response = '';
    response = response.concat('<div class="skills-wrapper">');
    if (output.programming.languages.length > 0) {
      response = response.concat('<div>');
      response = response.concat('<div class="heading"><samp>Languages</samp></div>');
      response = response.concat('<table class="table"><tbody>');
      output.programming.languages.forEach( language => {
        response = response.concat('<tr>');
        response = response.concat('<td>' + language.name + '</td>');
        response = response.concat('<td>' + '* '.repeat(language.level) + '</td>');
        response = response.concat('</tr>');
      });
      response = response.concat('</tbody></table>');
      response = response.concat('</div>');
    }
    if (output.programming.frameworks.length > 0) {
      response = response.concat('<div>');
      response = response.concat('<div class="heading"><samp>Frameworks</samp></div>');
      response = response.concat('<table class="table"><tbody>');
      output.programming.frameworks.forEach( framework => {
        response = response.concat('<tr>');
        response = response.concat('<td>' + framework.name + '</td>');
        response = response.concat('<td>' + '* '.repeat(framework.level) + '</td>');
        response = response.concat('</tr>');
      });
      response = response.concat('</tbody></table>');
      response = response.concat('</div>');
    }
    response = response.concat('</div>');
    console.log(response);
    return response;
  }

  private static formatProjectsOutput(output: Projects[]) {
    let response = '';
    output.forEach( project => {
      if (project.name !== '') {
        response = response.concat('<div class="prompt">  Name : <span> ' + project.name + '</span></div>');
      }
      if (project.url !== '') {
        response = response.concat('<div class="prompt">  URL : <span> ' + project.url + '</span></div>');
      }
      if (project.description !== '') {
        response = response.concat('<div class="prompt">  Description : <span> ' + project.description + '</span></div>');
      }
      if (project.contributors.length > 0) {
        response = response.concat('<div class="prompt">');
        project.contributors.forEach( contributor => {
          response = response.concat('<span>' + contributor + '</span>');
        });
        response = response.concat('</div>');
        response = response.concat('<div class="prompt"><hr></div>');
      }
    });
    console.log(response);
    return response;
  }

  private static formatContactsOutput(output: Home) {
    return output.about.phone;
  }

  private static formatHelpOutput() {
    return 'help';
  }

  private static formatTimeOutput(output: any) {
    return output.toString();
  }
}
