import { screen, render } from '@testing-library/react'
import { MemoryRouter, Route, Switch } from 'react-router-dom'
import Routes from './Routes'
import ClientListView from '../../views/ClientListView/ClientListView'

it('properly renders the Routes component', () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/']}>
      <Switch>
        <Route path='/clients'>
          <ClientListView />
        </Route>
      </Switch>
    </MemoryRouter>
  )
  expect(container).toMatchSnapshot()
})