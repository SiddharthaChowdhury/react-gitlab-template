export enum IdNavStatus {
    LeRc = 'LeftNav expanded - RigntNav collapsed',
    LeRn = 'LeftNav expanded - RigntNav null',

    LcRe = 'LeftNav collapsed - RigntNav expanded',
    LnRe = 'LeftNav null - RigntNav expanded', // It isnt likely to happen in most of the cases

    LcRn = 'LeftNav collapsed - RigntNav expanded',
    LnRc = 'LeftNav null - RigntNav expanded', // It isnt likely to happen in most of the cases

    LeRe = 'Both side navigation expanded',
    LcRc = 'Both side navigation collapsed',
    LnRn = 'No side Navigation',
}