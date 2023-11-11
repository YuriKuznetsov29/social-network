export function transformText(str: string) {
    return { __html: str.replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + `<br />`) }
}
