/**
 * Global Metadata Configuration for Nextra Docs
 *
 * This file defines the sidebar / navigation metadata for all documentation sections.
 * Use the `separator()` and `sorted()` helpers from "@/lib/utils" to keep it clean and maintainable.
 */

import { sorted, separator } from "@/lib/utils";

// ---------------------------
// 🔹 Types
// ---------------------------
interface MetadataItem {
  title?: string;
  type?: "page" | "doc" | "separator";
  display?: "normal" | "hidden" | "children";
  theme?: Record<string, boolean | string>;
  items?: Record<string, MetadataItem | string>;
}

// ---------------------------
// 🔹 Server: Proxmox VE
// ---------------------------
const proxmoxVE: MetadataItem = {
  title: "Proxmox VE",
  items: {
    installation: "",
    repository: "",
    lxc: {
      title: "LXC",
      items: {
        create: "",
        template: "",
      },
    },
  },
};

// ---------------------------
// 🔹 Server: Zabbix
// ---------------------------
const zabbix: MetadataItem = {
  title: "Zabbix",
  items: {
    installation: "",
    "interface-type": "",
    actions: "",
    notification: "",
  },
};

// ---------------------------
// 🔹 Server: Technitium DNS
// ---------------------------
const technitiumDNS: MetadataItem = {
  title: "Technitium DNS",
  items: {
    installation: "",
    zone: "",
    dhcp: "",
  },
};

// ---------------------------
// 🔹 Server: Nginx Proxy Manager
// ---------------------------
const nginxProxyManager: MetadataItem = {
  title: "Nginx Proxy Manager",
  items: {
    installation: "",
    "proxy-hosts": "",
    certificates: "",
  },
};

// ---------------------------
// 🔹 Server Group
// ---------------------------
const serverGroup: Record<string, MetadataItem | string> = {
  docker: "",
  "nginx-proxy-manager": nginxProxyManager,
  "proxmox-ve": proxmoxVE,
  "technitium-dns": technitiumDNS,
  zabbix,
};

// ---------------------------
// 🔹 Global Meta Config
// ---------------------------
const metaConfig: Record<string, MetadataItem> = {
  docs: {
    type: "page",
    title: "Documentation",
    theme: {
      copyPage: false,
    },
    items: {
      index: "",
      ...separator({ title: "Server" }),
      ...sorted(serverGroup, "asc"),
    },
  },

  changelog: {
    type: "page",
    title: "Changelog",
    theme: {
      copyPage: false,
    },
  },
};

// ---------------------------
// ✅ Export
// ---------------------------
export default metaConfig;
