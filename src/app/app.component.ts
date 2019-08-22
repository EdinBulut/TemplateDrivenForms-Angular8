import { EnrollmentService } from './enrollment.service';
import { User } from './user';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular', 'React', 'Vue'];
  topicHasError = true;
  submitted = false;
  errorMsg = '';

  userModel = new User ('', 'meho@test.com', 8737225883, 'default', 'morning', true);

  constructor( private enrollmentService: EnrollmentService) {}

  validateTopic(value) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  onSubmit(userForm) {
    // console.log(this.userModel);
    console.log(userForm);
    // this.submitted = true;
    // this.enrollmentService.enroll(this.userModel).
    // subscribe(
    //   data => console.log('Success!', data),
    //   error => this.errorMsg = error.statusText
    // );
  }
}
