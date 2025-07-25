const networkItems = {
  "huawei-usg6530e": {
    title: "Huawei USG6530E",
    items: "",
  },
};

const serverItems = {
  proxmox: {
    title: "Proxmox",
    items: {
      lxc: "",
    },
  },
  technitium: {
    title: "Technitium",
    items: {
      dns: "",
      record: "",
      dhcp: "",
    },
  },
  nginx: {
    title: "Nginx",
    items: {
      "nginx-with-php": "",
    },
  },
  zabbix: {
    title: "Zabbix",
    items: {
      notification: "",
    },
  },
  docker: {
    title: "Docker",
  },
  "nginx-proxy-manager": {
    title: "Nginx Proxy Manager",
    items: {
      "proxy-hosts": "",
      ssl: "",
    },
  },
};

// ฟังก์ชันสำหรับเรียง object ตาม key
function sortObjectByKey(obj) {
  return Object.fromEntries(
    Object.entries(obj).sort(([a], [b]) => a.localeCompare(b))
  );
}

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
      ...sortObjectByKey(networkItems),

      __: {
        type: "separator",
        title: "Server",
      },
      ...sortObjectByKey(serverItems),
    },
  },
};
