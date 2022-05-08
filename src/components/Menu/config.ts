import { MenuEntry } from '@pancakeswap-libs/uikit'


const baseurl="https://app.veneraswap.com";
const swap="https://exchange.veneraswap.com";

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: baseurl,
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: swap.concat('/#/swap'),
      },
      {
        label: 'Liquidity',
        href: swap.concat('/#/pool'),
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: baseurl.concat('/farms'),
  },
  {
    label: 'Boosted Farms',
    icon: 'BoostIcon',
    href: baseurl.concat('/boostedfarms'),
  },
  {
    label: 'iVSW',
    icon: 'IfoIcon',
    href: 'https://ivsw.veneraswap.com',
  },
  {
    label: 'Referral',
    icon: 'ReferralIcon',
    href: baseurl.concat('/referral'),
  },
 
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Docs',
        href: 'https://docs.veneraswap.com/venera-swap/',
      },     
      
    ],
  },
  // {
  //   label: 'More',
  //   icon: 'MoreIcon',
  //   items: [
  //     {
  //       label: 'Gitbook',
  //       href: '#',
  //     },
  //     {
  //       label: 'Medium',
  //       href: '#',
  //     },
  //     {
  //       label: 'Twitter',
  //       href: '#',
  //     },
  //     {
  //       label: 'Telegram',
  //       href: '#',
  //     },
      
  //   ],
  // },
 
  // {
  //   label: 'Startup - Aggregator',
  //   icon: 'IfoIcon',
  //   href: '/ifo',
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'CoinGecko',
  //       href: '#',
  //     },
  //     {
  //       label: 'CoinMarketCap',
  //       href: '#',
  //     },
  //     {
  //       label: 'How it works',
  //       href: '#',
  //     },
  //   ],
  // },
  // {
  //   label: 'Audit by CertiK',
  //   icon: 'AuditIcon',
  //   href: '#',
  // },
]

export default config
