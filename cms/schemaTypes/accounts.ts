import { defineType, defineField } from 'sanity'

export const account = defineType({
  name: 'account',
  title: 'Game Account',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Account Title',
      type: 'string',
      description: 'Keep it highly searchable (e.g., PUBG Global | M416 Glacier Lv. 4)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sku',
      title: 'Internal SKU',
      type: 'string',
      description: 'Your internal tracking ID (e.g., PBG-001)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'uid',
      title: 'In-Game UID',
      type: 'string',
      description: 'The public character ID buyers can use to inspect the account in-game.',
    }),
    defineField({
      name: 'game',
      title: 'Game Category',
      type: 'string',
      options: {
        list: ['PUBG', 'PES', 'Free Fire'],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price (Local Currency / USD)',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Catalog Thumbnail',
      type: 'image',
      options: { hotspot: true },
      description: 'The primary image shown on the main grid.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Image Gallery',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      description: 'Upload all supporting screenshots here (inventory, stats, etc.).',
    }),
    defineField({
      name: 'description',
      title: 'Full Description',
      type: 'text',
      description: 'Detailed paragraph about the account history, specific unlinked social status, etc.',
    }),
    defineField({
      name: 'tags',
      title: 'Search Tags',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Crucial for robust search. Add specific skins, ranks, etc.',
    }),
    defineField({
      name: 'highlights',
      title: 'Key Highlights',
      type: 'array',
      of: [{ type: 'string' }],
      description: '3-4 bullet points describing the best features.',
    }),
  ],
})