const sessionsCollection = {
  collection: "ums_sessions",
  meta: {
    collection: "ums_sessions",
    icon: "forum",
    note: "Unified Messaging Service - Chat Sessions",
    display_template: "{{platform}} - {{customerId}}",
    hidden: false,
    singleton: false,
    translations: [
      {
        language: "en-US",
        translation: "Sessions",
      },
      {
        language: "th-TH",
        translation: "เซสชั่น",
      },
    ],
    sort: 2,
  },
  schema: {
    name: "ums_sessions",
    comment: "Stores chat sessions from various platforms",
  },
  fields: [
    {
      collection: "ums_sessions",
      field: "id",
      type: "uuid",
      meta: {
        collection: "ums_sessions",
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
        table: "ums_sessions",
        data_type: "uuid",
        is_generated: true,
        is_nullable: false,
        is_unique: true,
        is_primary_key: true,
      },
    },
    {
      collection: "ums_sessions",
      field: "platform",
      type: "string",
      meta: {
        collection: "ums_sessions",
        field: "platform",
        interface: "select-dropdown",
        options: {
          choices: [
            { text: "LINE", value: "line" },
            { text: "Facebook", value: "facebook" },
            { text: "Instagram", value: "instagram" },
            { text: "Telegram", value: "telegram" },
          ],
        },
        width: "half",
        sort: 2,
        required: true,
      },
      schema: {
        name: "platform",
        table: "ums_sessions",
        data_type: "character varying",
        max_length: 50,
        is_nullable: false,
      },
    },
    {
      collection: "ums_sessions",
      field: "customer_id",
      type: "uuid",
      meta: {
        collection: "ums_sessions",
        field: "customer_id",
        special: ["m2o"],
        interface: "select-dropdown-m2o",
        options: {
          template: "{{name}}",
        },
        width: "full",
        sort: 3,
        required: false,
      },
      schema: {
        name: "customer_id",
        table: "ums_sessions",
        data_type: "uuid",
        is_nullable: true,
        foreign_key_schema: "public",
        foreign_key_table: "ums_users",
        foreign_key_column: "id",
      },
    },
    {
      collection: "ums_sessions",
      field: "agent_id",
      type: "uuid",
      meta: {
        collection: "ums_sessions",
        field: "agent_id",
        special: ["m2o"],
        interface: "select-dropdown-m2o",
        options: {
          template: "{{name}}",
        },
        width: "full",
        sort: 4,
        required: false,
      },
      schema: {
        name: "agent_id",
        table: "ums_sessions",
        data_type: "uuid",
        is_nullable: true,
        foreign_key_schema: "public",
        foreign_key_table: "ums_agents",
        foreign_key_column: "id",
      },
    },
    {
      collection: "ums_sessions",
      field: "status",
      type: "string",
      meta: {
        collection: "ums_sessions",
        field: "status",
        interface: "select-dropdown",
        options: {
          choices: [
            { text: "Open", value: "open" },
            { text: "Pending", value: "pending" },
            { text: "Closed", value: "closed" },
          ],
        },
        width: "half",
        sort: 5,
        required: true,
      },
      schema: {
        name: "status",
        table: "ums_sessions",
        data_type: "character varying",
        max_length: 50,
        is_nullable: false,
      },
    },
    {
      collection: "ums_sessions",
      field: "start_time",
      type: "timestamp",
      meta: {
        collection: "ums_sessions",
        field: "startTime",
        interface: "datetime",
        width: "half",
        sort: 6,
        required: true,
      },
      schema: {
        name: "start_time",
        table: "ums_sessions",
        data_type: "timestamp with time zone",
        is_nullable: false,
      },
    },
    {
      collection: "ums_sessions",
      field: "end_time",
      type: "timestamp",
      meta: {
        collection: "ums_sessions",
        field: "endTime",
        interface: "datetime",
        width: "half",
        sort: 7,
        required: false,
      },
      schema: {
        name: "end_time",
        table: "ums_sessions",
        data_type: "timestamp with time zone",
        is_nullable: true,
      },
    },
    {
      collection: "ums_sessions",
      field: "tags",
      type: "json",
      meta: {
        collection: "ums_sessions",
        field: "tags",
        interface: "tags",
        width: "full",
        sort: 8,
        required: false,
        note: "Tags for categorizing sessions",
      },
      schema: {
        name: "tags",
        table: "ums_sessions",
        data_type: "jsonb",
        is_nullable: true,
      },
    },
    {
      collection: "ums_sessions",
      field: "priority",
      type: "integer",
      meta: {
        collection: "ums_sessions",
        field: "priority",
        interface: "input",
        options: {
          min: 1,
          max: 10,
        },
        width: "half",
        sort: 9,
        required: false,
        note: "Priority of the session (1-10)",
      },
      schema: {
        name: "priority",
        table: "ums_sessions",
        data_type: "integer",
        default_value: 5,
        is_nullable: false,
      },
    },
    {
      collection: "ums_sessions",
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
      collection: "ums_sessions",
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
      collection: "ums_sessions",
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
      collection: "ums_sessions",
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

const sessionsCustomerIdFieldRelationship = {
  collection: "ums_sessions",
  field: "customer_id",
  related_collection: "ums_users",
  meta: { sort_field: null },
  schema: { on_delete: "SET NULL" },
};

const sessionsAgentIdFieldRelationship = {
  collection: "ums_sessions",
  field: "agent_id",
  related_collection: "ums_agents",
  meta: { sort_field: null },
  schema: { on_delete: "SET NULL" },
};

export {
  sessionsCollection,
  sessionsCustomerIdFieldRelationship,
  sessionsAgentIdFieldRelationship,
};
