import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Http, Response, RequestOptionsArgs, RequestOptions, Headers } from '@angular/http';
import { SecretService } from '../secret/secret.service';

@Component({
    selector: 'contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})

export class ContactComponent {
    contactForm: FormGroup;
    form = false;
    success = false;
    alert = false;

    ngOnInit(){
        this.form = true;
        this.success = false;
        this.alert = false;
    }

    constructor(private _fb: FormBuilder,
        private http: Http,
        private _secret: SecretService) {
        this.contactForm = this._fb.group({
            name: new FormControl('', Validators.required),
            email: new FormControl('', Validators.required),
            message: new FormControl('', Validators.required)
        });
    }

    send(): void {
        if (this.contactForm.valid) {
            var data = ({
                message: this.buildMessage(),
            });
            this._secret.sendEmail(data);
            this.form = false;
            this.success = true;
        }
    }
    private buildMessage(): string {
        return 'name: ' + this.contactForm.value.name + '\n' +
            'email: ' + this.contactForm.value.email + '\n' +
            'message: ' + this.contactForm.value.message 
    }
}
