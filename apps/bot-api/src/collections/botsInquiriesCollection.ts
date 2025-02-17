const botsInquiriesCollection = {
  collection: "bots_inquiries",
  meta: {
    collection: "bots_inquiries",
    icon: "message_question",
    note: "Bot inquiries and messages management",
    display_template: "{{subject}} - {{created_at}}",
    hidden: false,
    singleton: false,
    translations: [
      {
        language: "en-US",
        translation: "Inquiries",
      },
      {
        language: "th-TH",
        translation: "ข้อความสอบถาม",
      },
    ],
    sort: 1,
  },
  schema: {
    name: "bots_inquiries",
    comment: "Stores bot inquiries and messages",
  },
  fields: [
    {
      collection: "bots_inquiries",
      field: "id",
      type: "uuid",
      meta: {
        collection: "bots_inquiries",
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
        table: "bots_inquiries",
        data_type: "uuid",
        is_generated: true,
        is_nullable: false,
        is_unique: true,
        is_primary_key: true,
      },
    },
    // Update the bot field in botsInquiriesCollection
    {
      collection: "bots_inquiries",
      field: "bot",
      type: "string", // Changed from uuid to string
      schema: {
        name: "bot",
        table: "bots_inquiries",
        data_type: "character varying", // Changed from uuid to character varying
        max_length: 255, // Add max length for string
        is_nullable: false,
        foreign_key_schema: "public",
        foreign_key_table: "bots",
        foreign_key_column: "id",
      },
      meta: {
        collection: "bots_inquiries",
        field: "bot",
        special: ["m2o"],
        interface: "select-dropdown-m2o",
        options: {
          template: "{{name}}",
        },
        width: "full",
        sort: 2,
        required: true,
      },
    },
    {
      collection: "bots_inquiries",
      field: "name",
      type: "string",
      meta: {
        collection: "bots_inquiries",
        field: "name",
        interface: "input",
        width: "full",
        sort: 3,
        required: true,
      },
      schema: {
        name: "name",
        table: "bots_inquiries",
        data_type: "character varying",
        max_length: 255,
        is_nullable: false,
      },
    },
    {
      collection: "bots_inquiries",
      field: "email",
      type: "string",
      meta: {
        collection: "bots_inquiries",
        field: "email",
        interface: "input",
        options: {
          trim: true,
        },
        width: "full",
        sort: 4,
        required: true,
      },
      schema: {
        name: "email",
        table: "bots_inquiries",
        data_type: "character varying",
        max_length: 255,
        is_nullable: false,
      },
    },
    {
      collection: "bots_inquiries",
      field: "subject",
      type: "string",
      meta: {
        collection: "bots_inquiries",
        field: "subject",
        interface: "input",
        width: "full",
        sort: 5,
        required: true,
      },
      schema: {
        name: "subject",
        table: "bots_inquiries",
        data_type: "character varying",
        max_length: 255,
        is_nullable: false,
      },
    },
    {
      collection: "bots_inquiries",
      field: "description",
      type: "text",
      meta: {
        collection: "bots_inquiries",
        field: "description",
        interface: "input-multiline",
        width: "full",
        sort: 6,
        required: true,
      },
      schema: {
        name: "description",
        table: "bots_inquiries",
        data_type: "text",
        is_nullable: false,
      },
    },
    {
      collection: "bots_inquiries",
      field: "inquiry_type",
      type: "string",
      meta: {
        collection: "bots_inquiries",
        field: "inquiry_type",
        interface: "select-dropdown",
        options: {
          choices: [
            { text: "General Question", value: "general" },
            { text: "Technical Support", value: "technical" },
            { text: "Bug Report", value: "bug" },
            { text: "Feature Request", value: "feature" },
            { text: "Billing", value: "billing" },
            { text: "Other", value: "other" },
          ],
        },
        width: "full",
        sort: 7,
        required: true,
      },
      schema: {
        name: "inquiry_type",
        table: "bots_inquiries",
        data_type: "character varying",
        max_length: 50,
        is_nullable: false,
      },
    },
    {
      collection: "bots_inquiries",
      field: "phone",
      type: "string",
      meta: {
        collection: "bots_inquiries",
        field: "phone",
        interface: "input",
        width: "full",
        sort: 8,
        required: false,
      },
      schema: {
        name: "phone",
        table: "bots_inquiries",
        data_type: "character varying",
        max_length: 20,
        is_nullable: true,
      },
    },
    {
      collection: "bots_inquiries",
      field: "priority",
      type: "string",
      meta: {
        collection: "bots_inquiries",
        field: "priority",
        interface: "select-dropdown",
        options: {
          choices: [
            { text: "Low", value: "low" },
            { text: "Medium", value: "medium" },
            { text: "High", value: "high" },
            { text: "Urgent", value: "urgent" },
          ],
        },
        width: "full",
        sort: 9,
        required: false,
        default: "medium",
      },
      schema: {
        name: "priority",
        table: "bots_inquiries",
        data_type: "character varying",
        max_length: 20,
        is_nullable: true,
        default_value: "medium",
      },
    },
    {
      collection: "bots_inquiries",
      field: "status",
      type: "string",
      meta: {
        collection: "bots_inquiries",
        field: "status",
        interface: "select-dropdown",
        options: {
          choices: [
            { text: "New", value: "new" },
            { text: "In Progress", value: "in_progress" },
            { text: "Resolved", value: "resolved" },
            { text: "Closed", value: "closed" },
          ],
        },
        width: "full",
        sort: 10,
        required: true,
      },
      schema: {
        name: "status",
        table: "bots_inquiries",
        data_type: "character varying",
        max_length: 20,
        is_nullable: false,
        default_value: "new",
      },
    },
    {
      collection: "bots_inquiries",
      field: "metadata",
      type: "json",
      meta: {
        collection: "bots_inquiries",
        field: "metadata",
        interface: "input-code",
        options: {
          language: "json",
        },
        width: "full",
        sort: 13,
        required: false,
      },
      schema: {
        name: "metadata",
        table: "bots_inquiries",
        data_type: "jsonb",
        is_nullable: true,
      },
    },
  ],
};

// Tracking fields to be added to both collections
const trackingFields = [
  {
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
    },
  },
  {
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
    },
  },
  {
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
    },
  },
  {
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
    },
  },
];

// Add tracking fields to bots_inquiries collection
const botsInquiriesWithTracking = {
  ...botsInquiriesCollection,
  fields: [
    ...botsInquiriesCollection.fields,
    ...trackingFields.map((field) => ({
      ...field,
      collection: "bots_inquiries",
    })),
  ],
};

// Relationship definitions
const botsInquiriesBotFieldRelationship = {
  collection: "bots_inquiries",
  field: "bot",
  related_collection: "bots",
  meta: { sort_field: null },
  schema: { on_delete: "CASCADE" },
};

export { botsInquiriesWithTracking, botsInquiriesBotFieldRelationship };
