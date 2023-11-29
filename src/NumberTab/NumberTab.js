import "./NumberTab.css"
import React from 'react'

export default function NumberTab() {
  return (
    <div className="NT-body">
      <nav aria-label="Page navigation">
  <ul class="pagination">
    <li><a href="#">&laquo;</a></li>
    <li><a href="#">1</a></li>
    <li><a href="#" class="active">2</a></li>
    <li><a href="#">3</a></li>
    <li><a href="#">4</a></li>
    <li><a href="#">5</a></li>
    <li><a href="#">...</a></li>
    <li><a href="#">&raquo;</a></li>
  </ul>
</nav>
    </div>
  )
}
