// export const processSteps = [
//   { id: "postcode", label: "Postcode", path: "/postcode" },
//   { id: "waste-type", label: "Waste Type", path: "/waste-type" },
//   { id: "select-skip", label: "Select Skip", path: "/select-skip" }, // Your target page
//   { id: "permit-check", label: "Permit Check", path: "/permit-check" },
//   { id: "choose-date", label: "Choose Date", path: "/choose-date" },
//   { id: "payment", label: "Payment", path: "/payment" },
// ];

// Import Heroicon outlines for future/current steps
import {
  MapPinIcon,
  ArchiveBoxIcon,
  TruckIcon, // Using TruckIcon as a generic skip icon
  DocumentCheckIcon,
  CalendarDaysIcon,
  CreditCardIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

// Import Heroicon solids for completed steps
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
