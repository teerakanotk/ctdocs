export type Change = {
  date: string;
  changes: string[];
};

export const changelog: Change[] = [
  {
    date: "2025-11-08",
    changes: [
      "Add zabbix notification via telegram",
      "Add zabbix autoregistration actions",
      "Add zabbix agent setup",
    ],
  },
];
