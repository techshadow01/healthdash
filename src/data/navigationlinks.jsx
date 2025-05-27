import Dashboard from "../assets/sidebar/dashboard.svg";
import History from "../assets/sidebar/history.svg";
import calender from "../assets/sidebar/calender.svg";
import appointments from "../assets/sidebar/appointment.svg";
import Statics from "../assets/sidebar/statistics.svg";

import chat from "../assets/sidebar/chat.svg";
import call from "../assets/sidebar/call.svg";

const general = [
  {
    asset: Dashboard,
    name: "dashboard",
  },
  {
    asset: History,
    name: "history",
  },
  {
    asset: calender,
    name: "calender",
  },
  {
    asset: appointments,
    name: "appointments",
  },
  {
    asset: Statics,
    name: "Statics",
  },
];

const Tools = [
  {
    asset: chat,
    name: "chat",
  },
  {
    asset: call,
    name: "support",
  },
];

export const navigationlinks = [
  {
    name: "general",
    data: general,
  },
  {
    name: "Tools",
    data: Tools,
  },
];
