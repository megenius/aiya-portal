const saas_customersCollection = {
  collection: "saas_customers",
  meta: {
    collection: "saas_customers",
    icon: "people",
    note: "Customer information from Stripe",
    display_template: "{{company_name}} - {{tax_id}}",
    hidden: false,
    singleton: false,
    translations: [
      {
        language: "en-US",
        translation: "Customers"
      },
      {
        language: "th-TH",
        translation: "ข้อมูลลูกค้า"
      }
    ],
    sort: 1
  },
  schema: {
    name: "saas_customers",
    comment: "Stores customer data from Stripe"
  },
  fields: [
    {
      collection: "saas_customers",
      field: "id",
      type: "uuid",
      meta: {
        collection: "saas_customers",
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
        table: "saas_customers",
        data_type: "uuid",
        is_generated: true,
        is_nullable: false,
        is_unique: true,
        is_primary_key: true
      }
    },
    {
      collection: "saas_customers",
      field: "user_id",
      type: "uuid",
      schema: {
        name: "user_id",
        table: "saas_customers",
        data_type: "uuid",
        is_nullable: false,
        foreign_key_schema: "public",
        foreign_key_table: "directus_users",
        foreign_key_column: "id"
      },
      meta: {
        collection: "saas_customers",
        field: "user_id",
        special: ["m2o"],
        interface: "select-dropdown-m2o",
        options: {
          template: "{{first_name}} {{last_name}}"
        },
        width: "full",
        sort: 2,
        required: true
      }
    },
    {
      collection: "saas_customers",
      field: "stripe_customer_id",
      type: "string",
      meta: {
        collection: "saas_customers",
        field: "stripe_customer_id",
        interface: "input",
        width: "full",
        sort: 3,
        required: true,
        note: "Stripe customer reference"
      },
      schema: {
        name: "stripe_customer_id",
        table: "saas_customers",
        data_type: "character varying",
        max_length: 255,
        is_nullable: false
      }
    },
    {
      collection: "saas_customers",
      field: "company_name",
      type: "string",
      meta: {
        collection: "saas_customers",
        field: "company_name",
        interface: "input",
        width: "full",
        sort: 4,
        required: true
      },
      schema: {
        name: "company_name",
        table: "saas_customers",
        data_type: "character varying",
        max_length: 255,
        is_nullable: false
      }
    },
    {
      collection: "saas_customers",
      field: "email",
      type: "string",
      meta: {
        collection: "saas_customers",
        field: "email",
        interface: "input",
        options: {
          trim: true
        },
        width: "full",
        sort: 5,
        required: true
      },
      schema: {
        name: "email",
        table: "saas_customers",
        data_type: "character varying",
        max_length: 255,
        is_nullable: false
      }
    },
    {
      collection: "saas_customers",
      field: "phone",
      type: "string",
      meta: {
        collection: "saas_customers",
        field: "phone",
        interface: "input",
        width: "full",
        sort: 6,
        required: true
      },
      schema: {
        name: "phone",
        table: "saas_customers",
        data_type: "character varying",
        max_length: 20,
        is_nullable: false
      }
    },
    {
      collection: "saas_customers",
      field: "tax_id",
      type: "string",
      meta: {
        collection: "saas_customers",
        field: "tax_id",
        interface: "input",
        width: "full",
        sort: 7,
        required: true,
        note: "VAT ID or Tax ID"
      },
      schema: {
        name: "tax_id",
        table: "saas_customers",
        data_type: "character varying",
        max_length: 20,
        is_nullable: false
      }
    },
    {
      collection: "saas_customers", 
      field: "tax_type",
      type: "string",
      meta: {
        collection: "saas_customers",
        field: "tax_type",
        interface: "select-dropdown",
        options: {
          choices: [
            { text: "Thai VAT", value: "th_vat" }
          ]
        },
        width: "full",
        sort: 8,
        required: true
      },
      schema: {
        name: "tax_type",
        table: "saas_customers",
        data_type: "character varying",
        max_length: 20,
        is_nullable: false
      }
    },
    {
      collection: "saas_customers",
      field: "address_line1",
      type: "string",
      meta: {
        collection: "saas_customers",
        field: "address_line1",
        interface: "input",
        width: "full",
        sort: 9,
        required: true
      },
      schema: {
        name: "address_line1",
        table: "saas_customers",
        data_type: "character varying", 
        max_length: 500,
        is_nullable: false
      }
    },
    {
      collection: "saas_customers",
      field: "address_line2",
      type: "string",
      meta: {
        collection: "saas_customers",
        field: "address_line2",
        interface: "input",
        width: "full",
        sort: 10,
        required: false
      },
      schema: {
        name: "address_line2",
        table: "saas_customers",
        data_type: "character varying",
        max_length: 500,
        is_nullable: true
      }
    },
    {
      collection: "saas_customers",
      field: "city",
      type: "string", 
      meta: {
        collection: "saas_customers",
        field: "city",
        interface: "input",
        width: "half",
        sort: 11,
        required: true
      },
      schema: {
        name: "city",
        table: "saas_customers",  
        data_type: "character varying",
        max_length: 100,
        is_nullable: false
      }
    },
    {
      collection: "saas_customers",
      field: "state",
      type: "string",
      meta: {
        collection: "saas_customers", 
        field: "state",
        interface: "input",
        width: "half",
        sort: 12,
        required: true
      },
      schema: {
        name: "state",
        table: "saas_customers",
        data_type: "character varying",
        max_length: 100,
        is_nullable: false
      }
    },
    {
      collection: "saas_customers",
      field: "postal_code",
      type: "string",
      meta: {
        collection: "saas_customers",
        field: "postal_code", 
        interface: "input",
        width: "half",
        sort: 13,
        required: true
      },
      schema: {
        name: "postal_code",
        table: "saas_customers",
        data_type: "character varying",
        max_length: 20,
        is_nullable: false
      }
    },
    {
      collection: "saas_customers",
      field: "country",
      type: "string",
      meta: {
        collection: "saas_customers",
        field: "country",
        interface: "input",
        width: "half",
        sort: 14,
        required: true,
        default: "TH"
      },
      schema: {
        name: "country",
        table: "saas_customers",
        data_type: "character varying", 
        max_length: 2,
        is_nullable: false,
        default_value: "TH"
      }
    },
    {
      collection: "saas_customers",
      field: "metadata",
      type: "json",
      meta: {
        collection: "saas_customers",
        field: "metadata",
        interface: "input-code",
        options: {
          language: "json"
        },
        width: "full",
        sort: 15,
        required: false
      },
      schema: {
        name: "metadata",
        table: "saas_customers",
        data_type: "jsonb",
        is_nullable: true
      }
    }
  ]
};

// Relationship definition
const saas_customersUserFieldRelationship = {
  collection: "saas_customers",
  field: "user_id",
  related_collection: "directus_users",
  meta: { sort_field: null },
  schema: { on_delete: "SET NULL" }
};

export { saas_customersCollection, saas_customersUserFieldRelationship };