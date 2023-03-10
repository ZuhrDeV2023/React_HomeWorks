import React from 'react'

import '../styles/form.scss'
import '../styles/container.scss'

function form() {
  return (
    <form action="POST" method="get" class="form-example">
            <div class="box-text-form container">
                <h2 class="title-form">
                    Buyurtma berish
                </h2>
                <p class="text-form">
                    Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget <br />sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar
                </p>
            </div>
            <div class="box-form ">
                <input type="text" name="name" placeholder="Ismingiz" alt="name user" class="input-info-box" />
                <input type="text" name="number" placeholder="Telefon raqamingiz" alt="name user" class="input-info-box" required />
                <select aria-label="State" class="input-info-box input-end" name="Xizmatturi" id="#">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="" >3</option>
                </select>
                <div class="box-buttun-form">
                    <a href="#" class="form-link-bottom">Buyurtma berish</a>
                </div>
            </div>
    </form>
  )
}

export default form