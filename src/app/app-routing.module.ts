import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { LandingComponent } from './components/landing/landing.component';
import { PublicMediaBoardComponent } from './components/public-media-board/public-media-board.component';
import { PhotoDetailComponent } from './components/photo-detail/photo-detail.component';
import { ImageEditorComponent } from './components/image-editor/image-editor.component';
import { ImageEditorNewComponent } from './components/image-editor-new/image-editor-new.component';
import { AccountComponent } from './components/account/account.component';
import { CodeComponent } from './components/code/code.component';
import { FolderCreationComponent } from './components/folder-creation/folder-creation.component';
import { MusicComponent } from './components/music/music.component';
import { PhotosComponent } from './components/photos/photos.component';
import { TotalComponent } from './components/total/total.component';
import { UploadingComponent } from './components/uploading/uploading.component';
import { VideoComponent } from './components/video/video.component';
import { TrashComponent } from './components/trash/trash.component';
import { UpgradeAccountComponent } from './components/upgrade-account/upgrade-account.component';
const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'login', component: SigninComponent },
  { path: 'register', component: SignupComponent },
  // { path: 'profile', component: UserProfileComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'public-media-board', component: PublicMediaBoardComponent },
  { path: 'photo-detail', component: PhotoDetailComponent },
  { path: 'image-editor', component: ImageEditorComponent },
  { path: 'image-editor-new', component: ImageEditorNewComponent },
  { path: 'account', component: AccountComponent },
  { path: 'code/:path', component: CodeComponent },
  { path: 'folder-creation', component: FolderCreationComponent },
  { path: 'music/:path', component: MusicComponent },
  { path: 'photos/:path', component: PhotosComponent },
  { path: 'total', component: TotalComponent },
  { path: 'uploading', component: UploadingComponent },
  { path: 'video/:path', component: VideoComponent },
  { path: 'trash', component: TrashComponent },
  { path: 'total', component: TotalComponent },
  { path: 'photo-details', component: PhotoDetailComponent },
  { path: 'upgrade-account', component: UpgradeAccountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }