import { transformText } from './transformText'

describe('transform text for post', () => {
    test('test transform text', () => {
        expect(
            transformText(`1
                           2
                           3`)
        ).toEqual({
            __html: '1<br />                           2<br />                           3',
        })
    })
})
