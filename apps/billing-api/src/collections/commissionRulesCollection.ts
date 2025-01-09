const commissionRulesCollection = {
  collection: "saas_commission_rules",
  meta: {
    collection: "saas_commission_rules",
    icon: "rule",
    note: "Commission rules and rates per tier",
    display_template: "{{tier}} - {{first_payment_rate}}%",
    hidden: false,
    singleton: false,
    translations: [
      {
        language: "en-US",
        translation: "Commission Rules"
      },
      {
        language: "th-TH",
        translation: "กฎการจ่ายคอมมิชชั่น"
      }
    ],
    sort: 6
  },
  schema: {
    name: "saas_commission_rules",
    comment: null
  },
  fields: [
    {
      collection: "saas_commission_rules",
      field: "id",
      type: "uuid",
      meta: {
        collection: "saas_commission_rules",
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
        table: "saas_commission_rules",
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
      collection: "saas_commission_rules",
      field: "user_created",
      type: "uuid",
      schema: {
        name: "user_created",
        table: "saas_commission_rules",
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
        collection: "saas_commission_rules",
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
      collection: "saas_commission_rules",
      field: "date_created",
      type: "timestamp",
      schema: {
        name: "date_created",
        table: "saas_commission_rules",
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
        collection: "saas_commission_rules",
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
      collection: "saas_commission_rules",
      field: "user_updated",
      type: "uuid",
      schema: {
        name: "user_updated",
        table: "saas_commission_rules",
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
        collection: "saas_commission_rules",
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
      collection: "saas_commission_rules",
      field: "date_updated",
      type: "timestamp",
      schema: {
        name: "date_updated",
        table: "saas_commission_rules",
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
        collection: "saas_commission_rules",
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
      collection: "saas_commission_rules",
      field: "tier",
      type: "string",
      meta: {
        collection: "saas_commission_rules",
        field: "tier",
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
        sort: 6,
        width: "full",
        required: true
      },
      schema: {
        name: "tier",
        table: "saas_commission_rules",
        data_type: "character varying",
        default_value: null,
        max_length: 50,
        is_nullable: false
      }
    },
    {
      collection: "saas_commission_rules",
      field: "first_payment_rate",
      type: "decimal",
      meta: {
        collection: "saas_commission_rules",
        field: "first_payment_rate",
        special: null,
        interface: "input",
        options: null,
        display: null,
        display_options: null,
        readonly: false,
        hidden: false,
        sort: 7,
        width: "full",
        required: true,
        note: "Commission percentage for first payment"
      },
      schema: {
        name: "first_payment_rate",
        table: "saas_commission_rules",
        data_type: "numeric",
        numeric_precision: 5,
        numeric_scale: 2,
        is_nullable: false
      }
    },
    {
      collection: "saas_commission_rules",
      field: "recurring_rate",
      type: "decimal",
      meta: {
        collection: "saas_commission_rules",
        field: "recurring_rate",
        special: null,
        interface: "input",
        options: null,
        display: null,
        display_options: null,
        readonly: false,
        hidden: false,
        sort: 8,
        width: "full",
        required: true,
        note: "Commission percentage for recurring payments"
      },
      schema: {
        name: "recurring_rate",
        table: "saas_commission_rules",
        data_type: "numeric",
        numeric_precision: 5,
        numeric_scale: 2,
        is_nullable: false
      }
    },
    {
      collection: "saas_commission_rules",
      field: "recurring_months",
      type: "integer",
      meta: {
        collection: "saas_commission_rules",
        field: "recurring_months",
        special: null,
        interface: "input",
        options: null,
        display: null,
        display_options: null,
        readonly: false,
        hidden: false,
        sort: 9,
        width: "full",
        required: true,
        note: "Number of months to pay recurring commission"
      },
      schema: {
        name: "recurring_months",
        table: "saas_commission_rules",
        data_type: "integer",
        default_value: 12,
        is_nullable: false
      }
    }
  ]
};


export { commissionRulesCollection };