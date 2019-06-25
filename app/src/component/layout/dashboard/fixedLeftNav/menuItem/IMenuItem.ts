import { IMenuItemSubMenuList } from "../../../../../genericTypes/IMenuItemSubMenuList";

export interface IMenuItem {
    text: string;
    icon: any;
    trigger?: string;
    subMenuList?: Array<IMenuItemSubMenuList>
    bubbleNumber?: number;
}