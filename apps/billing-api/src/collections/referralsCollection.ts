const saas_referralsCollection = {
  collection: "saas_referrals",
  meta: {
    collection: "saas_referrals",
    icon: "share",
    note: "Referral tracking information",
    display_template: "{{referrer_id.first_name}} -> {{referred_id.first_name}}",
    hidden: false,
    singleton: false,
    translations: [
      {
        language: "en-US",
        translation: "Referrals"
      },
      {
        language: "th-TH",
        translation: "การแนะนำ"
      }
    ],
    sort: 2
  },
  schema: {
    name: "saas_referrals",
    comment: null
  },
  fields: [
    {
      collection: "saas_referrals",
      field: "id",
      type: "uuid",
      meta: {
        collection: "saas_referrals",
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
        table: "saas_referrals",
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
      collection: "saas_referrals",
      field: "user_created",
      type: "uuid",
      schema: {
        name: "user_created",
        table: "saas_referrals",
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
        collection: "saas_referrals",
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
      collection: "saas_referrals",
      field: "date_created",
      type: "timestamp",
      schema: {
        name: "date_created",
        table: "saas_referrals",
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
        collection: "saas_referrals",
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
      collection: "saas_referrals",
      field: "user_updated",
      type: "uuid",
      schema: {
        name: "user_updated",
        table: "saas_referrals",
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
        collection: "saas_referrals",
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
      collection: "saas_referrals",
      field: "date_updated",
      type: "timestamp",
      schema: {
        name: "date_updated",
        table: "saas_referrals",
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
        collection: "saas_referrals",
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
      collection: "saas_referrals",
      field: "referrer_id",
      type: "uuid",
      schema: {
        name: "referrer_id",
        table: "saas_referrals",
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
        collection: "saas_referrals",
        field: "referrer_id",
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
        note: "User who referred",
        conditions: null,
        required: false,
        group: null,
        validation: null,
        validation_message: null
      }
    },
    {
      collection: "saas_referrals",
      field: "referred_id",
      type: "uuid",
      schema: {
        name: "referred_id",
        table: "saas_referrals",
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
        collection: "saas_referrals",
        field: "referred_id",
        special: ["m2o"],
        interface: "select-dropdown-m2o",
        options: {
          template: "{{first_name}} {{last_name}}"
        },
        display: null,
        display_options: null,
        readonly: false,
        hidden: false,
        sort: 7,
        width: "full",
        translations: null,
        note: "User who was referred",
        conditions: null,
        required: false,
        group: null,
        validation: null,
        validation_message: null
      }
    },
    {
      collection: "saas_referrals",
      field: "program_type",
      type: "string",
      meta: {
        collection: "saas_referrals",
        field: "program_type",
        special: null,
        interface: "select-dropdown",
        options: {
          choices: [
            { text: "Friend Get Friend", value: "friend_get_friend" },
            { text: "Affiliate", value: "affiliate" }
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
        name: "program_type",
        table: "saas_referrals",
        data_type: "character varying",
        default_value: null,
        max_length: 50,
        is_nullable: false
      }
    },
    {
      collection: "saas_referrals",
      field: "status",
      type: "string",
      meta: {
        collection: "saas_referrals",
        field: "status",
        special: null,
        interface: "select-dropdown",
        options: {
          choices: [
            { text: "Pending", value: "pending" },
            { text: "Converted", value: "converted" },
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
        table: "saas_referrals",
        data_type: "character varying",
        default_value: "pending",
        max_length: 50,
        is_nullable: false
      }
    },
    {
      collection: "saas_referrals",
      field: "subscription_id",
      type: "uuid",
      schema: {
        name: "subscription_id",
        table: "saas_referrals",
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
        foreign_key_table: "subscriptions",
        foreign_key_column: "id",
        comment: null
      },
      meta: {
        collection: "saas_referrals",
        field: "subscription_id",
        special: ["m2o"],
        interface: "select-dropdown-m2o",
        options: {
          template: "{{user_id.first_name}} - {{plan_type}}"
        },
        display: null,
        display_options: null,
        readonly: false,
        hidden: false,
        sort: 10,
        width: "full",
        translations: null,
        note: "Linked subscription after conversion",
        conditions: null,
        required: false,
        group: null,
        validation: null,
        validation_message: null
      }
    },
    {
      collection: "saas_referrals",
      field: "converted_at",
      type: "timestamp",
      meta: {
        collection: "saas_referrals",
        field: "converted_at",
        special: null,
        interface: "datetime",
        readonly: false,
        hidden: false,
        sort: 11,
        width: "full",
        required: false,
        note: "When the referral was converted"
      },
      schema: {
        name: "converted_at",
        table: "saas_referrals",
        data_type: "timestamp with time zone",
        is_nullable: true
      }
    }
  ]
};

// Relationship definitions
const saas_referralsReferrerFieldRelationship = {
  collection: "saas_referrals",
  field: "referrer_id",
  related_collection: "directus_users",
  meta: { sort_field: null },
  schema: { on_delete: "SET NULL" }
};

const saas_referralsReferredFieldRelationship = {
  collection: "saas_referrals",
  field: "referred_id",
  related_collection: "directus_users",
  meta: { sort_field: null },
  schema: { on_delete: "SET NULL" }
};

const saas_referralsSubscriptionFieldRelationship = {
  collection: "saas_referrals",
  field: "subscription_id",
  related_collection: "saas_subscriptions",
  meta: { sort_field: null },
  schema: { on_delete: "SET NULL" }
};

export {
  saas_referralsCollection,
  saas_referralsReferrerFieldRelationship,
  saas_referralsReferredFieldRelationship,
  saas_referralsSubscriptionFieldRelationship
};