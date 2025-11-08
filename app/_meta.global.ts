import { sorted } from "@/lib/utils";

// Define reusable metadata structure type
interface MetadataItem {
  title?: string;
  type?: "page" | "doc" | "separator";
  display?: "normal" | "hidden" | "children";
  theme?: Record<string, boolean | string>;
  items?: Record<string, MetadataItem | string>;
}

// --- Server Metadata Definitions --- //
const proxmoxMetadata: MetadataItem = {
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

const serverMetadata: Record<string, MetadataItem | string> = {
  docker: "",
  "nginx-proxy-manager": "",
  "proxmox-ve": proxmoxMetadata,
  "technitium-dns": "",
  zabbix: "",
};

// --- Main Metadata Configuration --- //
const metaConfig: Record<string, MetadataItem> = {
  docs: {
    type: "page",
    title: "Documentation",
    theme: {
      copyPage: false,
    },
    items: {
      index: "",
      _1: {
        type: "separator",
        title: "Server",
      },
      ...sorted(serverMetadata, "asc"),
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

export default metaConfig;
