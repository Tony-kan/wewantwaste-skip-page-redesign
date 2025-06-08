import {
  MapPinIcon,
  ArchiveBoxIcon,
  TruckIcon,
  CalendarDaysIcon,
  CreditCardIcon,
  ShieldCheckIcon,
  SparklesIcon,
  WrenchScrewdriverIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

import {
  MapPinIcon as MapPinSolid,
  ArchiveBoxIcon as ArchiveBoxSolid,
  TruckIcon as TruckSolid,
  DocumentCheckIcon as DocumentCheckSolid,
  CalendarDaysIcon as CalendarDaysSolid,
  CreditCardIcon as CreditCardSolid,
  ShieldCheckIcon as ShieldCheckSolid,
} from "@heroicons/react/24/solid";

export const processSteps = [
  {
    id: "postcode",
    label: "Postcode",
    path: "/postcode",
    iconOutline: MapPinIcon,
    iconSolid: MapPinSolid,
  },
  {
    id: "waste-type",
    label: "Waste Type",
    path: "/waste-type",
    iconOutline: ArchiveBoxIcon,
    iconSolid: ArchiveBoxSolid,
  },
  {
    id: "select-skip",
    label: "Select Skip",
    path: "/select-skip",
    iconOutline: TruckIcon,
    iconSolid: TruckSolid,
  },
  {
    id: "permit-check",
    label: "Permit Check",
    path: "/permit-check",
    iconOutline: ShieldCheckIcon,
    iconSolid: ShieldCheckSolid,
  },
  {
    id: "choose-date",
    label: "Choose Date",
    path: "/choose-date",
    iconOutline: CalendarDaysIcon,
    iconSolid: CalendarDaysSolid,
  },
  {
    id: "payment",
    label: "Payment",
    path: "/payment",
    iconOutline: CreditCardIcon,
    iconSolid: CreditCardSolid,
  },
];

export const categoryData = [
  {
    name: "Small Skips",
    range: "4-6 Yards",
    metric: "≈ 35-55 wheelbarrows",
    description:
      "Perfect for a weekend garden tidy-up, clearing flower beds, or getting rid of lawn clippings.",
    Icon: SparklesIcon,
    link: "#skip-options",
  },
  {
    name: "Medium Skips",
    range: "8-12 Yards",
    metric: "≈ 70-110 wheelbarrows",
    description:
      "Ideal for larger landscaping projects, removing old turf, or clearing small trees and hedges.",
    Icon: WrenchScrewdriverIcon,
    link: "#skip-options",
  },
  {
    name: "Large Skips",
    range: "16-20 Yards",
    metric: "≈ 140-180 wheelbarrows",
    description:
      "For major garden overhauls, significant tree surgery waste, and clearing heavily overgrown areas.",
    Icon: TruckIcon,
    link: "#skip-options",
  },
  {
    name: "Extra Large Skips",
    range: "40+ Yards",
    metric: "≈ 360+ wheelbarrows",
    description:
      "The choice for professional landscapers, large estate clearances, and commercial-scale green waste.",
    Icon: UsersIcon,
    link: "#skip-options",
  },
];
