import React from 'react';
import './ShopVoucher.css';

export default function ShopVoucher() {
  return (
    <div className='shopVoucher-Wrapper'>
      <div className='shopVoucher-Title'>
        Shop Voucher Code
      </div>
      <div className='shopVoucher-Content'>
        <div className='voucherTag-Wrapper'>
          <div className='voucherDetail-Wrapper'>
            <div className='voucherDetail'>
              <div>Discount ₫50k</div>
              <div>Minimum Order ₫5tr</div>
              <div>Specific Products</div>
            </div>
            <div className='voucherSave-Btn'>
              Save
            </div>
          </div>
          <div className='voucherDate'>
            Valid from: 04.12.2023
          </div>
        </div>
        <div className='voucherTag-Wrapper'>
          <div className='voucherDetail-Wrapper'>
            <div className='voucherDetail'>
              <div>Discount ₫50k</div>
              <div>Minimum Order ₫5tr</div>
              <div>Specific Products</div>
            </div>
            <div className='voucherSave-Btn'>
              Save
            </div>
          </div>
          <div className='voucherDate'>
            Valid from: 04.12.2023
          </div>
        </div>
        <div className='voucherTag-Wrapper'>
          <div className='voucherDetail-Wrapper'>
            <div className='voucherDetail'>
              <div>Discount ₫50k</div>
              <div>Minimum Order ₫5tr</div>
              <div>Specific Products</div>
            </div>
            <div className='voucherSave-Btn'>
              Save
            </div>
          </div>
          <div className='voucherDate'>
            Valid from: 04.12.2023
          </div>
        </div>
      </div>
    </div>
  );
}
