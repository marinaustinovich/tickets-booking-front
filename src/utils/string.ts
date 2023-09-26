export const toHeaderCase = (str: string) => {
    return str
        .split(/\s+/)
        .map(word => word.charAt(0).toLocaleUpperCase() + word.slice(1).toLocaleLowerCase())
        .join(' ');
};

export const capitalizeHyphenatedString = (str: string) => {
    return str
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join('-');
};

export const isString = (value: unknown): value is string => typeof value === 'string';