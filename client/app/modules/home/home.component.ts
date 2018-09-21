import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthToken } from './../../services/auth/auth.token';
import { ModalDirective } from 'ng2-bootstrap/ng2-bootstrap';
import { ConfirmModalComponent } from 'app/shared/modals/confirm-modal/confirm-modal.component';
import { TableComponent } from 'app/shared/components/table/table.component';

declare const L;

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    token: string;
    tableheader: String[];
    data: String[][];
    map: any;

    @ViewChild(ConfirmModalComponent)
    confirmModal: ConfirmModalComponent;

    constructor(
        private authToken: AuthToken) { }

    ngOnInit() {
        this.token = this.authToken.getToken();
        this.tableheader = ['No', 'Name', 'Type', 'Description'];
        this.data = [
            ['A', 'SampleA', 'TypeA', 'DescA'],
            ['B', 'SampleB', 'TypeB', 'DescB'],
            ['C', 'SampleC', 'TypeC', 'DescC'],
        ];
        this.map = L.map('map').setView([36.3219088, 139.0032936], 14);
        console.dir(this.map);
        //OSMレイヤー追加
        L.tileLayer(
            'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            {
                attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>',
                maxZoom: 18
            }
        ).addTo(this.map);
    }
    onClick(type) {
        if (type === 'error') {
            this.confirmModal.error('Sample Title', 'Sample Body', 'Yes', 'No');
        } else if (type === 'warn') {
            this.confirmModal.warn('Sample Title', 'Sample Body', 'Yes', 'No');
        } else if (type === 'info') {
            this.confirmModal.info('Sample Title', 'Sample Body', 'Yes', 'No');
        } else if (type === 'success') {
            this.confirmModal.success('Sample Title', 'Sample Body', 'Yes', 'No');
        } else {
            this.confirmModal.open('Sample Title', 'Sample Body', 'Yes', 'No');
        }
    }
    hideProfile(hide: boolean): void {
        console.log('Profile is hidden');
    }
}
