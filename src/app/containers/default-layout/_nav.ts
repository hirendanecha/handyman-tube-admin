import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    // badge: {
    //   color: 'info',
    //   text: 'NEW'
    // }
  },
  {
    name: 'Health Practitioner',
    url: '/health-practitioners',
    iconComponent: { name: 'cil-bookmark' },
  },
  {
    name: 'Contact Request',
    url: '/contact-request',
    iconComponent: { name: 'cil-contact' },
  },
  {
    name: 'Handyman Topics',
    url: '/pages',
    iconComponent: { name: 'cil-layers' },
  },
  // {
  //   name: 'Post List',
  //   url: '/post-list',
  //   iconComponent: { name: 'cil-basket' },
  // },
  // {
  //   name: 'Community Post List',
  //   url: '/community-post',
  //   iconComponent: { name: 'cil-library' },
  // },
  {
    name: 'Search End User',
    url: '/user',
    iconComponent: { name: 'cil-user' },
  },
  {
    name: 'Marketing page',
    url: '/marketing',
    iconComponent: { name: 'cil-https' },
  },
  {
    name: 'HandymanTube',
    url: '/channels',
    iconComponent: { name: 'cil-screen-desktop' },
  },
  {
    name: 'Payment Info',
    url: '/payment-info',
    iconComponent: { name: 'cil-money' },
  },
];
