# Project Enviroments Example

This assumes the existing structure for components in projects.


Each markerfile (app.json, webhooks.json, etc. etc.) would have a
an optional additional property named `environments` that would be an
that would contain properties defined by each component, that can override existing properties
used for production environments.

The `hsproject.json` would also contain the field, but will be an array of strings (this could change). Theoretically, when a developer runs

`hs project upload -env dev`

two different things could happen, depending on the route we take.

1. We just create a new project with the name `project-dev` and upload the project there. We add some an additional context to the build inputs for a target environment, the workers will then parse the config to grab the appropriate env properties.
2. We parse the configs on upload and replace prod values with the appropriate environment values (also create a new project for the env if needed)
