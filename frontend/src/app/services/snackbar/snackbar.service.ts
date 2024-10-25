import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private _snackBar: MatSnackBar) {}

  opensnackbar(message: any, action: string = 'done') {
    this._snackBar.open(message, action, {
      duration: 2000,
      verticalPosition: 'top',
    });
  }
}
