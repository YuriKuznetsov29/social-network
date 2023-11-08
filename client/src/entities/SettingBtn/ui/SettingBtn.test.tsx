import { fireEvent, screen } from '@testing-library/react'
import { componentRender } from 'shared/lib/tests/componentRender/componentRender'
import { SettingBtn } from './SettingBtn'

describe('SettingBtn', () => {
    test('toggle test', () => {
        componentRender(<SettingBtn />)

        const btn = screen.getByTestId('toggle-btn') // получаем  элемент
        const toggleDiv = screen.getByTestId('toggle-elem') // проверяем отсутствие
        screen.debug()
        expect(toggleDiv).toHaveStyle('display: block')
        fireEvent.click(btn)
        expect(toggleDiv).toHaveStyle('display: flex')
        fireEvent.click(btn)
        expect(toggleDiv).toHaveStyle('display: none')
    })
})
