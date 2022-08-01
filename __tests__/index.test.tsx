import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders a home component', () => {
    render(<Home />)

    const main = screen.getByRole('main')

    expect(main).toBeInTheDocument()
  })
})
