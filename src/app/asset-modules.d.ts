/** Bundled image imports. Heft typecheck does not load Vite's client types. */
declare module "*.png" {
  const src: string
  export default src
}

declare module "*.svg" {
  const src: string
  export default src
}
