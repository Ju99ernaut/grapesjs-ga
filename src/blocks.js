import { gtmCompId, gaCompId } from './consts'

export default (editor, opts = {}) => {
  const bm = editor.BlockManager;
  const {
    gtmLabel,
    gtmCategory,
    gtmBlock,
    gaLabel,
    gaCategory,
    gaBlock
  } = opts;

  gtmBlock && bm.add("gtm-block", {
    label: gtmLabel,
    media: '<svg viewBox="0 0 24 24"><path d="M11.929,18.136c1.619,0,2.932,1.313,2.932,2.932S13.549,24,11.929,24s-2.932-1.313-2.932-2.932 S10.31,18.136,11.929,18.136z M23.119,9.878l-9-9c-1.171-1.171-3.071-1.171-4.242,0c-1.171,1.171-1.171,3.071,0,4.242l6.866,6.866 l-4.493,4.588l2.119,2.211c0.581,0.621,0.901,1.432,0.901,2.282c0,0.313-0.044,0.615-0.125,0.903l7.974-7.851 C24.291,12.949,24.291,11.05,23.119,9.878z M11.669,7.491L9.588,5.41C8.944,4.766,8.589,3.91,8.589,3c0-0.333,0.048-0.659,0.14-0.97 L0.876,9.809c-1.17,1.17-1.17,3.067,0,4.238l7.824,7.875c-0.072-0.273-0.111-0.559-0.111-0.854c0-1.842,1.499-3.341,3.341-3.341 c0.351,0,0.69,0.055,1.008,0.156l-5.706-5.955L11.669,7.491z"/></svg>',
    activate: true,
    select: true,
    category: gtmCategory,
    content: { type: gtmCompId },
    ...gtmBlock
  });

  gaBlock && bm.add("ga-block", {
    label: gaLabel,
    media: '<svg viewBox="0 0 24 24"><path d="M7.36 21.14A2.86 2.86 0 014.5 24a2.86 2.86 0 01-2.86-2.86 2.86 2.86 0 012.86-2.87 2.86 2.86 0 012.86 2.87zM9.14 12v8.86C9.14 22.88 10.53 24 12 24c1.36 0 2.86-.95 2.86-3.14v-8.72c0-1.85-1.36-3-2.86-3A2.91 2.91 0 009.14 12zm7.5-9.14v18c0 2.02 1.39 3.14 2.86 3.14 1.36 0 2.86-.95 2.86-3.14V3c0-1.85-1.36-3-2.86-3a2.91 2.91 0 00-2.86 2.86Z"/></svg>',
    activate: true,
    select: true,
    category: gaCategory,
    content: { type: gaCompId },
    ...gaBlock
  });
}