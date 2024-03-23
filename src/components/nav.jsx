import React from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/material/Badge';


function Nav() {
 
  return (
    <nav
    className="flex justify-between items-center h-16  relative  font-semibold text-violet-600 bg-violet-50  "
    >
      <div 
      className="flex justify-between items-center h-16  relative  gap-1 px-6 "
      >
        <a className="hover:bg-violet-100 px-2 py-[2px] rounded-sm" href="/">Shop</a>
        <a className="hover:bg-violet-100  px-2 py-[2px] rounded-sm" href="/product">Product</a>
        <a className="hover:bg-violet-100  px-2 py-[2px] rounded-sm" href="/cart">About</a>
      </div>
      <div
      className="flex justify-between items-center h-16  relative  gap-4 px-6 text-2xl font-bold "
      >
        <h2>
          <a href="/">Logo</a>
        </h2>
      </div>
      <div 
      className="flex justify-between items-center h-16  relative  gap-4 px-6"
      >

        <span>
        <a href="/cart">
          <Badge badgeContent={4} color="secondary" max={10}>
            <AddShoppingCartIcon  />
         
          </Badge>
          </a>
        </span>
        <a href="/account">My Account</a>
      </div>
    </nav>
  );
}

export default Nav;
