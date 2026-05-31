import { notion } from "./notion";

export async function getJourneyEntries() {
  const response = await notion.dataSources.query({
    data_source_id: process.env.NOTION_JOURNEY_DATABASE_ID!,
  });

  return response.results;
}