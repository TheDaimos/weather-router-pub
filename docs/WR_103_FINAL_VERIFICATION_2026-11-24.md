# WeatherRouter 1.0.3 – Release verification

Candidate c88b95aae186fd518deeb87d7d3dd90a97b218d9, public test commit 4cd553e0140fe61e32a18b1802db6d46ce06f2ce.

- All 18 Moon tests passed on Python 3.12 and 3.13, including topocentric distance.
- Distribution run [45457608843](https://github.com/TheDaimos/weather-router-dev-pub/actions/runs/45457608843) passed, including 6 OPERA default tests, metadata, syntax, ZIP integrity and forbidden file checks.
- Extended matrix [45457608995](https://github.com/TheDaimos/weather-router-dev-pub/actions/runs/45457608995): 1126 tests, 99 failures, 8 errors. Compared by exact test identifier and failure/error category with [historical run 44699863057](https://github.com/TheDaimos/weather-router-dev-pub/actions/runs/44699863057) (1102 tests): no new failed test identifiers on either Python version. Existing structural and frontend test failures remain; not a fully green matrix.
- Package SHA256: 9d9482a741bc85e2ca008c0855321334fa27b8618b8a05dde2625e57afc69042.
- [Package artifact](https://github.com/TheDaimos/weather-router-dev-pub/actions/runs/45457608843/artifacts/14950067686).
- Operator reports practical Moon verification; full HA fresh install/update/reload/unload/rollback not independently evidenced.
- 1.0.2 is retained as rollback. No tide development. No private Actions. CI remains exclusively in weather-router-dev-pub; the obsolete FINAL-repository workflow is removed in this candidate.

## Release notes

Additive offline lunar phase, illumination, age/cycle, local rise/set and next major phase; coordinate/time and timezone selection; apparent topocentric distance to lunar center, rounded to 1 km (not an accuracy claim). Preserves 1.0.2 sidebar settings and OPERA defaults. No changes to existing weather provider implementations.
