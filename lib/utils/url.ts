export const createSlug = (title: string): string => {
    return title
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '') 
        .replace(/\s+/g, '-')     
        .replace(/-+/g, '-')      
        .replace(/^-+|-+$/g, '');  
};

export const encodeTitle = (title: string): string => {
    return encodeURIComponent(title);
};
