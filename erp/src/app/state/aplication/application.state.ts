import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { CloseMenu, Edited, HidenLoader, OpenMenu, ResetEdited, ShowLoader, ToggleSectionActionStatus, ToggleSectionFilterStatus } from './application.actions';
import { patch } from '@ngxs/store/operators';

export enum EditedStatus {
  notEdited, edited
}

export enum MenuStatus {
  opened, closed
}

export enum SectionStatus {
  opened, closed
}

export enum LoaderStatus {
  visible, hiden
}

export interface FilterItem {
  id: number;
  title: string;
  name?: string;
  quantity?: number;
}

export interface ApplicationStateModel {
  loaderStatus: LoaderStatus;
  editedStatus: EditedStatus;
  menuStatus: MenuStatus;
  sectionAction: SectionStatus,
  sectionFilter: SectionStatus,
  sectionModal: SectionStatus,

  selectedFilter: FilterItem[]
}

export type stateContext = StateContext<ApplicationStateModel>;

@State<ApplicationStateModel>({
  name: 'ApplicationState',
  defaults: {
    loaderStatus: LoaderStatus.hiden,
    editedStatus: EditedStatus.edited,
    menuStatus: MenuStatus.closed,
    sectionAction: SectionStatus.opened,
    sectionFilter: SectionStatus.opened,
    sectionModal: SectionStatus.closed,
    selectedFilter: [
      {id:1, title:'Marka:', quantity: 10},
      {id:2, title:'Rodzaj Marki:', name: 'Romet'},
      {id:3, title:'Atrybut: Kolor:', quantity: 5},
    ]
  }
})
@Injectable()
export class ApplicationState {

  @Action(Edited)
  public async edited({ setState }: stateContext) : Promise<void> {
    setState(patch({editedStatus: EditedStatus.edited}));
  }

  @Action(ResetEdited)
  public async resetEdited({ setState }: stateContext) : Promise<void> {
    setState(patch({editedStatus: EditedStatus.notEdited}));
  }

  @Action(OpenMenu)
  public async openMenu({ setState }: stateContext) : Promise<void> {
    setState(patch({menuStatus: MenuStatus.opened}));
  }

  @Action(CloseMenu)
  public async CloseMenu({ setState }: stateContext) : Promise<void> {
    setState(patch({menuStatus: MenuStatus.closed}));
  }

  @Action(ShowLoader)
  public async showLoader({ setState }: stateContext) : Promise<void> {
    setState(patch({loaderStatus: LoaderStatus.visible}));
  }

  @Action(HidenLoader)
  public async hidenLoader({ setState }: stateContext) : Promise<void> {
    setState(patch({loaderStatus: LoaderStatus.hiden}));
  }

  @Action(ToggleSectionFilterStatus)
  public async toggleSectionFilterStatus({ setState, getState }: stateContext) : Promise<void> {
    setState(patch({sectionFilter: getState().sectionFilter == SectionStatus.opened ? SectionStatus.closed : SectionStatus.opened }));
  }

  @Action(ToggleSectionActionStatus)
  public async toggleSectionActionStatus({ setState, getState }: stateContext) : Promise<void> {
    setState(patch({sectionAction: getState().sectionAction == SectionStatus.opened ? SectionStatus.closed : SectionStatus.opened }));
  }
}