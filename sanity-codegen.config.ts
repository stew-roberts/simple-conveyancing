import { SanityCodegenConfig } from 'sanity-codegen';

const config: SanityCodegenConfig = {
    schemaPath: './sanity/schemaTypes/index.ts', // Path to your schema definition
    outputPath: './types/sanity-schema.d.ts', // Output TypeScript file
};

export default config;