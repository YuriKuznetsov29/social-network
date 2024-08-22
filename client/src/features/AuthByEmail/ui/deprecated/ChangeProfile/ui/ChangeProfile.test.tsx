import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ChangeProfile } from './ChangeProfile'
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'

describe('ChangeProfile.test', () => {
    test('test Formik validation errors', async () => {
        componentRender(<ChangeProfile />)
        const user = userEvent.setup()

        await user.type(screen.getByTestId('firstName'), ' ')
        await user.type(screen.getByTestId('lastName'), ' ')
        await user.type(screen.getByTestId('email'), 'john.deesomeemail.com')
        await user.type(screen.getByTestId('city'), ' ')
        await user.type(screen.getByTestId('date'), 'john.deesomeemail.com')

        await user.click(screen.getByTestId('submit'))

        expect(screen.getByTestId('firstName-error')).toContainHTML('Введите имя')
        expect(screen.getByTestId('lastName-error')).toContainHTML('Введите фамилию')
        expect(screen.getByTestId('email-error')).toContainHTML('Неправильный формат email')
        expect(screen.getByTestId('city-error')).toContainHTML('Введите город')
        expect(screen.getByTestId('date-error')).toContainHTML('Введите дату рождения')
    })

    test('test Formik validation success', async () => {
        componentRender(<ChangeProfile />)
        const user = userEvent.setup()

        await user.type(screen.getByTestId('firstName'), 'john')
        await user.type(screen.getByTestId('lastName'), 'john')
        await user.type(screen.getByTestId('email'), 'john@deesomeemail.com')
        await user.type(screen.getByTestId('city'), 'john')

        await user.click(screen.getByTestId('submit'))

        expect(screen.queryByTestId('firstName-error')).toBeNull()
        expect(screen.queryByTestId('lastName-error')).toBeNull()
        expect(screen.queryByTestId('email-error')).toBeNull()
        expect(screen.queryByTestId('city-error')).toBeNull()
    })
})
