import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2026-08-11', // Use today's date or the date you created the project
  useCdn: false, // Set to false to ensure we always get the freshest data during development
})