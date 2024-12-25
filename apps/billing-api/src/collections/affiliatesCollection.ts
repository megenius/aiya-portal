const saas_affiliatesCollection = {
  collection: "saas_affiliates",
  meta: {
    collection: "saas_affiliates",
    icon: "group",
    note: "Affiliate partner information",
    display_template: "{{user_id.first_name}} - {{current_tier}}",
    hidden: false,
    singleton: false,
    translations: [
      {
        language: "en-US",
        translation: "Affiliates"
      },
      {
        language: "th-TH",
        translation: "พาร์ทเนอร์"
      }
    ],
    sort: 3
  },
  schema: {
    name: "saas_affiliates",
    comment: null
  },
  fields: [
    {
      collection: "saas_affiliates",
      field: "id",
      type: "uuid",
      meta: {
        collection: "saas_affiliates",
        field: "id",
        special: ["uuid"],
        interface: "input",
        readonly: true,
        hidden: true,
        width: "full",
        sort: 1,
        required: false
      },
      schema: {
        name: "id",
        table: "saas_affiliates",
        data_type: "uuid",
        default_value: null,
        generation_expression: null,
        max_length: null,
        numeric_precision: null,
        numeric_scale: null,
        is_generated: true,
        is_nullable: false,
        is_unique: true,
        is_primary_key: true,
        has_auto_increment: false,
        is_indexed: false,
        foreign_key_schema: null,
        foreign_key_table: null,
        foreign_key_column: null,
        comment: null
      }
    },
    {
      collection: "saas_affiliates",
      field: "user_created",
      type: "uuid",
      schema: {
        name: "user_created",
        table: "saas_affiliates",
        data_type: "uuid",
        default_value: null,
        generation_expression: null,
        max_length: null,
        numeric_precision: null,
        numeric_scale: null,
        is_generated: false,
        is_nullable: true,
        is_unique: false,
        is_indexed: false,
        is_primary_key: false,
        has_auto_increment: false,
        foreign_key_schema: "public",
        foreign_key_table: "directus_users",
        foreign_key_column: "id",
        comment: null
      },
      meta: {
        collection: "saas_affiliates",
        field: "user_created",
        special: ["user-created"],
        interface: "select-dropdown-m2o",
        options: {
          template: "{{avatar}} {{first_name}} {{last_name}}"
        },
        display: "user",
        display_options: null,
        readonly: true,
        hidden: true,
        sort: 2,
        width: "half",
        translations: null,
        note: null,
        conditions: null,
        required: false,
        group: null,
        validation: null,
        validation_message: null
      }
    },
    {
      collection: "saas_affiliates",
      field: "date_created",
      type: "timestamp",
      schema: {
        name: "date_created",
        table: "saas_affiliates",
        data_type: "timestamp with time zone",
        default_value: null,
        generation_expression: null,
        max_length: null,
        numeric_precision: null,
        numeric_scale: null,
        is_generated: false,
        is_nullable: true,
        is_unique: false,
        is_indexed: false,
        is_primary_key: false,
        has_auto_increment: false,
        foreign_key_schema: null,
        foreign_key_table: null,
        foreign_key_column: null,
        comment: null
      },
      meta: {
        collection: "saas_affiliates",
        field: "date_created",
        special: ["date-created"],
        interface: "datetime",
        options: null,
        display: "datetime",
        display_options: {
          relative: true
        },
        readonly: true,
        hidden: true,
        sort: 3,
        width: "half",
        translations: null,
        note: null,
        conditions: null,
        required: false,
        group: null,
        validation: null,
        validation_message: null
      }
    },
    {
      collection: "saas_affiliates",
      field: "user_updated",
      type: "uuid",
      schema: {
        name: "user_updated",
        table: "saas_affiliates",
        data_type: "uuid",
        default_value: null,
        generation_expression: null,
        max_length: null,
        numeric_precision: null,
        numeric_scale: null,
        is_generated: false,
        is_nullable: true,
        is_unique: false,
        is_indexed: false,
        is_primary_key: false,
        has_auto_increment: false,
        foreign_key_schema: "public",
        foreign_key_table: "directus_users",
        foreign_key_column: "id",
        comment: null
      },
      meta: {
        collection: "saas_affiliates",
        field: "user_updated",
        special: ["user-updated"],
        interface: "select-dropdown-m2o",
        options: {
          template: "{{avatar}} {{first_name}} {{last_name}}"
        },
        display: "user",
        display_options: null,
        readonly: true,
        hidden: true,
        sort: 4,
        width: "half",
        translations: null,
        note: null,
        conditions: null,
        required: false,
        group: null,
        validation: null,
        validation_message: null
      }
    },
    {
      collection: "saas_affiliates",
      field: "date_updated",
      type: "timestamp",
      schema: {
        name: "date_updated",
        table: "saas_affiliates",
        data_type: "timestamp with time zone",
        default_value: null,
        generation_expression: null,
        max_length: null,
        numeric_precision: null,
        numeric_scale: null,
        is_generated: false,
        is_nullable: true,
        is_unique: false,
        is_indexed: false,
        is_primary_key: false,
        has_auto_increment: false,
        foreign_key_schema: null,
        foreign_key_table: null,
        foreign_key_column: null,
        comment: null
      },
      meta: {
        collection: "saas_affiliates",
        field: "date_updated",
        special: ["date-updated"],
        interface: "datetime",
        options: null,
        display: "datetime",
        display_options: {
          relative: true
        },
        readonly: true,
        hidden: true,
        sort: 5,
        width: "half",
        translations: null,
        note: null,
        conditions: null,
        required: false,
        group: null,
        validation: null,
        validation_message: null
      }
    },
    {
      collection: "saas_affiliates",
      field: "user_id",
      type: "uuid",
      schema: {
        name: "user_id",
        table: "saas_affiliates",
        data_type: "uuid",
        default_value: null,
        generation_expression: null,
        max_length: null,
        numeric_precision: null,
        numeric_scale: null,
        is_generated: false,
        is_nullable: true,
        is_unique: true,
        is_indexed: false,
        is_primary_key: false,
        has_auto_increment: false,
        foreign_key_schema: "public",
        foreign_key_table: "directus_users",
        foreign_key_column: "id",
        comment: null
      },
      meta: {
        collection: "saas_affiliates",
        field: "user_id",
        special: ["m2o"],
        interface: "select-dropdown-m2o",
        options: {
          template: "{{first_name}} {{last_name}}"
        },
        display: null,
        display_options: null,
        readonly: false,
        hidden: false,
        sort: 6,
        width: "full",
        translations: null,
        note: null,
        conditions: null,
        required: false,
        group: null,
        validation: null,
        validation_message: null
      }
    },
    {
      collection: "saas_affiliates",
      field: "current_tier",
      type: "string",
      meta: {
        collection: "saas_affiliates",
        field: "current_tier",
        special: null,
        interface: "select-dropdown",
        options: {
          choices: [
            { text: "Starter", value: "starter" },
            { text: "Advanced", value: "advanced" },
            { text: "Master", value: "master" }
          ]
        },
        display: null,
        display_options: null,
        readonly: false,
        hidden: false,
        sort: 7,
        width: "full",
        required: true
      },
      schema: {
        name: "current_tier",
        table: "saas_affiliates",
        data_type: "character varying",
        default_value: "starter",
        max_length: 50,
        is_nullable: false
      }
    },
    {
      collection: "saas_affiliates",
      field: "status",
      type: "string",
      meta: {
        collection: "saas_affiliates",
        field: "status",
        special: null,
        interface: "select-dropdown",
        options: {
          choices: [
            { text: "Active", value: "active" },
            { text: "Suspended", value: "suspended" }
          ]
        },
        display: null,
        display_options: null,
        readonly: false,
        hidden: false,
        sort: 8,
        width: "full",
        required: true
      },
      schema: {
        name: "status",
        table: "saas_affiliates",
        data_type: "character varying",
        default_value: "active",
        max_length: 50,
        is_nullable: false
      }
    }
  ]
};

// Relationship definition
const saas_affiliatesUserFieldRelationship = {
  collection: "saas_affiliates",
  field: "user_id",
  related_collection: "directus_users",
  meta: { sort_field: null },
  schema: { on_delete: "SET NULL" }
};


export { 
  saas_affiliatesCollection, 
  saas_affiliatesUserFieldRelationship,
};