import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
let UploadComponent = class UploadComponent {
    constructor(http) {
        this.http = http;
        this.images = [];
        this.myForm = new FormGroup({
            name: new FormControl('', [Validators.required, Validators.minLength(3)]),
            file: new FormControl('', [Validators.required]),
            fileSource: new FormControl('', [Validators.required])
        });
    }
    ngOnInit() {
        throw new Error("Method not implemented.");
    }
    get f() {
        return this.myForm.controls;
    }
    onFileChange(event) {
        if (event.target.files && event.target.files[0]) {
            var filesAmount = event.target.files.length;
            for (let i = 0; i < filesAmount; i++) {
                var reader = new FileReader();
                reader.onload = (event) => {
                    console.log(event.target.result);
                    this.images.push(event.target.result);
                    this.myForm.patchValue({
                        fileSource: this.images
                    });
                };
                reader.readAsDataURL(event.target.files[i]);
            }
        }
    }
    submit() {
        console.log(this.myForm.value);
        this.http.post('http://cinca-back-com-br.umbler.net/upload.php', this.myForm.value)
            .subscribe(res => {
            console.log(res);
            alert('Uploaded Successfully.');
        });
    }
};
UploadComponent = __decorate([
    Component({
        selector: 'app-upload',
        templateUrl: './upload.component.html',
        styleUrls: ['./upload.component.css']
    })
], UploadComponent);
export { UploadComponent };
//# sourceMappingURL=upload.component.js.map