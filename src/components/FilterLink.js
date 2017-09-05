import React from 'react'
import { Link } from 'react-router-dom'

const FilterLink = ({to, children, className, id }) => (
  <Link
    to={to}
    className={className}
    id={id}
  >
    {children}
  </Link>
)

export default FilterLink
