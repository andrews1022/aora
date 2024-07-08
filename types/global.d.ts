// for adding className prop to the View and Text components
/// <reference types="nativewind/types" />

// create a new type definition for importing images
declare module "*.png" {
  const value: string;
  export default value;
}
