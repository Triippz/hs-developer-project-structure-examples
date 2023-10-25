# HubSpot-Project-POC
A poc project with new config + structure

## Structure overview

### Components
This project contains:
- An Auth component that defines an app
  - Including this component in your project will generate a private app in HubSpot
- Two CRM card components
  - These components both require auth, which is specified in the component config
- Two serverless function components
  - This component also requires auth, which is specified in the component config
- A CMS JS Rendering component

### Notable structure characteristics
- Components are able to share code via the `imports` field. This enables components to define internal import paths for external files.
  - Currently being used by the "My POC project card 1" and "My POC project function" components

### hscomponent.json config
Users create project components using the standardizes hscomponent.json configuration file. The supported fields in the config are...
- **type:** `(string)` The type of this component
- **label:** `(string)` The user-friendly label for this component
- **uid:** `(string)` The uid of this component
- **auth:** `(string)` The uid of the auth component that we want to link
- **imports:** `(array[relative_path: string])` Import mappings that allow files within this component to access files outside of the component (following [node subpath import pattern](https://nodejs.org/api/packages.html#subpath-imports))
  - It is required that these imports begin with `#` so we can differentiate from external packages
  - **Q:** Should we allow the relative_paths to point to files in other components?
  - **Q:** Should we allow the relative_paths to point to folders, or just files?
- **data:** `(object)` Any component-specific config options
