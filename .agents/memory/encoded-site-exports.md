---
name: Encoded site exports
description: Exported static sites may preserve URL-encoded asset directory names that browsers resolve differently from filesystem paths.
---

When importing a downloaded static-site export, preserve the original encoded assets but also create decoded path aliases for any URL-encoded path segments before serving through Vite.

**Why:** The supplied portfolio export kept `%20` in directory names while the browser requested decoded URL paths, which caused deep-page media to fail even though the files appeared to be present.

**How to apply:** After copying an export into `public/`, compare referenced `/assets/` URLs against decoded filesystem paths and add aliases before visual verification.