import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModalService } from 'modal-popup-angular-18';
import { HomeComponent } from './home/home.component';
import {
  JsonReactiveComponentsComponent,
  JsonReactiveFormModule,
  ReactiveJsonFormsService,
} from 'json-reactive-material-form-angular-18';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    RouterModule,
    HomeComponent,
    JsonReactiveComponentsComponent,
    JsonReactiveFormModule,
  ],
  providers: [ModalService, ReactiveJsonFormsService],
})
export class AppComponent implements OnInit {
  constructor(
    public modal: ModalService,
    public form_service: ReactiveJsonFormsService
  ) {}

  ngOnInit() {
    this.form_service
      .buildForm(
        {
          name: {
            type: 'text',
            value: '',
            label: 'Your First Name',
            rules: {
              required: true,
            },
            placeholderText: '',
            maxLength: 6,
          },
          lastname: {
            type: 'SelectOption',
            value: '',
            label: 'Your Last Name',
            rules: {
              required: true,
            },
            items: ['helllo'],
          },
          address: {
            type: 'formGroup',
            value: '',
            label: 'Payment Terms',
            GroupLabel: ['adasdas'],
            AddNewRequried: true,
            rules: {
              required: false,
            },
            formArray: [
              [
                {
                  type: 'text',
                  value: '',
                  label: 'Your Last Name',
                  name: 'lastname2',
                  rules: {
                    required: true,
                  },
                  placeholderText: '',
                },
                {
                  type: 'text',
                  value: '',
                  label: 'Your Last Name',
                  name: 'lastname',
                  rules: {
                    required: true,
                  },
                  placeholderText: '',
                },
                {
                  type: 'text',
                  value: '',
                  label: 'Your Last Name',
                  name: 'lastname1',
                  rules: {
                    required: true,
                  },
                  placeholderText: '',
                },
              ],
            ],
          },
        },
        'newform'
      )
      .then((res: any) => {});
  }
}
