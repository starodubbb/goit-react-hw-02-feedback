export function splitCamelCase(str) {
  return String(str).replace(/([a-z](?=[A-Z]))/g, '$1 ');
}
