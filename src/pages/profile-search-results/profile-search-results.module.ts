import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileSearchResultsPage } from './profile-search-results';
import { SearchResultComponent } from '../../components/search-result/search-result';
import { RepositoriesComponent } from '../../components/repositories/repositories';

@NgModule({
  declarations: [
    ProfileSearchResultsPage,
    SearchResultComponent,
    RepositoriesComponent
  ],
  imports: [
    IonicPageModule.forChild(ProfileSearchResultsPage),
  ],
})
export class ProfileSearchResultsPageModule {}
