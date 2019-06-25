import { IMenuItem } from "./IMenuItem";
import { faTasks, faAdjust, faFire } from "@fortawesome/free-solid-svg-icons";

// This content should be in store

export const menuItemMap: Map<string,IMenuItem > = new Map([
    ['Overview', {
        text: 'Overview',
        icon: faTasks,
        trigger: '/',
        isEnabled: false
    }],

    ['Packages', {
        text: 'Packages',
        icon: faAdjust,
        bubbleNumber: 12,
        isEnabled: false
    }],
    ['Epics', {
        text: 'Epics',
        icon: faFire,
        isEnabled: true,
        bubbleNumber: 120,
        subMenuList: [{
            text: 'List',
            triggerLink: '/',
            isEnabled: true
        },{
            text: 'Roadmap',
            triggerLink: '/',
            isEnabled: false
        },{
            text: 'Blabla',
            triggerLink: '/',
            isEnabled: false
        },{
            text: 'Commits',
            triggerLink: '/',
            isEnabled: false
        }]
    }],
    ['Planets', {
        text: 'Planets',
        icon: faAdjust,
        isEnabled: false
    }]
])
