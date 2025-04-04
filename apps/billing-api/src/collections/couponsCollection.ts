// Coupon Collection
const saas_couponsCollection = {
  collection: "saas_coupons",
  meta: {
    collection: "saas_coupons",
    icon: "local_offer",
    note: "Coupon information from Stripe",
    display_template: "{{name}} - {{discount_value}}{{discount_type === 'percentage' ? '%' : ' THB'}}",
    hidden: false,
    singleton: false,
    translations: [
      {
        language: "en-US",
        translation: "Coupons",
      },
      {
        language: "th-TH",
        translation: "คูปอง",
      },
    ],
    sort: 1,
  },
  schema: {
    name: "saas_coupons",
    comment: "Stores coupon data from Stripe",
  },
  fields: [
    {
      collection: "saas_coupons",
      field: "id",
      type: "string",
      meta: {
        collection: "saas_coupons",
        field: "id",
        special: null,
        interface: "input",
        options: null,
        display: null,
        display_options: null,
        readonly: false,
        hidden: false,
        sort: 1,
        width: "full",
        required: true,
        note: "Stripe coupon reference",
      },
      schema: {
        name: "id",
        table: "saas_coupons",
        data_type: "character varying",
        default_value: null,
        max_length: 255,
        is_generated: true,
        is_nullable: false,
        is_unique: true,
        is_primary_key: true,
      },
    },
    {
      collection: "saas_coupons",
      field: "campaign",
      type: "uuid",
      schema: {
        name: "campaign",
        table: "saas_coupons",
        data_type: "uuid",
        default_value: null,
        is_nullable: true,
        is_unique: false,
        foreign_key_schema: "public",
        foreign_key_table: "saas_coupon_campaigns",
        foreign_key_column: "id",
      },
      meta: {
        collection: "saas_coupons",
        field: "campaign",
        special: ["m2o"],
        interface: "select-dropdown-m2o",
        options: {
          template: "{{name}}",
        },
        width: "full",
        required: false,
      },
    },
    {
      collection: "saas_coupons",
      field: "name",
      type: "string",
      meta: {
        collection: "saas_coupons",
        field: "name",
        interface: "input",
        required: true,
        options: null,
        width: "full",
        sort: 2,
      },
      schema: {
        name: "name",
        table: "saas_coupons",
        data_type: "character varying",
        max_length: 255,
        is_nullable: false,
      },
    },
    {
      collection: "saas_coupons",
      field: "code",
      type: "string",
      meta: {
        collection: "saas_coupons",
        field: "code",
        interface: "input",
        required: true,
        options: null,
        width: "full",
        sort: 3,
        note: "Unique coupon code",
      },
      schema: {
        name: "code",
        table: "saas_coupons",
        data_type: "character varying",
        max_length: 50,
        is_nullable: false,
        is_unique: true,
      },
    },
    {
      collection: "saas_coupons",
      field: "discount_type",
      type: "string",
      meta: {
        collection: "saas_coupons",
        field: "discount_type",
        interface: "select-dropdown",
        options: {
          choices: [
            { text: "Percentage", value: "percentage" },
            { text: "Fixed Amount", value: "fixed" },
          ],
        },
        width: "half",
        sort: 4,
        required: true,
      },
      schema: {
        name: "discount_type",
        table: "saas_coupons",
        data_type: "character varying",
        max_length: 50,
        is_nullable: false,
      },
    },
    {
      collection: "saas_coupons",
      field: "discount_value",
      type: "decimal",
      meta: {
        collection: "saas_coupons",
        field: "discount_value",
        interface: "input",
        options: {
          min: 0,
        },
        width: "half",
        sort: 5,
        required: true,
      },
      schema: {
        name: "discount_value",
        table: "saas_coupons",
        data_type: "numeric",
        numeric_precision: 10,
        numeric_scale: 2,
        is_nullable: false,
      },
    },
    {
      collection: "saas_coupons",
      field: "currency",
      type: "string",
      meta: {
        collection: "saas_coupons",
        field: "currency",
        interface: "input",
        options: null,
        width: "half",
        sort: 6,
        required: false,
        note: "Required for fixed amount discounts",
      },
      schema: {
        name: "currency",
        table: "saas_coupons",
        data_type: "character varying",
        default_value: "thb",
        max_length: 3,
        is_nullable: true,
      },
    },
    {
      collection: "saas_coupons",
      field: "status",
      type: "string",
      meta: {
        collection: "saas_coupons",
        field: "status",
        interface: "select-dropdown",
        options: {
          choices: [
            { text: "Active", value: "active" },
            { text: "Inactive", value: "inactive" },
            { text: "Expired", value: "expired" },
          ],
        },
        width: "half",
        sort: 7,
        required: true,
      },
      schema: {
        name: "status",
        table: "saas_coupons",
        data_type: "character varying",
        default_value: "active",
        max_length: 50,
        is_nullable: false,
      },
    },
    {
      collection: "saas_coupons",
      field: "start_date",
      type: "timestamp",
      meta: {
        collection: "saas_coupons",
        field: "start_date",
        interface: "datetime",
        width: "half",
        sort: 8,
        required: true,
      },
      schema: {
        name: "start_date",
        table: "saas_coupons",
        data_type: "timestamp with time zone",
        is_nullable: false,
      },
    },
    {
      collection: "saas_coupons",
      field: "end_date",
      type: "timestamp",
      meta: {
        collection: "saas_coupons",
        field: "end_date",
        interface: "datetime",
        width: "half",
        sort: 9,
        required: false,
      },
      schema: {
        name: "end_date",
        table: "saas_coupons",
        data_type: "timestamp with time zone",
        is_nullable: true,
      },
    },
    {
      collection: "saas_coupons",
      field: "max_redemptions",
      type: "integer",
      meta: {
        collection: "saas_coupons",
        field: "max_redemptions",
        interface: "input",
        options: {
          min: 0,
        },
        width: "half",
        sort: 10,
        required: false,
        note: "Maximum number of times this coupon can be redeemed",
      },
      schema: {
        name: "max_redemptions",
        table: "saas_coupons",
        data_type: "integer",
        is_nullable: true,
      },
    },
    {
      collection: "saas_coupons",
      field: "times_redeemed",
      type: "integer",
      meta: {
        collection: "saas_coupons",
        field: "times_redeemed",
        interface: "input",
        options: {
          min: 0,
        },
        readonly: true,
        width: "half",
        sort: 11,
        required: true,
      },
      schema: {
        name: "times_redeemed",
        table: "saas_coupons",
        data_type: "integer",
        default_value: 0,
        is_nullable: false,
      },
    },
    {
      collection: "saas_coupons",
      field: "metadata",
      type: "json",
      meta: {
        collection: "saas_coupons",
        field: "metadata",
        interface: "input-code",
        options: {
          language: "json",
        },
        width: "full",
        sort: 12,
        required: false,
      },
      schema: {
        name: "metadata",
        table: "saas_coupons",
        data_type: "jsonb",
        is_nullable: true,
      },
    },
  ],
};

