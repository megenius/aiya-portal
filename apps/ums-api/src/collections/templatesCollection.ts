const templatesCollection = {
  collection: "ums_templates",
  meta: {
    collection: "ums_templates",
    icon: "article",
    note: "Unified Messaging Service - Templates",
    display_template: "{{name}}",
    hidden: false,
    singleton: false,
    translations: [
      {
        language: "en-US",
        translation: "Templates",
      },
      {
        language: "th-TH",
        translation: "เทมเพลต",
      },
    ],
    sort: 5,
  },
  schema: {
    name: "ums_templates",
    comment: "Stores message templates",
  },
  fields: [
    {
      collection: "ums_templates",
      field: "id",
      type: "uuid",
      meta: {
        collection: "ums_templates",
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
        table: "ums_templates",
        data_type: "uuid",
        is_generated: true,
        is_nullable: false,
        is_unique: true,
        is_primary_key: true,
      },
    },
    {
      collection: "ums_templates",
      field: "name",
      type: "string",
      meta: {
        collection: "ums_templates",
        field: "name",
        interface: "input",
        width: "full",
        sort: 2,
        required: true,
      },
      schema: {
        name: "name",
        table: "ums_templates",
        data_type: "character varying",
        max_length: 255,
        is_nullable: false,
      },
    },
    {
      collection: "ums_templates",
      field: "content",
      type: "text",
      meta: {
        collection: "ums_templates",
        field: "content",
        interface: "input-multiline",
        width: "full",
        sort: 3,
        required: true,
      },
      schema: {
        name: "content",
        table: "ums_templates",
        data_type: "text",
        is_nullable: false,
      },
    },
    {
      collection: "ums_templates",
      field: "variables",
      type: "json",
      meta: {
        collection: "ums_templates",
        field: "variables",
        interface: "tags",
        width: "full",
        sort: 4,
        required: false,
        note: "List of variables used in the template",
      },
      schema: {
        name: "variables",
        table: "ums_templates",
        data_type: "jsonb",
        is_nullable: true,
      },
    },
    {
      collection: "ums_templates",
      field: "platform",
      type: "string",
      meta: {
        collection: "ums_templates",
        field: "platform",
        interface: "select-dropdown",
        options: {
          choices: [
            { text: "LINE", value: "line" },
            { text: "Facebook", value: "facebook" },
            { text: "Instagram", value: "instagram" },
            { text: "Telegram", value: "telegram" },
            { text: "All", value: "all" },
          ],
        },
        width: "half",
        sort: 5,
        required: true,
      },
      schema: {
        name: "platform",
        table: "ums_templates",
        data_type: "character varying",
        max_length: 50,
        is_nullable: false,
      },
    },
    {
      collection: "ums_templates",
      field: "category",
      type: "string",
      meta: {
        collection: "ums_templates",
        field: "category",
        interface: "input",
        width: "half",
        sort: 6,
        required: false,
        note: "Category of the template",
      },
      schema: {
        name: "category",
        table: "ums_templates",
        data_type: "character varying",
        max_length: 255,
        is_nullable: true,
      },
    },
    {
      collection: "ums_templates",
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
      collection: "ums_templates",
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
      collection: "ums_templates",
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
      collection: "ums_templates",
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

export { templatesCollection };
