import { fireEvent, screen } from '@testing-library/react'
import { componentRender } from 'shared/lib/tests/componentRender/componentRender'
import { SettingBtn } from './SettingBtn'

describe('SettingBtn', () => {
    test('toggle test', () => {
        componentRender(<SettingBtn />)

        const btn = screen.getByTestId('toggle-btn')

        expect(screen.getByTestId('toggle-elem')).toHaveClass('container')
        fireEvent.click(btn)
        expect(screen.getByTestId('toggle-elem')).toHaveClass('container active')
        fireEvent.click(btn)
        expect(screen.getByTestId('toggle-elem')).toHaveClass('container')
    })
})
