export const currencies = [
  {
    name: "USD",
    icon: "/usd.png",
    key: "usd",
  },
  {
    name: "ngn",
    icon: "/ngn.png",
    key: "ngn",
  },

  {
    name: "ghc",
    icon: "/ghc.png",
    key: "ghc",
  },
  {
    name: "kes",
    icon: "/ghc.png",
    key: "kes",
  },
];

export const bitcoins = [
  {
    icon: "/Bitcoin.png",
    name: "Bitcoin (BTC)",
    key: "btc",
    num: "+0.54",
    trend: "up",
  },
  {
    icon: "/amazon.png",
    name: "Amazon Giftcard",
    key: "amazon",
    num: "+6.88%",
    trend: "up",
  },
  {
    icon: "/Ethereum.png",
    name: "Ethereum (ETH)",
    key: "eth",
    num: "-12.09%",
    trend: "down",
  },
  {
    icon: "/spotify.png",
    name: "Spotify Premium",
    key: "spotify",
    num: "+6.88%",
    trend: "up",
  },
  {
    icon: "/tether.png",
    name: "Tether (USDT)",
    key: "tether",
    num: "+6.88%",
    trend: "up",
  },
];

export const paymentOptions = [
  {
    icon: "/giftcard.png",
    name: "Gift Card",
    desc: "Trade giftcards easily and fast.",
  },
  {
    icon: "/crypto.png",
    name: "Crypto",
    desc: "Quickly trade cryptocurrencies",
  },
  {
    icon: "/paybills.png",
    name: "Pay Bills",
    desc: "Airtime, data, cable, betting, electricity.",
  },
  {
    icon: "/link.png",
    name: "Pay Link",
    desc: "Get paid in seconds with payment links.",
  },
  {
    icon: "/ratespay.png",
    name: "Rates",
    desc: "Check current rates in realtime.",
  },
  {
    icon: "/betting.png",
    name: "Betting",
    desc: "Fund betting accounts fast.",
  },
];

export type RecentData = {
  id: number;
  channel: string;
  type: string;
  amount: string;
  fee: string;
  total: string;
  referenceId: string;
  status: string;
  date: string;
  time: string;
};
export const tableData = [
  {
    id: 1,
    channel: "Giftcard Sell",
    type: "deposit",
    amount: "1,500.00 NGN",
    fee: "0.00 USDT",
    total: "1,500.00 NGN",
    referenceId: "202734856385823593758",
    status: "success",
    date: "Nov 5, 2027",
    time: "03:34:52 PM",
  },
  {
    id: 2,
    channel: "Crypto Sell",
    type: "Withdrawal",
    amount: "0.00 BTC",
    fee: "0.00 BTC",
    total: "0.00 BTC",
    referenceId: "202734856385823593758",
    status: "pending",
    date: "Sept 29, 2027",
    time: "03:34:52 PM",
  },
  {
    id: 3,
    channel: "Airtime",
    type: "Withdrawal",
    amount: "0.00 ETH",
    fee: "0.00 BTC",
    total: "0.00 ETH",
    referenceId: "202734856385823593758",
    status: "success",
    date: "Sept 29, 2027",
    time: "03:34:52 PM",
  },
  {
    id: 4,
    channel: "Data",
    type: "deposit",
    amount: "0.00 USDT",
    fee: "0.00 USDT",
    total: "0.00 USDT",
    referenceId: "202734856385823593758",
    status: "success",
    date: "Sept 29, 2027",
    time: "03:34:52 PM",
  },
  {
    id: 5,
    channel: "Fiat",
    type: "Withdrawal",
    amount: "3,000.00 NGN",
    fee: "0.00 BTC",
    total: "3,000.00 NGN",
    referenceId: "202734856385823593758",
    status: "cancelled",
    date: "Sept 29, 2027",
    time: "03:34:52 PM",
  },
];

export const profileSteps = [
  {
    key: "verify",
    icon: "/confidential-email.png",
    title: "Verify your email",
    desc: "Takes about 2 minutes",
  },
  {
    key: "verify_phone",
    icon: "/phone.png",
    title: "Verify phone number",
    desc: "Takes about 2 minutes",
  },
  {
    key: "personalInformation",
    icon: "/customer.png",
    title: "Update personal information",
    desc: "Takes about 2 minutes",
  },
  {
    key: "verifykyc",
    icon: "/customer_kyc.png",
    title: "Upgrade KYC",
    desc: "Takes about 2 minutes",
  },
  {
    key: "two_factor",
    icon: "/two-factor.png",
    title: "Enable 2FA",
    desc: "Takes about 2 minutes",
  },
  {
    key: "transaction",
    icon: "/paper-plane.png",
    title: "Make your first transaction",
    desc: "Takes about 2 minutes",
  },
];
