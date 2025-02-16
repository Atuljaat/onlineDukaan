import { useState } from "react";
    async function getProfuctsInfo () {
       try {
        //  let data = await fetch('https://fakestoreapi.com/products');
        let data = await fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=32')
         if (data) {
             let jsonData = await data.json();
             return jsonData
         }
       } catch (error) {
            throw error
       }
    }

export default getProfuctsInfo