const subscriptionsCollection = {
  collection: "subscriptions",
  meta: {
    collection: "subscriptions",
    icon: "card_membership",
    note: "User subscription information",
    display_template: "{{user_id.first_name}} - {{plan_type}}",
    hidden: false,
    singleton: false,
    translations: [
      {
        language: "en-US",
        translation: "Subscriptions"
      },
      {
        language: "th-TH",
        translation: "การสมัครสมาชิก"
      }
    ],
    sort: 1
  },
  schema: {
    name: "subscriptions",
    comment: null
  },
  fields: [
    {
      collection: "subscriptions",
      field: "id",
      type: "uuid",
      meta: {
        collection: "subscriptions",
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
        table: "subscriptions",
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
      collection: "subscriptions",
      field: "user_created",
      type: "uuid",
      schema: {
        name: "user_created",
        table: "subscriptions",
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
        collection: "subscriptions",
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
      collection: "subscriptions",
      field: "date_created",
      type: "timestamp",
      schema: {
        name: "date_created",
        table: "subscriptions",
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
        collection: "subscriptions",
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
      collection: "subscriptions",
      field: "user_updated",
      type: "uuid",
      schema: {
        name: "user_updated",
        table: "subscriptions",
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
        collection: "subscriptions",
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
      collection: "subscriptions",
      field: "date_updated",
      type: "timestamp",
      schema: {
        name: "date_updated",
        table: "subscriptions",
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
        collection: "subscriptions",
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
      collection: "subscriptions",
      field: "user_id",
      type: "uuid",
      schema: {
        name: "user_id",
        table: "subscriptions",
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
        collection: "subscriptions",
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
      collection: "subscriptions",
      field: "stripe_subscription_id",
      type: "string",
      meta: {
        collection: "subscriptions",
        field: "stripe_subscription_id",
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
        note: "Stripe subscription reference"
      },
      schema: {
        name: "stripe_subscription_id",
        table: "subscriptions",
        data_type: "character varying",
        default_value: null,
        max_length: 255,
        is_nullable: false
      }
    },
    {
      collection: "subscriptions",
      field: "plan_type",
      type: "string",
      meta: {
        collection: "subscriptions",
        field: "plan_type",
        special: null,
        interface: "select-dropdown",
        options: {
          choices: [
            { text: "Free", value: "free" },
            { text: "Starter", value: "starter" },
            { text: "Growth", value: "growth" }
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
        name: "plan_type",
        table: "subscriptions",
        data_type: "character varying",
        default_value: "free",
        max_length: 50,
        is_nullable: false
      }
    },
    {
      collection: "subscriptions",
      field: "status",
      type: "string",
      meta: {
        collection: "subscriptions",
        field: "status",
        special: null,
        interface: "select-dropdown",
        options: {
          choices: [
            { text: "Active", value: "active" },
            { text: "Canceled", value: "canceled" },
            { text: "Expired", value: "expired" }
          ]
        },
        display: null,
        display_options: null,
        readonly: false,
        hidden: false,
        sort: 9,
        width: "full",
        required: true
      },
      schema: {
        name: "status",
        table: "subscriptions",
        data_type: "character varying",
        default_value: "active",
        max_length: 50,
        is_nullable: false
      }
    },
    {
      collection: "subscriptions",
      field: "current_period_end",
      type: "timestamp",
      meta: {
        collection: "subscriptions",
        field: "current_period_end",
        special: null,
        interface: "datetime",
        readonly: false,
        hidden: false,
        sort: 10,
        width: "full",
        required: true,
        note: "Subscription period end from Stripe webhook"
      },
      schema: {
        name: "current_period_end",
        table: "subscriptions",
        data_type: "timestamp with time zone",
        is_nullable: false
      }
    }
  ]
};

// Relationship definition
const subscriptionsUserFieldRelationship = {
  collection: "subscriptions",
  field: "user_id",
  related_collection: "directus_users",
  meta: { sort_field: null },
  schema: { on_delete: "SET NULL" }
};

export { subscriptionsCollection, subscriptionsUserFieldRelationship };