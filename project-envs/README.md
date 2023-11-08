# Single Config Per Component - Monorepo Structure

This example plays on the idea of treating the structure of a project as a mono repo. Where certain components
are determined to be `deployables` vs `libraries`. The `deployables` are the top level components that are
deployed to HubSpot. The `libraries` are components that are used by the `deployables` and are not deployed
to HubSpot. `libraries` are what you may think, they are shared bits of code that are used by multiple
`deployables`.

An example of a `deployable` is a CRM card. An example of a `library` is a shared auth component or some shared javascript utilities.

The goal of this idea is to make projects feel similar to other technologies that developers are used to working with.
Such examples in the monorepo space could be:
- [NX](https://nx.dev/)
- [Turbo](https://turbo.build/)
- [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/)



Much of this example is the same as example1 with regards to config.