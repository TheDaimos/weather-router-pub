# WeatherRouter · public validation mirror

This repository contains an independently versioned, **source-only validation snapshot** of WeatherRouter. It is not the development source of truth, a production release, or an installable distribution package.

- Source of truth: private development repository.
- Snapshot: WR 0.10.84 DEV / Loader 87.
- Standard-code reference: `1dce2d81b2497da5a05f7e08ce11b3731c1712cd`.
- Public repository history is independent; the private development history is never imported.
- Only explicitly allowlisted standard source, API-contract files, essential validation docs, and test tooling may enter this repository.
- Excludes private extensions, instance exports, local configuration, credentials, archived internal planning, and original binary design assets.
- A successful workflow validates this mirror snapshot. It is **not** a live Home Assistant acceptance test and does not by itself authorize DRA deployment.

The public snapshot intentionally omits binary artwork. Do not install or deploy this checkout as a complete Home Assistant package.

## Validation

```bash
python scripts/verify_m2_structure.py
find custom_components/weather_router/frontend -type f -name '*.js' -print0 | xargs -0 -n1 node --check
```

See the GitHub Actions workflow for the complete source/contract validation gate.
