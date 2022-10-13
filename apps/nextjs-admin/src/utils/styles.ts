type Styles = (...a: Array<undefined | null | string | boolean>) => string;

export const styles: Styles = (...args) =>
  args
    .flat()
    .filter((x) => x !== null && x !== undefined && typeof x !== 'boolean')
    .join(' ');
