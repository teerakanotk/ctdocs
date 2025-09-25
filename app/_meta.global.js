import { sortObjectByKey } from "@/lib/sort";

const sortItems = {
  server: {},
  firewall: {},
  switch: {},
  "access-point": {},
};

export default {
  docs: {
    title: "Documentation",
    type: "page",
    items: {
      ...sortObjectByKey(sortItems),
    },
  },
};
