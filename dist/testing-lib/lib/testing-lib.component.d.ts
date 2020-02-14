import { OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
export declare class TestingLibComponent implements OnInit {
    private dialog;
    constructor(dialog: MatDialog);
    ngOnInit(): void;
    openDialog(): void;
}
