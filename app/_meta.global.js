function sortObjectByKey(obj) {
  return Object.fromEntries(
    Object.entries(obj).sort(([a], [b]) => a.localeCompare(b))
  );
}

const serverItems = {
  'proxmox-ve': {},
  zabbix: {},
  'technitium-dns': {},
  'nginx-proxy-manager': {},
  docker: {},
};

export default {
  docs: {
    title: 'Documentation',
    type: 'page',
    items: {
      _: {
        title: 'Server',
        type: 'separator',
      },
      ...sortObjectByKey(serverItems),
    },
  },
};
