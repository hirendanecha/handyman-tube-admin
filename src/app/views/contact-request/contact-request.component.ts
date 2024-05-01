import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { FilterComponent } from 'src/app/@shared/components/filter/filter.component';
import { Pagination } from 'src/app/@shared/interface/pagination';
import { AppointmentService } from 'src/app/services/appointment.service';
import { ToastService } from 'src/app/services/toast.service';
import { DeleteDialogComponent } from '../users/delete-confirmation-dialog/delete-dialog.component';
import * as moment from 'moment';

@Component({
  selector: 'app-contact-request',
  templateUrl: './contact-request.component.html',
  styleUrls: ['./contact-request.component.scss']
})
export class ContactRequestComponent {
  @ViewChild(FilterComponent) filterComponent: FilterComponent;

  activeTab = 1;
  appointmnetContactList: any = [];
  position = 'top-end';
  visible = false;
  percentage = 0;
  message = '';
  type = '';
  searchCtrl: '';
  pagination: Pagination = {
    activePage: 1,
    perPage: 15,
    totalItems: 0,
  };
  pageType = 'page';
  startDate: any;
  endDate: any;
  constructor(
    private appointmentService: AppointmentService,
    private router: Router,
    private modalService: NgbModal,
    private spinner: NgxSpinnerService,
    private toaster: ToastService
  ) {
  }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    this.getCommunities();
  }

  getCommunities(): void {
    this.spinner.show();
    this.appointmentService
      ?.getAppointmnets(
        this.pagination.activePage,
        this.pagination.perPage,
        this.searchCtrl,
        this.startDate,
        this.endDate
      )?.subscribe({
        next: (res: any) => {
          this.spinner.hide();
          if (res.data) {
            this.appointmnetContactList = res?.data;
            this.pagination.totalItems = res?.pagination?.totalItems;
            this.pagination.perPage = res?.pagination?.pageSize;
          }
        },
        error: (error) => {
          this.spinner.hide();
          console.log(error);
        },
      });
  }

  changeCommunityStatus(community, status): void {
    this.appointmentService
      .changeCommunityStatus(community.Id, community.profileId, status)
      .subscribe({
        next: (res) => {
          this.toaster.success(res.message);
          this.getCommunities();
        },
        error: (error) => {
          this.toaster.danger(error.message);
        },
      });
  }

  deleteCommunity(Id): void {
    const modalRef = this.modalService.open(DeleteDialogComponent, {
      centered: true,
    });
    modalRef.componentInstance.title = 'Page';
    modalRef.componentInstance.message =
      'Are you sure want to delete this page?';
    modalRef.result.then((res) => {
      if (res === 'success') {
        this.appointmentService.deleteCommunity(Id).subscribe({
          next: (res) => {
            this.toaster.success(res.message);
            modalRef.close();
            this.getCommunities();
          },
          error: (error) => {
            this.toaster.danger(error.message);
          },
        });
      }
    });
  }

  openCommunity(id: any): void {
    this.router.navigate([`pages/edit/${id}`]);
  }

  createCommunityAdmin(userId, communityId): void {
    const data = {
      userId: userId,
      communityId: communityId,
      isActive: 'Y',
      isAdmin: 'Y',
    };
    this.appointmentService.createCommunityAdminByMA(data).subscribe({
      next: (res: any) => {
        if (res) {
          return res;
        }
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  onPageChange(config: Pagination): void {
    this.pagination = config;
    this.getCommunities();
  }

  onVisibleChange(event: boolean) {
    this.visible = event;
    this.percentage = !this.visible ? 0 : this.percentage;
  }

  onTimerChange(event: number) {
    this.percentage = event * 25;
  }

  onSearch(): void {
    this.searchCtrl = this.filterComponent.searchCtrl.value;
    this.startDate = this.filterComponent.startDate;
    this.endDate = this.filterComponent.toDate;
    this.getCommunities();
  }

  displayLocalTime(utcDateTime: string): string {
    const localTime = moment.utc(utcDateTime).local();
    return localTime.format('hh:mm A');
  }
}
