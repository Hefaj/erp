import { Selector } from "@ngxs/store";
import { ApplicationState, ApplicationStateModel, EditedStatus, FilterItem, LoaderStatus, MenuStatus, SectionStatus } from "./application.state";

export class ApplicationSelector {
    @Selector([ApplicationState])
    public static getMenuStatus({menuStatus} : ApplicationStateModel) : MenuStatus {
      return menuStatus;
    }

    @Selector([ApplicationState])
    public static getEditedStatus({editedStatus} : ApplicationStateModel) : EditedStatus {
      return editedStatus;
    }

    @Selector([ApplicationState])
    public static getLoaderStatus({loaderStatus} : ApplicationStateModel) : LoaderStatus {
      return loaderStatus;
    }

    @Selector([ApplicationState])
    public static getFilterSectionStatus({sectionFilter} : ApplicationStateModel) : SectionStatus {
      return sectionFilter;
    }

    @Selector([ApplicationState])
    public static getActionSectionStatus({sectionAction} : ApplicationStateModel) : SectionStatus {
      return sectionAction;
    }

    @Selector([ApplicationState])
    public static getFilteredItems({selectedFilter} : ApplicationStateModel) : FilterItem[] {
      return selectedFilter;
    }
}