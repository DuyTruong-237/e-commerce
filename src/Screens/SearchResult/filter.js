import "./filter.css";
import React from 'react'

export default function filter() {
  return (
    <div class="sorting-bar">
  <ul class="sort-options">
    <li>Relevance</li>
    <li>Latest</li>
    <li>Top Sales</li>
    <li><select>
        <option>price</option>
        <option>Price: High to Low</option>
        <option>Price: Low to High</option>

        
        </select></li>
  </ul>
  <div class="pagination">
    <span>1/17</span>
    <span>&lt;</span>
    <span>&gt;</span>
  </div>
</div>
  )
}
