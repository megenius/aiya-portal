const agentsCollection = {
  collection: "ums_agents",
  meta: {
    collection: "ums_agents",
    icon: "support_agent",
    note: "Unified Messaging Service - Agents",
    display_template: "{{name}}",
    hidden: false,
    singleton: false,
    translations: [
      {
        language: "en-US",
        translation: "Agents",
      },
      {
        language: "th-TH",
        translation: "เจ้าหน้าที่",
      },
    ],
    sort: 4,
  },
  schema: {
    name: "ums_agents",
    comment: "Stores agent data",
  },
  fields: [
    {
      collection: "ums_agents",
      field: "id",
      type: "uuid",
      meta: {
        collection: "ums_agents",
        field: "id",
        special: ["uuid"],
        interface: "input",
        readonly: true,
        hidden: true,
        width: "full",
        sort: 1,
        required: false,
      },
      schema: {
        name: "id",
        table: "ums_agents",
        data_type: "uuid",
        is_generated: true,
        is_nullable: false,
        is_unique: true,
        is_primary_key: true,
      },
    },
    {
      collection: "ums_agents",
      field: "name",
      type: "string",
      meta: {
        collection: "ums_agents",
        field: "name",
        interface: "input",
        width: "full",
        sort: 2,
        required: true,
      },
      schema: {
        name: "name",
        table: "ums_agents",
        data_type: "character varying",
        max_length: 255,
        is_nullable: false,
      },
    },
    {
      collection: "ums_agents",
      field: "status",
      type: "string",
      meta: {
        collection: "ums_agents",
        field: "status",
        interface: "select-dropdown",
        options: {
          choices: [
            { text: "Online", value: "online" },
            { text: "Offline", value: "offline" },
            { text: "Busy", value: "busy" },
            { text: "Away", value: "away" },
          ],
        },
        width: "half",
        sort: 3,
        required: true,
      },
      schema: {
        name: "status",
        table: "ums_agents",
        data_type: "character varying",
        max_length: 50,
        is_nullable: false,
      },
    },
    {
      collection: "ums_agents",
      field: "skills",
      type: "json",
      meta: {
        collection: "ums_agents",
        field: "skills",
        interface: "tags",
        width: "full",
        sort: 4,
        required: false,
        note: "Skills and expertise of the agent",
      },
      schema: {
        name: "skills",
        table: "ums_agents",
        data_type: "jsonb",
        is_nullable: true,
      },
    },
    {
      collection: "ums_agents",
      field: "activeSessions",
      type: "integer",
      meta: {
        collection: "ums_agents",
        field: "activeSessions",
        interface: "input",
        options: {
          min: 0,
        },
        width: "half",
        sort: 5,
        required: false,
        note: "Number of active sessions the agent is handling",
      },
      schema: {
        name: "activeSessions",
        table: "ums_agents",
        data_type: "integer",
        default_value: 0,
        is_nullable: false,
      },
    },
    {
      collection: "ums_agents",
      field: "performance",
      type: "json",
      meta: {
        collection: "ums_agents",
        field: "performance",
        interface: "input-code",
        options: {
          language: "json",
        },
        width: "full",
        sort: 6,
        required: false,
        note: "Performance metrics of the agent",
      },
      schema: {
        name: "performance",
        table: "ums_agents",
        data_type: "jsonb",
        is_nullable: true,
      },
    },
    {
      collection: "ums_agents",
      field: "user_created",
      type: "uuid",
      meta: {
        special: ["user-created"],
        interface: "select-dropdown-m2o",
        readonly: true,
        hidden: true,
        width: "full",
        required: true,
      },
      schema: {
        data_type: "uuid",
        is_nullable: false,
        foreign_key_schema: "public",
        foreign_key_table: "directus_users",
        foreign_key_column: "id",
      }
    },
    {
      collection: "ums_agents",
      field: "date_created",
      type: "timestamp",
      meta: {
        special: ["date-created"],
        interface: "datetime",
        readonly: true,
        hidden: true,
        width: "full",
        required: true,
      },
      schema: {
        data_type: "timestamp with time zone",
        is_nullable: false,
      }
    },
    {
      collection: "ums_agents",
      field: "user_updated",
      type: "uuid",
      meta: {
        special: ["user-updated"],
        interface: "select-dropdown-m2o",
        readonly: true,
        hidden: true,
        width: "full",
        required: true,
      },
      schema: {
        data_type: "uuid",
        is_nullable: false,
        foreign_key_schema: "public",
        foreign_key_table: "directus_users",
        foreign_key_column: "id",
      }
    },
    {
      collection: "ums_agents",
      field: "date_updated",
      type: "timestamp",
      meta: {
        special: ["date-updated"],
        interface: "datetime",
        readonly: true,
        hidden: true,
        width: "full",
        required: true,
      },
      schema: {
        data_type: "timestamp with time zone",
        is_nullable: false,
      }
    }
  ],
};

export { agentsCollection };
