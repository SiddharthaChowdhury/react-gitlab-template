import { IMenuItem } from "./IMenuItem";
import { faTasks, faAdjust } from "@fortawesome/free-solid-svg-icons";

// This content should be in store

export const menuItem: Map<string,IMenuItem > = new Map([
    ['Project', {
        text: 'Project',
        icon: faTasks,
        trigger: '/'
    }],

    ['Issues', {
        text: 'Issues',
        icon: faAdjust,
        bubbleNumber: 12
    }]
])
