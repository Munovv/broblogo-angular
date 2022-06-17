import { Injectable } from "@angular/core"
import Swal from "sweetalert2"

@Injectable({ providedIn: 'root' })

export class Message {

    public ShowError(message: string): void {
        Swal.fire({
            title: 'Error',
            background: '#222',
            icon: "error",
            color: "#eeeeee",
            text: message,
            showCancelButton: false,
            confirmButtonText: 'Закрыть',
        })
    }

    public ShowSuccess(message: string): void {
        Swal.fire({
            title: 'Success',
            background: '#222',
            icon: "success",
            color: "#eeeeee",
            text: message,
            showCancelButton: false,
            confirmButtonText: 'Закрыть',
        })
    }
}