import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PfbService } from '../../services/pfb.service.';

@Component({
  selector: 'submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.less']
})
export class SubmitFormComponent {
  submitForm: FormGroup;
  resultOfExecution: any = null

  constructor(
    private fb: FormBuilder,
    private pdb: PfbService
    ) {
    this.submitForm = this.fb.group({
      scheme: ['http://', Validators.required],
      ip: ['', Validators.required],
      checkboxControl: [false],
      port: ['26659', Validators.required],
      message: ['', Validators.required],
      namespace_id: ['0c204d39600fddd3', Validators.required],
      gas_limit: [80000, Validators.required],
      fee: [2000, Validators.required]
    });
  }

  onSubmit() {
    this.pdb.submit(this.prepareParams()).subscribe(
      (res) => {
        this.resultOfExecution = res;
      },
      (error) => {
        this.resultOfExecution = error.error;
      });
  }

  prepareParams() {
    const url = `${this.submitForm.value.scheme}${this.submitForm.value.ip}:${this.submitForm.value.port}/submit_pfb`;
    const namespace_id = this.submitForm.value.namespace_id;
    const data = this.textToHex(this.submitForm.value.message);
    const gas_limit = this.submitForm.value.gas_limit;
    const fee = this.submitForm.value.fee;
    return  { url, payload: { namespace_id, data, gas_limit, fee }};
  }

  textToHex(text: string) {
    const encoder = new TextEncoder();
    const buffer = encoder.encode(text);
    const hexString = Array.from(
      new Uint8Array(buffer),
      (byte) => byte.toString(16)
        .padStart(2, "0"))
      .join("");
    return hexString;
  }
}
