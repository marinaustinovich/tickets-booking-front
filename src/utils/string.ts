export const toHeaderCase = (str: string) => {
    return str
        .split(/\s+/)
        .map(word => word.charAt(0).toLocaleUpperCase() + word.slice(1).toLocaleLowerCase())
        .join(' ');
};
