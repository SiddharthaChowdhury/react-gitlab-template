import { IMenuItemSubMenuList } from "../../../../../genericTypes/IMenuItemSubMenuList";

export interface IMenuItem {
    text: string;
    icon: any;
    isEnabled?: boolean;
    trigger?: string;
    subMenuList?: Array<IMenuItemSubMenuList>
    bubbleNumber?: number;
}