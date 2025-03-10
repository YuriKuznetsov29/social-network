import sanitizeHtml from 'sanitize-html';
export function transformText(str: string) {
    return { __html: sanitizeHtml(str.replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + `<br />`)) }
}
