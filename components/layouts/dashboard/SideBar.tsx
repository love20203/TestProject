import React, { useContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import DashboardIcon from "@/public/icons/sidebar/dashboard_icon";
import RecommendationsIcon from "@/public/icons/sidebar/recommendations_icon";
import CarePlanIcon from "@/public/icons/sidebar/care_plan_icon";
import PaymentIcon from "@/public/icons/sidebar/payment_icon";
import EventsIcon from "@/public/icons/sidebar/events_icon";
import MessagesIcon from "@/public/icons/sidebar/messages_icon";
import TimesheetIcon from "@/public/icons/sidebar/timesheet_icon";
import ReportsIcon from "@/public/icons/sidebar/reports_icon";
import ServicesIcon from "@/public/icons/sidebar/services_icon";
import ContractIcon from "@/public/icons/sidebar/contract_icon";
import CaregiverManagementIcon from "@/public/icons/sidebar/caregiver_management_icon";
import ApplicationIcon from "@/public/icons/sidebar/application_icon";
import HelpIcon from "@/public/icons/sidebar/help_icon";
import SettingsIcon from "@/public/icons/sidebar/settings_icon";
import ClientsIcon from "@/public/icons/sidebar/clients_icon";
import EmployeesIcon from "@/public/icons/sidebar/employees_icon";
import BackgroundchecksIcon from "@/public/icons/sidebar/backgroundchecks_icon";

interface MenuItem {
  name: string;
  path: string;
  icon: any;
  role?: string[];
  children: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    name: "Dashboard",
    path: "/",
    icon: DashboardIcon,
    children: [],
  },
  {
    name: "Clients",
    path: "/clients",
    icon: ClientsIcon,
    role: ["admin"],
    children: [],
  },
  {
    name: "Caregivers",
    path: "/employees",
    icon: EmployeesIcon,
    role: ["admin"],
    children: [],
  },
  {
    name: "Backgorund checks",
    path: "/background_checks",
    icon: BackgroundchecksIcon,
    role: ["admin"],
    children: [],
  },
  {
    name: "Recommendations",
    path: "/recommendations",
    icon: RecommendationsIcon,
    role: ["client", "caregiver"],
    children: [],
  },
  {
    name: "Care Plan",
    path: "/careplan",
    icon: CarePlanIcon,
    role: ["client"],
    children: [],
  },
  {
    name: "Payment",
    path: "/payment",
    icon: PaymentIcon,
    children: [],
  },
  {
    name: "Events",
    path: "/events",
    icon: EventsIcon,
    children: [],
  },
  {
    name: "Messages",
    path: "/messages",
    icon: MessagesIcon,
    children: [],
  },
  {
    name: "Timesheet",
    path: "/timesheet",
    icon: TimesheetIcon,
    children: [],
  },
  {
    name: "Reports",
    path: "/reports",
    icon: ReportsIcon,
    children: [],
  },
  {
    name: "Services",
    path: "/services",
    icon: ServicesIcon,
    children: [],
  },
  {
    name: "Contract",
    path: "/contract",
    icon: ContractIcon,
    children: [],
  },
  {
    name: "Caregiver Management",
    path: "/caregivermanagement",
    icon: CaregiverManagementIcon,
    role: ["client"],
    children: [],
  },
  {
    name: "Application",
    path: "/application",
    icon: ApplicationIcon,
    children: [],
  },
  {
    name: "Help",
    path: "",
    icon: HelpIcon,
    role: ["client", "caregiver"],
    children: [
      {
        name: "Support",
        path: "/support",
        icon: null,
        children: [],
      },
      {
        name: "Help Center",
        path: "/center",
        icon: null,
        children: [],
      },
    ],
  },
  {
    name: "Support",
    path: "/support",
    icon: HelpIcon,
    role: ["admin"],
    children: [],
  },
  {
    name: "Settings",
    path: "/settings",
    icon: SettingsIcon,
    children: [],
  },
];

const theme = createTheme({
  palette: {
    primary: {
      main: "#CB5A6F",
      dark: "#CB5A6F",
    },
  },
});

import { SetCrumbContext } from "./Layout";

const DashboardSideBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [selectedItem, setSelectedItem] = useState<string>("");

  const [menus, setMenus] = useState<MenuItem[]>(menuItems);
  const setBreadCrumb = useContext(SetCrumbContext);

  useEffect(() => {
    let pathArray = pathname.split("/");
    let endpoint = "";

    endpoint = pathArray.reverse()[0];
    if (
      endpoint === "caregiver" ||
      endpoint === "client" ||
      endpoint === "admin"
    )
      setSelectedItem("/");
    else setSelectedItem("/" + endpoint);

    if (pathArray.find((item) => item === "caregiver")) {
      endpoint = "caregiver";
    } else if (pathArray.find((item) => item === "client")) {
      endpoint = "client";
    } else if (pathArray.find((item) => item === "admin")) {
      endpoint = "admin";
    }
    setMenus(
      menus.filter((menu) =>
        menu.role == undefined
          ? true
          : menu.role.find((item) => item === endpoint)
      )
    );
  }, [pathname]);

  const handleToggle = (index: number) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter((item) => item !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };

  const handleItemClick = (path: string, name: string) => {
    setSelectedItem(path);
    let pathSuffix = path.split("/").reverse()[0];
    if (pathSuffix === "") setBreadCrumb("Dashboard");
    else setBreadCrumb(name);

    let pathArray = pathname.split("/");
    let endpoint = "";
    if (pathArray.find((item) => item === "caregiver")) {
      endpoint = "caregiver";
    } else if (pathArray.find((item) => item === "client")) {
      endpoint = "client";
    } else if (pathArray.find((item) => item === "admin")) {
      endpoint = "admin";
    }
    if (path) router.push(`/dashboard/${endpoint}/${path}`);
  };

  const renderMenuItems = (items: MenuItem[]) => {
    return items.map((item, index) => (
      <React.Fragment key={index}>
        <ListItemButton
          onClick={() => {
            handleToggle(index);
            handleItemClick(item.path, item.name);
          }}
          style={{
            backgroundColor: item.path === selectedItem ? "#FFF2F5" : "#FFFFFF",
          }}
        >
          <div className="mx-2">
            {item.icon && (
              <item.icon
                color={item.path === selectedItem ? "#CB5A6F" : "#282828"}
              />
            )}
          </div>
          <ListItemText
            primary={item.name}
            style={{
              color: item.path === selectedItem ? "#CB5A6F" : "#282828",
            }}
          />
          {item.children.length == 0 ? null : openItems.includes(index) ? (
            <ExpandLess />
          ) : (
            <ExpandMore />
          )}
        </ListItemButton>
        <Collapse in={openItems.includes(index)} timeout="auto" unmountOnExit>
          <List component="div" disablePadding className="ml-2">
            {renderMenuItems(item.children)}
          </List>
        </Collapse>
        {/* </Link> */}
      </React.Fragment>
    ));
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="bg-white pt-[22px] sm:hidden md:hidden w-[300px]">
          {renderMenuItems(menus)}
        </div>
      </ThemeProvider>
    </>
  );
};

export default DashboardSideBar;
