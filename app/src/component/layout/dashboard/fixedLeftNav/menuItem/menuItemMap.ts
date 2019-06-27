import { IMenuItem } from "./IMenuItem";
import { faTasks, faAdjust, faFire, faSun, faCog } from "@fortawesome/free-solid-svg-icons";

// This content should be in state

export const menuItemMap: Map<string,IMenuItem > = new Map([
    ['Normal', {
        text: 'Normal',
        icon: faTasks,
        trigger: '/',
        isEnabled: false
    }],

    ['Bubble', {
        text: 'Bubble',
        icon: faSun,
        bubbleNumber: 12,
        isEnabled: false
    }],
    ['HiddenSubmenu', {
        text: 'Hidden submenu',
        icon: faAdjust,
        isEnabled: false,
        subMenuList: [{
            text: 'List',
            triggerLink: '/',
            isEnabled: false
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
    ['ActiveMenu', {
        text: 'Active menu',
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
    ['Settings', {
        text: 'Settings',
        icon: faCog,
        trigger: '/',
        isEnabled: false
    }]
])
