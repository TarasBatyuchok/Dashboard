<template>
    <div>
      <h3 class="text-2xl font-bold text-left py-2">Product List</h3>
      <div class="flex justify-center items-end space-x-2">
        <div class="flex flex-col">
        <label for="name">Name</label>
        <input id="name" type="text" class="border border-gray-500 p-1" v-model="name">
      </div>
      <div class="flex flex-col">
        <label for="">Color</label>
        <input type="text" class="border border-gray-500 p-1" v-model="color">
      </div>
      <div class="flex flex-col ">
        <label for="">Category</label>
        <input type="text" class="border border-gray-500 p-1" v-model="category">
      </div>
      <div class="flex flex-col ">
        <label for="">Price</label>
        <input type="text" class="border border-gray-500 p-1" v-model="price">
      </div>
      <div>
        <button class="bg-gray-600 hover:bg-slate-500 text-white p-1.5" @click="saveData()">Save</button>
      </div>
      </div>
      <div class="overflow-x-auto relative  sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-6">
                Product name
              </th>
              <th scope="col" class="py-3 px-6">
                <div class="flex items-center">
                  Color
                  <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512">
                      <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path>
                    </svg></a>
                </div>
              </th>
              <th scope="col" class="py-3 px-6">
                <div class="flex items-center">
                  Category
                  <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512">
                      <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path>
                    </svg></a>
                </div>
              </th>
              <th scope="col" class="py-3 px-6">
                <div class="flex items-center">
                  Price
                  <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512">
                      <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path>
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" class="py-3 px-6">
                <div class="flex justify-end">
                  Active
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="data in productyObj" :key="data.id">
              <th class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {{ data.name }}
              </th>
              <td class="py-4 px-6">
                {{ data.color }}
              </td>
              <td class="py-4 px-6">
                {{ data.category }}
              </td>
              <td class="py-4 px-6">
                ${{ data.price }}
              </td>
              <td class="py-4 px-6 text-right">
                <a href="#" class="font-medium text-white p-2 bg-blue-500 hover:bg-blue-700 rounded-xl mx-1" @click="getData(data.id)">Edit</a>
                <a href="#" class="font-medium text-white p-2 bg-red-500 hover:bg-red-700 rounded-xl">Delete</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  
    </div>
  </template>
  
  <script>
  export default {
    data(){
      return{
        name:'',
        color:'',
        category: '',
        price: 0,

        productyObj:[
        {
          id:1,
          name:  "Apple MacBook Pro 17",
          color: "silver",
          category: "Laptop",
          price: 2999
        },
        {
          id:2,
          name:  "Hp",
          color: "black",
          category: "Laptop",
          price: 1500
        },
        {
          id:3,
          name:  "Xiomi",
          color: "black",
          category: "Laptop",
          price: 3000
        },
        {
          id:4,
          name:  "Iphone 20",
          color: "gold",
          category: "Phone",
          price: 800
        },
      ]
      }
    },
    methods:{
      getData(id){
        alert(id)
      },
      saveData(){
        const id = this.productyObj.length + 1
        const data ={
          id:id,
          name: this.name,
          color: this.color,
          category: this.category,
          price:this.price,
        }
        this.productyObj.push(data)
        console.log(this.productyObj)
      }
    }
  
  }
  </script>
  
  <style>
  
  </style>