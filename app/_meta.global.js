const HUAWEI_USG6530E = {
  "getting-started": "",
};

const PROXMOX = {
  "getting-started": "",
  repository: "",
  lxc: "",
};

const TECHNITIUM = {
  "getting-started": "",
  dns: "",
  record: "",
  dhcp: "",
};

const NGINX_PROXY_MANAGER = {
  "getting-started": "",
  "proxy-hosts": "",
  ssl: "",
};

const ZABBIX = {
  "getting-started": "",
  notification: "",
};

export default {
  index: {
    type: "page",
    display: "hidden",
  },
  docs: {
    type: "page",
    title: "Documentation",
    items: {
      _: {
        type: "separator",
        title: "Network",
      },
      "huawei-usg6530e": {
        title: "Huawei USG6530E",
        items: HUAWEI_USG6530E,
      },
      __: {
        type: "separator",
        title: "Server",
      },
      proxmox: {
        title: "Proxmox",
        items: PROXMOX,
      },
      technitium: {
        title: "Technitium",
        items: TECHNITIUM,
      },
      docker: "",
      "nginx-proxy-manager": {
        title: "Nginx Proxy Manager",
        items: NGINX_PROXY_MANAGER,
      },
      zabbix: {
        title: "Zabbix",
        items: ZABBIX,
      },
    },
  },
};
