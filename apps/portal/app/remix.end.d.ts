// remix.env.d.ts
/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/node" />

declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}