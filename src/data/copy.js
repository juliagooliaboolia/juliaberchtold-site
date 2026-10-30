// Reads src/content/site-copy.yml, the one file that holds every word on the site.
import yaml from 'js-yaml';
import raw from '../content/site-copy.yml?raw';

// YAML's ">" paragraphs end with a newline; trim every string so spacing stays tidy.
const tidy = (v) => (typeof v === 'string' ? v.trim() : Array.isArray(v) ? v.map(tidy) : v && typeof v === 'object' ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, tidy(x)])) : v);

export const COPY = tidy(yaml.load(raw));