// Campaign Collection
const saas_coupon_campaignsCollection = {
  collection: "saas_coupon_campaigns",
  meta: {
    collection: "saas_coupon_campaigns",
    icon: "campaign",
    note: "Marketing campaigns for coupons",
    display_template: "{{name}}",
    hidden: false,
    singleton: false,
    translations: [
      {
        language: "en-US",
        translation: "Coupon Campaigns",
      },
      {
        language: "th-TH",
        translation: "แคมเปญคูปอง",
      },
    ],
    sort: 2,
  },
  schema: {
    name: "saas_coupon_campaigns",
    comment: "Stores coupon campaign information",
  },
  fields: [
    {
      collection: "saas_coupon_campaigns",
      field: "id",
      type: "uuid",
      meta: {
        collection: "saas_coupon_campaigns",
        field: "id",
        special: ["uuid"],
        interface: "input",
        readonly: true,
        hidden: true,
        width: "full",
        sort: 1,
        required: true,
      },
      schema: {
        name: "id",
        table: "saas_coupon_campaigns",
        data_type: "uuid",
        is_primary_key: true,
        has_auto_increment: false,
        is_generated: false,
      },
    },
    {
      collection: "saas_coupon_campaigns",
      field: "name",
      type: "string",
      meta: {
        collection: "saas_coupon_campaigns",
        field: "name",
        interface: "input",
        width: "full",
        sort: 2,
        required: true,
      },
      schema: {
        name: "name",
        table: "saas_coupon_campaigns",
        data_type: "character varying",
        max_length: 255,
        is_nullable: false,
      },
    },
    {
      collection: "saas_coupon_campaigns",
      field: "description",
      type: "text",
      meta: {
        collection: "saas_coupon_campaigns",
        field: "description",
        interface: "input-multiline",
        width: "full",
        sort: 3,
        required: false,
      },
      schema: {
        name: "description",
        table: "saas_coupon_campaigns",
        data_type: "text",
        is_nullable: true,
      },
    },
    {
      collection: "saas_coupon_campaigns",
      field: "start_date",
      type: "timestamp",
      meta: {
        collection: "saas_coupon_campaigns",
        field: "start_date",
        interface: "datetime",
        width: "half",
        sort: 4,
        required: true,
      },
      schema: {
        name: "start_date",
        table: "saas_coupon_campaigns",
        data_type: "timestamp with time zone",
        is_nullable: false,
      },
    },
    {
      collection: "saas_coupon_campaigns",
      field: "end_date",
      type: "timestamp",
      meta: {
        collection: "saas_coupon_campaigns",
        field: "end_date",
        interface: "datetime",
        width: "half",
        sort: 5,
        required: true,
      },
      schema: {
        name: "end_date",
        table: "saas_coupon_campaigns",
        data_type: "timestamp with time zone",
        is_nullable: false,
      },
    },
    {
      collection: "saas_coupon_campaigns",
      field: "status",
      type: "string",
      meta: {
        collection: "saas_coupon_campaigns",
        field: "status",
        interface: "select-dropdown",
        options: {
          choices: [
            { text: "Draft", value: "draft" },
            { text: "Active", value: "active" },
            { text: "Ended", value: "ended" },
          ],
        },
        width: "half",
        sort: 6,
        required: true,
      },
      schema: {
        name: "status",
        table: "saas_coupon_campaigns",
        data_type: "character varying",
        default_value: "draft",
        max_length: 50,
        is_nullable: false,
      },
    },
  ],
};

