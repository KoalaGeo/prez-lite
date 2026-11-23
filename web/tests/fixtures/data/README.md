# Test fixture data

A copy of prez-lite's original demo vocabularies and config, laid out like
the repo's `data/` directory. Tests use these instead of `data/`, so a site's
own vocabularies (for example a fork that replaces the demo data) can't break
them.

- `web/tests/integration/pipeline-roundtrip.test.ts` reads `vocabs/colours.ttl`
  and `config/profiles.ttl` directly.
- The e2e job in `.github/workflows/test.yml` builds its exports from this
  directory. The values asserted in `web/tests/e2e/helpers/fixtures.ts` come
  from these files.

To run the e2e suite locally against the same data, build the exports from
here first: `rm -rf data && cp -r web/tests/fixtures/data data && pnpm build:all-export`.
Restore your data afterwards with `git checkout -- data`.
