import React from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/material/Badge';


function Nav() {
 
  return (
    <nav
    className="flex justify-between items-center h-16  relative  font-semibold text-violet-600 bg-violet-50  "
    >
      <div 
      className="flex justify-between items-center h-16  relative  gap-4 px-6 "
      >
        <a href="/">Shop</a>
        <a href="/product">Product</a>
        <a href="/cart">About</a>
      </div>
      <div
      className="flex justify-between items-center h-16  relative  gap-4 px-6 text-2xl font-bold "
      >
        <h2>Logo</h2>
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
