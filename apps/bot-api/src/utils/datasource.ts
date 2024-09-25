interface InputField {
  field_name: string;
  field_type: string;
  noun_column: boolean;
  example: string;
  description: string;
}

interface InputTable {
  name: string;
  description?: string;
  fields: InputField[];
  metadata: {
    example_queries: Array<{ input: string; query: string }>;
  };
}

interface InputItem {
  connection_string: string;
  tables: InputTable[];
}

interface OutputSchemaEntry {
  example: string;
  field_name: string;
  description: string;
}

interface OutputItem {
  sheet_id: string;
  sheet_name: string;
  table_name: string;
  noun_columns: string[];
  table_schema: OutputSchemaEntry[];
  example_queries: Array<{ input: string; query: string }>;
  table_description: string | null;
}

function mapFieldsToTableSchema(fields: InputField[]): { tableSchema: OutputSchemaEntry[], nounColumns: string[] } {
  const tableSchema: OutputSchemaEntry[] = [];
  const nounColumns: string[] = [];

  fields.forEach(field => {
    const schemaEntry: OutputSchemaEntry = {
      example: field.example,
      field_name: field.field_name,
      description: field.description
    };

    tableSchema.push(schemaEntry);

    if (field.noun_column) {
      nounColumns.push(field.field_name);
    }
  });

  return { tableSchema, nounColumns };
}

export function transformData(inputData: InputItem[]): OutputItem[] {
  return inputData.map(item => {
    const table = item.tables[0];
    const { tableSchema, nounColumns } = mapFieldsToTableSchema(table.fields);

    return {
      sheet_id: item.connection_string.split('/').pop() ?? '',
      sheet_name: table.name,
      table_name: table.name,
      noun_columns: nounColumns,
      table_schema: tableSchema,
      example_queries: table.metadata.example_queries,
      table_description: table.description ?? null
    };
  });
}
