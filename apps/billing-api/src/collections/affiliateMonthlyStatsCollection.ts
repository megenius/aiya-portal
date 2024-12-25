const affiliateMonthlyStatsCollection = {
  collection: "saas_affiliate_monthly_stats",
  meta: {
    collection: "saas_affiliate_monthly_stats",
    icon: "analytics",
    note: "Monthly performance tracking for affiliates",
    display_template: "{{affiliate_id.user_id.first_name}} - {{period}}",
    hidden: false,
    singleton: false,
    translations: [
      {
        language: "en-US",
        translation: "Affiliate Monthly Stats"
      },
      {
        language: "th-TH",
        translation: "สถิติรายเดือนของพาร์ทเนอร์"
      }
    ],
    sort: 4
  },
  schema: {
    name: "saas_affiliate_monthly_stats",
    comment: null
  },
  fields: [
    {
      collection: "saas_affiliate_monthly_stats",
      field: "id",
      type: "uuid",
      meta: {
        collection: "saas_affiliate_monthly_stats",
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
        table: "saas_affiliate_monthly_stats",
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
      collection: "saas_affiliate_monthly_stats",
      field: "user_created",
      type: "uuid",
      schema: {
        name: "user_created",
        table: "saas_affiliate_monthly_stats",
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
        collection: "saas_affiliate_monthly_stats",
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
      collection: "saas_affiliate_monthly_stats",
      field: "date_created",
      type: "timestamp",
      schema: {
        name: "date_created",
        table: "saas_affiliate_monthly_stats",
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
        collection: "saas_affiliate_monthly_stats",
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
      collection: "saas_affiliate_monthly_stats",
      field: "user_updated",
      type: "uuid",
      schema: {
        name: "user_updated",
        table: "saas_affiliate_monthly_stats",
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
        collection: "saas_affiliate_monthly_stats",
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
      collection: "saas_affiliate_monthly_stats",
      field: "date_updated",
      type: "timestamp",
      schema: {
        name: "date_updated",
        table: "saas_affiliate_monthly_stats",
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
        collection: "saas_affiliate_monthly_stats",
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
      collection: "saas_affiliate_monthly_stats",
      field: "affiliate_id",
      type: "uuid",
      schema: {
        name: "affiliate_id",
        table: "saas_affiliate_monthly_stats",
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
        collection: "saas_affiliate_monthly_stats",
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
      collection: "saas_affiliate_monthly_stats",
      field: "period",
      type: "date",
      meta: {
        collection: "saas_affiliate_monthly_stats",
        field: "period",
        special: null,
        interface: "datetime",
        options: null,
        display: null,
        display_options: null,
        readonly: false,
        hidden: false,
        sort: 7,
        width: "full",
        required: true,
        note: "Month/Year of stats"
      },
      schema: {
        name: "period",
        table: "saas_affiliate_monthly_stats",
        data_type: "date",
        default_value: null,
        is_nullable: false
      }
    },
    {
      collection: "saas_affiliate_monthly_stats",
      field: "successful_referrals",
      type: "integer",
      meta: {
        collection: "saas_affiliate_monthly_stats",
        field: "successful_referrals",
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
        note: "Number of converted referrals this month"
      },
      schema: {
        name: "successful_referrals",
        table: "saas_affiliate_monthly_stats",
        data_type: "integer",
        default_value: 0,
        is_nullable: false
      }
    },
    {
      collection: "saas_affiliate_monthly_stats",
      field: "achieved_tier",
      type: "string",
      meta: {
        collection: "saas_affiliate_monthly_stats",
        field: "achieved_tier",
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
        sort: 9,
        width: "full",
        required: true
      },
      schema: {
        name: "achieved_tier",
        table: "saas_affiliate_monthly_stats",
        data_type: "character varying",
        default_value: "starter",
        max_length: 50,
        is_nullable: false
      }
    },
    {
      collection: "saas_affiliate_monthly_stats",
      field: "commission_earned",
      type: "decimal",
      meta: {
        collection: "saas_affiliate_monthly_stats",
        field: "commission_earned",
        special: null,
        interface: "input",
        options: null,
        display: null,
        display_options: null,
        readonly: false,
        hidden: false,
        sort: 10,
        width: "full",
        required: true,
        note: "Total commission earned this month"
      },
      schema: {
        name: "commission_earned",
        table: "saas_affiliate_monthly_stats",
        data_type: "numeric",
        default_value: "0",
        numeric_precision: 10,
        numeric_scale: 2,
        is_nullable: false
      }
    },
    {
      collection: "saas_affiliate_monthly_stats",
      field: "calculated_at",
      type: "timestamp",
      meta: {
        collection: "saas_affiliate_monthly_stats",
        field: "calculated_at",
        special: null,
        interface: "datetime",
        options: null,
        display: null,
        display_options: null,
        readonly: false,
        hidden: false,
        sort: 11,
        width: "full",
        required: true,
        note: "When these stats were last calculated"
      },
      schema: {
        name: "calculated_at",
        table: "saas_affiliate_monthly_stats",
        data_type: "timestamp with time zone",
        is_nullable: false
      }
    }
  ]
};

// Relationship definition
const affiliateMonthlyStatsAffiliateFieldRelationship = {
  collection: "saas_affiliate_monthly_stats",
  field: "affiliate_id",
  related_collection: "saas_affiliates",
  meta: { sort_field: null },
  schema: { on_delete: "SET NULL" }
};


export { 
  affiliateMonthlyStatsCollection, 
  affiliateMonthlyStatsAffiliateFieldRelationship,
};