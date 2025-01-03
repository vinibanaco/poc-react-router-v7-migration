import App from "./App";

export default function Component() {
  // While the app is not fully migrated the catchall will be the whole "legacy App".
  // When a page is migrated it'll be removed from the legacy and turned into a route
  // component.
  // The actual "not found" page will continue to be the one from the legacy App.
  return <App />;
}
