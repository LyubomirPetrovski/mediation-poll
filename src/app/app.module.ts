import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { PanelModule } from 'primeng/components/panel/panel';
import { ButtonModule } from 'primeng/components/button/button';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { AutoCompleteModule } from 'primeng/components/autocomplete/autocomplete';
import {SpinnerModule} from 'primeng/components/spinner/spinner';
import {CheckboxModule} from 'primeng/components/checkbox/checkbox';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CaptchaModule} from 'primeng/captcha';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layout/layout.module';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { CalendarModule } from 'primeng/calendar';
import { ContextMenuModule } from 'primeng/contextmenu';
import { MessageModule } from 'primeng/message';
import { TabViewModule } from 'primeng/components/tabview/tabview';
import { ToastModule } from 'primeng/toast';

import { AppComponent } from './app.component';
import { CompanyInfoPollComponent } from './poll/company-info/company-info-poll.component';
import { AppSettingsService } from './shared/services/app-settings.service';
import { PollComponent } from './poll/poll.component';
import { EnumPipe } from './shared/pipes/enum.pipe';
import { PollService } from './shared/services/poll.service';
import { NkpdCountComponent } from './poll/nkpd-count/nkpd-count.component';
import { NkpdCountListComponent } from './poll/nkpd-count-list/nkpd-count-list.component';
import { HomeComponent } from './home/home.component';
import { PollQuestionsComponent } from './poll/poll-questions/poll-questions.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './shared/services/auth.service';
import { StorageService } from './shared/services/storage.service';
import { NomService } from './poll/company-info/company-info.service';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { OpenPositionsComponent } from './company-profile/open-positions/open-positions.component';
import { CompanyService } from './shared/services/company.service';
import { MessageService } from 'primeng/api';
import { RegisterCompanyComponent } from './register-company/register-company.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { BasicAuthInterceptor } from './shared/interceptors/basic-auth.interceptor';
import { OpenPositionsReportComponent } from './admin/open-positions-report/open-positions-report.component';
import { ReportsService } from './shared/services/reports.service';
import { OpenPositionEditorComponent } from './company-profile/open-position-editor/open-position-editor.component';
import { CaptchaService } from './shared/services/captcha.service';

@NgModule({
  declarations: [
    AppComponent,
    CompanyInfoPollComponent,
    PollComponent,

    // Pipes
    EnumPipe,

    NkpdCountComponent,
    NkpdCountListComponent,
    HomeComponent,
    PollQuestionsComponent,
    LoginComponent,
    CompanyProfileComponent,
    OpenPositionsComponent,
    RegisterCompanyComponent,
    ChangePasswordComponent,
    OpenPositionsReportComponent,
    OpenPositionEditorComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    AppRoutingModule,
    LayoutModule,

    // PrimeNG
    PanelModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    DropdownModule,
    AutoCompleteModule,
    SpinnerModule,
    CheckboxModule,
    InputTextareaModule,
    CaptchaModule,
    TableModule,
    MultiSelectModule,
    CalendarModule,
    ContextMenuModule,
    MessageModule,
    TabViewModule,
    ToastModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },

    MessageService,

    AppSettingsService,
    NomService,
    PollService,
    AuthService,
    StorageService,
    CompanyService,
    ReportsService,
    CaptchaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
