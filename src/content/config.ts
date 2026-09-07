import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const localizedText = z.object({
  zh: z.string().min(1),
  en: z.string().min(1),
});

const localizedUrl = z.object({
  zh: z.url(),
  en: z.url(),
});

const publications = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/publications' }),
  schema: z
    .object({
      title: z.string().min(1),
      venue: z.string().min(1),
      year: z.number().int(),
      publicDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
      status: z.literal('Preprint'),
      featured: z.boolean().default(false),
      order: z.number().int().default(0),
      paperUrl: z.url().optional(),
      publisherUrl: z.url().optional(),
      arxivUrl: z.url().optional(),
      codeUrl: z.url().optional(),
      projectUrl: z.url().optional(),
      demoUrl: z.url().optional(),
    })
    .refine((item) => Boolean(item.paperUrl || item.publisherUrl || item.arxivUrl || item.projectUrl), {
      message: 'A publication needs at least one verifiable public URL.',
    }),
});

const collaborations = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/collaborations' }),
  schema: z.object({
    title: localizedText,
    officialUrl: localizedUrl,
    featured: z.boolean().default(false),
    order: z.number().int().default(0),
  }),
});

export const collections = { publications, collaborations };
