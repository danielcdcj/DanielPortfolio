import React from 'react'
import { Link } from 'react-router-dom'

const FilterLink = ({to, children }) => (
  <Link
    to={to}
  >
    {children}
  </Link>
)

export default FilterLink
