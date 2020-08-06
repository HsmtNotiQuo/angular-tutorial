import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      firstname: ['Sample', Validators.required],
      lastname: ['Name', Validators.required],
      address: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        zip: ['', Validators.minLength(7)]
      }),
      aliases: this.fb.array([
        this.fb.control('')
      ])
    });
  }

  ngOnInit(): void {
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstname: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
}
