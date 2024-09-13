import AnalyticIcon from "../assets/icons/analytics.svg?react";
import BuyurtmalarIcon from "../assets/icons/Buyurtma.svg?react";
import MoliyaIcon from "../assets/icons/Moliya.svg?react";
import TalabaIcon from "../assets/icons/student.svg?react";
import GroupIcon from "../assets/icons/guruhlar.svg?react";
import KurslarIcon from "../assets/icons/courses.svg?react";
import HrIcon from "../assets/icons/Hr.svg?react";
import SettingsIcon from "../assets/icons/Sozlamalar.svg?react";

// Components
import Generic from "../view/Generics";

export const sidebar = [
  {
    id: 1,
    title: "Analitika",
    icon: AnalyticIcon,
    path: "/analitika",
    element: Generic,
  },
  {
    id: 2,
    title: "Buyurtma",
    icon: BuyurtmalarIcon,
    path: "/buyurtma",
    element: Generic,
    child: [
      {
        id: "2-1",
        title: "Buyurtmalar ro’yxati",
        path: "/buyurtmalar ",
        element: Generic,
      },
      {
        id: "2-2",
        title: "Birinchi darsga yozilish",
        path: "/birinchi ",
        element: Generic,
      },
      {
        id: "2-3",
        title: "Yangi talabalar ro’yxati",
        path: "/yangi ",
        element: Generic,
      },
    ],
  },
  {
    id: 3,
    title: "Moliya",
    icon: MoliyaIcon,
    path: "/moliya",
    element: Generic,
    child: [
      {
        id: "3-1",
        title: "Tolovlar",
        path: "/tolovlar ",
        element: Generic,
      },
      {
        id: "3-2",
        title: "O`qituvchilar oyligi",
        path: "/oylik ",
        element: Generic,
      },
    ],
  },
  {
    id: 4,
    title: "Talaba",
    icon: TalabaIcon,
    path: "/talaba",
    element: Generic,
    child: [
      {
        id: "4-1",
        title: "Barcha talabalar",
        path: "/talabalar ",
        element: Generic,
      },
      {
        id: "4-2",
        title: "Birinchi darsga yozilish",
        path: "/aktive ",
        element: Generic,
      },
      {
        id: "4-3",
        title: "Yangi talabalar royxati",
        path: "/arxive ",
        element: Generic,
      },
    ],
  },
  {
    id: 5,
    title: "Guruh",
    icon: GroupIcon,
    path: "/guruhlar",
    element: Generic,
    child: [
      {
        id: "5-1",
        title: "Guruhlar",
        path: "/buyurtmalar ",
        element: Generic,
      },
      {
        id: "5-2",
        title: "Dars jadvali",
        path: "/dars",
        element: Generic,
      },
      {
        id: "5-3",
        title: "Xonalar",
        path: "/xonalar",
        element: Generic,
      },
    ],
  },
  {
    id: 6,
    title: "Kurslar",
    icon: KurslarIcon,
    path: "/kurslar",
    element: Generic,
    child: [
      {
        id: "6-1",
        title: "Kurslar ro’yxati",
        path: "/royxati ",
        element: Generic,
      },
      {
        id: "6-2",
        title: "Kurslar yo`nalishi",
        path: "/yo`nalishlar ",
        element: Generic,
      },
    ],
  },
  {
    id: 7,
    title: "HR",
    icon: HrIcon,
    path: "/hr",
    element: Generic,
    child: [
      {
        id: "7-1",
        title: "Ro`llar",
        path: "/rollar ",
        element: Generic,
      },
      {
        id: "7-2",
        title: "Birinchi darsga yozilish",
        path: "/birinchi ",
        element: Generic,
      },
      {
        id: "7-3",
        title: "Yangi talabalar ro’yxati",
        path: "/yangi ",
        element: Generic,
      },
    ],
  },
  {
    id: 8,
    title: "Sozlamalar",
    icon: SettingsIcon,
    path: "/sozlamalar",
    element: Generic,
    child: [
      {
        id: "8-1",
        title: "Buyurtmalar ro’yxati",
        path: "/buyurtmalar ",
        element: Generic,
      },
      {
        id: "8-2",
        title: "Birinchi darsga yozilish",
        path: "/birinchi ",
        element: Generic,
      },
      {
        id: "8-3",
        title: "Yangi talabalar ro’yxati",
        path: "/yangi ",
        element: Generic,
      },
    ],
  },
];
0;
