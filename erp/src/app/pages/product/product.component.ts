import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import GroupRadioItem from 'src/app/core/molecules/group-radio/models/GroupRadioItem';
import { SidebarHeaderComponent } from 'src/app/core/molecules/sidebar-header/sidebar-header.component';
import { SidebarRadioComponent } from 'src/app/core/molecules/sidebar-radio/sidebar-radio.component';
import SidebarData from 'src/app/core/organisms/sidebar/models/SidebarData';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {

  public constructor(private _store: Store) {
  }

  public changed($event: any) {
    console.warn($event);
  }

  public data$: Observable<SidebarData> = of({
    items: [
      {
        sidebarComponent: SidebarRadioComponent,
        sidebarComponentData: {
          sidebarHeader: {},
          groupRadioData: {
              items: [
                {
                  id: 1,
                  label: 'A'
                } as GroupRadioItem,
                {
                  id: 2,
                  label: 'B'
                } as GroupRadioItem,
                {
                  id: 3,
                  label: 'C',
                  checked: true,
                } as GroupRadioItem,
                {
                  id: 4,
                  label: 'D',
                  disabled: true,
                } as GroupRadioItem,
                {
                  id: 5,
                  label: 'E'
                } as GroupRadioItem
              ]
            }
        },
      },
      {
        sidebarComponent: SidebarRadioComponent,
        sidebarComponentData: {
          sidebarHeader: {},
          groupRadioData: {
              items: [
                {
                  id: 1,
                  label: 'A'
                } as GroupRadioItem,
                {
                  id: 2,
                  label: 'B'
                } as GroupRadioItem,
                {
                  id: 3,
                  label: 'C',
                  checked: true,
                } as GroupRadioItem,
                {
                  id: 4,
                  label: 'D',
                  disabled: true,
                } as GroupRadioItem,
                {
                  id: 5,
                  label: 'E'
                } as GroupRadioItem
              ]
            }
        },
      },
    ]
  });



  // public groupRadioData$: Observable<GroupRadioData> = of();

  // public s1: IScenario = {
  //   content: ProductSectionContent1Component,
  //   filter: ProductSectionFilter1Component,
  //   action: ProductSectionAction1Component
  // };

  // public s2: IScenario = {
  //   content: ProductSectionContent2Component,
  //   filter: ProductSectionFilter2Component,
  //   action: ProductSectionAction2Component
  // };

  // public s3: IScenario = {
  //   content: ProductSectionContent3Component,
  //   action: ProductSectionAction3Component
  // };

  // public page: ITabPage[] = [
  //   {
  //     tabLabel: 'TAB_1',
  //     tabs: [
  //       {
  //         tabLabel: 'SUBTAB_1',
  //         grid: [
  //           [ this.s2, this.s1, this.s1 ],
  //           [ this.s3, this.s3, this.s3 ]
  //         ],
  //       },
  //       {
  //         tabLabel: 'SUBTAB_2',
  //         grid: [
  //           [ this.s2 ],
  //           [ this.s3 ]
  //         ],
  //       }
  //     ]
  //   },
  //   {
  //     tabLabel: 'TAB_2',
  //     grid: [
  //       [ this.s1, this.s3, this.s3 ],
  //       [ this.s1, this.s2, this.s2 ]
  //     ]
  //   },
  //   {
  //     tabLabel: 'TAB_3',
  //     grid: [
  //       [ this.s3 ],
  //     ]
  //   }
  // ];


  // public pageData: IPageDesktopData = {
  //   items: [
  //     {
  //       tabLabel: 'TAB_1',
  //       grid: [
  //         [this.s1]
  //       ]
  //     },
  //     {
  //       tabLabel: 'TAB_2',
  //       subItems: [
  //         {
  //           tabLabel: 'SUBTAB_1',
  //           grid: [
  //             [this.s1, this.s2]
  //           ]
  //         },
  //         {
  //           tabLabel: 'SUBTAB_2',
  //           grid: [
  //             [this.s2]
  //           ]
  //         }
  //       ]
  //     },
  //     {
  //       tabLabel: 'TAB_3',
  //       grid: [
  //         [this.s1, this.s2],
  //         [this.s3, this.s3]
  //       ]
  //     }
  //   ]
  // };
}
