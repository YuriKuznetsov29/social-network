import { fireEvent, screen } from '@testing-library/react'
import { componentRender } from 'shared/lib/tests/componentRender/componentRender'
import userEvent from '@testing-library/user-event'
import { Avatar } from './Avatar'

describe('Avatar', () => {
    test('test render', () => {
        componentRender(<Avatar />)

        expect(screen.getByTestId('avatar')).toBeInTheDocument()
    })

    test('test render with avatarPath', () => {
        componentRender(<Avatar avatarPath="123" />)

        expect(screen.getByTestId('user-avatar')).toBeInTheDocument()
    })

    // test('test increment', () => {
    //     componentRender(<Avatar avatarPath="123" />)

    //     userEvent.click(screen.getByTestId('user-avatar'))
    //     expect(screen.getByTestId('avatar-modal')).toBeInTheDocument()
    // })

    // test('test decrement', () => {
    //     componentRender(<Counter />, {
    //         initialState: {
    //             counter: {
    //                 value: 10,
    //             },
    //         },
    //     })

    //     userEvent.click(screen.getByTestId('decrement-btn'))
    //     expect(screen.getByTestId('value-title')).toHaveTextContent('9')
    // })
})
