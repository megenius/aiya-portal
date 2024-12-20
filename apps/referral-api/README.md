To install dependencies:
```sh
bun install
```

To run:
```sh
bun run dev
```

open http://localhost:3000



<!-- vector -->
npx wrangler vectorize create sentences_embeddings --dimensions=512 --metric=cosine
npx wrangler vectorize delete sentences_embeddings -f
npx wrangler vectorize create tutorial-index --dimensions=32 --metric=euclidean

npx wrangler vectorize create-metadata-index tutorial-index --property-name=url --type=string

npx wrangler vectorize list-metadata-index tutorial-index

<!-- npx wrangler vectorize create-metadata-index sentences_embeddings --property-name=url --type=string -->
npx wrangler vectorize create-metadata-index sentences_embeddings --property-name=bot_id --type=string
npx wrangler vectorize create-metadata-index sentences_embeddings --property-name=knowledge_id --type=string
npx wrangler vectorize create-metadata-index sentences_embeddings --property-name=intent_id --type=string
npx wrangler vectorize create-metadata-index sentences_embeddings --property-name=text --type=string

npx wrangler queues create sentences-embeddings
