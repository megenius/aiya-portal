export function transformData(inputData: any) {
  return inputData.map((item: any) => {
    const table = item.tables[0];
    if (table) {
      return {
        id: item.id,
        sheet_id: item.connection_string.split("/").pop(),
        sheet_name: table.name,
        table_name: table.name,
        table_schema: table.fields?.map((field: any) => ({
          example: field.example,
          field_name: field.name,
          field_type: field.map_type,
          is_noun: field.is_noun,
          description: field.description,
        })),
        example_queries: table.metadata?.example_queries,
        table_description: table.description,
        instructions: table.instructions,
      };
    }
    return {};
  });
}
