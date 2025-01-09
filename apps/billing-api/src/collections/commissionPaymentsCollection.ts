const commissionPaymentsCollection = {
  collection: "saas_commission_payments",
  meta: {
    collection: "saas_commission_payments",
    icon: "payments",
    note: "Commission payment tracking",
    display_template: "{{affiliate_id.user_id.first_name}} - {{status}}",
    hidden: false,
    singleton: false,
    translations: [
      {
        language: "en-US",
        translation: "Commission Payments"
      },
      {
        language: "th-TH",
        translation: "การจ่ายคอมมิชชั่น"
      }
    ],
    sort: 5
  },
  schema: {
    name: "saas_commission_payments",
    comment: null
  },
  fields: [
    {
      collection: "saas_commission_payments",
      field: "id",
      type: "uuid",
      meta: {
        collection: "saas_commission_payments",
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
        table: "saas_commission_payments",
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
      collection: "saas_commission_payments",
      field: "user_created",
      type: "uuid",
      schema: {
        name: "user_created",
        table: "saas_commission_payments",
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
        collection: "saas_commission_payments",
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
      collection: "saas_commission_payments",
      field: "date_created",
      type: "timestamp",
      schema: {
        name: "date_created",
        table: "saas_commission_payments",
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
        collection: "saas_commission_payments",
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
      collection: "saas_commission_payments",
      field: "user_updated",
      type: "uuid",
      schema: {
        name: "user_updated",
        table: "saas_commission_payments",
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
        collection: "saas_commission_payments",
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
      collection: "saas_commission_payments",
      field: "date_updated",
      type: "timestamp",
      schema: {
        name: "date_updated",
        table: "saas_commission_payments",
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
        collection: "saas_commission_payments",
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
      collection: "saas_commission_payments",
      field: "affiliate_id",
      type: "uuid",
      schema: {
        name: "affiliate_id",
        table: "saas_commission_payments",
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
        foreign_key_table: "affiliates",
        foreign_key_column: "id",
        comment: null
      },
      meta: {
        collection: "saas_commission_payments",
        field: "affiliate_id",
        special: ["m2o"],
        interface: "select-dropdown-m2o",
        options: {
          template: "{{user_id.first_name}} - {{current_tier}}"
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
      collection: "saas_commission_payments",
      field: "referral_id",
      type: "uuid",
      schema: {
        name: "referral_id",
        table: "saas_commission_payments",
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
        foreign_key_table: "referrals",
        foreign_key_column: "id",
        comment: null
      },
      meta: {
        collection: "saas_commission_payments",
        field: "referral_id",
        special: ["m2o"],
        interface: "select-dropdown-m2o",
        options: {
          template: "{{referrer_id.first_name}} -> {{referred_id.first_name}}"
        },
        display: null,
        display_options: null,
        readonly: false,
        hidden: false,
        sort: 7,
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
      collection: "saas_commission_payments",
      field: "stripe_transfer_id",
      type: "string",
      meta: {
        collection: "saas_commission_payments",
        field: "stripe_transfer_id",
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
        note: "Reference to Stripe transfer"
      },
      schema: {
        name: "stripe_transfer_id",
        table: "saas_commission_payments",
        data_type: "character varying",
        default_value: null,
        max_length: 255,
        is_nullable: false
      }
    },
    {
      collection: "saas_commission_payments",
      field: "payment_type",
      type: "string",
      meta: {
        collection: "saas_commission_payments",
        field: "payment_type",
        special: null,
        interface: "select-dropdown",
        options: {
          choices: [
            { text: "First Payment", value: "first_payment" },
            { text: "Recurring", value: "recurring" }
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
        name: "payment_type",
        table: "saas_commission_payments",
        data_type: "character varying",
        default_value: "first_payment",
        max_length: 50,
        is_nullable: false
      }
    },
    {
      collection: "saas_commission_payments",
      field: "status",
      type: "string",
      meta: {
        collection: "saas_commission_payments",
        field: "status",
        special: null,
        interface: "select-dropdown",
        options: {
          choices: [
            { text: "Pending", value: "pending" },
            { text: "Paid", value: "paid" }
          ]
        },
        display: null,
        display_options: null,
        readonly: false,
        hidden: false,
        sort: 10,
        width: "full",
        required: true
      },
      schema: {
        name: "status",
        table: "saas_commission_payments",
        data_type: "character varying",
        default_value: "pending",
        max_length: 50,
        is_nullable: false
      }
    }
  ]
};

// Relationship definitions
const commissionPaymentsAffiliateFieldRelationship = {
  collection: "saas_commission_payments",
  field: "affiliate_id",
  related_collection: "saas_affiliates",
  meta: { sort_field: null },
  schema: { on_delete: "SET NULL" }
};

const commissionPaymentsReferralFieldRelationship = {
  collection: "saas_commission_payments",
  field: "referral_id",
  related_collection: "saas_referrals",
  meta: { sort_field: null },
  schema: { on_delete: "SET NULL" }
};


export { 
  commissionPaymentsCollection, 
  commissionPaymentsAffiliateFieldRelationship,
  commissionPaymentsReferralFieldRelationship,
};