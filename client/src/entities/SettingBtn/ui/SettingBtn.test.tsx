import { fireEvent, screen } from '@testing-library/react'
import { componentRender } from 'shared/lib/tests/componentRender/componentRender'
import { SettingBtn } from './SettingBtn'

// describe('SettingBtn', () => {
//     test('toggle test', () => {
//         componentRender(<SettingBtn />)

//         const btn = screen.getByTestId('toggle-btn')
//         const toggleDiv = screen.getByTestId('toggle-elem')
//         screen.debug()
//         expect(screen.getByTestId('toggle-elem')).toHaveStyle('width: 250px')
//         // expect(toggleDiv).toBeVisible()
//         fireEvent.click(btn)
//         expect(screen.getByTestId('toggle-elem')).toHaveStyle('display: flex')
//         // expect(toggleDiv).toBeVisible()
//         fireEvent.click(btn)
//         expect(screen.getByTestId('toggle-elem')).toHaveStyle('display: none')
//         // expect(toggleDiv).toBeVisible()
//     })
// })
