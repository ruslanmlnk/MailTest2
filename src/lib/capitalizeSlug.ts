export function capitalizeSlug(slug: string){
    return slug?.split("-").join(" ").charAt(0).toLocaleUpperCase() + slug?.split("-").join(" ").slice(1)
}