export const getSize = (size: number): string => {
    if(size >= 1024**3 ) {
        return `${(size / 1024**3).toFixed(1)} GB`
    }

    if(size >= 1024**2) {
        return `${(size / 1024**2).toFixed(1)} MB`
    }

    if(size >= 1024) {
        return `${(size / 1024).toFixed(1)} KB`
    }

    return `${size} B`
}