// Relationships
const saas_couponsCampaignFieldRelationships = {
  collection: "saas_coupons",
  field: "campaign",
  related_collection: "saas_coupon_campaigns",
  meta: { sort_field: null },
  schema: {
    table: "saas_coupons",
    column: "campaign",
    foreign_key_schema: "public",
    foreign_key_table: "saas_coupon_campaigns",
    foreign_key_column: "id",
    on_update: "NO ACTION",
    on_delete: "SET NULL",
  },
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
    }
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
    }
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
    }
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
    }
  }
];

// Add tracking fields to saas_coupons collection
const saas_couponsWithTracking = {
  ...saas_couponsCollection,
  fields: [
    ...saas_couponsCollection.fields,
    ...trackingFields.map(field => ({
      ...field,
      collection: "saas_coupons"
    }))
  ]
};

// Add tracking fields to saas_coupon_campaigns collection
const saas_coupon_campaignsWithTracking = {
  ...saas_coupon_campaignsCollection,
  fields: [
    ...saas_coupon_campaignsCollection.fields,
    ...trackingFields.map(field => ({
      ...field,
      collection: "saas_coupon_campaigns"
    }))
  ]
};

export {
  saas_couponsWithTracking,
  saas_coupon_campaignsWithTracking,
  saas_couponsCampaignFieldRelationships
};