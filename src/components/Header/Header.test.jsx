import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import Header from "./index"

describe('Header', () => {
    beforeEach(() => {
        render(<Header />)
    })
    it('renders correctly the app title', async () => {
        expect(screen.getByText(/Ridiculands Sunday League/i)).toBeVisible()
    })

    it('renders correctly the app logo', async () => {
        const logo = screen.getByAltText('Ridiculands Sunday League');
        expect(logo).toHaveAttribute('src', './middle-finger.svg')
    })
})