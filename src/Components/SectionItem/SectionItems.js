import React from "react";
import './SectionItems.css'
import './SectionSeller.css'

export default function SectionItems() {
    return (
        <section class="stProductCart" role="lists">
            <div class="pdcart" role="listItem">
                <h4 class="sthidden">cart_accessibility_item</h4>
                <div class="inforItemWrap">
                    <div class="cbFirst">
                        <label class="stardust-checkbox">
                            <input class="stardust-checkbox__input" type="checkbox" aria-checked="false" aria-disabled="false" tabindex="0" role="checkbox" aria-label="Click here to select this product" />
                            <div class="stardust-checkbox__box">
                            </div>
                        </label>
                    </div>
                    <div class="productinfo">
                        <div class="pdi1">
                            <a title="Food for Your Pet " href="#" >
                                <img class="img_pdi" src=""></img>
                                </a>
                            <div class="pdi2">
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}