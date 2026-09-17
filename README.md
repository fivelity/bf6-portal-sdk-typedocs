# BF6 Portal SDK Docs

A community documentation site for the Battlefield 6 Portal SDK, built with VitePress and TypeDoc.

## Local development

Install the project packages, then use the documentation scripts to generate the API reference, preview the site, or build the static output. The generated site is written to `docs/.vitepress/dist`.

## Automation

The scheduled GitHub Actions workflow checks the configured official npm package every hour and can also be started manually. When the package version changes, it archives the current API docs, installs the new package, regenerates TypeDoc Markdown, updates `VERSION` and the changelog, builds VitePress, and publishes the site to GitHub Pages.

Set `SDK_PACKAGE` in the workflow variables if the official package uses a name other than the default `bf6-portal-sdk`. Update the repository URL and `DOCS_BASE` value in the VitePress configuration before publishing.

The guides are maintained by hand. The API directory is generated output and should not be edited manually.
