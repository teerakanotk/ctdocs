export default {
  index: {
    type: "page",
    display: "hidden",
  },
  docs: {
    title: "Documentation",
    type: "page",
    items: {
      _: {
        type: "separator",
        title: "Network",
      },
      "huawei-usg6530e": {
        title: "Huawei USG6530E",
        items: {
          "getting-started": "",
          policy: "",
          object: "",
          network: "",
        },
      },
      __: {
        type: "separator",
        title: "Server",
      },
      proxmox: {
        title: "Proxmox",
        items: {
          "getting-started": "",
          repository: "",
          lxc: "",
        },
      },
      technitium: {
        title: "Technitium",
        items: {
          "getting-started": "",
          dns: "",
          record: "",
          dhcp: "",
        },
      },
      "nginx-proxy-manager": {
        title: "Nginx Proxy Manager",
        items: {
          "getting-started": "",
          "proxy-hosts": "",
        },
      },
      docker: "",
      zabbix: "",
    },
  },
};
